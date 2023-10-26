"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { encrypt, useRandomNumber } from "@/hooks/use-pokemon-crypted-id";

export const PlayButton = () => {
  const query = {
    id: encrypt(useRandomNumber()),
  };
  return (
    <Button asChild size="xl">
      <Link href={{ pathname: "quiz", query: query }}>早速遊んでみる！</Link>
    </Button>
  );
};
