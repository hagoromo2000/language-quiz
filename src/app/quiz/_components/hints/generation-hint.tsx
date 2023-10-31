"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { useGeneration } from "@/hooks/use-generation";

export const GenerationHint = () => {
  const generation = useGeneration();
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>ヒント3 初登場作品</AccordionTrigger>
        <AccordionContent>
          <p className="text-lg">{generation}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
