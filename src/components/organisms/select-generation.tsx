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
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="出題範囲" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>出題範囲</SelectLabel>
          <SelectItem value="1">赤・緑</SelectItem>
          <SelectItem value="2">金・銀</SelectItem>
          <SelectItem value="3">ルビー・サファイア</SelectItem>
          <SelectItem value="4">ダイヤモンド・パール</SelectItem>
          <SelectItem value="5">ブラック・ホワイト</SelectItem>
          <SelectItem value="6">X・Y</SelectItem>
          <SelectItem value="7">サン・ムーン</SelectItem>
          <SelectItem value="8">ソード・シールド</SelectItem>
          <SelectItem value="9">スカーレット・バイオレット</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
