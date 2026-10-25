import { createFileRoute } from "@tanstack/react-router";
import { allPhotos } from "@/data/photos";
import { REVIEWED } from "@/data/places";
import { sources } from "@/data/sources";
import { PageHero, SectionTitle } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/fuentes")({
  head: () => seo("Fuentes y créditos fotográficos", "Fuentes de información, créditos y licencias de las fotografías usadas en Guamal Explora."),
  component: Fuentes,
});

function Fuentes() {
  return (
    <>
      <PageHero eyebrow="Fuentes y créditos" title="De dónde viene la información" intro={`Última revisión del contenido: ${REVIEWED}. Los datos de los negocios pueden cambiar: confírmalos siempre con cada establecimiento.`} />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Información" title="Fuentes consultadas" />
        <ul className="mt-6 divide-y border-y">
          {sources.map((s) => (
            <li key={s.url} className="grid gap-1 py-4 md:grid-cols-[1fr_1.2fr] md:gap-6">
              <a href={s.url} target="_blank" rel="noreferrer" className="font-semibold text-river underline">{s.label}</a>
              <span className="text-sm text-muted-foreground">{s.use}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Fotografías" title="Créditos y licencias">
          <p>Todas las fotos vienen de Wikimedia Commons con licencias libres. Las fotos marcadas como «referencia» no fueron tomadas en Guamal.</p>
        </SectionTitle>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allPhotos.map((p) => (
            <div key={p.id} className="flex gap-3 rounded-lg border bg-card p-3">
              <img src={p.src} alt={p.alt} loading="lazy" className="size-20 shrink-0 rounded object-cover" />
              <div className="text-sm">
                <p className="font-semibold">{p.title}</p>
                <p className="text-muted-foreground">{p.author} · {p.license}</p>
                <p className="text-xs">{p.inGuamal ? "Tomada en Guamal" : "Referencia regional"}</p>
                <a href={p.source} target="_blank" rel="noreferrer" className="text-xs text-river underline">Ver en Commons</a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Mapas: © colaboradores de OpenStreetMap (licencia ODbL), mostrados con la librería Leaflet (licencia BSD-2).
          Pendientes: las dos fotografías originales del equipo (río y parque principal) y fotos del Festival de Colonias.
        </p>
      </section>
    </>
  );
}
