import { createAction, props } from '@ngrx/store';
import { Character } from '../../pages/characters/character.interface';

export const retrievedCharacterList  = createAction(
  '[Rick & Morty/API] Retrieve Characters Success',
  props<{ characters: ReadonlyArray<Character> }>()
);
export const removeCharacter  = createAction(
  '[Character] Remove Character',
  props<{ characterId: number }>()
);
export const clearCharacters = createAction(
  '[Character], Clear Characters'
);
