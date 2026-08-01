"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Manifiesto() {
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const desktopTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mobileTextRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fadeUp");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = desktopTextRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fadeUp");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="md:h-screen md:overflow-hidden">
      {/* ── Mobile: foto + texto separado ── */}
      <div className="md:hidden">
        <div className="relative h-[40vh] w-full overflow-hidden">
          <Image
            src="/images/manifesto.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "70% center" }}
            priority
          />
        </div>
        <div
          ref={mobileTextRef}
          className="flex items-center justify-center bg-tinta px-6 py-16 opacity-0"
        >
          <h2 className="font-sans text-center text-3xl font-extralight tracking-[0.15em] text-white">
            Todos los cuerpos
            <br />
            bailan
          </h2>

        </div>
      </div>

      {/* ── Desktop: foto full-bleed con texto superpuesto + hover zoom ── */}
      <div className="group relative hidden h-screen w-full overflow-hidden md:block">
        {/* Imagen con hover zoom */}
        <div className="absolute inset-0 transition-transform duration-800 ease-out will-change-transform group-hover:scale-[1.03]">
          <Image
            src="/images/manifesto.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "70% center" }}
            priority
          />
        </div>

        {/* Texto centrado, ligeramente desplazado hacia abajo */}
        <div
          ref={desktopTextRef}
          className="absolute inset-0 flex items-center justify-center px-6 opacity-0"
        >
          <div className="translate-y-12">
            <h2 className="font-sans text-center text-5xl font-extralight tracking-[0.15em] text-white lg:text-6xl">
              Todos los cuerpos
              <br />
              bailan
            </h2>

          </div>
        </div>
      </div>
    </section>
  );
}
