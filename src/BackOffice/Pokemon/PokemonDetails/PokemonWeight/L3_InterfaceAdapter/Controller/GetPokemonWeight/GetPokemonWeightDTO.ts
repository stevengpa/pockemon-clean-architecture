export class GetPokemonWeightDTO {
  readonly #weight: number;

  constructor(weight: number) {
    this.#weight = weight;
  }

  get weight(): number {
    return this.#weight;
  }
}
