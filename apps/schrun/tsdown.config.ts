import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    daemon: "src/run/daemon.ts",
  },
});
