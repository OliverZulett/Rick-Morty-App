import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CharactersService } from './characters.service';
import { Character } from './character.interface';

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

  private subscriptions = new Subscription();

  constructor(
    private charactersService: CharactersService,
  ) {}
  
  ngOnInit(): void {
    this.characters$ = this.charactersService.getCharacters();
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
