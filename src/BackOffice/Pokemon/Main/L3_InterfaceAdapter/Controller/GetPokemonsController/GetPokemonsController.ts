import { Limit } from '../../../../../Shared/L1_Entity/ValueObject/Limit';
import { Offset } from '../../../../../Shared/L1_Entity/ValueObject/Offset';
import { PokemonRepository } from '../../../L1_Entity/Repository/PokemonRepository';
import { GetPokemonsUseCase } from '../../../L2_Application/GetPokemonsUseCase/GetPokemonsUseCase';
import { GetPokemonsResponse } from './GetPokemonsResponse';

export class GetPokemonsController {
  #limit!: Limit;
  #offset!: Offset;

  #getPokemonsUseCase: GetPokemonsUseCase;

  constructor(pokemonRepository: PokemonRepository) {
    this.#getPokemonsUseCase = new GetPokemonsUseCase(pokemonRepository);
  }

  async getPokemons(limit: number, offset: number): Promise<GetPokemonsResponse | null> {
    this.#limit = new Limit(limit);
    this.#offset = new Offset(offset);

    await this.#getPokemonsUseCase.getPokemons(this.#limit, this.#offset);

    return null;
  }
}
