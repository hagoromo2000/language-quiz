import React from "react";
import { Button } from "../../../_components/ui/button";
import { XIntentPost } from "@/lib/XIntentPost";
import { FaXTwitter } from "react-icons/fa6";

type PropsType = {
  text?: string;
  url?: string;
  hashtags?: string[];
};

export const XShareButton = (props: PropsType) => {
  return (
    <Button asChild size="lg" variant="outline">
      <XIntentPost text={props.text} url={props.url} hashtags={props.hashtags}>
        <FaXTwitter />
        でシェア
      </XIntentPost>
    </Button>
  );
};
