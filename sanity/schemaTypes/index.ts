import { type SchemaTypeDefinition } from 'sanity'
import actividad from './actividad'
import taller from './taller'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [actividad, taller],
}

