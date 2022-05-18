import { Injectable } from '@angular/core';
import { RickAndMortyApiService } from '../../services/rick-and-morty-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharactersService {
  private API_URL = 'https://rickandmortyapi.com/api/character'

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacters() {
    return this.httpClient.get(this.API_URL);
  }
}
