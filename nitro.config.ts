export default defineNitroConfig({
  srcDir: "src",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    dirs: ["./src/models/**"],
    presets: [
      { from: "zod", imports: ["z"] },
    ],
  },

  runtimeConfig: {
    mongodbUri: "",
  },
})
