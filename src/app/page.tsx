import { Button } from "@/components/ui/button";
import { encrypt, useRandomNumber } from "@/hooks/use-pokemon-crypted-id";
import Link from "next/link";

export default function Home() {
  const query = {
    id: encrypt(useRandomNumber()),
  };
  return (
    <div>
      <h1>ポケモン中国語クイズ</h1>
      <p>ポケモンの繁体字から、日本語名を当てるクイズを遊べるwebアプリです。</p>
      <p>
        ※このアプリは、ポケモンの中国語名を学習することを目的として作成されています。
      </p>
      <Button asChild size="xl">
        <Link href={{ pathname: "quiz", query: query }}>早速遊んでみる！</Link>
      </Button>
    </div>
  );
}
