import type { PhotoKey } from "./photos";

export type Category = "naturaleza" | "cultura" | "parques" | "gastronomia" | "alojamiento" | "rural";

export const categories: { id: Category; label: string }[] = [
  { id: "naturaleza", label: "Naturaleza y ríos" },
  { id: "cultura", label: "Cultura" },
  { id: "parques", label: "Parques" },
  { id: "gastronomia", label: "Gastronomía" },
  { id: "alojamiento", label: "Alojamiento" },
  { id: "rural", label: "Experiencias rurales" },
];

export const categoryLabel = (c: Category) => categories.find((x) => x.id === c)?.label ?? c;

/**
 * confirmado: lugar público documentado por varias fuentes.
 * directorio: datos tomados del directorio turístico municipal; confirmar antes de ir.
 * pendiente: información incompleta, pendiente de verificación.
 */
export type Status = "confirmado" | "directorio" | "pendiente";

export type Place = {
  slug: string;
  name: string;
  category: Category;
  summary: string;
  description: string[];
  todo: string[];
  sector: string;
  /** Coordenadas publicadas por la fuente. approx=true cuando no son exactas. */
  coords?: { lat: number; lng: number; approx: boolean };
  photo?: PhotoKey;
  gallery?: PhotoKey[];
  tips: string[];
  status: Status;
  source: { label: string; url: string };
};

export const REVIEWED = "25 de octubre de 2026";

const DIR = "Directorio turístico de Guamal (turismoguamalmeta.com)";
const dir = (slug: string) => ({ label: DIR, url: `https://turismoguamalmeta.com/sitio/${slug}` });
const AGRO = {
  label: "Alcaldía de Guamal – Establecimientos de agroturismo",
  url: "https://guamalmeta.micolombiadigital.gov.co/turismo/establecimientos-de-agroturismo",
};

const RIVER_TIPS = [
  "Revisa el pronóstico del clima y pregunta en el pueblo por el nivel del río antes de ir.",
  "No entres al agua si ha llovido en la parte alta o si el agua baja turbia: puede haber creciente.",
  "Sigue las indicaciones de la comunidad y las autoridades locales.",
  "Llévate toda tu basura de regreso.",
];

