import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CharactersService } from './characters.service';
import { Character } from './character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters$: Observable<Character[]>;

  private subscriptions = new Subscription();

  constructor(private charactersService: CharactersService) {
    this.characters$ = this.getCharacters();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getCharacters() {
    return this.charactersService.getCharacters()
    .pipe(
      map((apiResponse: any) => {
        console.log(apiResponse);
        return apiResponse.results;
      })
    )
  }
}
