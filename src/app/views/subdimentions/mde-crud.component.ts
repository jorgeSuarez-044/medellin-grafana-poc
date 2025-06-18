import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';

interface DimensionConfig {
  activa: boolean;
  dimension: string;
  subdimension: string;
  rol: string;
}

interface ApiPayload {
  rol: string;
  config: {
    dimension: string;
    subdimension: string;
    activa: boolean;
  }[];
}

@Component({
  selector: 'app-mde-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './mde-crud.component.html',
  styleUrls: ['./mde-crud.component.scss'],
})
export class MdeCrudComponent implements OnInit {
  readonly baseUrl = 'https://www.medellin.gov.co/flask-fiware/api/keycloak';
  
  isLoading = false;
  configuraciones: DimensionConfig[] = [];
  configuracionesFiltradas: DimensionConfig[] = [];
  p: number = 1;
  itemsPerPage: number = 10;
  
  // Filtros
  selectedDimension: string = '';
  searchTerm: string = '';
  
  // Listas únicas para filtros
  dimensions: string[] = [];
  subdimensions: string[] = [];
  selectedTipoAcceso: string = '';

  constructor() {}

  ngOnInit(): void {
    this.loadConfigurations();
  }

  get currentPageRange(): string {
    const start = (this.p - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.p * this.itemsPerPage, this.configuracionesFiltradas.length);
    return `${start} a ${end}`;
  }

  get totalItems(): number {
    return this.configuracionesFiltradas.length;
  }

  async loadConfigurations(): Promise<void> {
    const token = localStorage.getItem('access_tokenadmin');
    if (!token) {
      this.showError('Error', 'No se encontró token de acceso admin');
      return;
    }

    this.isLoading = true;
    
    try {
      const response = await fetch(`${this.baseUrl}/userinfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: DimensionConfig[] = await response.json();
      
      if (Array.isArray(data)) {
        this.configuraciones = data;
        this.configuracionesFiltradas = [...data];
        this.updateFilterLists();
        this.applyFilters();
      } else {
        this.showError('Error', 'Formato de datos incorrecto');
      }
    } catch (error: unknown) {
      this.handleApiError('Error al cargar configuraciones', error);
    } finally {
      this.isLoading = false;
    }
  }

  updateFilterLists(): void {
    this.dimensions = [...new Set(this.configuraciones.map(item => item.dimension))];
    this.subdimensions = [...new Set(this.configuraciones.map(item => item.subdimension))];
  }
applyFilters(): void {
  this.configuracionesFiltradas = this.configuraciones.filter(item => {
    const matchesDimension = !this.selectedDimension || item.dimension === this.selectedDimension;
    const matchesSearch = !this.searchTerm || 
      item.dimension.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      item.subdimension.toLowerCase().includes(this.searchTerm.toLowerCase());
    const matchesRol = !this.selectedTipoAcceso || item.rol === this.selectedTipoAcceso;
    
    return matchesDimension && matchesSearch && matchesRol;
  });
  this.p = 1;
}

  async toggleActivation(config: DimensionConfig): Promise<void> {
    if (!this.selectedTipoAcceso) {
      this.showError('Error', 'Seleccione un tipo de acceso primero');
      return;
    }

    const nuevoEstado = !config.activa;
    
    try {
      await this.updateConfiguration(config, nuevoEstado);
    } catch (error) {
      console.error('Error:', error);
    }
  }

 async updateConfiguration(config: DimensionConfig, nuevoEstado: boolean): Promise<void> {
  const token = localStorage.getItem('access_tokenadmin');
  if (!token) {
    this.showError('Error', 'No se encontró token de acceso admin');
    return;
  }

  this.isLoading = true;
  
  try {
    const payload: ApiPayload = {
      rol: this.selectedTipoAcceso,
      config: [{
        dimension: config.dimension,
        subdimension: config.subdimension,
        activa: nuevoEstado
      }]
    };

    const response = await fetch(`${this.baseUrl}/userinfo`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await Swal.fire({
      icon: 'success',
      title: 'Configuración actualizada',
      text: `El estado de ${config.dimension} - ${config.subdimension} ha sido modificado a ${nuevoEstado ? 'activo' : 'inactivo'} como ${this.selectedTipoAcceso}.`,
      confirmButtonText: 'Entendido'
    });
    
    // Recargamos las configuraciones después de la actualización
    await this.loadConfigurations();
    
  } catch (error: unknown) {
    this.handleApiError('Error al actualizar configuración. Usuario no cuenta con los permisos para hacer esta acción', error);
  } finally {
    this.isLoading = false;
  }
}
  private handleApiError(title: string, error: unknown): void {
    let errorMessage = 'Ocurrió un error inesperado';
    
    if (typeof error === 'string') {
      errorMessage = error;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null) {
      const err = error as { error?: any; message?: string; status?: number };
      
      if (err.error) {
        errorMessage = typeof err.error === 'string' 
          ? err.error 
          : JSON.stringify(err.error, null, 2);
      } else if (err.message) {
        errorMessage = err.message;
      }
    }

    this.showError(title, errorMessage);
  }

  private showError(title: string, message: string): void {
    Swal.fire({
      icon: 'error',
      title: title,
      html: `<div class="error-message">
               <p>${message}</p>
             </div>`,
      confirmButtonColor: '#3085d6',
      width: '700px'
    });
  }
}