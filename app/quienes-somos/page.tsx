import Image from "next/image";
import { Sparkles, Theater, Drum, MicVocal, Wind, Tent, Swords, Waves } from "lucide-react";

const DISCIPLINAS = [
  { nombre: "Danza", icon: Sparkles, bg: "bg-cielo", text: "text-tinta" },
  { nombre: "Teatro", icon: Theater, bg: "bg-menta", text: "text-tinta" },
  { nombre: "Breakdance", icon: Wind, bg: "bg-arena", text: "text-papel" },
  { nombre: "Circo", icon: Tent, bg: "bg-tinta", text: "text-menta" },
  { nombre: "Dojo", icon: Swords, bg: "bg-cielo", text: "text-tinta" },
  { nombre: "Telas", icon: Waves, bg: "bg-menta", text: "text-tinta" },
  { nombre: "Canto", icon: MicVocal, bg: "bg-arena", text: "text-papel" },
  { nombre: "Batería", icon: Drum, bg: "bg-tinta", text: "text-menta" },
];

export default function QuienesSomosPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 md:px-12">
      <h1 className="mb-1 font-display text-2xl text-tinta">QUIÉNES SOMOS</h1>
      <span className="mb-6 inline-block rounded-full bg-tinta px-3 py-1 text-xs text-menta">
        TERRITORIO EN MOVIMIENTO
      </span>

      {/* TODO: reemplazar por la historia real que envía Mardanza (perfil, historia) */}
      <p className="mb-10 text-sm leading-relaxed text-tinta/85">
        Texto de ejemplo — reemplazar por la historia real: cuándo se formó Mardanza,
        quiénes la fundaron, qué la mueve como agrupación cultural en Cañete.
      </p>

      {/* ── Galería editorial ── */}
      <div className="mb-12 grid grid-cols-1 gap-4">
        {/* Foto grande arriba — ancho completo */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg sm:aspect-[3/2]">
          <Image
            src="/images/quienes-somos-01.webp"
            alt="Mardanza — agrupación cultural"
            fill
            sizes="(max-width: 640px) 100vw, 672px"
            className="object-cover"
            loading="eager"
          />
        </div>
        {/* Dos fotos abajo lado a lado */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/quienes-somos-02.webp"
              alt="Mardanza — territorio en movimiento"
              fill
              sizes="(max-width: 640px) 50vw, 336px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/quienes-somos-03.webp"
              alt="Mardanza — Cañete"
              fill
              sizes="(max-width: 640px) 50vw, 336px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <p className="mb-4 text-xs tracking-wide text-tinta/60">DISCIPLINAS</p>
      <div className="grid grid-cols-2 gap-3">
        {DISCIPLINAS.map(({ nombre, icon: Icon, bg, text }) => (
          <div key={nombre} className={`rounded-lg p-4 ${bg}`}>
            <Icon className={text} size={20} />
            <p className={`mt-2 font-display text-sm ${text}`}>{nombre}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
