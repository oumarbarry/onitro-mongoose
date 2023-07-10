import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  srcDir: 'src',
  noPublicDir: true,
  errorHandler: '~/errorHandler',

  routeRules: {
    '/api/**': { cors: true },
  },

  imports: {
    dirs: [
      './src/composables/**',
      './src/models/**',
    ],
    presets: [
      { from: 'zod', imports: ['z'] },
    ],
  },

  plugins: ['~/plugins/mongoose.ts'],

  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
})
