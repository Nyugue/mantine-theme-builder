import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { flushSync } from "react-dom";
import { TbMoonFilled, TbSun } from "react-icons/tb";
import "./color-scheme-curtain.css";

export default function ColorThemeSwitcher() {
	const { setColorScheme } = useMantineColorScheme();

	const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: false });

	const toggle = () => {
		const next = colorScheme === "dark" ? "light" : "dark";

		if (!("startViewTransition" in document) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setColorScheme(next);
			return;
		}

		document.documentElement.dataset.curtain = next;

		document.startViewTransition(() => flushSync(() => setColorScheme(next)));
	};

	return (
		<ActionIcon variant="transparent" size="xl" aria-label="Toggle colour scheme" onClick={toggle}>
			{colorScheme === "light" ? <TbSun /> : <TbMoonFilled />}
		</ActionIcon>
	);
}
