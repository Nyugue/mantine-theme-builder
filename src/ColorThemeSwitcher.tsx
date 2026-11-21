import { ActionIcon, Group, Select, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { type MouseEvent, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { TbMoonFilled, TbSun } from "react-icons/tb";
import "./color-scheme-transitions.css";

const COLOR_SCHEME_GIFS: Record<string, string | undefined> = {
	Car: "https://media.tenor.com/_nR-1FLTOAwAAAAj/pixel-cat.gif",
	Blob: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGR6NzltaGl0M2E0M2d1b3gwdTNtajVzbnh3ZnF1eW1lejJqNGhyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mNEXQ5SwYOTdVJX2Nw/giphy.gif",
	Cube: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHN0YXR1YnMxbDBybmNqYWdzYWdyb2R2c2htYnpwZzJhamh5OTA5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/phaXOkDeLfoUWCOAMc/giphy.gif",
	Rick: "https://media.tenor.com/jKGpnCkOgm8AAAAi/discord-invisible-rickroll.gif",
};

const COLOR_SCHEME_TRANSITIONS = [
	{
		group: "Effects",
		items: [
			{ value: "curtain", label: "Curtain" },
			{ value: "circle", label: "Circle" },
			{ value: "fade", label: "Fade" },
			{ value: "none", label: "None" },
		],
	},
	{ group: "GIFs", items: Object.keys(COLOR_SCHEME_GIFS) },
];

export default function ColorThemeSwitcher() {
	const { setColorScheme } = useMantineColorScheme();

	const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: false });

	const [transition, setTransition] = useLocalStorage({
		key: "color-scheme-transition",
		defaultValue: "curtain",
		getInitialValueInEffect: false,
	});

	const gif = COLOR_SCHEME_GIFS[transition];
	const gifImage = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (!gif) return;
		const image = new Image();
		image.src = gif;
		gifImage.current = image;
	}, [gif]);

	const toggle = (event: MouseEvent<HTMLButtonElement>) => {
		const next = colorScheme === "dark" ? "light" : "dark";

		if (
			transition === "none" ||
			!("startViewTransition" in document) ||
			matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			setColorScheme(next);
			return;
		}

		const root = document.documentElement;
		const bounds = event.currentTarget.getBoundingClientRect();

		root.dataset.colorSchemeTransition = gif ? "gif" : transition;

		root.style.setProperty("--color-scheme-transition-x", `${bounds.x + bounds.width / 2}px`);
		root.style.setProperty("--color-scheme-transition-y", `${bounds.y + bounds.height / 2}px`);

		if (gif) {
			const image = gifImage.current;
			const ratio = image?.naturalHeight ? image.naturalWidth / image.naturalHeight : 1;
			const width = Math.min(window.innerWidth, window.innerHeight * ratio);

			root.style.setProperty("--color-scheme-transition-mask", `url("${gif}")`);
			root.style.setProperty("--color-scheme-transition-mask-width", `${width}px`);
			root.style.setProperty("--color-scheme-transition-mask-height", `${width / ratio}px`);
		}

		document.startViewTransition(() => flushSync(() => setColorScheme(next)));
	};

	return (
		<Group gap="xs">
			<Select
				aria-label="Colour scheme transition"
				size="xs"
				w={140}
				data={COLOR_SCHEME_TRANSITIONS}
				value={transition}
				onChange={(value) => value && setTransition(value)}
				allowDeselect={false}
				maxDropdownHeight={400}
			/>

			<ActionIcon variant="transparent" size="xl" aria-label="Toggle colour scheme" onClick={toggle}>
				{colorScheme === "light" ? <TbSun /> : <TbMoonFilled />}
			</ActionIcon>
		</Group>
	);
}
