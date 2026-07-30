// Script para subir fotos de actividades a cada colaborador en Sanity.
// Uso: node scripts/seed-fotos-actividad.mjs

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

/** Mapa: nombre del colaborador → { carpeta, archivos } */
const fotosMap = {
  "Baquetas & Timbales (Escuela de Talentos)": {
    carpeta: "baquetas-timbales",
    archivos: [
      "baquetas-timbales-01.webp",
      "baquetas-timbales-02.webp",
      "baquetas-timbales-03.webp",
      "baquetas-timbales-04.webp",
      "baquetas-timbales-05.webp",
      "baquetas-timbales-06.webp",
      "baquetas-timbales-07.webp",
    ],
  },
  "Colectivo Inhabitado": {
    carpeta: "inhabitado",
    archivos: [
      "inhabitado-01.webp",
      "inhabitado-02.webp",
      "inhabitado-03.webp",
      "inhabitado-04.webp",
      "inhabitado-05.webp",
      "inhabitado-06.webp",
      "inhabitado-07.webp",
    ],
  },
  "Kan Ryu Dojo Bujinkan": {
    carpeta: "kan-ryu-dojo",
    archivos: [
      "kan-ryu-dojo-01.webp",
      "kan-ryu-dojo-02.webp",
      "kan-ryu-dojo-03.webp",
      "kan-ryu-dojo-04.webp",
      "kan-ryu-dojo-05.webp",
      "kan-ryu-dojo-06.webp",
      "kan-ryu-dojo-07.webp",
      "kan-ryu-dojo-08.webp",
    ],
  },
  "Volteretas Circo": {
    carpeta: "volteretas-circo",
    archivos: [
      "volteretas-circo-01.webp",
      "volteretas-circo-02.webp",
      "volteretas-circo-03.webp",
      "volteretas-circo-04.webp",
      "volteretas-circo-05.webp",
    ],
  },
};

async function uploadImage(filePath, filename) {
  console.log(`  📤 Subiendo ${filename}...`);
  const asset = await client.assets.upload("image", fs.readFileSync(filePath), {
    filename,
  });
  console.log(`  ✅ Subido: ${asset._id}`);
  return asset._id;
}

async function main() {
  // Obtener los colaboradores existentes
  const colaboradores = await client.fetch(
    `*[_type == "colaborador"] { _id, nombre }`
  );

  console.log(`Encontrados ${colaboradores.length} colaboradores.\n`);

  for (const colab of colaboradores) {
    const info = fotosMap[colab.nombre];
    if (!info) {
      console.warn(`⚠️  No hay fotos mapeadas para "${colab.nombre}"`);
      continue;
    }

    console.log(`\n📸 Procesando: ${colab.nombre}`);

    const carpetaPath = path.join(ASSETS_DIR, info.carpeta);
    if (!fs.existsSync(carpetaPath)) {
      console.warn(`  ⚠️  Carpeta no encontrada: ${carpetaPath}`);
      continue;
    }

    // Subir cada foto
    const fotosSubidas = [];
    for (const archivo of info.archivos) {
      const filePath = path.join(carpetaPath, archivo);
      if (!fs.existsSync(filePath)) {
        console.warn(`  ⚠️  Archivo no encontrado: ${filePath}`);
        continue;
      }
      const assetId = await uploadImage(filePath, archivo);
      fotosSubidas.push({
        _type: "image",
        asset: { _type: "reference", _ref: assetId },
      });
    }

    if (fotosSubidas.length === 0) {
      console.warn(`  ⚠️  No se subió ninguna foto para "${colab.nombre}"`);
      continue;
    }

    // Hacer patch al documento del colaborador
    console.log(`  ✏️  Actualizando documento ${colab._id}...`);
    await client
      .patch(colab._id)
      .set({ fotosActividad: fotosSubidas })
      .commit();

    console.log(`  ✅ ${fotosSubidas.length} fotos asignadas a "${colab.nombre}"`);
  }

  console.log("\n✅ Proceso completado.");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
