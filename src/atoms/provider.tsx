"use client";

import { Provider } from "jotai";

export default function Providers(props: { children: React.ReactNode }) {
  return <Provider>{props.children}</Provider>;
}
