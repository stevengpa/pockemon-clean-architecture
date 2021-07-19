import { PokemonId } from './ValueObject/PokemonId';
import { PokemonName } from './ValueObject/PokemonName';

export class PokemonInfo {
  readonly #id: PokemonId;
  readonly #name: PokemonName;

  constructor(id: PokemonId, name: PokemonName) {
    this.#id = id;
    this.#name = name;
  }

  get id(): PokemonId {
    return this.#id;
  }

  get name(): PokemonName {
    return this.#name;
  }
}
