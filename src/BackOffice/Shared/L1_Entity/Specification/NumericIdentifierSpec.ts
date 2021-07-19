import { Specification } from './Specification';

export class NumericIdentifierSpec implements Specification {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    return typeof this.#value === 'number' && Number.isInteger(this.#value);
  }
}
