import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PhotoPending, SectionTitle } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/festivales")({
  head: () => seo("Festivales y eventos", "Agenda del XXX Festival de Colonias de Guamal 2026 y registro de ediciones anteriores."),
  component: Festivales,
});

const EVENTS = [
  {
    kind: "Próximo",
    name: "XXX Festival de Colonias 2026",
    when: "Inicia el jueves 29 de octubre de 2026 con la cabalgata",
    where: "Calles de Guamal",
    text: "La Alcaldía anunció que el festival empieza con la tradicional cabalgata por las calles del municipio. Una empresa de transporte habla de actividades hasta el 2 de noviembre, pero la programación completa no está confirmada por fuentes oficiales.",
    src: { label: "Alcaldía de Guamal", url: "https://guamalmeta.micolombiadigital.gov.co/noticias/cabalgata-xxx-festival-de-colonias-2026" },
  },
  {
    kind: "Recurrente",
    name: "Festival de Colonias",
    when: "Cada año, en el puente festivo de finales de octubre e inicios de noviembre. Próximas fechas por confirmar.",
    where: "Guamal",
    text: "Tiene cabalgata, gastronomía, música y actividades para niños, según la prensa regional sobre las ediciones recientes.",
    src: { label: "Noticiero del Llano", url: "https://www.noticierodelllano.com/2025/10/guamal-celebra-su-xxix-festival-de.html" },
  },
  {
    kind: "Registro histórico",
    name: "XXIX Festival de Colonias 2025",
    when: "30 de octubre al 3 de noviembre de 2025 (ya se realizó)",
    where: "Guamal",
    text: "La edición 2025 tuvo gastronomía, cabalgata y actividades para niños.",
    src: { label: "Noticiero del Llano", url: "https://www.noticierodelllano.com/2025/10/guamal-celebra-su-xxix-festival-de.html" },
  },
];

function Festivales() {
  return (
    <>
      <PageHero
        eyebrow="Festivales y eventos"
        title="Festival de Colonias"
        intro="Cada año Guamal celebra a las personas que llegaron de otras regiones y ayudaron a construir el municipio. En 2026 llega a su edición número 30."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.4fr_1fr]">
        <ol className="space-y-6">
          {EVENTS.map((e) => (
            <li key={e.name} className="rounded-lg border bg-card p-6">
              <span className="eyebrow">{e.kind}</span>
              <h2 className="mt-1 text-2xl font-semibold">{e.name}</h2>
              <p className="mt-2 font-semibold">{e.when}</p>
              <p className="text-sm text-muted-foreground">Lugar: {e.where}</p>
              <p className="mt-3">{e.text}</p>
              <a href={e.src.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-river underline">Fuente: {e.src.label}</a>
            </li>
          ))}
        </ol>
        <div className="space-y-6">
          <PhotoPending label="Foto del Festival de Colonias con permiso de su autor" className="aspect-[4/3]" />
          <SectionTitle eyebrow="Otros eventos" title="Agenda municipal">
            <p>No encontramos otros eventos con fechas confirmadas. Consulta las noticias de la Alcaldía para ver la agenda actualizada.</p>
          </SectionTitle>
          <a href="https://guamalmeta.micolombiadigital.gov.co/" target="_blank" rel="noreferrer" className="inline-block rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">
            Noticias de la Alcaldía
          </a>
        </div>
      </section>
    </>
  );
}
