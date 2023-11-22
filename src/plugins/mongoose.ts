import { connect } from "mongoose"

export default defineNitroPlugin(() => {
  try {
    connect(useRuntimeConfig().mongodbUri)
    console.info("DB connection established.")
  }
  catch { console.info("DB connection failed.") }
})
