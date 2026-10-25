import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useMemo, useState } from "react";
import { categories, places as allPlaces, type Category } from "@/data/places";
import { cn } from "@/lib/utils";
import { CATEGORY_DOT } from "./mapColors";

const GuamalMap = lazy(() => import("./GuamalMap"));

export function MapBlock({ height = 520, initial }: { height?: number; initial?: Category[] }) {
  const [active, setActive] = useState<Category[]>(initial ?? categories.map((c) => c.id));
  const located = allPlaces.filter((p) => p.coords);
  const shown = useMemo(() => located.filter((p) => active.includes(p.category)), [active, located]);
  const toggle = (c: Category) => setActive((a) => (a.includes(c) ? a.filter((x) => x !== c) : [...a, c]));
  const fallback = <div style={{ height }} className="w-full animate-pulse rounded-lg bg-muted" />;

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Filtrar el mapa">
        {categories.map((c) => {
          const on = active.includes(c.id);
          const n = located.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              aria-pressed={on}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
                on ? "bg-card font-semibold" : "bg-transparent text-muted-foreground line-through",
              )}
            >
              <span className={cn("size-3 rounded-full", CATEGORY_DOT[c.id])} />
              {c.label} ({n})
            </button>
          );
        })}
      </div>
      <ClientOnly fallback={fallback}>
        <Suspense fallback={fallback}>
          <GuamalMap places={shown} height={height} />
        </Suspense>
      </ClientOnly>
      <p className="mt-2 text-xs text-muted-foreground">
        Solo se muestran lugares con coordenadas publicadas por sus fuentes. Los marcadores con borde punteado tienen ubicación aproximada. Toca un marcador para abrir su ficha.
      </p>
    </div>
  );
}
