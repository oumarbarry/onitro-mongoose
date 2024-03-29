const insertMovieSchema = z.object({
  title: z.string().max(50),
  description: z.string().max(500).optional(),
})

export default defineEventHandler(async (event) => {
  const { title, description } = await readValidatedBody(event, insertMovieSchema.parse)

  try {
    const newMovie = await Movie.create({ title, description })

    setResponseStatus(event, 201, "Created successfully.")

    return {
      id: newMovie._id,
      title: newMovie.title,
      description: newMovie?.description,
    }
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})
