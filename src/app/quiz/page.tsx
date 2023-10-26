"use client";
import { OpenCorrectAnswer } from "@/components/organisms/open-correct-answer";
import { PokemonImage } from "@/components/organisms/pokemon-image";
import { Quiz } from "@/components/organisms/quiz";
import { SilhouetteHint } from "@/components/organisms/silhouette-hint";
import { SubmitForm } from "@/components/organisms/submit-form";
import { TypeHint } from "@/components/organisms/type-hint";
import { Button } from "@/components/ui/button";
import { usePokemonAttributes } from "@/hooks/use-pokemon-attributes";
import {
  encrypt,
  decrypt,
  useRandomNumber,
} from "@/hooks/use-pokemon-crypted-id";
import { usePokemonSpecies } from "@/hooks/use-pokemon-speacies";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { XShareButton } from "@/components/organisms/x-share-button";
import { Loading } from "@/components/layout/loading";
import { Error } from "@/components/layout/error";
import { Hints } from "@/components/organisms/hints";

const Page = () => {
  const searchParams = useSearchParams();
  const encryptedId = searchParams.get("id");
  const id: string = encryptedId ? decrypt(encryptedId).toString() : "25";

  const { error, isLoading, chinese, japanese, english } =
    usePokemonSpecies(id);
  const { imageUrl, types } = usePokemonAttributes(id);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const query = {
    id: encrypt(useRandomNumber()),
  };
  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Quiz chinese={chinese} />
      </div>
      <div className="w-full mt-4 md:w-1/2 justify-center items-center">
        {isCorrect ? (
          <PokemonImage imageUrl={imageUrl} japanese={japanese} />
        ) : (
          <Hints types={types} imageUrl={imageUrl} english={english} />
        )}
        <div className="mt-4 flex justify-center">
          <SubmitForm
            japanese={japanese}
            setIsCorrect={setIsCorrect}
            isCorrect={isCorrect}
          />
        </div>
        <div className="my-6 flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-x-4 md:space-y-0 justify-center">
          <div>
            {isCorrect ? null : (
              <OpenCorrectAnswer setIsCorrect={setIsCorrect} />
            )}
          </div>
          <div>
            <XShareButton
              text={`「${chinese}」はどのポケモンの中国語名?`}
              url={window.location.href}
              hashtags={["ポケモン中国語クイズ"]}
            />
          </div>
          <div>
            <Button asChild size="lg" onClick={() => setIsCorrect(false)}>
              <Link href={{ pathname: "quiz", query: query }}>次の問題へ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
