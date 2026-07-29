"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Manifiesto() {
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Foto full-bleed */}
      <Image
        src="/images/manifesto.webp"
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: "70% center" }}
        priority
      />

      {/* Texto centrado */}
      <div
        ref={ref}
        className="absolute inset-0 flex items-center justify-center px-6 opacity-0"
      >
        <h2 className="font-display text-center text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
          Donde el mar
          <br />
          se vuelve arena
        </h2>
      </div>
    </section>
  );
}
