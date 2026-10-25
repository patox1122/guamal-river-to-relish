import type { Category } from "@/data/places";

export const CATEGORY_VAR: Record<Category, string> = {
  naturaleza: "--river",
  parques: "--primary",
  cultura: "--forest",
  gastronomia: "--destructive",
  alojamiento: "--accent-foreground",
  rural: "--accent",
};

export const CATEGORY_DOT: Record<Category, string> = {
  naturaleza: "bg-river",
  parques: "bg-primary",
  cultura: "bg-forest",
  gastronomia: "bg-destructive",
  alojamiento: "bg-accent-foreground",
  rural: "bg-accent",
};
