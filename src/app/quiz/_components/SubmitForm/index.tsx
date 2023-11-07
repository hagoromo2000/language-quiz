import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useReward } from "react-rewards";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  PokemonName,
  hiraganaToKatakana,
  pokemonSchema,
} from "@/hooks/useSubmit";

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
    defaultValues: {
      pokemon: "",
    },
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
                <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                  <div className="flex flex-col md:w-auto">
                    <Input
                      placeholder="ピカチュウ"
                      {...field}
                      disabled={props.isCorrect}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={props.isCorrect}
                    className="flex-shrink"
                  >
                    キミに決めた！
                    <span id="rewardId" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="h-5" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
