import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PersonasService } from '../../Services/persona.services';
import { Character } from '../../Models/persona.model';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './personas.html',
  styleUrl: './personas.css'
})
export class PersonasComponent implements OnInit {
  private personasService = inject(PersonasService);

  personajes = signal<Character[]>([]);

  busqueda = signal<string>('');
  filtroEstado = signal<string>('');
  filtroEspecie = signal<string>('');

  personajesFiltrados = computed(() => {
    const texto = this.busqueda().toLowerCase();
    const estado = this.filtroEstado();
    const especie = this.filtroEspecie();

    return this.personajes().filter(personaje => {
      const coincideNombreOID = personaje.name.toLowerCase().includes(texto) || 
                                personaje.id.toString() === texto;
      
      const coincideEstado = estado === '' || personaje.status === estado;
      const coincideEspecie = especie === '' || personaje.species === especie;

      return coincideNombreOID && coincideEstado && coincideEspecie;
    });
  });

  ngOnInit(): void {
    this.personasService.getPersonajes().subscribe({
      next: (data: any) => this.personajes.set(data.results),
      error: (err) => console.error('Error al cargar personajes:', err)
    });
  }
}
