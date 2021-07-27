import { GetPokemonDetailsDTO } from '../../../../PokemonDetails/Main/L3_InterfaceAdapter/Controller/GetPokemonDetailsController/GetPokemonDetailsDTO';
import { GetPokemonInfoDTO } from '../../../../PokemonInfo/L3_InterfaceAdapter/Controller/GetPokemonInfoDTO';

export class GetPokemonsResponse {
  #info: GetPokemonInfoDTO;
  #details: GetPokemonDetailsDTO;

  constructor(info: GetPokemonInfoDTO, details: GetPokemonDetailsDTO) {
    this.#info = info;
    this.#details = details;
  }

  get info(): GetPokemonInfoDTO {
    return this.#info;
  }

  get details(): GetPokemonDetailsDTO {
    return this.#details;
  }
}
