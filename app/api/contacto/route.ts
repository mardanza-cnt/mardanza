import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nombre, correo, mensaje, token } = await req.json();

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  // Verificar token de Cloudflare Turnstile
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const verifyData = await verify.json();

  if (!verifyData.success) {
    return NextResponse.json({ error: "Verificación fallida" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Mardanza <onboarding@resend.dev>",
      to: "edmdanza@gmail.com",
      replyTo: correo,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}
