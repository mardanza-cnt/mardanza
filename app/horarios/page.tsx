import Image from "next/image";
import { getTalleres } from "@/lib/data";
import { DIAS_ORDEN, DISCIPLINA_LABEL, UBICACION_LABEL } from "@/lib/types";
import type { Taller, Disciplina } from "@/lib/types";

export const revalidate = 60;

function agruparPorDia(talleres: Taller[]) {
  const mapa = new Map<string, Taller[]>();
  for (const d of DIAS_ORDEN) mapa.set(d, []);
  for (const t of talleres) {
    const grupo = mapa.get(t.dia);
    if (grupo) grupo.push(t);
  }
  return mapa;
}

// Colores editoriales apagados para cada disciplina.
// Fondo claro + texto oscuro garantiza WCAG AA en text-xs.
const DISCIPLINA_COLOR: Record<Disciplina, { bg: string; text: string }> = {
  danza:     { bg: "bg-tinta", text: "text-papel" },
  teatro:    { bg: "bg-arena/20", text: "text-tinta" },
  breakdance:{ bg: "bg-cielo/25", text: "text-tinta" },
  circo:     { bg: "bg-menta/20", text: "text-tinta" },
  dojo:      { bg: "bg-[#445a81]/15", text: "text-[#445a81]" },
  telas:     { bg: "bg-tinta/10", text: "text-tinta" },
  canto:     { bg: "bg-arena/30", text: "text-tinta" },
  bateria:   { bg: "bg-cielo/15", text: "text-tinta" },
};

export default async function HorariosPage() {
  const talleres = await getTalleres();
  const porDia = agruparPorDia(talleres);

  return (
    <main>
      {/* ── Banner decorativo ── */}
      <section className="relative h-48 overflow-hidden md:h-56">
        <Image
          src="/images/gallery-13.webp"
          alt=""
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tinta/70 via-tinta/30 to-tinta/10" />
        <div className="absolute inset-0 flex items-end px-6 pb-6 md:px-12">
          <h1 className="font-display text-4xl uppercase tracking-wide text-papel md:text-5xl">
            Talleres
          </h1>
        </div>
      </section>

      {/* ── Contenido ── */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12">
        {/* Intro */}
        <p className="mb-12 text-base leading-relaxed text-tinta/70">
          Horario semanal de nuestros talleres regulares. Todos son abiertos a la comunidad
          — no necesitas experiencia previa para sumarte.
        </p>

        {/* Grilla por día */}
        <div className="space-y-10">
          {DIAS_ORDEN.map((dia) => {
            const talleresDelDia = porDia.get(dia) ?? [];
            if (talleresDelDia.length === 0) return null;

            return (
              <section key={dia}>
                <h2 className="mb-4 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
                  {dia}
                </h2>
                <div className="space-y-3">
                  {talleresDelDia.map((t) => {
                    const color = DISCIPLINA_COLOR[t.disciplina] ?? { bg: "bg-tinta", text: "text-papel" };
                    return (
                      <div
                        key={t._id}
                        className="rounded-lg border border-arena/30 bg-papel p-4 transition-colors hover:border-arena/60"
                      >
                        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-display text-lg uppercase tracking-wide text-tinta">
                              {t.nombre}
                            </h3>
                            <p className="mt-1 text-sm text-tinta/60">
                              {t.horaInicio}–{t.horaFin}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-medium ${color.bg} ${color.text}`}
                            >
                              {DISCIPLINA_LABEL[t.disciplina]}
                            </span>
                            <span className="text-tinta/50">·</span>
                            <span className="text-tinta/70">
                              {UBICACION_LABEL[t.ubicacion] ?? t.ubicacion}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Mensaje si no hay talleres */}
        {talleres.length === 0 && (
          <p className="text-center text-tinta/50">
            No hay talleres disponibles por ahora. Vuelve pronto.
          </p>
        )}

        {/* ── CTA WhatsApp ── */}
        <section className="mt-16 rounded-lg border border-arena/30 bg-papel p-8 text-center">
          <h2 className="font-display text-2xl uppercase tracking-wide text-tinta">
            ¿Quieres sumarte?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-tinta/70">
            Todos nuestros talleres son abiertos a la comunidad. Escríbenos por
            WhatsApp y te contamos los detalles para empezar.
          </p>
          <a
            href="https://wa.me/56986279618"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
