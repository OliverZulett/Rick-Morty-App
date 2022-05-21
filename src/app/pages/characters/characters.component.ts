import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CharactersService } from './characters.service';
import { Character } from './character.interface';
import { selectCharacters } from '../../ngrx/selectors/character.selectors';
import { Store } from '@ngrx/store';
import { removeCharacter, retrievedCharacterList } from '../../ngrx/actions/characters.actions';

export interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string
}

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
  ) {}
  
  ngOnInit(): void {
    // this.characters$ = this.charactersService.getCharacters();
    this.charactersService.getCharacters()
      .subscribe(characters => this.store.dispatch(retrievedCharacterList({characters})));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  removeCharacter(characterId: number) {
    this.store.dispatch(removeCharacter({characterId}))
  }
}
