"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Colaborador, ColorColaborador } from "@/lib/types";

const COLOR_MAP: Record<ColorColaborador, string> = {
  rojo: "#8b1a1a",
  terracota: "#b85c3a",
  mostaza: "#c4a44a",
  salvia: "#7a9e7a",
  azul: "#445a81",
  ciruela: "#5a3a5e",
};

const COLOR_DEFAULT = "#445a81";

interface Props {
  colaborador: Colaborador;
}

export default function ColaboradorGallery({ colaborador }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const accent = COLOR_MAP[colaborador.colorAsignado ?? "azul"] ?? COLOR_DEFAULT;

  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const fotos = colaborador.fotosActividad;
  if (!fotos || fotos.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8">
      {/* Encabezado con color de acento */}
      <h2
        className="mb-4 font-display text-xl uppercase tracking-[0.15em] md:text-2xl"
        style={{ color: accent }}
      >
        {colaborador.nombre}
      </h2>

      {/* Carrusel */}
      <div className="group relative">
        {/* Flecha izquierda (solo desktop) */}
        <button
          onClick={() => scroll("left")}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-r-lg bg-black/40 px-2 py-8 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 group-hover:opacity-100 md:flex"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Flecha derecha (solo desktop) */}
        <button
          onClick={() => scroll("right")}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-l-lg bg-black/40 px-2 py-8 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 group-hover:opacity-100 md:flex"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Track del carrusel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: `${accent}40 transparent` }}
        >
          {fotos.map((foto, idx) => (
            <button
              key={foto._key ?? idx}
              onClick={() => setLightboxUrl(foto.url)}
              className="relative aspect-[4/3] w-[75vw] flex-shrink-0 snap-start overflow-hidden rounded-xl text-left md:w-[320px]"
            >
              <Image
                src={foto.url}
                alt={`${colaborador.nombre} — actividad`}
                fill
                sizes="(max-width: 768px) 75vw, 320px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox overlay (mismo patrón que activity-card.tsx) */}
      {lightboxUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxUrl(null)}
        >
          <button
            className="absolute right-4 top-4 text-white hover:text-white/70"
            onClick={() => setLightboxUrl(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <Image
            src={lightboxUrl}
            alt={`${colaborador.nombre} — actividad`}
            width={1200}
            height={800}
            className="max-h-[85vh] max-w-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
