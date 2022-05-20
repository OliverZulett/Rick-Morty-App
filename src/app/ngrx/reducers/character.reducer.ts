import { createReducer, on } from "@ngrx/store"
import { clearCharacters, retrievedCharacterList, removeCharacter } from '../actions/character.actions';
import { Character } from '../../pages/characters/character.interface';

export const initialState: ReadonlyArray<Character> = [];

export const characterReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (state, {characters}) => [...state, ...characters]),
  on(removeCharacter, (state, {characterId}) => state.filter(character => character.id !== characterId)),
  on(clearCharacters, (state) => [])
);
