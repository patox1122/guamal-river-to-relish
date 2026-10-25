import { createFileRoute } from "@tanstack/react-router";
import { places } from "@/data/places";
import { Figure, PageHero, SectionTitle } from "@/components/site/Decor";
import { PlaceRow } from "@/components/site/PlaceCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/rural")({
  head: () => seo("Fincas y turismo rural", "Ruta del Cacao, agroturismo, mangostino, queso de búfala y productores de las veredas de Guamal."),
  component: Rural,
});

function Rural() {
  const list = places.filter((p) => p.category === "rural");
  return (
    <>
      <PageHero eyebrow="Fincas y turismo rural" title="La Ruta del Cacao y el campo guamaluno" intro="En las veredas de Guamal hay productores de cacao, frutales, lácteos de búfala y miel. Algunos reciben visitantes y otros solo venden sus productos." photo="cacao" />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionTitle eyebrow="Antes de ir" title="Llama primero">
            <p>
              No prometemos visitas guiadas, degustaciones ni recorridos. Cada productor decide si recibe visitantes. Revisa la lista oficial de agroturismo de la Alcaldía, donde están sus contactos.
            </p>
          </SectionTitle>
          <a
            href="https://guamalmeta.micolombiadigital.gov.co/turismo/establecimientos-de-agroturismo"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground"
          >
            Lista oficial de agroturismo
          </a>
          <div className="mt-8"><Figure photo="flor" className="aspect-[4/3]" /></div>
        </div>
        <div>{list.map((p) => <PlaceRow key={p.slug} place={p} />)}</div>
      </section>
    </>
  );
}
