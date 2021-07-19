import { PokemonWeightSpec } from './Specification/PokemonWeightSpec';
import { InvalidPokemonWeight } from './Exception/InvalidPokemonWeight';

export class PokemonWeight {
  readonly #value: number;
  #pokemonWeightSpec!: PokemonWeightSpec;

  constructor(value: number) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: number): void {
    this.#pokemonWeightSpec = new PokemonWeightSpec(value);

    if (!this.#pokemonWeightSpec.isSatisfiedBy()) {
      throw new InvalidPokemonWeight(value);
    }
  }

  get value(): number {
    return this.#value;
  }
}
