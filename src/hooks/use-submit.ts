import { z } from "zod";

export type PokemonName = {
  pokemon: string;
};

export const hiraganaToKatakana = (str: string) => {
  return str.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

export const pokemonSchema = z.string().refine(
  (value) => {
    const regex = /^[ぁ-んァ-ヶー]+$/;
    return regex.test(value) && value.length <= 6;
  },
  {
    message: "ポケモン名は6文字以内で入力してください",
  }
);
