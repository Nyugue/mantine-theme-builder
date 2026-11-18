import { createTheme, type MantineThemeOverride, mergeThemeOverrides } from "@mantine/core";

const baseTheme = createTheme({
	autoContrast: true,
	cursorType: "pointer",
	respectReducedMotion: true,
});

export function extendBaseTheme(override: MantineThemeOverride): MantineThemeOverride {
	return mergeThemeOverrides(baseTheme, override);
}
