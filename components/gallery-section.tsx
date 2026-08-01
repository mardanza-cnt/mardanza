"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "/images/gallery-19.webp", alt: "María Ángela en escena" },
  { src: "/images/gallery-01.webp", alt: "Trío rojo" },

  { src: "/images/gallery-04.webp", alt: "Banda en escenario" },
  { src: "/images/gallery-10.webp", alt: "Teatro B/N, cuellos isabelinos" },
  { src: "/images/gallery-06.webp", alt: "Dúo en el piso" },
  { src: "/images/gallery-03.webp", alt: "Breakdance B/N" },
  { src: "/images/gallery-12.webp", alt: "Público B/N" },
  { src: "/images/gallery-09.webp", alt: "Concierto, díptico rojo" },
  { src: "/images/gallery-02.webp", alt: "Retrato B/N mujer" },
  { src: "/images/gallery-11.webp", alt: "Dúo piso, luz cálida" },
  { src: "/images/gallery-07.webp", alt: "Díptico teatro, cruz" },
  { src: "/images/gallery-05.webp", alt: "Niños Academia de Música" },
  { src: "/images/gallery-13.webp", alt: "Elenco, telón rojo" },
  { src: "/images/gallery-14.webp", alt: "Elenco completo" },
  { src: "/images/gallery-15.webp", alt: "Dúo danza" },
  { src: "/images/gallery-16.webp", alt: "Músicos en vivo" },
  { src: "/images/gallery-17.webp", alt: "Ensayo teatro" },
  { src: "/images/gallery-18.webp", alt: "Compañía reunida" },
  { src: "/images/gallery-08.webp", alt: "Silueta en salto" },
  { src: "/images/gallery-01.webp", alt: "Trío rojo" }, // cierra el loop
];

const ALL_PHOTOS = [...PHOTOS, ...PHOTOS];

const PANEL_WIDTH = 420;
const GAP = 24;
const ITEM_WIDTH = PANEL_WIDTH + GAP; // 444
const HALF_SET = PHOTOS.length; // 19
const PHOTO_HALF = HALF_SET * ITEM_WIDTH; // 8436
const PHOTO_SPEED = 0.42; // px per frame (~40% faster)

export default function GallerySection() {
  const photoTrackRef = useRef<HTMLDivElement>(null);
  const photoPosRef = useRef(0);
  const rafRef = useRef<number>(0);
  const hoveringRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // JS-driven marquee loop
  const tick = useCallback(() => {
    if (!hoveringRef.current) {
      photoPosRef.current -= PHOTO_SPEED;
      if (photoPosRef.current <= -PHOTO_HALF) {
        photoPosRef.current += PHOTO_HALF;
      }
      if (photoTrackRef.current) {
        photoTrackRef.current.style.transform = `translateX(${photoPosRef.current}px)`;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion, tick]);

  // ── Reduced motion: grilla estática ──
  if (reducedMotion) {
    return (
      <section className="bg-tinta px-6 py-16 md:px-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.slice(0, -1).map((photo, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-tinta py-16">
      {/* Photo marquee */}
      <div
        ref={photoTrackRef}
        className="flex select-none"
        style={{ gap: GAP, width: "max-content", willChange: "transform" }}
        onMouseEnter={() => { hoveringRef.current = true; }}
        onMouseLeave={() => { hoveringRef.current = false; }}
      >
        {ALL_PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: PANEL_WIDTH, height: "65vh" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={`${PANEL_WIDTH}px`}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
