import Image from "next/image";

interface Foto {
  src: string;
  alt: string;
  /** Clases CSS para posicionamiento en desktop */
  desktop: string;
  /** Aspect-ratio en mobile (2-column grid) */
  mobileAspect: string;
}

const FOTOS: Foto[] = [
  {
    src: "/images/quienes-somos-01.webp",
    alt: "Mardanza — agrupación cultural",
    desktop: "md:col-span-2 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-[4/3]",
  },
  {
    src: "/images/quienes-somos-02.webp",
    alt: "Mardanza — territorio en movimiento",
    desktop: "md:col-span-1 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-square",
  },
  {
    src: "/images/quienes-somos-03.webp",
    alt: "Mardanza — Cañete",
    desktop: "md:col-span-1 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-[4/3]",
  },
  {
    src: "/images/quienes-somos-04.webp",
    alt: "Mardanza — taller de danza",
    desktop: "md:col-span-1 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-[4/3]",
  },
  {
    src: "/images/quienes-somos-05.webp",
    alt: "Mardanza — presentación",
    desktop: "md:col-span-2 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-[3/2]",
  },
  {
    src: "/images/quienes-somos-06.webp",
    alt: "Mardanza — ensayo",
    desktop: "md:col-span-1 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-square",
  },
  {
    src: "/images/quienes-somos-07.webp",
    alt: "Mardanza — backstage",
    desktop: "md:col-span-1 md:row-span-2 md:min-h-[416px]",
    mobileAspect: "aspect-[4/3]",
  },
  {
    src: "/images/quienes-somos-08.webp",
    alt: "Mardanza — comunidad",
    desktop: "md:col-span-1 md:row-span-1 md:min-h-[200px]",
    mobileAspect: "aspect-[4/3]",
  },
];

interface Codirector {
  src: string;
  nombre: string;
  rol: string;
}

const CODIRECTORES: Codirector[] = [
  {
    src: "/images/maria-angela.webp",
    nombre: "María Ángela Medrano Medrano",
    rol: "Co-directora Mardanza — Bailarina y acróbata aérea",
  },
  {
    src: "/images/roberto.webp",
    nombre: "Roberto Roa Cartes",
    rol: "Co-director Mardanza — Bailarín, bboy y traductor",
  },
];

const VALORES = [
  "Pasión por el movimiento",
  "Trato respetuoso y amoroso",
  "Adaptabilidad, perseverancia y sencillez",
  "Participación activa y comprometida en la comunidad",
  "Excelencia en la entrega de conocimientos",
];

export default function QuienesSomosPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-28 pb-12 md:px-12">
      <h1 className="mb-8 font-display text-2xl text-tinta">QUIÉNES SOMOS</h1>

      {/* ── Intro ── */}
      <div className="mb-12 space-y-4 text-sm leading-relaxed text-tinta/85">
        <p>
          Somos un Centro Cultural ubicado en la comuna de Cañete, Chile.
          Ofrecemos un espacio de formación, creación y difusión artística para
          personas que buscan aprender, entrenar y compartir a través del arte,
          la danza, el circo y otras disciplinas de movimiento corporal y
          social.
        </p>
        <p>
          Nuestras actividades contemplan la realización de talleres
          formativos, creaciones coreográficas, participación en festivales y
          encuentros, y producción de eventos culturales artísticos y
          comunitarios.
        </p>
        <p>
          Cultivamos una gestión colaborativa y acogedora con otras
          organizaciones, instituciones y artistas para el desarrollo de
          proyectos e iniciativas de diversa índole.
        </p>
      </div>

      {/* ── Misión / Visión / Valores ── */}
      <section className="mb-12 space-y-8">
        <div>
          <h2 className="mb-2 font-display text-lg uppercase tracking-[0.15em] text-tinta">
            Nuestra misión
          </h2>
          <p className="text-sm leading-relaxed text-tinta/85">
            Ofrecer una experiencia artística de carácter honesto e integral
            para la formación y expresión de personas de todas las edades,
            brindando un espacio que potencie el talento, la disciplina, el
            bienestar corporal y la creatividad en un entorno colaborativo,
            profesional e inclusivo abierto a la comunidad.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-lg uppercase tracking-[0.15em] text-tinta">
            Nuestra visión
          </h2>
          <p className="text-sm leading-relaxed text-tinta/85">
            Convertirnos en un espacio líder en Cañete, siendo reconocidos por
            abrirle espacios al arte a través de la danza, el circo y otras
            actividades culturales y comunitarias.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg uppercase tracking-[0.15em] text-tinta">
            Valores
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-tinta/85">
            {VALORES.map((valor) => (
              <li key={valor} className="flex items-start gap-3">
                <span
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-menta"
                  aria-hidden="true"
                />
                <span>{valor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Codirectores ── */}
      <section className="mb-12">
        <h2 className="mb-6 font-display text-lg uppercase tracking-[0.15em] text-tinta">
          Codirectores
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {CODIRECTORES.map((codirector) => (
            <figure key={codirector.src} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                {/* Imagen con hover zoom (solo desktop) */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform md:group-hover:scale-[1.04]">
                  <Image
                    src={codirector.src}
                    alt={codirector.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <figcaption className="mt-3 text-center">
                <p className="font-display text-base uppercase tracking-[0.1em] text-tinta">
                  {codirector.nombre}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-tinta/60">
                  {codirector.rol}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Galería tipo collage ── */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {FOTOS.map((foto) => (
          <div
            key={foto.src}
            className={`group relative overflow-hidden rounded-lg ${foto.mobileAspect} md:aspect-auto ${foto.desktop}`}
          >
            {/* Imagen con hover zoom (solo desktop) */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform md:group-hover:scale-[1.04]">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 100vw, 224px"
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
