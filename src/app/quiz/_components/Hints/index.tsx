import React from "react";
import { TypeHint } from "./TypeHint";
import { SilhouetteHint } from "./SilhouetteHint";
import { EnglishHint } from "./EnglishHint";
import { GenerationHint } from "./GenerationHint";

type PropsType = {
  types: string[];
  imageUrl: string;
  english: string;
};
export const Hints = (props: PropsType) => {
  return (
    <>
      <TypeHint types={props.types} />
      <EnglishHint english={props.english} />
      <GenerationHint />
      <SilhouetteHint imageUrl={props.imageUrl} />
    </>
  );
};
