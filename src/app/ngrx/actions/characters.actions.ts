import { createAction, props } from "@ngrx/store";
import { Character } from '../../pages/characters/character.interface';

export const retrievedCharacterList = createAction(
  '[Rick & Morty/API] Retrieve characters Success',
  props<{ characters: ReadonlyArray<Character> }>()
);
export const removeCharacter = createAction(
  '[Character] Remove character',
  props<{ characterId: number }>()
)
export const clearCharacters = createAction(
  '[Character component], ClearCharacters'
)
