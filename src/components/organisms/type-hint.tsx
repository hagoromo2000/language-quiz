import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";
import { convertTypesToEnglish } from "@/hooks/use-pokemon-attributes";

type PropsType = {
  types: string[];
};

export const TypeHint = (props: PropsType) => {
  const englishTypes = convertTypesToEnglish(props.types);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>ヒント1 タイプ</AccordionTrigger>
        <AccordionContent>
          {props.types?.map((type, index) => (
            <Badge key={type} variant={englishTypes[index]}>
              {type}
            </Badge>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
