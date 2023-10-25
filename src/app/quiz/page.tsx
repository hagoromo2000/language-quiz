"use client";
import { Button } from "@/components/ui/button";
import { usePokemonSpecies } from "@/hooks/use-pokemon-speacies";

const Page = () => {
  const data = usePokemonSpecies("1");
  return (
    <div>
      <Button
        onClick={() => {
          console.log(data);
        }}
        size="xl"
      >
        データフェッチ
      </Button>
    </div>
  );
};

export default Page;
