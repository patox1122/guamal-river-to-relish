import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export const NAV = [
  { to: "/conoce", label: "Conoce Guamal" },
  { to: "/lugares", label: "Lugares" },
  { to: "/naturaleza", label: "Naturaleza y ríos" },
  { to: "/parques", label: "Parques y arquitectura" },
  { to: "/cultura", label: "Cultura" },
  { to: "/festivales", label: "Festivales" },
  { to: "/gastronomia", label: "Gastronomía" },
  { to: "/alojamiento", label: "Alojamiento" },
  { to: "/rural", label: "Fincas y campo" },
  { to: "/mapa", label: "Mapa" },
  { to: "/planifica", label: "Planifica tu visita" },
  { to: "/negocios", label: "Negocios locales" },
  { to: "/proyecto", label: "Sobre el proyecto" },
  { to: "/fuentes", label: "Fuentes" },
] as const;

const MAIN = ["/lugares", "/naturaleza", "/cultura", "/gastronomia", "/alojamiento", "/mapa", "/planifica"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    navigate({ to: "/lugares", search: { q: q.trim() || undefined, cat: undefined } });
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-baseline gap-1" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-semibold text-primary">Guamal</span>
          <span className="font-display text-2xl italic text-river">Explora</span>
        </Link>
        <nav className="ml-4 hidden flex-1 items-center gap-1 xl:flex" aria-label="Principal">
          {NAV.filter((n) => MAIN.includes(n.to)).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <form onSubmit={submit} className="ml-auto hidden items-center md:flex" role="search">
          <label htmlFor="hdr-search" className="sr-only">Buscar lugares</label>
          <input
            id="hdr-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar un lugar…"
            className="w-44 rounded-l-md border border-r-0 bg-card px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit" aria-label="Buscar" className="rounded-r-md border bg-primary px-2.5 py-1.5 text-primary-foreground">
            <Search className="size-4" />
          </button>
        </form>
        <button
          className="ml-auto rounded-md border p-2 md:ml-0"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <form onSubmit={submit} className="mb-4 flex md:hidden" role="search">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar un lugar…"
                aria-label="Buscar lugares"
                className="flex-1 rounded-l-md border border-r-0 bg-card px-3 py-2 text-sm"
              />
              <button type="submit" className="rounded-r-md bg-primary px-3 text-primary-foreground" aria-label="Buscar">
                <Search className="size-4" />
              </button>
            </form>
            <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4" aria-label="Todas las secciones">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
                  activeProps={{ className: "bg-secondary" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