export const places: Place[] = [
  // ---------- NATURALEZA ----------
  {
    slug: "rio-y-malecon-humadea",
    name: "Río y malecón del Humadea",
    category: "naturaleza",
    summary: "El paisaje de río más conocido de Guamal: orillas de piedra, vegetación y cocina típica.",
    description: [
      "El sector del Humadea es conocido como un malecón natural sobre el río. Es uno de los lugares a los que más van las familias de Guamal y los visitantes para refrescarse y pasar el día.",
      "En el sector también se encuentran puestos de comida: el directorio municipal menciona carnes, pescado al chuzo, sancocho de gallina y chicha, una bebida tradicional de la región.",
    ],
    todo: ["Caminar por las orillas de piedra", "Ver el puente sobre el Humadea", "Probar comida típica en el sector"],
    sector: "Malecón del río Humadea, Guamal",
    coords: { lat: 3.813977, lng: -73.750946, approx: true },
    photo: "puenteHumadea",
    tips: RIVER_TIPS,
    status: "confirmado",
    source: dir("turistico-humadea"),
  },
  {
    slug: "rio-guamal",
    name: "Río Guamal",
    category: "naturaleza",
    summary: "El río que lleva el nombre del municipio, con zonas naturales para descansar en familia.",
    description: [
      "El río Guamal es uno de los ríos principales del municipio; el Esquema de Ordenamiento Territorial lo registra como una de sus cuencas.",
      "Es un lugar de encuentro para habitantes y visitantes. La fuente municipal insiste en el uso responsable del agua para que se conserve.",
    ],
    todo: ["Pasar un día de río en familia", "Observar el paisaje desde el puente"],
    sector: "Puente sobre el río Guamal",
    coords: { lat: 3.87236, lng: -73.774286, approx: true },
    tips: RIVER_TIPS,
    status: "confirmado",
    source: dir("rio-guamal"),
  },
  {
    slug: "rio-orotoy",
    name: "Río Orotoy",
    category: "naturaleza",
    summary: "Río que marca el límite entre Guamal y Acacías, usado como balneario natural.",
    description: [
      "El Orotoy separa los municipios de Guamal y Acacías. La gente de ambos lados lo usa como balneario natural.",
      "Es un sitio para pasar una jornada al aire libre y compartir comida tradicional junto al agua.",
    ],
    todo: ["Jornada de descanso junto al río", "Paseo familiar"],
    sector: "Vía antigua Acacías–Guamal",
    coords: { lat: 3.928819, lng: -73.806968, approx: true },
    tips: RIVER_TIPS,
    status: "confirmado",
    source: dir("rio-orotoy"),
  },
  {
    slug: "pozo-azul",
    name: "Pozo Azul",
    category: "naturaleza",
    summary: "Balneario tradicional de aguas frescas, famoso por el plan de sancocho en familia.",
    description: [
      "Pozo Azul es un balneario tradicional de Guamal, y desde hace años es un punto de encuentro de locales y visitantes.",
      "Es muy conocido por una costumbre de la región: preparar sancocho en familia al lado del agua.",
    ],
    todo: ["Paseo de olla o sancocho", "Día de campo"],
    sector: "Vereda Santa Bárbara",
    tips: [...RIVER_TIPS, "No encontramos coordenadas exactas: pregunta el camino en el pueblo."],
    status: "directorio",
    source: dir("pozo-azul"),
  },
  {
    slug: "rio-camelias",
    name: "Río Camelias",
    category: "naturaleza",
    summary: "Río del sector Montecristo que el municipio ve como un futuro atractivo de naturaleza.",
    description: [
      "El río Camelias está en el sector Montecristo. El directorio municipal lo presenta como un lugar que podría crecer como atractivo turístico por sus paisajes y su tranquilidad.",
      "La misma fuente pide que su uso turístico sea responsable con el ambiente.",
    ],
    todo: ["Contemplar el paisaje", "Combinar con alojamientos rurales del sector"],
    sector: "Sector Montecristo",
    coords: { lat: 3.816683, lng: -73.749703, approx: true },
    tips: RIVER_TIPS,
    status: "directorio",
    source: dir("rio-camelias"),
  },

  // ---------- PARQUES Y CULTURA ----------
  {
    slug: "parque-principal",
    name: "Parque principal (Parque de la Iglesia)",
    category: "parques",
    summary: "El corazón del pueblo: árboles grandes, bancas y la iglesia parroquial.",
    description: [
      "El parque principal es el punto de encuentro de Guamal. Frente a él está la iglesia parroquial.",
      "El directorio municipal cuenta que sus árboles tienen más de 60 años y han visto crecer el municipio. Tiene zonas verdes y bancas para descansar.",
    ],
    todo: ["Sentarse a la sombra de los árboles", "Visitar la iglesia", "Recorrer el comercio del centro"],
    sector: "Centro de Guamal",
    coords: { lat: 3.878827, lng: -73.768943, approx: false },
    photo: "iglesia2",
    gallery: ["iglesia2", "iglesia", "iglesiaNoche"],
    tips: ["Ve en la tarde o en la noche, cuando hay más ambiente en el parque.", "Si quieres entrar a la iglesia, respeta los horarios de misa."],
    status: "confirmado",
    source: dir("parque-iglesia"),
  },
  {
    slug: "iglesia-parroquial",
    name: "Iglesia parroquial de Guamal",
    category: "cultura",
    summary: "Templo de dos torres frente al parque principal; de noche se ilumina.",
    description: [
      "La iglesia parroquial está frente al parque principal y es el edificio más reconocible del centro de Guamal.",
      "Las fotos de Wikimedia Commons la muestran de día y de noche con su iluminación. No encontramos una fuente confiable sobre su fecha de construcción, así que ese dato está pendiente.",
    ],
    todo: ["Fotografiar sus torres", "Verla iluminada de noche"],
    sector: "Frente al parque principal",
    coords: { lat: 3.878827, lng: -73.768943, approx: true },
    photo: "iglesia",
    gallery: ["iglesia", "iglesia2", "iglesiaNoche"],
    tips: ["Es un lugar de culto: guarda silencio y respeto durante las celebraciones."],
    status: "confirmado",
    source: { label: "Wikimedia Commons – Category:Guamal, Meta", url: "https://commons.wikimedia.org/wiki/Category:Guamal,_Meta" },
  },
  {
    slug: "villa-olimpica",
    name: "Villa Olímpica Esperanza Moreno Robles",
    category: "parques",
    summary: "Complejo deportivo y recreativo del municipio.",
    description: [
      "La Villa Olímpica es un complejo de deporte y recreación abierto a la comunidad y a los visitantes.",
      "Es un punto de encuentro para el ejercicio y la vida en comunidad en Guamal.",
    ],
    todo: ["Practicar deporte", "Ver encuentros deportivos locales"],
    sector: "Casco urbano",
    coords: { lat: 3.884257, lng: -73.770507, approx: false },
    tips: ["Pregunta en la alcaldía por los horarios de uso de los escenarios."],
    status: "directorio",
    source: dir("villa-olimpica-o-complejo-deportivo-esperanza-robles"),
  },
  {
    slug: "taimaku-parque",
    name: "Taimaku Parque",
    category: "parques",
    summary: "Parque privado de recreación y aventura al aire libre, con restaurante.",
    description: [
      "Taimaku es un parque de recreación y aventura en Guamal, pensado para actividades al aire libre en familia.",
      "Según el directorio también tiene restaurante.",
    ],
    todo: ["Actividades recreativas al aire libre", "Comer en el restaurante del parque"],
    sector: "Guamal (vía al norte del casco urbano)",
    coords: { lat: 3.915794, lng: -73.770506, approx: false },
    tips: ["Confirma con el parque los horarios, tarifas y actividades disponibles antes de ir."],
    status: "directorio",
    source: dir("taimaku-parque"),
  },

  // ---------- GASTRONOMÍA ----------
  {
    slug: "la-enramada-llanera",
    name: "La Enramada Llanera",
    category: "gastronomia",
    summary: "Cocina llanera: desayunos, almuerzos y carne a la mamona.",
    description: [
      "Restaurante de cocina llanera que sirve desayunos, almuerzos y platos de la región.",
      "Su plato más conocido, según el directorio, es la carne a la mamona.",
    ],
    todo: ["Probar la carne a la mamona"],
    sector: "Guamal",
    photo: "mamona",
    tips: ["Confirma horarios y menú directamente con el restaurante."],
    status: "directorio",
    source: dir("la-enramada-llanera"),
  },
  {
    slug: "restaurante-la-talanquera",
    name: "Restaurante La Talanquera",
    category: "gastronomia",
    summary: "Cocina llanera tradicional con pan de yuca, zonas verdes y salón de eventos.",
    description: [
      "Según el directorio, lleva más de 28 años sirviendo cocina llanera: carne asada, carne oreada, guiso y «cimarrón», acompañados de pan de yuca.",
      "Tiene zonas verdes, parqueadero y salón de eventos.",
    ],
    todo: ["Probar carne oreada con pan de yuca"],
    sector: "Guamal",
    tips: ["Confirma horarios y disponibilidad antes de ir."],
    status: "directorio",
    source: dir("parador-restaurante-la-talanquera"),
  },
  {
    slug: "el-garcero",
    name: "El Garcero",
    category: "gastronomia",
    summary: "Más de 19 años con sabores regionales; conocido por el «Batido Guamaluno».",
    description: [
      "Negocio con más de 19 años que guarda los sabores de la región, según el directorio municipal.",
      "Es famoso por su «Batido Guamaluno», una preparación que se presenta como propia de Guamal.",
    ],
    todo: ["Probar el Batido Guamaluno"],
    sector: "Guamal",
    tips: ["Confirma horarios directamente con el establecimiento."],
    status: "directorio",
    source: dir("el-garcero"),
  },
  {
    slug: "restaurante-bar-mamonas",
    name: "Restaurante-Bar Mamona's",
    category: "gastronomia",
    summary: "Asadero sobre la avenida principal: carne a la mamona y platos a la carta.",
    description: [
      "Restaurante sobre la avenida principal de Guamal con platos típicos y tradicionales de la región.",
      "Es fácil de encontrar si vas recorriendo el municipio por la vía principal.",
    ],
    todo: ["Carne a la mamona", "Platos a la carta"],
    sector: "Avenida principal",
    coords: { lat: 3.874414, lng: -73.772377, approx: true },
    tips: ["Confirma horarios directamente con el restaurante."],
    status: "directorio",
    source: dir("restaurante-bar-mamonas"),
  },
  {
    slug: "empanadas-miniwimpy",
    name: "Empanadas Miniwimpy",
    category: "gastronomia",
    summary: "Empanadas que los visitantes recomiendan en el directorio municipal.",
    description: [
      "Es uno de los negocios que los visitantes recomiendan en el directorio turístico de Guamal.",
      "Todavía no encontramos más detalles confirmados sobre su menú.",
    ],
    todo: ["Comer algo rápido mientras recorres el centro"],
    sector: "Guamal",
    tips: ["Datos por completar: revisa la ficha del directorio antes de ir."],
    status: "pendiente",
    source: dir("empanadas-miniwimpy"),
  },

  // ---------- ALOJAMIENTO ----------
  {
    slug: "hotel-guamaluno",
    name: "Hotel GuamalUno",
    category: "alojamiento",
    summary: "Hotel en el centro, con terraza y vista a los llanos.",
    description: [
      "Hotel en la zona central, práctico para recorrer a pie el parque, el comercio y los restaurantes.",
      "El directorio menciona una terraza con vista a los llanos.",
    ],
    todo: ["Hospedaje en el centro del pueblo"],
    sector: "Zona central",
    coords: { lat: 3.879029, lng: -73.767467, approx: false },
    tips: ["Confirma tarifas, servicios y disponibilidad directamente con el hotel."],
    status: "directorio",
    source: dir("hotel-guamaluno"),
  },
  {
    slug: "hotel-guamal-plaza",
    name: "Hotel Guamal Plaza",
    category: "alojamiento",
    summary: "Hotel urbano familiar con piscina y cancha sintética.",
    description: [
      "Hotel urbano de tipo familiar y recreativo en la avenida principal.",
      "El directorio menciona piscina y cancha sintética.",
    ],
    todo: ["Hospedaje familiar"],
    sector: "Avenida principal",
    coords: { lat: 3.885314, lng: -73.77161, approx: true },
    tips: ["Confirma tarifas y servicios directamente con el hotel."],
    status: "directorio",
    source: dir("hotel-guamal-plaza"),
  },
  {
    slug: "hotel-rio-humadea",
    name: "Hotel Río Humadea",
    category: "alojamiento",
    summary: "Hotel a una cuadra del río Humadea, según el directorio.",
    description: [
      "El directorio lo describe como un hotel moderno a una cuadra del río Humadea.",
      "Menciona piscina, terraza, restaurante y parqueadero. Confirma estos servicios antes de reservar.",
    ],
    todo: ["Hospedarse cerca del río"],
    sector: "Cerca del río Humadea",
    tips: ["No encontramos coordenadas confiables; usa la ficha del directorio para ubicarlo."],
    status: "directorio",
    source: dir("hotel-rio-humadea"),
  },
  {
    slug: "finca-villa-laura",
    name: "Finca Turística Villa Laura",
    category: "alojamiento",
    summary: "Finca con cabañas y una pequeña reserva de fauna silvestre rescatada.",
    description: [
      "Según el directorio, es una finca con cabañas y una pequeña reserva de fauna silvestre rescatada.",
      "También menciona piscina, hamacas, restaurante, cabalgatas y salón de eventos.",
    ],
    todo: ["Hospedaje rural", "Conocer la reserva de fauna"],
    sector: "Trocha 4, vereda La Paz",
    coords: { lat: 3.829452, lng: -73.746943, approx: false },
    tips: ["Confirma con la finca qué actividades están disponibles y si necesitas reserva."],
    status: "directorio",
    source: dir("finca-turistica-villa-laura"),
  },
  {
    slug: "finca-luis-cinco",
    name: "Finca Turística Luis Cinco",
    category: "alojamiento",
    summary: "Finca rural a unos 2 km del parque principal, para grupos de hasta 26 personas.",
    description: [
      "Finca rural rodeada de vegetación, a unos 2 kilómetros del parque principal, según el directorio.",
      "Menciona piscina, juegos tradicionales, canchas y salón de eventos.",
    ],
    todo: ["Plan en grupo o en familia"],
    sector: "A 2 km del parque principal",
    tips: ["Confirma capacidad, precios y reservas directamente con la finca."],
    status: "directorio",
    source: dir("finca-turistica-luis-cinco"),
  },
  {
    slug: "finca-el-encanto-playa-maui",
    photo: "elEncanto",
    name: "Finca Turística El Encanto (Playa Maui)",
    category: "alojamiento",
    summary: "Centro vacacional de estilo playero con piscinas.",
    description: [
      "El directorio la presenta como un centro vacacional familiar de estilo playero, con piscinas, alojamiento y restaurante.",
    ],
    todo: ["Día de piscina", "Hospedaje"],
    sector: "Guamal",
    tips: ["Confirma servicios y precios antes de ir."],
    status: "directorio",
    source: dir("finca-turistica-el-encanto-playa-maui"),
  },
  {
    slug: "mandarina-house",
    name: "Mandarina House (Casa Turística de Zulma Zafra)",
    category: "alojamiento",
    summary: "Casa turística para descansar en el campo, en la vereda Montecristo.",
    description: [
      "Casa turística en la vereda Montecristo, pensada para descansar en un ambiente rural con familia, amigos o pareja.",
    ],
    todo: ["Descanso rural"],
    sector: "Vereda Montecristo",
    tips: ["Confirma la reserva directamente con la casa turística."],
    status: "directorio",
    source: dir("finca-agroturistica-el-wallaby"),
  },

  // ---------- RURAL ----------
  {
    slug: "ruta-del-cacao",
    name: "Ruta del Cacao de Guamal",
    category: "rural",
    summary: "Fincas y productores que convierten el cacao en una experiencia de turismo rural.",
    description: [
      "La prensa regional cuenta que en las montañas de Guamal el cacao ya no es solo un cultivo: también es una experiencia turística que conecta a los viajeros con la cultura campesina.",
      "El directorio municipal tiene una categoría llamada «Ruta del Cacao de Guamal», y la Alcaldía registra productores que transforman cacao en las veredas El Encanto y El Danubio, y uno que hace vino artesanal de cacao en la vereda Pío XII.",
    ],
    todo: ["Conocer cómo se cultiva y transforma el cacao", "Comprar productos de cacao locales"],
    sector: "Veredas El Encanto, El Danubio y Pío XII",
    photo: "cacao",
    tips: [
      "No todos los productores reciben visitas: llama antes y pregunta si hay recorrido.",
      "No des por hecho que habrá degustación o visita guiada.",
    ],
    status: "pendiente",
    source: {
      label: "Periódico del Meta – Turismo rural con sabor a chocolate (2025)",
      url: "https://periodicodelmeta.com/turismo-rural-con-sabor-a-chocolate-en-el-meta/",
    },
  },
  {
    slug: "villa-florez",
    name: "Complejo Agroturístico Villa Florez",
    category: "rural",
    summary: "Finca agroturística con cabañas y glamping entre cultivos de mangostino.",
    description: [
      "Finca agroturística con cabañas y glamping entre cultivos de mangostino, según el directorio.",
      "También recibe eventos como bodas, bautizos y encuentros espirituales, y por eso se relaciona con el turismo religioso del municipio.",
    ],
    todo: ["Conocer los cultivos de mangostino", "Hospedaje en glamping"],
    sector: "Guamal",
    coords: { lat: 3.86525, lng: -73.771211, approx: true },
    tips: ["Confirma con la finca qué actividades ofrece y si necesitas reserva."],
    status: "directorio",
    source: dir("complejo-agroturistico-villa-florez"),
  },
  {
    slug: "animal-play",
    name: "Animal Play",
    category: "rural",
    summary: "Productor de queso de búfala y arequipe en la vereda La Isla.",
    description: [
      "La Alcaldía de Guamal lo incluye en su lista de establecimientos de agroturismo, con queso de búfala y arequipe como productos.",
      "También aparece entre los sitios más visitados del directorio turístico.",
    ],
    todo: ["Conocer y comprar productos lácteos de búfala"],
    sector: "Vereda La Isla",
    tips: ["Confirma por el canal publicado por la Alcaldía si reciben visitantes."],
    status: "directorio",
    source: AGRO,
  },
  {
    slug: "heragon-vino-de-cacao",
    name: "Heragón – vino artesanal de cacao",
    category: "rural",
    summary: "Producto de la vereda Pío XII registrado por la Alcaldía.",
    description: [
      "La Alcaldía lo incluye en su lista de agroturismo con un producto poco común: vino artesanal de cacao.",
    ],
    todo: ["Conocer un producto local hecho con cacao"],
    sector: "Vereda Pío XII",
    tips: ["Confirma por el canal publicado por la Alcaldía si reciben visitantes."],
    status: "directorio",
    source: AGRO,
  },
  {
    slug: "campo-de-los-girasoles",
    name: "Campo de los Girasoles",
    category: "rural",
    summary: "Cultivo de girasoles por temporadas en la vereda El Encanto.",
    description: [
      "La Alcaldía lo registra como un atractivo de agroturismo que funciona por temporadas.",
    ],
    todo: ["Fotografía en temporada de floración"],
    sector: "Vereda El Encanto",
    photo: "flor",
    tips: ["Solo abre por temporadas: confirma antes de viajar.", "La foto muestra una flor de Guamal, no el campo de girasoles."],
    status: "pendiente",
    source: AGRO,
  },
  {
    slug: "granjas-y-productores",
    name: "Granjas y productores de las veredas",
    category: "rural",
    summary: "Miel, huevos de codorniz, huevos orgánicos, jugo de uva y caprinocultura.",
    description: [
      "La Alcaldía publica una lista de productores rurales en las veredas La Paz, El Retiro, El Encanto y Pío XII.",
      "Entre ellos hay miel y sus derivados, huevos de codorniz, huevos orgánicos, jugo de uva y cría de cabras.",
    ],
    todo: ["Comprar productos directamente al campesino"],
    sector: "Veredas La Paz, El Retiro, El Encanto y Pío XII",
    tips: ["Revisa la lista oficial y llama antes: no todos reciben visitantes."],
    status: "directorio",
    source: AGRO,
  },
];

/** Foto propia del lugar o, si no tiene, una foto de referencia según su categoría. */
const FALLBACK: Record<Category, PhotoKey[]> = {
  naturaleza: ["canoAcacias", "guayuriba"],
  parques: ["alcaraban"],
  cultura: ["joropodromo"],
  gastronomia: ["mamona"],
  alojamiento: ["calleVereda", "flor"],
  rural: ["calleVereda", "cacao"],
};
export function placePhoto(place: Place): PhotoKey {
  if (place.photo) return place.photo;
  const list = FALLBACK[place.category];
  const i = places.filter((p) => p.category === place.category && !p.photo).indexOf(place);
  return list[Math.max(i, 0) % list.length]!;
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

/** Busca por nombre, categoría, sector o descripción (sin importar tildes ni mayúsculas). */
export function filterPlaces(list: Place[], q: string, cat: Category | "todas") {
  const words = norm(q).split(/\s+/).filter(Boolean);
  return list.filter((p) => {
    if (cat !== "todas" && p.category !== cat) return false;
    if (!words.length) return true;
    const hay = norm(
      [p.name, categoryLabel(p.category), p.sector, p.summary, ...p.description, ...p.todo].join(" "),
    );
    return words.every((w) => hay.includes(w));
  });
}
