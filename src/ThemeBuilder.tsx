import { generateColors } from "@mantine/colors-generator";
import {
	Accordion,
	ActionIcon,
	Badge,
	Button,
	Card,
	Checkbox,
	Chip,
	CloseButton,
	ColorPicker,
	Combobox,
	colorsTuple,
	createTheme,
	DEFAULT_THEME,
	Group,
	Input,
	Kbd,
	type MantineColorsTuple,
	type MantineThemeOverride,
	mergeThemeOverrides,
	Pagination,
	Pill,
	Radio,
	RangeSlider,
	Rating,
	rem,
	SegmentedControl,
	SimpleGrid,
	Slider,
	Stack,
	Stepper,
	Switch,
	Table,
	Text,
	TextInput,
	Title,
	Toggle,
	useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import chroma from "chroma-js";
import { useState } from "react";
import { ThemeOverride } from "./components/ThemeOverride";

const RED = "#b91c1c";
const ORANGE = "#c2410c";
const AMBER = "#b45309";
const YELLOW = "#a16207";
const LIME = "#4d7c0f";
const GREEN = "#15803d";
const EMERALD = "#047857";
const TEAL = "#0f766e";
const CYAN = "#0e7490";
const SKY = "#0369a1";
const BLUE = "#1d4ed8";
const INDIGO = "#4338ca";
const VIOLET = "#6d28d9";
const PURPLE = "#7e22ce";
const FUSCHIA = "#a21caf";
const PINK = "#be185d";
const ROSE = "#be123c";

const SLATE = "#334155";
const GREY = "#374151";
const ZINC = "#3f3f46";
const NEUTRAL = "#404040";
const STONE = "#44403c";

const PRIMARY_COLOR_POOL = [
	RED,
	ORANGE,
	AMBER,
	YELLOW,
	LIME,
	GREEN,
	EMERALD,
	TEAL,
	CYAN,
	SKY,
	BLUE,
	INDIGO,
	VIOLET,
	PURPLE,
	FUSCHIA,
	PINK,
	ROSE,
];

const NEUTRAL_COLOR_POOL = [SLATE, GREY, ZINC, NEUTRAL, STONE];

const PALETTES = [PRIMARY_COLOR_POOL, NEUTRAL_COLOR_POOL];

const NUMBER_OF_COLOR_SWATCHES = Math.max(...PALETTES.map((palette) => palette.length));

function generatePalette(color: string, scale: MantineColorsTuple) {
	return colorsTuple(scale.map((shade) => chroma(color).set("oklch.l", chroma(shade).get("oklch.l")).hex()));
}

const baseTheme = createTheme({
	autoContrast: true,
	cursorType: "pointer",
	respectReducedMotion: true,

	colors: {
		dark: generatePalette(GREY, DEFAULT_THEME.colors.dark),
		gray: generatePalette(GREY, DEFAULT_THEME.colors.gray),
		red: generateColors(RED),
		orange: generateColors(ORANGE),
		amber: generateColors(AMBER),
		yellow: generateColors(YELLOW),
		lime: generateColors(LIME),
		green: generateColors(GREEN),
		emerald: generateColors(EMERALD),
		teal: generateColors(TEAL),
		cyan: generateColors(CYAN),
		sky: generateColors(SKY),
		blue: generateColors(BLUE),
		indigo: generateColors(INDIGO),
		violet: generateColors(VIOLET),
		grape: generateColors(PURPLE),
		fuschia: generateColors(FUSCHIA),
		pink: generateColors(PINK),
		rose: generateColors(ROSE),
	},
});

const defaultDensity = createTheme({
	components: {
		Input: Input.extend({ defaultProps: { size: "md" } }),
		Combobox: Combobox.extend({ defaultProps: { size: "md" } }),
		Button: Button.extend({ defaultProps: { size: "md" } }),
		SegmentedControl: SegmentedControl.extend({ defaultProps: { size: "md" } }),
		ActionIcon: ActionIcon.extend({ defaultProps: { size: "input-md" } }),
		CloseButton: CloseButton.extend({ defaultProps: { size: "lg" } }),
		Checkbox: Checkbox.extend({ defaultProps: { size: "md" } }),
		CheckboxCard: Checkbox.Card.extend({ defaultProps: { p: "md" } }),
		CheckboxGroup: Checkbox.Group.extend({ defaultProps: { size: "md" } }),
		CheckboxIndicator: Checkbox.Indicator.extend({ defaultProps: { size: "md" } }),
		Radio: Radio.extend({ defaultProps: { size: "md" } }),
		RadioCard: Radio.Card.extend({ defaultProps: { p: "md" } }),
		RadioGroup: Radio.Group.extend({ defaultProps: { size: "md" } }),
		RadioIndicator: Radio.Indicator.extend({ defaultProps: { size: "md" } }),
		Switch: Switch.extend({ defaultProps: { size: "md" } }),
		SwitchGroup: Switch.Group.extend({ defaultProps: { size: "md" } }),
		Chip: Chip.extend({ defaultProps: { size: "md" } }),
		Pagination: Pagination.extend({ defaultProps: { size: "lg" } }),
		Toggle: Toggle.extend({ defaultProps: { size: "lg" } }),
		Slider: Slider.extend({ defaultProps: { size: "lg" } }),
		RangeSlider: RangeSlider.extend({ defaultProps: { size: "lg" } }),
		Rating: Rating.extend({ defaultProps: { size: "lg" } }),
		Stepper: Stepper.extend({ defaultProps: { size: "md" } }),
		Badge: Badge.extend({ defaultProps: { size: "md" } }),
		Pill: Pill.extend({ defaultProps: { size: "md" } }),
		Kbd: Kbd.extend({ defaultProps: { size: "sm" } }),
		Card: Card.extend({ defaultProps: { padding: "lg" } }),
		Table: Table.extend({ defaultProps: { verticalSpacing: "sm" } }),
		Stack: Stack.extend({ defaultProps: { gap: "md" } }),
		Group: Group.extend({ defaultProps: { gap: "md" } }),
	},
});

const comfortableDensity = createTheme({
	components: {
		Input: Input.extend({ defaultProps: { size: "sm" } }),
		Combobox: Combobox.extend({ defaultProps: { size: "sm" } }),
		Button: Button.extend({ defaultProps: { size: "sm" } }),
		SegmentedControl: SegmentedControl.extend({ defaultProps: { size: "sm" } }),
		ActionIcon: ActionIcon.extend({ defaultProps: { size: "md" } }),
		CloseButton: CloseButton.extend({ defaultProps: { size: "md" } }),
		Checkbox: Checkbox.extend({ defaultProps: { size: "sm" } }),
		CheckboxCard: Checkbox.Card.extend({ defaultProps: { p: "md" } }),
		CheckboxGroup: Checkbox.Group.extend({ defaultProps: { size: "sm" } }),
		CheckboxIndicator: Checkbox.Indicator.extend({ defaultProps: { size: "sm" } }),
		Radio: Radio.extend({ defaultProps: { size: "sm" } }),
		RadioCard: Radio.Card.extend({ defaultProps: { p: "md" } }),
		RadioGroup: Radio.Group.extend({ defaultProps: { size: "sm" } }),
		RadioIndicator: Radio.Indicator.extend({ defaultProps: { size: "sm" } }),
		Switch: Switch.extend({ defaultProps: { size: "sm" } }),
		SwitchGroup: Switch.Group.extend({ defaultProps: { size: "sm" } }),
		Chip: Chip.extend({ defaultProps: { size: "sm" } }),
		Pagination: Pagination.extend({ defaultProps: { size: "md" } }),
		Toggle: Toggle.extend({ defaultProps: { size: "md" } }),
		Slider: Slider.extend({ defaultProps: { size: "md" } }),
		RangeSlider: RangeSlider.extend({ defaultProps: { size: "md" } }),
		Rating: Rating.extend({ defaultProps: { size: "sm" } }),
		Stepper: Stepper.extend({ defaultProps: { size: "md" } }),
		Badge: Badge.extend({ defaultProps: { size: "md" } }),
		Pill: Pill.extend({ defaultProps: { size: "sm" } }),
		Kbd: Kbd.extend({ defaultProps: { size: "sm" } }),
		Card: Card.extend({ defaultProps: { padding: "md" } }),
		Table: Table.extend({ defaultProps: { verticalSpacing: "7px" } }),
		Stack: Stack.extend({ defaultProps: { gap: "md" } }),
		Group: Group.extend({ defaultProps: { gap: "md" } }),
	},
});

const compactDensity = createTheme({
	spacing: { xs: rem(4), sm: rem(8), md: rem(12), lg: rem(16), xl: rem(24) },
	components: {
		Input: Input.extend({ defaultProps: { size: "xs" } }),
		Combobox: Combobox.extend({ defaultProps: { size: "xs" } }),
		Button: Button.extend({ defaultProps: { size: "xs" } }),
		SegmentedControl: SegmentedControl.extend({ defaultProps: { size: "xs" } }),
		ActionIcon: ActionIcon.extend({ defaultProps: { size: "md" } }),
		CloseButton: CloseButton.extend({ defaultProps: { size: "md" } }),
		Checkbox: Checkbox.extend({ defaultProps: { size: "xs" } }),
		CheckboxCard: Checkbox.Card.extend({ defaultProps: { p: "md" } }),
		CheckboxGroup: Checkbox.Group.extend({ defaultProps: { size: "xs" } }),
		CheckboxIndicator: Checkbox.Indicator.extend({ defaultProps: { size: "xs" } }),
		Radio: Radio.extend({ defaultProps: { size: "xs" } }),
		RadioCard: Radio.Card.extend({ defaultProps: { p: "md" } }),
		RadioGroup: Radio.Group.extend({ defaultProps: { size: "xs" } }),
		RadioIndicator: Radio.Indicator.extend({ defaultProps: { size: "xs" } }),
		Switch: Switch.extend({ defaultProps: { size: "xs" } }),
		SwitchGroup: Switch.Group.extend({ defaultProps: { size: "xs" } }),
		Chip: Chip.extend({ defaultProps: { size: "xs" } }),
		Pagination: Pagination.extend({ defaultProps: { size: "sm" } }),
		Toggle: Toggle.extend({ defaultProps: { size: "sm" } }),
		Slider: Slider.extend({ defaultProps: { size: "sm" } }),
		RangeSlider: RangeSlider.extend({ defaultProps: { size: "sm" } }),
		Rating: Rating.extend({ defaultProps: { size: "sm" } }),
		Stepper: Stepper.extend({ defaultProps: { size: "sm" } }),
		Badge: Badge.extend({ defaultProps: { size: "sm" } }),
		Pill: Pill.extend({ defaultProps: { size: "xs" } }),
		Kbd: Kbd.extend({ defaultProps: { size: "xs" } }),
		Card: Card.extend({ defaultProps: { padding: "md" } }),
		Table: Table.extend({ defaultProps: { verticalSpacing: "xs" } }),
		Stack: Stack.extend({ defaultProps: { gap: "md" } }),
		Group: Group.extend({ defaultProps: { gap: "md" } }),
	},
});

const initialValues = {
	cornerRadius: "md",
	density: "default",
	primary: AMBER,
	neutral: NEUTRAL,
};

type BuilderValues = typeof initialValues;

function valuesToTheme(values: BuilderValues): MantineThemeOverride {
	return mergeThemeOverrides(
		baseTheme,
		{
			primaryColor: "primary",
			colors: {
				primary: generateColors(values.primary),
				gray: generatePalette(values.neutral, DEFAULT_THEME.colors.gray),
				dark: generatePalette(values.neutral, DEFAULT_THEME.colors.dark),
			},
			defaultRadius: values.cornerRadius === "0" ? 0 : values.cornerRadius,
		},
		values.density === "comfortable"
			? comfortableDensity
			: values.density === "compact"
				? compactDensity
				: defaultDensity,
	);
}

export default function ThemeBuilder() {
	const { colorScheme } = useMantineColorScheme({ keepTransitions: true });

	const [themeOverride, setThemeOverride] = useState(() => valuesToTheme(initialValues));

	const form = useForm<BuilderValues>({
		mode: "uncontrolled",
		initialValues,
		onValuesChange: (values) => setThemeOverride(valuesToTheme(values)),
	});

	return (
		<SimpleGrid cols={{ sm: 1, md: 2 }}>
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
										/>
									</Input.Wrapper>

									<Input.Wrapper label="Primary">
										<ColorPicker
											key={form.key("primary")}
											{...form.getInputProps("primary")}
											format="hex"
											swatches={PRIMARY_COLOR_POOL}
											swatchesPerRow={NUMBER_OF_COLOR_SWATCHES}
											fullWidth
										/>
									</Input.Wrapper>

									<Input.Wrapper label="Neutral">
										<ColorPicker
											key={form.key("neutral")}
											{...form.getInputProps("neutral")}
											format="hex"
											swatches={NEUTRAL_COLOR_POOL}
											swatchesPerRow={NUMBER_OF_COLOR_SWATCHES}
											fullWidth
										/>
									</Input.Wrapper>
								</Stack>
							</Accordion.Panel>
						</Accordion.Item>

						<Accordion.Item value="typography">
							<Accordion.Control>Typography</Accordion.Control>
							<Accordion.Panel></Accordion.Panel>
						</Accordion.Item>

						<Accordion.Item value="extra">
							<Accordion.Control>Extra</Accordion.Control>
							<Accordion.Panel>
								<TextInput key={form.key("cardShadow")} {...form.getInputProps("cardShadow")} label="Card shadow" />
								<TextInput
									key={form.key("buttonShadow")}
									{...form.getInputProps("buttonShadow")}
									label="Button shadow"
								/>
								<Input.Wrapper label="Page background">
									<ColorPicker
										key={form.key("pageBackground")}
										{...form.getInputProps("pageBackground")}
										format="hex"
										swatchesPerRow={NUMBER_OF_COLOR_SWATCHES}
										fullWidth
									/>
								</Input.Wrapper>
								<Input.Wrapper label="Links">
									<ColorPicker
										key={form.key("accentColor")}
										{...form.getInputProps("accentColor")}
										format="hex"
										swatchesPerRow={NUMBER_OF_COLOR_SWATCHES}
										fullWidth
									/>
								</Input.Wrapper>
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				</form>
			</Card>
			<ThemeOverride theme={themeOverride} colorScheme={colorScheme === "dark" ? "dark" : "light"}>
				<Card withBorder h="100%">
					<Stack>
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
					</Stack>
				</Card>
			</ThemeOverride>
		</SimpleGrid>
	);
}
