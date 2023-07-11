import { Schema, type SchemaDefinition, type SchemaOptions, model } from 'mongoose'

export function defineModel<T>(name: string, schema: SchemaDefinition, options?: SchemaOptions) {
  const newSchema = new Schema<T>({ ...schema }, { ...options })

  return model<T>(name, newSchema)
}
