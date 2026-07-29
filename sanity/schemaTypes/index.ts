import { type SchemaTypeDefinition } from 'sanity'
import actividad from './actividad'
import taller from './taller'
import colaborador from './colaborador'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [actividad, taller, colaborador],
}

