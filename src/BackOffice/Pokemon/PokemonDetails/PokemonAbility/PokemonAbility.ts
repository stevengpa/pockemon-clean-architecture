import { PokemonAbilityId } from './L1_Entity/ValueObject/PokemonAbilityId';
import { PokemonAbilityName } from './L1_Entity/ValueObject/PokemonAbilityName';

export class PokemonAbility {
  readonly #id: PokemonAbilityId;
  readonly #name: PokemonAbilityName;

  constructor(id: PokemonAbilityId, name: PokemonAbilityName) {
    this.#id = id;
    this.#name = name;
  }

  get id(): PokemonAbilityId {
    return this.#id;
  }

  get name(): PokemonAbilityName {
    return this.#name;
  }

  public toJSON(): Record<string, unknown> {
    return {
      id: this.#id.value,
      name: this.#name.value,
    };
  }
}
