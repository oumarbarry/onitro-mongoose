import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  srcDir: 'src',
  noPublicDir: true,
  plugins: ['~/plugins/mongoose.ts'],
  imports: {
    dts: './.nitro/types/nitro.d.ts',
    dirs: [
      './src/models/**',
    ],
  },
  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
})
