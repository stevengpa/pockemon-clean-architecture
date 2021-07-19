export class InvalidPokemonName extends Error {
  public readonly code: string;

  constructor(value: string) {
    super(`The value ${value} does not match with the Pokemon Name criteria`);
    this.name = '[InvalidPokemonName]';
    this.code = 'InvalidPokemonName-001';
  }
}
