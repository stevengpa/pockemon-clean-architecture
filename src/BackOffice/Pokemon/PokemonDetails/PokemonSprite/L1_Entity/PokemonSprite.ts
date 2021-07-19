import { PokemonFrontSprite } from './ValueObject/PokemonFrontSprite';
import { PokemonBackSprite } from './ValueObject/PokemonBackSprite';

export class PokemonSprite {
  readonly #frontSprite: PokemonFrontSprite;
  readonly #backSprite: PokemonBackSprite;

  constructor(frontSprite: PokemonFrontSprite, backSprite: PokemonBackSprite) {
    this.#frontSprite = frontSprite;
    this.#backSprite = backSprite;
  }

  get frontSprite(): PokemonFrontSprite {
    return this.#frontSprite;
  }

  get backSprite(): PokemonBackSprite {
    return this.#backSprite;
  }
}
