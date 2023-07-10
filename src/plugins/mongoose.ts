import { connect } from 'mongoose'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()

  try {
    await connect(config.MONGODB_URI)
    console.log('DB connection established.')
  }
  catch (error) {
    console.log('DB connection failed.', error.message)
  }
})
