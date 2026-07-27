import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: false,
};

// Activa Sanity de verdad una vez que exista NEXT_PUBLIC_SANITY_PROJECT_ID
// en el .env. Mientras tanto, lib/data.ts sirve datos de ejemplo para
// poder maquetar el sitio. next-sanity valida projectId al crear el
// cliente, así que solo lo creamos cuando de verdad hay uno configurado.
export const sanityEnabled = Boolean(sanityConfig.projectId);

export const sanityClient = sanityEnabled ? createClient(sanityConfig) : null;

export function urlFor(source: string) {
  if (!sanityClient) {
    throw new Error("Sanity no está configurado todavía (falta NEXT_PUBLIC_SANITY_PROJECT_ID).");
  }
  return imageUrlBuilder(sanityClient).image(source);
}
