import { createReducer, on } from '@ngrx/store';
import { Character } from '../../pages/characters/character.interface';
import { retrievedCharacterList, clearCharacters, removeCharacter } from '../actions/characters.actions';

export const initialState: ReadonlyArray<Character> = [];

export const characterReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (state, {characters}) => [...state, ...characters]),
  on(removeCharacter, (state, {characterId}) => state.filter(character => character.id !== characterId)),
  on(clearCharacters, (state) => [])
)