import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <div
        className="bg-cover px-6 pb-0 pt-24 md:pt-36"
        style={{ backgroundImage: "url('/images/hero-photo.jpg')", backgroundPosition: "center 25%" }}
      >
        <h1 className="font-display text-4xl tracking-wide text-papel md:text-6xl">
          MARDANZA
        </h1>
        <p className="mt-2 pb-10 text-sm tracking-[0.2em] text-papel md:text-base">
          TERRITORIO EN MOVIMIENTO
        </p>
      </div>
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
