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

      <div className="mb-10 space-y-4 text-sm leading-relaxed text-tinta/85">
        <p>
          Mardanza nació en Cañete como un espacio artístico independiente para la enseñanza y difusión de disciplinas del movimiento. En una ciudad que tiene pocos espacios para aprender y mostrar lo que se crea, Mardanza se convirtió en territorio: un lugar donde el cuerpo tiene espacio para crecer.
        </p>
        <p>
          Liderado por Roberto Roa y María Ángela Medrano, hoy somos un centro cultural activo en la Provincia de Arauco, con talleres semanales de danza contemporánea, teatro, breakdance, circo, tela aérea, artes marciales y más. Participamos en festivales, muestras y encuentros que ponen el arte cañetino en escena — porque creemos que el movimiento es también una forma de habitar y transformar el lugar donde vivimos.
        </p>
        <p>
          Territorio en Movimiento no es solo un lema. Es la manera en que entendemos la cultura: viva, presente, en permanente construcción.
        </p>
      </div>

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
