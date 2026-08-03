import Image from "next/image";
import Link from "next/link";

const OBRAS = [
  {
    titulo: "La habitación del tiempo",
    foto: "/images/gallery-03.webp",
    alt: "La habitación del tiempo — espectáculo de breakdance",
    texto:
      "Espectáculo familiar de breakdance y artes escénicas que cuenta la historia de Akor y Rebor, dos viajeros interdimensionales que salvarán a la tierra de su extinción.",
  },
  {
    titulo: "Repertorio Nacional",
    foto: "/images/gallery-16.webp",
    alt: "Repertorio Nacional — danzas con músicas populares",
    texto:
      "Espectáculo que reúne una colección de danzas creadas con músicas populares presentes en nuestra memoria colectiva desde el siglo pasado transitando por Violeta Parra, Inti Illimani, Illapu, Víctor Jara y Los Jaivas, hasta voces más actuales como Anita Tijoux.",
  },
  {
    titulo: "Jesucristo Super Estrella (adaptación)",
    foto: "/images/gallery-09.webp",
    alt: "Jesucristo Super Estrella — espectáculo multidisciplinar",
    texto:
      "Espectáculo multidisciplinar basado en la Ópera Rock Jesucristo Superstar. Incluye música en vivo, cantantes, bailarines y actores, con un total de 40 artistas en escena. Bajo la dirección teatral de Jorge Lagos, dirección musical de Álvaro Navarro y dirección coreográfica de Roberto Roa y Angela Medrano.",
  },
];

const SALAS_LISTA = [
  "Ensayos",
  "Clases",
  "Talleres",
  "Audiciones",
  "Reuniones",
  "Atenciones terapéuticas",
  "Sesiones de fotos o rodajes",
];

export default function OtrosServiciosPage() {
  return (
    <main className="pt-28">
      {/* ── Banner superior (misma altura ajustada que Talleres Regulares) ── */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden md:h-[55vh] md:min-h-[420px]">
        <Image
          src="/images/gallery-14.webp"
          alt="Otros Servicios Mardanza"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tinta/70 via-tinta/30 to-tinta/10" />
        <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-12 md:pb-14">
          <h1 className="font-display text-4xl uppercase tracking-wide text-papel md:text-5xl">
            Otros Servicios
          </h1>
        </div>
      </section>

      {/* ── Contenido ── */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12">
        {/* ── Intro ── */}
        <section className="mb-16">
          <p className="text-base leading-relaxed text-tinta/70">
            En Mardanza conectamos con diversos públicos, instituciones y
            proyectos creadores. Ponemos a disposición nuestra experiencia y
            espacios a través de una oferta integral de servicios
            especializados:
          </p>
        </section>

        {/* ── 2.1 Presentaciones Artísticas ── */}
        <section className="mb-16 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-papel">
            <Image
              src="/images/gallery-13.webp"
              alt="Presentaciones Artísticas — elenco en escena"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="mb-3 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
              Presentaciones Artísticas
            </h2>
            <p className="text-base leading-relaxed text-tinta/70">
              Ofrecemos funciones y muestras de danza adaptables a diversos
              escenarios, festivales, eventos culturales y corporativos. Las
              coreografías u obras pueden ser parte de nuestro repertorio o
              creadas por encargo para la ocasión.
            </p>
          </div>
        </section>

        {/* ── 2.2 Asesorías y Mediaciones ── */}
        <section className="mb-16 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-papel md:order-2">
            <Image
              src="/images/gallery-05.webp"
              alt="Asesorías y Mediaciones — vínculo con la comunidad"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:order-1">
            <h2 className="mb-3 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
              Asesorías y Mediaciones
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-tinta/70">
              <div>
                <h3 className="font-semibold text-tinta">Asesorías</h3>
                <p className="mt-1">
                  Acompañamiento teórico, técnico y práctico para proyectos
                  artísticos, educativos o culturales. Para particulares,
                  instituciones o comunidades.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-tinta">Mediación Cultural</h3>
                <p className="mt-1">
                  Instancias de interacción (talleres, apreciación de
                  obras/procesos, visitas guiadas, experiencias de autocuidado)
                  diseñados para vincular las artes con la comunidad,
                  promoviendo experiencias significativas que favorezcan el
                  goce, la valoración y la formación de públicos. Dirigido a
                  instituciones o comunidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2.3 Arriendo de Salas ── */}
        <section className="mb-16 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-papel">
            <Image
              src="/images/gallery-17.webp"
              alt="Arriendo de Salas — espacio de ensayo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="mb-3 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
              Arriendo de Salas
            </h2>
            <p className="text-base leading-relaxed text-tinta/70">
              Salas equipadas y acondicionadas para:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SALAS_LISTA.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-tinta/70"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-menta" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-tinta/70">
              Un entorno idóneo para el trabajo corporal, creativo y protección
              del bienestar integral.
            </p>
            <p className="mt-3 text-base leading-relaxed text-tinta/70">
              Consulta con nosotros para conocer nuestros valores por hora o
              jornadas completas, así como las opciones de convenios para
              proyectos de mediana o larga duración. Escríbenos para evaluar la
              disponibilidad y adaptar la propuesta a las necesidades de tu
              proyecto.
            </p>
          </div>
        </section>


        {/* ── 2.4 Creación de Obras y Coreografías ── */}
        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl uppercase tracking-wide text-tinta md:text-3xl">
            Creación de Obras y Coreografías
          </h2>
          <p className="mb-8 text-base leading-relaxed text-tinta/70">
            Desarrollo y montaje coreográfico a medida para espectáculos,
            proyectos audiovisuales, producciones escénicas o agrupaciones.
            Dentro de nuestras creaciones y repertorio destacan:
          </p>

          <div className="space-y-12">
            {OBRAS.map((obra, i) => {
              const invertido = i % 2 === 1;
              return (
                <article
                  key={obra.titulo}
                  className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-papel ${
                      invertido ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={obra.foto}
                      alt={obra.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={invertido ? "md:order-1" : ""}>
                    <h3 className="mb-3 font-display text-xl uppercase tracking-wide text-tinta md:text-2xl">
                      {obra.titulo}
                    </h3>
                    <p className="text-base leading-relaxed text-tinta/70">
                      {obra.texto}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="rounded-lg border border-arena/30 bg-papel p-8 text-center">
          <h2 className="font-display text-2xl uppercase tracking-wide text-tinta">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-tinta/70">
            Conversemos sobre cómo podemos acompañar tu iniciativa artística,
            educativa o cultural.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full bg-tinta px-6 py-3 text-sm font-medium text-papel transition-transform hover:scale-105"
            >
              Ir a Contacto
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
