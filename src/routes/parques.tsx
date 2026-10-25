import { createFileRoute } from "@tanstack/react-router";
import { places } from "@/data/places";
import { Figure, PageHero, PhotoPending, SectionTitle } from "@/components/site/Decor";
import { PlaceRow } from "@/components/site/PlaceCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/parques")({
  head: () => seo("Parques y arquitectura", "Parque principal, iglesia parroquial, Villa Olímpica y Taimaku Parque en Guamal, Meta."),
  component: Parques,
});

function Parques() {
  const list = places.filter((p) => p.category === "parques" || p.slug === "iglesia-parroquial");
  return (
    <>
      <PageHero
        eyebrow="Parques y arquitectura"
        title="La vida alrededor del parque"
        intro="En el centro de Guamal están el parque principal y la iglesia parroquial. Ahí la gente se encuentra, conversa y celebra."
        photo="iglesia2"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <Figure photo="iglesia" className="aspect-[3/4]" />
          <Figure photo="iglesiaNoche" className="aspect-[3/4]" />
          <PhotoPending label="Fotografía original del equipo: parque principal con árboles, bancas y espacio público" className="aspect-[3/4]" />
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <SectionTitle eyebrow="Lo que sabemos" title="Árboles con historia">
            <p>
              El directorio municipal dice que los árboles del parque tienen más de 60 años. No encontramos una declaratoria oficial de patrimonio ni la fecha de construcción de la iglesia, así que no las publicamos.
            </p>
          </SectionTitle>
          <div>{list.map((p) => <PlaceRow key={p.slug} place={p} />)}</div>
        </div>
      </section>
    </>
  );
}
