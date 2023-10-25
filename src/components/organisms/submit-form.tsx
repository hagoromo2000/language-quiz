import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const pokemonSchema = z.string().refine(
  (value) => {
    const regex = /^[ぁ-んァ-ン]+$/;
    return regex.test(value) && value.length <= 6;
  },
  {
    message: "ポケモン名はひらがなかカタカナで6文字以内で入力してください",
  }
);

const formSchema = z.object({
  pokemon: pokemonSchema,
});

type PropsType = {
  japanese?: string;
};

export const SubmitForm = ({ japanese }: PropsType) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    if (japanese && data.pokemon === japanese) {
      // 一致する場合の処理
      alert("一致しました！");
    } else {
      form.setError("pokemon", {
        type: "manual",
        message: "不正解",
      });
    }
  };

  return (
    <Form {...form}>
      {/* 実際のform要素にonSubmitイベントハンドラを追加 */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="pokemon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ポケモン名を入力</FormLabel>
              <FormControl>
                <Input placeholder="ピカチュウ" {...field} />
              </FormControl>
              <FormDescription>ひらがなかカタカナで入力してね</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">キミに決めた！</Button>
      </form>
    </Form>
  );
};
