import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/proyecto")({
  head: () => seo("Sobre el proyecto", "Guamal Explora es un proyecto escolar de tecnología, investigación y promoción turística presentado en la ExpoJOMACO."),
  component: Proyecto,
});

function Proyecto() {
  return (
    <>
      <PageHero eyebrow="Sobre el proyecto" title="Hecho para la ExpoJOMACO" intro="Guamal Explora es un proyecto educativo. Queremos organizar y dar a conocer la información turística de Guamal, Meta, de forma clara y honesta." />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-3">
        <div>
          <SectionTitle eyebrow="Propósito" title="Investigar y compartir" />
          <p className="mt-3 text-muted-foreground">Reunimos en un solo lugar lo que dicen las fuentes oficiales y los directorios sobre los ríos, la cultura, la comida y los negocios del municipio.</p>
        </div>
        <div>
          <SectionTitle eyebrow="Para el visitante" title="Una guía útil" />
          <p className="mt-3 text-muted-foreground">Cada ficha dice de dónde viene la información y si está confirmada o pendiente, para que el visitante sepa qué debe preguntar antes de ir.</p>
        </div>
        <div>
          <SectionTitle eyebrow="Identidad" title="Turismo responsable" />
          <p className="mt-3 text-muted-foreground">Mostrar lo nuestro con orgullo también es cuidarlo: los ríos, el campo y las familias que viven del turismo.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-lg bg-sand/60 p-6">
          <p className="font-semibold">Importante</p>
          <p className="mt-1 text-muted-foreground">
            Este no es un portal oficial de la Alcaldía de Guamal y no tiene alianzas ni avales institucionales. Los nombres del equipo se añadirán cuando los estudiantes los confirmen.
          </p>
          <Link to="/fuentes" className="mt-3 inline-block font-semibold text-river hover:underline">Ver fuentes y créditos →</Link>
        </div>
      </section>
    </>
  );
}
