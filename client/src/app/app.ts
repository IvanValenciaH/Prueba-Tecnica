import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PersonasComponent } from './Components/Personas/personas';
import { FavoritosComponent } from './Components/Favoritos/favoritos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    PersonasComponent, 
    FavoritosComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  vistaActual = signal<'inicio' | 'favoritos'>('inicio');

  cambiarVista(vista: 'inicio' | 'favoritos') {
    this.vistaActual.set(vista);
  }
}