// src/app/services/pokemon-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener los Pokémon y asignarles imágenes
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>(this.apiURL).pipe(  // Usamos 'any' porque la respuesta es desconocida
      map(response =>
        response.results.map((pokemon: any, index: number) => ({
          name: pokemon.name,
          url: pokemon.url,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` // Imagen del Pokémon
        }))
      )
    );
  }

  getPokemonsByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${name}`);
  }
}
