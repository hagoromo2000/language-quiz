import Link from "next/link";
import Image from "next/image";
import { SelectGeneration } from "../../quiz/_components/select-generation";

export const Header = () => {
  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="flex items-center justify-between p-2 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logo.png" height={40} width={150} alt="ロゴ" />
          </Link>
        </div>
        <div className="ml-auto">
          <SelectGeneration />
        </div>
      </div>
    </nav>
  );
};
