import { PokemonNameSpec } from '../Specification/PokemonNameSpec';
import { InvalidPokemonName } from '../Exception/InvalidPokemonName';

export class PokemonName {
  #value: string;
  #pokemonNameSpec!: PokemonNameSpec;

  constructor(value: string) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: string): void {
    this.#pokemonNameSpec = new PokemonNameSpec(value);

    if (!this.#pokemonNameSpec.isSatisfiedBy()) {
      throw new InvalidPokemonName(value);
    }
  }

  get value(): string {
    return this.#value;
  }
}
