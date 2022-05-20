import { createFeatureSelector } from "@ngrx/store";
import { Character } from '../../pages/characters/character.interface';

export const selectCharacters = createFeatureSelector<ReadonlyArray<Character>>('characters');
