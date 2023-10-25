"use client";
import { SubmitForm } from "@/components/organisms/submit-form";
import { Button } from "@/components/ui/button";
import { usePokemonAttributes } from "@/hooks/use-pokemon-attributes";
import { usePokemonSpecies } from "@/hooks/use-pokemon-speacies";

const Page = () => {
  const { error, isLoading, chinese, japanese } = usePokemonSpecies("1");
  const { imageUrl, types } = usePokemonAttributes("1");
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
      <SubmitForm japanese={japanese} />
    </div>
  );
};

export default Page;
