import { FC } from "react";

export type PropsType = {
  text: string;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  color?:
    | "gray"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | "white"
    | "black"
    | "current";
};

export const Text: FC<PropsType> = (props) => {
  const textSizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const textColorClass = {
    gray: "text-gray-400",
    red: "text-red-400",
    yellow: "text-yellow-400",
    green: "text-green-400",
    blue: "text-blue-400",
    indigo: "text-indigo-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
    white: "text-white",
    black: "text-black",
    current: "text-current",
  };

  const textSize = props.size ? textSizeClass[props.size] : "text-base";
  const textColor = props.color ? textColorClass[props.color] : "text-gray-600";

  return <span className={`${textSize} ${textColor}`}>{props.text}</span>;
};
