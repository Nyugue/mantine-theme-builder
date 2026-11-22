import { MantineProvider } from "@mantine/core";
import ThemeBuilder from "./ThemeBuilder";

export default function App() {
	return (
		<MantineProvider defaultColorScheme="auto">
			<ThemeBuilder />
		</MantineProvider>
	);
}
