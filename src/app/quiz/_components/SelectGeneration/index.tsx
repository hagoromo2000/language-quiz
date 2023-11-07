"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useAtom } from "jotai";
import { generationAtom } from "@/atoms/generationAtoms";
import { generations } from "@/hooks/useGeneration";

export const SelectGeneration = () => {
  const [, setGeneration] = useAtom(generationAtom);

  return (
    <Select onValueChange={(value) => setGeneration(parseInt(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="出題範囲" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>出題範囲</SelectLabel>
          {generations.map((gen) => (
            <SelectItem key={gen.value.toString()} value={gen.value.toString()}>
              ~ {gen.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
