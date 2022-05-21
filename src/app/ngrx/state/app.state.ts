import { Character } from '../../pages/characters/character.interface';

export interface AppState {
  characters: ReadonlyArray<Character>
}