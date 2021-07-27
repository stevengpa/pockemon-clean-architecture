import { LimitSpec } from '../Specification/LimitSpec';
import { InvalidLimit } from '../Exception/InvalidLimit';

export class Limit {
  #value: number;
  #limitSpec!: LimitSpec;

  constructor(value: number) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: number): void {
    this.#limitSpec = new LimitSpec(value);

    if (!this.#limitSpec.isSatisfiedBy()) {
      throw new InvalidLimit(value);
    }
  }

  get value(): number {
    return this.#value;
  }
}
