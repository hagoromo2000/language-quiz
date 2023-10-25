"use client";
import { OpenCorrectAnswer } from "@/components/organisms/open-correct-answer";
import { PokemonImage } from "@/components/organisms/pokemon-image";
import { Quiz } from "@/components/organisms/quiz";
import { SilhouetteHint } from "@/components/organisms/silhouette-hint";
import { SubmitForm } from "@/components/organisms/submit-form";
import { TypeHint } from "@/components/organisms/type-hint";
import { Button } from "@/components/ui/button";
import { usePokemonAttributes } from "@/hooks/use-pokemon-attributes";
import { encrypt, decrypt } from "@/hooks/use-pokemon-crypted-id";
import { usePokemonSpecies } from "@/hooks/use-pokemon-speacies";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const encryptedId = searchParams.get("id");
  const id: string = encryptedId ? decrypt(encryptedId).toString() : "25";

  const { error, isLoading, chinese, japanese } = usePokemonSpecies(id);
  const { imageUrl, types } = usePokemonAttributes(id);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const generateRandomNumber = () => Math.floor(Math.random() * 1001); // 0~1000の整数を返す

  const query = {
    id: encrypt(generateRandomNumber()),
  };
  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Quiz chinese={chinese} />
      {isCorrect ? (
        <PokemonImage imageUrl={imageUrl} japanese={japanese} />
      ) : (
        <>
          <TypeHint types={types} />
          <SilhouetteHint imageUrl={imageUrl} />
        </>
      )}
      <SubmitForm japanese={japanese} setIsCorrect={setIsCorrect} />
      <div className="mt-2">
        {isCorrect ? null : <OpenCorrectAnswer setIsCorrect={setIsCorrect} />}
        <Button asChild size="lg" onClick={() => setIsCorrect(false)}>
          <Link href={{ pathname: "quiz", query: query }}>次の問題へ</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
