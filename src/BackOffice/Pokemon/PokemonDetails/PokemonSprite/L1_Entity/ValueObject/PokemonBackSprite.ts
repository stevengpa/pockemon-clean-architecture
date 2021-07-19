import { PokemonSpriteSpec } from '../Specification/PokemonSpriteSpec';
import { InvalidPokemonSprite } from '../Exception/InvalidPokemonSprite';

export class PokemonBackSprite {
  readonly #value: string;
  #pokemonSpriteSpec!: PokemonSpriteSpec;

  constructor(value: string) {
    this.#validate(value);
    this.#value = value;
  }

  #validate(value: string): void {
    this.#pokemonSpriteSpec = new PokemonSpriteSpec(value);

    if (!this.#pokemonSpriteSpec.isSatisfiedBy()) {
      throw new InvalidPokemonSprite(value, 'Pokemon Back Sprite');
    }
  }

  get value(): string {
    return this.#value;
  }
}
