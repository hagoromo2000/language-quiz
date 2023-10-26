import { useSearchParams } from "next/navigation";
import { decrypt } from "./use-pokemon-crypted-id";

export const FIRST_GENERATION = 151;
export const SECOND_GENERATION = 251;
export const THIRD_GENERATION = 386;
export const FOURTH_GENERATION = 493;
export const FIFTH_GENERATION = 649;
export const SIXTH_GENERATION = 721;
export const SEVENTH_GENERATION = 809;
export const EIGHTH_GENERATION = 898;
export const NINTH_GENERATION = 1017;

export const generations = [
  { value: FIRST_GENERATION, name: "赤・緑" },
  { value: SECOND_GENERATION, name: "金・銀" },
  { value: THIRD_GENERATION, name: "ルビー・サファイア" },
  { value: FOURTH_GENERATION, name: "ダイヤモンド・パール" },
  { value: FIFTH_GENERATION, name: "ブラック・ホワイト" },
  { value: SIXTH_GENERATION, name: "X・Y" },
  { value: SEVENTH_GENERATION, name: "サン・ムーン" },
  { value: EIGHTH_GENERATION, name: "ソード・シールド" },
  {
    value: NINTH_GENERATION,
    name: "スカーレット・バイオレット",
  },
];
export const useGeneration = () => {
  const searchParams = useSearchParams();
  const encyptedId = searchParams.get("id");
  if (!encyptedId) {
    return;
  }
  const pokemonId = Number(decrypt(encyptedId));

  const generation = generations.find((gen) => pokemonId <= gen.value);

  return generation?.name || "なんらかのエラーで世代が取得できませんでした";
};
