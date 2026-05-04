import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import nounsanitized from "eslint-plugin-no-unsanitized";
import html from "eslint-plugin-html"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}", "**/*.html"],
    plugins: { js, nounsanitized, html },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "nounsanitized/method": "error",
      "nounsanitized/property": "error",
      
      // DOMPurify:
      // "nounsanitized/method": ["error", { "escape": { "methods": ["DOMPurify.sanitize"] } }],
      // "nounsanitized/property": ["error", { "escape": { "methods": ["DOMPurify.sanitize"] } }],

    },
  },
]);
