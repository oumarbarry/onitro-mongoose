import { Schema, type SchemaDefinition, type SchemaOptions, model } from "mongoose"

interface DefineModel<T> {
  name: string
  schema: SchemaDefinition
  options?: SchemaOptions
  hooks?: (schema: Schema<T>) => void
}

export function defineModel<T>({ name, schema, options, hooks }: DefineModel<T>) {
  const newSchema = options ? new Schema<T>(schema, options as any) : new Schema<T>(schema)

  if (hooks)
    hooks(newSchema)

  return model<T>(name, newSchema)
}

// export const UserExample = defineModel<{ name: string, email: string, password: string }>({
//   name: "User",
//   schema: {
//     name: {
//       type: "string",
//       required: true,
//     },
//     email: {
//       type: "string",
//       required: true,
//       unique: false,
//     },
//     password: {
//       type: "string",
//       required: true,
//     },
//   },
//   hooks(schema) {
//     schema.pre("save", function (this, next) {
//       this.password = `hash.${this.password}.${Math.random()}`
//       next()
//     })
//   },
// })
