import { createFileRoute, Link } from "@tanstack/react-router";
import { Figure, PageHero, SectionTitle } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cultura")({
  head: () => seo("Cultura y tradiciones", "Música llanera, joropo, tradiciones campesinas y celebraciones de Guamal y los Llanos Orientales."),
  component: Cultura,
});

function Cultura() {
  return (
    <>
      <PageHero
        eyebrow="Cultura y tradiciones"
        title="Arpa, cuatro y maracas"
        intro="Guamal comparte la cultura de los Llanos Orientales: la música llanera, el joropo, la vida de campo y el gusto por reunirse alrededor de la comida."
        photo="arpa"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-lg leading-relaxed">
          <SectionTitle eyebrow="Música llanera" title="El sonido del llano" />
          <p>
            La música llanera se toca con arpa, cuatro y maracas. Se canta en coplas y pasajes que hablan del caballo, el río, el trabajo en el hato y el amor por la tierra. Es una tradición que el Meta comparte con los Llanos de Colombia y Venezuela.
          </p>
          <SectionTitle eyebrow="Joropo" title="El baile del zapateo" />
          <p>
            El joropo se baila en pareja: el hombre zapatea y la mujer escobillea. En colegios y festivales del Meta se baila con el traje tradicional: liqui liqui o camisa y pantalón con sombrero para los hombres, y falda amplia de flores para las mujeres.
          </p>
        </div>
        <Figure photo="joropo" className="aspect-[4/3]" />
      </section>
      <section className="bg-sand/50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold">Tradiciones campesinas</h3>
            <p className="mt-2 text-muted-foreground">
              El paseo de río con sancocho en familia, la cabalgata y el trabajo en las fincas de cacao y frutales hacen parte de la vida rural de Guamal.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Festival de Colonias</h3>
            <p className="mt-2 text-muted-foreground">
              Es la fiesta más grande del municipio. Celebra a las personas que llegaron a Guamal desde otras regiones y hoy son parte de él.
            </p>
            <Link to="/festivales" className="mt-2 inline-block font-semibold text-river hover:underline">Ver agenda →</Link>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Artesanías y testimonios</h3>
            <p className="mt-2 text-muted-foreground">
              Aún no tenemos información verificada sobre artesanos ni testimonios de habitantes. Esta sección se completará con entrevistas hechas por el equipo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
