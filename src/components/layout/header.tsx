import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <Button asChild size="lg" variant="outline">
        <Link href="/">
          <Image src="/icon.png" height={50} width={50} alt="ロゴ" />
          ポケモン中国語クイズ
        </Link>
      </Button>
    </header>
  );
};
