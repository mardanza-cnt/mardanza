import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <div
        className="bg-cover bg-center px-6 pb-0 pt-16 md:pt-24"
        style={{ backgroundImage: "url('/images/hero-photo.jpg')" }}
      >
        <h1 className="font-display text-4xl tracking-wide text-tinta md:text-6xl">
          MARDANZA
        </h1>
        <p className="mt-2 pb-10 text-sm tracking-[0.2em] text-tinta md:text-base">
          TERRITORIO EN MOVIMIENTO
        </p>
      </div>
      <div className="bg-arena px-6 pb-14 pt-8">
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
