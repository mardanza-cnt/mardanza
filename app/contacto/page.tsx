"use client";

import { useState, FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

type Status = "idle" | "enviando" | "enviado" | "error";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("enviando");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje, token }),
      });

      if (res.ok) {
        setStatus("enviado");
        setNombre("");
        setCorreo("");
        setMensaje("");
        setToken(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 pt-28 pb-12 md:px-12">
      <h1 className="mb-6 font-display text-2xl text-tinta">CONTACTO</h1>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="rounded-lg border border-arena bg-white px-3 py-2 text-sm"
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          className="rounded-lg border border-arena bg-white px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Mensaje"
          rows={4}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          className="resize-none rounded-lg border border-arena bg-white px-3 py-2 text-sm"
        />
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={setToken}
        />
        <button
          type="submit"
          disabled={status === "enviando" || !token}
          className="rounded-full bg-tinta py-2 text-sm font-medium text-papel disabled:opacity-50"
        >
          {status === "enviando" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </form>

      {status === "enviado" && (
        <p className="mt-4 text-sm text-menta">¡Mensaje enviado!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-500">
          Error al enviar. Intenta de nuevo más tarde.
        </p>
      )}

      <div className="mt-8 flex gap-6 border-t border-arena/40 pt-6 text-sm">
        <a href="https://www.instagram.com/mardanza_/" target="_blank" rel="noopener noreferrer" className="hover:text-menta">Instagram: @mardanza_</a>
        <a href="https://web.facebook.com/centromardanza/" target="_blank" rel="noopener noreferrer" className="hover:text-menta">Facebook: Centro Mardanza</a>
      </div>
    </main>
  );
}
