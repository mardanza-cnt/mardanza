export type Disciplina = "danza" | "teatro" | "breakdance" | "circo" | "dojo" | "telas" | "canto" | "bateria";

export interface Actividad {
  _id: string;
  titulo: string;
  fecha: string; // ISO date, e.g. "2026-07-24"
  hora: string; // e.g. "18:30"
  lugar?: string;
  descripcion?: string;
  disciplina: Disciplina[];
  imagenUrl?: string;
}

export const DISCIPLINA_LABEL: Record<Disciplina, string> = {
  danza: "Danza",
  teatro: "Teatro",
  breakdance: "Breakdance",
  circo: "Circo",
  dojo: "Dojo",
  telas: "Telas",
  canto: "Canto",
  bateria: "Batería",
};

export type DiaSemana = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes" | "Sábado";

export const DIAS_ORDEN: DiaSemana[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export const UBICACION_LABEL: Record<string, string> = {
  mardanza: "Centro Cultural Mardanza — Esmeralda #026, Cañete Centro",
  tucapel: "Gimnasio Municipal Tucapel — Tucapel #043, Cañete Centro",
};

export interface Taller {
  _id: string;
  nombre: string;
  dia: DiaSemana;
  horaInicio: string;
  horaFin: string;
  ubicacion: string;
  disciplina: Disciplina;
}

export type ColorColaborador = "rojo" | "terracota" | "mostaza" | "salvia" | "azul" | "ciruela";

export interface Colaborador {
  _id: string;
  nombre: string;
  descripcion: string;
  colorAsignado?: ColorColaborador;
  orden?: number;
  instagram?: string;
  logoUrl?: string;
  fotosActividad?: {
    _key: string;
    url: string;
  }[];
}

