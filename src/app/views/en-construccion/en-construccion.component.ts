import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-en-construccion',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importa RouterLink para usar routerLink
  templateUrl: './en-construccion.component.html',
  styleUrls: ['./en-construccion.component.scss']
})
export class EnConstruccionComponent {}