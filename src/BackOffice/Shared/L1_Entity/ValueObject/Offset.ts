import { OffsetSpec } from '../Specification/OffsetSpec';
import { InvalidOffset } from '../Exception/InvalidOffset';

export class Offset {
  #value: number;
  #offsetSpec!: OffsetSpec;

  constructor(value: number) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: number): void {
    this.#offsetSpec = new OffsetSpec(value);

    if (!this.#offsetSpec.isSatisfiedBy()) {
      throw new InvalidOffset(value);
    }
  }

  get value(): number {
    return this.#value;
  }
}
