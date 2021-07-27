export class GetPokemonSpriteDTO {
  readonly #frontSprite: number;
  readonly #backSprite: string;

  constructor(frontSprite: number, backSprite: string) {
    this.#frontSprite = frontSprite;
    this.#backSprite = backSprite;
  }

  get frontSprite(): number {
    return this.#frontSprite;
  }

  get backSprite(): string {
    return this.#backSprite;
  }
}
