import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import { businesses, businessUrl } from "@/data/businesses";
import { PageHero } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/negocios")({
  head: () => seo("Directorio de negocios locales", "Hoteles, fincas y restaurantes de Guamal registrados en el directorio turístico municipal, con enlaces a sus perfiles."),
  component: Negocios,
});

const TYPES = ["Hotel urbano", "Finca u hotel rural", "Restaurante o comida"] as const;

function Negocios() {
  const [q, setQ] = useState("");
  const n = q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const match = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(n);
  const shown = businesses.filter((b) => match(b.name) || match(b.type));

  return (
    <>
      <PageHero eyebrow="Negocios locales" title="Directorio de negocios" intro="Estos son los negocios que aparecen en el directorio turístico de Guamal. Cada enlace abre su perfil público, donde puedes ver los contactos que han publicado." />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="relative md:w-96">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar negocio…" aria-label="Buscar negocio" className="w-full rounded-md border bg-card py-2.5 pl-10 pr-3" />
          </label>
          <a href="https://turismoguamalmeta.com/" target="_blank" rel="noreferrer" className="rounded-md bg-accent px-4 py-2.5 text-center font-semibold text-accent-foreground">
            Solicitar inclusión de un negocio
          </a>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Esta página no guarda solicitudes. El botón abre el directorio turístico municipal, que tiene su propia sección «¿Tienes un negocio turístico en Guamal?» para registrarse.
        </p>
        {shown.length === 0 && <p className="mt-10 text-center text-lg">No hay negocios que coincidan con «{q}».</p>}
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          {TYPES.map((t) => {
            const items = shown.filter((b) => b.type === t);
            if (!items.length) return null;
            return (
              <div key={t}>
                <h2 className="border-b-2 border-primary pb-2 text-xl font-semibold">{t} ({items.length})</h2>
                <ul className="mt-2">
                  {items.map((b) => (
                    <li key={b.slug} className="border-b">
                      <a href={businessUrl(b.slug)} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 py-2.5 hover:text-river">
                        {b.name} <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">Fuente: turismoguamalmeta.com, revisado el 25 de octubre de 2026. Que un negocio aparezca aquí no garantiza que siga funcionando.</p>
      </section>
    </>
  );
}
