export type Disciplina = "danza" | "teatro" | "bateria" | "canto";

export interface Actividad {
  _id: string;
  titulo: string;
  fecha: string; // ISO date, e.g. "2026-07-24"
  hora: string; // e.g. "18:30"
  lugar?: string;
  descripcion?: string;
  disciplina: Disciplina;
  imagenUrl?: string;
}

export const DISCIPLINA_LABEL: Record<Disciplina, string> = {
  danza: "Danza",
  teatro: "Teatro",
  bateria: "Batería",
  canto: "Canto",
};
