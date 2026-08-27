import { Injectable, signal } from '@angular/core';
import { Character } from '../Models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  //Inicializamos la señal leyendo de localStorage si ya existen datos guardados
  favoritos = signal<Character[]>(this.obtenerFavoritosGuardados());

  //Lee los favoritos de localStorage (si no hay nada, retorna lista vacía [])
  private obtenerFavoritosGuardados(): Character[] {
    const datos = localStorage.getItem('favoritos_rick_morty');
    return datos ? JSON.parse(datos) : [];
  }

  //Guarda la lista actualizada en localStorage
  private guardarEnLocalStorage(lista: Character[]) {
    localStorage.setItem('favoritos_rick_morty', JSON.stringify(lista));
  }

  toggleFavorito(personaje: Character) {
    const existe = this.favoritos().some(p => p.id === personaje.id);
    let listaActualizada: Character[];

    if (existe) {
      //Quitar de favoritos
      listaActualizada = this.favoritos().filter(p => p.id !== personaje.id);
      personaje.esFavorito = false;
    } else {
      //Agregar a favoritos
      listaActualizada = [...this.favoritos(), { ...personaje, esFavorito: true }];
      personaje.esFavorito = true;
    }

    //Actualizamos la Signal y el localStorage al mismo tiempo
    this.favoritos.set(listaActualizada);
    this.guardarEnLocalStorage(listaActualizada);
  }

  esFavorito(id: number): boolean {
    return this.favoritos().some(p => p.id === id);
  }
}
