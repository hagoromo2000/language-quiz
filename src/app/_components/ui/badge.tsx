import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        fire: "border-transparent bg-red-600 text-white",
        water: "border-transparent bg-blue-600 text-white",
        grass: "border-transparent bg-green-600 text-white",
        electric: "border-transparent bg-yellow-400 text-black",
        ice: "border-transparent bg-blue-400 text-black",
        fighting: "border-transparent bg-red-700 text-white",
        poison: "border-transparent bg-purple-600 text-white",
        ground: "border-transparent bg-yellow-800 text-white",
        flying: "border-transparent bg-blue-400 text-white",
        psychic: "border-transparent bg-purple-400 text-white",
        bug: "border-transparent bg-green-400 text-white",
        rock: "border-transparent bg-yellow-700 text-white",
        ghost: "border-transparent bg-purple-700 text-white",
        dark: "border-transparent bg-gray-900 text-white",
        dragon: "border-transparent bg-purple-900 text-white",
        steel: "border-transparent bg-gray-400 text-black",
        fairy: "border-transparent bg-pink-400 text-black",
        normal: "border-transparent bg-gray-300 text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
