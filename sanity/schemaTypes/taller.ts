import { defineField, defineType } from "sanity";

export default defineType({
  name: "taller",
  title: "Taller",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dia",
      title: "Día",
      type: "string",
      options: {
        list: [
          { title: "Lunes", value: "Lunes" },
          { title: "Martes", value: "Martes" },
          { title: "Miércoles", value: "Miércoles" },
          { title: "Jueves", value: "Jueves" },
          { title: "Viernes", value: "Viernes" },
          { title: "Sábado", value: "Sábado" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "horaInicio",
      title: "Hora de inicio",
      type: "string",
      description: 'Formato "HH:MM"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "horaFin",
      title: "Hora de fin",
      type: "string",
      description: 'Formato "HH:MM"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ubicacion",
      title: "Ubicación",
      type: "string",
      options: {
        list: [
          {
            title: "Centro Cultural Mardanza — Esmeralda #026, Cañete Centro",
            value: "mardanza",
          },
          {
            title: "Gimnasio Municipal Tucapel — Tucapel #043, Cañete Centro",
            value: "tucapel",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "disciplina",
      title: "Disciplina",
      type: "string",
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
      validation: (Rule) => Rule.required(),
    }),
  ],
});
