import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ポケモン中国語クイズ</h1>
      <p>ポケモンの繁体字から、日本語名を当てるクイズを遊べるwebアプリです。</p>
      <p>
        ※このアプリは、ポケモンの中国語名を学習することを目的として作成されています。
      </p>
      <Button asChild size="xl">
        <Link href={"quiz"}>早速遊んでみる！</Link>
      </Button>
    </div>
  );
}
