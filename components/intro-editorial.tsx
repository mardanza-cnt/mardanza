"use client";

import { useEffect, useRef } from "react";

export default function IntroEditorial() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fadeUp");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-12 opacity-0">
      <h1 className="font-display text-3xl tracking-wide text-tinta md:text-4xl">
        Territorio en Movimiento
      </h1>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-tinta/70 md:text-lg">
        Es la manera en que entendemos la cultura: viva y en permanente
        construcción.
      </p>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-tinta/70 md:text-lg">
        Conoce la programación de muestras, clases especiales y eventos que se
        concentran en nuestro espacio. ¡Participa y sé parte de la cartelera de
        este mes!
      </p>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-tinta/70 md:text-lg">
        También puedes visitarnos o escribirnos para programar tu actividad.
      </p>
    </div>
  );

}
