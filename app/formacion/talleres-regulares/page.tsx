import Image from "next/image";
import Link from "next/link";

// ── Paleta de niveles (mismo esquema que /horarios) ──
const NIVEL_COLOR: Record<string, { bg: string; text: string }> = {
  iniciacion: { bg: "bg-[#8b1a1a]/15", text: "text-[#8b1a1a]" },   // rojo teatral
  intermedio: { bg: "bg-[#445a81]/15", text: "text-[#445a81]" },   // azul logotipo
};

interface Disciplina {
  id: string;
  nombre: string;
  foto: string;
  descripcion: string;
  niveles?: { nivel: "iniciacion" | "intermedio"; texto: string }[];
  notaPie?: string;
  /** object-position para centrar el sujeto dentro del recorte */
  objectPosition?: string;
  /** object-fit: contain para imágenes horizontales que se recortarían demasiado */
  objectFit?: "cover" | "contain";
  /** aspect-ratio propio (excepción para fotos con proporción muy distinta) */
  aspectRatio?: string;
}



const DISCIPLINAS: Disciplina[] = [
  {
    id: "danza-moderna-contemporanea",
    nombre: "Danza Moderna y Contemporánea",
    foto: "/images/formacion/danza-moderna-contemporanea.webp",
    descripcion:
      "Esta es una propuesta para acercarse al maravilloso mundo de la danza, la música y el arte escénico, aprendiendo aspectos técnicos y creativos fundamentales que estas disciplinas aportan al desarrollo personal, la salud corporal, el equilibrio emocional, trabajo colaborativo y fuerza expresiva. Las clases se desarrollan por etapas amigables que permiten preparar al cuerpo y la emoción para un desplante pleno conectado con un sincero goce del movimiento: apresto/calentamiento, ejercitación de movilidades funcionales y expresivas en secuencias guiadas o exploraciones corporales, práctica de secuencias y pasos de danza, creación autoral e interpretación de la música y la escena.",
    niveles: [
      {
        nivel: "iniciacion",
        texto:
          "dirigido a personas que deseen comenzar en esta disciplina y que no cuenten con conocimientos previos.",
      },
      {
        nivel: "intermedio",
        texto:
          "dirigido a personas que cuenten con experiencia previa y conocimientos básicos de danza moderna y contemporánea.",
      },
    ],
    notaPie:
      "Revisa nuestros horarios de clases para conocer los cursos gratuitos y con adhesión mensual",
  },
  {
    id: "danza-adulto-mayor",
    nombre: "Danza Adulto Mayor",
    foto: "/images/formacion/danza-adulto-mayor.webp",
    descripcion:
      "Un espacio de encuentro diseñado especialmente para personas mayores. Enfocado en la exploración corporal y el disfrute del movimiento. A través de técnicas de la danza moderna y contemporánea, trabajaremos la movilidad articular, el equilibrio, la coordinación y la memoria corporal de forma amable y progresiva. Un taller para reconectar con el placer de mover el cuerpo, liberar tensiones y compartir en comunidad, sin necesidad de experiencia previa.",
    // Imagen horizontal (1280×720): aspect-ratio propio más cercano a su proporción
    aspectRatio: "aspect-[4/3]",
  },


  {
    id: "circo-tela-aerea",
    nombre: "Circo Contemporáneo (Tela Aérea)",
    foto: "/images/formacion/circo-tela-aerea.webp",
    descripcion:
      "El circo contemporáneo es una mezcla de la tradición circense francesa con la transformación y adaptación de la danza contemporánea. La disciplina de la danza en Tela aérea consiste en realizar movimientos artísticos, creativos y acrobáticos estando la persona sujeta o suspendida de una o dos telas que penden del techo. Es una práctica divertida y completa que a través del entrenamiento fortalece el cuerpo y mejora la flexibilidad, coordinación y equilibrio. Una invitación a empujar los límites personales y sorprenderse con las propias capacidades del cuerpo, la mente y espíritu.",
    niveles: [
      {
        nivel: "iniciacion",
        texto:
          "dirigido a personas con salud compatible con la disciplina, que deseen comenzar en esta práctica y que no cuenten con conocimientos previos.",
      },
      {
        nivel: "intermedio",
        texto:
          "dirigido a personas con salud compatible con la disciplina, que cuenten con experiencia previa y conocimientos básicos en aparatos aéreos del circo contemporáneo.",
      },
    ],
    notaPie:
      "Revisa nuestros horarios de clases para conocer los cursos gratuitos y con adhesión mensual",
  },
  {
    id: "ballet-inicial",
    nombre: "Ballet Inicial",
    foto: "/images/formacion/ballet-inicial.webp",
    descripcion:
      "Un espacio diseñado para adentrarse en la danza clásica desde cero, sin importar la edad ni la experiencia previa. A través de una práctica amable, progresiva y consciente, trabajaremos los fundamentos de la técnica de ballet para mejorar la postura, la flexibilidad, la alineación y la fuerza muscular. Un curso para conectar con la expresión artística, la música y el disfrute del propio cuerpo en un ambiente acogedor y sin presiones.",
  },
  {
    id: "breakdance",
    nombre: "Breakdance",
    foto: "/images/formacion/breakdance.webp",
    descripcion:
      "Clase introductoria a la disciplina del Breakin o breakdance, estilo de baile neoyorquino desarrollado en la década de los 80s en barrios marginales de Nueva York que se ha instalado en todo el mundo como medio de expresión a través del cuerpo, el ritmo, la originalidad y la destreza. El breakdance es una manera de ver el mundo, es una rama de la cultura Hip-hop, es una vivencia de compartir y crear comunidad.\n\nLa clase contempla juegos rítmicos de movimiento y voz (freestyle/beatbox), secuencias y pasos de baile básicos del break, desarrollo del estilo original y libre (freestyle), secuencias de baile grupal, dinámicas en modalidad de cypher (círculo de baile) y battle (batalla).",
  },
];

