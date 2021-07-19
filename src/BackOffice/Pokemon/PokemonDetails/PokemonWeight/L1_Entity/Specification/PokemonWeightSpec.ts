import { Specification } from '../../../../Shared/L1_Entity/Specification/Specification';

export class PokemonWeightSpec implements Specification {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    return typeof this.#value === 'number' && this.#value >= 0;
  }
}
