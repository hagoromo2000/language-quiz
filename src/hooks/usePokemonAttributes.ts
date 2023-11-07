import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const pokemonTypeJapaneseMapping = {
  grass: "くさ",
  fire: "ほのお",
  water: "みず",
  bug: "むし",
  normal: "ノーマル",
  poison: "どく",
  electric: "でんき",
  ground: "じめん",
  fighting: "かくとう",
  psychic: "エスパー",
  rock: "いわ",
  ghost: "ゴースト",
  ice: "こおり",
  dragon: "ドラゴン",
  dark: "あく",
  steel: "はがね",
  fairy: "フェアリー",
  flying: "ひこう",
};

type PokemonTypeEnglish = keyof typeof pokemonTypeJapaneseMapping;

export const convertTypesToEnglish = (
  japaneseNames: string[]
): (PokemonTypeEnglish | null)[] => {
  return japaneseNames?.map((japaneseName) => {
    const entry = Object.entries(pokemonTypeJapaneseMapping).find(
      ([_, value]) => value === japaneseName
    );

    if (!entry) return null;

    return entry[0] as PokemonTypeEnglish;
  });
};

const convertTypesToJapanese = (
  typesInEnglish: PokemonTypeEnglish[]
): string[] => {
  return typesInEnglish?.map(
    (type) => pokemonTypeJapaneseMapping[type] || "未知のタイプ"
  );
};

export const usePokemonAttributes = (id: string) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );
  const types = convertTypesToJapanese(
    data?.types.map((type: PokemonType) => type.type.name)
  );
  return {
    error: error,
    isLoading: !error && !data,
    imageUrl: data?.sprites.other["official-artwork"].front_default,
    types: types,
  };
};
