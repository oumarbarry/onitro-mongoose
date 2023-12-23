export default defineNitroConfig({
  srcDir: "src",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    dirs: ["./src/models/**"],
    imports: [
      { from: "zod", name: "z" },
    ],
  },

  runtimeConfig: {
    mongodbUri: "",
  },
})
