import { sanityClient, sanityEnabled } from "@/lib/sanity";
import type { Actividad, Taller, Colaborador } from "@/lib/types";


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

const TALLERES_QUERY = `*[_type == "taller"] | order(dia asc, horaInicio asc) {
  _id,
  nombre,
  dia,
  horaInicio,
  horaFin,
  ubicacion,
  disciplina
}`;

export async function getTalleres(): Promise<Taller[]> {
  if (!sanityEnabled || !sanityClient) {
    return [];
  }
  return sanityClient.fetch(TALLERES_QUERY);
}

const COLABORADORES_QUERY = `*[_type == "colaborador"] | order(orden asc) {
  _id,
  nombre,
  descripcion,
  colorAsignado,
  orden,
  instagram,
  "logoUrl": logo.asset->url,
  "fotosActividad": fotosActividad[]{
    _key,
    "url": asset->url
  }
}`;

export async function getColaboradores(): Promise<Colaborador[]> {
  if (!sanityEnabled || !sanityClient) {
    return [];
  }
  return sanityClient.fetch(COLABORADORES_QUERY);
}

