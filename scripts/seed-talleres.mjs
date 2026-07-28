// Script para poblar los talleres semanales en Sanity.
// Uso: node scripts/seed-talleres.mjs

import { createClient } from "@sanity/client";
import "dotenv/config";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const talleres = [
  { nombre: "Circo para la Infancia (4-9 años)", dia: "Lunes", horaInicio: "17:00", horaFin: "18:00", ubicacion: "mardanza", disciplina: "circo" },
  { nombre: "Danza Iniciación", dia: "Lunes", horaInicio: "18:00", horaFin: "19:15", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Danza Contemporánea Intermedio", dia: "Lunes", horaInicio: "19:30", horaFin: "21:00", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Breakdance Infantil (7-12 años)", dia: "Martes", horaInicio: "17:00", horaFin: "18:00", ubicacion: "mardanza", disciplina: "breakdance" },
  { nombre: "Bujinkan Infantil", dia: "Martes", horaInicio: "18:30", horaFin: "19:30", ubicacion: "mardanza", disciplina: "dojo" },
  { nombre: "Bujinkan Adultos", dia: "Martes", horaInicio: "19:45", horaFin: "21:00", ubicacion: "mardanza", disciplina: "dojo" },
  { nombre: "Tela Aérea Iniciación", dia: "Martes", horaInicio: "17:00", horaFin: "18:30", ubicacion: "tucapel", disciplina: "telas" },
  { nombre: "Breakdance Práctica Abierta", dia: "Miércoles", horaInicio: "10:00", horaFin: "12:00", ubicacion: "mardanza", disciplina: "breakdance" },
  { nombre: "Ballet Infantil (7-12 años)", dia: "Miércoles", horaInicio: "16:00", horaFin: "17:00", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Ballet Inicial Adultos", dia: "Miércoles", horaInicio: "18:30", horaFin: "20:00", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Teatro Adultos", dia: "Miércoles", horaInicio: "20:30", horaFin: "22:00", ubicacion: "mardanza", disciplina: "teatro" },
  { nombre: "Danza Adulto Mayor", dia: "Jueves", horaInicio: "17:00", horaFin: "18:00", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Danza Contemporánea Multinivel", dia: "Jueves", horaInicio: "18:30", horaFin: "20:00", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Tela Aérea Iniciación e Intermedio", dia: "Jueves", horaInicio: "17:00", horaFin: "18:30", ubicacion: "tucapel", disciplina: "telas" },
  { nombre: "Danza Iniciación", dia: "Viernes", horaInicio: "17:00", horaFin: "18:00", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Danza Moderna y Contemporánea Intermedio", dia: "Viernes", horaInicio: "18:30", horaFin: "21:30", ubicacion: "mardanza", disciplina: "danza" },
  { nombre: "Bujinkan Infantil", dia: "Sábado", horaInicio: "11:30", horaFin: "12:30", ubicacion: "mardanza", disciplina: "dojo" },
  { nombre: "Bujinkan Adultos", dia: "Sábado", horaInicio: "12:45", horaFin: "14:00", ubicacion: "mardanza", disciplina: "dojo" },
  { nombre: "Tela Aérea Iniciación", dia: "Sábado", horaInicio: "11:30", horaFin: "13:00", ubicacion: "tucapel", disciplina: "telas" },
];

async function main() {
  console.log(`Creando ${talleres.length} talleres...`);

  const transaction = client.transaction();

  for (const t of talleres) {
    transaction.create({
      _type: "taller",
      ...t,
    });
  }

  const result = await transaction.commit();
  console.log("✅ Hecho. IDs creados:", result.results.length);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
