import { Specification } from '../../../../Shared/L1_Entity/Specification/Specification';

export class PokemonSpriteSpec implements Specification {
  readonly #value: string;

  constructor(readonly value: string) {
    this.#value = value;
  }

  public isSatisfiedBy(): boolean {
    const validURL: RegExp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gm;

    return validURL.test(this.#value);
  }
}
