import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, map } from 'rxjs';

@Injectable()
export class CharactersService {
  private API_URL = 'https://rickandmortyapi.com/api/character'

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacters() {
    return this.httpClient.get(this.API_URL)
      .pipe(map((apiResponse: any) => {
        console.log(apiResponse);
        return apiResponse.results;
      }));
  }
}
