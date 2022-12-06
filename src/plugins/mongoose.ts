import { connect, set } from 'mongoose'

const config = useRuntimeConfig()

export default defineNitroPlugin(async () => {
  try {
    set('strictQuery', false)
    await connect(config.MONGODB_URI)
    console.log('DB connection established.')
  }
  catch (error) {
    console.log('DB connection failed.', error.message)
  }
})
