// Este archivo define el tipo de contenido "Actividad" en Sanity Studio.
// Se agrega al proyecto de Sanity Studio de Mardanza cuando se cree
// (ver README para los pasos de creación de cuenta).

import { defineField, defineType } from "sanity";

export default defineType({
  name: "actividad",
  title: "Actividad",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fecha",
      title: "Fecha",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hora",
      title: "Hora",
      type: "string",
      description: 'Ej: "18:30"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lugar",
      title: "Lugar",
      type: "string",
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
    }),
    defineField({
      name: "disciplina",
      title: "Disciplina",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Danza", value: "danza" },
          { title: "Teatro", value: "teatro" },
          { title: "Breakdance", value: "breakdance" },
          { title: "Circo", value: "circo" },
          { title: "Dojo", value: "dojo" },
          { title: "Telas", value: "telas" },
          { title: "Canto", value: "canto" },
          { title: "Batería", value: "bateria" },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      description: "Opcional — si no se sube, la tarjeta usa el color de la disciplina.",
    }),
  ],
});
