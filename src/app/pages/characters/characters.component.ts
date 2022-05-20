import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CharactersService } from './characters.service';
import { Character } from './character.interface';
import { selectCharacters } from '../../ngrx/selectors/character.selectors';
import { Store } from '@ngrx/store';
import { retrievedCharacterList } from '../../ngrx/actions/character.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters$ = this.store.select(selectCharacters);

  private subscriptions = new Subscription();

  constructor(
    private charactersService: CharactersService,
    private store: Store
  ) {
    // this.characters$ = this.getCharacters();
  }

  ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .subscribe(characters => this.store.dispatch(retrievedCharacterList({characters})))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // private getCharacters() {
  //   return this.charactersService.getCharacters()
  //   .pipe(
  //     map((apiResponse: any) => {
  //       console.log(apiResponse);
  //       return apiResponse.results;
  //     })
  //   )
  // }
}
