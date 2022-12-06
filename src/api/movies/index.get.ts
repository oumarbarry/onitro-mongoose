export default defineEventHandler(async () => {
  try {
    const movies = await Movie.find()

    return movies.map(movie => ({
      id: movie._id,
      title: movie.title,
      description: movie.description
    }))

  } catch {
    return createError({ statusCode: 500, statusMessage: "SOMETHING WENT WRONG" })
  }
})
