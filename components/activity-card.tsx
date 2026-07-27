"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Actividad } from "@/lib/types";
import { DISCIPLINA_LABEL } from "@/lib/types";

const DIA_SEMANA = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

function parseFecha(fecha: string) {
  const d = new Date(`${fecha}T00:00:00`);
  return {
    dia: DIA_SEMANA[d.getDay()],
    numero: d.getDate(),
  };
}

export default function ActivityCard({ actividad }: { actividad: Actividad }) {
  const [open, setOpen] = useState(false);
  const { dia, numero } = parseFecha(actividad.fecha);
  const tieneImagen = Boolean(actividad.imagenUrl);

  return (
    <>
      <div
        className={`flex overflow-hidden rounded-xl ${tieneImagen ? "cursor-pointer" : ""}`}
        onClick={tieneImagen ? () => setOpen(true) : undefined}
      >
        <div className="flex w-20 flex-none flex-col items-center justify-center bg-tinta py-4 text-menta">
          <span className="font-display text-xs tracking-wide">{dia}</span>
          <span className="font-display text-3xl leading-none">{numero}</span>
          <span className="mt-1 text-xs">{actividad.hora}</span>
        </div>

        <div
          className="relative flex flex-1 items-center justify-between gap-3 bg-menta p-4"
          style={
            actividad.imagenUrl
              ? {
                  backgroundImage: `linear-gradient(to right, rgba(22,22,22,0.75), rgba(22,22,22,0.35)), url(${actividad.imagenUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          <div>
            <p
              className={`font-display text-base ${
                actividad.imagenUrl ? "text-papel" : "text-tinta"
              }`}
            >
              {actividad.titulo}
            </p>
            {(actividad.lugar || actividad.descripcion) && (
              <p
                className={`mt-1 text-sm ${
                  actividad.imagenUrl ? "text-papel/85" : "text-tinta/80"
                }`}
              >
                {[actividad.lugar, actividad.descripcion].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
          <div className="flex flex-none flex-wrap gap-1">
            {actividad.disciplina.map((d) => (
              <span
                key={d}
                className="rounded-full bg-tinta px-3 py-1 text-xs text-menta"
              >
                {DISCIPLINA_LABEL[d]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {open && actividad.imagenUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-4 top-4 text-white hover:text-white/70"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <Image
            src={actividad.imagenUrl}
            alt={actividad.titulo}
            width={1200}
            height={800}
            className="max-h-[85vh] max-w-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
