// Script para poblar los colaboradores en Sanity.
// Uso: node scripts/seed-colaboradores.mjs

import { createClient } from "@sanity/client";
import { config } from "dotenv";
config({ path: ".env.local" });
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.resolve(__dirname, "seed-assets");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

/** Mapa: nombre del colaborador → nombre del archivo de logo */
const logoFiles = {
  "Baquetas & Timbales (Escuela de Talentos)": "baquetas-timbales.png",
  "Colectivo Inhabitado": "colectivo-inhabitado.png",
  "Kan Ryu Dojo Bujinkan": "kan-ryu-dojo.png",
  "Volteretas Circo": "volteretas-circo.png",
};

const colaboradores = [
  {
    nombre: "Baquetas & Timbales (Escuela de Talentos)",
    descripcion:
      "Escuela de talentos fundada en 2010 en Curanilahue. Formación básica y avanzada en música popular, con sedes en Cañete y Curanilahue.",
    colorAsignado: "mostaza",
    orden: 1,
    instagram: "https://www.instagram.com/escueladetalentos_bt/",
  },
  {
    nombre: "Colectivo Inhabitado",
    descripcion:
      "Agrupación de teatro de Cañete fundada en 2005. Realiza montajes en espacios no convencionales, abordando temas sociales e identitarios locales.",
    colorAsignado: "rojo",
    orden: 2,
    instagram: "https://www.instagram.com/colectivoinhabitado/",
  },
  {
    nombre: "Kan Ryu Dojo Bujinkan",
    descripcion:
      "Escuela de artes marciales Bujinkan en Cañete. A través de sus katas se trabajan principios de equilibrio, tiempo y movimiento aplicables a la vida diaria.",
    colorAsignado: "azul",
    orden: 3,
    instagram: "https://www.instagram.com/bujinkancanete",
  },
  {
    nombre: "Volteretas Circo",
    descripcion:
      "Circo para las infancias en Cañete. A través del juego circense, l@s niñ@s desarrollan confianza, autonomía, cooperación y conciencia corporal.",
    colorAsignado: "salvia",
    orden: 4,
    instagram: "https://www.instagram.com/volteretas.circo/",
  },
];

async function uploadLogo(nombre) {
  const filename = logoFiles[nombre];
  if (!filename) {
    console.warn(`  ⚠️  No hay archivo de logo mapeado para "${nombre}"`);
    return null;
  }

  const filePath = path.join(ASSETS_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  Archivo no encontrado: ${filePath}`);
    return null;
  }

  console.log(`  📤 Subiendo logo para "${nombre}"...`);
  const asset = await client.assets.upload("image", fs.readFileSync(filePath), {
    filename,
  });
  console.log(`  ✅ Logo subido: ${asset._id}`);
  return asset._id;
}

async function main() {
  console.log(`Creando ${colaboradores.length} colaboradores...\n`);

  const transaction = client.transaction();

  for (const c of colaboradores) {
    console.log(`Procesando: ${c.nombre}`);

    const assetId = await uploadLogo(c.nombre);

    transaction.create({
      _type: "colaborador",
      ...c,
      logo: assetId
        ? {
            _type: "image",
            asset: { _type: "reference", _ref: assetId },
          }
        : undefined,
    });
  }

  const result = await transaction.commit();
  console.log("\n✅ Hecho. IDs creados:", result.results.length);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
