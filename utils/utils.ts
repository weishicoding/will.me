import { colord } from "colord";

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
