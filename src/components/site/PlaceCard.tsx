import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { photos } from "@/data/photos";
import { categoryLabel, placePhoto, type Place } from "@/data/places";
import { StatusBadge } from "./Decor";

export function PlaceCard({ place }: { place: Place }) {
  const p = photos[placePhoto(place)];
  const ref = !place.photo;
  return (
    <Link
      to="/lugares/$slug"
      params={{ slug: place.slug }}
      className="group flex flex-col overflow-hidden rounded-lg border bg-card transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {p ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-[1.03]" />
          {ref && <span className="absolute left-2 top-2 rounded bg-background/85 px-1.5 py-0.5 text-[11px] font-semibold text-muted-foreground">Foto de referencia</span>}
        </div>
      ) : (
        <PhotoPending label={place.name} className="aspect-[16/10] rounded-none border-0 border-b-2" />
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="eyebrow">{categoryLabel(place.category)}</p>
        <h3 className="text-xl font-semibold leading-snug group-hover:text-primary">{place.name}</h3>
        <p className="text-sm text-muted-foreground">{place.summary}</p>
        <p className="mt-auto flex items-center gap-1 pt-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5" /> {place.sector}
        </p>
        <StatusBadge status={place.status} />
      </div>
    </Link>
  );
}

/** Lista compacta en filas: rompe la monotonía de las tarjetas. */
export function PlaceRow({ place }: { place: Place }) {
  return (
    <Link
      to="/lugares/$slug"
      params={{ slug: place.slug }}
      className="group grid gap-1 border-b py-4 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-6"
    >
      <h3 className="text-lg font-semibold group-hover:text-primary">{place.name}</h3>
      <p className="text-sm text-muted-foreground">{place.summary}</p>
      <span className="text-sm font-semibold text-river">Ver ficha →</span>
    </Link>
  );
}
