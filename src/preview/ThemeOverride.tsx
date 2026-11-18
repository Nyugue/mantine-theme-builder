import { Box, MantineProvider, type MantineThemeOverride, MantineThemeProvider } from "@mantine/core";
import { type ReactNode, useId, useMemo, useState } from "react";
import classes from "./ThemeOverride.module.css";

interface ThemeOverrideProps {
	theme: MantineThemeOverride;
	colorScheme: "light" | "dark";
	children: ReactNode;
}

export function ThemeOverride({ theme, colorScheme, children }: ThemeOverrideProps) {
	const id = useId();
	const [element, setElement] = useState<HTMLDivElement | null>(null);

	const portalTheme = useMemo(
		() => ({ components: { Portal: { defaultProps: { target: element ?? undefined } } } }),
		[element],
	);

	return (
		<Box ref={setElement} data-preview={id} className={classes.root} p={0}>
			{element && (
				<MantineProvider
					theme={theme}
					forceColorScheme={colorScheme}
					cssVariablesSelector={`[data-preview="${id}"]`}
					getRootElement={() => element}
					deduplicateCssVariables={false}
					withGlobalClasses={false}
				>
					<MantineThemeProvider theme={portalTheme}>{children}</MantineThemeProvider>
				</MantineProvider>
			)}
		</Box>
	);
}
