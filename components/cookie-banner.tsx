"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const eleccion = localStorage.getItem("mardanza-cookies");
    if (!eleccion) setVisible(true);
  }, []);

  const elegir = (valor: "todas" | "esenciales") => {
    localStorage.setItem("mardanza-cookies", valor);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-between gap-3 bg-tinta px-6 py-4 text-sm text-papel md:flex-row">
      <p className="text-center md:text-left">
        Usamos cookies esenciales para el funcionamiento del sitio. No usamos cookies de analítica o marketing por ahora.{" "}
        <Link href="/politica-de-privacidad" className="underline hover:text-menta">
          Más información
        </Link>
      </p>
      <div className="flex flex-none gap-2">
        <button
          onClick={() => elegir("esenciales")}
          className="rounded-full border border-papel/40 px-4 py-2 font-medium text-papel"
        >
          Solo esenciales
        </button>
        <button
          onClick={() => elegir("todas")}
          className="rounded-full bg-menta px-5 py-2 font-medium text-tinta"
        >
          Aceptar todas
        </button>
      </div>
    </div>
  );
}
