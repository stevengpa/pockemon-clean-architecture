import { Specification } from './Specification';

export class StringSpec implements Specification {
  #value: string;

  constructor(value: string) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    return typeof this.#value === 'string' && this.#value.length >= 0;
  }
}
