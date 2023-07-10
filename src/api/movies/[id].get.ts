import { useValidatedParams } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const { id } = await useValidatedParams(event, { id: z.string().length(24) })

  const movie = await Movie.findById(id)

  if (!movie) throw NotFound('Movie not found')

  return {
    id: movie._id,
    title: movie.title,
    description: movie.description,
  }
})
