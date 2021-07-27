export class InvalidLimit extends Error {
  public readonly code: string;

  constructor(value: number) {
    super(`The value ${value} does not match with the Limit criteria`);
    this.name = '[InvalidLimit]';
    this.code = 'InvalidLimit-001';
  }
}
