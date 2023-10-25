import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

export const Header = () => {
  return (
    <header>
      <Button asChild size="lg" variant="outline">
        <Link href="/">ポケモン中国語クイズ</Link>
      </Button>
    </header>
  );
};
