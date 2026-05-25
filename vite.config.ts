import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import type { Plugin } from "vite";

// Provide the missing virtual module that @tanstack/start-server-core expects
// but @tanstack/start-plugin-core does not yet supply in this version.
function injectedHeadScriptsPlugin(): Plugin {
  const VIRTUAL_ID = "tanstack-start-injected-head-scripts:v";
  const RESOLVED_ID = "\0" + VIRTUAL_ID;
  return {
    name: "tanstack-start:injected-head-scripts-shim",
    enforce: "pre",
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id === RESOLVED_ID) {
        return "export const injectedHeadScripts = undefined;";
      }
    },
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    injectedHeadScriptsPlugin(),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true },
    }),
    react(),
  ],
});
