import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule , Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule ,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    constructor(private router: Router) {
      
    }
 irAPerfil(): void {
    this.router.navigate(['perfil/usuarios']);
  }
}
