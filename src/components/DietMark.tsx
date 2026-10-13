import type { Diet } from "@/data/menu";

/**
 * The Indian food-label mark: a square with a dot (veg) or a triangle (non-veg).
 * The shapes differ as well as the colours, so it reads without colour too.
 */
export function DietMark({ diet, className = "" }: { diet: Diet; className?: string }) {
  const veg = diet === "veg";
  return (
    <svg
      viewBox="0 0 16 16"
      role="img"
      aria-label={veg ? "Veg" : "Non-veg"}
      className={`size-3.5 shrink-0 ${veg ? "text-veg" : "text-non-veg"} ${className}`}
    >
      <rect x="1" y="1" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {veg ? <circle cx="8" cy="8" r="3.5" fill="currentColor" /> : <path d="M8 4.2 12 11.5H4Z" fill="currentColor" />}
    </svg>
  );
}
