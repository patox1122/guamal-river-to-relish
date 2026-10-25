import { createFileRoute, Link } from "@tanstack/react-router";
import { places } from "@/data/places";
import { PageHero, SectionTitle } from "@/components/site/Decor";
import { PlaceCard } from "@/components/site/PlaceCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/alojamiento")({
  head: () => seo("Hoteles y alojamiento rural", "Hoteles del centro, fincas turísticas y casas rurales de Guamal, Meta, con enlaces a sus fichas."),
  component: Alojamiento,
});

function Alojamiento() {
  const list = places.filter((p) => p.category === "alojamiento");
  return (
    <>
      <PageHero eyebrow="Alojamiento" title="Dormir en el pueblo o en el campo" intro="Puedes quedarte en un hotel del centro, cerca del parque, o en una finca de las veredas, rodeado de naturaleza." />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <p className="rounded-lg bg-sand/60 p-4 text-sm">
          Los servicios que mencionamos (piscina, restaurante, capacidad) vienen del directorio municipal. No publicamos precios ni disponibilidad: confírmalos siempre con el establecimiento antes de reservar.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
        <div className="mt-14">
          <SectionTitle eyebrow="Más opciones" title="Más de 30 alojamientos en el directorio">
            <p>Mira la lista completa de hoteles y fincas registrados, con enlaces a sus perfiles.</p>
          </SectionTitle>
          <Link to="/negocios" className="mt-4 inline-block rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Directorio de negocios</Link>
        </div>
      </section>
    </>
  );
}
