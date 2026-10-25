import { createFileRoute, Link } from "@tanstack/react-router";
import { Figure, PageHero, SectionTitle } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/conoce")({
  head: () => seo("Conoce Guamal", "Ubicación, paisaje, ríos, origen del nombre y vida económica de Guamal, en el piedemonte del Meta."),
  component: Conoce,
});

function Conoce() {
  return (
    <>
      <PageHero
        eyebrow="Conoce Guamal"
        title="Un pueblo entre la montaña y el llano"
        intro="Guamal es un municipio del departamento del Meta, en el piedemonte llanero: el lugar donde la cordillera Oriental se encuentra con los Llanos Orientales."
        photo="alcaraban"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed">
          <SectionTitle eyebrow="Ubicación y paisaje" title="De los páramos a la llanura" />
          <p>
            El documento resumen del Esquema de Ordenamiento Territorial dice que el municipio tiene montañas de más de 4.500 metros sobre el nivel del mar. Por eso Guamal tiene clima cálido, medio, frío y de páramo.
          </p>
          <p>
            El casco urbano está en la parte baja y cálida. El directorio municipal calcula que queda a unos 33 km en línea recta de Villavicencio. Esa es la distancia en línea recta, no por carretera.
          </p>
        </div>
        <div className="space-y-4 text-lg leading-relaxed">
          <SectionTitle eyebrow="Agua" title="Tierra de ríos" />
          <p>
            Los ríos Guamal, Humadea y Orotoy forman parte de las cuencas del municipio. El Orotoy marca el límite con Acacías. En temporada seca, sus aguas son el plan favorito de la gente de Guamal y de los visitantes.
          </p>
          <Link to="/naturaleza" className="font-semibold text-river hover:underline">Ir a Naturaleza y ríos →</Link>
        </div>
      </section>

      <section className="bg-sand/50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_1.2fr] md:items-center">
          <Figure photo="flor" className="aspect-square" />
          <div className="space-y-4 text-lg leading-relaxed">
            <SectionTitle eyebrow="El nombre" title="¿Por qué se llama Guamal?" />
            <p>
              Según el Periódico del Meta, el nombre viene de los muchos árboles de guama que había en estas tierras. Hoy esa fruta es difícil de encontrar.
            </p>
            <SectionTitle eyebrow="Historia" title="Lo que aún estamos investigando" />
            <p className="text-base text-muted-foreground">
              No encontramos fuentes oficiales en línea con la fecha de fundación ni la historia completa del municipio, así que no las publicamos. Esta parte se completará con documentos de la Alcaldía o de la Casa de la Cultura.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed">
          <SectionTitle eyebrow="Economía y tradición" title="Campo, cacao y cocina" />
          <p>
            En las veredas hay cacao, frutales como el mangostino, búfalos para queso, miel, huevos de codorniz y girasoles por temporadas. Así lo muestra la lista de agroturismo de la Alcaldía.
          </p>
          <p>
            En el pueblo, la cocina llanera es la reina: la carne a la mamona, la carne oreada y el pan de yuca están en casi todos los menús.
          </p>
        </div>
        <div className="space-y-4 text-lg leading-relaxed">
          <SectionTitle eyebrow="Turismo" title="Por qué importa para la comunidad" />
          <p>
            El directorio turístico registra decenas de hoteles, fincas y restaurantes. La mayoría son negocios familiares. Cada visita bien planeada ayuda a que estas familias sigan trabajando y a que los ríos se cuiden.
          </p>
        </div>
      </section>
    </>
  );
}
