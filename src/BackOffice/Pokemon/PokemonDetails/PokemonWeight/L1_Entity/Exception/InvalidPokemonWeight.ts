export class InvalidPokemonWeight extends Error {
  public readonly code: string;

  constructor(value: number) {
    super(`The value ${value} does not match with the Pokemon Weight criteria`);
    this.name = '[InvalidPokemonWeight]';
    this.code = 'InvalidPokemonWeight-001';
  }
}
