import { sanityClient, sanityEnabled } from "@/lib/sanity";
import type { Actividad } from "@/lib/types";

// Datos de ejemplo — se muestran solo mientras no hay un dataset de Sanity
// conectado (ver NEXT_PUBLIC_SANITY_PROJECT_ID en .env). Reemplazar por la
// query real una vez que exista el proyecto de Sanity de Mardanza.
const ACTIVIDADES_EJEMPLO: Actividad[] = [
  {
    _id: "ejemplo-1",
    titulo: "Muestra de avance: creación de solos",
    fecha: "2026-07-24",
    hora: "18:30",
    lugar: "Actividad interna",
    descripcion: "Obra Piwke Mapu, de Paula Vera.",
    disciplina: ["danza"],
  },
  {
    _id: "ejemplo-2",
    titulo: "Concierto de invierno",
    fecha: "2026-07-25",
    hora: "18:30",
    lugar: "Centro Cultural Arauco",
    descripcion: "Baquetas y timbales, Academia de Música Felipe Wulfen. Entrada gratuita.",
    disciplina: ["bateria"],
  },
];

const ACTIVIDADES_QUERY = `*[_type == "actividad"] | order(fecha asc) {
  _id,
  titulo,
  fecha,
  hora,
  lugar,
  descripcion,
  disciplina,
  "imagenUrl": imagen.asset->url
}`;

export async function getActividades(): Promise<Actividad[]> {
  if (!sanityEnabled || !sanityClient) {
    return ACTIVIDADES_EJEMPLO;
  }
  return sanityClient.fetch(ACTIVIDADES_QUERY);
}
