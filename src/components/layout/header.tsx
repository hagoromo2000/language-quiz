import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { SelectGeneration } from "../organisms/select-generation";

export const Header = () => {
  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src="/icon.png" height={50} width={50} alt="ロゴ" />
          </Link>
        </div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <SelectGeneration />
        </div>
      </div>
    </nav>
  );
};
