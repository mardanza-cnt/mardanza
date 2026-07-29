import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-center">
      {/* ── Foto con zoom lento + grano + logo superpuesto ── */}
      <div className="relative h-[70vh] min-h-[400px] w-full overflow-hidden md:h-[100vh] md:min-h-[600px]">
        {/* Imagen de fondo con zoom */}
        <div className="animate-heroZoom absolute inset-0 h-full w-full">

          <Image
            src="/images/hero-mardanza.webp"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "50% 78%" }}
            priority
          />

        </div>

        {/* Degradado oscuro detrás del logo para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-tinta/50 via-tinta/20 to-tinta/50" />

        {/* Capa de grano cinematográfico */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0 0.05 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Logo superpuesto centrado sobre la foto */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="animate-fadeIn">
            <Image
              src="/logo-white.png"
              alt="Mardanza — Territorio en movimiento"
              width={450}
              height={119}
              priority
              className="h-auto w-[70vw] max-w-[450px] md:w-[50vw] md:max-w-[600px]"
            />
          </div>
        </div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="bg-arena px-6 pb-6 pt-5">
        <p className="font-display text-sm text-papel md:text-base">
          ACTIVIDADES DEL MES
        </p>
        <Link
          href="/actividades"
          className="mt-4 inline-block rounded-full bg-tinta px-6 py-2 text-sm font-medium text-papel"
        >
          Ver el mes completo
        </Link>
      </div>
    </section>
  );
}
