import Image from "next/image";

/**
 * Logo original "Escuela del Mar Danza" — detalle de archivo/nostalgia.
 * Contenedor tipo ola con fondo azul-verdoso sutil y ripple al hover (solo desktop).
 */
export default function LogoOriginal() {
  return (
    <figure className="group relative mx-auto w-[280px] md:float-right md:ml-8 md:mb-4">
      {/* Contenedor tipo ola */}
      <div className="relative overflow-hidden rounded-t-2xl bg-[#e8f0ee]">
        {/* Logo */}
        <div className="relative z-10 px-8 pt-8 pb-12">
          <Image
            src="/images/logo-original-transparente.png"
            alt="Escuela del Mar Danza — logo original"
            width={280}
            height={280}
            className="h-auto w-full"
          />
        </div>

        {/* Ripple al hover (solo desktop) */}
        <span className="ripple hidden md:block" aria-hidden="true" />
        <span className="ripple ripple-delay hidden md:block" aria-hidden="true" />

        {/* Ola en el borde inferior */}
        <svg
          className="absolute bottom-0 left-0 z-20 h-6 w-full text-papel"
          viewBox="0 0 280 24"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 14 Q 35 5 70 14 T 140 14 T 210 14 T 280 14 V 24 H 0 Z" />
        </svg>
      </div>
    </figure>
  );
}
