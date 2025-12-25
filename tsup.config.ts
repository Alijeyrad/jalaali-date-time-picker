import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	tsconfig: "./tsconfig.build.json",
	sourcemap: true,
	treeshake: true,
	clean: true,
	splitting: false,
	outDir: "dist",
	minify: true,
	target: "es2017",
	external: ["react", "react-dom", "next"],
	esbuildOptions(options) {
		options.jsx = "automatic"
	},
})
