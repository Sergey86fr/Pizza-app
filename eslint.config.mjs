import { defineConfig } from "eslint/config";
import config from "eslint-config-standart";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  config,
]);