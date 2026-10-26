import puenteHumadea from "@/assets/photos/puente-humadea.jpg.asset.json";
import iglesia1 from "@/assets/photos/iglesia-guamal.jpg.asset.json";
import iglesia2 from "@/assets/photos/iglesia-guamal-2.jpg.asset.json";
import iglesia3 from "@/assets/photos/iglesia-guamal-3.jpg.asset.json";
import alcaraban from "@/assets/photos/barrio-alcaraban.jpg.asset.json";
import flor from "@/assets/photos/flor-llanera.jpg.asset.json";
import hormiga from "@/assets/photos/hormiga-riberena.jpg.asset.json";
import mamona from "@/assets/photos/carne-mamona.jpg.asset.json";
import arpa from "@/assets/photos/arpa-llanera.jpg.asset.json";
import joropo from "@/assets/photos/joropo-baile.jpg.asset.json";
import cacao from "@/assets/photos/cacao.jpg.asset.json";
import elEncanto from "@/assets/photos/el-encanto.jpg.asset.json";
import calleVereda from "@/assets/photos/calle-vereda.jpg.asset.json";
import guayuriba from "@/assets/photos/rio-guayuriba.jpg.asset.json";
import joropodromo from "@/assets/photos/joropodromo.jpg.asset.json";
import canoAcacias from "@/assets/photos/cano-acacias.jpg.asset.json";

export type Photo = {
  id: string;
  src: string;
  alt: string;
  title: string;
  author: string;
  license: string;
  source: string;
  /** true cuando la foto está documentada como tomada en Guamal */
  inGuamal: boolean;
  note?: string;
};

const C = "https://commons.wikimedia.org/wiki/File:";


