export default function Footer() {
  return (
    <footer className="mt-16 border-t border-arena/40 px-6 py-8 text-sm text-tinta/70 md:px-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p>Mardanza — Territorio en movimiento. Cañete, Chile.</p>
          <p className="mt-1 text-xs text-tinta/50">
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
        <div className="flex gap-4">
          <a href="https://www.instagram.com/mardanza_/" target="_blank" rel="noopener noreferrer" className="hover:text-menta">Instagram</a>
          <a href="https://web.facebook.com/centromardanza/" target="_blank" rel="noopener noreferrer" className="hover:text-menta">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
