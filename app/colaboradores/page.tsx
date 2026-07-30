import Image from "next/image";
import { getColaboradores } from "@/lib/data";
import ColaboradorCard from "@/components/colaborador-card";
import ColaboradorGallery from "@/components/colaborador-gallery";

export const revalidate = 60;

export default async function ColaboradoresPage() {
  const colaboradores = await getColaboradores();

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
            Colaboradores
          </h1>
        </div>
      </section>

      {/* ── Contenido ── */}
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        {/* Intro */}
        <p className="mb-10 text-base leading-relaxed text-tinta/70 md:text-lg">
          Talleres y agrupaciones que forman parte de nuestra comunidad, con autonomía propia.
        </p>

        {/* Grid de tarjetas */}
        {colaboradores.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {colaboradores.map((colaborador) => (
              <ColaboradorCard key={colaborador._id} colaborador={colaborador} />
            ))}
          </div>
        ) : (
          <p className="text-center text-tinta/50">
            No hay colaboradores registrados por ahora.
          </p>
        )}

        {/* ── Galería de fotos por colaborador ── */}
        {colaboradores.some((c) => c.fotosActividad && c.fotosActividad.length > 0) && (
          <section className="mt-16 border-t border-tinta/10 pt-12">
            <h2 className="mb-8 font-display text-2xl uppercase tracking-[0.15em] text-tinta md:text-3xl">
              Galería de actividades
            </h2>
            {colaboradores.map((colaborador) => (
              <ColaboradorGallery key={colaborador._id} colaborador={colaborador} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
