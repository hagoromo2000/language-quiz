import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const Header = () => {
  return (
    <header>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        ポケモン中国語クイズ
      </Link>
    </header>
  );
};
