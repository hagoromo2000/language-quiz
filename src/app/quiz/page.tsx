"use client";
import { Quiz } from "@/components/organisms/quiz";
import { SilhouetteHint } from "@/components/organisms/silhouette-hint";
import { SubmitForm } from "@/components/organisms/submit-form";
import { TypeHint } from "@/components/organisms/type-hint";
import { Button } from "@/components/ui/button";
import { usePokemonAttributes } from "@/hooks/use-pokemon-attributes";
import { usePokemonSpecies } from "@/hooks/use-pokemon-speacies";
import { useState } from "react";

const Page = () => {
  const { error, isLoading, chinese, japanese } = usePokemonSpecies("25");
  const { imageUrl, types } = usePokemonAttributes("25");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Button
        onClick={() => {
          console.log(chinese);
          console.log(japanese);
          console.log(imageUrl);
          console.log(types);
        }}
        size="xl"
      >
        データフェッチ
      </Button>
      <Quiz chinese={chinese} />
      <TypeHint types={types} />
      <SilhouetteHint imageUrl={imageUrl} />
      <SubmitForm japanese={japanese} setIsCorrect={setIsCorrect} />
      {isCorrect && <div>正解！</div>}
    </div>
  );
};

export default Page;
