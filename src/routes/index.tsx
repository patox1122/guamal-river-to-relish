import { createFileRoute, Link } from "@tanstack/react-router";
import { Bed, Music, Trees, UtensilsCrossed } from "lucide-react";
import { photos } from "@/data/photos";
import { places } from "@/data/places";
import { Figure, RiverLine, SectionTitle } from "@/components/site/Decor";
import { PlaceCard } from "@/components/site/PlaceCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Descubre Guamal. Vive el Llano",
      "Guía turística de Guamal, Meta, hecha por estudiantes para la ExpoJOMACO: ríos Humadea, Guamal y Orotoy, cultura llanera, comida típica y fincas.",
    ),
  component: Home,
});

const QUICK = [
  { to: "/naturaleza", label: "Naturaleza", text: "Humadea, Guamal, Orotoy y Pozo Azul", Icon: Trees },
  { to: "/cultura", label: "Cultura", text: "Joropo, arpa y Festival de Colonias", Icon: Music },
  { to: "/gastronomia", label: "Gastronomía", text: "Carne a la llanera y batido guamaluno", Icon: UtensilsCrossed },
  { to: "/alojamiento", label: "Alojamiento", text: "Hoteles del centro y fincas rurales", Icon: Bed },
] as const;

const FEATURED = ["rio-y-malecon-humadea", "parque-principal", "ruta-del-cacao", "iglesia-parroquial"];

function Home() {
  const hero = photos.puenteHumadea;
  const featured = FEATURED.map((s) => places.find((p) => p.slug === s)!);
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <img src={hero.src} alt={hero.alt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/50 to-forest/10" />
        <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-14 text-forest-foreground">
          <p className="eyebrow !text-accent">Guamal · Meta · Colombia</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            Descubre Guamal.<br />
            <span className="italic text-accent">Vive el Llano.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-forest-foreground/90">
            Guamal está en el piedemonte del Meta, donde la cordillera baja hacia la llanura. Aquí hay ríos de piedra, un parque con árboles grandes, cacao en las veredas y comida a la llanera.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/lugares" className="rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground hover:brightness-95">
              Explorar lugares
            </Link>
            <Link to="/planifica" className="rounded-md border border-forest-foreground/60 px-5 py-3 font-semibold hover:bg-forest-foreground/10">
              Planifica tu visita
            </Link>
          </div>
          <p className="mt-6 text-xs text-forest-foreground/70">
            Foto: Puente del Humadea · {hero.author} · {hero.license}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map(({ to, label, text, Icon }) => (
            <Link key={to} to={to} className="group flex gap-4 bg-card p-6 hover:bg-secondary">
              <Icon className="size-7 shrink-0 text-river" />
              <div>
                <p className="font-display text-xl font-semibold group-hover:text-primary">{label}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Para empezar" title="Lugares destacados" />
          <Link to="/lugares" className="font-semibold text-river hover:underline">Ver los {places.length} lugares →</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <Figure photo="iglesiaNoche" className="aspect-[4/3]" />
        <div>
          <SectionTitle eyebrow="Turismo local" title="¿Por qué visitar con responsabilidad?">
            <p>
              Cuando comes en un restaurante de Guamal, te hospedas en una finca o compras cacao a un productor, ese dinero se queda en el municipio. Cuidar los ríos y respetar a la gente es lo que permite que los próximos visitantes también disfruten de Guamal.
            </p>
          </SectionTitle>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/negocios" className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Negocios locales</Link>
            <Link to="/festivales" className="rounded-md border px-4 py-2 font-semibold hover:bg-secondary">Festival de Colonias 2026</Link>
          </div>
        </div>
      </section>
      <RiverLine className="mx-auto mt-20 max-w-7xl text-river/40" />
    </>
  );
}
