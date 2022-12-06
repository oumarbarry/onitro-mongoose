import { z, useValidatedParams } from "h3-zod";

export default defineEventHandler(async (event) => {
  const { id } = await useValidatedParams(event, {
    id: z.string().min(24).max(24)
  })

  try {
    const movie = await Movie.findOne({ "_id": id })

    if (movie) {
      return {
        id: movie._id,
        title: movie.title,
        description: movie.description
      }
    } else {
      return createError({ statusCode: 404, statusMessage: "MOVIE NOT FOUND" })
    }

  } catch {
    return createError({ statusCode: 500, statusMessage: "SOMETHING WENT WRONG" })
  }
})
