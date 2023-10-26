import React from "react";
import { TypeHint } from "./type-hint";
import { SilhouetteHint } from "./silhouette-hint";
import { EnglishHint } from "./english-hint";

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
      <SilhouetteHint imageUrl={props.imageUrl} />
    </>
  );
};
