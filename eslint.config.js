import antfu from "@antfu/eslint-config"

export default await antfu({
  stylistic: { quotes: "double" },
  rules: {
    "no-console": 0,
  },
})
