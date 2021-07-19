export class InvalidPokemonSprite extends Error {
  public readonly code: string;

  constructor(value: string, fieldName: string) {
    super(`The Pokemon Sprite ${value} is not ${fieldName} valid`);
    this.name = '[InvalidPokemonSprite]';
    this.code = 'InvalidPokemonSprite-001';
  }
}
