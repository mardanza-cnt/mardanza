"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Manifiesto() {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = textRef.current;
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
    <section ref={sectionRef} className="md:h-screen md:overflow-hidden">
      {/* ── Mobile: foto + texto separado ── */}
      <div className="md:hidden">
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="/images/manifesto.webp"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "70% center" }}
            priority
          />
        </div>
        <div
          ref={textRef}
          className="flex items-center justify-center bg-tinta px-6 py-16 opacity-0"
        >
          <h2 className="font-sans text-center text-3xl font-extralight tracking-[0.15em] text-white">
            Donde el mar
            <br />
            se vuelve arena
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
            className="object-cover"
            style={{ objectPosition: "70% center" }}
            priority
          />
        </div>

        {/* Texto centrado */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center px-6 opacity-0"
        >
          <h2 className="font-sans text-center text-5xl font-extralight tracking-[0.15em] text-white lg:text-6xl">
            Donde el mar
            <br />
            se vuelve arena
          </h2>
        </div>
      </div>
    </section>
  );
}
