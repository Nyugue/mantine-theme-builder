import {
	Accordion,
	ActionIcon,
	Anchor,
	AppShell,
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
	Image,
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
	Slider,
	Stack,
	Stepper,
	Switch,
	Table,
	Text,
	Textarea,
	TextInput,
	Title,
	Toggle,
	useAppShellResize,
	useComputedColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import chroma from "chroma-js";
import { useState } from "react";
import ColorThemeSwitcher from "./ColorThemeSwitcher";
import { ThemeOverride } from "./components/ThemeOverride";
import { useStylesheets } from "./use-stylesheets";

const RED = "#dc2626";
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

const PRIMARY_SHADE = 7;

const REFERENCE_LIGHTNESS = DEFAULT_THEME.colors.blue.map((shade) => chroma(shade).get("oklch.l"));
const LIGHTER_POSITIONS = REFERENCE_LIGHTNESS.slice(0, PRIMARY_SHADE + 1).map(
	(lightness) => (REFERENCE_LIGHTNESS[0] - lightness) / (REFERENCE_LIGHTNESS[0] - REFERENCE_LIGHTNESS[PRIMARY_SHADE]),
);
const DARKER_POSITIONS = REFERENCE_LIGHTNESS.slice(PRIMARY_SHADE + 1).map(
	(lightness) =>
		(REFERENCE_LIGHTNESS[PRIMARY_SHADE] - lightness) / (REFERENCE_LIGHTNESS[PRIMARY_SHADE] - REFERENCE_LIGHTNESS[9]),
);

function generateColorPalette(color: string) {
	const [lightness, chromaValue, hue] = chroma(color).oklch();
	const safeHue = Number.isNaN(hue) ? 0 : hue; // greys have no hue
	const lightEnd = chroma.oklch(0.97, chromaValue * 0.15, safeHue);
	const darkEnd = chroma.oklch(Math.min(lightness * 0.65, 0.42), chromaValue * 0.75, safeHue);
	const lighter = chroma.scale([lightEnd, color]).mode("oklch");
	const darker = chroma.scale([color, darkEnd]).mode("oklch");
	return colorsTuple([
		...LIGHTER_POSITIONS.map((position) => lighter(position).hex()),
		...DARKER_POSITIONS.map((position) => darker(position).hex()),
	]);
}

const baseTheme = createTheme({
	autoContrast: true,
	cursorType: "pointer",
	respectReducedMotion: true,

	primaryShade: PRIMARY_SHADE,
	colors: {
		dark: generatePalette(GREY, DEFAULT_THEME.colors.dark),
		gray: generatePalette(GREY, DEFAULT_THEME.colors.gray),
		red: generateColorPalette(RED),
		orange: generateColorPalette(ORANGE),
		amber: generateColorPalette(AMBER),
		yellow: generateColorPalette(YELLOW),
		lime: generateColorPalette(LIME),
		green: generateColorPalette(GREEN),
		emerald: generateColorPalette(EMERALD),
		teal: generateColorPalette(TEAL),
		cyan: generateColorPalette(CYAN),
		sky: generateColorPalette(SKY),
		blue: generateColorPalette(BLUE),
		indigo: generateColorPalette(INDIGO),
		violet: generateColorPalette(VIOLET),
		grape: generateColorPalette(PURPLE),
		fuschia: generateColorPalette(FUSCHIA),
		pink: generateColorPalette(PINK),
		rose: generateColorPalette(ROSE),
	},

	components: {
		// Small trick to force the autocontrast because "the autoContrast feature works only if you use the color prop" (https://mantine.dev/core/badge/#auto-contrast)
		Badge: Badge.extend({ defaultProps: { color: "primary" } }),
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

interface BuilderValues {
	cornerRadius: string;
	density: string;
	primary: string;
	neutral: string;

	fontUrls: string;

	fontFamily: string;
	headingsFontFamily: string;
	monospaceFontFamily: string;

	pageBackground: string | undefined;
	accentColor: string | undefined;
	buttonShadow: string;
	cardShadow: string;
}

const initialValues: BuilderValues = {
	cornerRadius: "md",
	density: "default",
	primary: AMBER,
	neutral: NEUTRAL,
	fontUrls: "",
	fontFamily: "",
	headingsFontFamily: "",
	monospaceFontFamily: "",
	pageBackground: undefined,
	accentColor: undefined,
	buttonShadow: "",
	cardShadow: "",
};

function valuesToTheme(values: BuilderValues): MantineThemeOverride {
	const bodyFont = values.fontFamily.trim();
	const headingsFont = values.headingsFontFamily.trim() || bodyFont;
	const monospaceFont = values.monospaceFontFamily.trim();

	return mergeThemeOverrides(
		baseTheme,
		{
			primaryColor: "primary",
			colors: {
				primary: generateColorPalette(values.primary),
				gray: generatePalette(values.neutral, DEFAULT_THEME.colors.gray),
				dark: generatePalette(values.neutral, DEFAULT_THEME.colors.dark),
				...(values.accentColor && { accent: generateColorPalette(values.accentColor) }),
			},
			defaultRadius: values.cornerRadius === "0" ? 0 : values.cornerRadius,
			...(bodyFont && { fontFamily: `"${bodyFont}", system-ui, sans-serif` }),
			...(monospaceFont && { fontFamilyMonospace: `"${monospaceFont}", ui-monospace, monospace` }),
			...(headingsFont && { headings: { fontFamily: `"${headingsFont}", system-ui, sans-serif` } }),
			components: {
				Anchor: Anchor.extend({ defaultProps: { c: "accent", style: { textDecoration: "none" } } }),
				Card: Card.extend({ defaultProps: { shadow: values.cardShadow } }),
				Button: Button.extend({ defaultProps: { style: { boxShadow: values.buttonShadow } } }),
			},
		},
		values.density === "comfortable"
			? comfortableDensity
			: values.density === "compact"
				? compactDensity
				: defaultDensity,
	);
}

export default function ThemeBuilder() {
	const resize = useAppShellResize({
		navbar: { min: 250, max: 500 },
	});

	const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: false });

	const [openSection, setOpenSection] = useState<string | null>("base");

	const [themeOverride, setThemeOverride] = useState(() => valuesToTheme(initialValues));

	const form = useForm<BuilderValues>({
		mode: "uncontrolled",
		initialValues,
		onValuesChange: (values) => setThemeOverride(valuesToTheme(values)),
		validate: {
			fontUrls: (text: string) =>
				text
					.split("\n")
					.map((line) => line.trim())
					.filter(Boolean)
					.every((url) => URL.canParse(url))
					? null
					: "Put one stylesheet URL per line",
		},
		validateInputOnChange: ["fontUrls"],
	});

	const fontUrls = form.useWatchValue("fontUrls");

	useStylesheets(
		fontUrls
			.split("\n")
			.map((line) => line.trim())
			.filter(Boolean),
	);

	return (
		<AppShell padding="md" header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm" }} resize={resize}>
			<AppShell.Header component={Group} px="md">
				<Group justify="space-between" w="100%">
					<Group>
						<Image src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" w={28} h={28} />
						<Title size="md">Mantine theme builder</Title>
					</Group>

					<ColorThemeSwitcher />
				</Group>
			</AppShell.Header>

			<AppShell.Navbar>
				<Accordion
					order={3}
					value={openSection}
					onChange={setOpenSection}
					style={{ flex: 1, display: "flex", flexDirection: "column" }}
					disableCollapse
				>
					<Accordion.Item value="base" flex={openSection === "base" ? 1 : undefined}>
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
											{ value: "comfortable", label: "Comfy" },
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

					<Accordion.Item value="typography" flex={openSection === "typography" ? 1 : undefined}>
						<Accordion.Control>Typography</Accordion.Control>
						<Accordion.Panel>
							<Stack>
								<Textarea
									key={form.key("fontUrls")}
									{...form.getInputProps("fontUrls")}
									label="Font stylesheets"
									description={
										<Text c="dimmed" size="xs">
											Any provider :{" "}
											<Anchor href="https://fonts.google.com/" target="_blank">
												Google
											</Anchor>
											,{" "}
											<Anchor href="https://fonts.bunny.net/" target="_blank">
												Bunny Fonts
											</Anchor>
											,{" "}
											<Anchor href="https://www.fontshare.com/" target="_blank">
												Fontshare
											</Anchor>
										</Text>
									}
									autosize
									minRows={2}
								/>

								<TextInput
									key={form.key("fontFamily")}
									{...form.getInputProps("fontFamily")}
									label="Body font"
									placeholder="System font"
								/>
								<TextInput
									key={form.key("monospaceFontFamily")}
									{...form.getInputProps("monospaceFontFamily")}
									label="Monospace font"
									placeholder="System monospace"
								/>
								<TextInput
									key={form.key("headingsFontFamily")}
									{...form.getInputProps("headingsFontFamily")}
									label="Headings font"
									placeholder="Same as body"
								/>
							</Stack>
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="extra" flex={openSection === "extra" ? 1 : undefined}>
						<Accordion.Control>Extra</Accordion.Control>
						<Accordion.Panel>
							<Anchor href="https://getcssscan.com/css-box-shadow-examples" target="_blank" size="xs">
								Shadow examples
							</Anchor>
							<TextInput
								key={form.key("cardShadow")}
								{...form.getInputProps("cardShadow")}
								label="Card shadow"
								onPaste={(e) => {
									form.setValues({
										cardShadow: e.clipboardData.getData("text").replace("box-shadow:", "").trim().replaceAll(";", ""),
									});

									e.preventDefault();
								}}
							/>
							<TextInput
								key={form.key("buttonShadow")}
								{...form.getInputProps("buttonShadow")}
								label="Button shadow"
								onPaste={(e) => {
									form.setValues({
										buttonShadow: e.clipboardData.getData("text").replace("box-shadow:", "").trim().replaceAll(";", ""),
									});

									e.preventDefault();
								}}
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
							<Input.Wrapper label="Accent">
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
			</AppShell.Navbar>

			<ThemeOverride theme={themeOverride} colorScheme={colorScheme}>
				<AppShell.Main>
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

							<Text c="dimmed">
								Dimmed text under a <Anchor>heading.</Anchor>
							</Text>

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
				</AppShell.Main>
			</ThemeOverride>
		</AppShell>
	);
}
