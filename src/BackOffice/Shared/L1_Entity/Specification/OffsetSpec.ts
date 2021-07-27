import { Specification } from './Specification';

export class OffsetSpec implements Specification {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    return typeof this.#value === 'number' && this.#value >= 1 && this.#value <= 100;
  }
}
