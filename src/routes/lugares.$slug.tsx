import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import { photos } from "@/data/photos";
import { categoryLabel, getPlace, placePhoto, REVIEWED } from "@/data/places";
import { Figure, StatusBadge } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/lugares/$slug")({
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return { place };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(loaderData.place.name, loaderData.place.summary)
      : { meta: [{ title: "Lugar no encontrado | Guamal Explora" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">No encontramos ese lugar</h1>
      <Link to="/lugares" className="mt-6 inline-block font-semibold text-river underline">Volver al directorio</Link>
    </div>
  ),
  component: Ficha,
});

function Ficha() {
  const { place } = Route.useLoaderData();
  const gallery = place.gallery ?? [placePhoto(place)];
  const [current, setCurrent] = useState(gallery[0]);
  const c = place.coords;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/lugares" className="text-sm font-semibold text-river hover:underline">← Todos los lugares</Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Figure photo={current} className="aspect-[4/3]" />
          {!place.photo && <p className="mt-1 text-xs italic text-muted-foreground">Todavía no tenemos una foto libre de este lugar; mostramos una de la zona.</p>}
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-2" role="group" aria-label="Galería">
              {gallery.map((g) => (
                <button
                  key={g}
                  onClick={() => setCurrent(g)}
                  aria-label={`Ver foto: ${photos[g].alt}`}
                  aria-pressed={g === current}
                  className={`h-16 w-20 overflow-hidden rounded border-2 ${g === current ? "border-primary" : "border-transparent"}`}
                >
                  <img src={photos[g].src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="eyebrow">{categoryLabel(place.category)}</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight">{place.name}</h1>
          <div className="mt-3"><StatusBadge status={place.status} /></div>
          <p className="mt-4 flex items-start gap-2 text-muted-foreground"><MapPin className="mt-0.5 size-4 shrink-0" />{place.sector}</p>
          {c ? (
            <div className="mt-4 rounded-lg border bg-card p-4 text-sm">
              <p>
                Coordenadas según la fuente: {c.lat.toFixed(5)}, {c.lng.toFixed(5)}
                {c.approx && <strong className="block text-accent-foreground">Ubicación aproximada: confírmala antes de salir.</strong>}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 font-semibold text-primary-foreground" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lng}`}>
                  Google Maps <ExternalLink className="size-3.5" />
                </a>
                <a className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 font-semibold hover:bg-secondary" target="_blank" rel="noreferrer" href={`https://www.openstreetmap.org/?mlat=${c.lat}&mlon=${c.lng}#map=16/${c.lat}/${c.lng}`}>
                  OpenStreetMap <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
              No encontramos coordenadas confiables para este lugar, por eso no aparece en el mapa.
            </p>
          )}
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          {place.description.map((d, i) => <p key={i}>{d}</p>)}
          <h2 className="pt-4 text-2xl font-semibold">Qué puedes hacer</h2>
          <ul className="list-disc space-y-1 pl-6 text-base">{place.todo.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <aside className="space-y-6">
          <div className="rounded-lg bg-sand/60 p-5">
            <h2 className="text-xl font-semibold">Recomendaciones</h2>
            <ul className="mt-3 space-y-2 text-sm">{place.tips.map((t) => <li key={t}>— {t}</li>)}</ul>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Fuente</p>
            <a href={place.source.url} target="_blank" rel="noreferrer" className="text-river underline">{place.source.label}</a>
            <p className="mt-1">Revisado el {REVIEWED}. Horarios, precios y contactos no se publican aquí: confírmalos con el lugar o en la fuente.</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
