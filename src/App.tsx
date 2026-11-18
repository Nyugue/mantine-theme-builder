import { AppShell, Group, Image, MantineProvider, Title } from "@mantine/core";
import ColorThemeSwitcher from "./ColorThemeSwitcher";
import ThemeBuilder from "./ThemeBuilder";

export default function App() {
	return (
		<MantineProvider>
			<AppShell padding="md" header={{ height: 60 }}>
				<AppShell.Header component={Group} px="md">
					<Group justify="space-between" w="100%">
						<Group>
							<Image src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" w={28} h={28} />
							<Title size="md">Mantine theme builder</Title>
						</Group>

						<ColorThemeSwitcher />
					</Group>
				</AppShell.Header>

				<AppShell.Main>
					<ThemeBuilder />
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}
