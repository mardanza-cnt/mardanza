import Image from "next/image";

interface Foto {
  src: string;
  alt: string;
  /** Columnas que ocupa en desktop (1 o 2) */
  cols: 1 | 2;
  /** Filas que ocupa en desktop (1 o 2) */
  rows: 1 | 2;
  /** Aspect-ratio en mobile (2-column grid) */
  mobileAspect: string;
}

const FOTOS: Foto[] = [
  { src: "/images/quienes-somos-01.webp", alt: "Mardanza — agrupación cultural", cols: 2, rows: 1, mobileAspect: "aspect-[4/3]" },
  { src: "/images/quienes-somos-02.webp", alt: "Mardanza — territorio en movimiento", cols: 1, rows: 1, mobileAspect: "aspect-square" },
  { src: "/images/quienes-somos-03.webp", alt: "Mardanza — Cañete", cols: 1, rows: 1, mobileAspect: "aspect-[4/3]" },
  { src: "/images/quienes-somos-04.webp", alt: "Mardanza — taller de danza", cols: 1, rows: 1, mobileAspect: "aspect-[4/3]" },
  { src: "/images/quienes-somos-05.webp", alt: "Mardanza — presentación", cols: 2, rows: 1, mobileAspect: "aspect-[3/2]" },
  { src: "/images/quienes-somos-06.webp", alt: "Mardanza — ensayo", cols: 1, rows: 1, mobileAspect: "aspect-square" },
  { src: "/images/quienes-somos-07.webp", alt: "Mardanza — backstage", cols: 1, rows: 2, mobileAspect: "aspect-[4/3]" },
  { src: "/images/quienes-somos-08.webp", alt: "Mardanza — comunidad", cols: 1, rows: 1, mobileAspect: "aspect-[4/3]" },
];

export default function QuienesSomosPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 md:px-12">
      <h1 className="mb-8 font-display text-2xl text-tinta">QUIÉNES SOMOS</h1>

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

      {/* ── Galería tipo collage ── */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {FOTOS.map((foto) => (
          <div
            key={foto.src}
            className={`group relative overflow-hidden rounded-lg ${
              foto.cols === 2 ? "col-span-2" : "col-span-1"
            } ${
              foto.rows === 2 ? "row-span-2" : "row-span-1"
            } ${foto.mobileAspect} ${
              foto.rows === 2 ? "md:min-h-[400px]" : "md:min-h-[192px]"
            }`}
          >
            {/* Imagen con hover zoom (solo desktop) */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform md:group-hover:scale-[1.04]">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes={
                  foto.cols === 2
                    ? "(max-width: 640px) 100vw, 448px"
                    : "(max-width: 640px) 50vw, 224px"
                }
                className="object-cover"
                loading={foto.src.includes("01") ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
