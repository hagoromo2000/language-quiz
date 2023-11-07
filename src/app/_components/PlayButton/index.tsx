"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { encrypt, useRandomNumber } from "@/hooks/usePokemonCryptedId";
import { useEffect, useState } from "react";

export const PlayButton = () => {
  const initialRandomNumber = useRandomNumber();
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  // useEffect外でのuseRandomNumber()を使うと、サーバーサイドとクライアントサイドで値が異なってしまう。
  // クライアントサイドでのみランダムな値を使うことにする
  useEffect(() => {
    setRandomNumber(initialRandomNumber);
  }, [initialRandomNumber]);

  const query = {
    id: randomNumber && encrypt(randomNumber),
  };
  return (
    <Button asChild size="xl">
      <Link href={{ pathname: "quiz", query: query }}>早速遊んでみる！</Link>
    </Button>
  );
};
