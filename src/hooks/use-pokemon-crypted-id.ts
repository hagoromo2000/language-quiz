import { generationAtom } from "@/atoms/generation-atoms";
import { useAtom } from "jotai";

export const useRandomNumber = () => {
  const [generation] = useAtom(generationAtom);
  return Math.floor(Math.random() * generation) + 1;
};

export const encrypt = (id: number): string => {
  return btoa(id.toString());
};

export const decrypt = (encryptedId: string): number => {
  return parseInt(atob(encryptedId));
};
