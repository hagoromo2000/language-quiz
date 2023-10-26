import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

type PropsType = {
  imageUrl: string;
};

export const SilhouetteHint = (props: PropsType) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>ヒント3 シルエット</AccordionTrigger>
        <AccordionContent>
          <div style={{ filter: "brightness(0%)" }}>
            <Image
              src={props.imageUrl}
              width={200}
              height={200}
              alt="シルエット"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
