"use client";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const usePokemonSpecies = (id: string) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
    fetcher
  );
  return {
    data: data,
    error: error,
  };
};