const MODALIDADES = [
  {
    titulo: "Talleres con adhesión mensual",
    texto: "Clases continuas con arancel accesible.",
    // mostaza
    accent: "border-l-[#c4a44a] bg-[#c4a44a]/[0.06]",
  },
  {
    titulo: "Talleres gratuitos",
    texto:
      "Programas abiertos a la comunidad gracias al financiamiento de la I. Municipalidad de Cañete.",
    // verde salvia
    accent: "border-l-[#7a9e7a] bg-[#7a9e7a]/[0.06]",
  },
];


export default function TalleresRegularesPage() {
  return (
    <main className="pt-28">
      {/* ── Banner superior (full-bleed, altura intermedia) ── */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden md:h-[55vh] md:min-h-[420px]">

        <Image
          src="/images/formacion/talleres-regulares-banner.webp"
          alt="Talleres Regulares Mardanza"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tinta/70 via-tinta/30 to-tinta/10" />
        <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-12 md:pb-14">
          <h1 className="font-display text-4xl uppercase tracking-wide text-papel md:text-5xl">
            Talleres Regulares
          </h1>
        </div>
      </section>


      {/* ── Contenido ── */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12">
        {/* ── Intro ── */}
        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
            Práctica, creación y aprendizaje continuo
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-tinta/70">
            <p>
              Nuestro espacio mantiene una programación formativa continua en
              danza y circo contemporáneo que contempla la realización de clases
              periódicas, muestras de proceso, viajes de intercambio y
              participación en presentaciones artísticas.
            </p>
            <p>
              Te invitamos a formar parte de nuestras clases regulares, un
              espacio abierto a <strong className="font-semibold text-tinta">todas las edades</strong>{" "}
              y niveles de experiencia. Aquí la práctica constante se convierte
              en un lugar de encuentro, juego y desarrollo corporal.
            </p>
          </div>

          {/* Modalidades de acceso */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {MODALIDADES.map((m) => (
              <div
                key={m.titulo}
                className={`rounded-lg border border-arena/30 border-l-4 p-5 ${m.accent}`}
              >
                <h3 className="font-display text-base uppercase tracking-wide text-tinta">
                  {m.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tinta/70">
                  {m.texto}
                </p>
              </div>
            ))}
          </div>


          {/* Línea de cierre del intro */}
          <p className="mt-8 text-base leading-relaxed text-tinta/70">
            ¡Encuentra tu disciplina, revisa los horarios e intégrate a nuestras
            clases!{" "}
            <Link
              href="/horarios"
              className="font-medium text-tinta underline decoration-menta underline-offset-4 transition-colors hover:text-menta"
            >
              Ver horarios
            </Link>
          </p>
        </section>

        {/* ── Bloques por disciplina ── */}
        <section className="space-y-16">
          {DISCIPLINAS.map((d, i) => {
            const invertido = i % 2 === 1;
            return (
              <article
                key={d.id}
                id={d.id}
                className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10"
              >
                {/* Foto */}
                <div
                  className={`group relative ${d.aspectRatio ?? "aspect-[4/5]"} overflow-hidden rounded-xl bg-papel ${
                    invertido ? "md:order-2" : ""
                  }`}
                >

                  <div className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform md:group-hover:scale-[1.04]">
                    <Image
                      src={d.foto}
                      alt={d.nombre}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`${d.objectFit ?? "object-cover"} ${
                        d.objectPosition ? `object-[${d.objectPosition}]` : ""
                      }`}
                      loading="lazy"
                    />
                  </div>
                </div>


                {/* Texto */}
                <div className={invertido ? "md:order-1" : ""}>
                  <h3 className="mb-3 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
                    {d.nombre}
                  </h3>
                  <div className="space-y-3 text-base leading-relaxed text-tinta/70">
                    {d.descripcion.split("\n\n").map((parrafo, j) => (
                      <p key={j}>{parrafo}</p>
                    ))}
                  </div>

                  {/* Niveles */}
                  {d.niveles && (
                    <div className="mt-5 space-y-3">
                      {d.niveles.map((n) => {
                        const color = NIVEL_COLOR[n.nivel];
                        return (
                          <div
                            key={n.nivel}
                            className="rounded-lg border border-arena/30 bg-papel p-4"
                          >
                            <span
                              className={`inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${color.bg} ${color.text}`}
                            >
                              Nivel {n.nivel === "iniciacion" ? "Iniciación" : "Intermedio"}
                            </span>
                            <p className="mt-2 text-sm leading-relaxed text-tinta/70">
                              {n.texto}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Nota al pie */}
                  {d.notaPie && (
                    <p className="mt-4 text-sm italic leading-relaxed text-tinta/50">
                      * {d.notaPie}{" "}
                      <Link
                        href="/horarios"
                        className="font-medium text-tinta underline decoration-menta underline-offset-4 transition-colors hover:text-menta"
                      >
                        aquí
                      </Link>
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        {/* ── CTA final ── */}
        <section className="mt-16 rounded-lg border border-arena/30 bg-papel p-8 text-center">
          <h2 className="font-display text-2xl uppercase tracking-wide text-tinta">
            Te esperamos en nuestra casa
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-tinta/70">
            Encuentra tu disciplina, revisa los horarios e intégrate a nuestras
            clases regulares.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/horarios"
              className="inline-flex items-center rounded-full bg-tinta px-6 py-3 text-sm font-medium text-papel transition-transform hover:scale-105"
            >
              Ver horarios
            </Link>
            <a
              href="https://wa.me/56986279618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
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
          </div>
        </section>
      </div>
    </main>
  );
}