const _p = {
  puenteHumadea: {
    id: "puenteHumadea",
    src: puenteHumadea.url,
    alt: "Río Humadea con orillas de piedra y el puente amarillo al fondo, en Guamal, Meta",
    title: "Puente del Humadea",
    author: "Juliancufiño",
    license: "CC BY-SA 4.0",
    source: `${C}Puente_del_Humadea.jpg`,
    inGuamal: true,
  },
  iglesia: {
    id: "iglesia",
    src: iglesia1.url,
    alt: "Fachada de la iglesia de Guamal, Meta",
    title: "Iglesia de Guamal-Meta",
    author: "Zully Yineth Tamayo Martínez",
    license: "CC BY 3.0",
    source: `${C}Iglesia_de_Guamal-Meta.jpg`,
    inGuamal: true,
  },
  iglesia2: {
    id: "iglesia2",
    src: iglesia2.url,
    alt: "Torres de la iglesia de Guamal vistas desde el parque",
    title: "IglesiaGuamal",
    author: "Alejandro Blandón",
    license: "CC BY 3.0",
    source: `${C}IglesiaGuamal.JPG`,
    inGuamal: true,
  },
  iglesiaNoche: {
    id: "iglesiaNoche",
    src: iglesia3.url,
    alt: "Iglesia de Guamal iluminada de noche con luces azules",
    title: "IglesiaGuamal1",
    author: "Alejandro Blandón",
    license: "CC BY 3.0",
    source: `${C}IglesiaGuamal1.JPG`,
    inGuamal: true,
  },
  alcaraban: {
    id: "alcaraban",
    src: alcaraban.url,
    alt: "Panorámica de una calle del barrio Alcaraván en Guamal",
    title: "Barrio Alcaraban",
    author: "jorge4138 (Panoramio)",
    license: "CC BY 3.0",
    source: `${C}Barrio_alcaraban_-_panoramio.jpg`,
    inGuamal: true,
  },
  flor: {
    id: "flor",
    src: flor.url,
    alt: "Flor de cayeno rosada frente a una casa en Guamal",
    title: "Flor Llanera",
    author: "Juliancufiño",
    license: "CC BY-SA 4.0",
    source: `${C}Flor_Llanera.jpg`,
    inGuamal: true,
  },
  hormiga: {
    id: "hormiga",
    src: hormiga.url,
    alt: "Hormiga ribereña fotografiada en Guamal, Meta",
    title: "Hormiga Ribereña",
    author: "Jusezam",
    license: "CC BY-SA 3.0",
    source: `${C}Hormiga_Ribere%C3%B1a_(110030613).jpeg`,
    inGuamal: true,
  },
  mamona: {
    id: "mamona",
    src: mamona.url,
    alt: "Carne a la llanera asada en varas alrededor del fuego",
    title: "Carne a la llanera, conocida como mamona",
    author: "Luis9311",
    license: "CC BY-SA 4.0",
    source: `${C}Carne_a_la_llanera,_conocida_como_mamona..jpg`,
    inGuamal: false,
    note: "Imagen de referencia regional; no fue tomada en Guamal.",
  },
  arpa: {
    id: "arpa",
    src: arpa.url,
    alt: "Músico tocando el arpa llanera",
    title: "Joropo arpa llanera",
    author: "José J. Lugo A.",
    license: "CC BY 3.0",
    source: `${C}Joropo_arpa_llanera_(cropped).jpg`,
    inGuamal: false,
    note: "Imagen de referencia de la música llanera; no fue tomada en Guamal.",
  },
  joropo: {
    id: "joropo",
    src: joropo.url,
    alt: "Estudiantes bailando joropo con traje tradicional",
    title: "Escolares bailando joropo llanero",
    author: "Diario Noticias 24 horas",
    license: "CC BY-SA 4.0",
    source: `${C}Escolares_bailando_joropo_llanero.jpg`,
    inGuamal: false,
    note: "Imagen de referencia del joropo; no fue tomada en Guamal.",
  },
  cacao: {
    id: "cacao",
    src: cacao.url,
    alt: "Mazorcas de cacao en el árbol",
    title: "Cacao San Vicente de Chucurí",
    author: "R-chu-R",
    license: "CC BY 3.0",
    source: `${C}Cacao_san_vicente_de_chucuri_por_r_chu_r.jpg`,
    inGuamal: false,
    note: "Imagen de referencia del cultivo de cacao (Santander); no es de Guamal.",
  },
  elEncanto: {
    id: "elEncanto",
    src: elEncanto.url,
    alt: "Familia bañándose en una piscina con kiosco central, rodeada de palmas, en Guamal",
    title: "El encanto",
    author: "jorge4138 (Panoramio)",
    license: "CC BY 3.0",
    source: `${C}El_encanto_-_panoramio.jpg`,
    inGuamal: true,
  },
  calleVereda: {
    id: "calleVereda",
    src: calleVereda.url,
    alt: "Calle destapada con casas, plataneras y árboles en las afueras de Guamal",
    title: "Finca doña Mercedes",
    author: "jorge4138 (Panoramio)",
    license: "CC BY 3.0",
    source: `${C}Finca_do%C3%B1a_mercedes_-_panoramio_(1).jpg`,
    inGuamal: true,
  },
  guayuriba: {
    id: "guayuriba",
    src: guayuriba.url,
    alt: "Río de piedemonte con playa de piedras y montañas cubiertas de selva",
    title: "Río Guayuriba",
    author: "CarlosE Duarte (Panoramio)",
    license: "CC BY 3.0",
    source: `${C}Rio_Guayuriba_-_panoramio.jpg`,
    inGuamal: false,
    note: "Río Guayuriba, vecino de Guamal; foto de referencia del piedemonte.",
  },
  canoAcacias: {
    id: "canoAcacias",
    src: canoAcacias.url,
    alt: "Caño de agua verde y cristalina entre piedras grandes y una pequeña cascada",
    title: "Caño cristalino en Acacías, Meta",
    author: "CarlosE Duarte (Panoramio)",
    license: "CC BY 3.0",
    source: `${C}Ca%C3%B1o_cristalino_en_Acacias,_Meta_-_panoramio.jpg`,
    inGuamal: false,
    note: "Caño en Acacías, municipio vecino; foto de referencia.",
  },
  joropodromo: {
    id: "joropodromo",
    src: joropodromo.url,
    alt: "Parejas con faldas floreadas y sombrero bailando joropo en la calle",
    title: "Joropódromo en 2023",
    author: "Canal Global Televisión",
    license: "CC BY 3.0",
    source: `${C}Jorop%C3%B3dromo_en_2023_(1).jpg`,
    inGuamal: false,
    note: "Desfile de joropo en Villavicencio; foto de referencia, no es del Festival de Colonias.",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof _p;
export const photos: Record<PhotoKey, Photo> = _p;

export const allPhotos: Photo[] = Object.values(photos);
