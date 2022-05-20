import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class CharactersService {
  private API_URL = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient.get(this.API_URL).pipe(
      map((apiResponse: any) => {
        return apiResponse.results;
      })
    );
  }
}
