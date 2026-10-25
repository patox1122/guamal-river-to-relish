import { createFileRoute, Link } from "@tanstack/react-router";
import { getPlace } from "@/data/places";
import { PageHero, SectionTitle } from "@/components/site/Decor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/planifica")({
  head: () => seo("Planifica tu visita", "Consejos prácticos y tres itinerarios sugeridos para conocer Guamal, Meta: centro y comida, ríos, cultura y campo."),
  component: Planifica,
});

const TIPS = [
  ["Antes de salir", "Revisa las noticias de la Alcaldía y el estado de la vía Villavicencio–Acacías–Guamal."],
  ["Clima y ríos", "Mira el pronóstico. Si llovió en la montaña, pregunta en el pueblo cómo está el río antes de bañarte."],
  ["Con los negocios", "Confirma horarios, precios, capacidad y formas de pago directamente con cada lugar."],
  ["Naturaleza", "No dejes basura, no arranques plantas y no molestes a los animales."],
  ["Apoya lo local", "Come en restaurantes del pueblo y compra cacao, miel y quesos a los productores."],
  ["Antes de reservar", "Pide las condiciones por escrito: anticipo, cancelación y qué incluye la tarifa."],
];

const ITIN = [
  { title: "Guamal en un día", sub: "Centro y gastronomía", stops: ["parque-principal", "iglesia-parroquial", "el-garcero", "la-enramada-llanera", "restaurante-bar-mamonas"] },
  { title: "Naturaleza y ríos", sub: "Lugares naturales del directorio", stops: ["rio-y-malecon-humadea", "rio-guamal", "pozo-azul", "rio-orotoy"] },
  { title: "Cultura y campo", sub: "Tradiciones y experiencias rurales", stops: ["ruta-del-cacao", "villa-florez", "animal-play", "campo-de-los-girasoles"] },
];

function Planifica() {
  return (
    <>
      <PageHero eyebrow="Planifica tu visita" title="Arma tu plan" intro="Estas son propuestas del equipo, no recorridos oficiales. No incluimos tiempos ni distancias por carretera porque no tenemos datos confiables para calcularlos." />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Consejos" title="Lo que debes revisar" />
        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {TIPS.map(([t, d]) => (
            <div key={t} className="border-l-2 border-river pl-4">
              <p className="font-semibold">{t}</p>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-sand/50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Itinerarios sugeridos" title="Tres maneras de vivir Guamal" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {ITIN.map((it, i) => (
              <div key={it.title} className="rounded-lg bg-card p-6">
                <p className="font-display text-5xl text-accent-foreground/30">0{i + 1}</p>
                <h3 className="text-2xl font-semibold">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.sub}</p>
                <ol className="mt-4 space-y-2">
                  {it.stops.map((s, n) => {
                    const p = getPlace(s)!;
                    return (
                      <li key={s} className="flex gap-3">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-river text-xs font-bold text-river-foreground">{n + 1}</span>
                        <Link to="/lugares/$slug" params={{ slug: s }} className="hover:text-primary hover:underline">{p.name}</Link>
                      </li>
                    );
                  })}
                </ol>
                <p className="mt-4 text-xs text-muted-foreground">Tiempos y distancias: sin datos confiables, consúltalos antes de salir.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
