export class InvalidPokemonAbilityName extends Error {
  public readonly code: string;

  constructor(pokemonAbilityName: string) {
    super(`Invalid Pokemon Ability Name ${pokemonAbilityName}`);
    this.name = '[InvalidPokemonAbilityName]';
    this.code = 'InvalidPokemonAbilityName-001';
  }
}
