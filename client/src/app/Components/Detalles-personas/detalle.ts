import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../../Models/persona.model';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class DetalleComponent {
  //Recibe la información del personaje seleccionado
  data: Character = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<DetalleComponent>);

  cerrar() {
    this.dialogRef.close();
  }
}
