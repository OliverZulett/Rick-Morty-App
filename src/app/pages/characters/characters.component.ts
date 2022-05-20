import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CharactersService } from './characters.service';
import { Character } from './character.interface';
import { Store } from '@ngrx/store';
import { addCharacters } from '../../ngrx/actions/character.actions';

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
  characters$?: Observable<Character[]>;

  private info?: Info;
  private subscriptions = new Subscription();

  constructor(
    private charactersService: CharactersService,
    private store: Store<{ characters: Character[] }>
  ) {
    this.characters$ = store.select('characters');
    // this.characters$ = this.getCharacters();
  }
  
  ngOnInit(): void {
    this.characters$ = this.getCharacters();
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setCharacters() {
    // TODO: Dispatch an increment action
  }

  private getCharacters() {
    return this.charactersService.getCharacters()
    .pipe(
      map((apiResponse: any) => {
        console.log(apiResponse);
        this.store.dispatch(addCharacters(apiResponse.results))
        return apiResponse.results;
      })
    )
  }
}
