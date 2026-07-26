export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-12 md:px-12">
      <h1 className="mb-6 font-display text-2xl text-tinta">CONTACTO</h1>

      {/*
        TODO: el formulario todavía no envía correos de verdad.
        Falta conectar un servicio (ej. Resend) desde una API route
        una vez que tengamos el correo real de Mardanza.
      */}
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre"
          className="rounded-lg border border-arena bg-white px-3 py-2 text-sm"
        />
        <input
          type="email"
          placeholder="Correo"
          className="rounded-lg border border-arena bg-white px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Mensaje"
          rows={4}
          className="resize-none rounded-lg border border-arena bg-white px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-full bg-tinta py-2 text-sm font-medium text-papel"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-8 flex gap-6 border-t border-arena/40 pt-6 text-sm">
        {/* Reemplazar por los handles reales */}
        <a href="#" className="hover:text-menta">Instagram: @centromardanza</a>
        <a href="#" className="hover:text-menta">Facebook: Centro Mardanza</a>
      </div>
    </main>
  );
}
