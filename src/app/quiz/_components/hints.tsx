import React from "react";
import { TypeHint } from "./hints/type-hint";
import { SilhouetteHint } from "./hints/silhouette-hint";
import { EnglishHint } from "./hints/english-hint";
import { GenerationHint } from "./hints/generation-hint";

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
