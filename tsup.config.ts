import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	sourcemap: true,
	format: ["esm", "cjs"],
	outDir: "dist",
	external: ["react", "react-dom", "next", "lucide-react", "tailwindcss"],
	clean: true,
})
