import { NumericIdentifierSpec } from '../../../Shared/L1_Entity/Specification/NumericIdentifierSpec';
import { InvalidIdentifier } from '../../../Shared/L1_Entity/Exception/InvalidIdentifier';

export class PokemonId {
  #value: number;
  #numericIdentifierSpec!: NumericIdentifierSpec;

  constructor(value: number) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: number): void {
    this.#numericIdentifierSpec = new NumericIdentifierSpec(value);

    if (!this.#numericIdentifierSpec.isSatisfiedBy()) {
      throw new InvalidIdentifier(value, 'PokemonId', '001');
    }
  }

  get value(): number {
    return this.#value;
  }
}
