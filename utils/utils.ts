import { colord } from "colord";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { site } from "@/config/site";

//The function cn you provided is a utility function that merges class names using clsx and twMerge.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Change hex to rgb color
export const hexToRgb = (
  hex?: string | null,
  alpha?: number,
  numbersOnly?: boolean
): string | null => {
  if (!hex) return null;
  const color = colord(hex).alpha(alpha === 0 ? 0 : alpha || 1);
  const { r, g, b, a } = color.toRgb();
  if (numbersOnly) return `${r} ${g} ${b}`;
  if (alpha) {
    return `rgba(${r} ${g} ${b} / ${a})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export function absoluteUrl(url: string) {
  if (url.startsWith("/")) url = url.slice(1);
  return `${site.url}/${url}`;
}
