import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-arena/40 px-6 py-8 text-sm text-tinta/70 md:px-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p>Mardanza — Territorio en movimiento. Cañete, Chile.</p>
          <p className="mt-1 text-xs text-tinta/50">
            <Link href="/politica-de-privacidad" className="underline hover:text-menta">
              Política de privacidad
            </Link>
            {" · "}
            Desarrollado por{" "}
            <a
              href="https://claunet.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-menta"
            >
              ClauNet
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/mardanza_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tinta/70 transition-colors hover:text-tinta"
            aria-label="Instagram @mardanza_"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://web.facebook.com/centromardanza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tinta/70 transition-colors hover:text-tinta"
            aria-label="Facebook Centro Mardanza"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
