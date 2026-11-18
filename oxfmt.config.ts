import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [...ultracite.ignorePatterns, "CODE_OF_CONDUCT.md"],
});
