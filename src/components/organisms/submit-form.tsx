import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useReward } from "react-rewards";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  PokemonName,
  hiraganaToKatakana,
  pokemonSchema,
} from "@/hooks/use-submit";

const formSchema = z.object({
  pokemon: pokemonSchema,
});

type PropsType = {
  japanese: string;
  setIsCorrect: (isCorrect: boolean) => void;
  isCorrect: boolean;
};

export const SubmitForm = (props: PropsType) => {
  const form = useForm<PokemonName>({
    resolver: zodResolver(formSchema),
  });
  const { reward } = useReward("rewardId", "confetti");

  const onSubmit = (data: PokemonName) => {
    const submittedName = hiraganaToKatakana(data.pokemon);
    if (submittedName === props.japanese) {
      props.setIsCorrect(true);
      reward();
    } else {
      form.setError("pokemon", {
        type: "manual",
        message: "不正解",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="pokemon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ポケモン名を入力</FormLabel>
              <FormControl>
                <Input
                  placeholder="ピカチュウ"
                  {...field}
                  disabled={props.isCorrect}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2">
          <Button type="submit" disabled={props.isCorrect}>
            キミに決めた！
            <span id="rewardId" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
