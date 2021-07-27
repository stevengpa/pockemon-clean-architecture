import { PokemonRepository } from '../../L1_Entity/Repository/PokemonRepository';
import { Pokemon } from '../../L1_Entity/Pokemon';
import { Limit } from '../../../../Shared/L1_Entity/ValueObject/Limit';
import { Offset } from '../../../../Shared/L1_Entity/ValueObject/Offset';

export class GetPokemonsUseCase {
  readonly #pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.#pokemonRepository = pokemonRepository;
  }

  public async getPokemons(limit: Limit, offset: Offset): Promise<Array<Pokemon>> {
    return await this.#pokemonRepository.getPokemons(limit, offset);
  }
}
