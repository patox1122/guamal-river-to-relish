import { createFileRoute } from "@tanstack/react-router";
import { places } from "@/data/places";
import { PageHero } from "@/components/site/Decor";
import { MapBlock } from "@/components/map/MapBlock";
import { PlaceRow } from "@/components/site/PlaceCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/mapa")({
  head: () => seo("Mapa turístico interactivo", "Mapa de Guamal con ríos, parques, restaurantes, alojamientos y experiencias rurales, sobre OpenStreetMap."),
  component: Mapa,
});

function Mapa() {
  const missing = places.filter((p) => !p.coords);
  return (
    <>
      <PageHero eyebrow="Mapa" title="Guamal en el mapa" intro="Filtra por tipo de lugar y toca un marcador para ver su ficha. Usa los botones + y − para acercar o alejar." />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <MapBlock height={600} />
        <details className="mt-10 rounded-lg border bg-card p-5">
          <summary className="cursor-pointer font-semibold">Lugares sin coordenadas confiables ({missing.length})</summary>
          <div className="mt-3">{missing.map((p) => <PlaceRow key={p.slug} place={p} />)}</div>
        </details>
      </section>
    </>
  );
}
