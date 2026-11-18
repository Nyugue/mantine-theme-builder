import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	// Served from https://<user>.github.io/mantine-theme-builder/
	base: "/mantine-theme-builder/",
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
