export class GetPokemonInfoDTO {
  #id: number;
  #name: string;

  constructor(id: number, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }
}
