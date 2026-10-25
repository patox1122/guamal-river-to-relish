import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { places } from "@/data/places";
import { Figure, PageHero, PhotoPending, SectionTitle } from "@/components/site/Decor";
import { PlaceCard } from "@/components/site/PlaceCard";
import { MapBlock } from "@/components/map/MapBlock";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/naturaleza")({
  head: () => seo("Naturaleza y ríos", "Río Humadea y su malecón, río Guamal, río Orotoy, Pozo Azul y río Camelias, con recomendaciones de seguridad."),
  component: Naturaleza,
});

function Naturaleza() {
  const list = places.filter((p) => p.category === "naturaleza");
  return (
    <>
      <PageHero
        eyebrow="Naturaleza y ríos"
        title="Aguas que bajan de la cordillera"
        intro="Los ríos de Guamal tienen orillas de piedra y agua fría que viene de la montaña. Son el plan de fin de semana de muchas familias del Meta."
        photo="puenteHumadea"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-lg border-l-4 border-accent bg-card p-6">
          <p className="flex items-center gap-2 font-display text-xl font-semibold"><AlertTriangle className="size-5 text-accent-foreground" /> Antes de entrar al río</p>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            <li>— Revisa el clima. Estos ríos pueden crecer rápido cuando llueve en la montaña, aunque en el pueblo haga sol.</li>
            <li>— No entres si el agua está turbia, sube o arrastra ramas.</li>
            <li>— Respeta los avisos de la comunidad, los salvavidas y las autoridades.</li>
            <li>— No dejes basura y no hagas fogatas fuera de las zonas permitidas.</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">Esta guía no garantiza que un sitio sea seguro para bañarse ni que esté abierto.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
      </section>
      <section className="bg-sand/50 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <SectionTitle eyebrow="Fauna y flora" title="Pequeños habitantes">
              <p>La biodiversidad del piedemonte también se ve de cerca: insectos, aves y flores en las orillas y los patios.</p>
            </SectionTitle>
          </div>
          <Figure photo="hormiga" className="aspect-[4/3]" />
          <PhotoPending label="Fotografía original del equipo: río de aguas poco profundas, piedras y vegetación" className="aspect-[4/3]" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionTitle eyebrow="Mapa" title="Dónde están los ríos" />
        <div className="mt-6"><MapBlock initial={["naturaleza"]} height={420} /></div>
      </section>
    </>
  );
}
