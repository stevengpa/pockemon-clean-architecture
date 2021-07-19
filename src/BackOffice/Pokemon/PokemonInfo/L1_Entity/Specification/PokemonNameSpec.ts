import { Specification } from '../../../Shared/L1_Entity/Specification/Specification';

export class PokemonNameSpec implements Specification {
  #value: string;

  constructor(value: string) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    return typeof this.#value === 'string' && this.#value.length > 0;
  }
}
