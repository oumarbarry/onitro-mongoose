import { Schema, model } from "mongoose"

interface IMovie {
  title: string
  description?: string
}

const movieSchema = new Schema<IMovie>({
  title: { type: "string", required: true },
  description: "string",
})

export const Movie = model<IMovie>("Movie", movieSchema)
