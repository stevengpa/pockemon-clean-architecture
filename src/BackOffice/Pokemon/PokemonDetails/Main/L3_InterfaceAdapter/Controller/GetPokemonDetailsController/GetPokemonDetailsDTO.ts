import { GetPokemonSpriteDTO } from '../../../../PokemonSprite/L3_InterfaceAdapter/Controller/GetPokemonSprite/GetPokemonSpriteDTO';
import { GetPokemonAbilityDTO } from '../../../../PokemonAbility/L3_InterfaceAdapter/Controller/GetPokemonAbility/GetPokemonAbilityDTO';
import { GetPokemonWeightDTO } from '../../../../PokemonWeight/L3_InterfaceAdapter/Controller/GetPokemonWeight/GetPokemonWeightDTO';

export class GetPokemonDetailsDTO {
  readonly #sprite: GetPokemonSpriteDTO;
  readonly #ability: Array<GetPokemonAbilityDTO>;
  readonly #weight: GetPokemonWeightDTO;

  constructor(sprite: GetPokemonSpriteDTO, ability: Array<GetPokemonAbilityDTO>, weight: GetPokemonWeightDTO) {
    this.#sprite = sprite;
    this.#ability = ability;
    this.#weight = weight;
  }

  get sprite(): GetPokemonSpriteDTO {
    return this.#sprite;
  }

  get ability(): Array<GetPokemonAbilityDTO> {
    return this.#ability;
  }

  get weight(): GetPokemonWeightDTO {
    return this.#weight;
  }
}
