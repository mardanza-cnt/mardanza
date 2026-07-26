"use client";

import { useState } from "react";
import type { Actividad, Disciplina } from "@/lib/types";
import { DISCIPLINA_LABEL } from "@/lib/types";
import ActivityCard from "@/components/activity-card";

const DISCIPLINAS: Disciplina[] = ["danza", "teatro", "bateria", "canto"];

export default function DisciplineFilter({ actividades }: { actividades: Actividad[] }) {
  const [activa, setActiva] = useState<Disciplina | "todas">("todas");

  const visibles =
    activa === "todas" ? actividades : actividades.filter((a) => a.disciplina === activa);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiva("todas")}
          className={`rounded-full px-4 py-2 text-sm ${
            activa === "todas" ? "bg-tinta text-papel" : "border border-arena text-tinta"
          }`}
        >
          Todas
        </button>
        {DISCIPLINAS.map((d) => (
          <button
            key={d}
            onClick={() => setActiva(d)}
            className={`rounded-full px-4 py-2 text-sm ${
              activa === d ? "bg-tinta text-papel" : "border border-arena text-tinta"
            }`}
          >
            {DISCIPLINA_LABEL[d]}
          </button>
        ))}
      </div>

      {visibles.length === 0 ? (
        <p className="text-sm text-tinta/70">No hay actividades para esta disciplina por ahora.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {visibles.map((actividad) => (
            <ActivityCard key={actividad._id} actividad={actividad} />
          ))}
        </div>
      )}
    </div>
  );
}
