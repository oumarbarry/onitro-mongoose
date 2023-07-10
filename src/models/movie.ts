import { Schema, model } from 'mongoose'

interface IMovie {
  title: string
  description?: string
}

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: String,
})

export const Movie = model<IMovie>('Movie', movieSchema)
