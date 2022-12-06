import { z, useValidatedBody } from "h3-zod"

export default defineEventHandler(async (event) => {
  const { title, description } = await useValidatedBody(event, z.object({
    title: z.string(),
    description: z.string().optional()
  }))

  try {
    const newMovie = await Movie.create({ title, description })

    return {
      id: newMovie._id,
      title: newMovie.title,
      description: newMovie.description
    }

  } catch {
    return createError({ statusCode: 500, statusMessage: "SOMETHING WENT WRONG" })
  }
})
