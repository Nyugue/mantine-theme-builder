import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";
import { TbMoonFilled, TbSun } from "react-icons/tb";

export default function ColorThemeSwitcher() {
	const systemScheme = useColorScheme("light", { getInitialValueInEffect: false });

	const [scheme, setScheme] = useLocalStorage<"dark" | "light">({
		key: "scheme",
		defaultValue: systemScheme,
	});

	const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });

	useEffect(() => setColorScheme(scheme), [setColorScheme, scheme]);

	return (
		<ActionIcon
			variant="transparent"
			size="xl"
			style={{ cursor: "pointer" }}
			onClick={() => setScheme(scheme === "dark" ? "light" : "dark")}
		>
			{scheme === "light" ? <TbSun /> : <TbMoonFilled />}
		</ActionIcon>
	);
}
