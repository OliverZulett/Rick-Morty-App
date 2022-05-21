import { createFeatureSelector } from "@ngrx/store";
import { Character } from "src/app/pages/characters/character.interface";

export const selectCharacters = createFeatureSelector<ReadonlyArray<Character>>('characters');