/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  proseWrap: "preserve",
  embeddedLanguageFormatting: "auto",
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.astro"],
      options: { parser: "astro" },
    },
    {
      files: ["*.mdx"],
      options: { parser: "mdx" },
    },
  ],
};
