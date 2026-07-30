"use client";

import Image from "next/image";
import type { Colaborador, ColorColaborador } from "@/lib/types";

// Misma paleta que la usada en /horarios para los días de la semana
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

export default function ColaboradorCard({ colaborador }: Props) {
  const bgColor = COLOR_MAP[colaborador.colorAsignado ?? "azul"] ?? COLOR_DEFAULT;
  const hasLink = Boolean(colaborador.instagram);

  const cardContent = (
    <div
      className="group relative flex h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl p-6 text-center transition-all duration-500 md:h-72"
      style={{ backgroundColor: bgColor }}
    >
      {/* ── Estado normal: logo + nombre ── */}
      <div className="flex flex-col items-center gap-4 transition-opacity duration-500 group-hover:opacity-0 md:opacity-100">
        {colaborador.logoUrl ? (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
            <Image
              src={colaborador.logoUrl}
              alt={colaborador.nombre}
              width={72}
              height={72}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
            <span className="font-display text-3xl text-white/70">
              {colaborador.nombre.charAt(0)}
            </span>
          </div>
        )}
        <h3 className="font-display text-lg uppercase tracking-[0.15em] text-white">
          {colaborador.nombre}
        </h3>
      </div>

      {/* ── Estado hover (desktop): descripción ── */}
      <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-sm leading-relaxed text-white/90 md:text-base">
          {colaborador.descripcion}
        </p>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={colaborador.instagram!}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        onClick={(e) => e.currentTarget.blur()}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
