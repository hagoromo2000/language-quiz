"use client";
import Select from "react-select";
import pokemonData from "@/lib/json/pokemon-name.json";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { encrypt } from "@/hooks/use-pokemon-crypted-id";

const options = pokemonData.map((pokemon) => ({
  value: pokemon.no,
  label: pokemon.ja,
}));

export const SelectPokemon = () => {
  const [pokemonId, setPokemonId] = useState<number>(Number(pokemonData[0].no));

  const query = {
    id: encrypt(pokemonId),
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Label htmlFor="pokemon" className="text-orange-600">
        ポケモンを選んで遊ぶ！
      </Label>
      <div className="w-5/6 md:w-1/2">
        <Select
          id="pokemon"
          options={options}
          isSearchable
          defaultValue={{
            value: pokemonData[0].no,
            label: pokemonData[0].ja,
          }}
          onChange={(e) => setPokemonId(Number(e?.value))}
        />
      </div>
      <Button asChild size="lg">
        <Link href={{ pathname: "quiz", query: query }}>
          選んだポケモンのクイズを見る！
        </Link>
      </Button>
    </div>
  );
};
