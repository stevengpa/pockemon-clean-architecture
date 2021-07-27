export class InvalidOffset extends Error {
  public readonly code: string;

  constructor(value: number) {
    super(`The value ${value} does not match with the  criteria`);
    this.name = '[InvalidOffset]';
    this.code = 'InvalidOffset-001';
  }
}
