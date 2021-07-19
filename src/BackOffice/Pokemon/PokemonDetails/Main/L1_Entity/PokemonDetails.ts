import { PokemonWeight } from '../../PokemonWeight/L1_Entity/PokemonWeight';
import { PokemonSprite } from '../../PokemonSprite/L1_Entity/PokemonSprite';
import { PokemonAbility } from '../../PokemonAbility/PokemonAbility';

export class PokemonDetails {
  readonly #weight: PokemonWeight;
  readonly #sprite: PokemonSprite;
  readonly #abilities: Array<PokemonAbility>;

  constructor(weight: PokemonWeight, sprite: PokemonSprite, abilities: Array<PokemonAbility>) {
    this.#weight = weight;
    this.#sprite = sprite;
    this.#abilities = abilities;
  }

  get weight(): PokemonWeight {
    return this.#weight;
  }

  get sprite(): PokemonSprite {
    return this.#sprite;
  }

  get abilities(): Array<PokemonAbility> {
    return this.#abilities;
  }
}
