import prettier from "eslint-plugin-prettier";

export default [
  eslintConfigNext,
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
