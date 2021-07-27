import { PokemonDetails } from '../../../PokemonDetails/Main/L1_Entity/PokemonDetails';
import { Limit } from '../../../../Shared/L1_Entity/ValueObject/Limit';
import { Offset } from '../../../../Shared/L1_Entity/ValueObject/Offset';
import { Pokemon } from '../Pokemon';

export interface PokemonRepository {
  getPokemons(limit: Limit, offset: Offset): Promise<Array<Pokemon>>;
  getDetails(pokemonId: number): Promise<PokemonDetails>;
}
