import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { z } from "zod";
import { categories, filterPlaces, places, type Category } from "@/data/places";
import { PageHero } from "@/components/site/Decor";
import { PlaceCard } from "@/components/site/PlaceCard";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

const catIds = categories.map((c) => c.id) as [Category, ...Category[]];

export const Route = createFileRoute("/lugares/")({
  validateSearch: z.object({
    q: z.string().optional().catch(undefined),
    cat: z.enum(catIds).optional().catch(undefined),
  }),
  head: () => seo("Lugares turísticos", "Busca y filtra ríos, parques, restaurantes, alojamientos y experiencias rurales de Guamal, Meta."),
  component: Lugares,
});

function Lugares() {
  const { q = "", cat } = Route.useSearch();
  const navigate = useNavigate({ from: "/lugares/" });
  const results = filterPlaces(places, q, cat ?? "todas");
  const set = (next: { q?: string | undefined; cat?: Category | undefined }) =>
    navigate({ search: (s) => ({ ...s, ...next }), replace: true });

  return (
    <>
      <PageHero
        eyebrow="Directorio"
        title="Lugares turísticos"
        intro="Cada lugar tiene su ficha con la fuente de donde sacamos la información. Busca por nombre, tipo de lugar o lo que quieras hacer."
      />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Buscar</span>
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => set({ q: e.target.value || undefined })}
              placeholder="Ej.: río, cacao, carne, hotel, Montecristo…"
              className="w-full rounded-md border bg-card py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
            <Chip on={!cat} onClick={() => set({ cat: undefined })}>Todas</Chip>
            {categories.map((c) => (
              <Chip key={c.id} on={cat === c.id} onClick={() => set({ cat: c.id })}>{c.label}</Chip>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "lugar encontrado" : "lugares encontrados"}
        </p>
        {results.length ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => <PlaceCard key={p.slug} place={p} />)}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed p-10 text-center">
            <p className="font-display text-2xl">No encontramos lugares con «{q}»</p>
            <p className="mt-2 text-muted-foreground">Prueba con otra palabra o quita el filtro de categoría.</p>
            <button onClick={() => set({ q: undefined, cat: undefined })} className="mt-4 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">
              Ver todos los lugares
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className={cn("rounded-full border px-3 py-1.5 text-sm font-medium", on ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-secondary")}
    >
      {children}
    </button>
  );
}
