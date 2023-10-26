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

const Page = () => {
  const searchParams = useSearchParams();
  const encryptedId = searchParams.get("id");
  const id: string = encryptedId ? decrypt(encryptedId).toString() : "25";

  const { error, isLoading, chinese, japanese } = usePokemonSpecies(id);
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
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <Quiz chinese={chinese} />
      </div>
      <div className="w-full md:w-1/2">
        {isCorrect ? (
          <PokemonImage imageUrl={imageUrl} japanese={japanese} />
        ) : (
          <>
            <TypeHint types={types} />
            <SilhouetteHint imageUrl={imageUrl} />
          </>
        )}
        <SubmitForm
          japanese={japanese}
          setIsCorrect={setIsCorrect}
          isCorrect={isCorrect}
        />
        <div className="mt-2">
          {isCorrect ? (
            <XShareButton
              text={`「${chinese}」はどのポケモンの中国語名?`}
              url={window.location.href}
              hashtags={["ポケモン中国語クイズ"]}
            />
          ) : (
            <OpenCorrectAnswer setIsCorrect={setIsCorrect} />
          )}
          <Button asChild size="lg" onClick={() => setIsCorrect(false)}>
            <Link href={{ pathname: "quiz", query: query }}>次の問題へ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
