import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../Models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://rick-morty-bk.onrender.com/api/favoritos';

  //Signal para mantener la lista de favoritos sincronizada
  favoritos = signal<Character[]>([]);

  constructor() {
    //Al iniciar el servicio se trae los datos directo de MongoDB
    this.cargarFavoritos();
  }

  //Obtener favoritos desde la API en MongoDB
  cargarFavoritos() {
    this.http.get<Character[]>(this.apiUrl).subscribe({
      next: (datos) => this.favoritos.set(datos),
      error: (err) => console.error('Error al cargar favoritos desde MongoDB:', err)
    });
  }

  //Agregar o Quitar Favorito usando la API
  toggleFavorito(personaje: Character) {
    const existe = this.esFavorito(personaje.id);

    if (existe) {
      //Eliminar en la base de datos
      this.http.delete(`${this.apiUrl}/${personaje.id}`).subscribe({
        next: () => {
          this.favoritos.update(lista => lista.filter(p => p.id !== personaje.id));
          personaje.esFavorito = false;
        },
        error: (err) => console.error('Error al eliminar de MongoDB:', err)
      });
    } else {
      //Guardar en la base de datos
      this.http.post(this.apiUrl, personaje).subscribe({
        next: () => {
          this.favoritos.update(lista => [...lista, { ...personaje, esFavorito: true }]);
          personaje.esFavorito = true;
        },
        error: (err) => console.error('Error al guardar en MongoDB:', err)
      });
    }
  }

  esFavorito(id: number): boolean {
    return this.favoritos().some(p => p.id === id);
  }
}
