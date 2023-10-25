import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Background from "@/components/layout/background";
import { Provider } from "jotai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポケモン中国語クイズ",
  description:
    "ポケモンの繁体字から、日本語名を当てるクイズを遊べるwebアプリです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Background>
          <Provider>
            <Header />
            <main className="container mx-auto">{children}</main>
          </Provider>
        </Background>
      </body>
    </html>
  );
}
