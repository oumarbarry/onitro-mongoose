export default defineEventHandler(async (event) => {
  const { id } = await getValidatedRouterParams(event, z.object({ id: z.string().length(24) }).parse)

  const movie = await Movie.findById(id)

  if (!movie)
    throw createError({ statusCode: 400, statusMessage: "Movie not found." })

  return {
    id: movie._id,
    title: movie.title,
    description: movie?.description,
  }
})
