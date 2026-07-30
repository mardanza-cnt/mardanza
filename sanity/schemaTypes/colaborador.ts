import { defineField, defineType } from "sanity";

export default defineType({
  name: "colaborador",
  title: "Colaborador",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción breve",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colorAsignado",
      title: "Color de la tarjeta",
      type: "string",
      options: {
        list: [
          { title: "Rojo teatral", value: "rojo" },
          { title: "Terracota", value: "terracota" },
          { title: "Mostaza", value: "mostaza" },
          { title: "Verde salvia", value: "salvia" },
          { title: "Azul logotipo", value: "azul" },
          { title: "Ciruela", value: "ciruela" },
        ],
      },
    }),
    defineField({
      name: "orden",
      title: "Orden de aparición",
      type: "number",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),
    defineField({
      name: "fotosActividad",
      title: "Fotos de actividades",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Orden manual",
      name: "ordenAsc",
      by: [{ field: "orden", direction: "asc" }],
    },
  ],
});
