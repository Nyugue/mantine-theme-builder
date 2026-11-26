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
	ColorInput,
	Combobox,
	type CSSVariablesResolver,
	colorsTuple,
	createTheme,
	DEFAULT_THEME,
	Divider,
	Fieldset,
	Group,
	HoverCard,
	Image,
	Input,
	Kbd,
	type MantineColorsTuple,
	type MantineThemeOverride,
	Menu,
	mergeThemeOverrides,
	Notification,
	Pagination,
	Paper,
	Pill,
	Popover,
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
	Tabs,
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
import { ScreensArea } from "./BackofficePreview";
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

const COLOR_PALETTE = [
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
	SLATE,
	GREY,
	ZINC,
	NEUTRAL,
	STONE,
];

function matchLightness(color: string, reference: string) {
	return chroma(color).set("oklch.l", chroma(reference).get("oklch.l")).hex();
}

function generatePalette(color: string, scale: MantineColorsTuple) {
	return colorsTuple(scale.map((shade) => matchLightness(color, shade)));
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

	const safeHue = Number.isNaN(hue) ? 0 : hue;

	const lightEnd = chroma.oklch(0.97, chromaValue * 0.15, safeHue);
	const lighter = chroma.scale([lightEnd, color]).mode("oklch");

	const darkEnd = chroma.oklch(Math.min(lightness * 0.65, 0.42), chromaValue * 0.75, safeHue);
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
		yellow: generateColorPalette(YELLOW),
		lime: generateColorPalette(LIME),
		green: generateColorPalette(GREEN),
		teal: generateColorPalette(TEAL),
		cyan: generateColorPalette(CYAN),
		blue: generateColorPalette(BLUE),
		indigo: generateColorPalette(INDIGO),
		violet: generateColorPalette(VIOLET),
		grape: generateColorPalette(PURPLE),
		pink: generateColorPalette(PINK),
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
	borderColor: string | undefined;
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
	borderColor: undefined,
};

const cssVariablesResolver: CSSVariablesResolver = ({ other }) => ({
	variables: {},
	light: {
		...(other.pageBackground && { "--mantine-color-body": other.pageBackground.light }),
		...(other.borderColor && { "--mantine-color-default-border": other.borderColor.light }),
	},
	dark: {
		...(other.pageBackground && { "--mantine-color-body": other.pageBackground.dark }),
		...(other.borderColor && { "--mantine-color-default-border": other.borderColor.dark }),
	},
});

const DEFAULT_BORDER = "var(--mantine-color-default-border)";
const DEFAULT_BORDER_SHADES = { "--mantine-color-gray-4": DEFAULT_BORDER, "--mantine-color-dark-4": DEFAULT_BORDER };

const borderColorTheme = createTheme({
	components: {
		Input: Input.extend({
			styles: (_theme, props) => ({
				wrapper:
					!props.error && !props.success && (props.variant ?? "default") === "default"
						? { "--input-bd": DEFAULT_BORDER }
						: {},
			}),
		}),

		Checkbox: Checkbox.extend({ styles: { input: DEFAULT_BORDER_SHADES } }),
		CheckboxIndicator: Checkbox.Indicator.extend({ styles: { indicator: DEFAULT_BORDER_SHADES } }),
		Radio: Radio.extend({ styles: { radio: DEFAULT_BORDER_SHADES } }),
		RadioIndicator: Radio.Indicator.extend({ styles: { indicator: DEFAULT_BORDER_SHADES } }),
		Pagination: Pagination.extend({ styles: { control: DEFAULT_BORDER_SHADES } }),
		Fieldset: Fieldset.extend({ styles: { root: { borderColor: DEFAULT_BORDER } } }),
		CheckboxCard: Checkbox.Card.extend({ styles: { card: { borderColor: DEFAULT_BORDER } } }),
		RadioCard: Radio.Card.extend({ styles: { card: { borderColor: DEFAULT_BORDER } } }),
		Notification: Notification.extend({ styles: { root: { borderColor: DEFAULT_BORDER } } }),
		Kbd: Kbd.extend({ styles: { root: { borderColor: DEFAULT_BORDER } } }),

		Divider: Divider.extend({ defaultProps: { color: DEFAULT_BORDER } }),
		Table: Table.extend({ defaultProps: { borderColor: DEFAULT_BORDER } }),

		Popover: Popover.extend({ styles: { dropdown: { "--popover-border-color": DEFAULT_BORDER } } }),
		Menu: Menu.extend({ styles: { dropdown: { "--popover-border-color": DEFAULT_BORDER } } }),
		HoverCard: HoverCard.extend({ styles: { dropdown: { "--popover-border-color": DEFAULT_BORDER } } }),
		Paper: Paper.extend({ styles: { root: { "--paper-border-color": DEFAULT_BORDER } } }),
		Card: Card.extend({ styles: { section: { "--border-color": DEFAULT_BORDER } } }),
		Accordion: Accordion.extend({ styles: { item: { "--item-border-color": DEFAULT_BORDER } } }),
		Tabs: Tabs.extend({ styles: { root: { "--tab-border-color": DEFAULT_BORDER } } }),
	},
});

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
			other: {
				...(values.pageBackground && {
					pageBackground: {
						light: values.pageBackground,
						dark: matchLightness(values.pageBackground, DEFAULT_THEME.colors.dark[7]),
					},
				}),
				...(values.borderColor && {
					borderColor: {
						light: values.borderColor,
						dark: values.borderColor, // matchLightness(values.borderColor, DEFAULT_THEME.colors.dark[4]),
					},
				}),
			},
			components: {
				Anchor: Anchor.extend({ defaultProps: { c: "accent", style: { textDecoration: "none" } } }),
				Button: Button.extend({ defaultProps: { style: { boxShadow: values.buttonShadow } } }),
				Card: Card.extend({ defaultProps: { shadow: values.cardShadow } }),
			},
		},
		values.density === "comfortable"
			? comfortableDensity
			: values.density === "compact"
				? compactDensity
				: defaultDensity,
		values.borderColor ? borderColorTheme : {},
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
		onValuesChange: (values) => {
			const areColorsValid =
				chroma.valid(values.primary) &&
				chroma.valid(values.neutral) &&
				[values.pageBackground, values.accentColor, values.borderColor].every((color) => !color || chroma.valid(color));

			if (areColorsValid) {
				setThemeOverride(valuesToTheme(values));
			}
		},
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

								<ColorInput
									key={form.key("primary")}
									{...form.getInputProps("primary")}
									label="Primary"
									format="hex"
									swatches={COLOR_PALETTE}
								/>

								<ColorInput
									key={form.key("neutral")}
									{...form.getInputProps("neutral")}
									label="Neutral"
									format="hex"
									swatches={COLOR_PALETTE}
								/>
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
							<ColorInput
								key={form.key("pageBackground")}
								{...form.getInputProps("pageBackground")}
								label="Page background"
								format="hex"
								swatches={COLOR_PALETTE}
							/>
							<ColorInput
								key={form.key("accentColor")}
								{...form.getInputProps("accentColor")}
								label="Accent"
								format="hex"
								swatches={COLOR_PALETTE}
							/>
							<ColorInput
								key={form.key("borderColor")}
								{...form.getInputProps("borderColor")}
								label="Border color"
								format="hex"
								swatches={COLOR_PALETTE}
							/>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			</AppShell.Navbar>

			<ThemeOverride theme={themeOverride} cssVariablesResolver={cssVariablesResolver} colorScheme={colorScheme}>
				<AppShell.Main>
					<ScreensArea />
				</AppShell.Main>
			</ThemeOverride>
		</AppShell>
	);
}
