export class InvalidIdentifier extends Error {
  readonly #code: string;

  constructor(value: any, fieldName: string, code: string) {
    super(`The ${fieldName} with identifier ${value} does not match with the criteria`);
    this.name = `[InvalidIdentifier_${fieldName}]`;
    this.#code = `InvalidIdentifier_${fieldName}-${code}`;
  }

  get code(): string {
    return this.#code;
  }
}
