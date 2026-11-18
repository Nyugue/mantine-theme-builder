import { generateColors } from "@mantine/colors-generator";
import {
	Accordion,
	Badge,
	Button,
	Card,
	ColorInput,
	Group,
	Input,
	type MantineColorShade,
	type MantineThemeOverride,
	Radio,
	SegmentedControl,
	Splitter,
	Stack,
	Switch,
	Text,
	TextInput,
	Title,
	useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { extendBaseTheme } from "./extendBaseTheme";
import { ThemeOverride } from "./preview/ThemeOverride";

const initialValues = {
	cornerRadius: "md",
	density: "default",
	primary: "#fc8a08",
	primaryShade: "7",
	neutral: "#575757",
};

type BuilderValues = typeof initialValues;

function valuesToTheme(values: BuilderValues): MantineThemeOverride {
	return extendBaseTheme({
		primaryColor: "primary",
		primaryShade: Number(values.primaryShade) as MantineColorShade,
		colors: { primary: generateColors(values.primary) },
		defaultRadius: values.cornerRadius === "0" ? 0 : values.cornerRadius,
	});
}

const shades = Array.from({ length: 10 }, (_, index) => String(index));

export default function ThemeBuilder() {
	const { colorScheme } = useMantineColorScheme({ keepTransitions: true });

	const [themeOverride, setThemeOverride] = useState(() => valuesToTheme(initialValues));

	const form = useForm<BuilderValues>({
		mode: "uncontrolled",
		initialValues,
		onValuesChange: (values) => setThemeOverride(valuesToTheme(values)),
	});

	return (
		<Splitter
			h="calc(100dvh - var(--app-shell-header-height) - 2 * var(--mantine-spacing-md))"
			withHandle={false}
			lineSize={10}
		>
			<Splitter.Pane defaultSize={50} min={20}>
				<Card withBorder h="100%" p={0}>
					<form>
						<Accordion order={3} defaultValue="base" multiple={false}>
							<Accordion.Item value="base">
								<Accordion.Control>Base</Accordion.Control>
								<Accordion.Panel>
									<Stack>
										<Input.Wrapper label="Corner radius">
											<SegmentedControl
												key={form.key("cornerRadius")}
												{...form.getInputProps("cornerRadius")}
												data={["0", "xs", "sm", "md", "lg", "xl"]}
												fullWidth
												mt="xs"
											/>
										</Input.Wrapper>

										<Input.Wrapper label="Density">
											<SegmentedControl
												key={form.key("density")}
												{...form.getInputProps("density")}
												data={[
													{ value: "default", label: "Default" },
													{ value: "comfortable", label: "Comfortable" },
													{ value: "compact", label: "Compact" },
												]}
												fullWidth
												mt="xs"
											/>
										</Input.Wrapper>

										<ColorInput
											key={form.key("primary")}
											{...form.getInputProps("primary")}
											label="Primary"
											format="hex"
										/>

										<Input.Wrapper
											label="Primary shade"
											description="The shade of the primary colour used for buttons, links, etc."
										>
											<SegmentedControl
												key={form.key("primaryShade")}
												{...form.getInputProps("primaryShade")}
												data={shades}
												fullWidth
												mt="xs"
											/>
										</Input.Wrapper>

										<ColorInput
											key={form.key("neutral")}
											{...form.getInputProps("neutral")}
											label="Neutral"
											description="Affects text, cards and borders"
											format="hex"
										/>
									</Stack>
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item value="typography">
								<Accordion.Control>Typography</Accordion.Control>
								<Accordion.Panel></Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item value="extra">
								<Accordion.Control>Extra</Accordion.Control>
								<Accordion.Panel></Accordion.Panel>
							</Accordion.Item>
						</Accordion>
					</form>
				</Card>
			</Splitter.Pane>
			<Splitter.Pane defaultSize={50} min={20}>
				<ThemeOverride theme={themeOverride} colorScheme={colorScheme === "dark" ? "dark" : "light"}>
					<Card withBorder h="100%">
						<Group justify="space-between" align="center">
							<Title order={2}>Live preview</Title>

							<Group>
								<Badge>New</Badge>
								<Badge variant="light">Light</Badge>
								<Badge variant="outline">Outline</Badge>
							</Group>
						</Group>

						<Text c="dimmed">Dimmed text under a heading.</Text>

						<Card withBorder>
							<Stack>
								<Title order={4}>Sign in</Title>
								<TextInput label="Email" placeholder="you@example.com" />
								<Switch label="Remember me" defaultChecked />
								<Group grow>
									<Button>Continue</Button>
									<Button variant="default">Cancel</Button>
								</Group>
							</Stack>
						</Card>

						<Radio.Group defaultValue="weekly" label="Digest">
							<Stack>
								<Radio.Card value="weekly">
									<Group wrap="nowrap">
										<Radio.Indicator />
										<Text fw={600}>Weekly</Text>
									</Group>
								</Radio.Card>
								<Radio.Card value="daily">
									<Group wrap="nowrap">
										<Radio.Indicator />
										<Text fw={600}>Daily</Text>
									</Group>
								</Radio.Card>
							</Stack>
						</Radio.Group>
					</Card>
				</ThemeOverride>
			</Splitter.Pane>
		</Splitter>
	);
}
