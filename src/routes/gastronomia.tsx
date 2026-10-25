import { createFileRoute } from "@tanstack/react-router";
import { places } from "@/data/places";
import { Figure, PageHero, SectionTitle } from "@/components/site/Decor";
import { PlaceCard } from "@/components/site/PlaceCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gastronomia")({
  head: () => seo("Gastronomía típica", "Carne a la mamona, carne oreada, pan de yuca, chicha y batido guamaluno, y restaurantes de Guamal."),
  component: Gastronomia,
});

const DISHES = [
  { name: "Carne a la llanera o mamona", scope: "Tradición regional", text: "Carne de res asada despacio en varas alrededor del fuego. Es el plato insignia de los Llanos." },
  { name: "Carne oreada y pan de yuca", scope: "Tradición regional", text: "Carne salada y secada al aire, servida con pan de yuca. Aparece en el menú de La Talanquera." },
  { name: "Pescado al chuzo y sancocho de gallina", scope: "Malecón del Humadea", text: "El directorio menciona estos platos en el sector del río Humadea." },
  { name: "Chicha", scope: "Malecón del Humadea", text: "Bebida tradicional que el directorio destaca como parte de la identidad de la zona del Humadea." },
  { name: "Batido Guamaluno", scope: "Propio de Guamal", text: "Preparación por la que es conocido El Garcero. Su receta no está documentada públicamente." },
];

function Gastronomia() {
  const list = places.filter((p) => p.category === "gastronomia");
  return (
    <>
      <PageHero eyebrow="Gastronomía" title="Sabores de fogón y vara" intro="La comida en Guamal se cocina despacio y se comparte. Separamos lo que es tradición de todo el llano de lo que está documentado como propio del municipio." photo="mamona" />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Platos" title="Qué probar" />
        <dl className="mt-8 divide-y border-y">
          {DISHES.map((d) => (
            <div key={d.name} className="grid gap-2 py-5 md:grid-cols-[1fr_auto_2fr] md:items-baseline md:gap-6">
              <dt className="font-display text-xl font-semibold">{d.name}</dt>
              <span className="w-fit rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold">{d.scope}</span>
              <dd className="text-muted-foreground">{d.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Restaurantes" title="Dónde comer">
          <p>Datos tomados del directorio turístico municipal. Confirma horarios y menú antes de ir.</p>
        </SectionTitle>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
      </section>
      <section className="mx-auto mt-14 max-w-3xl px-4">
        <Figure photo="cacao" className="aspect-[16/9]" />
      </section>
    </>
  );
}
