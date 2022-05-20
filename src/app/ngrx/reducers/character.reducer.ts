import { createReducer, on } from "@ngrx/store"
import { clearCharacters, retrievedCharacterList } from '../actions/character.actions';
import { Character } from '../../pages/characters/character.interface';

export const initialState: ReadonlyArray<Character> = [];

export const characterReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (state, {characters}) => characters),
  on(clearCharacters, (state) => ([]))
);
