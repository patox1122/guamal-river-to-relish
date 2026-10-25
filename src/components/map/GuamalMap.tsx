import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { categoryLabel, type Place } from "@/data/places";
import { CATEGORY_VAR } from "./mapColors";

const CENTER: [number, number] = [3.873, -73.77];

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "gray";
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export default function GuamalMap({ places, height = 520 }: { places: Place[]; height?: number }) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!el.current || map.current) return;
    const m = L.map(el.current, { scrollWheelZoom: false }).setView(CENTER, 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">colaboradores de OpenStreetMap</a>',
    }).addTo(m);
    layer.current = L.layerGroup().addTo(m);
    map.current = m;
    return () => {
      m.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    const g = layer.current;
    if (!g) return;
    g.clearLayers();
    places.forEach((p) => {
      if (!p.coords) return;
      const color = cssVar(CATEGORY_VAR[p.category]);
      const { lat, lng, approx } = p.coords;
      L.circleMarker([lat, lng], {
        radius: 9,
        color: "white",
        weight: 2,
        fillColor: color,
        fillOpacity: 0.95,
        dashArray: approx ? "3 3" : undefined,
      })
        .bindPopup(
          `<strong>${esc(p.name)}</strong><br/><small>${esc(categoryLabel(p.category))}</small>` +
            (approx ? `<br/><em style="font-size:11px">Ubicación aproximada</em>` : "") +
            `<br/><a href="/lugares/${p.slug}">Abrir ficha</a> · <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}" target="_blank" rel="noreferrer">OpenStreetMap</a>`,
        )
        .addTo(g);
    });
  }, [places]);

  return <div ref={el} style={{ height }} className="w-full overflow-hidden rounded-lg border" aria-label="Mapa turístico de Guamal" />;
}
