import { PlayButton } from "@/app/_components/top/play-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full text-center bg-white p-8 rounded-lg shadow-md space-y-4">
        <div className="relative w-full h-0 pb-[66.66%] lg:w-[450px] lg:h-[300px] mx-auto">
          <Image src="/logo.png" layout="fill" objectFit="contain" alt="ロゴ" />
        </div>
        <p className="text-orange-600">
          ポケモンの繁体字名から、日本語名を当てるクイズを遊べる
          シンプルなwebアプリです。
        </p>
        <div className="mt-6">
          <PlayButton />
        </div>
      </div>
    </div>
  );
}
