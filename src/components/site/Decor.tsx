import { ImageOff } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { photos, type PhotoKey } from "@/data/photos";
import type { Status } from "@/data/places";

/** Línea ondulada que evoca el cauce de un río. */
export function RiverLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className={cn("block h-4 w-full", className)} aria-hidden>
      <path d="M0 12 C 100 2, 200 22, 300 12 S 500 2, 600 12 S 800 22, 900 12 S 1100 2, 1200 12" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

/** Pequeña hoja como separador. */
export function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16Zm0 0L14 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow flex items-center gap-2"><Leaf className="text-primary" />{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h2>
      {children && <div className="mt-3 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, photo }: { eyebrow: string; title: string; intro: string; photo?: PhotoKey }) {
  const p = photo ? photos[photo] : undefined;
  return (
    <section className="border-b bg-sand/50">
      <div className={cn("mx-auto grid max-w-7xl gap-8 px-4 py-12 md:py-16", p && "md:grid-cols-[1.1fr_1fr] md:items-center")}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{intro}</p>
        </div>
        {p && <Figure photo={photo!} className="aspect-[4/3]" />}
      </div>
    </section>
  );
}

export function Figure({ photo, className, caption = true }: { photo: PhotoKey; className?: string; caption?: boolean }) {
  const p = photos[photo];
  return (
    <figure>
      <div className={cn("overflow-hidden rounded-lg bg-muted", className)}>
        <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground">
          {p.note ? <span className="font-medium text-foreground/80">{p.note} </span> : null}
          Foto: {p.author} · {p.license} ·{" "}
          <a href={p.source} target="_blank" rel="noreferrer" className="underline hover:text-river">Wikimedia Commons</a>
        </figcaption>
      )}
    </figure>
  );
}

export function PhotoPending({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/60 p-6 text-center text-sm text-muted-foreground",
        className,
      )}
      role="img"
      aria-label={`Pendiente de fotografía: ${label}`}
    >
      <ImageOff className="size-6" />
      <span className="font-semibold text-foreground/80">Pendiente de fotografía</span>
      <span>{label}</span>
    </div>
  );
}

const STATUS: Record<Status, { label: string; cls: string }> = {
  confirmado: { label: "Información confirmada", cls: "bg-primary/10 text-primary" },
  directorio: { label: "Dato de directorio · confirmar", cls: "bg-river/10 text-river" },
  pendiente: { label: "Pendiente de verificar", cls: "bg-accent/40 text-accent-foreground" },
};

export function StatusBadge({ status }: { status: Status }) {
  const s = STATUS[status];
  return <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold", s.cls)}>{s.label}</span>;
}
