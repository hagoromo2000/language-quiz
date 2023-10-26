import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PropsType = {
  english: string;
};

export const EnglishHint = (props: PropsType) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>ヒント2 英語名</AccordionTrigger>
        <AccordionContent>
          <p className="text-lg">{props.english}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
