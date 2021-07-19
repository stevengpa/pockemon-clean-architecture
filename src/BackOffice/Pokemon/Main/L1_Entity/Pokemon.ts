import { PokemonInfo } from '../../PokemonInfo/L1_Entity/PokemonInfo';
import { PokemonDetails } from '../../PokemonDetails/Main/L1_Entity/PokemonDetails';

export class Pokemon {
  readonly #info: PokemonInfo;
  readonly #details: PokemonDetails;

  constructor(info: PokemonInfo, details: PokemonDetails) {
    this.#info = info;
    this.#details = details;
  }

  get info(): PokemonInfo {
    return this.#info;
  }

  get details(): PokemonDetails {
    return this.#details;
  }
}
