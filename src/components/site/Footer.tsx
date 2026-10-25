import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "./Header";
import { RiverLine } from "./Decor";
import { REVIEWED } from "@/data/places";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-forest-foreground">
      <RiverLine className="text-river" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-display text-3xl">Guamal Explora</p>
          <p className="mt-1 font-display italic text-accent">Descubre Guamal. Vive el Llano.</p>
          <p className="mt-4 max-w-sm text-sm text-forest-foreground/80">
            Proyecto escolar presentado en la ExpoJOMACO. Es una guía informativa y no es el portal oficial de la Alcaldía de Guamal.
          </p>
          <p className="mt-3 text-xs text-forest-foreground/60">Última revisión del contenido: {REVIEWED}.</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3" aria-label="Pie de página">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-forest-foreground/85 hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-accent p-3 text-accent-foreground shadow-lg hover:brightness-95"
      aria-label="Volver arriba"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
