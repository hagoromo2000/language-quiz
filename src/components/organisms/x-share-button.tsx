import { ComponentProps, forwardRef } from "react";
import { Button } from "../ui/button";
import { FaXTwitter } from "react-icons/fa6";

type XIntentPostProps = {
  text?: string;
  url?: string;
  hashtags?: string[];
  via?: string;
  related?: string[];
  in_reply_to?: string;
} & Omit<ComponentProps<"a">, "href" | "target" | "rel">;

export const XIntentPost = forwardRef<HTMLAnchorElement, XIntentPostProps>(
  (
    { text, url, hashtags, via, related, in_reply_to, ...intrinsicProps },
    forwardedRef
  ) => {
    const _url = new URL("https://x.com/intent/tweet");

    text && _url.searchParams.set("text", text);
    url && _url.searchParams.set("url", url);
    hashtags && _url.searchParams.set("hashtags", hashtags.join(","));
    via && _url.searchParams.set("via", via);
    related && _url.searchParams.set("related", related.join(","));
    in_reply_to && _url.searchParams.set("in_reply_to", in_reply_to);

    return (
      <Button asChild size="lg" variant="secondary">
        <a
          {...intrinsicProps}
          href={_url.toString()}
          ref={forwardedRef}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
          でシェア!
        </a>
      </Button>
    );
  }
);
XIntentPost.displayName = "XIntentPost";
