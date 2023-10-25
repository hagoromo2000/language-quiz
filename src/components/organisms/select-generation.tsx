import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectGeneration = () => {
  const generations = [
    { value: "1", name: "赤・緑" },
    { value: "2", name: "~ 金・銀" },
    { value: "3", name: "~ ルビー・サファイア" },
    { value: "4", name: "~ ダイヤモンド・パール" },
    { value: "5", name: "~ ブラック・ホワイト" },
    { value: "6", name: "~ X・Y" },
    { value: "7", name: "~ サン・ムーン" },
    { value: "8", name: "~ ソード・シールド" },
    { value: "9", name: "~ スカーレット・バイオレット" },
  ];

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="出題範囲" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>出題範囲</SelectLabel>
          {generations.map((gen) => (
            <SelectItem key={gen.value} value={gen.value}>
              {gen.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
