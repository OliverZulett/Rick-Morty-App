import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCharacters } from '../../ngrx/selectors/character.selectors';
import { clearCharacters, retrievedCharacterList } from '../../ngrx/actions/character.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  characters$ = this.store.select(selectCharacters);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  clearCharacters() {
    this.store.dispatch(clearCharacters())
  }
}
