import { StringSpec } from '../../../../Shared/L1_Entity/Specification/StringSpec';
import { InvalidPokemonAbilityName } from '../Exception/InvalidPokemonAbilityName';

export class PokemonAbilityName {
  readonly #value: string;
  #stringSpec!: StringSpec;

  constructor(value: string) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: string): void {
    this.#stringSpec = new StringSpec(value);

    if (!this.#stringSpec.isSatisfiedBy()) {
      throw new InvalidPokemonAbilityName(value);
    }
  }

  get value(): string {
    return this.#value;
  }
}
