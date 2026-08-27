import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { FavoritoService } from '../../Services/favorito.services';
import { Character } from '../../Models/persona.model';
import { DetalleComponent } from '../Detalles-personas/detalle';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class FavoritosComponent {
  favoritoService = inject(FavoritoService);
  private dialog = inject(MatDialog);

  //Evento para volver al inicio
  @Output() volver = new EventEmitter<void>();

  verDetalles(personaje: Character) {
    this.dialog.open(DetalleComponent, { data: personaje });
  }

  toggleFav(personaje: Character) {
    this.favoritoService.toggleFavorito(personaje);
  }

  regresar() {
    this.volver.emit();
  }
}
