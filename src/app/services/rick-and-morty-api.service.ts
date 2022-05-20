import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RickAndMortyApiService {
  private API_URL = 'https://rickandmortyapi.com/api/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getRequest(path: string) {
    return this.httpClient.get(this.API_URL);
  }
}