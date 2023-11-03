import { z } from "zod";

export type PokemonName = {
  pokemon: string;
};

export const hiraganaToKatakana = (str: string): string => {
  return str.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

export const pokemonSchema = z.string().refine(
  (value) => {
    const regex = /^[ぁ-んァ-ヶー\u2640\u2642\u30FB]+$/; // ニドラン♂, ニドラン♀を許容するため、\u2640, \u2642を追加。カプ系を許容するため、\u30FBを追加
    return regex.test(value) && value.length <= 6;
  },
  {
    message: "ポケモン名は6文字以内で入力してください",
  }
);
