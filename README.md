# Mardanza — sitio web

Esqueleto del sitio: Next.js 15 (App Router) + Tailwind CSS v4 + Sanity (headless CMS).

## Estado actual

- 4 páginas: inicio, actividades (con filtro por disciplina), quiénes somos, contacto.
- Sistema de color/tipografía de marca ya montado (`app/globals.css`): arena, cielo, menta,
  tinta, papel — display Anton + body Work Sans.
- El componente `ActivityCard` es el elemento firma: tarjeta diagonal (fecha oscura +
  panel de color), con foto de fondo automática si la actividad trae imagen.
- Sin Sanity conectado todavía, el sitio muestra 2 actividades de ejemplo
  (`lib/data.ts`) para poder ver el diseño funcionando.
- Esquema de contenido "Actividad" ya escrito en `sanity/schemas/actividad.ts`,
  listo para pegar en el Sanity Studio del proyecto de Mardanza cuando se cree.

## Pendiente de contenido real (lo que envía Mardanza)

- [ ] Historia / perfil real → reemplazar el texto de ejemplo en `app/quienes-somos/page.tsx`
- [ ] Horarios y actividades → cargar en Sanity una vez conectado
- [ ] Imágenes → hero, galería, y opcionalmente fondo de las tarjetas
- [ ] Paleta de colores / logo oficial → si existe un manual de marca, ajustar
      los valores hex en `app/globals.css`
- [ ] Usuarios reales de Instagram/Facebook → `components/footer.tsx` y
      `app/contacto/page.tsx`
- [ ] Formulario de contacto: hoy es solo visual, falta conectar un servicio
      de envío de correos (ej. Resend) vía una API route

## Pasos para crear las cuentas con el correo de Mardanza

Todo bajo el correo de Mardanza, no el de ClauNet — para que la titularidad
quede en ellos:

1. **GitHub** — crear cuenta, luego crear el repositorio (o transferir este proyecto ahí).
2. **Vercel** — crear cuenta con el mismo correo, conectar el repo de GitHub,
   importar el proyecto (detecta Next.js automáticamente).
3. **Sanity** — crear proyecto en sanity.io con el correo de Mardanza, copiar
   el `projectId` a `NEXT_PUBLIC_SANITY_PROJECT_ID` en las variables de
   entorno de Vercel, y pegar el schema de `sanity/schemas/actividad.ts` en
   el Studio.
4. **Cloudflare** (si van a tener dominio propio) — agregar el dominio,
   apuntar el DNS a Vercel.

Tú quedas agregado como colaborador en cada plataforma.

## Desarrollo local

```bash
npm install
npm run dev
```

## Nota técnica

`next/font/google` (Anton, Work Sans) se descarga en tiempo de build. Esto
funciona sin problema en Vercel; en este entorno de trabajo puntual no había
salida de red hacia Google Fonts, así que se verificó el layout temporalmente
con una fuente del sistema y luego se restauró la versión real — no requiere
ninguna acción de tu parte.
