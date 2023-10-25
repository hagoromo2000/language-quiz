import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type PokemonLanguageData = {
  language: {
    name: string;
    url: string;
  };
  name: string;
};

export const usePokemonSpecies = (id: string) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
    fetcher
  );
  return {
    error: error,
    isLoading: !error && !data,
    chinese: data?.names.find(
      (name: PokemonLanguageData) => name.language.name === "zh-Hans"
    ).name,
    japanese: data?.names.find(
      (name: PokemonLanguageData) => name.language.name === "ja-Hrkt"
    ).name,
  };
};
