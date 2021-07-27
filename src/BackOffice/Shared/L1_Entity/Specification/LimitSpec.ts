import { Specification } from './Specification';

export class LimitSpec implements Specification {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    return typeof this.#value === 'number' && this.#value >= 0 && this.#value <= 100;
  }
}
