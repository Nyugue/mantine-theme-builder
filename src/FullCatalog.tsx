// Slop slop slop

import { AreaChart, BarChart } from "@mantine/charts";
import {
	Accordion,
	ActionBar,
	ActionIcon,
	Alert,
	Anchor,
	AppShell,
	Avatar,
	Badge,
	Box,
	type BoxProps,
	Breadcrumbs,
	Burger,
	type BurgerProps,
	Button,
	Card,
	type CardProps,
	Center,
	Checkbox,
	Chip,
	CloseButton,
	Code,
	Collapse,
	Combobox,
	type ComboboxData,
	type ComboboxProps,
	CopyButton,
	DataList,
	Divider,
	Drawer,
	type DrawerRootProps,
	EmptyState,
	FileButton,
	Flex,
	Grid,
	Group,
	getTreeExpandedState,
	Highlight,
	HoverCard,
	Indicator,
	Input,
	InputBase,
	JsonInput,
	Kbd,
	List,
	Loader,
	type MantineColor,
	type MantineSize,
	Mentions,
	Menu,
	type MenuProps,
	Modal,
	MultiSelect,
	NativeSelect,
	NavLink,
	Notification,
	NumberInput,
	type NumberInputProps,
	OverflowList,
	Pagination,
	Paper,
	PasswordInput,
	Pill,
	PillsInput,
	PinInput,
	Popover,
	type PopoverProps,
	Progress,
	Radio,
	RingProgress,
	ScrollArea,
	SegmentedControl,
	Select,
	type SelectProps,
	SimpleGrid,
	Skeleton,
	Splitter,
	Spoiler,
	Stack,
	Stepper,
	Switch,
	Table,
	Tabs,
	TagsInput,
	Text,
	Textarea,
	TextInput,
	type TextInputProps,
	ThemeIcon,
	Timeline,
	Title,
	type TitleOrder,
	Tooltip,
	Tree,
	type TreeNodeData,
	UnstyledButton,
	useCombobox,
	useMantineTheme,
	useTree,
	VisuallyHidden,
} from "@mantine/core";
import { DateInput, DatePickerInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
	getHotkeyHandler,
	useDebouncedCallback,
	useDisclosure,
	useElementSize,
	useHotkeys,
	useInterval,
	useLocalStorage,
	useMediaQuery,
	useMergedRef,
	useOs,
	useUncontrolled,
} from "@mantine/hooks";
import { createSpotlight, Spotlight, type SpotlightRootProps } from "@mantine/spotlight";
import {
	type ComponentProps,
	type CSSProperties,
	createContext,
	Fragment,
	type KeyboardEvent,
	type MouseEvent,
	type KeyboardEvent as ReactKeyboardEvent,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState,
	useSyncExternalStore,
} from "react";
import {
	TbAdjustmentsHorizontal,
	TbAlertCircle,
	TbAlertTriangle,
	TbArchive,
	TbArrowDown,
	TbArrowDownRight,
	TbArrowLeft,
	TbArrowRight,
	TbArrowsMaximize,
	TbArrowUp,
	TbArrowUpRight,
	TbBell,
	TbBookmark,
	TbBraces,
	TbBrandGoogle,
	TbBrandWindows,
	TbBuilding,
	TbBuildingBank,
	TbBuildingSkyscraper,
	TbChartBar,
	TbCheck,
	TbChecklist,
	TbChecks,
	TbChevronDown,
	TbChevronLeft,
	TbChevronRight,
	TbChevronUp,
	TbCircleCheck,
	TbClock,
	TbClockCheck,
	TbColumns,
	TbCopy,
	TbCreditCard,
	TbCreditCardOff,
	TbDeviceDesktop,
	TbDeviceLaptop,
	TbDeviceMobile,
	TbDeviceTablet,
	TbDots,
	TbDownload,
	TbExternalLink,
	TbEye,
	TbEyeOff,
	TbFileImport,
	TbFileText,
	TbFilterOff,
	TbFingerprint,
	TbFlask,
	TbGitMerge,
	TbGripVertical,
	TbHistory,
	TbHourglass,
	TbInbox,
	TbInfoCircle,
	TbKey,
	TbKeyboard,
	TbLayoutDashboard,
	TbLayoutSidebarLeftCollapse,
	TbLayoutSidebarLeftExpand,
	TbLink,
	TbLock,
	TbLogout,
	TbMail,
	TbMessageQuestion,
	TbMinus,
	TbMoon,
	TbNote,
	TbPackage,
	TbPencil,
	TbPlayerPause,
	TbPlayerPlay,
	TbPlayerSkipForward,
	TbPlayerStop,
	TbPlus,
	TbReceiptRefund,
	TbRefresh,
	TbRestore,
	TbRobot,
	TbRotateClockwise,
	TbSearch,
	TbSelector,
	TbSend,
	TbSettings,
	TbShieldCheck,
	TbShieldLock,
	TbShieldOff,
	TbSortAscending,
	TbSortDescending,
	TbStack2,
	TbSun,
	TbTable,
	TbTool,
	TbTrash,
	TbUpload,
	TbUser,
	TbUserCircle,
	TbUserMinus,
	TbUserPlus,
	TbUserShield,
	TbUsers,
	TbX,
	TbZoomIn,
	TbZoomOut,
} from "react-icons/tb";

export const app = { name: "Ops Console" };

export interface User {
	id: string;
	name: string;
	email: string;
	initials: string;
	color?: MantineColor;
}

export const users: Record<"anna" | "lea" | "jean", User> = {
	anna: { id: "usr_7Hq2", name: "Anna K.", email: "anna@company.com", initials: "AK" },
	lea: { id: "usr_3Lm9", name: "Léa M.", email: "lea@company.com", initials: "LM", color: "violet" },
	jean: { id: "usr_9Jd4", name: "Jean D.", email: "jean@company.com", initials: "JD", color: "teal" },
};

export interface Customer {
	id: string;
	name: string;
	email: string;
	status: "active" | "trial" | "pastDue" | "paused";
	mrr: number;
}

export const customers: Customer[] = [
	{ id: "cus_8f2KqL", name: "Acme Logistics", email: "billing@acme.io", status: "active", mrr: 1248000 },
	{ id: "cus_3Hn7Wd", name: "Brightline Health", email: "ops@brightline.co", status: "trial", mrr: 0 },
	{ id: "cus_5Tz1Pc", name: "Cobalt & Partners", email: "finance@cobalt.fr", status: "pastDue", mrr: 312050 },
	{ id: "cus_1Qa9Ds", name: "Dune Studio", email: "hello@dune.studio", status: "paused", mrr: 98000 },
	{ id: "cus_6Re4Ef", name: "Evergreen Foods", email: "ap@evergreen.eu", status: "active", mrr: 4500210 },
	{ id: "cus_2Nv8Ns", name: "Nova SAS", email: "billing@nova.fr", status: "trial", mrr: 0 },
];

export function ago({ days = 0, hours = 0, minutes = 0 }) {
	return new Date(Date.now() - ((days * 24 + hours) * 60 + minutes) * 60_000);
}

export function fromNow({ days = 0, hours = 0, minutes = 0 }) {
	return new Date(Date.now() + ((days * 24 + hours) * 60 + minutes) * 60_000);
}

export function wait(milliseconds: number) {
	return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}

export const previewBreakpoints = { xs: "480px", sm: "640px", md: "860px", lg: "1080px", xl: "1320px" };

const previewSpans = {
	third: { base: 12, md: 6, xl: 4 },
	half: { base: 12, lg: 6 },
	twoThirds: { base: 12, xl: 8 },
	full: { base: 12 },
} as const;

export function PreviewGrid({ children }: { children: ReactNode }) {
	return (
		<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
			{children}
		</Grid>
	);
}

export function PreviewItem({ span = "third", children }: { span?: keyof typeof previewSpans; children: ReactNode }) {
	return (
		<Grid.Col span={previewSpans[span]}>
			<Stack gap="md">{children}</Stack>
		</Grid.Col>
	);
}

export const frameStyle: CSSProperties = {
	border: "1px solid var(--mantine-color-default-border)",
	borderRadius: "var(--mantine-radius-default)",
	overflow: "hidden",
};

interface FormatSettings {
	locale?: string;
	timeZone: string;
}

const formatSettingsContext = createContext<FormatSettings>({
	locale: undefined,
	timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

export function GroundworkProvider({
	locale,
	timeZone,
	children,
}: {
	locale?: string;
	timeZone?: string;
	children: ReactNode;
}) {
	const parent = useContext(formatSettingsContext);
	const value = useMemo(
		() => ({ locale: locale ?? parent.locale, timeZone: timeZone ?? parent.timeZone }),
		[locale, timeZone, parent],
	);
	return <formatSettingsContext.Provider value={value}>{children}</formatSettingsContext.Provider>;
}

export function useFormatSettings() {
	return useContext(formatSettingsContext);
}

export const emptyValue = "—";

export type DateLike = Date | string | number;

export const tabularStyle = { fontVariantNumeric: "tabular-nums" } as const;

function toDate(value: DateLike) {
	return value instanceof Date ? value : new Date(value);
}

export function currencyFractionDigits(currency: string, locale?: string) {
	return new Intl.NumberFormat(locale, { style: "currency", currency }).resolvedOptions().maximumFractionDigits ?? 2;
}

export interface MoneyFormatOptions {
	compact?: boolean;
	wholeUnits?: boolean;
}

export function formatMoney(
	amount: number,
	currency: string,
	locale?: string,
	{ compact = false, wholeUnits = false }: MoneyFormatOptions = {},
) {
	const major = amount / 10 ** currencyFractionDigits(currency, locale);
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
		...(compact
			? { notation: "compact", maximumFractionDigits: 1 }
			: wholeUnits
				? { minimumFractionDigits: 0, maximumFractionDigits: 0 }
				: {}),
	}).format(major);
}

export function formatNumber(value: number, { compact = false, locale }: { compact?: boolean; locale?: string } = {}) {
	return new Intl.NumberFormat(locale, compact ? { notation: "compact", maximumFractionDigits: 1 } : undefined).format(
		value,
	);
}

export function formatDate(value: DateLike, format: "date" | "datetime" | "time", locale?: string, timeZone?: string) {
	return new Intl.DateTimeFormat(locale, {
		...(format !== "time" && { year: "numeric", month: "short", day: "numeric" }),
		...(format !== "date" && { hour: "2-digit", minute: "2-digit" }),
		...(format === "datetime" && { timeZoneName: "short" }),
		timeZone,
	}).format(toDate(value));
}

export interface CountForms {
	one: string;
	other: string;
	zero?: string;
	two?: string;
	few?: string;
	many?: string;
}

export function formatCount(count: number, forms: CountForms, locale?: string) {
	const rule = new Intl.PluralRules(locale).select(count);
	return `${formatNumber(count, { locale })} ${forms[rule] ?? forms.other}`;
}

export function formatPercent(value: number, { decimals, locale }: { decimals?: number; locale?: string } = {}) {
	return new Intl.NumberFormat(locale, {
		style: "percent",
		minimumFractionDigits: decimals ?? 0,
		maximumFractionDigits: decimals ?? 1,
	}).format(value);
}

const fileSizeUnits = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte"] as const;

export function formatFileSize(bytes: number, locale?: string) {
	const exponent = Math.min(fileSizeUnits.length - 1, bytes > 0 ? Math.floor(Math.log10(bytes) / 3) : 0);
	const value = bytes / 1000 ** exponent;
	return new Intl.NumberFormat(locale, {
		style: "unit",
		unit: fileSizeUnits[exponent],
		unitDisplay: "short",
		maximumFractionDigits: value < 10 && exponent > 0 ? 1 : 0,
	}).format(value);
}

export function formatWeekday(
	dayIndex: number,
	{ style = "long", locale }: { style?: "long" | "short" | "narrow"; locale?: string } = {},
) {
	// 1 January 2023 was a Sunday
	return new Intl.DateTimeFormat(locale, { weekday: style, timeZone: "UTC" }).format(Date.UTC(2023, 0, 1 + dayIndex));
}

function dayKey(date: Date, timeZone?: string) {
	return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit", timeZone }).format(date);
}

export function groupByDay<Item>(
	items: Item[],
	getDate: (item: Item) => DateLike,
	{ timeZone }: { timeZone?: string } = {},
) {
	const groups = new Map<string, { day: string; date: Date; items: Item[] }>();
	for (const item of items) {
		const date = toDate(getDate(item));
		const day = dayKey(date, timeZone);
		const group = groups.get(day);
		if (group) group.items.push(item);
		else groups.set(day, { day, date, items: [item] });
	}
	return [...groups.values()];
}

export function formatDayLabel(
	value: DateLike,
	{ now = Date.now(), locale, timeZone }: { now?: number; locale?: string; timeZone?: string } = {},
) {
	const date = toDate(value);
	const today = dayKey(new Date(now), timeZone);
	const day = dayKey(date, timeZone);
	const daysAgo = Math.round((Date.parse(today) - Date.parse(day)) / 86_400_000);
	if (daysAgo >= -1 && daysAgo <= 1) {
		const label = new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(-daysAgo, "day");
		return label.charAt(0).toLocaleUpperCase(locale) + label.slice(1);
	}
	if (daysAgo > 1 && daysAgo < 7) return new Intl.DateTimeFormat(locale, { weekday: "long", timeZone }).format(date);
	return new Intl.DateTimeFormat(locale, {
		day: "numeric",
		month: "long",
		...(day.slice(0, 4) !== today.slice(0, 4) && { year: "numeric" }),
		timeZone,
	}).format(date);
}

const formatRelativeUnits: [Intl.RelativeTimeFormatUnit, number][] = [
	["day", 86_400],
	["hour", 3_600],
	["minute", 60],
];

export function formatRelative(value: DateLike, now: number, locale?: string) {
	const seconds = Math.round((toDate(value).getTime() - now) / 1000);
	const format = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
	const match = formatRelativeUnits.find(([, size]) => Math.abs(seconds) >= size);
	return match ? format.format(Math.round(seconds / match[1]), match[0]) : format.format(0, "second");
}

function useNow() {
	const [now, setNow] = useState(() => Date.now());
	useInterval(() => setNow(Date.now()), 60_000, { autoInvoke: true });
	return now;
}

export function MoneyText({
	amount,
	currency,
	locale,
	compact,
	wholeUnits,
}: {
	amount: number | null | undefined;
	currency: string;
	locale?: string;
} & MoneyFormatOptions) {
	const settings = useFormatSettings();
	return (
		<Text span inherit style={tabularStyle}>
			{amount == null ? emptyValue : formatMoney(amount, currency, locale ?? settings.locale, { compact, wholeUnits })}
		</Text>
	);
}

export function NumberText({
	value,
	compact = false,
	locale,
}: {
	value: number | null | undefined;
	compact?: boolean;
	locale?: string;
}) {
	const settings = useFormatSettings();
	return (
		<Text span inherit style={tabularStyle}>
			{value == null ? emptyValue : formatNumber(value, { compact, locale: locale ?? settings.locale })}
		</Text>
	);
}

export function DateText({
	value,
	format = "date",
	locale,
	timeZone,
}: {
	value: DateLike | null | undefined;
	format?: "date" | "datetime" | "time";
	locale?: string;
	timeZone?: string;
}) {
	const settings = useFormatSettings();
	return (
		<Text span inherit style={tabularStyle}>
			{value == null ? emptyValue : formatDate(value, format, locale ?? settings.locale, timeZone ?? settings.timeZone)}
		</Text>
	);
}

export function RelativeTime({
	value,
	absoluteAfterDays = 7,
	locale,
	timeZone,
	capitalize = false,
}: {
	value: DateLike | null | undefined;
	absoluteAfterDays?: number;
	locale?: string;
	timeZone?: string;
	capitalize?: boolean;
}) {
	const settings = useFormatSettings();
	const now = useNow();

	if (value == null) {
		return (
			<Text span inherit>
				{emptyValue}
			</Text>
		);
	}

	const date = toDate(value);
	const resolvedLocale = locale ?? settings.locale;
	const resolvedZone = timeZone ?? settings.timeZone;
	const absolute = Math.abs(now - date.getTime()) > absoluteAfterDays * 86_400_000;
	const sameYear = new Date(now).getFullYear() === date.getFullYear();
	const label = absolute
		? new Intl.DateTimeFormat(resolvedLocale, {
				month: "short",
				day: "numeric",
				...(sameYear ? {} : { year: "numeric" }),
				timeZone: resolvedZone,
			}).format(date)
		: formatRelative(date, now, resolvedLocale);

	return (
		<Tooltip label={formatDate(date, "datetime", resolvedLocale, resolvedZone)} withArrow>
			<Text component="time" dateTime={date.toISOString()} inherit style={tabularStyle}>
				{capitalize ? label.charAt(0).toLocaleUpperCase(resolvedLocale) + label.slice(1) : label}
			</Text>
		</Tooltip>
	);
}

export function PercentDelta({
	value,
	goodWhen = "up",
	locale,
}: {
	value: number | null | undefined;
	goodWhen?: "up" | "down";
	locale?: string;
}) {
	const settings = useFormatSettings();

	if (value == null) {
		return (
			<Text span inherit>
				{emptyValue}
			</Text>
		);
	}

	const formatted = new Intl.NumberFormat(locale ?? settings.locale, {
		style: "percent",
		maximumFractionDigits: 1,
	}).format(Math.abs(value));
	const good = value > 0 === (goodWhen === "up");

	return (
		<Text
			span
			inherit
			c={value === 0 ? "dimmed" : good ? "green" : "red"}
			style={{ ...tabularStyle, whiteSpace: "nowrap" }}
		>
			{value > 0 && <TbArrowUpRight role="img" aria-label="Up" style={{ verticalAlign: "-2px", marginRight: 2 }} />}
			{value < 0 && <TbArrowDownRight role="img" aria-label="Down" style={{ verticalAlign: "-2px", marginRight: 2 }} />}
			{formatted}
		</Text>
	);
}

export type StatusTone = "success" | "info" | "warning" | "danger" | "neutral";

export const statusToneColors: Record<StatusTone, MantineColor> = {
	success: "green",
	info: "blue",
	warning: "orange",
	danger: "red",
	neutral: "gray",
};

export type StatusMap<Value extends string> = Record<Value, { label: string; tone: StatusTone }>;

export function defineStatusMap<Value extends string>(
	definitions: Record<Value, readonly [label: string, tone: StatusTone]>,
): StatusMap<Value> {
	const entries = Object.entries(definitions) as [Value, readonly [string, StatusTone]][];
	return Object.fromEntries(entries.map(([value, [label, tone]]) => [value, { label, tone }])) as StatusMap<Value>;
}

export const customerStatus = defineStatusMap({
	active: ["Active", "success"],
	trial: ["Trial", "info"],
	pastDue: ["Past due", "danger"],
	paused: ["Paused", "neutral"],
});

interface StatusBadgeProps<Value extends string> {
	value: Value;
	tones: StatusMap<Value>;
	size?: MantineSize;
}

export function StatusBadge<Value extends string>({ value, tones, size }: StatusBadgeProps<Value>) {
	const { label, tone } = tones[value];
	return (
		<Badge variant="light" color={statusToneColors[tone]} size={size} tt="none" fw={500}>
			{label}
		</Badge>
	);
}

function CopyableIdButton({ value, label }: { value: string; label: string }) {
	return (
		<CopyButton value={value} timeout={2000}>
			{({ copied, copy }) => (
				<Tooltip label={copied ? "Copied" : "Copy"} withArrow>
					<ActionIcon variant="subtle" color={copied ? "green" : "gray"} size="sm" aria-label={label} onClick={copy}>
						{copied ? <TbCheck /> : <TbCopy />}
					</ActionIcon>
				</Tooltip>
			)}
		</CopyButton>
	);
}

export function CopyableId({ value, size = "sm" }: { value: string; size?: MantineSize }) {
	return (
		<Group gap={2} wrap="nowrap" display="inline-flex">
			<Text span ff="monospace" size={size}>
				{value}
			</Text>
			<CopyableIdButton value={value} label={`Copy ${value}`} />
		</Group>
	);
}

interface SecretFieldProps {
	label: ReactNode;
	revealedValue?: string;
	prefix?: string;
	lastFour: string;
	onReveal?: () => void;
	onHide?: () => void;
	onRotate?: () => void;
	rotatedAt?: DateLike;
	rotatedBy?: string;
	shownOnce?: boolean;
}

export function SecretField({
	label,
	revealedValue,
	prefix = "",
	lastFour,
	onReveal,
	onHide,
	onRotate,
	rotatedAt,
	rotatedBy,
	shownOnce = false,
}: SecretFieldProps) {
	const revealed = revealedValue !== undefined;
	const canToggle = !shownOnce && Boolean(revealed ? onHide : onReveal);
	const actionCount = Number(canToggle) + Number(revealed);

	return (
		<Stack gap={6}>
			<TextInput
				label={label}
				readOnly
				value={revealed ? revealedValue : `${prefix}${"•".repeat(10)}${lastFour}`}
				styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
				rightSectionWidth={actionCount * 30 + 6}
				rightSectionPointerEvents="all"
				rightSection={
					actionCount > 0 && (
						<Group gap={2} wrap="nowrap">
							{canToggle && (
								<Tooltip label={revealed ? "Hide" : "Reveal"} withArrow>
									<ActionIcon
										variant="subtle"
										color="gray"
										size="sm"
										aria-label={revealed ? "Hide secret" : "Reveal secret"}
										onClick={revealed ? onHide : onReveal}
									>
										{revealed ? <TbEyeOff /> : <TbEye />}
									</ActionIcon>
								</Tooltip>
							)}
							{revealed && <CopyableIdButton value={revealedValue} label="Copy secret" />}
						</Group>
					)
				}
			/>
			{shownOnce && (
				<Alert color="orange" icon={<TbAlertTriangle />} p="xs">
					Copy it now. You won't see it again.
				</Alert>
			)}
			{(rotatedAt || onRotate) && !shownOnce && (
				<Group justify="space-between" wrap="nowrap" gap="sm">
					<Text size="xs" c="dimmed">
						{rotatedAt ? (
							<>
								Last rotated <DateText value={rotatedAt} />
								{rotatedBy && ` by ${rotatedBy}`}
							</>
						) : (
							"Never rotated"
						)}
					</Text>
					{onRotate && (
						<Button variant="default" size="xs" leftSection={<TbRefresh />} onClick={onRotate}>
							Rotate secret
						</Button>
					)}
				</Group>
			)}
		</Stack>
	);
}

interface CopyFieldProps extends Omit<TextInputProps, "value" | "readOnly" | "rightSection" | "styles"> {
	value: string;
	monospace?: boolean;
}

export function CopyField({ value, monospace = true, label, ...props }: CopyFieldProps) {
	return (
		<TextInput
			{...props}
			label={label}
			value={value}
			readOnly
			onFocus={(event) => event.currentTarget.select()}
			styles={monospace ? { input: { fontFamily: "var(--mantine-font-family-monospace)" } } : undefined}
			rightSectionPointerEvents="all"
			rightSection={
				<CopyableIdButton value={value} label={typeof label === "string" ? `Copy ${label.toLowerCase()}` : "Copy"} />
			}
		/>
	);
}

export interface UserChipUser {
	name: string;
	email?: string;
	avatarUrl?: string;
	color?: MantineColor;
}

const userChipSizes = { sm: 24, md: 32, lg: 40 } as const;

export function UserChip({
	user,
	size = "sm",
	withEmail = false,
}: {
	user: UserChipUser;
	size?: keyof typeof userChipSizes;
	withEmail?: boolean;
}) {
	return (
		<Group gap="xs" wrap="nowrap" miw={0}>
			<Avatar src={user.avatarUrl} name={user.name} color={user.color ?? "initials"} size={userChipSizes[size]} />
			<Box miw={0}>
				<Text size="sm" fw={500} truncate>
					{user.name}
				</Text>
				{withEmail && user.email && (
					<Text size="xs" c="dimmed" truncate>
						{user.email}
					</Text>
				)}
			</Box>
		</Group>
	);
}

export function UserStack({
	users: stackUsers,
	max = 3,
	size = "md",
}: {
	users: UserChipUser[];
	max?: number;
	size?: keyof typeof userChipSizes;
}) {
	const visible = stackUsers.slice(0, max);
	const hidden = stackUsers.slice(max);

	return (
		<Avatar.Group spacing="xs">
			{visible.map((user) => (
				<Tooltip key={user.name} label={user.name} withArrow>
					<Avatar src={user.avatarUrl} name={user.name} color={user.color ?? "initials"} size={userChipSizes[size]} />
				</Tooltip>
			))}
			{hidden.length > 0 && (
				<Tooltip label={hidden.map((user) => user.name).join(", ")} withArrow multiline maw={240}>
					<Avatar size={userChipSizes[size]}>+{hidden.length}</Avatar>
				</Tooltip>
			)}
		</Avatar.Group>
	);
}

export interface Actor {
	type: "user" | "system" | "api_key";
	name: string;
	color?: MantineColor;
}

export function ActorChip({ actor, onBehalfOf }: { actor: Actor; onBehalfOf?: { name: string; email?: string } }) {
	return (
		<Group gap="xs" wrap="nowrap" miw={0}>
			{actor.type === "user" ? (
				<Avatar name={actor.name} color={actor.color ?? "initials"} size={24} />
			) : (
				<Avatar size={24} radius="sm" color="gray">
					{actor.type === "system" ? <TbRobot /> : <TbKey />}
				</Avatar>
			)}
			<Text size="sm" truncate>
				<Text span inherit fw={500} ff={actor.type === "system" ? "monospace" : undefined}>
					{actor.name}
				</Text>
				{onBehalfOf && (
					<>
						{" "}
						<Text span inherit c="dimmed">
							as
						</Text>{" "}
						{onBehalfOf.email ?? onBehalfOf.name}
					</>
				)}
			</Text>
		</Group>
	);
}

export interface DiffChange {
	field: string;
	label: string;
	before: unknown;
	after: unknown;
	render?: (value: unknown) => ReactNode;
}

function diffViewIsRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function diffViewRows(changes: DiffChange[]): DiffChange[] {
	return changes.flatMap((change) => {
		const { before, after } = change;
		if (!diffViewIsRecord(before) || !diffViewIsRecord(after)) return [change];
		return Object.keys({ ...before, ...after })
			.filter((key) => JSON.stringify(before[key]) !== JSON.stringify(after[key]))
			.map((key) => ({
				field: `${change.field}.${key}`,
				label: `${change.label} · ${key}`,
				before: before[key],
				after: after[key],
				render: change.render,
			}));
	});
}

function DiffViewValue({
	value,
	render,
	kind,
}: {
	value: unknown;
	render?: DiffChange["render"];
	kind: "before" | "after";
}) {
	if (value === null || value === undefined || value === "") {
		return (
			<Text size="sm" c="dimmed">
				{emptyValue}
			</Text>
		);
	}
	const content = render ? render(value) : typeof value === "object" ? JSON.stringify(value) : String(value);
	const text = (
		<Text
			span
			size="sm"
			td={kind === "before" ? "line-through" : undefined}
			px={6}
			py={2}
			style={{
				background: `var(--mantine-color-${kind === "before" ? "red" : "green"}-light)`,
				borderRadius: "var(--mantine-radius-xs)",
				wordBreak: "break-word",
			}}
		>
			{content}
		</Text>
	);
	return typeof content === "string" && content.length > 80 ? (
		<Spoiler maxHeight={48} showLabel="Show all" hideLabel="Show less">
			{text}
		</Spoiler>
	) : (
		text
	);
}

export function DiffView({ changes }: { changes: DiffChange[] }) {
	return (
		<Table verticalSpacing="xs">
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Field</Table.Th>
					<Table.Th>Before</Table.Th>
					<Table.Th>After</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{diffViewRows(changes).map((row) => (
					<Table.Tr key={row.field}>
						<Table.Td>
							<Text size="sm" c="dimmed">
								{row.label}
							</Text>
						</Table.Td>
						<Table.Td>
							<DiffViewValue value={row.before} render={row.render} kind="before" />
						</Table.Td>
						<Table.Td>
							<DiffViewValue value={row.after} render={row.render} kind="after" />
						</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</Table>
	);
}

function slaTimerMinutes(value: string | number) {
	if (typeof value === "number") return value;
	const match = /^(\d+)\s*(m|h|d)$/.exec(value.trim());
	if (!match) return 60;
	const amount = Number(match[1]);
	return match[2] === "d" ? amount * 1440 : match[2] === "h" ? amount * 60 : amount;
}

export function formatDuration(minutes: number) {
	const total = Math.round(Math.abs(minutes));
	const days = Math.floor(total / 1440);
	const hours = Math.floor((total % 1440) / 60);
	const rest = total % 60;
	if (days > 0) return `${days}d ${hours}h`;
	if (hours > 0) return `${hours}h ${String(rest).padStart(2, "0")}m`;
	return `${rest}m`;
}

export function slaMinutesRemaining(due: DateLike, now = Date.now()) {
	return Math.round((toDate(due).getTime() - now) / 60_000);
}

function slaTimerState(due: DateLike, warnAt: string | number, met: DateLike | null | undefined, now: number) {
	if (met) {
		const margin = slaMinutesRemaining(due, toDate(met).getTime());
		return {
			tone: margin >= 0 ? ("success" as const) : ("danger" as const),
			label: `Met · ${formatDuration(margin)} ${margin >= 0 ? "early" : "late"}`,
		};
	}
	const remaining = slaMinutesRemaining(due, now);
	if (remaining < 0) return { tone: "danger" as const, label: `Overdue ${formatDuration(remaining)}` };
	return {
		tone: remaining <= slaTimerMinutes(warnAt) ? ("warning" as const) : ("neutral" as const),
		label: `${formatDuration(remaining)} left`,
	};
}

export function SlaTimer({
	due,
	warnAt = "1h",
	met,
}: {
	due: DateLike;
	warnAt?: string | number;
	met?: DateLike | null;
}) {
	const settings = useFormatSettings();
	const now = useNow();
	const { tone, label } = slaTimerState(due, warnAt, met, now);

	return (
		<Tooltip label={`Due ${formatDate(due, "datetime", settings.locale, settings.timeZone)}`} withArrow>
			<Badge
				variant="light"
				color={statusToneColors[tone]}
				tt="none"
				fw={500}
				leftSection={met ? <TbClockCheck /> : <TbClock />}
				style={tabularStyle}
			>
				{label}
			</Badge>
		</Tooltip>
	);
}

interface JsonViewerEntry {
	key: string;
	value: unknown;
	redacted: boolean;
}

type JsonViewerRedaction = string | RegExp;

function jsonViewerBuild(
	value: unknown,
	redact: JsonViewerRedaction[],
	collapsedDepth: number,
	entries: Map<string, JsonViewerEntry>,
	expanded: string[],
	path = "$",
	depth = 0,
): TreeNodeData[] {
	if (typeof value !== "object" || value === null) return [];
	return Object.entries(value).map(([key, child]) => {
		const childPath = `${path}.${key}`;
		const redacted = redact.some((rule) => (typeof rule === "string" ? rule === key : rule.test(key)));
		entries.set(childPath, { key, value: child, redacted });
		const isContainer = typeof child === "object" && child !== null && !redacted;
		if (isContainer && depth + 1 < collapsedDepth) expanded.push(childPath);
		return {
			value: childPath,
			label: key,
			children: isContainer
				? jsonViewerBuild(child, redact, collapsedDepth, entries, expanded, childPath, depth + 1)
				: undefined,
		};
	});
}

const jsonViewerNoRedactions: JsonViewerRedaction[] = [];

function JsonViewerValue({ entry, expanded }: { entry: JsonViewerEntry; expanded: boolean }) {
	const { value } = entry;
	if (entry.redacted) {
		return (
			<Text span ff="monospace" size="xs" c="dimmed">
				••••
			</Text>
		);
	}
	if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
		const count = Array.isArray(value) ? value.length : Object.keys(value).length;
		const forms = Array.isArray(value) ? { one: "item", other: "items" } : { one: "key", other: "keys" };
		return (
			<Text span ff="monospace" size="xs" c="dimmed">
				{expanded ? null : formatCount(count, forms)}
			</Text>
		);
	}
	if (typeof value === "string") {
		return <TruncatedText value={JSON.stringify(value)} size="xs" monospace maw={280} color="teal" />;
	}
	return (
		<Text span ff="monospace" size="xs" c={typeof value === "number" ? "blue" : "violet"}>
			{String(value)}
		</Text>
	);
}

export function JsonViewer({
	value,
	collapsedDepth = 1,
	redact = jsonViewerNoRedactions,
}: {
	value: unknown;
	collapsedDepth?: number;
	redact?: JsonViewerRedaction[];
}) {
	const { data, entries, expanded } = useMemo(() => {
		const builtEntries = new Map<string, JsonViewerEntry>();
		const builtExpanded: string[] = [];
		const builtData = jsonViewerBuild(value, redact, collapsedDepth, builtEntries, builtExpanded);
		return { data: builtData, entries: builtEntries, expanded: builtExpanded };
	}, [value, redact, collapsedDepth]);
	const tree = useTree({ initialExpandedState: getTreeExpandedState(data, expanded) });

	return (
		<Tree
			data={data}
			tree={tree}
			levelOffset="md"
			renderNode={({ node, expanded: nodeExpanded, hasChildren, elementProps }) => {
				const entry = entries.get(node.value);
				if (!entry) return null;
				return (
					<Group gap={6} wrap="nowrap" py={2} {...elementProps}>
						<Box w={14} c="dimmed" style={{ display: "flex", flexShrink: 0 }}>
							{hasChildren && (nodeExpanded ? <TbChevronDown /> : <TbChevronRight />)}
						</Box>
						<Text span ff="monospace" size="xs">
							{entry.key}
						</Text>
						<JsonViewerValue entry={entry} expanded={nodeExpanded} />
						{!entry.redacted && (
							<CopyButton
								value={typeof entry.value === "string" ? entry.value : JSON.stringify(entry.value, null, 2)}
								timeout={2000}
							>
								{({ copied, copy }) => (
									<ActionIcon
										variant="subtle"
										color={copied ? "green" : "gray"}
										size="xs"
										aria-label={`Copy ${entry.key}`}
										onClick={(event) => {
											event.stopPropagation();
											copy();
										}}
									>
										{copied ? <TbCheck /> : <TbCopy />}
									</ActionIcon>
								)}
							</CopyButton>
						)}
					</Group>
				);
			}}
		/>
	);
}

export function TypeToConfirm({ phrase, onValidChange }: { phrase: string; onValidChange?: (valid: boolean) => void }) {
	const [typed, setTyped] = useState("");

	return (
		<TextInput
			label={
				<>
					Type <Code>{phrase}</Code> to confirm
				</>
			}
			value={typed}
			autoComplete="off"
			spellCheck={false}
			onChange={(event) => {
				const next = event.currentTarget.value;
				setTyped(next);
				onValidChange?.(next === phrase);
			}}
		/>
	);
}

interface TruncatedTextProps {
	value: string;
	mode?: "end" | "middle";
	copyable?: boolean;
	head?: number;
	tail?: number;
	size?: MantineSize;
	monospace?: boolean;
	maw?: number | string;
	color?: MantineColor;
}

export function TruncatedText({
	value,
	mode = "end",
	copyable = false,
	head = 8,
	tail = 4,
	size = "sm",
	monospace = mode === "middle",
	maw,
	color,
}: TruncatedTextProps) {
	const { ref: sizeRef, width } = useElementSize<HTMLParagraphElement>();
	const [element, setElement] = useState<HTMLParagraphElement | null>(null);
	const ref = useMergedRef(sizeRef, setElement);
	const [measure, setMeasure] = useState({ overflowing: false, fits: Number.POSITIVE_INFINITY });
	const overflowing = measure.overflowing;
	// Middle mode only shortens when the full value doesn't fit, and only if there is something to cut
	const shortened = mode === "middle" && overflowing && value.length > head + tail + 1;
	// Keep as many characters as fit, split between start and end in the head:tail ratio
	const visible = Math.max(3, Math.min(head + tail + 1, measure.fits));
	const tailCount = Math.max(1, Math.round(((visible - 1) * tail) / (head + tail)));
	const headCount = Math.max(1, visible - 1 - tailCount);

	useEffect(() => {
		const fullWidth = element?.scrollWidth ?? 0;
		const characterWidth = value.length > 0 ? fullWidth / value.length : 0;
		setMeasure({
			overflowing: width > 0 && fullWidth > Math.ceil(width),
			fits: characterWidth > 0 ? Math.floor(width / characterWidth) : Number.POSITIVE_INFINITY,
		});
	}, [width, element, value]);

	const textProps = { size, c: color, ff: monospace ? "monospace" : undefined, miw: 0 } as const;

	return (
		<Group gap={2} wrap="nowrap" miw={0} maw={maw} display="inline-flex" style={{ verticalAlign: "middle" }}>
			<Tooltip label={value} disabled={!overflowing} multiline maw={360} withArrow style={{ wordBreak: "break-word" }}>
				<Box miw={0} style={{ display: "grid" }}>
					<Text
						ref={ref}
						{...textProps}
						truncate="end"
						aria-hidden={shortened || undefined}
						style={{ gridArea: "1 / 1", visibility: shortened ? "hidden" : undefined }}
					>
						{value}
					</Text>
					{shortened && (
						<Text {...textProps} style={{ gridArea: "1 / 1", whiteSpace: "nowrap", overflow: "hidden" }}>
							{`${value.slice(0, headCount)}…${value.slice(-tailCount)}`}
						</Text>
					)}
				</Box>
			</Tooltip>
			{copyable && <CopyableIdButton value={value} label={`Copy ${value}`} />}
		</Group>
	);
}

const shortcutHintSymbols: Record<string, readonly [apple: string, other: string]> = {
	mod: ["⌘", "Ctrl"],
	ctrl: ["⌃", "Ctrl"],
	shift: ["⇧", "Shift"],
	alt: ["⌥", "Alt"],
	enter: ["↵", "Enter"],
	escape: ["Esc", "Esc"],
	backspace: ["⌫", "Backspace"],
	arrowup: ["↑", "↑"],
	arrowdown: ["↓", "↓"],
	arrowleft: ["←", "←"],
	arrowright: ["→", "→"],
};

export function formatShortcut(keys: string, apple: boolean) {
	return keys.split("+").map((key) => {
		const symbol = shortcutHintSymbols[key.trim().toLowerCase()];
		return symbol ? symbol[apple ? 0 : 1] : key.trim().toUpperCase();
	});
}

export function ShortcutHint({ keys }: { keys: string | string[] }) {
	const os = useOs();
	const apple = os === "macos" || os === "ios";
	const alternatives = ([] as string[]).concat(keys);

	return (
		<Box component="span" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
			{alternatives.map((combination, index) => (
				<Fragment key={combination}>
					{index > 0 && (
						<Text span size="xs" c="dimmed">
							or
						</Text>
					)}
					{formatShortcut(combination, apple).map((key) => (
						<Kbd key={key} size="xs">
							{key}
						</Kbd>
					))}
				</Fragment>
			))}
		</Box>
	);
}

export interface RegisteredShortcut {
	id: string;
	keys: string;
	alternatives?: string[];
	description: string;
	group: string;
}

const shortcutRegistry = new Map<string, RegisteredShortcut>();

const shortcutListeners = new Set<() => void>();

let shortcutSnapshot: RegisteredShortcut[] = [];

function shortcutRegistryChanged() {
	shortcutSnapshot = [...shortcutRegistry.values()];
	for (const listener of shortcutListeners) listener();
}

export function useShortcut(
	keys: string | null,
	handler: () => void,
	{ description, group = "General" }: { description: string; group?: string },
) {
	const id = useId();
	useHotkeys(keys ? [[keys, handler]] : []);
	useEffect(() => {
		if (!keys) return;
		shortcutRegistry.set(id, { id, keys, description, group });
		shortcutRegistryChanged();
		return () => {
			shortcutRegistry.delete(id);
			shortcutRegistryChanged();
		};
	}, [id, keys, description, group]);
}

export function useRegisteredShortcuts() {
	return useSyncExternalStore(
		(listener) => {
			shortcutListeners.add(listener);
			return () => {
				shortcutListeners.delete(listener);
			};
		},
		() => shortcutSnapshot,
	);
}

export interface ScopedShortcut {
	keys: string | string[];
	description: string;
	handler: (event: KeyboardEvent) => void;
	preventDefault?: boolean;
}

const shortcutScopeNonTextInputs = new Set([
	"checkbox",
	"radio",
	"button",
	"submit",
	"reset",
	"range",
	"color",
	"file",
]);

function shortcutScopeIsTyping(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) return false;
	if (target.isContentEditable || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
		return true;
	}
	return target instanceof HTMLInputElement && !shortcutScopeNonTextInputs.has(target.type);
}

export function useShortcutScope(shortcuts: ScopedShortcut[], { group }: { group: string }) {
	const id = useId();
	const signature = shortcuts
		.map((shortcut) => `${([] as string[]).concat(shortcut.keys).join("\u0002")}\u0000${shortcut.description}`)
		.join("\u0001");

	useEffect(() => {
		const entries = signature
			.split("\u0001")
			.filter(Boolean)
			.map((entry, index): RegisteredShortcut => {
				const [keys, description] = entry.split("\u0000");
				const [primary, ...alternatives] = keys.split("\u0002");
				return { id: `${id}-${index}`, keys: primary, alternatives, description, group };
			});
		for (const entry of entries) shortcutRegistry.set(entry.id, entry);
		shortcutRegistryChanged();
		return () => {
			for (const entry of entries) shortcutRegistry.delete(entry.id);
			shortcutRegistryChanged();
		};
	}, [id, signature, group]);

	const handle = getHotkeyHandler(
		shortcuts.flatMap((shortcut) =>
			([] as string[])
				.concat(shortcut.keys)
				.map((keys): [string, (event: KeyboardEvent) => void, { preventDefault: boolean }] => [
					keys,
					shortcut.handler,
					{ preventDefault: shortcut.preventDefault ?? true },
				]),
		),
	);
	return (event: ReactKeyboardEvent<HTMLElement>) => {
		if (!shortcutScopeIsTyping(event.target)) handle(event);
	};
}

export interface ActionUnavailable {
	reason: string;
}

export interface ActionDefinition {
	id: string;
	label: string;
	description?: string;
	group: string;
	keywords?: string[];
	icon?: ReactNode;
	shortcut?: string;
	run: () => void;
	available?: () => true | ActionUnavailable;
}

export function defineAction(action: ActionDefinition) {
	return action;
}

export function actionAvailability(action: ActionDefinition): true | ActionUnavailable {
	return action.available?.() ?? true;
}

const actionRegistry = new Map<string, ActionDefinition>();

const actionListeners = new Set<() => void>();

let actionSnapshot: ActionDefinition[] = [];

function actionRegistryChanged() {
	actionSnapshot = [...actionRegistry.values()];
	for (const listener of actionListeners) listener();
}

export function useActions(actions: ActionDefinition[]) {
	const scope = useId();
	// Handlers and availability are read at call time, so they can change without re-registering
	const latest = useRef(actions);
	useEffect(() => {
		latest.current = actions;
	});

	const signature = actions
		.map((action) =>
			[
				action.id,
				action.label,
				action.group,
				action.description ?? "",
				action.shortcut ?? "",
				(action.keywords ?? []).join(" "),
			].join("\u0000"),
		)
		.join("\u0001");

	useEffect(() => {
		const find = (id: string) => latest.current.find((action) => action.id === id);
		const ids = signature
			.split("\u0001")
			.filter(Boolean)
			.map((entry) => entry.split("\u0000")[0]);
		const entries = ids.flatMap((id): ActionDefinition[] => {
			const action = find(id);
			if (!action) return [];
			return [
				{
					...action,
					run: () => find(id)?.run(),
					available: () => {
						const current = find(id);
						return current ? actionAvailability(current) : true;
					},
				},
			];
		});

		for (const entry of entries) {
			actionRegistry.set(`${scope}:${entry.id}`, entry);
			if (entry.shortcut) {
				const shortcutId = `${scope}:action:${entry.id}`;
				shortcutRegistry.set(shortcutId, {
					id: shortcutId,
					keys: entry.shortcut,
					description: entry.label,
					group: entry.group,
				});
			}
		}
		actionRegistryChanged();
		shortcutRegistryChanged();
		return () => {
			for (const entry of entries) {
				actionRegistry.delete(`${scope}:${entry.id}`);
				shortcutRegistry.delete(`${scope}:action:${entry.id}`);
			}
			actionRegistryChanged();
			shortcutRegistryChanged();
		};
	}, [scope, signature]);

	useHotkeys(
		actions.flatMap((action): [string, () => void][] =>
			action.shortcut
				? [
						[
							action.shortcut,
							() => {
								if (actionAvailability(action) === true) action.run();
							},
						],
					]
				: [],
		),
	);
}

export function useRegisteredActions() {
	return useSyncExternalStore(
		(listener) => {
			actionListeners.add(listener);
			return () => {
				actionListeners.delete(listener);
			};
		},
		() => actionSnapshot,
	);
}

type PanelProps = Omit<CardProps, "title" | "children"> & {
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	flush?: boolean;
	footer?: ReactNode;
	children?: ReactNode;
};

export function Panel({ title, description, actions, flush = false, footer, children, ...cardProps }: PanelProps) {
	return (
		<Card withBorder {...cardProps}>
			<Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
				<Box miw={0}>
					<Title order={5}>{title}</Title>
					{description && (
						<Text size="sm" c="dimmed" mt={2}>
							{description}
						</Text>
					)}
				</Box>
				{actions && (
					<Group gap="xs" wrap="nowrap" style={{ flexShrink: 0 }}>
						{actions}
					</Group>
				)}
			</Group>
			{children !== undefined &&
				(flush ? (
					<Card.Section mt="sm" withBorder>
						{children}
					</Card.Section>
				) : (
					<Box mt="sm">{children}</Box>
				))}
			{footer && (
				<Card.Section withBorder={!flush} inheritPadding py="sm" mt={flush ? 0 : "md"}>
					{footer}
				</Card.Section>
			)}
		</Card>
	);
}

const paneBorder = "1px solid var(--mantine-color-default-border)";

type PaneProps = Omit<BoxProps, "style" | "children"> & {
	title?: ReactNode;
	count?: number;
	actions?: ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
	withBorder?: boolean;
	children: ReactNode;
};

export function Pane({ title, count, actions, header, footer, withBorder = true, children, ...boxProps }: PaneProps) {
	const hasHeader = header !== undefined || title !== undefined || actions !== undefined;

	return (
		<Box
			{...boxProps}
			style={{
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				...(withBorder && { border: paneBorder, borderRadius: "var(--mantine-radius-default)" }),
			}}
		>
			{hasHeader && (
				<Group
					justify="space-between"
					wrap="nowrap"
					gap="sm"
					px="md"
					py="xs"
					mih={48}
					style={{ borderBottom: paneBorder, flexShrink: 0 }}
				>
					{header ?? (
						<>
							<Group gap="xs" wrap="nowrap" miw={0}>
								<Text size="sm" fw={600} truncate>
									{title}
								</Text>
								{count !== undefined && (
									<Badge size="sm" variant="light" color="gray">
										{formatNumber(count, { compact: true })}
									</Badge>
								)}
							</Group>
							{actions && (
								<Group gap="xs" wrap="nowrap" style={{ flexShrink: 0 }}>
									{actions}
								</Group>
							)}
						</>
					)}
				</Group>
			)}
			<Box style={{ flex: 1, minHeight: 0, overflow: "auto", display: "flex", flexDirection: "column" }}>
				{children}
			</Box>
			{footer && (
				<Box px="md" py="xs" style={{ borderTop: paneBorder, flexShrink: 0 }}>
					{footer}
				</Box>
			)}
		</Box>
	);
}

export interface AsyncStateError {
	title?: ReactNode;
	message: ReactNode;
	requestId?: string;
}

function AsyncStateSkeleton() {
	return (
		<Stack gap="sm">
			{[70, 90, 55].map((width) => (
				<Skeleton key={width} h={12} w={`${width}%`} radius="sm" />
			))}
		</Stack>
	);
}

export function AsyncState({
	loading = false,
	error,
	onRetry,
	empty,
	skeleton,
	children,
}: {
	loading?: boolean;
	error?: AsyncStateError | null;
	onRetry?: () => void;
	empty?: ReactNode;
	skeleton?: ReactNode;
	children: ReactNode;
}) {
	if (loading) return <Box aria-busy="true">{skeleton ?? <AsyncStateSkeleton />}</Box>;
	if (error) {
		return (
			<EmptyState
				size="sm"
				color="red"
				icon={<TbAlertTriangle />}
				withIndicatorBackground
				title={error.title ?? "This didn't load"}
				description={error.message}
			>
				{(onRetry || error.requestId) && (
					<EmptyState.Actions>
						{onRetry && (
							<Button variant="default" size="xs" leftSection={<TbRefresh />} onClick={onRetry}>
								Retry
							</Button>
						)}
						{error.requestId && <CopyableId value={error.requestId} size="xs" />}
					</EmptyState.Actions>
				)}
			</EmptyState>
		);
	}
	if (empty) return <>{empty}</>;
	return <>{children}</>;
}

export interface ConfirmActionDetails {
	reason?: string;
}

interface ConfirmActionProps {
	trigger?: (open: () => void) => ReactNode;
	opened?: boolean;
	onClose?: () => void;
	action: string;
	noun?: CountForms;
	count?: number;
	target?: string;
	title?: ReactNode;
	consequence?: ReactNode;
	phrase?: string;
	reason?: { label?: string; required?: boolean };
	tone?: "danger" | "default";
	confirmLabel?: string;
	onConfirm: (details: ConfirmActionDetails) => void | Promise<void>;
}

export function ConfirmAction({
	trigger,
	opened: controlledOpened,
	onClose,
	action,
	noun,
	count = 1,
	target,
	title,
	consequence,
	phrase,
	reason,
	tone = "default",
	confirmLabel,
	onConfirm,
}: ConfirmActionProps) {
	const [uncontrolledOpened, setUncontrolledOpened] = useState(false);
	const opened = controlledOpened ?? uncontrolledOpened;
	const [phraseValid, setPhraseValid] = useState(false);
	const [reasonText, setReasonText] = useState("");
	const [pending, setPending] = useState(false);
	const [failure, setFailure] = useState<string | null>(null);

	// A fresh dialog every time it opens, whoever opens it
	const [wasOpened, setWasOpened] = useState(opened);
	if (opened !== wasOpened) {
		setWasOpened(opened);
		if (opened) {
			setPhraseValid(false);
			setReasonText("");
			setFailure(null);
		}
	}

	const countedObject = noun ? formatCount(count, noun) : undefined;
	const heading = title ?? `${action} ${target ?? countedObject ?? ""}`.trim().concat("?");
	// With a named target the button doesn't repeat "1": "Archive customer"
	const buttonObject = target !== undefined && count === 1 ? noun?.one : countedObject;
	const buttonLabel = confirmLabel ?? (buttonObject ? `${action} ${buttonObject}` : action);
	const blocked = (phrase !== undefined && !phraseValid) || (reason?.required === true && reasonText.trim() === "");

	const open = () => setUncontrolledOpened(true);
	const dismiss = () => {
		setUncontrolledOpened(false);
		onClose?.();
	};
	const close = () => {
		if (!pending) dismiss();
	};
	const confirm = async () => {
		setPending(true);
		setFailure(null);
		try {
			await onConfirm({ reason: reason ? reasonText.trim() : undefined });
			dismiss();
		} catch (error) {
			setFailure(error instanceof Error ? error.message : "That didn't work. Try again.");
		} finally {
			setPending(false);
		}
	};

	return (
		<>
			{trigger?.(open)}
			<Modal
				opened={opened}
				onClose={close}
				centered
				closeOnClickOutside={!pending}
				closeOnEscape={!pending}
				title={
					<Text span fw={600} size="lg">
						{heading}
					</Text>
				}
			>
				<Stack gap="md">
					{consequence && <Text size="sm">{consequence}</Text>}
					{phrase !== undefined && <TypeToConfirm phrase={phrase} onValidChange={setPhraseValid} />}
					{reason && (
						<Textarea
							label={reason.label ?? "Reason"}
							required={reason.required}
							autosize
							minRows={2}
							value={reasonText}
							onChange={(event) => setReasonText(event.currentTarget.value)}
						/>
					)}
					{failure && (
						<Alert color="red" variant="light" icon={<TbAlertTriangle />}>
							{failure}
						</Alert>
					)}
					<Group justify="flex-end" gap="sm">
						<Button variant="default" onClick={close} disabled={pending}>
							Cancel
						</Button>
						<Button
							color={tone === "danger" ? "red" : undefined}
							loading={pending}
							disabled={blocked}
							onClick={confirm}
						>
							{buttonLabel}
						</Button>
					</Group>
				</Stack>
			</Modal>
		</>
	);
}

export function usePendingAction<Args extends unknown[], Result>(action: (...args: Args) => Result | Promise<Result>) {
	const [pending, setPending] = useState(false);
	const running = useRef(false);
	const run = useCallback(
		async (...args: Args) => {
			if (running.current) return undefined;
			running.current = true;
			setPending(true);
			try {
				return await action(...args);
			} finally {
				running.current = false;
				setPending(false);
			}
		},
		[action],
	);
	return [run, pending] as const;
}

export function useUnsavedChangesGuard(dirty: boolean, message = "You have unsaved changes. Leave without saving?") {
	useEffect(() => {
		if (!dirty) return;
		const warn = (event: BeforeUnloadEvent) => event.preventDefault();
		window.addEventListener("beforeunload", warn);
		return () => window.removeEventListener("beforeunload", warn);
	}, [dirty]);

	return { confirmLeave: () => !dirty || window.confirm(message) };
}

export type DurationUnit = "minute" | "hour" | "day" | "week";

const primitivesAreaWatchers: UserChipUser[] = [users.lea, users.jean, { name: "Paul S." }, { name: "Sara N." }];

const primitivesAreaActivity: {
	actor: Actor;
	onBehalfOf?: { name: string; email?: string };
	text: string;
	at: Date;
}[] = [
	{ actor: { type: "user", name: users.anna.name }, text: "changed the plan", at: ago({ minutes: 2 }) },
	{ actor: { type: "system", name: "nightly-sync" }, text: "matched 18 payments", at: ago({ hours: 3 }) },
	{ actor: { type: "api_key", name: "Production backend" }, text: "created 4 invoices", at: ago({ days: 1 }) },
	{
		actor: { type: "user", name: users.lea.name, color: users.lea.color },
		onBehalfOf: { name: "Marie Dubois", email: "marie@acme.io" },
		text: "updated the billing email",
		at: ago({ days: 3 }),
	},
	{
		actor: { type: "user", name: users.jean.name, color: users.jean.color },
		text: "added a note",
		at: ago({ days: 12 }),
	},
];

const primitivesAreaStatusTotals = {
	active: { customers: 1248, mrr: 18_422_000 },
	trial: { customers: 86, mrr: 0 },
	pastDue: { customers: 14, mrr: 4_312_050 },
	paused: { customers: 31, mrr: 1_195_000 },
};

const primitivesAreaPayload = {
	id: "evt_01HF9A2KQ",
	type: "invoice.payment_failed",
	created: "2026-11-25T09:14:02Z",
	data: {
		object: {
			id: "in_1QzW8kLm",
			customer: "cus_5Tz1Pc",
			amount_due: 312050,
			currency: "eur",
			attempt_count: 2,
			next_payment_attempt: "2026-11-28T09:14:02Z",
		},
	},
	card: "4242424242424242",
	livemode: true,
};

const primitivesAreaRedactions = ["card", /secret/i];

const primitivesAreaFailedPayments = [
	{ id: "in_1QzW8kLm", customer: "Cobalt & Partners", reason: "Card declined", amount: 312050 },
	{ id: "in_1QyT2aBc", customer: "Dune Studio", reason: "Insufficient funds", amount: 98000 },
	{ id: "in_1QxR7dEf", customer: "Nova SAS", reason: "Card expired", amount: 23100 },
	{ id: "in_1QwP4gHi", customer: "Brightline Health", reason: "Card declined", amount: 45000 },
	{ id: "in_1QvN1jKl", customer: "Evergreen Foods", reason: "Authentication required", amount: 127500 },
];

const primitivesAreaPayoutStatus = defineStatusMap({
	paid: ["Paid", "success"],
	inTransit: ["In transit", "info"],
});

const primitivesAreaPayouts = [
	{ id: "po_1QzA8", arrives: fromNow({ days: 2 }), amount: 1_840_000, status: "inTransit" as const },
	{ id: "po_1QyB2", arrives: ago({ days: 5 }), amount: 2_212_450, status: "paid" as const },
	{ id: "po_1QxC7", arrives: ago({ days: 12 }), amount: 1_967_300, status: "paid" as const },
];

function PrimitivesAreaSecretFields() {
	const [revealed, setRevealed] = useState(false);

	return (
		<Card withBorder>
			<Stack gap="lg">
				<SecretField
					label="Webhook signing secret"
					prefix="whsec_"
					lastFour="3f9a"
					revealedValue={revealed ? "whsec_7Kq2Lm9Px4Tz8Wd1Rb3f9a" : undefined}
					onReveal={() => setRevealed(true)}
					onHide={() => setRevealed(false)}
					onRotate={() => setRevealed(false)}
					rotatedAt="2026-10-02T14:20:00Z"
					rotatedBy={users.anna.name}
				/>
				<SecretField label="New API key" revealedValue="gw_live_4Hn8Qa2Zp7Vt1Xc6Lm0e" lastFour="Lm0e" shownOnce />
				<CopyField
					label="Webhook URL"
					description="Paste it in your provider's webhook settings."
					value="https://api.company.com/v1/webhooks/stripe"
				/>
			</Stack>
		</Card>
	);
}

function PrimitivesAreaDangerZone() {
	return (
		<Panel title="Danger zone">
			<Stack gap="md">
				<Group justify="space-between" wrap="nowrap" gap="md">
					<Box miw={0}>
						<Text size="sm" fw={500}>
							Archive 3 customers
						</Text>
						<Text size="xs" c="dimmed">
							Restorable for 30 days.
						</Text>
					</Box>
					<ConfirmAction
						action="Archive"
						noun={{ one: "customer", other: "customers" }}
						count={3}
						consequence="They leave every list and stop syncing with Stripe. You can restore them for 30 days."
						reason={{ required: true }}
						onConfirm={() => new Promise<void>((resolve) => setTimeout(resolve, 900))}
						trigger={(open) => (
							<Button variant="default" size="xs" onClick={open}>
								Archive
							</Button>
						)}
					/>
				</Group>
				<Divider />
				<Group justify="space-between" wrap="nowrap" gap="md">
					<Box miw={0}>
						<Text size="sm" fw={500}>
							Delete Acme Logistics
						</Text>
						<Text size="xs" c="dimmed">
							Can't be undone.
						</Text>
					</Box>
					<ConfirmAction
						tone="danger"
						action="Delete"
						target="Acme Logistics"
						confirmLabel="Delete customer"
						consequence="This deletes its 14 invoices and 6 users. It can't be undone."
						phrase="acme-logistics"
						onConfirm={() => undefined}
						trigger={(open) => (
							<Button color="red" variant="light" size="xs" onClick={open}>
								Delete
							</Button>
						)}
					/>
				</Group>
			</Stack>
		</Panel>
	);
}

function PrimitivesAreaFailedPayments() {
	const [selected, setSelected] = useState(0);
	const [retried, setRetried] = useState<string[]>([]);
	const payments = primitivesAreaFailedPayments;
	const total = payments.reduce((sum, payment) => sum + payment.amount, 0);
	const move = (step: number) => setSelected((current) => Math.min(Math.max(current + step, 0), payments.length - 1));
	const retry = (id: string) => setRetried((current) => (current.includes(id) ? current : [...current, id]));

	const handleKeys = useShortcutScope(
		[
			{ keys: "j", description: "Next payment", handler: () => move(1) },
			{ keys: "k", description: "Previous payment", handler: () => move(-1) },
			{ keys: "r", description: "Retry payment", handler: () => retry(payments[selected].id) },
		],
		{ group: "Failed payments" },
	);

	return (
		<Pane
			h={300}
			title="Failed payments"
			count={payments.length}
			actions={
				<Button
					size="xs"
					variant="default"
					leftSection={<TbRefresh />}
					onClick={() => setRetried(payments.map((payment) => payment.id))}
				>
					Retry all
				</Button>
			}
			footer={
				<Group justify="space-between">
					<Text size="sm" c="dimmed">
						{formatCount(payments.length, { one: "invoice", other: "invoices" })}
					</Text>
					<Text size="sm" fw={500}>
						<MoneyText amount={total} currency="EUR" />
					</Text>
				</Group>
			}
		>
			<Box onKeyDown={handleKeys}>
				{payments.map((payment, index) => (
					<UnstyledButton
						key={payment.id}
						display="block"
						w="100%"
						px="md"
						py="xs"
						aria-current={index === selected ? "true" : undefined}
						onClick={() => setSelected(index)}
						bg={index === selected ? "var(--mantine-primary-color-light)" : undefined}
						style={{ borderBottom: paneBorder }}
					>
						<Group justify="space-between" wrap="nowrap" gap="sm">
							<Box miw={0}>
								<Text size="sm" fw={500} truncate>
									{payment.customer}
								</Text>
								<Text size="xs" c="dimmed" truncate>
									{retried.includes(payment.id) ? "Retry scheduled" : payment.reason}
								</Text>
							</Box>
							<Text size="sm">
								<MoneyText amount={payment.amount} currency="EUR" />
							</Text>
						</Group>
					</UnstyledButton>
				))}
			</Box>
		</Pane>
	);
}

function PrimitivesAreaShortcuts() {
	const shortcuts = useRegisteredShortcuts();
	const groups = [...new Set(shortcuts.map((shortcut) => shortcut.group))];

	return (
		<Panel title="Keyboard shortcuts" description="Keys work while focus is in their list.">
			<Stack gap="md">
				{groups.map((group) => (
					<Stack key={group} gap={6}>
						<Text size="xs" fw={500} c="dimmed">
							{group}
						</Text>
						{shortcuts
							.filter((shortcut) => shortcut.group === group)
							.map((shortcut) => (
								<Group key={shortcut.id} justify="space-between" wrap="nowrap">
									<Text size="sm">{shortcut.description}</Text>
									<ShortcutHint keys={[shortcut.keys, ...(shortcut.alternatives ?? [])]} />
								</Group>
							))}
					</Stack>
				))}
			</Stack>
		</Panel>
	);
}

function PrimitivesAreaPayouts() {
	const [state, setState] = useState("content");

	return (
		<Panel
			title="Payouts"
			flush
			actions={
				<SegmentedControl
					size="xs"
					value={state}
					onChange={setState}
					data={[
						{ label: "Data", value: "content" },
						{ label: "Loading", value: "loading" },
						{ label: "Empty", value: "empty" },
						{ label: "Error", value: "error" },
					]}
				/>
			}
		>
			<Box p={state === "content" ? 0 : "md"}>
				<AsyncState
					loading={state === "loading"}
					error={
						state === "error"
							? { message: "Stripe didn't answer in time. Nothing was changed.", requestId: "req_8Kd2Wq4Zt7" }
							: null
					}
					onRetry={() => setState("content")}
					empty={
						state === "empty" && (
							<EmptyState
								size="sm"
								icon={<TbInbox />}
								withIndicatorBackground
								title="No payouts yet"
								description="Payouts start after the first successful charge."
							/>
						)
					}
				>
					<Table verticalSpacing="sm">
						<Table.Tbody>
							{primitivesAreaPayouts.map((payout) => (
								<Table.Tr key={payout.id}>
									<Table.Td>
										<DateText value={payout.arrives} />
									</Table.Td>
									<Table.Td>
										<StatusBadge value={payout.status} tones={primitivesAreaPayoutStatus} />
									</Table.Td>
									<Table.Td ta="right">
										<MoneyText amount={payout.amount} currency="EUR" />
									</Table.Td>
								</Table.Tr>
							))}
						</Table.Tbody>
					</Table>
				</AsyncState>
			</Box>
		</Panel>
	);
}

export function FoundationsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<Panel
					title="Billing details"
					actions={
						<Button variant="subtle" size="xs">
							Edit details
						</Button>
					}
				>
					<DataList labelWidth={140}>
						<DataList.Item>
							<DataList.ItemLabel>Legal name</DataList.ItemLabel>
							<DataList.ItemValue>Acme Logistics SAS</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Customer ID</DataList.ItemLabel>
							<DataList.ItemValue>
								<CopyableId value="cus_8f2KqL" />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Status</DataList.ItemLabel>
							<DataList.ItemValue>
								<StatusBadge value="active" tones={customerStatus} />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Owner</DataList.ItemLabel>
							<DataList.ItemValue>
								<UserChip user={users.anna} withEmail />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Watching</DataList.ItemLabel>
							<DataList.ItemValue>
								<UserStack users={primitivesAreaWatchers} max={3} />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Plan</DataList.ItemLabel>
							<DataList.ItemValue>Enterprise · annual</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>MRR</DataList.ItemLabel>
							<DataList.ItemValue>
								<Group gap="xs">
									<MoneyText amount={1248000} currency="EUR" wholeUnits />
									<Text span size="sm">
										<PercentDelta value={0.042} />
									</Text>
								</Group>
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Renews</DataList.ItemLabel>
							<DataList.ItemValue>
								<DateText value="2027-03-04T09:00:00Z" />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>PO number</DataList.ItemLabel>
							<DataList.ItemValue>{emptyValue}</DataList.ItemValue>
						</DataList.Item>
					</DataList>
				</Panel>
			</PreviewItem>
			<PreviewItem>
				<Panel title="Customers by status">
					<Stack gap="xs">
						{(Object.keys(primitivesAreaStatusTotals) as (keyof typeof primitivesAreaStatusTotals)[]).map((status) => (
							<Group key={status} justify="space-between" wrap="nowrap">
								<StatusBadge value={status} tones={customerStatus} />
								<Group gap="lg" wrap="nowrap">
									<Text size="sm">
										<NumberText value={primitivesAreaStatusTotals[status].customers} />
									</Text>
									<Text size="sm" c="dimmed" w={64} ta="right">
										<MoneyText amount={primitivesAreaStatusTotals[status].mrr} currency="EUR" compact />
									</Text>
								</Group>
							</Group>
						))}
					</Stack>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<Panel title="Recent activity">
					<Stack gap="md">
						{groupByDay(primitivesAreaActivity, (event) => event.at).map((group) => (
							<Stack key={group.day} gap={6}>
								<Text size="xs" fw={500} c="dimmed">
									{formatDayLabel(group.date)}
								</Text>
								{group.items.map((event) => (
									<Group key={`${event.actor.name}-${event.text}`} justify="space-between" wrap="nowrap" gap="sm">
										<Group gap={6} wrap="nowrap" miw={0}>
											<ActorChip actor={event.actor} onBehalfOf={event.onBehalfOf} />
											<Text size="sm" c="dimmed" truncate>
												{event.text}
											</Text>
										</Group>
										<Text size="xs" c="dimmed" style={{ flexShrink: 0 }}>
											<DateText value={event.at} format="time" />
										</Text>
									</Group>
								))}
							</Stack>
						))}
					</Stack>
				</Panel>
			</PreviewItem>
			<PreviewItem>
				<Panel title="Stripe sync">
					<DataList labelWidth={110}>
						<DataList.Item>
							<DataList.ItemLabel>Customer</DataList.ItemLabel>
							<DataList.ItemValue>
								<TruncatedText value="cus_01HF8Z3K2Q7XWPL4" mode="middle" copyable />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Last export</DataList.ItemLabel>
							<DataList.ItemValue>
								<TruncatedText
									value="exports/2026/11/customers-active-past-due.csv"
									mode="middle"
									head={12}
									tail={14}
								/>
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Note</DataList.ItemLabel>
							<DataList.ItemValue miw={0}>
								<TruncatedText
									maw="100%"
									value="Invoices go to the finance mailbox from December, with the PO number on each one."
								/>
							</DataList.ItemValue>
						</DataList.Item>
					</DataList>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<PrimitivesAreaSecretFields />
			</PreviewItem>
			<PreviewItem span="half">
				<PrimitivesAreaPayouts />
			</PreviewItem>
			<PreviewItem>
				<Card withBorder>
					<EmptyState
						icon={<TbInbox />}
						withIndicatorBackground
						title="No orders yet"
						description="Orders appear here once a customer completes checkout. You can also create one."
					>
						<EmptyState.Actions>
							<Button variant="default" leftSection={<TbFileImport />}>
								Import CSV
							</Button>
							<Button leftSection={<TbPlus />}>Create order</Button>
						</EmptyState.Actions>
					</EmptyState>
				</Card>
			</PreviewItem>
			<PreviewItem>
				<Card withBorder>
					<EmptyState
						icon={<TbSearch />}
						withIndicatorBackground
						title="No customers match"
						description="Nothing is both past due and on the Enterprise plan."
					>
						<EmptyState.Actions>
							<Button variant="default" leftSection={<TbFilterOff />}>
								Clear filters
							</Button>
						</EmptyState.Actions>
					</EmptyState>
				</Card>
			</PreviewItem>
			<PreviewItem span="half">
				<PrimitivesAreaDangerZone />
			</PreviewItem>
			<PreviewItem span="half">
				<Panel title="Changes to Acme Logistics">
					<DiffView
						changes={[
							{ field: "plan", label: "Plan", before: "Growth", after: "Enterprise" },
							{ field: "seats", label: "Seats", before: 20, after: 45 },
							{ field: "billingEmail", label: "Billing email", before: "ops@acme.io", after: "billing@acme.io" },
							{
								field: "address",
								label: "Address",
								before: { street: "14 rue de la République", city: "Lyon", postcode: "69002", country: "FR" },
								after: { street: "8 rue Oberkampf", city: "Paris", postcode: "75011", country: "FR" },
							},
							{ field: "poNumber", label: "PO number", before: null, after: "PO-88213" },
						]}
					/>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<Panel
					title={
						<Text span inherit ff="monospace">
							invoice.payment_failed
						</Text>
					}
					actions={<CopyableId value="evt_01HF9A2KQ" />}
				>
					<JsonViewer value={primitivesAreaPayload} collapsedDepth={2} redact={primitivesAreaRedactions} />
				</Panel>
			</PreviewItem>
			<PreviewItem>
				<Panel title="KYC review">
					<Stack gap="sm">
						{[
							{ customer: "Nova SAS", check: "Document mismatch", due: fromNow({ minutes: 134 }) },
							{ customer: "Brightline Health", check: "Address proof", due: fromNow({ minutes: 38 }) },
							{ customer: "Cobalt & Partners", check: "UBO missing", due: ago({ minutes: 65 }) },
							{
								customer: "Dune Studio",
								check: "New account",
								due: fromNow({ minutes: 192 }),
								met: new Date(),
							},
						].map((item) => (
							<Group key={item.customer} justify="space-between" wrap="nowrap" gap="sm">
								<Box miw={0}>
									<Text size="sm" fw={500} truncate>
										{item.customer}
									</Text>
									<Text size="xs" c="dimmed" truncate>
										{item.check}
									</Text>
								</Box>
								<SlaTimer due={item.due} warnAt="1h" met={item.met} />
							</Group>
						))}
					</Stack>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<PrimitivesAreaFailedPayments />
			</PreviewItem>
			<PreviewItem span="half">
				<PrimitivesAreaShortcuts />
			</PreviewItem>
		</PreviewGrid>
	);
}

type IntlSelectProps = Omit<SelectProps, "data"> & {
	favourites?: string[];
	locale?: string;
};

const intlSelectNoFavourites: string[] = [];

let intlSelectRegionCache: string[] | undefined;

let intlSelectLanguageCache: string[] | undefined;

function intlSelectRegionCodes() {
	if (!intlSelectRegionCache) {
		const names = new Intl.DisplayNames(["en"], { type: "region", fallback: "none" });
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		intlSelectRegionCache = [...letters]
			.flatMap((first) => [...letters].map((second) => first + second))
			.filter((code) => !/^(AA|Q[M-Z]|X[A-JL-Z]|ZZ|EU|EZ|UN)$/.test(code))
			.filter((code) => names.of(code) !== undefined && new Intl.Locale(`und-${code}`).region === code);
	}
	return intlSelectRegionCache;
}

function intlSelectLanguageCodes() {
	if (!intlSelectLanguageCache) {
		const names = new Intl.DisplayNames(["en"], { type: "language", fallback: "none" });
		const letters = "abcdefghijklmnopqrstuvwxyz";
		intlSelectLanguageCache = [...letters]
			.flatMap((first) => [...letters].map((second) => first + second))
			.filter((code) => names.of(code) !== undefined && new Intl.Locale(code).language === code);
	}
	return intlSelectLanguageCache;
}

function intlSelectData(codes: string[], label: (code: string) => string, favourites: string[], allLabel: string) {
	const items = codes
		.map((code) => ({ value: code, label: label(code) }))
		.sort((first, second) => first.label.localeCompare(second.label));
	if (favourites.length === 0) return items;
	const pinned = favourites.flatMap((code) => items.filter((item) => item.value === code));
	return [
		{ group: "Pinned", items: pinned },
		{ group: allLabel, items: items.filter((item) => !favourites.includes(item.value)) },
	] satisfies ComboboxData;
}

function intlSelectRenderOption(detail: (code: string) => string): SelectProps["renderOption"] {
	return ({ option }) => (
		<Group justify="space-between" wrap="nowrap" w="100%" gap="sm">
			<Text size="sm" truncate>
				{option.label}
			</Text>
			<Text size="xs" c="dimmed" ff="monospace" style={{ flexShrink: 0 }}>
				{detail(option.value)}
			</Text>
		</Group>
	);
}

function useIntlSelectLocale(locale?: string) {
	const settings = useFormatSettings();
	return locale ?? settings.locale;
}

const intlSelectCodeDetail = (code: string) => code;

export function CountrySelect({ favourites = intlSelectNoFavourites, locale, ...props }: IntlSelectProps) {
	const resolved = useIntlSelectLocale(locale);
	const data = useMemo(() => {
		const names = new Intl.DisplayNames(resolved, { type: "region" });
		return intlSelectData(intlSelectRegionCodes(), (code) => names.of(code) ?? code, favourites, "All countries");
	}, [resolved, favourites]);
	return <Select searchable data={data} renderOption={intlSelectRenderOption(intlSelectCodeDetail)} {...props} />;
}

export function CurrencySelect({ favourites = intlSelectNoFavourites, locale, ...props }: IntlSelectProps) {
	const resolved = useIntlSelectLocale(locale);
	const data = useMemo(() => {
		const names = new Intl.DisplayNames(resolved, { type: "currency" });
		return intlSelectData(
			Intl.supportedValuesOf("currency"),
			(code) => names.of(code) ?? code,
			favourites,
			"All currencies",
		);
	}, [resolved, favourites]);
	return <Select searchable data={data} renderOption={intlSelectRenderOption(intlSelectCodeDetail)} {...props} />;
}

function timezoneSelectOffset(timeZone: string) {
	return (
		new Intl.DateTimeFormat("en", { timeZone, timeZoneName: "shortOffset" })
			.formatToParts(new Date())
			.find((part) => part.type === "timeZoneName")?.value ?? ""
	);
}

export function TimezoneSelect({ favourites = intlSelectNoFavourites, locale: _locale, ...props }: IntlSelectProps) {
	const { data, offsets } = useMemo(() => {
		const zones = Intl.supportedValuesOf("timeZone");
		return {
			data: intlSelectData(zones, (zone) => zone.replaceAll("_", " "), favourites, "All time zones"),
			offsets: new Map(zones.map((zone) => [zone, timezoneSelectOffset(zone)])),
		};
	}, [favourites]);
	return (
		<Select
			searchable
			data={data}
			renderOption={intlSelectRenderOption((zone) => offsets.get(zone) ?? "")}
			{...props}
		/>
	);
}

export function LanguageSelect({ favourites = intlSelectNoFavourites, locale, ...props }: IntlSelectProps) {
	const resolved = useIntlSelectLocale(locale);
	const data = useMemo(() => {
		const names = new Intl.DisplayNames(resolved, { type: "language" });
		return intlSelectData(intlSelectLanguageCodes(), (code) => names.of(code) ?? code, favourites, "All languages");
	}, [resolved, favourites]);
	return <Select searchable data={data} renderOption={intlSelectRenderOption(intlSelectCodeDetail)} {...props} />;
}

function numberSeparators(locale?: string) {
	const parts = new Intl.NumberFormat(locale).formatToParts(1234567.5);
	return {
		group: parts.find((part) => part.type === "group")?.value ?? ",",
		decimal: parts.find((part) => part.type === "decimal")?.value ?? ".",
	};
}

function currencySymbol(currency: string, locale?: string) {
	return (
		new Intl.NumberFormat(locale, { style: "currency", currency })
			.formatToParts(0)
			.find((part) => part.type === "currency")?.value ?? currency
	);
}

type NumberInputStyles = NumberInputProps["styles"];

function withTabularInput(styles: NumberInputStyles): NumberInputStyles {
	if (typeof styles === "function") {
		return (theme, props, context) => {
			const resolved = styles(theme, props, context);
			return { ...resolved, input: { ...tabularStyle, ...resolved.input } };
		};
	}
	return { ...styles, input: { ...tabularStyle, ...styles?.input } };
}

type MoneyInputProps = Omit<
	NumberInputProps,
	| "value"
	| "defaultValue"
	| "onChange"
	| "decimalScale"
	| "fixedDecimalScale"
	| "allowDecimal"
	| "thousandSeparator"
	| "decimalSeparator"
	| "leftSection"
	| "rightSection"
	| "rightSectionWidth"
> & {
	value?: number | null;
	defaultValue?: number | null;
	onChange?: (value: number | null) => void;
	currency: string;
	onCurrencyChange?: (currency: string) => void;
	currencies?: string[];
	locale?: string;
};

const moneyInputDefaultCurrencies = ["EUR", "USD", "GBP"];

export function MoneyInput({
	value: controlledValue,
	defaultValue,
	onChange: controlledOnChange,
	currency,
	onCurrencyChange,
	currencies = moneyInputDefaultCurrencies,
	locale,
	styles,
	...props
}: MoneyInputProps) {
	const [value, onChange] = useUncontrolled<number | null>({
		value: controlledValue,
		defaultValue,
		finalValue: null,
		onChange: controlledOnChange,
	});
	const settings = useFormatSettings();
	const resolved = locale ?? settings.locale;
	const digits = currencyFractionDigits(currency, resolved);
	const separators = useMemo(() => numberSeparators(resolved), [resolved]);
	const options = currencies.includes(currency) ? currencies : [currency, ...currencies];

	return (
		<NumberInput
			{...props}
			value={value === null ? "" : value / 10 ** digits}
			onChange={(next) => {
				if (next === "") onChange(null);
				else if (Number.isFinite(Number(next))) onChange(Math.round(Number(next) * 10 ** digits));
			}}
			decimalScale={digits}
			fixedDecimalScale={digits > 0}
			allowDecimal={digits > 0}
			thousandSeparator={separators.group}
			decimalSeparator={separators.decimal}
			hideControls
			leftSection={
				<Text size="sm" c="dimmed">
					{currencySymbol(currency, resolved)}
				</Text>
			}
			rightSection={
				onCurrencyChange && (
					<NativeSelect
						variant="unstyled"
						aria-label="Currency"
						data={options}
						value={currency}
						rightSectionWidth={24}
						styles={{ input: { width: 76 } }}
						onChange={(event) => {
							const next = event.currentTarget.value;
							const nextDigits = currencyFractionDigits(next, resolved);
							if (value !== null && nextDigits !== digits) {
								onChange(Math.round((value / 10 ** digits) * 10 ** nextDigits));
							}
							onCurrencyChange(next);
						}}
					/>
				)
			}
			rightSectionWidth={onCurrencyChange ? 76 : undefined}
			rightSectionPointerEvents="all"
			styles={withTabularInput(styles)}
		/>
	);
}

const durationUnitMinutes: Record<DurationUnit, number> = { minute: 1, hour: 60, day: 1440, week: 10_080 };

const durationInputDefaultUnits: DurationUnit[] = ["minute", "hour", "day"];

function durationInputBestUnit(minutes: number | null, units: DurationUnit[]) {
	if (!minutes) return units[0];
	return [...units].reverse().find((unit) => minutes % durationUnitMinutes[unit] === 0) ?? units[0];
}

type DurationInputProps = Omit<
	NumberInputProps,
	"value" | "defaultValue" | "onChange" | "rightSection" | "rightSectionWidth"
> & {
	value?: number | null;
	defaultValue?: number | null;
	onChange?: (minutes: number | null) => void;
	units?: DurationUnit[];
	locale?: string;
};

export function DurationInput({
	value: controlledValue,
	defaultValue,
	onChange: controlledOnChange,
	units = durationInputDefaultUnits,
	locale,
	styles,
	...props
}: DurationInputProps) {
	const [value, onChange] = useUncontrolled<number | null>({
		value: controlledValue,
		defaultValue,
		finalValue: null,
		onChange: controlledOnChange,
	});
	const settings = useFormatSettings();
	const resolved = locale ?? settings.locale;
	const [unit, setUnit] = useState<DurationUnit>(() => durationInputBestUnit(value, units));
	const shown = value === null ? null : Number((value / durationUnitMinutes[unit]).toFixed(2));
	const unitLabel = (option: DurationUnit) =>
		new Intl.NumberFormat(resolved, { style: "unit", unit: option, unitDisplay: "long" })
			.formatToParts(value === null ? 2 : value / durationUnitMinutes[option])
			.find((part) => part.type === "unit")?.value ?? option;

	return (
		<NumberInput
			{...props}
			value={shown ?? ""}
			onChange={(next) => {
				if (next === "") onChange(null);
				else if (Number.isFinite(Number(next))) onChange(Math.round(Number(next) * durationUnitMinutes[unit]));
			}}
			min={0}
			decimalScale={2}
			hideControls
			rightSection={
				<NativeSelect
					variant="unstyled"
					aria-label="Unit"
					data={units.map((option) => ({ value: option, label: unitLabel(option) }))}
					value={unit}
					rightSectionWidth={24}
					styles={{ input: { width: 96 } }}
					onChange={(event) => setUnit(event.currentTarget.value as DurationUnit)}
				/>
			}
			rightSectionWidth={96}
			rightSectionPointerEvents="all"
			styles={withTabularInput(styles)}
		/>
	);
}

export interface PasswordRuleContext {
	email?: string;
	minLength?: number;
}

export interface PasswordRuleResult {
	id: "length" | "email" | "common";
	label: string;
	passed: boolean;
}

const passwordRulesCommon = new Set([
	"password",
	"passw0rd",
	"123456",
	"12345678",
	"123456789",
	"qwerty",
	"azerty",
	"letmein",
	"welcome",
	"iloveyou",
	"admin",
	"monkey",
	"football",
	"abc123",
	"111111",
	"000000",
	"dragon",
	"sunshine",
	"princess",
	"trustno1",
]);

export function usePasswordRules(password: string, { email, minLength = 12 }: PasswordRuleContext = {}) {
	return useMemo(() => {
		const lower = password.toLowerCase();
		const localPart = email?.split("@")[0]?.toLowerCase() ?? "";
		const rules: PasswordRuleResult[] = [
			{ id: "length", label: `At least ${minLength} characters`, passed: password.length >= minLength },
		];
		if (email) {
			rules.push({
				id: "email",
				label: "Different from your email",
				passed: password.length > 0 && (localPart.length < 3 || !lower.includes(localPart)),
			});
		}
		rules.push({
			id: "common",
			label: "Not a common password",
			passed:
				password.length > 0 &&
				!passwordRulesCommon.has(lower) &&
				!passwordRulesCommon.has(lower.replace(/[\d!@#$%^&*.?_-]+$/, "")),
		});
		return { rules, valid: rules.every((rule) => rule.passed) };
	}, [password, email, minLength]);
}

export function PasswordRules({ password, context }: { password: string; context?: PasswordRuleContext }) {
	const { rules } = usePasswordRules(password, context);

	return (
		<Stack gap={4} aria-live="polite">
			{rules.map((rule) => {
				const color = rule.passed ? "var(--mantine-color-green-text)" : "var(--mantine-color-dimmed)";
				return (
					<Group key={rule.id} gap={6} wrap="nowrap" style={{ color }}>
						{rule.passed ? <TbCheck aria-hidden /> : <TbX aria-hidden />}
						<Text size="xs" c={color}>
							{rule.label}
							<VisuallyHidden>{rule.passed ? ", done" : ", not yet"}</VisuallyHidden>
						</Text>
					</Group>
				);
			})}
		</Stack>
	);
}

function PrimitivesAreaPaymentTerms() {
	const [creditLimit, setCreditLimit] = useState<number | null>(1_500_000);
	const [currency, setCurrency] = useState("EUR");
	const [minimumPayout, setMinimumPayout] = useState<number | null>(10_000);
	const [reminderAfter, setReminderAfter] = useState<number | null>(4320);
	const [escalateAfter, setEscalateAfter] = useState<number | null>(120);

	return (
		<Panel title="Payment terms">
			<Stack gap="sm">
				<MoneyInput
					label="Credit limit"
					value={creditLimit}
					onChange={setCreditLimit}
					currency={currency}
					onCurrencyChange={setCurrency}
					currencies={["EUR", "USD", "GBP", "JPY"]}
				/>
				<MoneyInput label="Minimum payout" value={minimumPayout} onChange={setMinimumPayout} currency="USD" />
				<DurationInput label="Send a reminder after" value={reminderAfter} onChange={setReminderAfter} />
				<DurationInput label="Escalate unanswered claims after" value={escalateAfter} onChange={setEscalateAfter} />
			</Stack>
		</Panel>
	);
}

function PrimitivesAreaChangePassword() {
	const [password, setPassword] = useState("anna2026!");
	const context = { email: users.anna.email };
	const { valid } = usePasswordRules(password, context);

	return (
		<Panel title="Change password">
			<Stack gap="sm">
				<PasswordInput
					label="New password"
					autoComplete="new-password"
					value={password}
					onChange={(event) => setPassword(event.currentTarget.value)}
				/>
				<PasswordRules password={password} context={context} />
				<Button disabled={!valid} style={{ alignSelf: "flex-start" }}>
					Change password
				</Button>
			</Stack>
		</Panel>
	);
}

export interface EntityOption {
	id: string;
	name: string;
	description?: ReactNode;
	icon?: ReactNode;
	color?: MantineColor;
	status?: ReactNode;
}

interface EntitySelectCommonProps {
	label?: ReactNode;
	"aria-label"?: string;
	description?: ReactNode;
	placeholder?: string;
	error?: ReactNode;
	disabled?: boolean;
	search: (query: string) => Promise<EntityOption[]>;
	recents?: EntityOption[];
	onCreate?: (query: string) => void;
	noun?: CountForms;
	defaultDropdownOpened?: boolean;
	comboboxProps?: ComboboxProps;
}

type EntitySelectProps = EntitySelectCommonProps &
	(
		| { multiple?: false; value: EntityOption | null; onChange: (value: EntityOption | null) => void }
		| { multiple: true; value: EntityOption[]; onChange: (value: EntityOption[]) => void }
	);

const entitySelectCreateValue = "entity-select-create";

function EntitySelectAvatar({ option, size }: { option: EntityOption; size: number }) {
	return (
		<Avatar
			size={size}
			radius={option.icon ? "sm" : "xl"}
			name={option.icon ? undefined : option.name}
			color={option.color ?? "initials"}
		>
			{option.icon}
		</Avatar>
	);
}

export function EntitySelect(props: EntitySelectProps) {
	const {
		label,
		description,
		placeholder,
		error,
		disabled,
		search,
		recents = [],
		onCreate,
		noun = { one: "result", other: "results" },
		defaultDropdownOpened,
		comboboxProps,
	} = props;
	const accessibleName = props["aria-label"] ?? (typeof label === "string" ? label : undefined);
	const combobox = useCombobox({
		defaultOpened: defaultDropdownOpened,
		onDropdownClose: () => combobox.resetSelectedOption(),
	});
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<EntityOption[]>([]);
	const [loading, setLoading] = useState(false);
	const latestRequest = useRef(0);

	const selected = props.multiple ? props.value : props.value ? [props.value] : [];
	const selectedIds = new Set(selected.map((option) => option.id));
	const trimmed = query.trim();
	const showingRecents = trimmed === "";
	const options = (showingRecents ? recents : results).filter(
		(option) => !(props.multiple && selectedIds.has(option.id)),
	);
	const exactMatch = results.some((option) => option.name.toLowerCase() === trimmed.toLowerCase());
	const canCreate = Boolean(onCreate) && !showingRecents && !loading && !exactMatch;

	const runSearch = useDebouncedCallback(async (text: string) => {
		latestRequest.current += 1;
		const request = latestRequest.current;
		try {
			const found = await search(text);
			if (request === latestRequest.current) setResults(found);
		} catch {
			if (request === latestRequest.current) setResults([]);
		} finally {
			if (request === latestRequest.current) setLoading(false);
		}
	}, 200);

	const changeQuery = (next: string) => {
		setQuery(next);
		combobox.openDropdown();
		combobox.updateSelectedOptionIndex();
		if (next.trim() === "") {
			latestRequest.current += 1;
			setResults([]);
			setLoading(false);
			return;
		}
		setLoading(true);
		runSearch(next.trim());
	};

	const choose = (id: string) => {
		if (id === entitySelectCreateValue) {
			onCreate?.(trimmed);
			setQuery("");
			combobox.closeDropdown();
			return;
		}
		const option = [...recents, ...results].find((candidate) => candidate.id === id);
		if (!option) return;
		setQuery("");
		if (props.multiple) {
			props.onChange([...props.value, option]);
			combobox.resetSelectedOption();
		} else {
			props.onChange(option);
			combobox.closeDropdown();
		}
	};

	const renderOption = (option: EntityOption) => (
		<Combobox.Option key={option.id} value={option.id} active={selectedIds.has(option.id)}>
			<Group gap="sm" wrap="nowrap">
				<EntitySelectAvatar option={option} size={28} />
				<Box miw={0} style={{ flex: 1 }}>
					<Highlight highlight={trimmed} size="sm" truncate>
						{option.name}
					</Highlight>
					{option.description && (
						<Text size="xs" c="dimmed" truncate>
							{option.description}
						</Text>
					)}
				</Box>
				{option.status}
			</Group>
		</Combobox.Option>
	);

	const dropdown = (
		<Combobox.Dropdown>
			<Combobox.Options mah={300} style={{ overflowY: "auto" }}>
				{showingRecents && options.length > 0 ? (
					<Combobox.Group label="Recent">{options.map(renderOption)}</Combobox.Group>
				) : (
					options.map(renderOption)
				)}
				{showingRecents && options.length === 0 && <Combobox.Empty>Type to search {noun.other}</Combobox.Empty>}
				{!showingRecents && loading && options.length === 0 && (
					<Combobox.Empty>
						<Group gap="xs" justify="center">
							<Loader size="xs" />
							Searching
						</Group>
					</Combobox.Empty>
				)}
				{!showingRecents && !loading && options.length === 0 && (
					<Combobox.Empty>
						No {noun.other} match “{trimmed}”
					</Combobox.Empty>
				)}
				{canCreate && (
					<Combobox.Option value={entitySelectCreateValue}>
						<Group gap="xs" wrap="nowrap">
							<TbPlus aria-hidden />
							<Text size="sm" truncate>
								Create “{trimmed}”
							</Text>
						</Group>
					</Combobox.Option>
				)}
			</Combobox.Options>
		</Combobox.Dropdown>
	);

	if (props.multiple) {
		const { value, onChange } = props;
		return (
			<Combobox store={combobox} onOptionSubmit={choose} {...comboboxProps}>
				<Combobox.DropdownTarget>
					<PillsInput
						label={label}
						description={description}
						error={error}
						disabled={disabled}
						onClick={() => combobox.openDropdown()}
						rightSection={loading ? <Loader size="xs" /> : <Combobox.Chevron />}
						rightSectionPointerEvents="none"
					>
						<Pill.Group>
							{value.map((option) => (
								<Pill
									key={option.id}
									withRemoveButton
									removeButtonProps={{ "aria-label": `Remove ${option.name}` }}
									onRemove={() => onChange(value.filter((candidate) => candidate.id !== option.id))}
								>
									{option.name}
								</Pill>
							))}
							<Combobox.EventsTarget>
								<PillsInput.Field
									value={query}
									placeholder={value.length === 0 ? placeholder : undefined}
									aria-label={accessibleName}
									onChange={(event) => changeQuery(event.currentTarget.value)}
									onFocus={() => combobox.openDropdown()}
									onBlur={() => {
										combobox.closeDropdown();
										setQuery("");
									}}
									onKeyDown={(event) => {
										if (event.key === "Backspace" && query === "" && value.length > 0) {
											event.preventDefault();
											onChange(value.slice(0, -1));
										}
									}}
								/>
							</Combobox.EventsTarget>
						</Pill.Group>
					</PillsInput>
				</Combobox.DropdownTarget>
				{dropdown}
			</Combobox>
		);
	}

	const { value, onChange } = props;
	return (
		<Combobox store={combobox} onOptionSubmit={choose} {...comboboxProps}>
			<Combobox.Target>
				<InputBase
					label={label}
					aria-label={label ? undefined : accessibleName}
					description={description}
					error={error}
					disabled={disabled}
					placeholder={value?.name ?? placeholder}
					value={combobox.dropdownOpened ? query : (value?.name ?? "")}
					leftSection={
						value && !combobox.dropdownOpened ? <EntitySelectAvatar option={value} size={20} /> : <TbSearch />
					}
					rightSection={
						loading ? (
							<Loader size="xs" />
						) : value && !disabled ? (
							<CloseButton
								size="sm"
								aria-label="Clear"
								onMouseDown={(event) => event.preventDefault()}
								onClick={() => onChange(null)}
							/>
						) : (
							<Combobox.Chevron />
						)
					}
					rightSectionPointerEvents={value && !loading ? "all" : "none"}
					onChange={(event) => changeQuery(event.currentTarget.value)}
					onClick={() => combobox.openDropdown()}
					onFocus={() => combobox.openDropdown()}
					onBlur={() => {
						combobox.closeDropdown();
						setQuery("");
					}}
				/>
			</Combobox.Target>
			{dropdown}
		</Combobox>
	);
}

const tablesEntityPlans: Record<string, string> = {
	cus_8f2KqL: "Enterprise · Paris",
	cus_3Hn7Wd: "Growth · Boston",
	cus_5Tz1Pc: "Growth · Lyon",
	cus_1Qa9Ds: "Starter · Lisbon",
	cus_6Re4Ef: "Enterprise · Berlin",
	cus_2Nv8Ns: "Starter · Nantes",
};

const tablesEntityCustomers: EntityOption[] = [
	...customers.map((customer) => ({
		id: customer.id,
		name: customer.name,
		description: `${customer.id} · ${tablesEntityPlans[customer.id]}`,
		status: <StatusBadge value={customer.status} tones={customerStatus} size="xs" />,
	})),
	{
		id: "cus_4Ac2Ly",
		name: "Acme Logistics",
		description: "cus_4Ac2Ly · Starter · Lyon",
		status: <StatusBadge value="paused" tones={customerStatus} size="xs" />,
	},
];

const tablesEntityUsers: EntityOption[] = Object.values(users).map((user) => ({
	id: user.id,
	name: user.name,
	description: user.email,
	color: user.color,
}));

function tablesEntitySearch(options: EntityOption[]) {
	return (query: string) =>
		new Promise<EntityOption[]>((resolve) => {
			const needle = query.toLowerCase();
			window.setTimeout(
				() =>
					resolve(
						options.filter((option) =>
							`${option.name} ${option.id} ${typeof option.description === "string" ? option.description : ""}`
								.toLowerCase()
								.includes(needle),
						),
					),
				350,
			);
		});
}

function TablesEntitySelectDemo() {
	const [customer, setCustomer] = useState<EntityOption | null>(null);
	const [notify, setNotify] = useState<EntityOption[]>([tablesEntityUsers[1]]);

	return (
		<Panel title="New claim">
			<Stack gap="md">
				<EntitySelect
					multiple
					label="Notify"
					placeholder="Add people"
					noun={{ one: "person", other: "people" }}
					value={notify}
					onChange={setNotify}
					search={tablesEntitySearch(tablesEntityUsers)}
					recents={tablesEntityUsers}
				/>
				<EntitySelect
					label="Customer"
					placeholder="Search name or ID"
					noun={{ one: "customer", other: "customers" }}
					value={customer}
					onChange={setCustomer}
					search={tablesEntitySearch(tablesEntityCustomers)}
					recents={[tablesEntityCustomers[0], tablesEntityCustomers[6], tablesEntityCustomers[2]]}
					onCreate={() => undefined}
					defaultDropdownOpened
					comboboxProps={{ withinPortal: false }}
				/>
				<Box h={240} />
			</Stack>
		</Panel>
	);
}

export interface FormSectionProps {
	title: ReactNode;
	description?: ReactNode;
	children: ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
	return (
		<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
			<Grid.Col span={{ base: 12, md: 4 }}>
				<Title order={5}>{title}</Title>
				{description && (
					<Text size="sm" c="dimmed" mt={4}>
						{description}
					</Text>
				)}
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 8 }}>{children}</Grid.Col>
		</Grid>
	);
}

export interface SaveBarProps {
	dirty: boolean;
	saving?: boolean;
	changesCount?: number;
	onSave: () => void;
	onDiscard: () => void;
	saveLabel?: string;
}

export function SaveBar({
	dirty,
	saving = false,
	changesCount,
	onSave,
	onDiscard,
	saveLabel = "Save changes",
}: SaveBarProps) {
	useUnsavedChangesGuard(dirty);

	if (!dirty) return null;

	return (
		<Group
			justify="space-between"
			wrap="nowrap"
			gap="sm"
			px="lg"
			py="sm"
			pos="sticky"
			bottom={0}
			bg="var(--mantine-color-body)"
			style={{ borderTop: "1px solid var(--mantine-color-default-border)", zIndex: 1 }}
		>
			<Group gap={6} wrap="nowrap" c="dimmed">
				<TbInfoCircle aria-hidden />
				<Text size="sm">
					{changesCount
						? formatCount(changesCount, { one: "unsaved change", other: "unsaved changes" })
						: "You have unsaved changes"}
				</Text>
			</Group>
			<Group gap="sm" wrap="nowrap">
				<Button variant="default" onClick={onDiscard} disabled={saving}>
					Discard
				</Button>
				<Button onClick={onSave} loading={saving}>
					{saveLabel}
				</Button>
			</Group>
		</Group>
	);
}

export function FormErrorSummary({
	errors,
	onFocusField,
}: {
	errors: Record<string, ReactNode>;
	onFocusField: (path: string) => void;
}) {
	const entries = Object.entries(errors).filter(([, error]) => error);
	if (entries.length === 0) return null;

	return (
		<Alert
			color="red"
			icon={<TbAlertCircle />}
			title={`Fix ${formatCount(entries.length, { one: "field", other: "fields" })} to save`}
		>
			<Stack gap={4} align="flex-start">
				{entries.map(([path, error]) => (
					<Anchor
						key={path}
						component="button"
						type="button"
						size="sm"
						c="inherit"
						underline="always"
						onClick={() => onFocusField(path)}
					>
						{error}
					</Anchor>
				))}
			</Stack>
		</Alert>
	);
}

const formSectionSavedBilling = {
	legalName: "Acme Logistics",
	country: "FR",
	vat: "FR40 123456789",
	ownerId: users.anna.id,
	billingContacts: ["billing@acme.io", "cfo@acme.io"],
	creditLimit: 1_500_000 as number | null,
	paymentTerms: 43_200 as number | null,
};

type FormSectionBillingValues = typeof formSectionSavedBilling;

const formSectionEditedBilling: FormSectionBillingValues = {
	...formSectionSavedBilling,
	legalName: "Acme Logistics SAS",
	vat: "FR40 1234",
};

function formSectionServerErrors(values: FormSectionBillingValues): Record<string, string> {
	if (values.country === "FR" && values.vat.replaceAll(" ", "").length !== 13) {
		return { vat: "VAT number must be 13 characters for France" };
	}
	return {};
}

const formSectionPaymentTermUnits: DurationUnit[] = ["day", "week"];

const formSectionOwnerOptions = Object.values(users).map((user) => ({ value: user.id, label: user.name }));

function FormSectionBillingExample() {
	const [saved, setSaved] = useState(formSectionSavedBilling);
	// Starts right after a save the API rejected: two fields edited, one server error
	const form = useForm({
		mode: "controlled",
		initialValues: formSectionEditedBilling,
		initialErrors: formSectionServerErrors(formSectionEditedBilling),
		validate: {
			legalName: (value) => (value.trim().length < 2 ? "Enter the legal name, at least 2 characters" : null),
			billingContacts: (value) => (value.length === 0 ? "Add at least one billing contact" : null),
		},
	});

	const values = form.getValues();
	const changed = (Object.keys(saved) as (keyof FormSectionBillingValues)[]).filter(
		(key) => JSON.stringify(values[key]) !== JSON.stringify(saved[key]),
	);
	const focusField = (path: string) => form.getInputNode(path)?.focus();

	const save = () => {
		const client = form.validate();
		const errors = client.hasErrors ? client.errors : formSectionServerErrors(values);
		const firstInvalid = Object.keys(errors)[0];
		if (firstInvalid) {
			form.setErrors(errors);
			focusField(firstInvalid);
			return;
		}
		setSaved(values);
	};

	const discard = () => {
		form.setValues(saved);
		form.clearErrors();
	};

	return (
		<Card withBorder p={0}>
			<Stack gap="lg" p="lg">
				<FormErrorSummary errors={form.errors} onFocusField={focusField} />
				<FormSection title="Billing" description="Used on invoices.">
					<Stack>
						<SimpleGrid type="container" cols={{ base: 1, "420px": 2 }}>
							<TextInput label="Legal name" key={form.key("legalName")} {...form.getInputProps("legalName")} />
							<CountrySelect
								label="Country"
								favourites={["FR", "DE", "ES"]}
								allowDeselect={false}
								key={form.key("country")}
								{...form.getInputProps("country")}
							/>
						</SimpleGrid>
						<TextInput
							label="VAT number"
							styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
							key={form.key("vat")}
							{...form.getInputProps("vat")}
						/>
						<Select
							label="Account owner"
							data={formSectionOwnerOptions}
							renderOption={({ option }) => {
								const user = Object.values(users).find((candidate) => candidate.id === option.value);
								return user ? <UserChip user={user} /> : option.label;
							}}
							allowDeselect={false}
							key={form.key("ownerId")}
							{...form.getInputProps("ownerId")}
						/>
						<TagsInput
							label="Billing contacts"
							description="Every invoice is sent to these addresses."
							key={form.key("billingContacts")}
							{...form.getInputProps("billingContacts")}
						/>
						<SimpleGrid type="container" cols={{ base: 1, "420px": 2 }}>
							<MoneyInput
								label="Credit limit"
								description="New invoices are held above it."
								currency="EUR"
								key={form.key("creditLimit")}
								{...form.getInputProps("creditLimit")}
							/>
							<DurationInput
								label="Payment terms"
								description="Time until an invoice is due."
								units={formSectionPaymentTermUnits}
								key={form.key("paymentTerms")}
								{...form.getInputProps("paymentTerms")}
							/>
						</SimpleGrid>
					</Stack>
				</FormSection>
			</Stack>
			<SaveBar
				dirty={changed.length > 0}
				changesCount={changed.length}
				onDiscard={discard}
				onSave={save}
				saveLabel="Save customer"
			/>
		</Card>
	);
}

const formSectionContactFields = ["firstName", "lastName", "email", "notes"] as const;

function FormSectionContactExample() {
	const form = useForm({
		mode: "controlled",
		initialValues: { firstName: "Marie", lastName: "Dubois", email: "marie.dubois@acme.io", notes: "" },
		validate: {
			email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : "Enter an email address, such as name@company.com"),
		},
	});
	const changesCount = formSectionContactFields.filter((field) => form.isDirty(field)).length;

	return (
		<Card withBorder p={0}>
			<Box p="lg">
				<FormSection title="Contact information" description="Who we contact about invoices and incidents.">
					<Stack>
						<SimpleGrid type="container" cols={{ base: 1, "360px": 2 }}>
							<TextInput label="First name" key={form.key("firstName")} {...form.getInputProps("firstName")} />
							<TextInput label="Last name" key={form.key("lastName")} {...form.getInputProps("lastName")} />
						</SimpleGrid>
						<TextInput label="Email" key={form.key("email")} {...form.getInputProps("email")} />
						<Textarea
							label={
								<>
									Notes{" "}
									<Text span size="sm" c="dimmed">
										(optional)
									</Text>
								</>
							}
							autosize
							minRows={2}
							key={form.key("notes")}
							{...form.getInputProps("notes")}
						/>
					</Stack>
				</FormSection>
			</Box>
			<SaveBar
				dirty={form.isDirty()}
				changesCount={changesCount}
				onDiscard={() => form.reset()}
				onSave={() => {
					if (form.validate().hasErrors) return;
					form.setInitialValues(form.getValues());
					form.resetDirty(form.getValues());
				}}
				saveLabel="Save contact"
			/>
		</Card>
	);
}

export interface StepFlowStep {
	id: string;
	title: string;
	content: ReactNode;
	validate?: () => boolean;
}

export interface StepFlowProps {
	steps: StepFlowStep[];
	active: number;
	onStepChange: (index: number) => void;
	onFinish: () => void;
	reviewStep: ReactNode;
	draft?: { savedAt: Date | null; onSave: () => void };
	finishLabel?: string;
}

export function StepFlow({
	steps,
	active,
	onStepChange,
	onFinish,
	reviewStep,
	draft,
	finishLabel = "Finish",
}: StepFlowProps) {
	const reviewIndex = steps.length;
	const goTo = (index: number) => {
		draft?.onSave();
		onStepChange(index);
	};
	const next = () => {
		if (active === reviewIndex) {
			onFinish();
			return;
		}
		if (steps[active].validate?.() === false) return;
		goTo(active + 1);
	};

	return (
		<Stack gap="lg">
			<Stepper
				active={active}
				onStepClick={(index) => {
					if (index < active) goTo(index);
				}}
				allowNextStepsSelect={false}
				size="sm"
			>
				{steps.map((step) => (
					<Stepper.Step key={step.id} label={step.title}>
						<Box pt="md">{step.content}</Box>
					</Stepper.Step>
				))}
				<Stepper.Step label="Review">
					<Box pt="md">{reviewStep}</Box>
				</Stepper.Step>
			</Stepper>
			<Group justify="space-between" wrap="nowrap">
				<Text size="xs" c="dimmed">
					{draft?.savedAt && (
						<>
							Draft saved <RelativeTime value={draft.savedAt} />
						</>
					)}
				</Text>
				<Group gap="sm" wrap="nowrap">
					<Button variant="default" onClick={() => goTo(active - 1)} disabled={active === 0}>
						Back
					</Button>
					<Button onClick={next}>{active === reviewIndex ? finishLabel : "Continue"}</Button>
				</Group>
			</Group>
		</Stack>
	);
}

const stepFlowPlans = [
	{ value: "starter", label: "Starter" },
	{ value: "growth", label: "Growth" },
	{ value: "pro", label: "Pro" },
	{ value: "enterprise", label: "Enterprise" },
];

const stepFlowEmail = /^\S+@\S+\.\S+$/;

const stepFlowEmptyCustomer = {
	legalName: "",
	country: "FR",
	billingEmail: "",
	plan: "growth",
	invites: [] as string[],
};

function StepFlowExample() {
	const [active, setActive] = useState(1);
	const [savedAt, setSavedAt] = useState<Date | null>(() => new Date(Date.now() - 10_000));
	const [created, setCreated] = useState(false);
	const form = useForm({
		mode: "controlled",
		initialValues: {
			legalName: "Nova SAS",
			country: "FR",
			billingEmail: "billing@nova.fr",
			plan: "growth",
			invites: ["camille@nova.fr"],
		},
		validate: {
			legalName: (value) => (value.trim().length < 2 ? "Enter the legal name, at least 2 characters" : null),
			billingEmail: (value) => (stepFlowEmail.test(value) ? null : "Enter an email address, such as name@company.com"),
			invites: (value) =>
				value.every((email) => stepFlowEmail.test(email)) ? null : "Remove or fix the addresses that aren't emails",
		},
	});
	const values = form.getValues();
	const planLabel = stepFlowPlans.find((plan) => plan.value === values.plan)?.label ?? emptyValue;

	if (created) {
		return (
			<Card withBorder>
				<Stack align="flex-start" gap="sm">
					<Group gap="xs">
						<TbCheck aria-hidden color="var(--mantine-color-green-text)" />
						<Text fw={500}>{values.legalName} created</Text>
					</Group>
					<Text size="sm" c="dimmed">
						{formatCount(values.invites.length, { one: "person was", other: "people were" })} invited.
					</Text>
					<Button
						variant="default"
						onClick={() => {
							form.setValues(stepFlowEmptyCustomer);
							form.clearErrors();
							setSavedAt(null);
							setCreated(false);
							setActive(0);
						}}
					>
						Start another customer
					</Button>
				</Stack>
			</Card>
		);
	}

	return (
		<Panel title="New customer">
			<StepFlow
				active={active}
				onStepChange={setActive}
				onFinish={() => setCreated(true)}
				finishLabel="Create customer"
				draft={{ savedAt, onSave: () => setSavedAt(new Date()) }}
				steps={[
					{
						id: "company",
						title: "Company",
						validate: () => !form.validateField("legalName").hasError,
						content: (
							<Stack>
								<TextInput label="Legal name" key={form.key("legalName")} {...form.getInputProps("legalName")} />
								<CountrySelect
									label="Country"
									allowDeselect={false}
									key={form.key("country")}
									{...form.getInputProps("country")}
								/>
							</Stack>
						),
					},
					{
						id: "billing",
						title: "Billing",
						validate: () => !form.validateField("billingEmail").hasError,
						content: (
							<Stack>
								<TextInput
									label="Billing email"
									key={form.key("billingEmail")}
									{...form.getInputProps("billingEmail")}
								/>
								<Select
									label="Plan"
									data={stepFlowPlans}
									allowDeselect={false}
									key={form.key("plan")}
									{...form.getInputProps("plan")}
								/>
							</Stack>
						),
					},
					{
						id: "users",
						title: "Users",
						validate: () => !form.validateField("invites").hasError,
						content: (
							<TagsInput
								label="Invite people"
								description="They get an email to join the workspace."
								key={form.key("invites")}
								{...form.getInputProps("invites")}
							/>
						),
					},
				]}
				reviewStep={
					<DataList>
						<DataList.Item>
							<DataList.ItemLabel>Legal name</DataList.ItemLabel>
							<DataList.ItemValue>{values.legalName || emptyValue}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Country</DataList.ItemLabel>
							<DataList.ItemValue>
								{values.country
									? (new Intl.DisplayNames(undefined, { type: "region" }).of(values.country) ?? emptyValue)
									: emptyValue}
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Billing email</DataList.ItemLabel>
							<DataList.ItemValue>{values.billingEmail || emptyValue}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Plan</DataList.ItemLabel>
							<DataList.ItemValue>{planLabel}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Invites</DataList.ItemLabel>
							<DataList.ItemValue>{values.invites.join(", ") || emptyValue}</DataList.ItemValue>
						</DataList.Item>
					</DataList>
				}
			/>
		</Panel>
	);
}

export interface ColumnMapperColumn {
	name: string;
	samples: string[];
}

export interface ColumnMapperField {
	key: string;
	label: string;
	required?: boolean;
	aliases?: string[];
	enumValues?: string[];
}

export type ColumnMapping = Record<string, string | null>;

export type ColumnValueMappings = Record<string, Record<string, string | null>>;

function columnMapperNormalize(text: string) {
	return text
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "");
}

export function columnMapperMatch(column: string, field: ColumnMapperField): "name" | "alias" | null {
	const normalized = columnMapperNormalize(column);
	if (normalized === columnMapperNormalize(field.key) || normalized === columnMapperNormalize(field.label)) {
		return "name";
	}
	if (field.aliases?.some((alias) => columnMapperNormalize(alias) === normalized)) return "alias";
	return null;
}

export function autoMapColumns(columns: ColumnMapperColumn[], fields: ColumnMapperField[]): ColumnMapping {
	const used = new Set<string>();
	return Object.fromEntries(
		columns.map((column) => {
			const field = fields.find((candidate) => !used.has(candidate.key) && columnMapperMatch(column.name, candidate));
			if (field) used.add(field.key);
			return [column.name, field?.key ?? null];
		}),
	);
}

function columnMapperNormalizeValue(text: string) {
	return text
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase()
		.trim();
}

export function columnMapperUnknownValues(column: ColumnMapperColumn, field: ColumnMapperField) {
	const allowed = new Set((field.enumValues ?? []).map(columnMapperNormalizeValue));
	return [...new Set(column.samples)].filter(
		(sample) => sample.trim() !== "" && !allowed.has(columnMapperNormalizeValue(sample)),
	);
}

export function columnMapperMissingRequired(fields: ColumnMapperField[], mapping: ColumnMapping) {
	const mapped = new Set(Object.values(mapping));
	return fields.filter((field) => field.required && !mapped.has(field.key));
}

const columnMapperSkip = "__skip";

export interface ColumnMapperProps {
	columns: ColumnMapperColumn[];
	fields: ColumnMapperField[];
	value: ColumnMapping;
	onChange: (mapping: ColumnMapping) => void;
	valueMappings: ColumnValueMappings;
	onValueMappingsChange: (mappings: ColumnValueMappings) => void;
}

export function ColumnMapper({
	columns,
	fields,
	value,
	onChange,
	valueMappings,
	onValueMappingsChange,
}: ColumnMapperProps) {
	const [expanded, setExpanded] = useState<string | null>(null);
	const missing = columnMapperMissingRequired(fields, value);

	return (
		<Stack gap="md">
			<Table.ScrollContainer minWidth={660}>
				<Table verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Column in file</Table.Th>
							<Table.Th>Sample</Table.Th>
							<Table.Th w={250}>Maps to</Table.Th>
							<Table.Th />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{columns.map((column) => {
							const fieldKey = value[column.name];
							const field = fields.find((candidate) => candidate.key === fieldKey);
							const reason = field && columnMapperMatch(column.name, field);
							const unknown = field?.enumValues ? columnMapperUnknownValues(column, field) : [];
							const unmapped = unknown.filter((sample) => valueMappings[field?.key ?? ""]?.[sample] === undefined);
							const open = expanded === column.name && unknown.length > 0;

							return (
								<Fragment key={column.name}>
									<Table.Tr>
										<Table.Td fw={500}>{column.name}</Table.Td>
										<Table.Td>
											<TruncatedText value={column.samples[0] || emptyValue} maw={180} color="dimmed" />
										</Table.Td>
										<Table.Td>
											<Select
												size="sm"
												aria-label={`Field for ${column.name}`}
												allowDeselect={false}
												value={fieldKey ?? columnMapperSkip}
												data={[
													{ value: columnMapperSkip, label: "Don't import" },
													...fields.map((candidate) => ({
														value: candidate.key,
														label: candidate.required ? `${candidate.label} (required)` : candidate.label,
														disabled: Object.entries(value).some(
															([otherColumn, otherField]) =>
																otherColumn !== column.name && otherField === candidate.key,
														),
													})),
												]}
												onChange={(next) =>
													onChange({ ...value, [column.name]: next === columnMapperSkip ? null : next })
												}
											/>
										</Table.Td>
										<Table.Td>
											{unknown.length > 0 ? (
												<Anchor
													component="button"
													type="button"
													size="sm"
													c={unmapped.length > 0 ? "var(--mantine-color-orange-text)" : "dimmed"}
													onClick={() => setExpanded(open ? null : column.name)}
												>
													{unmapped.length > 0
														? formatCount(unmapped.length, { one: "unknown value", other: "unknown values" })
														: "Values mapped"}
												</Anchor>
											) : (
												reason && (
													<Text size="xs" c="dimmed">
														{reason === "name" ? "Matched by name" : "Matched by alias"}
													</Text>
												)
											)}
										</Table.Td>
									</Table.Tr>
									{open && field && (
										<Table.Tr>
											<Table.Td colSpan={4} bg="var(--mantine-color-default-hover)">
												<Stack gap="xs" py={4}>
													<Text size="sm">
														These {column.name} values aren't {field.label} options. Choose what each one becomes.
													</Text>
													{unknown.map((sample) => (
														<Group key={sample} gap="sm" wrap="nowrap">
															<Text size="sm" ff="monospace" w={120} truncate>
																{sample}
															</Text>
															<TbArrowRight
																aria-hidden
																style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }}
															/>
															<Select
																size="xs"
																w={180}
																aria-label={`${field.label} for ${sample}`}
																placeholder="Choose a value"
																data={[...(field.enumValues ?? []), { value: columnMapperSkip, label: "Leave empty" }]}
																value={
																	valueMappings[field.key]?.[sample] === null
																		? columnMapperSkip
																		: (valueMappings[field.key]?.[sample] ?? null)
																}
																onChange={(next) =>
																	onValueMappingsChange({
																		...valueMappings,
																		[field.key]: {
																			...valueMappings[field.key],
																			[sample]: next === columnMapperSkip ? null : next,
																		},
																	})
																}
															/>
														</Group>
													))}
												</Stack>
											</Table.Td>
										</Table.Tr>
									)}
								</Fragment>
							);
						})}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
			{missing.length > 0 && (
				<Alert color="orange" icon={<TbAlertTriangle />} p="sm">
					Map a column to {missing.map((field) => field.label).join(" and ")} to continue, or add{" "}
					{missing.length === 1 ? "it" : "them"} to the file.
				</Alert>
			)}
		</Stack>
	);
}

const columnMapperFileColumns: ColumnMapperColumn[] = [
	{ name: "Company name", samples: ["Nova SAS", "Acme Logistics", "Dune Studio"] },
	{ name: "E-mail facturation", samples: ["billing@nova.fr", "billing@acme.io", "hello@dune.studio"] },
	{ name: "Offer", samples: ["Pro+", "Growth", "Starter", "Ent.", "Pro"] },
	{ name: "TVA", samples: ["FR40123456789", "FR61987654321", ""] },
	{ name: "Notes internes", samples: ["Called on 12/11", "Wants annual billing", ""] },
];

const columnMapperFields: ColumnMapperField[] = [
	{ key: "name", label: "Company name", required: true, aliases: ["company", "raison sociale"] },
	{ key: "billingEmail", label: "Billing email", required: true, aliases: ["e-mail facturation", "invoice email"] },
	{
		key: "plan",
		label: "Plan",
		aliases: ["offer", "offre", "subscription"],
		enumValues: ["Starter", "Growth", "Pro", "Enterprise"],
	},
	{ key: "vat", label: "VAT number", aliases: ["tva", "vat id"] },
	{ key: "country", label: "Country", required: true, aliases: ["pays"] },
];

function ColumnMapperExample() {
	const [mapping, setMapping] = useState(() => autoMapColumns(columnMapperFileColumns, columnMapperFields));
	const [valueMappings, setValueMappings] = useState<ColumnValueMappings>({});

	return (
		<Panel
			title="Map columns"
			description={`customers-november.csv, ${formatCount(1204, { one: "row", other: "rows" })}`}
		>
			<ColumnMapper
				columns={columnMapperFileColumns}
				fields={columnMapperFields}
				value={mapping}
				onChange={setMapping}
				valueMappings={valueMappings}
				onValueMappingsChange={setValueMappings}
			/>
		</Panel>
	);
}

export type MetadataValue = string | number | boolean;

export type MetadataType = "string" | "number" | "boolean";

export interface MetadataEditorProps {
	value: Record<string, MetadataValue>;
	onChange: (value: Record<string, MetadataValue>) => void;
	schema?: { keys: Record<string, MetadataType> };
	reservedKeys?: string[];
}

interface MetadataEditorRow {
	id: number;
	key: string;
	value: string;
}

function metadataEditorRows(value: Record<string, MetadataValue>): MetadataEditorRow[] {
	return Object.entries(value).map(([key, entry], index) => ({ id: index, key, value: String(entry) }));
}

function metadataEditorRowError(
	row: MetadataEditorRow,
	rows: MetadataEditorRow[],
	schema: MetadataEditorProps["schema"],
): { key?: string; value?: string } {
	const key = row.key.trim();
	if (!key) return { key: "Add a key or remove the row" };
	if (rows.some((other) => other.id !== row.id && other.key.trim() === key)) return { key: "Duplicate key" };
	if (schema?.keys[key] === "number" && (row.value.trim() === "" || Number.isNaN(Number(row.value)))) {
		return { value: `${key} must be a number` };
	}
	return {};
}

function metadataEditorRecord(rows: MetadataEditorRow[], schema: MetadataEditorProps["schema"]) {
	return Object.fromEntries(
		rows.map((row) => {
			const type = schema?.keys[row.key.trim()];
			const value = type === "number" ? Number(row.value) : type === "boolean" ? row.value === "true" : row.value;
			return [row.key.trim(), value];
		}),
	) as Record<string, MetadataValue>;
}

export function MetadataEditor({ value, onChange, schema, reservedKeys = [] }: MetadataEditorProps) {
	const [rows, setRows] = useState(() => metadataEditorRows(value));
	const [jsonText, setJsonText] = useState<string | null>(null);
	const [jsonError, setJsonError] = useState<string | null>(null);

	const update = (next: MetadataEditorRow[]) => {
		setRows(next);
		const valid = next.every((row) => Object.keys(metadataEditorRowError(row, next, schema)).length === 0);
		if (valid) onChange(metadataEditorRecord(next, schema));
	};

	const switchToTable = () => {
		if (jsonText === null) return;
		try {
			const parsed: unknown = JSON.parse(jsonText);
			if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
				setJsonError('Metadata must be one JSON object, such as { "erp_id": "SAP-77812" }');
				return;
			}
			const nested = Object.entries(parsed).find(([, entry]) => typeof entry === "object" && entry !== null);
			if (nested) {
				setJsonError(`${nested[0]} holds an object or a list; metadata values must be text, numbers or true/false`);
				return;
			}
			const changedReserved = reservedKeys.find(
				(key) => String((parsed as Record<string, unknown>)[key]) !== String(value[key]),
			);
			if (changedReserved) {
				setJsonError(`${changedReserved} is set by the system and can't be changed`);
				return;
			}
			update(metadataEditorRows(parsed as Record<string, MetadataValue>));
			setJsonText(null);
			setJsonError(null);
		} catch (error) {
			setJsonError(`Fix the JSON before switching back: ${error instanceof Error ? error.message : "it isn't valid"}`);
		}
	};

	const rowsHaveErrors = rows.some((row) => Object.keys(metadataEditorRowError(row, rows, schema)).length > 0);

	if (jsonText !== null) {
		return (
			<Stack gap="sm">
				<JsonInput
					aria-label="Metadata as JSON"
					autosize
					minRows={6}
					value={jsonText}
					onChange={(next) => {
						setJsonText(next);
						setJsonError(null);
					}}
					error={jsonError}
					styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
				/>
				<Group>
					<Button variant="subtle" size="xs" leftSection={<TbTable />} onClick={switchToTable}>
						Switch to table
					</Button>
				</Group>
			</Stack>
		);
	}

	return (
		<Stack gap="sm">
			<Table verticalSpacing={6} layout="fixed">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Key</Table.Th>
						<Table.Th>Value</Table.Th>
						<Table.Th w={44} />
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{rows.map((row, index) => {
						const reserved = reservedKeys.includes(row.key);
						const errors = metadataEditorRowError(row, rows, schema);
						const type = schema?.keys[row.key.trim()];
						const setRow = (patch: Partial<MetadataEditorRow>) =>
							update(rows.map((other) => (other.id === row.id ? { ...other, ...patch } : other)));

						return (
							<Table.Tr key={row.id}>
								<Table.Td style={{ verticalAlign: "top" }}>
									<TextInput
										size="sm"
										aria-label={`Key ${index + 1}`}
										value={row.key}
										readOnly={reserved}
										error={errors.key}
										onChange={(event) => setRow({ key: event.currentTarget.value })}
										styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
										rightSection={
											reserved && (
												<Tooltip label="Set by the system, read-only" withArrow>
													<Box component="span" c="dimmed" style={{ display: "inline-flex" }}>
														<TbLock aria-label="Read-only" />
													</Box>
												</Tooltip>
											)
										}
									/>
								</Table.Td>
								<Table.Td style={{ verticalAlign: "top" }}>
									{type === "boolean" ? (
										<Switch
											mt={6}
											aria-label={row.key}
											checked={row.value === "true"}
											disabled={reserved}
											onChange={(event) => setRow({ value: String(event.currentTarget.checked) })}
										/>
									) : (
										<TextInput
											size="sm"
											aria-label={`Value of ${row.key || "new key"}`}
											value={row.value}
											readOnly={reserved}
											error={errors.value}
											inputMode={type === "number" ? "decimal" : undefined}
											onChange={(event) => setRow({ value: event.currentTarget.value })}
										/>
									)}
								</Table.Td>
								<Table.Td style={{ verticalAlign: "top" }}>
									{!reserved && (
										<ActionIcon
											variant="subtle"
											color="gray"
											mt={4}
											aria-label={`Remove ${row.key || "row"}`}
											onClick={() => update(rows.filter((other) => other.id !== row.id))}
										>
											<TbTrash />
										</ActionIcon>
									)}
								</Table.Td>
							</Table.Tr>
						);
					})}
				</Table.Tbody>
			</Table>
			<Group gap="xs">
				<Button
					variant="subtle"
					size="xs"
					leftSection={<TbPlus />}
					onClick={() => update([...rows, { id: Math.max(0, ...rows.map((row) => row.id)) + 1, key: "", value: "" }])}
				>
					Add key
				</Button>
				<Button
					variant="subtle"
					size="xs"
					color="gray"
					leftSection={<TbBraces />}
					disabled={rowsHaveErrors}
					onClick={() => setJsonText(JSON.stringify(metadataEditorRecord(rows, schema), null, 2))}
				>
					Switch to JSON
				</Button>
			</Group>
		</Stack>
	);
}

const metadataEditorInitial: Record<string, MetadataValue> = {
	stripe_id: "cus_Nv8Ns2",
	erp_id: "SAP-77812",
	segment: "mid-market",
	seats_override: 25,
	invoice_by_post: false,
};

function MetadataEditorExample() {
	const [metadata, setMetadata] = useState(metadataEditorInitial);

	return (
		<Panel
			title="Metadata"
			description={`${formatCount(Object.keys(metadata).length, { one: "key", other: "keys" })} on Acme Logistics`}
		>
			<MetadataEditor
				value={metadata}
				onChange={setMetadata}
				schema={{ keys: { erp_id: "string", seats_override: "number", invoice_by_post: "boolean" } }}
				reservedKeys={["stripe_id"]}
			/>
		</Panel>
	);
}

export interface LineItemsEditorItem {
	id: string;
	description: string;
	quantity: number | null;
	unitPrice: number | null;
	taxRate: number;
}

export interface LineItemsEditorProps {
	value: LineItemsEditorItem[];
	onChange: (items: LineItemsEditorItem[]) => void;
	currency: string;
	taxRates?: number[];
	taxLabel?: string;
	locale?: string;
	createId?: () => string;
}

const lineItemsEditorDefaultRates = [0, 5.5, 10, 20];

const lineItemsEditorCreateId = () => crypto.randomUUID();

export function lineItemTotal(item: LineItemsEditorItem) {
	return Math.round((item.quantity ?? 0) * (item.unitPrice ?? 0));
}

export function lineItemsTotals(items: LineItemsEditorItem[]) {
	const subtotal = items.reduce((sum, item) => sum + lineItemTotal(item), 0);
	const bases = new Map<number, number>();
	for (const item of items) bases.set(item.taxRate, (bases.get(item.taxRate) ?? 0) + lineItemTotal(item));
	const taxes = [...bases.entries()]
		.filter(([rate, base]) => rate > 0 && base !== 0)
		.sort(([first], [second]) => second - first)
		.map(([rate, base]) => ({ rate, base, amount: Math.round((base * rate) / 100) }));
	return { subtotal, taxes, total: subtotal + taxes.reduce((sum, tax) => sum + tax.amount, 0) };
}

export function LineItemsEditor({
	value,
	onChange,
	currency,
	taxRates = lineItemsEditorDefaultRates,
	taxLabel = "VAT",
	locale,
	createId = lineItemsEditorCreateId,
}: LineItemsEditorProps) {
	const [dragging, setDragging] = useState<string | null>(null);
	const [dropTarget, setDropTarget] = useState<string | null>(null);
	const [announcement, setAnnouncement] = useState("");
	const totals = lineItemsTotals(value);
	const rateOptions = taxRates.map((rate) => ({ value: String(rate), label: formatPercent(rate / 100, { locale }) }));
	const name = (item: LineItemsEditorItem, index: number) => item.description.trim() || `line ${index + 1}`;

	const update = (id: string, patch: Partial<LineItemsEditorItem>) =>
		onChange(value.map((item) => (item.id === id ? { ...item, ...patch } : item)));
	const move = (from: number, to: number) => {
		if (from === to || to < 0 || to >= value.length) return;
		const next = [...value];
		const [moved] = next.splice(from, 1);
		next.splice(to, 0, moved);
		onChange(next);
		setAnnouncement(`${name(moved, to)} moved to position ${to + 1} of ${value.length}`);
	};

	return (
		<Stack gap="md">
			<Table.ScrollContainer minWidth={760}>
				<Table verticalSpacing={6} layout="fixed">
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={40} />
							<Table.Th>Description</Table.Th>
							<Table.Th w={96}>Quantity</Table.Th>
							<Table.Th w={150}>Unit price</Table.Th>
							<Table.Th w={96}>{taxLabel}</Table.Th>
							<Table.Th w={120} ta="right">
								Amount
							</Table.Th>
							<Table.Th w={44} />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{value.map((item, index) => (
							<Table.Tr
								key={item.id}
								onDragOver={(event) => {
									if (!dragging) return;
									event.preventDefault();
									setDropTarget(item.id);
								}}
								onDrop={(event) => {
									event.preventDefault();
									if (dragging) {
										move(
											value.findIndex((candidate) => candidate.id === dragging),
											index,
										);
									}
									setDragging(null);
									setDropTarget(null);
								}}
								style={{
									opacity: dragging === item.id ? 0.4 : 1,
									boxShadow:
										dropTarget === item.id && dragging !== item.id
											? "inset 0 2px 0 var(--mantine-primary-color-filled)"
											: undefined,
								}}
							>
								<Table.Td>
									<ActionIcon
										variant="subtle"
										color="gray"
										draggable
										aria-label={`Move ${name(item, index)}, position ${index + 1} of ${value.length}`}
										aria-keyshortcuts="ArrowUp ArrowDown"
										style={{ cursor: "grab" }}
										onDragStart={(event) => {
											setDragging(item.id);
											event.dataTransfer.effectAllowed = "move";
											event.dataTransfer.setData("text/plain", item.id);
											const row = event.currentTarget.closest("tr");
											if (row) event.dataTransfer.setDragImage(row, 20, 20);
										}}
										onDragEnd={() => {
											setDragging(null);
											setDropTarget(null);
										}}
										onKeyDown={(event) => {
											if (event.key === "ArrowUp" || event.key === "ArrowDown") {
												event.preventDefault();
												move(index, event.key === "ArrowUp" ? index - 1 : index + 1);
											}
										}}
									>
										<TbGripVertical />
									</ActionIcon>
								</Table.Td>
								<Table.Td>
									<TextInput
										aria-label={`Description, line ${index + 1}`}
										placeholder="What you're selling"
										value={item.description}
										onChange={(event) => update(item.id, { description: event.currentTarget.value })}
									/>
								</Table.Td>
								<Table.Td>
									<NumberInput
										aria-label={`Quantity, line ${index + 1}`}
										value={item.quantity ?? ""}
										min={0}
										hideControls
										onChange={(next) => update(item.id, { quantity: next === "" ? null : Number(next) })}
									/>
								</Table.Td>
								<Table.Td>
									<MoneyInput
										aria-label={`Unit price, line ${index + 1}`}
										value={item.unitPrice}
										onChange={(next) => update(item.id, { unitPrice: next })}
										currency={currency}
										locale={locale}
									/>
								</Table.Td>
								<Table.Td>
									<Select
										aria-label={`${taxLabel}, line ${index + 1}`}
										data={rateOptions}
										value={String(item.taxRate)}
										allowDeselect={false}
										onChange={(next) => {
											if (next !== null) update(item.id, { taxRate: Number(next) });
										}}
									/>
								</Table.Td>
								<Table.Td ta="right">
									<MoneyText amount={lineItemTotal(item)} currency={currency} locale={locale} />
								</Table.Td>
								<Table.Td>
									<ActionIcon
										variant="subtle"
										color="gray"
										aria-label={`Remove ${name(item, index)}`}
										onClick={() => onChange(value.filter((other) => other.id !== item.id))}
									>
										<TbTrash />
									</ActionIcon>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
			<VisuallyHidden aria-live="polite">{announcement}</VisuallyHidden>
			<Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
				<Button
					variant="subtle"
					size="xs"
					leftSection={<TbPlus />}
					onClick={() =>
						onChange([
							...value,
							{ id: createId(), description: "", quantity: 1, unitPrice: null, taxRate: taxRates.at(-1) ?? 0 },
						])
					}
				>
					Add line
				</Button>
				<Stack gap={6} miw={280}>
					<Group justify="space-between" wrap="nowrap">
						<Text size="sm" c="dimmed">
							Subtotal
						</Text>
						<Text size="sm">
							<MoneyText amount={totals.subtotal} currency={currency} locale={locale} />
						</Text>
					</Group>
					{totals.taxes.map((tax) => (
						<Group key={tax.rate} justify="space-between" wrap="nowrap">
							<Text size="sm" c="dimmed">
								{taxLabel} {formatPercent(tax.rate / 100, { locale })} on {formatMoney(tax.base, currency, locale)}
							</Text>
							<Text size="sm">
								<MoneyText amount={tax.amount} currency={currency} locale={locale} />
							</Text>
						</Group>
					))}
					<Divider />
					<Group justify="space-between" wrap="nowrap">
						<Text fw={600}>Total</Text>
						<Text fw={600}>
							<MoneyText amount={totals.total} currency={currency} locale={locale} />
						</Text>
					</Group>
				</Stack>
			</Group>
		</Stack>
	);
}

const lineItemsEditorInitial: LineItemsEditorItem[] = [
	{ id: "line-plan", description: "Growth plan, annual, per seat", quantity: 25, unitPrice: 48_000, taxRate: 20 },
	{ id: "line-onboarding", description: "Onboarding package", quantity: 1, unitPrice: 150_000, taxRate: 20 },
	{ id: "line-training", description: "Admin training session", quantity: 2, unitPrice: 60_000, taxRate: 0 },
];

function LineItemsEditorExample() {
	const [items, setItems] = useState(lineItemsEditorInitial);

	return (
		<Panel title="Quote Q-2026-118" description="Acme Logistics, valid until December 18">
			<LineItemsEditor value={items} onChange={setItems} currency="EUR" />
		</Panel>
	);
}

export type UploadQueueStatus = "queued" | "uploading" | "done" | "error";

export interface UploadQueueItem {
	id: string;
	name: string;
	size: number;
	status: UploadQueueStatus;
	progress: number;
	error?: string;
	retryable?: boolean;
}

export interface UploadQueueSelection {
	file: File;
	error: string | null;
}

export interface UploadQueueProps {
	files: UploadQueueItem[];
	onAdd: (selection: UploadQueueSelection[]) => void;
	onRetry: (id: string) => void;
	onRemove: (id: string) => void;
	onClearFailed?: () => void;
	accept?: string[];
	maxSize?: number;
	locale?: string;
}

function uploadQueueExtension(name: string) {
	const dot = name.lastIndexOf(".");
	return dot > 0 ? name.slice(dot).toLowerCase() : "";
}

export function uploadQueueFormatSize(bytes: number, locale?: string) {
	return formatFileSize(bytes, locale);
}

function uploadQueueTypes(accept: string[], locale?: string) {
	const names = [
		...new Set(accept.map((extension) => extension.replace(".", "").toUpperCase().replace("JPEG", "JPG"))),
	];
	return new Intl.ListFormat(locale, { type: "disjunction" }).format(names);
}

export function uploadQueueValidate(
	file: { name: string; size: number },
	{ accept, maxSize, locale }: { accept?: string[]; maxSize?: number; locale?: string },
) {
	const extension = uploadQueueExtension(file.name);
	if (accept && !accept.includes(extension)) {
		const type = extension ? extension.slice(1).toUpperCase() : "This file type";
		return `${type} isn't supported. Upload ${uploadQueueTypes(accept, locale)}.`;
	}
	if (maxSize && file.size > maxSize) {
		return `It's over ${uploadQueueFormatSize(maxSize, locale)}. Compress it or split it into smaller files.`;
	}
	return null;
}

export function UploadQueue({
	files,
	onAdd,
	onRetry,
	onRemove,
	onClearFailed,
	accept,
	maxSize,
	locale,
}: UploadQueueProps) {
	const [dragActive, setDragActive] = useState(false);
	const failed = files.filter((file) => file.status === "error");
	const add = (picked: File[]) => {
		if (picked.length === 0) return;
		onAdd(picked.map((file) => ({ file, error: uploadQueueValidate(file, { accept, maxSize, locale }) })));
	};
	const limits = [
		accept && uploadQueueTypes(accept, locale),
		maxSize && `up to ${uploadQueueFormatSize(maxSize, locale)} each`,
	]
		.filter(Boolean)
		.join(", ");

	return (
		<Stack gap="sm">
			<Paper
				withBorder
				p="lg"
				onDragEnter={(event) => {
					event.preventDefault();
					setDragActive(true);
				}}
				onDragOver={(event) => event.preventDefault()}
				onDragLeave={(event) => {
					if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDragActive(false);
				}}
				onDrop={(event) => {
					event.preventDefault();
					setDragActive(false);
					add([...event.dataTransfer.files]);
				}}
				style={{
					borderStyle: "dashed",
					borderColor: dragActive ? "var(--mantine-primary-color-filled)" : undefined,
					background: dragActive ? "var(--mantine-primary-color-light)" : undefined,
				}}
			>
				<Stack align="center" gap={6}>
					<ThemeIcon variant="light" size="lg" radius="xl">
						<TbUpload />
					</ThemeIcon>
					<Text size="sm" ta="center">
						Drop files here or{" "}
						<FileButton multiple accept={accept?.join(",")} onChange={add}>
							{(props) => (
								<Anchor component="button" type="button" size="sm" {...props}>
									browse
								</Anchor>
							)}
						</FileButton>
					</Text>
					{limits && (
						<Text size="xs" c="dimmed" ta="center">
							{limits.charAt(0).toUpperCase() + limits.slice(1)}
						</Text>
					)}
				</Stack>
			</Paper>
			{files.length > 0 && (
				<Stack gap={0}>
					{files.map((file) => {
						const extension = uploadQueueExtension(file.name).slice(1).toUpperCase() || "FILE";
						return (
							<Group
								key={file.id}
								gap="sm"
								wrap="nowrap"
								align="flex-start"
								py="xs"
								style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
							>
								<ThemeIcon variant="light" color={file.status === "error" ? "red" : "gray"} size="lg">
									<Text span fz={9} fw={700}>
										{extension.slice(0, 4)}
									</Text>
								</ThemeIcon>
								<Box miw={0} style={{ flex: 1 }}>
									<Group justify="space-between" wrap="nowrap" gap="xs">
										<TruncatedText value={file.name} />
										<Text size="xs" c="dimmed" style={{ flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>
											{file.status === "uploading"
												? `${uploadQueueFormatSize((file.size * file.progress) / 100, locale)} of ${uploadQueueFormatSize(file.size, locale)}`
												: file.status === "queued"
													? "Waiting"
													: uploadQueueFormatSize(file.size, locale)}
										</Text>
									</Group>
									{file.status === "uploading" && (
										<Progress value={file.progress} size="xs" mt={6} aria-label={`Uploading ${file.name}`} />
									)}
									{file.status === "error" && file.error && (
										<Text size="xs" c="var(--mantine-color-red-text)" mt={2}>
											{file.error}
										</Text>
									)}
								</Box>
								{file.status === "done" && (
									<Box component="span" c="var(--mantine-color-green-text)" mt={4} style={{ display: "inline-flex" }}>
										<TbCheck aria-label="Uploaded" />
									</Box>
								)}
								{file.status === "error" && file.retryable && (
									<Button
										variant="subtle"
										size="compact-xs"
										leftSection={<TbRefresh />}
										onClick={() => onRetry(file.id)}
									>
										Retry
									</Button>
								)}
								<ActionIcon
									variant="subtle"
									color="gray"
									size="sm"
									aria-label={file.status === "uploading" ? `Cancel ${file.name}` : `Remove ${file.name}`}
									onClick={() => onRemove(file.id)}
								>
									<TbX />
								</ActionIcon>
							</Group>
						);
					})}
				</Stack>
			)}
			{failed.length > 0 && (
				<Group justify="space-between" wrap="nowrap">
					<Text size="xs" c="dimmed">
						{formatCount(failed.length, { one: "file needs", other: "files need" })} attention
					</Text>
					{onClearFailed && (
						<Anchor component="button" type="button" size="xs" onClick={onClearFailed}>
							Clear failed
						</Anchor>
					)}
				</Group>
			)}
		</Stack>
	);
}

const uploadQueueAccept = [".pdf", ".jpg", ".jpeg", ".png"];

const uploadQueueMaxSize = 20_000_000;

const uploadQueueInitial: UploadQueueItem[] = [
	{ id: "kbis", name: "kbis-nova-sas.pdf", size: 1_240_000, status: "done", progress: 100 },
	{ id: "id-front", name: "id-front.jpg", size: 2_480_000, status: "uploading", progress: 40 },
	{ id: "id-back", name: "id-back.jpg", size: 2_310_000, status: "queued", progress: 0 },
	{
		id: "address",
		name: "proof-of-address.heic",
		size: 3_100_000,
		status: "error",
		progress: 0,
		error: uploadQueueValidate({ name: "proof-of-address.heic", size: 3_100_000 }, { accept: uploadQueueAccept }) ?? "",
	},
	{
		id: "bank",
		name: "bank-details.pdf",
		size: 410_000,
		status: "error",
		progress: 0,
		error: "The upload stopped. Check your connection, then retry.",
		retryable: true,
	},
];

function uploadQueueTick(current: UploadQueueItem[]) {
	let changed = false;
	let next = current.map((file) => {
		if (file.status !== "uploading") return file;
		changed = true;
		const progress = Math.min(100, file.progress + 8);
		return { ...file, progress, status: progress === 100 ? ("done" as const) : file.status };
	});
	if (!next.some((file) => file.status === "uploading")) {
		const queued = next.findIndex((file) => file.status === "queued");
		if (queued !== -1) {
			changed = true;
			next = next.map((file, index) =>
				index === queued ? { ...file, status: "uploading" as const, progress: 0 } : file,
			);
		}
	}
	return changed ? next : current;
}

function UploadQueueExample() {
	const [files, setFiles] = useState(uploadQueueInitial);

	// Simulated upload progress for the gallery
	useEffect(() => {
		const timer = window.setInterval(() => setFiles(uploadQueueTick), 500);
		return () => window.clearInterval(timer);
	}, []);

	return (
		<Panel title="KYC documents" description="Nova SAS">
			<UploadQueue
				files={files}
				accept={uploadQueueAccept}
				maxSize={uploadQueueMaxSize}
				onAdd={(selection) =>
					setFiles((current) => [
						...current,
						...selection.map(({ file, error }) => ({
							id: crypto.randomUUID(),
							name: file.name,
							size: file.size,
							status: error ? ("error" as const) : ("queued" as const),
							progress: 0,
							error: error ?? undefined,
						})),
					])
				}
				onRetry={(id) =>
					setFiles((current) =>
						current.map((file) =>
							file.id === id ? { ...file, status: "queued", progress: 0, error: undefined, retryable: false } : file,
						),
					)
				}
				onRemove={(id) => setFiles((current) => current.filter((file) => file.id !== id))}
				onClearFailed={() => setFiles((current) => current.filter((file) => file.status !== "error"))}
			/>
		</Panel>
	);
}

export type ScheduleFrequency = "daily" | "weekdays" | "weekly" | "monthly";

export interface ScheduleValue {
	frequency: ScheduleFrequency;
	weekdays: number[];
	monthDay: number;
	time: string;
	timeZone: string;
}

function scheduleZonedParts(instant: number, timeZone: string) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone,
		hourCycle: "h23",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	}).formatToParts(new Date(instant));
	const part = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((entry) => entry.type === type)?.value);
	return { year: part("year"), month: part("month"), day: part("day"), hour: part("hour"), minute: part("minute") };
}

function scheduleZonedInstant(
	year: number,
	month: number,
	day: number,
	hour: number,
	minute: number,
	timeZone: string,
) {
	const wall = Date.UTC(year, month - 1, day, hour, minute);
	let instant = wall;
	// Two passes settle the offset, including across a daylight-saving change
	for (let pass = 0; pass < 2; pass += 1) {
		const shown = scheduleZonedParts(instant, timeZone);
		instant += wall - Date.UTC(shown.year, shown.month - 1, shown.day, shown.hour, shown.minute);
	}
	return instant;
}

function scheduleMatches(value: ScheduleValue, year: number, month: number, day: number) {
	const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
	if (value.frequency === "weekdays") return weekday >= 1 && weekday <= 5;
	if (value.frequency === "weekly") return value.weekdays.includes(weekday);
	if (value.frequency === "monthly") return day === value.monthDay;
	return true;
}

export function scheduleNextRuns(value: ScheduleValue, count = 5, from = Date.now()) {
	const [hour, minute] = value.time.split(":").map(Number);
	if (!Number.isInteger(hour) || !Number.isInteger(minute)) return [];
	if (value.frequency === "weekly" && value.weekdays.length === 0) return [];
	const today = scheduleZonedParts(from, value.timeZone);
	const runs: Date[] = [];
	for (let offset = 0; runs.length < count && offset < 400; offset += 1) {
		const date = new Date(Date.UTC(today.year, today.month - 1, today.day + offset));
		const [year, month, day] = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()];
		if (!scheduleMatches(value, year, month, day)) continue;
		const instant = scheduleZonedInstant(year, month, day, hour, minute, value.timeZone);
		if (instant > from) runs.push(new Date(instant));
	}
	return runs;
}

export function scheduleToCron(value: ScheduleValue) {
	const [hour = 0, minute = 0] = value.time.split(":").map(Number);
	const time = `${minute} ${hour}`;
	if (value.frequency === "weekdays") return `${time} * * 1-5`;
	if (value.frequency === "weekly") {
		return `${time} * * ${[...value.weekdays].sort((first, second) => first - second).join(",")}`;
	}
	if (value.frequency === "monthly") return `${time} ${value.monthDay} * *`;
	return `${time} * * *`;
}

const scheduleFrequencies = [
	{ value: "daily", label: "Daily" },
	{ value: "weekdays", label: "Weekdays" },
	{ value: "weekly", label: "Weekly" },
	{ value: "monthly", label: "Monthly" },
];

const scheduleWeekOrder = [1, 2, 3, 4, 5, 6, 0];

export function ScheduleInput({
	value,
	onChange,
	locale,
}: {
	value: ScheduleValue;
	onChange: (value: ScheduleValue) => void;
	locale?: string;
}) {
	const set = (patch: Partial<ScheduleValue>) => onChange({ ...value, ...patch });
	const runs = scheduleNextRuns(value);
	const runFormat = new Intl.DateTimeFormat(locale, {
		weekday: "short",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: value.timeZone,
	});

	return (
		<Stack gap="md">
			<SegmentedControl
				value={value.frequency}
				data={scheduleFrequencies}
				onChange={(next) => set({ frequency: next as ScheduleFrequency })}
			/>
			{value.frequency === "weekly" && (
				<Input.Wrapper label="On" error={value.weekdays.length === 0 ? "Pick at least one day" : undefined}>
					<Chip.Group
						multiple
						value={value.weekdays.map(String)}
						onChange={(next) => set({ weekdays: next.map(Number) })}
					>
						<Group gap={6} mt={4}>
							{scheduleWeekOrder.map((day) => (
								<Chip key={day} value={String(day)} size="xs">
									{formatWeekday(day, { style: "short", locale })}
								</Chip>
							))}
						</Group>
					</Chip.Group>
				</Input.Wrapper>
			)}
			{value.frequency === "monthly" && (
				<NumberInput
					label="Day of the month"
					description="1 to 28, so every month has it"
					min={1}
					max={28}
					clampBehavior="strict"
					allowDecimal={false}
					maw={220}
					value={value.monthDay}
					onChange={(next) => set({ monthDay: Number(next) || 1 })}
				/>
			)}
			<SimpleGrid type="container" cols={{ base: 1, "380px": 2 }}>
				<TimeInput label="At" value={value.time} onChange={(event) => set({ time: event.currentTarget.value })} />
				<TimezoneSelect
					label="Time zone"
					value={value.timeZone}
					allowDeselect={false}
					onChange={(next) => {
						if (next) set({ timeZone: next });
					}}
				/>
			</SimpleGrid>
			<Box>
				<Text size="sm" fw={500} mb={4}>
					Next runs
				</Text>
				{runs.length === 0 ? (
					<Text size="sm" c="dimmed">
						{emptyValue}
					</Text>
				) : (
					<Stack gap={2}>
						{runs.map((run) => (
							<Text key={run.getTime()} size="sm" style={{ fontVariantNumeric: "tabular-nums" }}>
								{runFormat.format(run)}
							</Text>
						))}
					</Stack>
				)}
			</Box>
			<Group gap="xs">
				<Text size="xs" c="dimmed">
					As cron
				</Text>
				<Code>{scheduleToCron(value)}</Code>
				<Text size="xs" c="dimmed">
					in {value.timeZone.replaceAll("_", " ")}
				</Text>
			</Group>
		</Stack>
	);
}

function ScheduleInputExample() {
	const [schedule, setSchedule] = useState<ScheduleValue>({
		frequency: "weekdays",
		weekdays: [1, 3],
		monthDay: 1,
		time: "09:00",
		timeZone: "Europe/Paris",
	});

	return (
		<Panel title="Payment reminders" description="Sent to customers with an overdue invoice.">
			<ScheduleInput value={schedule} onChange={setSchedule} />
		</Panel>
	);
}

export interface BusinessHoursRange {
	start: string;
	end: string;
}

export interface BusinessHoursDay {
	open: boolean;
	ranges: BusinessHoursRange[];
}

export interface BusinessHoursValue {
	days: BusinessHoursDay[];
	holidays: string[];
}

export function businessHoursRangeError(range: BusinessHoursRange, previous?: BusinessHoursRange) {
	if (!range.start || !range.end) return "Enter both times";
	if (range.end <= range.start) return "Closes before it opens";
	if (previous && range.start < previous.end) return "Starts before the first range ends";
	return null;
}

const businessHoursBreak = { start: "12:30", end: "13:30" };

export function BusinessHoursInput({
	value,
	onChange,
	locale,
}: {
	value: BusinessHoursValue;
	onChange: (value: BusinessHoursValue) => void;
	locale?: string;
}) {
	const names = scheduleWeekOrder.map((day) => formatWeekday(day, { locale }));
	const setDay = (index: number, patch: Partial<BusinessHoursDay>) =>
		onChange({ ...value, days: value.days.map((day, current) => (current === index ? { ...day, ...patch } : day)) });
	const setRange = (index: number, rangeIndex: number, patch: Partial<BusinessHoursRange>) =>
		setDay(index, {
			ranges: value.days[index].ranges.map((range, current) =>
				current === rangeIndex ? { ...range, ...patch } : range,
			),
		});

	return (
		<Stack gap="md">
			<Stack gap={0}>
				{value.days.map((day, index) => (
					<Group
						key={names[index]}
						align="flex-start"
						wrap="nowrap"
						gap="md"
						py="xs"
						style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
					>
						<Switch
							w={140}
							mt={8}
							label={names[index]}
							checked={day.open}
							onChange={(event) =>
								setDay(index, {
									open: event.currentTarget.checked,
									ranges: day.ranges.length > 0 ? day.ranges : [{ start: "09:00", end: "18:00" }],
								})
							}
						/>
						{day.open ? (
							<Stack gap={6} style={{ flex: 1 }}>
								{day.ranges.map((range, rangeIndex) => {
									const error = businessHoursRangeError(range, day.ranges[rangeIndex - 1]);
									const canSplit =
										day.ranges.length === 1 &&
										range.start < businessHoursBreak.start &&
										range.end > businessHoursBreak.end;
									return (
										// biome-ignore lint/suspicious/noArrayIndexKey: at most two ranges, never reordered
										<Group key={rangeIndex} gap="xs" wrap="nowrap" align="flex-start">
											<TimeInput
												w={110}
												aria-label={`${names[index]}, opens`}
												value={range.start}
												error={Boolean(error)}
												onChange={(event) => setRange(index, rangeIndex, { start: event.currentTarget.value })}
											/>
											<Text size="sm" c="dimmed" mt={8}>
												to
											</Text>
											<TimeInput
												w={110}
												aria-label={`${names[index]}, closes`}
												value={range.end}
												error={error}
												onChange={(event) => setRange(index, rangeIndex, { end: event.currentTarget.value })}
											/>
											{rangeIndex === 1 && (
												<ActionIcon
													variant="subtle"
													color="gray"
													mt={4}
													aria-label={`Remove the break on ${names[index]}`}
													onClick={() =>
														setDay(index, { ranges: [{ start: day.ranges[0].start, end: day.ranges[1].end }] })
													}
												>
													<TbX />
												</ActionIcon>
											)}
											{canSplit && (
												<Tooltip label="Add a break" withArrow>
													<ActionIcon
														variant="subtle"
														color="gray"
														mt={4}
														aria-label={`Add a break on ${names[index]}`}
														onClick={() =>
															setDay(index, {
																ranges: [
																	{ start: range.start, end: businessHoursBreak.start },
																	{ start: businessHoursBreak.end, end: range.end },
																],
															})
														}
													>
														<TbPlus />
													</ActionIcon>
												</Tooltip>
											)}
										</Group>
									);
								})}
							</Stack>
						) : (
							<Text size="sm" c="dimmed" mt={8}>
								Closed
							</Text>
						)}
					</Group>
				))}
			</Stack>
			<Box>
				<Button
					variant="subtle"
					size="xs"
					onClick={() =>
						onChange({
							...value,
							days: value.days.map((day, index) =>
								index >= 1 && index <= 4
									? { ...value.days[0], ranges: value.days[0].ranges.map((range) => ({ ...range })) }
									: day,
							),
						})
					}
				>
					Copy {names[0]} to weekdays
				</Button>
			</Box>
			<DatePickerInput
				type="multiple"
				label="Holidays"
				description="Closed all day."
				placeholder="Pick dates"
				valueFormat="MMM D"
				clearable
				value={value.holidays}
				onChange={(holidays) => onChange({ ...value, holidays })}
			/>
		</Stack>
	);
}

const businessHoursOpen = (start = "09:00", end = "18:00"): BusinessHoursDay => ({
	open: true,
	ranges: [{ start, end }],
});

const businessHoursInitial: BusinessHoursValue = {
	days: [
		{
			open: true,
			ranges: [
				{ start: "09:00", end: "12:30" },
				{ start: "13:30", end: "18:00" },
			],
		},
		businessHoursOpen(),
		businessHoursOpen(),
		businessHoursOpen(),
		businessHoursOpen("09:00", "17:00"),
		{ open: false, ranges: [] },
		{ open: false, ranges: [] },
	],
	holidays: ["2026-12-25", "2027-01-01"],
};

function BusinessHoursInputExample() {
	const [hours, setHours] = useState(businessHoursInitial);

	return (
		<Panel title="Support hours" description="SLA timers only run during these hours.">
			<BusinessHoursInput value={hours} onChange={setHours} />
		</Panel>
	);
}

export interface AddressValue {
	country: string;
	line1: string;
	line2: string;
	postalCode: string;
	city: string;
	region: string;
}

type AddressField = Exclude<keyof AddressValue, "country">;

interface AddressFormat {
	layout: (AddressField | AddressField[])[];
	postalCodeLabel: string;
	postalCodePattern?: RegExp;
	postalCodeExample?: string;
	regionLabel?: string;
	regionRequired?: boolean;
	lines: (address: AddressValue) => string[];
}

const addressFormats: Record<string, AddressFormat> = {
	FR: {
		layout: ["line1", "line2", ["postalCode", "city"]],
		postalCodeLabel: "Postal code",
		postalCodePattern: /^\d{5}$/,
		postalCodeExample: "75011",
		lines: (address) => [address.line1, address.line2, `${address.postalCode} ${address.city}`],
	},
	DE: {
		layout: ["line1", "line2", ["postalCode", "city"]],
		postalCodeLabel: "Postal code",
		postalCodePattern: /^\d{5}$/,
		postalCodeExample: "10115",
		lines: (address) => [address.line1, address.line2, `${address.postalCode} ${address.city}`],
	},
	GB: {
		layout: ["line1", "line2", "city", ["region", "postalCode"]],
		postalCodeLabel: "Postcode",
		postalCodePattern: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
		postalCodeExample: "SW1A 1AA",
		regionLabel: "County (optional)",
		lines: (address) => [address.line1, address.line2, address.city, address.region, address.postalCode.toUpperCase()],
	},
	US: {
		layout: ["line1", "line2", ["city", "region", "postalCode"]],
		postalCodeLabel: "ZIP code",
		postalCodePattern: /^\d{5}(-\d{4})?$/,
		postalCodeExample: "94103",
		regionLabel: "State",
		regionRequired: true,
		lines: (address) => [
			address.line1,
			address.line2,
			`${address.city}, ${address.region.toUpperCase()} ${address.postalCode}`,
		],
	},
	JP: {
		layout: [["postalCode", "region"], "city", "line1", "line2"],
		postalCodeLabel: "Postal code",
		postalCodePattern: /^\d{3}-?\d{4}$/,
		postalCodeExample: "100-0001",
		regionLabel: "Prefecture",
		regionRequired: true,
		lines: (address) => [`〒${address.postalCode}`, `${address.region} ${address.city}`, address.line1, address.line2],
	},
};

const addressDefaultFormat: AddressFormat = {
	layout: ["line1", "line2", ["postalCode", "city"], "region"],
	postalCodeLabel: "Postal code",
	regionLabel: "Region (optional)",
	lines: (address) => [address.line1, address.line2, `${address.postalCode} ${address.city}`, address.region],
};

const addressAutoComplete: Record<AddressField, string> = {
	line1: "address-line1",
	line2: "address-line2",
	postalCode: "postal-code",
	city: "address-level2",
	region: "address-level1",
};

function addressFormatOf(country: string) {
	return addressFormats[country] ?? addressDefaultFormat;
}

function addressLabel(field: AddressField, format: AddressFormat) {
	if (field === "line1") return "Address";
	if (field === "line2") return "Address line 2 (optional)";
	if (field === "city") return "City";
	if (field === "postalCode") return format.postalCodeLabel;
	return format.regionLabel ?? "Region";
}

export function addressInputErrors(address: AddressValue): Partial<Record<AddressField, string>> {
	const format = addressFormatOf(address.country);
	const errors: Partial<Record<AddressField, string>> = {};
	if (!address.line1.trim()) errors.line1 = "Enter the street address";
	if (!address.city.trim()) errors.city = "Enter the city";
	if (!address.postalCode.trim()) errors.postalCode = `Enter the ${format.postalCodeLabel.toLowerCase()}`;
	else if (format.postalCodePattern && !format.postalCodePattern.test(address.postalCode.trim())) {
		errors.postalCode = `Enter a ${format.postalCodeLabel.toLowerCase()} like ${format.postalCodeExample}`;
	}
	if (format.regionRequired && !address.region.trim()) errors.region = `Enter the ${format.regionLabel?.toLowerCase()}`;
	return errors;
}

export function formatAddress(address: AddressValue, locale?: string) {
	const country = new Intl.DisplayNames(locale, { type: "region" }).of(address.country) ?? address.country;
	return [...addressFormatOf(address.country).lines(address), country]
		.map((line) => line.trim())
		.filter((line) => line !== "" && line !== "〒");
}

export function AddressInput({
	value,
	onChange,
	locale,
}: {
	value: AddressValue;
	onChange: (value: AddressValue) => void;
	locale?: string;
}) {
	const [touched, setTouched] = useState<AddressField[]>([]);
	const format = addressFormatOf(value.country);
	const errors = addressInputErrors(value);

	const field = (name: AddressField, shared: boolean) => (
		<TextInput
			key={name}
			label={addressLabel(name, format)}
			autoComplete={addressAutoComplete[name]}
			value={value[name]}
			error={touched.includes(name) ? errors[name] : undefined}
			onChange={(event) => onChange({ ...value, [name]: event.currentTarget.value })}
			onBlur={() => setTouched((current) => (current.includes(name) ? current : [...current, name]))}
			style={{
				flex: shared && (name === "postalCode" || (name === "region" && value.country === "US")) ? "0 0 120px" : 1,
				minWidth: 0,
			}}
		/>
	);

	return (
		<Stack gap="sm">
			<CountrySelect
				label="Country"
				autoComplete="country"
				favourites={addressInputFavourites}
				allowDeselect={false}
				locale={locale}
				value={value.country}
				onChange={(next) => {
					if (next) onChange({ ...value, country: next });
				}}
			/>
			{format.layout.map((entry) =>
				Array.isArray(entry) ? (
					<Group key={entry.join("-")} gap="sm" wrap="nowrap" align="flex-start">
						{entry.map((name) => field(name, true))}
					</Group>
				) : (
					field(entry, false)
				),
			)}
		</Stack>
	);
}

const addressInputFavourites = ["FR", "DE", "GB", "US", "JP"];

function AddressInputExample() {
	const [address, setAddress] = useState<AddressValue>({
		country: "FR",
		line1: "18 rue Oberkampf",
		line2: "",
		postalCode: "75011",
		city: "Paris",
		region: "",
	});

	return (
		<Panel title="Billing address" description="Acme Logistics">
			<Stack gap="md">
				<AddressInput value={address} onChange={setAddress} />
				<Box p="sm" bg="var(--mantine-color-default-hover)" style={{ borderRadius: "var(--mantine-radius-default)" }}>
					<Text size="xs" c="dimmed" mb={4}>
						On invoices
					</Text>
					{formatAddress(address).map((line) => (
						<Text key={line} size="sm">
							{line}
						</Text>
					))}
				</Box>
			</Stack>
		</Panel>
	);
}

export interface InlineEditInput<Value> {
	value: Value;
	onChange: (value: Value) => void;
	error: string | null;
	disabled: boolean;
	inputProps: { "aria-label": string; autoFocus: boolean; onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void };
}

export interface InlineEditBaseProps<Value> {
	label: string;
	value: Value;
	onSave: (value: Value) => void | Promise<void>;
	validate?: (value: Value) => string | null;
	renderValue?: (value: Value) => ReactNode;
	renderInput: (input: InlineEditInput<Value>) => ReactNode;
	saveOnEnter?: boolean;
	disabled?: boolean;
}

export function InlineEditBase<Value>({
	label,
	value,
	onSave,
	validate,
	renderValue,
	renderInput,
	saveOnEnter = true,
	disabled = false,
}: InlineEditBaseProps<Value>) {
	const [editing, setEditing] = useState(false);
	const [draft, setDraft] = useState(value);
	const [error, setError] = useState<string | null>(null);
	const [pending, setPending] = useState(false);
	const [hovered, setHovered] = useState(false);
	const displayRef = useRef<HTMLButtonElement>(null);

	const start = () => {
		setDraft(value);
		setError(null);
		setEditing(true);
	};
	const stop = () => {
		setEditing(false);
		setError(null);
		requestAnimationFrame(() => displayRef.current?.focus());
	};
	const save = async () => {
		const problem = validate?.(draft) ?? null;
		if (problem) {
			setError(problem);
			return;
		}
		setPending(true);
		try {
			await onSave(draft);
			stop();
		} catch (failure) {
			setError(failure instanceof Error ? failure.message : "That didn't save. Try again.");
		} finally {
			setPending(false);
		}
	};

	if (!editing) {
		const shown = renderValue ? renderValue(value) : value === null || value === "" ? emptyValue : String(value);
		return (
			<UnstyledButton
				ref={displayRef}
				disabled={disabled}
				onClick={start}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				px={6}
				py={2}
				mx={-6}
				maw="calc(100% + 12px)"
				style={{
					display: "inline-flex",
					alignItems: "center",
					gap: 8,
					borderRadius: "var(--mantine-radius-sm)",
					background: hovered && !disabled ? "var(--mantine-color-default-hover)" : undefined,
				}}
			>
				<VisuallyHidden>Edit {label}: </VisuallyHidden>
				<Text span size="sm" truncate>
					{shown}
				</Text>
				{!disabled && (
					<Box component="span" c="dimmed" style={{ display: "inline-flex", flexShrink: 0 }} aria-hidden>
						<TbPencil size={14} />
					</Box>
				)}
			</UnstyledButton>
		);
	}

	return (
		<Group
			gap={4}
			wrap="nowrap"
			align="flex-start"
			onKeyDown={(event) => {
				if (event.key === "Escape" && !pending) {
					event.preventDefault();
					stop();
				}
			}}
		>
			<Box miw={0} style={{ flex: 1 }}>
				{renderInput({
					value: draft,
					onChange: (next) => {
						setDraft(next);
						setError(null);
					},
					error,
					disabled: pending,
					inputProps: {
						"aria-label": label,
						autoFocus: true,
						onKeyDown: saveOnEnter
							? (event) => {
									if (event.key === "Enter") {
										event.preventDefault();
										void save();
									}
								}
							: undefined,
					},
				})}
			</Box>
			<ActionIcon size="input-sm" aria-label={`Save ${label}`} loading={pending} onClick={() => void save()}>
				<TbCheck />
			</ActionIcon>
			<ActionIcon size="input-sm" variant="default" aria-label="Cancel" disabled={pending} onClick={stop}>
				<TbX />
			</ActionIcon>
		</Group>
	);
}

type InlineEditShared<Value> = Omit<InlineEditBaseProps<Value>, "renderInput" | "saveOnEnter">;

export type InlineEditProps =
	| (InlineEditShared<string> & { type: "text"; placeholder?: string })
	| (InlineEditShared<number | null> & { type: "number"; min?: number; max?: number })
	| (InlineEditShared<string | null> & { type: "select"; data: { value: string; label: string }[] })
	| (InlineEditShared<string | null> & { type: "date" });

export function InlineEdit(props: InlineEditProps) {
	if (props.type === "text") {
		const { type: _type, placeholder, ...shared } = props;
		return (
			<InlineEditBase
				{...shared}
				renderInput={({ value, onChange, error, disabled, inputProps }) => (
					<TextInput
						{...inputProps}
						value={value}
						placeholder={placeholder}
						error={error}
						disabled={disabled}
						onChange={(event) => onChange(event.currentTarget.value)}
					/>
				)}
			/>
		);
	}
	if (props.type === "number") {
		const { type: _type, min, max, ...shared } = props;
		return (
			<InlineEditBase
				{...shared}
				renderInput={({ value, onChange, error, disabled, inputProps }) => (
					<NumberInput
						{...inputProps}
						value={value ?? ""}
						min={min}
						max={max}
						hideControls
						error={error}
						disabled={disabled}
						onChange={(next) => onChange(next === "" ? null : Number(next))}
					/>
				)}
			/>
		);
	}
	if (props.type === "select") {
		const { type: _type, data, ...shared } = props;
		return (
			<InlineEditBase
				{...shared}
				saveOnEnter={false}
				renderValue={
					shared.renderValue ??
					((value) => {
						const option = data.find((candidate) => candidate.value === value);
						return option?.label ?? value ?? emptyValue;
					})
				}
				renderInput={({ value, onChange, error, disabled, inputProps }) => (
					<Select
						{...inputProps}
						data={data}
						value={value}
						error={error}
						disabled={disabled}
						allowDeselect={false}
						defaultDropdownOpened
						onChange={onChange}
					/>
				)}
			/>
		);
	}
	const { type: _type, ...shared } = props;
	return (
		<InlineEditBase
			{...shared}
			saveOnEnter={false}
			renderValue={shared.renderValue ?? ((value) => (value ? formatDate(value, "date") : emptyValue))}
			renderInput={({ value, onChange, error, disabled, inputProps }) => (
				<DateInput
					{...inputProps}
					value={value}
					valueFormat="MMM D, YYYY"
					error={error}
					disabled={disabled}
					onChange={onChange}
				/>
			)}
		/>
	);
}

const inlineEditPlans = [
	{ value: "starter", label: "Starter" },
	{ value: "growth", label: "Growth" },
	{ value: "enterprise", label: "Enterprise" },
];

const inlineEditEmail = /^\S+@\S+\.\S+$/;

export function inlineEditRequest() {
	return new Promise<void>((resolve) => window.setTimeout(resolve, 600));
}

function InlineEditExample() {
	const [customer, setCustomer] = useState({
		legalName: "Acme Logistics SAS",
		billingEmail: "billing@acme.io",
		seats: 25 as number | null,
		plan: "growth" as string | null,
		renewsOn: "2027-03-04" as string | null,
	});

	return (
		<Panel title="Account" description="Click a value to change it.">
			<DataList>
				<DataList.Item>
					<DataList.ItemLabel>Legal name</DataList.ItemLabel>
					<DataList.ItemValue>
						<InlineEdit
							type="text"
							label="Legal name"
							value={customer.legalName}
							validate={(value) => (value.trim().length < 2 ? "Enter the legal name, at least 2 characters" : null)}
							onSave={async (legalName) => {
								await inlineEditRequest();
								setCustomer((current) => ({ ...current, legalName }));
							}}
						/>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Billing email</DataList.ItemLabel>
					<DataList.ItemValue>
						<InlineEdit
							type="text"
							label="Billing email"
							value={customer.billingEmail}
							validate={(value) =>
								inlineEditEmail.test(value) ? null : "Enter an email address, such as name@company.com"
							}
							onSave={async (billingEmail) => {
								await inlineEditRequest();
								if (billingEmail.endsWith("@example.com")) {
									throw new Error("Mail to this address bounced last month. Use another one.");
								}
								setCustomer((current) => ({ ...current, billingEmail }));
							}}
						/>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Seats</DataList.ItemLabel>
					<DataList.ItemValue>
						<InlineEdit
							type="number"
							label="Seats"
							min={1}
							value={customer.seats}
							validate={(value) => (value && value >= 1 ? null : "Keep at least 1 seat")}
							onSave={async (seats) => {
								await inlineEditRequest();
								setCustomer((current) => ({ ...current, seats }));
							}}
						/>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Plan</DataList.ItemLabel>
					<DataList.ItemValue>
						<InlineEdit
							type="select"
							label="Plan"
							data={inlineEditPlans}
							value={customer.plan}
							onSave={async (plan) => {
								await inlineEditRequest();
								setCustomer((current) => ({ ...current, plan }));
							}}
						/>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Renews</DataList.ItemLabel>
					<DataList.ItemValue>
						<InlineEdit
							type="date"
							label="Renewal date"
							value={customer.renewsOn}
							validate={(value) => (value ? null : "Pick a renewal date")}
							onSave={async (renewsOn) => {
								await inlineEditRequest();
								setCustomer((current) => ({ ...current, renewsOn }));
							}}
						/>
					</DataList.ItemValue>
				</DataList.Item>
			</DataList>
		</Panel>
	);
}

export function FormsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<FormSectionContactExample />
			</PreviewItem>
			<PreviewItem span="full">
				<FormSectionBillingExample />
			</PreviewItem>
			<PreviewItem span="half">
				<StepFlowExample />
			</PreviewItem>
			<PreviewItem span="half">
				<InlineEditExample />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesEntitySelectDemo />
			</PreviewItem>
			<PreviewItem>
				<PrimitivesAreaPaymentTerms />
			</PreviewItem>
			<PreviewItem>
				<Panel title="Regional settings">
					<Stack gap="sm">
						<CountrySelect label="Country" defaultValue="FR" favourites={["FR", "DE", "GB", "US"]} />
						<CurrencySelect label="Currency" defaultValue="EUR" favourites={["EUR", "USD", "GBP"]} />
						<TimezoneSelect
							label="Time zone"
							defaultValue="Europe/Paris"
							favourites={["Europe/Paris", "Europe/London"]}
						/>
						<LanguageSelect label="Language" defaultValue="fr" favourites={["fr", "en", "de"]} />
					</Stack>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<AddressInputExample />
			</PreviewItem>
			<PreviewItem span="half">
				<ScheduleInputExample />
			</PreviewItem>
			<PreviewItem span="half">
				<BusinessHoursInputExample />
			</PreviewItem>
			<PreviewItem span="full">
				<LineItemsEditorExample />
			</PreviewItem>
			<PreviewItem span="half">
				<UploadQueueExample />
			</PreviewItem>
			<PreviewItem span="full">
				<ColumnMapperExample />
			</PreviewItem>
			<PreviewItem span="half">
				<MetadataEditorExample />
			</PreviewItem>
			<PreviewItem>
				<PrimitivesAreaChangePassword />
			</PreviewItem>
		</PreviewGrid>
	);
}

export type FilterFieldType = "text" | "number" | "money" | "date" | "enum" | "relation" | "boolean";

export interface FilterField {
	key: string;
	label: string;
	type: FilterFieldType;
	options?: { value: string; label: string }[];
	currency?: string;
}

export type FilterOperator =
	| "is"
	| "isNot"
	| "isAnyOf"
	| "contains"
	| "greaterThan"
	| "lessThan"
	| "inLast"
	| "before"
	| "after"
	| "isTrue"
	| "isFalse";

export type FilterValue = string | number | string[] | null;

export interface FilterCondition {
	field: string;
	operator: FilterOperator;
	value?: FilterValue;
}

export type FilterGroup = { and: FilterNode[] } | { or: FilterNode[] };

export type FilterNode = FilterGroup | FilterCondition;

export const filterOperators: Record<FilterFieldType, { value: FilterOperator; label: string }[]> = {
	text: [
		{ value: "contains", label: "contains" },
		{ value: "is", label: "is" },
		{ value: "isNot", label: "is not" },
	],
	number: [
		{ value: "greaterThan", label: "greater than" },
		{ value: "lessThan", label: "less than" },
		{ value: "is", label: "equals" },
	],
	money: [
		{ value: "greaterThan", label: "greater than" },
		{ value: "lessThan", label: "less than" },
		{ value: "is", label: "equals" },
	],
	date: [
		{ value: "inLast", label: "in the last" },
		{ value: "before", label: "before" },
		{ value: "after", label: "after" },
	],
	enum: [
		{ value: "isAnyOf", label: "is any of" },
		{ value: "isNot", label: "is not" },
	],
	relation: [
		{ value: "is", label: "is" },
		{ value: "isNot", label: "is not" },
	],
	boolean: [
		{ value: "isTrue", label: "yes" },
		{ value: "isFalse", label: "no" },
	],
};

export const filterRelativePeriods = [
	{ value: "7", label: "7 days" },
	{ value: "30", label: "30 days" },
	{ value: "90", label: "90 days" },
];

export function isFilterGroup(node: FilterNode): node is FilterGroup {
	return "and" in node || "or" in node;
}

export function filterGroupChildren(group: FilterGroup) {
	return "and" in group ? group.and : group.or;
}

function filterGroupConjunction(group: FilterGroup) {
	return "and" in group ? "and" : "or";
}

function filterGroupWith(conjunction: "and" | "or", children: FilterNode[]): FilterGroup {
	return conjunction === "and" ? { and: children } : { or: children };
}

function filterDefaultCondition(field: FilterField): FilterCondition {
	const operator = filterOperators[field.type][0].value;
	return { field: field.key, operator, value: filterDefaultValue(field, operator) };
}

function filterDefaultValue(field: FilterField, operator: FilterOperator): FilterValue {
	if (field.type === "enum" && operator === "isAnyOf") return [];
	if (field.type === "date" && operator === "inLast") return "30";
	return null;
}

function filterValueIsSet(value: FilterValue | undefined) {
	return value != null && value !== "" && !(Array.isArray(value) && value.length === 0);
}

export function describeFilterValue(field: FilterField, condition: FilterCondition, locale?: string) {
	const { operator, value } = condition;
	if (operator === "isTrue") return "Yes";
	if (operator === "isFalse") return "No";
	if (!filterValueIsSet(value)) return emptyValue;

	const optionLabel = (option: string) =>
		field.options?.find((candidate) => candidate.value === option)?.label ?? option;
	const formatted = Array.isArray(value)
		? value.map(optionLabel).join(", ")
		: field.type === "money"
			? formatMoney(Number(value), field.currency ?? "EUR", locale)
			: field.type === "enum" || field.type === "relation"
				? optionLabel(String(value))
				: field.type === "date" && operator !== "inLast"
					? formatDate(String(value), "date", locale)
					: String(value);

	switch (operator) {
		case "isNot":
			return `not ${formatted}`;
		case "contains":
			return `contains "${formatted}"`;
		case "greaterThan":
			return `over ${formatted}`;
		case "lessThan":
			return `under ${formatted}`;
		case "inLast":
			return `last ${formatted} days`;
		case "before":
			return `before ${formatted}`;
		case "after":
			return `after ${formatted}`;
		default:
			return formatted;
	}
}

interface FilterValueInputProps {
	field: FilterField;
	condition: FilterCondition;
	onChange: (value: FilterValue) => void;
}

const filterInlineDropdown = { withinPortal: false };

export function FilterValueInput({ field, condition, onChange }: FilterValueInputProps) {
	const { operator, value } = condition;
	const label = `${field.label} value`;

	if (operator === "isTrue" || operator === "isFalse") return null;

	if (field.type === "enum" && operator === "isAnyOf") {
		return (
			<MultiSelect
				aria-label={label}
				comboboxProps={filterInlineDropdown}
				data={field.options ?? []}
				value={Array.isArray(value) ? value : []}
				onChange={onChange}
				placeholder="Pick values"
			/>
		);
	}
	if (field.type === "enum" || field.type === "relation") {
		return (
			<Select
				aria-label={label}
				comboboxProps={filterInlineDropdown}
				data={field.options ?? []}
				value={typeof value === "string" ? value : null}
				onChange={onChange}
				placeholder="Pick one"
			/>
		);
	}
	if (field.type === "date" && operator === "inLast") {
		return (
			<Select
				aria-label={label}
				comboboxProps={filterInlineDropdown}
				data={filterRelativePeriods}
				value={typeof value === "string" ? value : null}
				onChange={onChange}
				allowDeselect={false}
			/>
		);
	}
	if (field.type === "date") {
		return (
			<DatePickerInput
				aria-label={label}
				popoverProps={filterInlineDropdown}
				value={typeof value === "string" ? value : null}
				onChange={onChange}
				placeholder="Pick a date"
				valueFormat="MMM D, YYYY"
			/>
		);
	}
	if (field.type === "money") {
		return (
			<MoneyInput
				aria-label={label}
				currency={field.currency ?? "EUR"}
				value={typeof value === "number" ? value : null}
				onChange={onChange}
			/>
		);
	}
	if (field.type === "number") {
		return (
			<NumberInput
				aria-label={label}
				hideControls
				value={typeof value === "number" ? value : ""}
				onChange={(next) => onChange(typeof next === "number" ? next : null)}
			/>
		);
	}
	return (
		<TextInput
			aria-label={label}
			value={typeof value === "string" ? value : ""}
			onChange={(event) => onChange(event.currentTarget.value)}
		/>
	);
}

export interface DataTableColumn<Row> {
	key: string;
	header: ReactNode;
	align?: "left" | "right";
	sortable?: boolean;
	width?: number | string;
	render: (row: Row) => ReactNode;
	label?: string;
	locked?: boolean;
	primary?: boolean;
	secondary?: boolean;
}

export interface DataTableColumnsState {
	visible: string[];
	order: string[];
}

export type DataTableDensity = "compact" | "default" | "comfortable";

export interface DataTableSort {
	field: string;
	direction: "asc" | "desc";
}

export interface DataTableState {
	sort?: DataTableSort;
	page: number;
	pageSize: number;
	selection: string[];
	density?: DataTableDensity;
}

export interface DataTableBulkAction {
	label: string;
	icon?: ReactNode;
	onClick: (ids: string[], allMatching: boolean) => void;
	tone?: "danger";
	confirmation?: string;
}

export interface DataTableRowAction<Row> {
	label: string;
	icon?: ReactNode;
	onClick: (row: Row) => void;
	tone?: "danger";
	confirmation?: string;
}

interface DataTableProps<Row> {
	rows: Row[];
	total: number;
	rowId: keyof Row & string;
	rowLabel?: (row: Row) => string;
	columns: DataTableColumn<Row>[];
	state: DataTableState;
	onStateChange: (state: DataTableState) => void;
	loading?: boolean;
	error?: { title?: string; message: string; requestId?: string } | null;
	onRetry?: () => void;
	filtered?: boolean;
	onClearFilters?: () => void;
	emptyState?: ReactNode;
	onRowClick?: (row: Row) => void;
	bulkActions?: DataTableBulkAction[];
	allMatchingSelected?: boolean;
	onSelectAllMatching?: () => void;
	bulkActionsPosition?: "viewport" | "table";
	itemName?: { singular: string; plural: string };
	minWidth?: number;
	columnsState?: DataTableColumnsState;
	cardMode?: "auto" | "always" | "never";
	cardBreakpoint?: number;
	renderCard?: (row: Row) => ReactNode;
	selectable?: (row: Row) => boolean;
}

const dataTableSpacing: Record<DataTableDensity, "xs" | "sm" | "md"> = {
	compact: "xs",
	default: "sm",
	comfortable: "md",
};

export function DataTable<Row>({
	rows,
	total,
	rowId,
	rowLabel,
	columns,
	state,
	onStateChange,
	loading = false,
	error = null,
	onRetry,
	filtered = false,
	onClearFilters,
	emptyState,
	onRowClick,
	bulkActions,
	allMatchingSelected = false,
	onSelectAllMatching,
	bulkActionsPosition = "viewport",
	itemName = { singular: "row", plural: "rows" },
	minWidth = 640,
	columnsState,
	cardMode = "auto",
	cardBreakpoint,
	renderCard,
	selectable: isRowSelectable,
}: DataTableProps<Row>) {
	const { ref: frameRef, width: frameWidth } = useElementSize();
	const cards =
		cardMode === "always" || (cardMode === "auto" && frameWidth > 0 && frameWidth < (cardBreakpoint ?? minWidth));
	const shown = dataTableArrangeColumns(columns, columnsState);
	const withSelection = Boolean(bulkActions?.length);
	const idOf = (row: Row) => String(row[rowId]);
	// Rows that can't be selected (the owner, yourself) are left out of "select page"
	const pageIds = rows.filter((row) => isRowSelectable?.(row) ?? true).map(idOf);
	const selected = new Set(state.selection);
	const pageSelected = pageIds.length > 0 && pageIds.every((id) => selected.has(id));
	const somePageSelected = pageIds.some((id) => selected.has(id));
	const columnCount = shown.length + (withSelection ? 1 : 0);
	const pageCount = Math.max(1, Math.ceil(total / state.pageSize));
	const firstIndex = (state.page - 1) * state.pageSize + 1;
	const lastIndex = Math.min(total, state.page * state.pageSize);
	const selectedCount = allMatchingSelected ? total : state.selection.length;

	const setSelection = (selection: string[]) => onStateChange({ ...state, selection });
	const toggleRow = (id: string) =>
		setSelection(selected.has(id) ? state.selection.filter((candidate) => candidate !== id) : [...state.selection, id]);
	const togglePage = () =>
		setSelection(
			pageSelected
				? state.selection.filter((id) => !pageIds.includes(id))
				: [...new Set([...state.selection, ...pageIds])],
		);
	const toggleSort = (field: string) =>
		onStateChange({
			...state,
			page: 1,
			sort: { field, direction: state.sort?.field === field && state.sort.direction === "asc" ? "desc" : "asc" },
		});
	const rowCheckbox = (row: Row, id: string, isSelected: boolean) => (
		<Checkbox
			aria-label={`Select ${rowLabel ? rowLabel(row) : id}`}
			checked={isSelected}
			disabled={!(isRowSelectable?.(row) ?? true)}
			onChange={() => toggleRow(id)}
		/>
	);

	// Loading wins, then an error, then the two empty states; the same content fills the table or the card list
	let stateContent: ReactNode = null;
	if (!loading && error) {
		stateContent = (
			<EmptyState
				variant="light"
				color="red"
				icon={<TbAlertTriangle />}
				title={error.title ?? `${dataTableCapitalize(itemName.plural)} didn't load`}
				description={error.message}
			>
				<EmptyState.Actions>
					{onRetry && (
						<Button variant="default" onClick={onRetry}>
							Try again
						</Button>
					)}
					{error.requestId && <CopyableId value={error.requestId} />}
				</EmptyState.Actions>
			</EmptyState>
		);
	} else if (!loading && rows.length === 0 && filtered) {
		stateContent = (
			<EmptyState icon={<TbFilterOff />} title="No results" description={`No ${itemName.plural} match these filters.`}>
				{onClearFilters && (
					<EmptyState.Actions>
						<Button variant="default" onClick={onClearFilters}>
							Clear filters
						</Button>
					</EmptyState.Actions>
				)}
			</EmptyState>
		);
	} else if (!loading && rows.length === 0) {
		stateContent = emptyState ?? <EmptyState title={`No ${itemName.plural} yet`} />;
	}

	let body: ReactNode;
	if (loading) {
		body = Array.from({ length: Math.min(state.pageSize, 5) }, (_, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: placeholder rows have no identity
			<Table.Tr key={index}>
				{withSelection && (
					<Table.Td w={40}>
						<Skeleton h={16} w={16} />
					</Table.Td>
				)}
				{shown.map((column) => (
					<Table.Td key={column.key}>
						<Skeleton h={12} w={column.align === "right" ? "50%" : "70%"} ml={column.align === "right" ? "auto" : 0} />
					</Table.Td>
				))}
			</Table.Tr>
		));
	} else if (stateContent) {
		body = (
			<Table.Tr>
				<Table.Td colSpan={columnCount} py="xl">
					{stateContent}
				</Table.Td>
			</Table.Tr>
		);
	} else {
		body = rows.map((row) => {
			const id = idOf(row);
			const isSelected = allMatchingSelected || selected.has(id);
			return (
				<Table.Tr
					key={id}
					bg={isSelected ? "var(--mantine-primary-color-light)" : undefined}
					onClick={onRowClick ? () => onRowClick(row) : undefined}
					style={onRowClick ? { cursor: "pointer" } : undefined}
				>
					{withSelection && (
						<Table.Td w={40} onClick={(event) => event.stopPropagation()}>
							{rowCheckbox(row, id, isSelected)}
						</Table.Td>
					)}
					{shown.map((column) => (
						<Table.Td key={column.key} ta={column.align ?? "left"}>
							{column.render(row)}
						</Table.Td>
					))}
				</Table.Tr>
			);
		});
	}

	// Cards: the primary columns on top, the secondary ones as label and value; no column marked means the first is primary
	const actionsColumn = shown.find((column) => column.key === "actions");
	const contentColumns = shown.filter((column) => column !== actionsColumn);
	const marked = contentColumns.some((column) => column.primary || column.secondary);
	const primaryColumns = marked ? contentColumns.filter((column) => column.primary) : contentColumns.slice(0, 1);
	const secondaryColumns = marked ? contentColumns.filter((column) => column.secondary) : contentColumns.slice(1);
	const sortableColumns = shown.filter((column) => column.sortable);

	let cardList: ReactNode;
	if (loading) {
		cardList = (
			<Stack gap="xs" p="sm">
				{Array.from({ length: Math.min(state.pageSize, 3) }, (_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: placeholder cards have no identity
					<Paper key={index} withBorder p="sm">
						<Stack gap={8}>
							<Skeleton h={12} w="55%" />
							<Skeleton h={10} w="35%" />
							<Skeleton h={10} w="80%" />
						</Stack>
					</Paper>
				))}
			</Stack>
		);
	} else if (stateContent) {
		cardList = (
			<Box px="sm" py="xl">
				{stateContent}
			</Box>
		);
	} else {
		cardList = (
			<Stack gap="xs" p="sm">
				{rows.map((row) => {
					const id = idOf(row);
					const isSelected = allMatchingSelected || selected.has(id);
					return (
						<Paper
							key={id}
							withBorder
							p="sm"
							bg={isSelected ? "var(--mantine-primary-color-light)" : undefined}
							onClick={onRowClick ? () => onRowClick(row) : undefined}
							style={onRowClick ? { cursor: "pointer" } : undefined}
						>
							<Group align="flex-start" wrap="nowrap" gap="sm">
								{withSelection && (
									<Box pt={2} onClick={(event) => event.stopPropagation()}>
										{rowCheckbox(row, id, isSelected)}
									</Box>
								)}
								<Box miw={0} style={{ flex: 1 }}>
									{renderCard ? (
										renderCard(row)
									) : (
										<Stack gap="xs">
											{primaryColumns.map((column) => (
												<Box key={column.key} miw={0}>
													{column.render(row)}
												</Box>
											))}
											{secondaryColumns.length > 0 && (
												<SimpleGrid cols={2} spacing="sm" verticalSpacing={6}>
													{secondaryColumns.map((column) => (
														<Box key={column.key} miw={0}>
															<Text size="xs" c="dimmed">
																{dataTableColumnLabel(column)}
															</Text>
															<Box fz="sm">{column.render(row)}</Box>
														</Box>
													))}
												</SimpleGrid>
											)}
										</Stack>
									)}
								</Box>
								{actionsColumn?.render(row)}
							</Group>
						</Paper>
					);
				})}
			</Stack>
		);
	}

	// Cards have no column headers, so selecting the page and sorting move above the list
	const cardHeader =
		cards && !stateContent && (withSelection || sortableColumns.length > 0) ? (
			<Group justify="space-between" wrap="nowrap" gap="sm" w="100%">
				{withSelection ? (
					<Checkbox
						label="Select this page"
						checked={pageSelected || allMatchingSelected}
						indeterminate={!pageSelected && somePageSelected && !allMatchingSelected}
						disabled={loading || rows.length === 0}
						onChange={togglePage}
					/>
				) : (
					<span />
				)}
				{sortableColumns.length > 0 && (
					<Group gap={4} wrap="nowrap">
						<Select
							size="xs"
							w={140}
							aria-label="Sort by"
							placeholder="Sort by"
							data={sortableColumns.map((column) => ({ value: column.key, label: dataTableColumnLabel(column) }))}
							value={state.sort?.field ?? null}
							allowDeselect={false}
							onChange={(field) =>
								field &&
								onStateChange({ ...state, page: 1, sort: { field, direction: state.sort?.direction ?? "asc" } })
							}
						/>
						<ActionIcon
							variant="default"
							size="input-xs"
							disabled={!state.sort}
							aria-label={state.sort?.direction === "desc" ? "Sort ascending" : "Sort descending"}
							onClick={() =>
								state.sort &&
								onStateChange({
									...state,
									page: 1,
									sort: { ...state.sort, direction: state.sort.direction === "asc" ? "desc" : "asc" },
								})
							}
						>
							{state.sort?.direction === "desc" ? <TbSortDescending /> : <TbSortAscending />}
						</ActionIcon>
					</Group>
				)}
			</Group>
		) : undefined;

	const contained = bulkActionsPosition === "table";
	const bulkBarOpened = state.selection.length > 0 || allMatchingSelected;

	return (
		<Box
			ref={frameRef}
			// Room for the bar under the table, so it never covers the last row or the pagination
			style={contained ? { position: "relative", contain: "layout", paddingBottom: bulkBarOpened ? 64 : 0 } : undefined}
		>
			<Pane
				header={cardHeader}
				footer={
					!loading &&
					!error &&
					rows.length > 0 && (
						<Group justify="space-between">
							<Text size="sm" c="dimmed">
								<NumberText value={firstIndex} />–<NumberText value={lastIndex} /> of <NumberText value={total} />
							</Text>
							{pageCount > 1 && (
								<Pagination
									size="sm"
									siblings={cards ? 0 : 1}
									total={pageCount}
									value={state.page}
									onChange={(page) => onStateChange({ ...state, page })}
								/>
							)}
						</Group>
					)
				}
			>
				{cards ? (
					cardList
				) : (
					<Table.ScrollContainer minWidth={minWidth} type="native">
						<Table
							highlightOnHover={!loading && rows.length > 0}
							verticalSpacing={dataTableSpacing[state.density ?? "default"]}
							tabularNums
						>
							<Table.Thead>
								<Table.Tr>
									{withSelection && (
										<Table.Th w={40}>
											<Checkbox
												aria-label="Select this page"
												checked={pageSelected || allMatchingSelected}
												indeterminate={!pageSelected && somePageSelected && !allMatchingSelected}
												disabled={loading || rows.length === 0}
												onChange={togglePage}
											/>
										</Table.Th>
									)}
									{shown.map((column) => {
										const sorted = state.sort?.field === column.key ? state.sort.direction : undefined;
										return (
											<Table.Th
												key={column.key}
												w={column.width}
												ta={column.align ?? "left"}
												aria-sort={sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : undefined}
											>
												{column.sortable ? (
													<UnstyledButton onClick={() => toggleSort(column.key)} fw={600} fz="sm">
														<Group gap={4} wrap="nowrap" justify={column.align === "right" ? "flex-end" : "flex-start"}>
															{column.header}
															{sorted === "asc" ? (
																<TbArrowUp aria-hidden />
															) : sorted === "desc" ? (
																<TbArrowDown aria-hidden />
															) : (
																<TbSelector aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />
															)}
														</Group>
													</UnstyledButton>
												) : (
													column.header
												)}
											</Table.Th>
										);
									})}
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>{body}</Table.Tbody>
						</Table>
					</Table.ScrollContainer>
				)}
			</Pane>

			{withSelection && (
				<ActionBar
					opened={bulkBarOpened}
					onClose={() => setSelection([])}
					withinPortal={!contained}
					position={contained ? { bottom: 12, left: 0, right: 0 } : undefined}
					shadow="md"
					aria-label="Bulk actions"
				>
					<Text size="sm" fw={500} style={{ whiteSpace: "nowrap" }}>
						<NumberText value={selectedCount} /> selected
					</Text>
					{!allMatchingSelected && pageSelected && total > state.selection.length && onSelectAllMatching && (
						<Anchor component="button" size="sm" onClick={onSelectAllMatching} style={{ whiteSpace: "nowrap" }}>
							Select all <NumberText value={total} />
						</Anchor>
					)}
					<ActionBar.Divider />
					{bulkActions?.map((action) =>
						action.tone === "danger" ? (
							<DataTableDangerAction
								key={action.label}
								action={action}
								count={selectedCount}
								itemName={itemName}
								onConfirm={() => action.onClick(state.selection, allMatchingSelected)}
							/>
						) : (
							<Button
								key={action.label}
								variant="subtle"
								color="gray"
								size="xs"
								leftSection={action.icon}
								onClick={() => action.onClick(state.selection, allMatchingSelected)}
							>
								{action.label}
							</Button>
						),
					)}
					<ActionBar.CloseButton aria-label="Clear selection" />
				</ActionBar>
			)}
		</Box>
	);
}

export function dataTableColumnLabel<Row>(column: DataTableColumn<Row>) {
	return column.label ?? (typeof column.header === "string" ? column.header : column.key);
}

function dataTableArrangeColumns<Row>(columns: DataTableColumn<Row>[], columnsState?: DataTableColumnsState) {
	if (!columnsState) return columns;
	const visible = new Set(columnsState.visible);
	const position = new Map(columnsState.order.map((key, index) => [key, index]));
	const locked = columns.filter((column) => column.locked && column.key !== "actions");
	const actions = columns.filter((column) => column.key === "actions");
	const movable = columns
		.filter((column) => !column.locked && column.key !== "actions" && visible.has(column.key))
		.map((column, index) => ({ column, rank: position.get(column.key) ?? columnsState.order.length + index }))
		.sort((first, second) => first.rank - second.rank)
		.map(({ column }) => column);
	return [...locked, ...movable, ...actions];
}

function dataTableCapitalize(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function DataTableDangerAction({
	action,
	count,
	itemName,
	onConfirm,
}: {
	action: DataTableBulkAction;
	count: number;
	itemName: { singular: string; plural: string };
	onConfirm: () => void;
}) {
	return (
		<ConfirmAction
			action={action.label}
			noun={{ one: itemName.singular, other: itemName.plural }}
			count={count}
			consequence={action.confirmation}
			tone="danger"
			onConfirm={onConfirm}
			trigger={(open) => (
				<Button variant="subtle" color="red" size="xs" leftSection={action.icon} onClick={open}>
					{action.label}
				</Button>
			)}
		/>
	);
}

export function createColumnHelpers<Row>() {
	type Key = keyof Row & string;
	const read = (row: Row, key: Key) => row[key] as unknown;

	return {
		text: (key: Key, options: { header: string; sortable?: boolean }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			sortable: options.sortable,
			render: (row) => {
				const value = read(row, key);
				return value == null || value === "" ? emptyValue : String(value);
			},
		}),
		entity: (key: Key, options: { header: string; secondary?: Key; sortable?: boolean }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			sortable: options.sortable,
			render: (row) => (
				<Box miw={0}>
					<Text size="sm" fw={500} truncate>
						{String(read(row, key) ?? emptyValue)}
					</Text>
					{options.secondary && (
						<Text size="xs" c="dimmed" truncate>
							{String(read(row, options.secondary) ?? emptyValue)}
						</Text>
					)}
				</Box>
			),
		}),
		status: <Value extends string>(
			key: Key,
			tones: StatusMap<Value>,
			options: { header: string; sortable?: boolean },
		): DataTableColumn<Row> => ({
			key,
			header: options.header,
			sortable: options.sortable,
			render: (row) => <StatusBadge value={read(row, key) as Value} tones={tones} />,
		}),
		money: (key: Key, options: { header: string; currency: string; sortable?: boolean }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			align: "right",
			sortable: options.sortable,
			render: (row) => <MoneyText amount={read(row, key) as number | null} currency={options.currency} />,
		}),
		number: (key: Key, options: { header: string; sortable?: boolean }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			align: "right",
			sortable: options.sortable,
			render: (row) => <NumberText value={read(row, key) as number | null} />,
		}),
		relative: (key: Key, options: { header: string; sortable?: boolean }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			sortable: options.sortable,
			render: (row) => <RelativeTime value={read(row, key) as Date | null} capitalize />,
		}),
		date: (key: Key, options: { header: string; sortable?: boolean }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			sortable: options.sortable,
			render: (row) => <DateText value={read(row, key) as Date | null} />,
		}),
		id: (key: Key, options: { header: string }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			render: (row) => {
				const value = read(row, key);
				return value == null ? emptyValue : <CopyableId value={String(value)} />;
			},
		}),
		user: (key: Key, options: { header: string }): DataTableColumn<Row> => ({
			key,
			header: options.header,
			render: (row) => {
				const user = read(row, key) as UserChipUser | null;
				return user ? <UserChip user={user} /> : emptyValue;
			},
		}),
		actions: (
			actions: DataTableRowAction<Row>[],
			options: { label?: (row: Row) => string } = {},
		): DataTableColumn<Row> => ({
			key: "actions",
			header: <VisuallyHidden>Actions</VisuallyHidden>,
			align: "right",
			width: 48,
			render: (row) => <DataTableRowActions row={row} actions={actions} target={options.label?.(row)} />,
		}),
	};
}

function DataTableRowActions<Row>({
	row,
	actions,
	target,
}: {
	row: Row;
	actions: DataTableRowAction<Row>[];
	target?: string;
}) {
	// The confirmation lives outside the menu, so it survives the menu closing; the last action stays for the exit animation
	const [confirming, setConfirming] = useState<DataTableRowAction<Row> | null>(null);
	const [confirmOpened, setConfirmOpened] = useState(false);

	return (
		// Row clicks open the record; nothing in here should
		<Box onClick={(event) => event.stopPropagation()}>
			<Menu position="bottom-end" withinPortal>
				<Menu.Target>
					<ActionIcon variant="subtle" color="gray" aria-label="Row actions">
						<TbDots />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					{actions.map((action) =>
						action.tone === "danger" ? (
							<Menu.Item
								key={action.label}
								leftSection={action.icon}
								color="red"
								onClick={() => {
									setConfirming(action);
									setConfirmOpened(true);
								}}
							>
								{action.label}
							</Menu.Item>
						) : (
							<Menu.Item key={action.label} leftSection={action.icon} onClick={() => action.onClick(row)}>
								{action.label}
							</Menu.Item>
						),
					)}
				</Menu.Dropdown>
			</Menu>
			{confirming && (
				<ConfirmAction
					opened={confirmOpened}
					onClose={() => setConfirmOpened(false)}
					action={confirming.label}
					target={target}
					consequence={confirming.confirmation}
					tone="danger"
					onConfirm={() => confirming.onClick(row)}
				/>
			)}
		</Box>
	);
}

interface FilterBarProps {
	fields: FilterField[];
	value: { and: FilterNode[] };
	onChange: (value: { and: FilterNode[] }) => void;
	search: string;
	onSearchChange: (search: string) => void;
	searchPlaceholder?: string;
	resultCount?: number;
	views?: ReactNode;
	advanced?: boolean;
}

export function FilterBar({
	fields,
	value,
	onChange,
	search,
	onSearchChange,
	searchPlaceholder = "Search",
	resultCount,
	views,
	advanced = false,
}: FilterBarProps) {
	const { locale } = useFormatSettings();
	const [searchDraft, setSearchDraft] = useState(search);
	// Follow the parent when it changes the search itself, e.g. "Clear filters"
	const [syncedSearch, setSyncedSearch] = useState(search);
	if (search !== syncedSearch) {
		setSyncedSearch(search);
		setSearchDraft(search);
	}
	const debouncedSearch = useDebouncedCallback(onSearchChange, 250);
	const usedFields = value.and.flatMap((node) => (isFilterGroup(node) ? [] : [node.field]));
	const active = value.and.length > 0 || search.length > 0;
	const remove = (index: number) => onChange({ and: value.and.filter((_, candidate) => candidate !== index) });

	return (
		<Group gap="xs" wrap="wrap">
			<TextInput
				aria-label={searchPlaceholder}
				placeholder={searchPlaceholder}
				leftSection={<TbSearch />}
				value={searchDraft}
				onChange={(event) => {
					setSearchDraft(event.currentTarget.value);
					debouncedSearch(event.currentTarget.value);
				}}
				w={240}
			/>
			{value.and.map((node, index) => {
				if (isFilterGroup(node)) {
					const count = filterGroupChildren(node).length;
					return (
						<Pill
							key={JSON.stringify(node)}
							size="md"
							withRemoveButton
							onRemove={() => remove(index)}
							removeButtonProps={{ "aria-label": "Remove the advanced filter" }}
						>
							<Text span c="dimmed" inherit>
								Advanced:
							</Text>{" "}
							{count} conditions
						</Pill>
					);
				}
				const field = fields.find((candidate) => candidate.key === node.field);
				if (!field) return null;
				return (
					<Pill
						key={field.key}
						size="md"
						withRemoveButton
						onRemove={() => remove(index)}
						removeButtonProps={{ "aria-label": `Remove the ${field.label} filter` }}
					>
						<Text span c="dimmed" inherit>
							{field.label}:
						</Text>{" "}
						{describeFilterValue(field, node, locale)}
					</Pill>
				);
			})}
			<FilterBarAddFilter
				fields={fields.filter((field) => !usedFields.includes(field.key))}
				onAdd={(condition) => onChange({ and: [...value.and, condition] })}
			/>
			{advanced && <FilterBarAdvanced fields={fields} value={value} onChange={onChange} />}
			{value.and.length > 0 && (
				<Anchor component="button" size="sm" onClick={() => onChange({ and: [] })}>
					Clear all
				</Anchor>
			)}
			<Box style={{ flex: 1 }} />
			{active && resultCount != null && (
				<Text size="sm" c="dimmed">
					{formatCount(resultCount, { one: "result", other: "results" })}
				</Text>
			)}
			{views}
		</Group>
	);
}

function FilterBarAdvanced({
	fields,
	value,
	onChange,
}: {
	fields: FilterField[];
	value: { and: FilterNode[] };
	onChange: (value: { and: FilterNode[] }) => void;
}) {
	const [opened, setOpened] = useState(false);
	const [draft, setDraft] = useState<FilterGroup>(value);

	return (
		<Popover
			opened={opened}
			onChange={setOpened}
			position="bottom-start"
			shadow="md"
			onOpen={() => setDraft(value.and.length > 0 ? value : { and: [filterDefaultCondition(fields[0])] })}
		>
			<Popover.Target>
				<Button variant="subtle" size="xs" leftSection={<TbAdjustmentsHorizontal />} onClick={() => setOpened(!opened)}>
					Advanced
				</Button>
			</Popover.Target>
			<Popover.Dropdown p={0} w={640} maw="calc(100vw - 32px)" style={{ border: "none" }}>
				<AdvancedFilterBuilder
					fields={fields}
					value={draft}
					onChange={setDraft}
					onApply={() => {
						// The bar's top level is always an `and`; an `or` at the top becomes one nested group
						onChange("and" in draft ? draft : { and: [draft] });
						setOpened(false);
					}}
				/>
			</Popover.Dropdown>
		</Popover>
	);
}

function FilterBarAddFilter({ fields, onAdd }: { fields: FilterField[]; onAdd: (condition: FilterCondition) => void }) {
	const [opened, setOpened] = useState(false);
	const [draft, setDraft] = useState<FilterCondition | null>(null);
	const field = draft ? fields.find((candidate) => candidate.key === draft.field) : undefined;

	const close = () => {
		setOpened(false);
		setDraft(null);
	};

	return (
		<Popover
			opened={opened}
			onChange={(next) => (next ? setOpened(true) : close())}
			position="bottom-start"
			shadow="md"
		>
			<Popover.Target>
				<Button
					variant="default"
					size="xs"
					leftSection={<TbPlus />}
					disabled={fields.length === 0}
					onClick={() => (opened ? close() : setOpened(true))}
				>
					Add filter
				</Button>
			</Popover.Target>
			<Popover.Dropdown w={280} p={draft ? "sm" : 4}>
				{draft && field ? (
					<Stack gap="sm">
						<Text size="sm" fw={600}>
							{field.label}
						</Text>
						<Select
							aria-label="Operator"
							data={filterOperators[field.type]}
							value={draft.operator}
							allowDeselect={false}
							comboboxProps={filterInlineDropdown}
							onChange={(operator) =>
								operator &&
								setDraft({
									...draft,
									operator: operator as FilterOperator,
									value: filterDefaultValue(field, operator as FilterOperator),
								})
							}
						/>
						<FilterValueInput
							field={field}
							condition={draft}
							onChange={(next) => setDraft({ ...draft, value: next })}
						/>
						<Group justify="flex-end" gap="xs">
							<Button variant="default" size="xs" onClick={close}>
								Cancel
							</Button>
							<Button
								size="xs"
								disabled={
									!(draft.operator === "isTrue" || draft.operator === "isFalse") && !filterValueIsSet(draft.value)
								}
								onClick={() => {
									onAdd(draft);
									close();
								}}
							>
								Add filter
							</Button>
						</Group>
					</Stack>
				) : (
					fields.map((candidate) => (
						<UnstyledButton
							key={candidate.key}
							display="block"
							w="100%"
							px="sm"
							py={6}
							fz="sm"
							style={{ borderRadius: "var(--mantine-radius-sm)" }}
							onClick={() => setDraft(filterDefaultCondition(candidate))}
						>
							{candidate.label}
						</UnstyledButton>
					))
				)}
			</Popover.Dropdown>
		</Popover>
	);
}

export interface SavedView<State> {
	id: string;
	name: string;
	scope: "personal" | "team";
	owner: UserChipUser;
	state: State;
}

interface SavedViewsMenuProps<State> {
	views: SavedView<State>[];
	activeId: string;
	current: State;
	currentUser: UserChipUser;
	onSelect: (id: string) => void;
	onSave: (name: string, scope: "personal" | "team") => void;
	onUpdate: (id: string) => void;
	onDelete: (id: string) => void;
	canShare?: boolean;
	defaultOpened?: boolean;
}

export function SavedViewsMenu<State>({
	views,
	activeId,
	current,
	currentUser,
	onSelect,
	onSave,
	onUpdate,
	onDelete,
	canShare = false,
	defaultOpened = false,
}: SavedViewsMenuProps<State>) {
	const [opened, setOpened] = useState(defaultOpened);
	const [saving, setSaving] = useState(false);
	const [name, setName] = useState("");
	const [scope, setScope] = useState<"personal" | "team">("personal");
	const active = views.find((view) => view.id === activeId);
	const modified = active ? JSON.stringify(active.state) !== JSON.stringify(current) : false;
	const ownsActive = active?.owner.name === currentUser.name;

	const section = (label: string, sectionScope: "personal" | "team") => {
		const items = views.filter((view) => view.scope === sectionScope);
		if (items.length === 0) return null;
		return (
			<Box>
				<Text size="xs" c="dimmed" fw={500} px="sm" pt="xs" pb={4}>
					{label}
				</Text>
				{items.map((view) => {
					const owned = view.owner.name === currentUser.name;
					return (
						<Group key={view.id} gap={4} wrap="nowrap" pr={4}>
							<UnstyledButton
								px="sm"
								py={6}
								style={{ flex: 1, borderRadius: "var(--mantine-radius-sm)" }}
								bg={view.id === activeId ? "var(--mantine-primary-color-light)" : undefined}
								onClick={() => {
									onSelect(view.id);
									setOpened(false);
								}}
							>
								<Group gap="xs" wrap="nowrap" justify="space-between">
									<Text size="sm" truncate>
										{view.name}
									</Text>
									{!owned && (
										<Text size="xs" c="dimmed" style={{ whiteSpace: "nowrap" }}>
											{view.owner.name}
										</Text>
									)}
								</Group>
							</UnstyledButton>
							{owned && (
								<ActionIcon
									variant="subtle"
									color="gray"
									size="sm"
									aria-label={`Delete ${view.name}`}
									onClick={() => onDelete(view.id)}
								>
									<TbTrash />
								</ActionIcon>
							)}
						</Group>
					);
				})}
			</Box>
		);
	};

	return (
		<Popover
			opened={opened}
			onChange={(next) => {
				setOpened(next);
				if (!next) setSaving(false);
			}}
			position="bottom-end"
			shadow="md"
			withinPortal={false}
		>
			<Popover.Target>
				<Button
					variant="default"
					size="xs"
					leftSection={<TbBookmark />}
					rightSection={<TbChevronDown />}
					onClick={() => setOpened((current) => !current)}
				>
					View: {active?.name ?? "All"}
					{modified && (
						<Text span c="dimmed" inherit fw={400} ml={6}>
							(modified)
						</Text>
					)}
				</Button>
			</Popover.Target>
			<Popover.Dropdown w={300} p={4}>
				{section("Personal", "personal")}
				{section("Team", "team")}
				<Divider my={4} />
				{saving ? (
					<Stack gap="sm" p="sm">
						<TextInput
							label="Name"
							value={name}
							onChange={(event) => setName(event.currentTarget.value)}
							data-autofocus
						/>
						{canShare && (
							<SegmentedControl
								fullWidth
								size="xs"
								value={scope}
								onChange={(next) => setScope(next as "personal" | "team")}
								data={[
									{ value: "personal", label: "Only me" },
									{ value: "team", label: "Team" },
								]}
							/>
						)}
						<Group justify="flex-end" gap="xs">
							<Button variant="default" size="xs" onClick={() => setSaving(false)}>
								Cancel
							</Button>
							<Button
								size="xs"
								disabled={name.trim() === ""}
								onClick={() => {
									onSave(name.trim(), scope);
									setSaving(false);
									setName("");
								}}
							>
								Save view
							</Button>
						</Group>
					</Stack>
				) : (
					<Stack gap={0}>
						{modified && active && ownsActive && (
							<UnstyledButton
								px="sm"
								py={6}
								fz="sm"
								style={{ borderRadius: "var(--mantine-radius-sm)" }}
								onClick={() => onUpdate(active.id)}
							>
								Update “{active.name}”
							</UnstyledButton>
						)}
						<UnstyledButton
							px="sm"
							py={6}
							fz="sm"
							style={{ borderRadius: "var(--mantine-radius-sm)" }}
							onClick={() => setSaving(true)}
						>
							{active && !ownsActive ? "Save a copy as a new view…" : "Save current view…"}
						</UnstyledButton>
					</Stack>
				)}
			</Popover.Dropdown>
		</Popover>
	);
}

interface AdvancedFilterBuilderProps {
	fields: FilterField[];
	value: FilterGroup;
	onChange: (value: FilterGroup) => void;
	matchCount?: number;
	onApply?: () => void;
	onSaveAsView?: () => void;
}

export function AdvancedFilterBuilder({
	fields,
	value,
	onChange,
	matchCount,
	onApply,
	onSaveAsView,
}: AdvancedFilterBuilderProps) {
	const children = filterGroupChildren(value);
	const conjunction = filterGroupConjunction(value);
	const setChildren = (next: FilterNode[]) => onChange(filterGroupWith(conjunction, next));

	return (
		<Paper withBorder p="md">
			<Stack gap="sm">
				<AdvancedFilterBuilderRows fields={fields} group={value} onChange={onChange} nested={false} />
				<Group gap="xs">
					<Button
						variant="subtle"
						size="xs"
						leftSection={<TbPlus />}
						onClick={() => setChildren([...children, filterDefaultCondition(fields[0])])}
					>
						Add condition
					</Button>
					<Button
						variant="subtle"
						size="xs"
						leftSection={<TbPlus />}
						onClick={() => setChildren([...children, { or: [filterDefaultCondition(fields[0])] }])}
					>
						Add group
					</Button>
				</Group>
				<Divider />
				<Group justify="space-between">
					<Text size="sm" c="dimmed">
						{matchCount != null && <>{formatCount(matchCount, { one: "match", other: "matches" })}</>}
					</Text>
					<Group gap="xs">
						{onSaveAsView && (
							<Button variant="default" size="xs" onClick={onSaveAsView}>
								Save as view
							</Button>
						)}
						{onApply && (
							<Button size="xs" onClick={onApply}>
								Apply
							</Button>
						)}
					</Group>
				</Group>
			</Stack>
		</Paper>
	);
}

function AdvancedFilterBuilderRows({
	fields,
	group,
	onChange,
	nested,
}: {
	fields: FilterField[];
	group: FilterGroup;
	onChange: (group: FilterGroup) => void;
	nested: boolean;
}) {
	const children = filterGroupChildren(group);
	const conjunction = filterGroupConjunction(group);
	const setChild = (index: number, node: FilterNode) =>
		onChange(
			filterGroupWith(
				conjunction,
				children.map((child, candidate) => (candidate === index ? node : child)),
			),
		);
	const removeChild = (index: number) =>
		onChange(
			filterGroupWith(
				conjunction,
				children.filter((_, candidate) => candidate !== index),
			),
		);

	const connector = (index: number) => {
		if (index === 0) {
			return (
				<Text size="sm" c="dimmed" w={80} style={{ flexShrink: 0 }}>
					{nested ? "" : "Where"}
				</Text>
			);
		}
		if (index === 1) {
			return (
				<Select
					aria-label="Match all or any"
					comboboxProps={filterInlineDropdown}
					w={80}
					style={{ flexShrink: 0 }}
					data={[
						{ value: "and", label: "and" },
						{ value: "or", label: "or" },
					]}
					value={conjunction}
					allowDeselect={false}
					onChange={(next) => next && onChange(filterGroupWith(next as "and" | "or", children))}
				/>
			);
		}
		return (
			<Text size="sm" c="dimmed" w={80} style={{ flexShrink: 0 }} pl="xs">
				{conjunction}
			</Text>
		);
	};

	return (
		<Stack gap="xs">
			{children.map((node, index) => {
				if (isFilterGroup(node)) {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: conditions have no identity beyond their position
						<Group key={index} align="flex-start" gap="xs" wrap="nowrap">
							{connector(index)}
							<Paper withBorder p="sm" bg="var(--mantine-color-default-hover)" style={{ flex: 1, minWidth: 0 }}>
								<Stack gap="xs">
									<AdvancedFilterBuilderRows
										fields={fields}
										group={node}
										onChange={(next) => setChild(index, next)}
										nested
									/>
									<Group justify="space-between">
										<Button
											variant="subtle"
											size="xs"
											leftSection={<TbPlus />}
											onClick={() =>
												setChild(
													index,
													filterGroupWith(filterGroupConjunction(node), [
														...filterGroupChildren(node),
														filterDefaultCondition(fields[0]),
													]),
												)
											}
										>
											Add condition
										</Button>
										<Button variant="subtle" color="gray" size="xs" onClick={() => removeChild(index)}>
											Remove group
										</Button>
									</Group>
								</Stack>
							</Paper>
						</Group>
					);
				}
				const field = fields.find((candidate) => candidate.key === node.field) ?? fields[0];
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: conditions have no identity beyond their position
					<Group key={index} gap="xs" wrap="nowrap" align="flex-start">
						{connector(index)}
						<Group gap="xs" wrap="wrap" style={{ flex: 1, minWidth: 0 }}>
							<Select
								aria-label="Field"
								comboboxProps={filterInlineDropdown}
								w={150}
								style={{ flexShrink: 0 }}
								data={fields.map((candidate) => ({ value: candidate.key, label: candidate.label }))}
								value={field.key}
								allowDeselect={false}
								onChange={(next) => {
									const nextField = fields.find((candidate) => candidate.key === next);
									if (nextField) setChild(index, filterDefaultCondition(nextField));
								}}
							/>
							<Select
								aria-label="Operator"
								comboboxProps={filterInlineDropdown}
								w={140}
								style={{ flexShrink: 0 }}
								data={filterOperators[field.type]}
								value={node.operator}
								allowDeselect={false}
								onChange={(next) =>
									next &&
									setChild(index, {
										...node,
										operator: next as FilterOperator,
										value: filterDefaultValue(field, next as FilterOperator),
									})
								}
							/>
							<Box style={{ flex: 1, minWidth: 140 }}>
								<FilterValueInput
									field={field}
									condition={node}
									onChange={(next) => setChild(index, { ...node, value: next })}
								/>
							</Box>
						</Group>
						<CloseButton aria-label="Remove condition" mt={6} onClick={() => removeChild(index)} />
					</Group>
				);
			})}
		</Stack>
	);
}

export interface TreeTableColumn<Row> {
	key: string;
	header: string;
	value?: (row: Row) => number;
	format?: (value: number) => ReactNode;
	render?: (row: Row) => ReactNode;
}

interface TreeTableProps<Row> {
	rows: Row[];
	rowId: (row: Row) => string;
	label: { header: string; render: (row: Row) => ReactNode };
	columns: TreeTableColumn<Row>[];
	hasChildren: (row: Row) => boolean;
	getChildren: (row: Row) => Row[] | "loading";
	expanded: string[];
	onExpandedChange: (expanded: string[]) => void;
	aggregate?: Partial<Record<string, "sum">>;
}

export function TreeTable<Row>({
	rows,
	rowId,
	label,
	columns,
	hasChildren,
	getChildren,
	expanded,
	onExpandedChange,
	aggregate,
}: TreeTableProps<Row>) {
	const toggle = (id: string) =>
		onExpandedChange(expanded.includes(id) ? expanded.filter((candidate) => candidate !== id) : [...expanded, id]);
	const indent = (depth: number) => depth * 24;
	const cell = (column: TreeTableColumn<Row>, row: Row) =>
		column.render ? column.render(row) : column.value ? (column.format ?? String)(column.value(row)) : emptyValue;

	const renderRows = (level: Row[], depth: number): ReactNode[] =>
		level.flatMap((row) => {
			const id = rowId(row);
			const expandable = hasChildren(row);
			const isExpanded = expandable && expanded.includes(id);
			const children = isExpanded ? getChildren(row) : [];
			const rendered = label.render(row);
			const name = typeof rendered === "string" ? rendered : id;
			const own = (
				<Table.Tr key={id}>
					<Table.Td>
						<Group gap={4} wrap="nowrap" pl={indent(depth)}>
							{expandable ? (
								<ActionIcon
									variant="subtle"
									color="gray"
									size="sm"
									aria-expanded={isExpanded}
									aria-label={`${isExpanded ? "Collapse" : "Expand"} ${name}`}
									onClick={() => toggle(id)}
								>
									{isExpanded ? <TbChevronDown /> : <TbChevronRight />}
								</ActionIcon>
							) : (
								<Box w={28} />
							)}
							<Text size="sm" fw={depth === 0 ? 500 : 400}>
								{rendered}
							</Text>
						</Group>
					</Table.Td>
					{columns.map((column) => (
						<Table.Td key={column.key} ta={column.value ? "right" : "left"}>
							{cell(column, row)}
						</Table.Td>
					))}
				</Table.Tr>
			);
			if (children === "loading") {
				return [
					own,
					<Table.Tr key={`${id}-loading`}>
						<Table.Td colSpan={columns.length + 1}>
							<Group gap="xs" pl={indent(depth + 1) + 32}>
								<Loader size="xs" />
								<Text size="sm" c="dimmed">
									Loading
								</Text>
							</Group>
						</Table.Td>
					</Table.Tr>,
				];
			}
			return [own, ...renderRows(children, depth + 1)];
		});

	const totals = aggregate && columns.some((column) => aggregate[column.key] === "sum");

	return (
		<Box style={frameStyle}>
			<Table.ScrollContainer minWidth={420} type="native">
				<Table tabularNums verticalSpacing={6}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>{label.header}</Table.Th>
							{columns.map((column) => (
								<Table.Th key={column.key} ta={column.value ? "right" : "left"}>
									{column.header}
								</Table.Th>
							))}
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{renderRows(rows, 0)}</Table.Tbody>
					{totals && (
						<Table.Tfoot>
							<Table.Tr>
								<Table.Th>Total</Table.Th>
								{columns.map((column) => {
									const sum =
										aggregate?.[column.key] === "sum" && column.value
											? rows.reduce((total, row) => total + (column.value?.(row) ?? 0), 0)
											: null;
									return (
										<Table.Th key={column.key} ta={column.value ? "right" : "left"}>
											{sum == null ? null : (column.format ?? String)(sum)}
										</Table.Th>
									);
								})}
							</Table.Tr>
						</Table.Tfoot>
					)}
				</Table>
			</Table.ScrollContainer>
		</Box>
	);
}

export interface ColumnsMenuColumn {
	key: string;
	label: string;
	locked?: boolean;
}

export function columnsMenuItems<Row>(columns: DataTableColumn<Row>[]): ColumnsMenuColumn[] {
	return columns
		.filter((column) => column.key !== "actions")
		.map((column) => ({ key: column.key, label: dataTableColumnLabel(column), locked: column.locked }));
}

export function defaultColumnsState<Row>(
	columns: DataTableColumn<Row>[],
	hidden: string[] = [],
): DataTableColumnsState {
	const keys = columns.filter((column) => column.key !== "actions" && !column.locked).map((column) => column.key);
	return { order: keys, visible: keys.filter((key) => !hidden.includes(key)) };
}

function columnsStateEqual(first: DataTableColumnsState, second: DataTableColumnsState) {
	const sameOrder = first.order.join() === second.order.join();
	const sameVisible = [...first.visible].sort().join() === [...second.visible].sort().join();
	return sameOrder && sameVisible;
}

interface ColumnsMenuProps {
	columns: ColumnsMenuColumn[];
	value: DataTableColumnsState;
	onChange: (value: DataTableColumnsState) => void;
	defaultValue?: DataTableColumnsState;
	defaultOpened?: boolean;
	popoverProps?: Omit<PopoverProps, "opened" | "onChange" | "children">;
}

export function ColumnsMenu({
	columns,
	value,
	onChange,
	defaultValue,
	defaultOpened = false,
	popoverProps,
}: ColumnsMenuProps) {
	const [opened, setOpened] = useState(defaultOpened);
	const [dragged, setDragged] = useState<string | null>(null);
	const [over, setOver] = useState<string | null>(null);
	const [announcement, setAnnouncement] = useState("");
	const [focusKey, setFocusKey] = useState<string | null>(null);
	const handles = useRef(new Map<string, HTMLButtonElement>());
	const instructionsId = useId();

	const byKey = new Map(columns.map((column) => [column.key, column]));
	const locked = columns.filter((column) => column.locked);
	const movable = [
		...value.order.filter((key) => byKey.has(key) && !byKey.get(key)?.locked),
		...columns.filter((column) => !column.locked && !value.order.includes(column.key)).map((column) => column.key),
	];
	const visible = new Set(value.visible);
	// Something has to stay on screen
	const lastVisible = locked.length === 0 && movable.filter((key) => visible.has(key)).length === 1;

	// Keyboard moves remount nothing, but the handle has to keep focus after the list re-renders in its new order
	useEffect(() => {
		if (!focusKey) return;
		handles.current.get(focusKey)?.focus();
		setFocusKey(null);
	}, [focusKey]);

	const move = (key: string, toIndex: number) => {
		const fromIndex = movable.indexOf(key);
		if (fromIndex === -1 || toIndex < 0 || toIndex >= movable.length || toIndex === fromIndex) return;
		const order = [...movable];
		order.splice(fromIndex, 1);
		order.splice(toIndex, 0, key);
		onChange({ ...value, order });
		setAnnouncement(`${byKey.get(key)?.label} moved to position ${toIndex + 1} of ${order.length}`);
	};
	const toggle = (key: string) =>
		onChange({
			...value,
			visible: visible.has(key) ? value.visible.filter((candidate) => candidate !== key) : [...value.visible, key],
		});

	return (
		<Popover
			opened={opened}
			onChange={setOpened}
			position="bottom-end"
			width={260}
			shadow="md"
			withinPortal={false}
			trapFocus={!defaultOpened}
			{...popoverProps}
		>
			<Popover.Target>
				<Button
					variant="default"
					size="xs"
					leftSection={<TbColumns />}
					onClick={() => setOpened((current) => !current)}
				>
					Columns
				</Button>
			</Popover.Target>
			<Popover.Dropdown p="xs">
				<VisuallyHidden id={instructionsId}>
					Drag to reorder, or focus the handle and use the up and down arrow keys.
				</VisuallyHidden>
				<VisuallyHidden aria-live="polite">{announcement}</VisuallyHidden>
				<Stack gap={2}>
					{locked.map((column) => (
						<Group key={column.key} gap="xs" wrap="nowrap" px={4} py={4}>
							<Tooltip label="Always shown" withArrow>
								<Box w={22} c="dimmed" style={{ display: "flex", justifyContent: "center" }}>
									<TbLock aria-label="Always shown" />
								</Box>
							</Tooltip>
							<Checkbox label={column.label} checked disabled />
						</Group>
					))}
					{movable.map((key, index) => {
						const column = byKey.get(key);
						if (!column) return null;
						return (
							<Group
								key={key}
								gap="xs"
								wrap="nowrap"
								px={4}
								py={4}
								draggable
								onDragStart={(event) => {
									setDragged(key);
									event.dataTransfer.effectAllowed = "move";
									event.dataTransfer.setData("text/plain", key);
								}}
								onDragOver={(event) => {
									if (!dragged) return;
									event.preventDefault();
									setOver(key);
								}}
								onDragLeave={() => setOver((current) => (current === key ? null : current))}
								onDrop={(event) => {
									event.preventDefault();
									if (dragged) move(dragged, index);
									setDragged(null);
									setOver(null);
								}}
								onDragEnd={() => {
									setDragged(null);
									setOver(null);
								}}
								style={{
									borderRadius: "var(--mantine-radius-sm)",
									opacity: dragged === key ? 0.5 : 1,
									background: over === key && dragged !== key ? "var(--mantine-color-default-hover)" : undefined,
								}}
							>
								<UnstyledButton
									ref={(element) => {
										if (element) handles.current.set(key, element);
										else handles.current.delete(key);
									}}
									aria-label={`Move ${column.label}`}
									aria-describedby={instructionsId}
									w={22}
									c="dimmed"
									style={{ display: "flex", justifyContent: "center", cursor: "grab" }}
									onKeyDown={(event) => {
										if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
										event.preventDefault();
										move(key, index + (event.key === "ArrowUp" ? -1 : 1));
										setFocusKey(key);
									}}
								>
									<TbGripVertical aria-hidden />
								</UnstyledButton>
								<Checkbox
									label={column.label}
									checked={visible.has(key)}
									disabled={lastVisible && visible.has(key)}
									onChange={() => toggle(key)}
								/>
							</Group>
						);
					})}
				</Stack>
				{defaultValue && !columnsStateEqual(value, defaultValue) && (
					<>
						<Divider my="xs" />
						<Anchor component="button" size="sm" px={4} onClick={() => onChange(defaultValue)}>
							Reset to default
						</Anchor>
					</>
				)}
			</Popover.Dropdown>
		</Popover>
	);
}

export type BulkEditorValue = string | number | null;

export interface BulkEditorField<Row> {
	key: string;
	label: string;
	type: "select" | "text" | "number";
	options?: { value: string; label: string }[];
	read: (row: Row) => BulkEditorValue;
	format?: (value: BulkEditorValue) => ReactNode;
	blockedReason?: (row: Row, value: BulkEditorValue) => string | null;
}

export interface BulkEditorResult {
	succeeded: number;
	failed: { id: string; label: string; reason: string }[];
}

export interface BulkEditorChange {
	field: string;
	value: BulkEditorValue;
	ids: string[];
	allMatching: boolean;
}

interface BulkEditorProps<Row> {
	rows: Row[];
	rowId: keyof Row & string;
	rowLabel: (row: Row) => string;
	allMatching?: boolean;
	total?: number;
	fields: BulkEditorField<Row>[];
	noun: CountForms;
	defaultField?: string;
	defaultValue?: BulkEditorValue;
	onApply: (change: BulkEditorChange) => Promise<BulkEditorResult>;
	onRetry?: (change: BulkEditorChange) => Promise<BulkEditorResult>;
	onCancel?: () => void;
	onDone?: () => void;
	previewLimit?: number;
}

export function BulkEditor<Row>({
	rows,
	rowId,
	rowLabel,
	allMatching = false,
	total = rows.length,
	fields,
	noun,
	defaultField,
	defaultValue = null,
	onApply,
	onRetry,
	onCancel,
	onDone,
	previewLimit = 5,
}: BulkEditorProps<Row>) {
	const [fieldKey, setFieldKey] = useState(defaultField ?? fields[0]?.key ?? "");
	const [value, setValue] = useState<BulkEditorValue>(defaultValue);
	const [pending, setPending] = useState(false);
	const [result, setResult] = useState<BulkEditorResult | null>(null);
	const [failure, setFailure] = useState<string | null>(null);
	const field = fields.find((candidate) => candidate.key === fieldKey) ?? fields[0];
	const idOf = (row: Row) => String(row[rowId]);
	const format = (input: BulkEditorValue): ReactNode => {
		if (input === null || input === "") return emptyValue;
		if (field.format) return field.format(input);
		return field.options?.find((option) => option.value === String(input))?.label ?? String(input);
	};

	const plan = rows.map((row) => {
		const before = field.read(row);
		const reason = value === null ? null : (field.blockedReason?.(row, value) ?? null);
		return { row, before, reason, unchanged: value !== null && reason === null && before === value };
	});
	const changing = plan.filter((item) => value !== null && item.reason === null && !item.unchanged);
	const unchangedCount = plan.filter((item) => item.unchanged).length;
	const skipped = new Map<string, number>();
	for (const item of plan) if (item.reason) skipped.set(item.reason, (skipped.get(item.reason) ?? 0) + 1);
	const applyCount = allMatching ? total : changing.length;

	const run = async (action: () => Promise<BulkEditorResult>, previous?: BulkEditorResult) => {
		setPending(true);
		setFailure(null);
		try {
			const next = await action();
			setResult(previous ? { succeeded: previous.succeeded + next.succeeded, failed: next.failed } : next);
		} catch (error) {
			setFailure(error instanceof Error ? error.message : "The change didn't run. Nothing was updated; try again.");
		} finally {
			setPending(false);
		}
	};

	if (result) {
		const attempted = result.succeeded + result.failed.length;
		return (
			<Stack gap="md">
				<Title order={4}>
					{result.failed.length === 0
						? `${dataTableCapitalize(formatCount(result.succeeded, noun))} updated`
						: `${formatNumber(result.succeeded)} of ${formatCount(attempted, noun)} updated`}
				</Title>
				{result.succeeded > 0 && (
					<Alert color="green" icon={<TbCircleCheck />}>
						{field.label} is now {format(value)} on {formatCount(result.succeeded, noun)}. Each one's history shows the
						change.
					</Alert>
				)}
				{result.failed.length > 0 && (
					<Alert
						color="red"
						icon={<TbAlertCircle />}
						title={`${formatCount(result.failed.length, noun)} didn't update`}
					>
						<Stack gap={4}>
							{result.failed.map((item) => (
								<Text key={item.id} size="sm">
									<Text span fw={500} inherit>
										{item.label}
									</Text>
									: {item.reason}
								</Text>
							))}
						</Stack>
					</Alert>
				)}
				<Group justify="flex-end" gap="sm">
					{result.failed.length > 0 && onRetry && (
						<Button
							variant="default"
							loading={pending}
							onClick={() =>
								run(
									() =>
										onRetry({
											field: field.key,
											value,
											ids: result.failed.map((item) => item.id),
											allMatching: false,
										}),
									result,
								)
							}
						>
							Retry {formatCount(result.failed.length, noun)}
						</Button>
					)}
					<Button onClick={onDone}>Done</Button>
				</Group>
			</Stack>
		);
	}

	return (
		<Stack gap="md">
			<Stack gap={4}>
				<Title order={4}>Edit {formatCount(total, noun)}</Title>
				{allMatching && (
					<Text size="sm" c="dimmed">
						Every {noun.one} that matches the filters, not only the ones on this page.
					</Text>
				)}
			</Stack>
			<SimpleGrid cols={2} spacing="sm">
				<Select
					label="Field"
					data={fields.map((candidate) => ({ value: candidate.key, label: candidate.label }))}
					value={field.key}
					allowDeselect={false}
					onChange={(key) => {
						if (!key) return;
						setFieldKey(key);
						setValue(null);
					}}
				/>
				{field.type === "select" ? (
					<Select
						label="New value"
						placeholder="Choose a value"
						data={field.options ?? []}
						value={value === null ? null : String(value)}
						onChange={(next) => setValue(next)}
					/>
				) : field.type === "number" ? (
					<NumberInput
						label="New value"
						value={typeof value === "number" ? value : ""}
						onChange={(next) => setValue(typeof next === "number" ? next : null)}
					/>
				) : (
					<TextInput
						label="New value"
						value={value === null ? "" : String(value)}
						onChange={(event) => setValue(event.currentTarget.value === "" ? null : event.currentTarget.value)}
					/>
				)}
			</SimpleGrid>

			{value !== null && (
				<Stack gap="xs">
					<Stack gap={2}>
						{allMatching && (
							<Text size="xs" c="dimmed">
								Checked on the first {formatCount(rows.length, noun)}; the rest are checked when the change runs.
							</Text>
						)}
						<Text size="sm">
							{changing.length === 0
								? `No ${noun.other} change.`
								: `${dataTableCapitalize(formatCount(changing.length, noun))} will change.`}
						</Text>
						{unchangedCount > 0 && (
							<Text size="sm" c="dimmed">
								{dataTableCapitalize(formatCount(unchangedCount, noun))} already {unchangedCount === 1 ? "has" : "have"}{" "}
								{format(value)}.
							</Text>
						)}
						{[...skipped].map(([reason, count]) => (
							<Text key={reason} size="sm" c="var(--mantine-color-orange-text)">
								{formatNumber(count)} skipped: {reason}
							</Text>
						))}
					</Stack>
					{changing.length > 0 && (
						<Pane>
							<Table verticalSpacing={6}>
								<Table.Thead>
									<Table.Tr>
										<Table.Th>{dataTableCapitalize(noun.one)}</Table.Th>
										<Table.Th>Before</Table.Th>
										<Table.Th>After</Table.Th>
									</Table.Tr>
								</Table.Thead>
								<Table.Tbody>
									{changing.slice(0, previewLimit).map((item) => (
										<Table.Tr key={idOf(item.row)}>
											<Table.Td>
												<Text size="sm" truncate maw={200}>
													{rowLabel(item.row)}
												</Text>
											</Table.Td>
											<Table.Td>
												<Text size="sm" c="dimmed" td="line-through">
													{format(item.before)}
												</Text>
											</Table.Td>
											<Table.Td>
												<Text size="sm" fw={500}>
													{format(value)}
												</Text>
											</Table.Td>
										</Table.Tr>
									))}
								</Table.Tbody>
							</Table>
							{changing.length > previewLimit && (
								<Text size="xs" c="dimmed" px="sm" py={6}>
									And {formatCount(changing.length - previewLimit, { one: "more", other: "more" })}
								</Text>
							)}
						</Pane>
					)}
				</Stack>
			)}

			{failure && (
				<Alert color="red" icon={<TbAlertCircle />}>
					{failure}
				</Alert>
			)}
			<Group justify="flex-end" gap="sm">
				{onCancel && (
					<Button variant="default" onClick={onCancel} disabled={pending}>
						Cancel
					</Button>
				)}
				<Button
					disabled={value === null || applyCount === 0}
					loading={pending}
					onClick={() =>
						run(() => onApply({ field: field.key, value, ids: changing.map((item) => idOf(item.row)), allMatching }))
					}
				>
					Update {formatCount(applyCount, noun)}
				</Button>
			</Group>
		</Stack>
	);
}

export type ExportFormat = "csv" | "xlsx";

export interface ExportOptions {
	format: ExportFormat;
	rows: "selected" | "matching";
	columns: "visible" | "all";
}

interface ExportDialogProps {
	noun: CountForms;
	filters?: string[];
	sort?: string;
	selectedCount: number;
	matchingCount: number;
	visibleColumnCount: number;
	columnCount: number;
	instantLimit?: number;
	defaultValue?: Partial<ExportOptions>;
	onExport: (options: ExportOptions, runsInBackground: boolean) => Promise<void> | void;
	onCancel?: () => void;
	onDone?: () => void;
}

export function ExportDialog({
	noun,
	filters = [],
	sort,
	selectedCount,
	matchingCount,
	visibleColumnCount,
	columnCount,
	instantLimit = 5000,
	defaultValue,
	onExport,
	onCancel,
	onDone,
}: ExportDialogProps) {
	const [options, setOptions] = useState<ExportOptions>({
		format: "csv",
		rows: selectedCount > 0 ? "selected" : "matching",
		columns: "visible",
		...defaultValue,
	});
	const [pending, setPending] = useState(false);
	const [started, setStarted] = useState(false);
	const [failure, setFailure] = useState<string | null>(null);
	const formatId = useId();
	const rowCount = options.rows === "selected" ? selectedCount : matchingCount;
	const runsInBackground = rowCount > instantLimit;
	const formatName = options.format === "csv" ? "CSV" : "Excel";

	const submit = async () => {
		setPending(true);
		setFailure(null);
		try {
			await onExport(options, runsInBackground);
			if (runsInBackground) setStarted(true);
			else onDone?.();
		} catch (error) {
			setFailure(error instanceof Error ? error.message : "The export didn't start. Try again.");
		} finally {
			setPending(false);
		}
	};

	if (started) {
		return (
			<Stack gap="md">
				<Title order={4}>Exporting {formatCount(rowCount, noun)}</Title>
				<Text size="sm">
					You'll get a notification when the {formatName} file is ready. You can close this and keep working.
				</Text>
				<Group justify="flex-end">
					<Button onClick={onDone}>Done</Button>
				</Group>
			</Stack>
		);
	}

	return (
		<Stack gap="md">
			<Title order={4}>Export {formatCount(rowCount, noun)}</Title>
			<Box>
				<Text size="sm" fw={500} mb={6}>
					From this view
				</Text>
				{filters.length > 0 || sort ? (
					<Group gap={6}>
						{filters.map((filter) => (
							<Pill key={filter}>{filter}</Pill>
						))}
						{sort && <Pill>{sort}</Pill>}
					</Group>
				) : (
					<Text size="sm" c="dimmed">
						All {noun.other}, no filters
					</Text>
				)}
			</Box>
			<Box>
				<Text id={formatId} size="sm" fw={500} mb={6}>
					Format
				</Text>
				<SegmentedControl
					aria-labelledby={formatId}
					data={[
						{ value: "csv", label: "CSV" },
						{ value: "xlsx", label: "Excel" },
					]}
					value={options.format}
					onChange={(format) => setOptions({ ...options, format: format as ExportFormat })}
				/>
			</Box>
			<Radio.Group
				label="Rows"
				value={options.rows}
				onChange={(rows) => setOptions({ ...options, rows: rows as ExportOptions["rows"] })}
			>
				<Stack gap="xs" mt={6}>
					<Radio value="selected" disabled={selectedCount === 0} label={`Selected (${formatNumber(selectedCount)})`} />
					<Radio value="matching" label={`All matching (${formatNumber(matchingCount)})`} />
				</Stack>
			</Radio.Group>
			<Radio.Group
				label="Columns"
				value={options.columns}
				onChange={(columns) => setOptions({ ...options, columns: columns as ExportOptions["columns"] })}
			>
				<Stack gap="xs" mt={6}>
					<Radio value="visible" label={`Visible columns (${formatNumber(visibleColumnCount)})`} />
					<Radio value="all" label={`All columns (${formatNumber(columnCount)})`} />
				</Stack>
			</Radio.Group>
			<Group gap="xs" wrap="nowrap" align="flex-start" c="dimmed">
				<TbInfoCircle aria-hidden style={{ flexShrink: 0, marginTop: 3 }} />
				<Text size="sm" inherit>
					{runsInBackground
						? `Exports over ${formatCount(instantLimit, { one: "row", other: "rows" })} run in the background. You'll get a notification when the file is ready.`
						: "Downloads straight away."}
				</Text>
			</Group>
			{failure && (
				<Alert color="red" icon={<TbAlertCircle />}>
					{failure}
				</Alert>
			)}
			<Group justify="flex-end" gap="sm">
				{onCancel && (
					<Button variant="default" onClick={onCancel} disabled={pending}>
						Cancel
					</Button>
				)}
				<Button leftSection={<TbDownload />} loading={pending} disabled={rowCount === 0} onClick={submit}>
					{runsInBackground ? "Start export" : `Download ${formatName}`}
				</Button>
			</Group>
		</Stack>
	);
}

interface TablesCustomerRow extends Customer {
	owner: UserChipUser;
	lastActivityAt: Date;
	paymentTerms: string;
}

const tablesCustomerRows: TablesCustomerRow[] = customers.map((customer, index) => ({
	...customer,
	owner: [users.anna, users.lea, users.jean][index % 3],
	lastActivityAt: [
		ago({ minutes: 2 }),
		ago({ hours: 1 }),
		ago({ days: 1 }),
		ago({ days: 3 }),
		ago({ days: 7, hours: 2 }),
		ago({ days: 12 }),
	][index],
	paymentTerms: ["30", "14", "45", "30", "60", "30"][index],
}));

const tablesCustomerColumn = createColumnHelpers<TablesCustomerRow>();

const tablesCustomerNoun = { one: "customer", other: "customers" };

const tablesCustomerColumns: DataTableColumn<TablesCustomerRow>[] = [
	{
		...tablesCustomerColumn.entity("name", { header: "Customer", secondary: "email", sortable: true }),
		locked: true,
		primary: true,
	},
	{ ...tablesCustomerColumn.status("status", customerStatus, { header: "Status" }), secondary: true },
	{ ...tablesCustomerColumn.money("mrr", { header: "MRR", currency: "EUR", sortable: true }), secondary: true },
	{ ...tablesCustomerColumn.user("owner", { header: "Owner" }), secondary: true },
	{ ...tablesCustomerColumn.relative("lastActivityAt", { header: "Last activity", sortable: true }), secondary: true },
	{
		key: "paymentTerms",
		header: "Payment terms",
		align: "right",
		secondary: true,
		render: (row) => `${row.paymentTerms} days`,
	},
	tablesCustomerColumn.actions(
		[
			{ label: "Assign owner", icon: <TbUserPlus />, onClick: () => undefined },
			{
				label: "Archive",
				icon: <TbArchive />,
				tone: "danger",
				confirmation: "It disappears from lists and search. You can restore it from the archive.",
				onClick: () => undefined,
			},
		],
		{ label: (row) => row.name },
	),
];

const tablesCustomerDefaultColumns = defaultColumnsState(tablesCustomerColumns, ["paymentTerms"]);

const tablesBulkFields: BulkEditorField<TablesCustomerRow>[] = [
	{
		key: "paymentTerms",
		label: "Payment terms",
		type: "select",
		options: ["14", "30", "45", "60"].map((days) => ({ value: days, label: `${days} days` })),
		read: (row) => row.paymentTerms,
		blockedReason: (row) => (row.status === "trial" ? "on a trial, so there's nothing to invoice yet" : null),
	},
	{
		key: "owner",
		label: "Owner",
		type: "select",
		options: Object.values(users).map((user) => ({ value: user.name, label: user.name })),
		read: (row) => row.owner.name,
	},
];

// The demo's server: payment terms can't change while an invoice is in collection
function tablesBulkApply(change: BulkEditorChange): Promise<BulkEditorResult> {
	return new Promise((resolve) =>
		setTimeout(() => {
			const failing = change.field === "paymentTerms" ? change.ids.filter((id) => id === "cus_5Tz1Pc") : [];
			resolve({
				succeeded: change.ids.length - failing.length,
				failed: failing.map((id) => ({
					id,
					label: tablesCustomerRows.find((row) => row.id === id)?.name ?? id,
					reason: "An invoice is in collection. Change the terms once it's paid.",
				})),
			});
		}, 700),
	);
}

function tablesBulkRetry(change: BulkEditorChange): Promise<BulkEditorResult> {
	return new Promise((resolve) => setTimeout(() => resolve({ succeeded: change.ids.length, failed: [] }), 500));
}

function tablesExportPause(): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, 500));
}

const tablesCustomerFields: FilterField[] = [
	{
		key: "status",
		label: "Status",
		type: "enum",
		options: Object.entries(customerStatus).map(([value, definition]) => ({ value, label: definition.label })),
	},
	{ key: "mrr", label: "MRR", type: "money", currency: "EUR" },
	{ key: "lastActivityAt", label: "Last activity", type: "date" },
	{
		key: "owner",
		label: "Owner",
		type: "relation",
		options: Object.values(users).map((user) => ({ value: user.name, label: user.name })),
	},
];

function tablesCustomerMatches(row: TablesCustomerRow, node: FilterNode): boolean {
	if (isFilterGroup(node)) {
		const children = filterGroupChildren(node);
		return "and" in node
			? children.every((child) => tablesCustomerMatches(row, child))
			: children.some((child) => tablesCustomerMatches(row, child));
	}
	const { field, operator, value } = node;
	if (!filterValueIsSet(value)) return true;
	const actual = field === "owner" ? row.owner.name : row[field as keyof TablesCustomerRow];
	switch (operator) {
		case "isAnyOf":
			return Array.isArray(value) && value.includes(String(actual));
		case "is":
			return String(actual) === String(value);
		case "isNot":
			return String(actual) !== String(value);
		case "greaterThan":
			return Number(actual) > Number(value);
		case "lessThan":
			return Number(actual) < Number(value);
		case "inLast":
			return actual instanceof Date && Date.now() - actual.getTime() <= Number(value) * 86_400_000;
		case "before":
			return actual instanceof Date && actual < new Date(String(value));
		case "after":
			return actual instanceof Date && actual > new Date(String(value));
		default:
			return true;
	}
}

function tablesCustomerCompare(sort: DataTableSort | undefined) {
	return (first: TablesCustomerRow, second: TablesCustomerRow) => {
		if (!sort) return 0;
		const read = (row: TablesCustomerRow) => {
			const value = row[sort.field as keyof TablesCustomerRow];
			return value instanceof Date ? value.getTime() : value;
		};
		const left = read(first);
		const right = read(second);
		const order =
			typeof left === "number" && typeof right === "number" ? left - right : String(left).localeCompare(String(right));
		return sort.direction === "asc" ? order : -order;
	};
}

interface TablesViewState {
	filter: { and: FilterNode[] };
	sort?: DataTableSort;
}

const tablesSavedViews: SavedView<TablesViewState>[] = [
	{
		id: "my-accounts",
		name: "My accounts",
		scope: "personal",
		owner: users.anna,
		state: {
			filter: { and: [{ field: "status", operator: "isAnyOf", value: ["active", "trial", "pastDue"] }] },
			sort: { field: "lastActivityAt", direction: "desc" },
		},
	},
	{
		id: "past-due",
		name: "Past due",
		scope: "personal",
		owner: users.anna,
		state: { filter: { and: [{ field: "status", operator: "isAnyOf", value: ["pastDue"] }] } },
	},
	{
		id: "large-accounts",
		name: "Large accounts",
		scope: "team",
		owner: users.lea,
		state: {
			filter: { and: [{ field: "mrr", operator: "greaterThan", value: 1_000_000 }] },
			sort: { field: "mrr", direction: "desc" },
		},
	},
];

function TablesCustomersDemo() {
	const [views, setViews] = useState(tablesSavedViews);
	const [activeViewId, setActiveViewId] = useState("my-accounts");
	const [filter, setFilter] = useState<{ and: FilterNode[] }>(tablesSavedViews[0].state.filter);
	const [search, setSearch] = useState("");
	const [allMatching, setAllMatching] = useState(false);
	const [columnsState, setColumnsState] = useState(tablesCustomerDefaultColumns);
	const [dialog, setDialog] = useState<"edit" | "export" | null>(null);
	const [state, setState] = useState<DataTableState>({
		sort: { field: "lastActivityAt", direction: "desc" },
		page: 1,
		pageSize: 4,
		selection: ["cus_8f2KqL", "cus_5Tz1Pc"],
	});

	const matching = tablesCustomerRows
		.filter((row) => tablesCustomerMatches(row, filter))
		.filter((row) => `${row.name} ${row.email} ${row.id}`.toLowerCase().includes(search.trim().toLowerCase()))
		.sort(tablesCustomerCompare(state.sort));
	const page = matching.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
	const current: TablesViewState = { filter, sort: state.sort };
	const selectedRows = allMatching ? matching : tablesCustomerRows.filter((row) => state.selection.includes(row.id));
	const sortColumn = tablesCustomerColumns.find((column) => column.key === state.sort?.field);
	const exportFilters = [
		...filter.and.map((node) => {
			if (isFilterGroup(node)) {
				return `Advanced: ${formatCount(filterGroupChildren(node).length, { one: "condition", other: "conditions" })}`;
			}
			const field = tablesCustomerFields.find((candidate) => candidate.key === node.field);
			return field ? `${field.label}: ${describeFilterValue(field, node)}` : node.field;
		}),
		...(search ? [`Search: “${search}”`] : []),
	];
	const contentColumns = tablesCustomerColumns.filter((column) => column.key !== "actions");
	const visibleColumnCount = contentColumns.filter(
		(column) => column.locked || columnsState.visible.includes(column.key),
	).length;

	const applyView = (id: string) => {
		const view = views.find((candidate) => candidate.id === id);
		if (!view) return;
		setActiveViewId(id);
		setFilter(view.state.filter);
		setState({ ...state, sort: view.state.sort, page: 1, selection: [] });
		setAllMatching(false);
	};

	return (
		<Stack gap="sm">
			<FilterBar
				fields={tablesCustomerFields}
				value={filter}
				onChange={(next) => {
					setFilter(next);
					setState({ ...state, page: 1, selection: [] });
					setAllMatching(false);
				}}
				search={search}
				onSearchChange={(next) => {
					setSearch(next);
					setState({ ...state, page: 1 });
				}}
				searchPlaceholder="Search name, email, ID"
				resultCount={matching.length}
				advanced
				views={
					<Group gap="xs" wrap="nowrap">
						<ColumnsMenu
							columns={columnsMenuItems(tablesCustomerColumns)}
							value={columnsState}
							onChange={setColumnsState}
							defaultValue={tablesCustomerDefaultColumns}
						/>
						<SavedViewsMenu
							views={views}
							activeId={activeViewId}
							current={current}
							currentUser={users.anna}
							canShare
							onSelect={applyView}
							onUpdate={(id) => setViews(views.map((view) => (view.id === id ? { ...view, state: current } : view)))}
							onDelete={(id) => setViews(views.filter((view) => view.id !== id))}
							onSave={(name, scope) => {
								const id = `view-${views.length + 1}`;
								setViews([...views, { id, name, scope, owner: users.anna, state: current }]);
								setActiveViewId(id);
							}}
						/>
					</Group>
				}
			/>
			<DataTable
				rows={page}
				total={matching.length}
				rowId="id"
				rowLabel={(row) => row.name}
				itemName={{ singular: "customer", plural: "customers" }}
				columns={tablesCustomerColumns}
				columnsState={columnsState}
				state={state}
				onStateChange={(next) => {
					if (next.selection !== state.selection) setAllMatching(false);
					setState(next);
				}}
				filtered={filter.and.length > 0 || search !== ""}
				onClearFilters={() => {
					setFilter({ and: [] });
					setSearch("");
					setState({ ...state, page: 1 });
				}}
				bulkActions={[
					{ label: "Export", icon: <TbDownload />, onClick: () => setDialog("export") },
					{ label: "Edit", icon: <TbPencil />, onClick: () => setDialog("edit") },
					{
						label: "Delete",
						icon: <TbTrash />,
						tone: "danger",
						confirmation: "This can't be undone.",
						onClick: () => {
							setState({ ...state, selection: [] });
							setAllMatching(false);
						},
					},
				]}
				allMatchingSelected={allMatching}
				onSelectAllMatching={() => setAllMatching(true)}
				bulkActionsPosition="table"
			/>
			<Modal opened={dialog === "edit"} onClose={() => setDialog(null)} withCloseButton={false} size="lg" padding="lg">
				<BulkEditor
					rows={selectedRows}
					rowId="id"
					rowLabel={(row) => row.name}
					allMatching={allMatching}
					total={selectedRows.length}
					fields={tablesBulkFields}
					noun={tablesCustomerNoun}
					onApply={tablesBulkApply}
					onRetry={tablesBulkRetry}
					onCancel={() => setDialog(null)}
					onDone={() => setDialog(null)}
				/>
			</Modal>
			<Modal opened={dialog === "export"} onClose={() => setDialog(null)} withCloseButton={false} padding="lg">
				<ExportDialog
					noun={tablesCustomerNoun}
					filters={exportFilters}
					sort={
						state.sort && sortColumn
							? `Sorted by ${dataTableColumnLabel(sortColumn)}, ${state.sort.direction === "asc" ? "ascending" : "descending"}`
							: undefined
					}
					selectedCount={selectedRows.length}
					matchingCount={matching.length}
					visibleColumnCount={visibleColumnCount}
					columnCount={contentColumns.length}
					onExport={tablesExportPause}
					onCancel={() => setDialog(null)}
					onDone={() => setDialog(null)}
				/>
			</Modal>
		</Stack>
	);
}

function TablesColumnsMenuDemo() {
	// Owner moved before MRR, so "Reset to default" shows
	const [columnsState, setColumnsState] = useState<DataTableColumnsState>({
		order: ["status", "owner", "mrr", "lastActivityAt", "paymentTerms"],
		visible: ["status", "owner", "mrr", "lastActivityAt"],
	});

	return (
		<Box mih={330}>
			<Group justify="flex-end">
				<ColumnsMenu
					columns={columnsMenuItems(tablesCustomerColumns)}
					value={columnsState}
					onChange={setColumnsState}
					defaultValue={tablesCustomerDefaultColumns}
					defaultOpened
					// Open in the gallery: don't flip over the item above near the bottom of the window
					popoverProps={{ middlewares: { flip: false, shift: false } }}
				/>
			</Group>
		</Box>
	);
}

function TablesCardModeDemo() {
	const [state, setState] = useState<DataTableState>({
		sort: { field: "mrr", direction: "desc" },
		page: 1,
		pageSize: 3,
		selection: ["cus_6Re4Ef"],
	});
	const sorted = [...tablesCustomerRows].sort(tablesCustomerCompare(state.sort));

	return (
		<Box maw={380} mx="auto">
			<DataTable
				rows={sorted.slice((state.page - 1) * state.pageSize, state.page * state.pageSize)}
				total={sorted.length}
				rowId="id"
				rowLabel={(row) => row.name}
				itemName={{ singular: "customer", plural: "customers" }}
				columns={tablesCustomerColumns}
				columnsState={tablesCustomerDefaultColumns}
				state={state}
				onStateChange={setState}
				cardMode="always"
				bulkActions={[{ label: "Export", icon: <TbDownload />, onClick: () => undefined }]}
				bulkActionsPosition="table"
			/>
		</Box>
	);
}

function TablesBulkEditorDemo() {
	return (
		<Paper withBorder shadow="md" p="lg">
			<BulkEditor
				rows={tablesCustomerRows}
				rowId="id"
				rowLabel={(row) => row.name}
				fields={tablesBulkFields}
				noun={tablesCustomerNoun}
				defaultField="paymentTerms"
				defaultValue="30"
				onApply={tablesBulkApply}
				onRetry={tablesBulkRetry}
				onCancel={() => undefined}
				onDone={() => undefined}
			/>
		</Paper>
	);
}

function TablesExportDialogDemo() {
	return (
		<Paper withBorder shadow="md" p="lg">
			<ExportDialog
				noun={tablesCustomerNoun}
				filters={[
					"Status: Active, Trial, Past due",
					`MRR: ${describeFilterValue(tablesCustomerFields[1], { field: "mrr", operator: "greaterThan", value: 100_000 })}`,
				]}
				sort="Sorted by MRR, descending"
				selectedCount={2}
				matchingCount={12_480}
				visibleColumnCount={5}
				columnCount={6}
				defaultValue={{ rows: "matching" }}
				onExport={tablesExportPause}
				onCancel={() => undefined}
				onDone={() => undefined}
			/>
		</Paper>
	);
}

const tablesStateColumns = [
	tablesCustomerColumn.entity("name", { header: "Customer", secondary: "email" }),
	tablesCustomerColumn.status("status", customerStatus, { header: "Status" }),
	tablesCustomerColumn.money("mrr", { header: "MRR", currency: "EUR" }),
];

function TablesStateDemo({ kind }: { kind: "loading" | "firstUse" | "noResults" | "error" }) {
	const [state, setState] = useState<DataTableState>({ page: 1, pageSize: 4, selection: [] });

	return (
		<DataTable<TablesCustomerRow>
			rows={[]}
			total={0}
			rowId="id"
			itemName={{ singular: "customer", plural: "customers" }}
			columns={tablesStateColumns}
			state={state}
			onStateChange={setState}
			minWidth={420}
			loading={kind === "loading"}
			filtered={kind === "noResults"}
			onClearFilters={() => undefined}
			error={
				kind === "error"
					? { message: "The billing service didn't answer in time. Nothing was changed.", requestId: "req_4Kd9Wq2Lm" }
					: null
			}
			onRetry={() => undefined}
			emptyState={
				<EmptyState
					icon={<TbUsers />}
					title="No customers yet"
					description="Customers appear here when they sign up or when you import them."
				>
					<EmptyState.Actions>
						<Button variant="default">Import customers</Button>
						<Button>Add customer</Button>
					</EmptyState.Actions>
				</EmptyState>
			}
		/>
	);
}

const tablesBuilderFields: FilterField[] = [
	tablesCustomerFields[0],
	tablesCustomerFields[1],
	{
		key: "country",
		label: "Country",
		type: "enum",
		options: [
			{ value: "FR", label: "France" },
			{ value: "DE", label: "Germany" },
			{ value: "ES", label: "Spain" },
			{ value: "GB", label: "United Kingdom" },
		],
	},
	{
		key: "owner",
		label: "Owner",
		type: "relation",
		options: [
			{ value: "me", label: "Me" },
			{ value: users.lea.name, label: users.lea.name },
			{ value: users.jean.name, label: users.jean.name },
		],
	},
	{ key: "createdAt", label: "Created", type: "date" },
	{ key: "name", label: "Name", type: "text" },
	{ key: "overdueInvoices", label: "Has overdue invoices", type: "boolean" },
];

function TablesAdvancedFilterDemo() {
	const [filter, setFilter] = useState<FilterGroup>({
		and: [
			{ field: "status", operator: "isAnyOf", value: ["active", "pastDue"] },
			{ field: "mrr", operator: "greaterThan", value: 100_000 },
			{
				or: [
					{ field: "country", operator: "isAnyOf", value: ["FR"] },
					{ field: "owner", operator: "is", value: "me" },
				],
			},
		],
	});

	return (
		<AdvancedFilterBuilder
			fields={tablesBuilderFields}
			value={filter}
			onChange={setFilter}
			matchCount={312}
			onApply={() => undefined}
			onSaveAsView={() => undefined}
		/>
	);
}

function TablesSavedViewsDemo() {
	const [activeId, setActiveId] = useState("my-accounts");
	const active = tablesSavedViews.find((view) => view.id === activeId) ?? tablesSavedViews[0];
	const current: TablesViewState =
		activeId === "my-accounts" ? { ...active.state, sort: { field: "mrr", direction: "desc" } } : active.state;

	return (
		<Box mih={300}>
			<Group justify="flex-end">
				<SavedViewsMenu
					views={tablesSavedViews}
					activeId={activeId}
					current={current}
					currentUser={users.anna}
					canShare
					defaultOpened
					onSelect={setActiveId}
					onSave={() => undefined}
					onUpdate={() => undefined}
					onDelete={() => undefined}
				/>
			</Group>
		</Box>
	);
}

interface TablesCategory {
	id: string;
	name: string;
	products: number;
	revenue: number;
	children?: TablesCategory[];
}

const tablesSoftwareChildren: TablesCategory[] = [
	{ id: "fleet-tracking", name: "Fleet tracking", products: 18, revenue: 160_000_000 },
	{ id: "route-planning", name: "Route planning", products: 15, revenue: 90_000_000 },
	{ id: "driver-app", name: "Driver app", products: 8, revenue: 30_000_000 },
];

const tablesCategories: TablesCategory[] = [
	{
		id: "hardware",
		name: "Hardware",
		products: 124,
		revenue: 120_000_000,
		children: [
			{ id: "sensors", name: "Sensors", products: 58, revenue: 64_000_000 },
			{
				id: "gateways",
				name: "Gateways",
				products: 22,
				revenue: 41_000_000,
				children: [
					{ id: "lte-gateways", name: "LTE gateways", products: 9, revenue: 22_000_000 },
					{ id: "wifi-gateways", name: "Wi-Fi gateways", products: 13, revenue: 19_000_000 },
				],
			},
			{ id: "cameras", name: "Cameras", products: 44, revenue: 15_000_000 },
		],
	},
	{ id: "software", name: "Software", products: 41, revenue: 280_000_000 },
	{ id: "services", name: "Services", products: 12, revenue: 35_000_000 },
];

function TablesTreeDemo() {
	const { locale } = useFormatSettings();
	const [expanded, setExpanded] = useState(["hardware", "gateways"]);
	const [softwareLoaded, setSoftwareLoaded] = useState(false);

	return (
		<TreeTable<TablesCategory>
			rows={tablesCategories}
			rowId={(row) => row.id}
			label={{ header: "Category", render: (row) => row.name }}
			columns={[
				{
					key: "products",
					header: "Products",
					value: (row) => row.products,
					format: (value) => <NumberText value={value} />,
				},
				{
					key: "revenue",
					header: "Revenue",
					value: (row) => row.revenue,
					format: (value) => formatMoney(value, "EUR", locale, { compact: true }),
				},
			]}
			hasChildren={(row) => row.id === "software" || Boolean(row.children?.length)}
			getChildren={(row) =>
				row.id === "software" ? (softwareLoaded ? tablesSoftwareChildren : "loading") : (row.children ?? [])
			}
			expanded={expanded}
			onExpandedChange={(next) => {
				setExpanded(next);
				if (next.includes("software") && !softwareLoaded) {
					window.setTimeout(() => setSoftwareLoaded(true), 900);
				}
			}}
			aggregate={{ products: "sum", revenue: "sum" }}
		/>
	);
}

export interface SplitViewProps<Item> {
	items: Item[];
	itemId: keyof Item;
	selectedId: string | null;
	onSelect: (id: string | null) => void;
	renderItem: (item: Item, state: { selected: boolean }) => ReactNode;
	renderDetail: (item: Item) => ReactNode;
	onNext?: () => void;
	onPrevious?: () => void;
	listWidth?: number;
	listTitle?: ReactNode;
	listCount?: number;
	listActions?: ReactNode;
	listHeader?: ReactNode;
	emptyDetail?: ReactNode;
	height?: number;
	breakpoint?: number;
	shortcutGroup?: string;
}

export function SplitView<Item>({
	items,
	itemId,
	selectedId,
	onSelect,
	renderItem,
	renderDetail,
	onNext,
	onPrevious,
	listWidth = 300,
	listTitle,
	listCount,
	listActions,
	listHeader,
	emptyDetail,
	height = 460,
	breakpoint = 900,
	shortcutGroup = "List",
}: SplitViewProps<Item>) {
	const { ref, width } = useElementSize();
	const detailRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);
	const narrow = width > 0 && width < breakpoint;

	const idOf = (item: Item) => String(item[itemId]);
	const selected = items.find((item) => idOf(item) === selectedId) ?? null;
	const selectedIndex = selected ? items.indexOf(selected) : -1;
	const move = (step: number) => {
		const target = items[Math.min(Math.max(selectedIndex + step, 0), items.length - 1)];
		if (!target) return;
		const focusInList = listRef.current?.contains(document.activeElement) ?? false;
		onSelect(idOf(target));
		if (focusInList) {
			requestAnimationFrame(() => listRef.current?.querySelector<HTMLElement>('[aria-current="true"]')?.focus());
		}
	};
	const next = () => (onNext ? onNext() : move(1));
	const previous = () => (onPrevious ? onPrevious() : move(-1));
	const handleKeys = useShortcutScope(
		[
			{ keys: ["j", "ArrowDown"], description: "Next item", handler: next },
			{ keys: ["k", "ArrowUp"], description: "Previous item", handler: previous },
			{ keys: "Enter", description: "Go to the details", handler: () => detailRef.current?.focus() },
		],
		{ group: shortcutGroup },
	);

	const list = (
		<Pane withBorder={false} h="100%" title={listTitle} count={listCount} actions={listActions} header={listHeader}>
			<Stack gap={0} ref={listRef}>
				{items.map((item) => {
					const isSelected = idOf(item) === selectedId;
					return (
						<UnstyledButton
							key={idOf(item)}
							onClick={() => onSelect(idOf(item))}
							aria-current={isSelected || undefined}
							px="md"
							py="sm"
							bg={isSelected ? "var(--mantine-primary-color-light)" : undefined}
							style={{
								borderBottom: "1px solid var(--mantine-color-default-border)",
								boxShadow: isSelected ? "inset 3px 0 0 var(--mantine-primary-color-filled)" : undefined,
							}}
						>
							{renderItem(item, { selected: isSelected })}
						</UnstyledButton>
					);
				})}
			</Stack>
		</Pane>
	);

	const detail = (
		<Box
			ref={detailRef}
			tabIndex={-1}
			h="100%"
			style={{ outline: "none", overflowY: "auto", display: "flex", flexDirection: "column" }}
		>
			{selected ? renderDetail(selected) : emptyDetail}
		</Box>
	);

	return (
		<Box ref={ref} h={height} style={frameStyle} onKeyDown={handleKeys}>
			{narrow ? (
				selected ? (
					<Pane
						withBorder={false}
						h="100%"
						header={
							<Button variant="subtle" size="xs" leftSection={<TbArrowLeft />} onClick={() => onSelect(null)}>
								Back
							</Button>
						}
					>
						{detail}
					</Pane>
				) : (
					list
				)
			) : (
				<Splitter
					h="100%"
					withHandle={false}
					lineSize={5}
					styles={{
						// A 1px border-coloured line in a 5px drag target. The negative margins let the target overlap
						// both panes, so the line touches them with no gap. Mantine draws its focus ring on the grip,
						// so the port needs a :focus-visible style on the handle
						handle: {
							marginInline: -2,
							position: "relative",
							zIndex: 1,
							background:
								"linear-gradient(to right, transparent 2px, var(--mantine-color-default-border) 2px, var(--mantine-color-default-border) 3px, transparent 3px)",
						},
					}}
				>
					<Splitter.Pane defaultSize={`${listWidth}px` as const} min="220px" max="480px">
						{list}
					</Splitter.Pane>
					<Splitter.Pane defaultSize={100}>{detail}</Splitter.Pane>
				</Splitter>
			)}
		</Box>
	);
}

const splitViewOrders = [
	{ id: "8812", customer: customers[0], amount: 124000, at: ago({ minutes: 2 }), due: fromNow({ hours: 2 }) },
	{ id: "8811", customer: customers[3], amount: 8900, at: ago({ minutes: 14 }), due: fromNow({ hours: 6 }) },
	{ id: "8809", customer: customers[2], amount: 402000, at: ago({ hours: 1 }), due: fromNow({ minutes: 40 }) },
	{ id: "8807", customer: customers[5], amount: 31000, at: ago({ hours: 3 }), due: ago({ hours: 2 }) },
	{ id: "8804", customer: customers[4], amount: 95050, at: ago({ hours: 5 }), due: fromNow({ days: 1 }) },
];

function SplitViewExample() {
	const [selectedId, setSelectedId] = useState<string | null>(splitViewOrders[0].id);

	return (
		<SplitView
			items={splitViewOrders}
			itemId="id"
			selectedId={selectedId}
			onSelect={setSelectedId}
			listTitle="Orders to check"
			listCount={splitViewOrders.length}
			listActions={
				<Group gap={4} wrap="nowrap">
					<ShortcutHint keys="j" />
					<ShortcutHint keys="k" />
				</Group>
			}
			shortcutGroup="Orders to check"
			renderItem={(order) => (
				<Stack gap={2}>
					<Group justify="space-between" wrap="nowrap" gap="xs">
						<Text size="sm" fw={500}>
							Order #{order.id}
						</Text>
						<Text size="xs" c="dimmed">
							<RelativeTime value={order.at} capitalize />
						</Text>
					</Group>
					<Text size="xs" c="dimmed">
						<MoneyText amount={order.amount} currency="EUR" /> · {order.customer.name}
					</Text>
				</Stack>
			)}
			renderDetail={(order) => (
				<Stack p="lg" gap="md">
					<Group justify="space-between" align="flex-start" wrap="nowrap">
						<Stack gap={2}>
							<Title order={4}>Order #{order.id}</Title>
							<Text size="sm" c="dimmed">
								{order.customer.name}
							</Text>
						</Stack>
						<SlaTimer due={order.due} />
					</Group>
					<DataList>
						<DataList.Item>
							<DataList.ItemLabel>Amount</DataList.ItemLabel>
							<DataList.ItemValue>
								<MoneyText amount={order.amount} currency="EUR" />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Customer</DataList.ItemLabel>
							<DataList.ItemValue>
								<CopyableId value={order.customer.id} />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Placed</DataList.ItemLabel>
							<DataList.ItemValue>
								<RelativeTime value={order.at} capitalize />
							</DataList.ItemValue>
						</DataList.Item>
					</DataList>
					<Group gap="xs">
						<Button variant="default" size="xs">
							Hold order
						</Button>
						<Button size="xs">Release order</Button>
					</Group>
				</Stack>
			)}
			emptyDetail={
				<EmptyState mt="xl" title="No order selected" description="Pick an order from the list, or press J." />
			}
		/>
	);
}

export interface KanbanColumn {
	id: string;
	title: string;
	count?: number;
	wipLimit?: number;
}

export interface KanbanBoardProps<Item> {
	columns: KanbanColumn[];
	items: Item[];
	itemId: keyof Item;
	columnOf: (item: Item) => string;
	renderCard: (item: Item) => ReactNode;
	canMove?: (item: Item, to: string) => KanbanMoveCheck;
	onMove: (item: Item, to: string) => void;
}

export function KanbanBoard<Item>({
	columns,
	items,
	itemId,
	columnOf,
	renderCard,
	canMove,
	onMove,
}: KanbanBoardProps<Item>) {
	const [draggingId, setDraggingId] = useState<string | null>(null);
	const [overColumn, setOverColumn] = useState<string | null>(null);
	const [rejection, setRejection] = useState<string | null>(null);
	const boardRef = useRef<HTMLDivElement>(null);

	const idOf = (item: Item) => String(item[itemId]);

	const attempt = (item: Item, to: string) => {
		if (columnOf(item) === to) return false;
		const check = canMove?.(item, to) ?? true;
		if (check === true) {
			setRejection(null);
			onMove(item, to);
			return true;
		}
		setRejection(check.reason);
		return false;
	};

	const moveByKeyboard = (item: Item, step: number) => {
		const index = columns.findIndex((column) => column.id === columnOf(item));
		const target = columns[index + step];
		if (target && attempt(item, target.id)) {
			// The card remounts in its new column; keep keyboard focus on it
			requestAnimationFrame(() =>
				boardRef.current?.querySelector<HTMLElement>(`[data-kanban-card="${CSS.escape(idOf(item))}"]`)?.focus(),
			);
		}
	};
	const focusedItem = (event: KeyboardEvent) => {
		const card = event.target instanceof HTMLElement ? event.target.closest<HTMLElement>("[data-kanban-card]") : null;
		return card ? items.find((item) => idOf(item) === card.dataset.kanbanCard) : undefined;
	};
	const handleKeys = useShortcutScope(
		[
			{
				keys: "ArrowRight",
				description: "Move the card to the next column",
				// Arrows still scroll the board unless a card has focus
				preventDefault: false,
				handler: (event) => {
					const item = focusedItem(event);
					if (!item) return;
					event.preventDefault();
					moveByKeyboard(item, 1);
				},
			},
			{
				keys: "ArrowLeft",
				description: "Move the card to the previous column",
				// Arrows still scroll the board unless a card has focus
				preventDefault: false,
				handler: (event) => {
					const item = focusedItem(event);
					if (!item) return;
					event.preventDefault();
					moveByKeyboard(item, -1);
				},
			},
		],
		{ group: "Board" },
	);

	return (
		<Stack gap="sm" ref={boardRef} onKeyDown={handleKeys}>
			<ScrollArea type="auto" offsetScrollbars>
				<Group align="flex-start" gap="sm" wrap="nowrap">
					{columns.map((column) => {
						const columnItems = items.filter((item) => columnOf(item) === column.id);
						const count = column.count ?? columnItems.length;
						const overLimit = column.wipLimit !== undefined && count > column.wipLimit;
						const highlighted = draggingId !== null && overColumn === column.id;

						return (
							<Box
								key={column.id}
								w={240}
								bg="var(--mantine-color-default-hover)"
								bdrs="md"
								style={{
									flexShrink: 0,
									outline: highlighted ? "2px dashed var(--mantine-primary-color-filled)" : undefined,
								}}
								onDragOver={(event) => {
									event.preventDefault();
									setOverColumn(column.id);
								}}
								onDragLeave={() => setOverColumn((current) => (current === column.id ? null : current))}
								onDrop={(event) => {
									event.preventDefault();
									const item = items.find((candidate) => idOf(candidate) === draggingId);
									if (item) attempt(item, column.id);
									setDraggingId(null);
									setOverColumn(null);
								}}
							>
								<Pane
									withBorder={false}
									title={column.title}
									actions={
										<Tooltip
											label={overLimit ? `Over the limit of ${column.wipLimit}` : `Limit ${column.wipLimit}`}
											disabled={column.wipLimit === undefined}
											withArrow
										>
											<Text size="xs" c={overLimit ? "red" : "dimmed"} fw={overLimit ? 600 : undefined}>
												{column.wipLimit === undefined ? count : `${count} / ${column.wipLimit}`}
											</Text>
										</Tooltip>
									}
								>
									<Stack gap="xs" mih={60} p="xs">
										{columnItems.map((item) => (
											<Paper
												key={idOf(item)}
												withBorder
												p="sm"
												draggable
												tabIndex={0}
												data-kanban-card={idOf(item)}
												aria-roledescription="movable card"
												aria-keyshortcuts="ArrowLeft ArrowRight"
												style={{ cursor: "grab", opacity: draggingId === idOf(item) ? 0.5 : 1 }}
												onDragStart={(event) => {
													event.dataTransfer.setData("text/plain", idOf(item));
													setDraggingId(idOf(item));
												}}
												onDragEnd={() => {
													setDraggingId(null);
													setOverColumn(null);
												}}
											>
												{renderCard(item)}
											</Paper>
										))}
									</Stack>
								</Pane>
							</Box>
						);
					})}
				</Group>
			</ScrollArea>
			{rejection && (
				<Notification
					color="red"
					icon={<TbAlertTriangle />}
					title="Can't move this card"
					onClose={() => setRejection(null)}
				>
					{rejection}
				</Notification>
			)}
		</Stack>
	);
}

const kanbanBoardColumns: KanbanColumn[] = [
	{ id: "new", title: "New" },
	{ id: "configuring", title: "Configuring", wipLimit: 3 },
	{ id: "training", title: "Training", wipLimit: 3 },
	{ id: "live", title: "Live", count: 18 },
];

interface KanbanBoardOnboarding {
	id: string;
	title: string;
	owner: UserChipUser;
	stage: string;
}

function KanbanBoardExample() {
	const [onboardings, setOnboardings] = useState<KanbanBoardOnboarding[]>([
		{ id: "ONB-41", title: "Nova SAS · kickoff", owner: users.anna, stage: "new" },
		{ id: "ONB-44", title: "Dune Studio", owner: users.lea, stage: "new" },
		{ id: "ONB-38", title: "Brightline SSO setup", owner: users.anna, stage: "configuring" },
		{ id: "ONB-39", title: "Acme Logistics data import", owner: users.jean, stage: "configuring" },
		{ id: "ONB-36", title: "Nova SAS · invoice templates", owner: users.lea, stage: "configuring" },
		{ id: "ONB-35", title: "Cobalt · admin training", owner: users.jean, stage: "training" },
		{ id: "ONB-30", title: "Evergreen Foods", owner: users.lea, stage: "live" },
	]);

	return (
		<KanbanBoard
			columns={kanbanBoardColumns}
			items={onboardings}
			itemId="id"
			columnOf={(onboarding) => onboarding.stage}
			canMove={(onboarding, to) => {
				if (onboarding.stage === "live")
					return { allowed: false, reason: "Live accounts can't go back to onboarding." };
				if (to === "live" && onboarding.stage !== "training")
					return { allowed: false, reason: `${onboarding.id} has to finish training before going live.` };
				return true;
			}}
			onMove={(onboarding, to) =>
				setOnboardings((current) => current.map((item) => (item.id === onboarding.id ? { ...item, stage: to } : item)))
			}
			renderCard={(onboarding) => (
				<Stack gap={6}>
					<Text size="xs" c="dimmed" ff="monospace">
						{onboarding.id}
					</Text>
					<Group justify="space-between" wrap="nowrap" gap="xs">
						<Text size="sm" fw={500} lineClamp={2}>
							{onboarding.title}
						</Text>
						<Tooltip label={onboarding.owner.name} withArrow>
							<Avatar name={onboarding.owner.name} color={onboarding.owner.color ?? "initials"} size={22} />
						</Tooltip>
					</Group>
				</Stack>
			)}
		/>
	);
}

export interface InfiniteFeedProps<Item> {
	items: Item[];
	itemId: keyof Item;
	renderItem?: (item: Item) => ReactNode;
	renderGroup?: (items: Item[]) => ReactNode;
	dayOf?: (item: Item) => DateLike;
	hasMore: boolean;
	loadingMore?: boolean;
	onLoadMore: () => void;
	newCount?: number;
	onShowNew?: () => void;
	height?: number;
	endLabel?: ReactNode;
}

const infiniteFeedBorder = "1px solid var(--mantine-color-default-border)";

export function InfiniteFeed<Item>({
	items,
	itemId,
	renderItem,
	renderGroup,
	dayOf,
	hasMore,
	loadingMore = false,
	onLoadMore,
	newCount = 0,
	onShowNew,
	height,
	endLabel = "No older events",
}: InfiniteFeedProps<Item>) {
	const rootRef = useRef<HTMLDivElement>(null);
	const viewportRef = useRef<HTMLDivElement>(null);
	const framed = height !== undefined;
	const groups = dayOf
		? groupByDay(items, dayOf).map((group) => ({
				key: group.day,
				label: formatDayLabel(group.date),
				items: group.items,
			}))
		: [{ key: "all", label: "", items }];

	const footer = loadingMore ? (
		<Group gap="xs" justify="center">
			<Loader size="xs" />
			<Text size="sm" c="dimmed">
				Loading older events
			</Text>
		</Group>
	) : hasMore ? (
		<Button variant="subtle" size="xs" fullWidth onClick={onLoadMore}>
			Load more
		</Button>
	) : endLabel ? (
		<Text size="sm" c="dimmed" ta="center">
			{endLabel}
		</Text>
	) : null;

	const content = (
		<>
			{groups.map((group) => (
				<Box key={group.key}>
					{group.label && (
						<Text
							size="xs"
							fw={600}
							c="dimmed"
							px={framed ? "md" : 0}
							py={6}
							pos={framed ? "sticky" : undefined}
							top={0}
							bg={framed ? "var(--mantine-color-body)" : undefined}
							style={framed ? { zIndex: 1, borderBottom: infiniteFeedBorder } : undefined}
						>
							{group.label}
						</Text>
					)}
					{renderGroup
						? renderGroup(group.items)
						: group.items.map((item) => (
								<Box
									key={String(item[itemId])}
									px={framed ? "md" : 0}
									py="sm"
									style={{ borderBottom: infiniteFeedBorder }}
								>
									{renderItem?.(item)}
								</Box>
							))}
				</Box>
			))}
			{footer && (
				<Box p={framed ? "sm" : 0} pt="sm">
					{footer}
				</Box>
			)}
		</>
	);

	return (
		<Box ref={rootRef} pos="relative" h={height} style={framed ? frameStyle : undefined}>
			{newCount > 0 && (
				<Button
					size="compact-sm"
					radius="xl"
					leftSection={<TbArrowUp />}
					pos="absolute"
					top={40}
					left="50%"
					style={{ zIndex: 2, transform: "translateX(-50%)" }}
					onClick={() => {
						onShowNew?.();
						if (framed) viewportRef.current?.scrollTo({ top: 0, behavior: "smooth" });
						else rootRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
					}}
				>
					{formatCount(newCount, { one: "new event", other: "new events" })}
				</Button>
			)}
			{framed ? (
				<ScrollArea
					h="100%"
					viewportRef={viewportRef}
					onBottomReached={() => {
						if (hasMore && !loadingMore) onLoadMore();
					}}
				>
					{content}
				</ScrollArea>
			) : (
				content
			)}
		</Box>
	);
}

interface InfiniteFeedEvent {
	id: string;
	at: Date;
	text: string;
}

const infiniteFeedNewTexts = ["Invoice INV-0442 sent", "Note added by Léa M.", "Payment of €980.00 received"];

const infiniteFeedTexts = [
	"Plan changed to Enterprise",
	"Invoice INV-0441 sent",
	"Payment of €3,120.50 failed",
	"Billing email changed",
	"User paul@acme.io invited",
	"Invoice INV-0438 paid",
	"SSO connection updated",
	"Seats changed from 40 to 45",
];

function infiniteFeedOlder(from: number, count: number): InfiniteFeedEvent[] {
	return Array.from({ length: count }, (_, offset) => {
		const index = from + offset;
		return {
			id: `feed_${index}`,
			at: ago({ hours: index * 7 + 1 }),
			text: infiniteFeedTexts[index % infiniteFeedTexts.length],
		};
	});
}

function InfiniteFeedExample() {
	const [events, setEvents] = useState(() => infiniteFeedOlder(0, 8));
	const [loadingMore, setLoadingMore] = useState(false);
	const [newCount, setNewCount] = useState(3);

	return (
		<InfiniteFeed
			items={events}
			itemId="id"
			dayOf={(event) => event.at}
			height={380}
			renderItem={(event) => (
				<Group justify="space-between" wrap="nowrap" gap="sm">
					<Text size="sm" truncate>
						{event.text}
					</Text>
					<Text size="xs" c="dimmed" style={{ whiteSpace: "nowrap" }}>
						<RelativeTime value={event.at} capitalize />
					</Text>
				</Group>
			)}
			hasMore={events.length < 24}
			loadingMore={loadingMore}
			onLoadMore={() => {
				setLoadingMore(true);
				setTimeout(() => {
					setEvents((current) => [...current, ...infiniteFeedOlder(current.length, 6)]);
					setLoadingMore(false);
				}, 700);
			}}
			newCount={newCount}
			onShowNew={() => {
				setEvents((current) => [
					...Array.from({ length: newCount }, (_, index) => ({
						id: `feed_new_${current.length + index}`,
						at: ago({ minutes: index + 1 }),
						text: infiniteFeedNewTexts[index % infiniteFeedNewTexts.length],
					})),
					...current,
				]);
				setNewCount(0);
			}}
		/>
	);
}

export function DataArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<TablesCustomersDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesStateDemo kind="loading" />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesStateDemo kind="firstUse" />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesStateDemo kind="noResults" />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesStateDemo kind="error" />
			</PreviewItem>
			<PreviewItem>
				<TablesCardModeDemo />
			</PreviewItem>
			<PreviewItem>
				<TablesColumnsMenuDemo />
			</PreviewItem>
			<PreviewItem>
				<TablesSavedViewsDemo />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<TablesAdvancedFilterDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesBulkEditorDemo />
			</PreviewItem>
			<PreviewItem>
				<TablesExportDialogDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<TablesTreeDemo />
			</PreviewItem>
			<PreviewItem span="full">
				<SplitViewExample />
			</PreviewItem>
			<PreviewItem span="half">
				<InfiniteFeedExample />
			</PreviewItem>
			<PreviewItem span="full">
				<KanbanBoardExample />
			</PreviewItem>
		</PreviewGrid>
	);
}

export interface ActivityItem {
	id: string;
	at: DateLike;
	actor: Actor;
	onBehalfOf?: { name: string; email?: string };
	icon?: ReactNode;
	color?: MantineColor;
	title: ReactNode;
	source?: string;
	body?: ReactNode;
	diff?: DiffChange[];
}

export interface ActivityTimelineProps {
	items: ActivityItem[];
	groupByDay?: boolean;
	hasMore?: boolean;
	loadingMore?: boolean;
	onLoadMore?: () => void;
	height?: number;
}

function ActivityTimelineDiff({ changes }: { changes: DiffChange[] }) {
	const [opened, setOpened] = useState(false);

	return (
		<Stack gap="xs" mt={6}>
			<Box>
				<Button variant="subtle" size="compact-xs" onClick={() => setOpened((current) => !current)}>
					{opened
						? "Hide changes"
						: changes.length === 1
							? "Show change"
							: `Show ${formatCount(changes.length, { one: "change", other: "changes" })}`}
				</Button>
			</Box>
			{opened && <DiffView changes={changes} />}
		</Stack>
	);
}

function ActivityTimelineEntries({ items }: { items: ActivityItem[] }) {
	return (
		<Timeline bulletSize={24} lineWidth={1} active={-1}>
			{items.map((item) => (
				<Timeline.Item
					key={item.id}
					// Timeline's own colour only applies to active items, so the icon carries it
					bullet={
						<Box component="span" c={item.color} style={{ display: "flex" }}>
							{item.icon ?? <TbNote />}
						</Box>
					}
					title={
						<Group gap={6} wrap="wrap">
							<ActorChip actor={item.actor} onBehalfOf={item.onBehalfOf} />
							<Text size="sm">{item.title}</Text>
						</Group>
					}
				>
					<Text size="xs" c="dimmed" mt={2}>
						<RelativeTime value={item.at} capitalize />
						{item.source && ` · ${item.source}`}
					</Text>
					{item.body && (
						<Text size="sm" mt={6}>
							{item.body}
						</Text>
					)}
					{item.diff && <ActivityTimelineDiff changes={item.diff} />}
				</Timeline.Item>
			))}
		</Timeline>
	);
}

const activityTimelineNothingMore = () => {};

export function ActivityTimeline({
	items,
	groupByDay: grouped = items.length > 20,
	hasMore = false,
	loadingMore = false,
	onLoadMore = activityTimelineNothingMore,
	height,
}: ActivityTimelineProps) {
	return (
		<InfiniteFeed
			items={items}
			itemId="id"
			dayOf={grouped ? (item) => item.at : undefined}
			renderGroup={(groupItems) => <ActivityTimelineEntries items={groupItems} />}
			hasMore={hasMore}
			loadingMore={loadingMore}
			onLoadMore={onLoadMore}
			height={height}
			endLabel={null}
		/>
	);
}

const activityTimelineItems: ActivityItem[] = [
	{
		id: "evt_1",
		at: ago({ minutes: 42 }),
		actor: { type: "user", name: users.anna.name },
		icon: <TbPencil />,
		title: "changed the plan",
		diff: [{ field: "plan", label: "Plan", before: "Growth", after: "Enterprise" }],
	},
	{
		id: "evt_2",
		at: ago({ days: 1, hours: 3 }),
		actor: { type: "system", name: "stripe-webhook" },
		icon: <TbCreditCard />,
		color: "red",
		title: (
			<>
				Payment of <MoneyText amount={312050} currency="EUR" /> failed: card declined
			</>
		),
	},
	{
		id: "evt_3",
		at: ago({ days: 6, hours: 2 }),
		actor: { type: "user", name: users.lea.name, color: users.lea.color },
		icon: <TbNote />,
		title: "added a note",
		body: "Customer asked to move invoices to the finance mailbox.",
	},
	{
		id: "evt_4",
		at: ago({ days: 9 }),
		actor: { type: "user", name: users.jean.name, color: users.jean.color },
		onBehalfOf: { name: "Marie Dubois", email: "marie@acme.io" },
		icon: <TbMail />,
		title: "updated the billing contacts",
		diff: [
			{ field: "billingEmail", label: "Billing email", before: "billing@acme.io", after: "finance@acme.io" },
			{ field: "ccEmail", label: "Copy to", before: null, after: "cfo@acme.io" },
		],
	},
];

export interface ThreadUser extends UserChipUser {
	id: string;
}

export interface ThreadComment {
	id: string;
	author: ThreadUser;
	body: string;
	internal: boolean;
	createdAt: DateLike;
	editedAt?: DateLike;
}

export interface CommentsThreadProps {
	comments: ThreadComment[];
	currentUser: ThreadUser;
	onSubmit: (comment: { body: string; internal: boolean; mentions: string[] }) => void;
	onEdit?: (id: string, body: string) => void;
	onDelete?: (id: string) => void;
	mentionSearch: (query: string) => ThreadUser[] | Promise<ThreadUser[]>;
	customerVisible?: boolean;
	loading?: boolean;
}

const commentsThreadMentionPattern = /@\[([^\]]+)\]\(([^)]+)\)/g;

const commentsThreadEditMinutes = 15;

function CommentsThreadBody({ body }: { body: string }) {
	const parts: { start: number; text: string; mention: boolean }[] = [];
	let cursor = 0;
	for (const match of body.matchAll(commentsThreadMentionPattern)) {
		const start = match.index ?? 0;
		if (start > cursor) parts.push({ start: cursor, text: body.slice(cursor, start), mention: false });
		parts.push({ start, text: `@${match[1]}`, mention: true });
		cursor = start + match[0].length;
	}
	if (cursor < body.length) parts.push({ start: cursor, text: body.slice(cursor), mention: false });

	return (
		<Text size="sm" style={{ whiteSpace: "pre-wrap" }}>
			{parts.map((part) =>
				part.mention ? (
					<Text
						key={part.start}
						span
						inherit
						fw={500}
						px={4}
						style={{
							background: "var(--mantine-primary-color-light)",
							color: "var(--mantine-primary-color-light-color)",
							borderRadius: "var(--mantine-radius-sm)",
						}}
					>
						{part.text}
					</Text>
				) : (
					<Text key={part.start} span inherit>
						{part.text}
					</Text>
				),
			)}
		</Text>
	);
}

export function CommentsThread({
	comments,
	currentUser,
	onSubmit,
	onEdit,
	onDelete,
	mentionSearch,
	customerVisible = false,
	loading = false,
}: CommentsThreadProps) {
	const [draft, setDraft] = useState("");
	const [mentions, setMentions] = useState<string[]>([]);
	const [internal, setInternal] = useState(true);
	const [editing, setEditing] = useState<{ id: string; body: string } | null>(null);

	const mentionData = async (query: string) =>
		(await mentionSearch(query)).map((user) => ({ id: user.id, display: user.name }));

	const submit = () => {
		onSubmit({ body: draft, internal, mentions });
		setDraft("");
		setMentions([]);
	};

	return (
		<Stack gap="md">
			{loading ? (
				<Stack gap="sm">
					<Skeleton h={48} />
					<Skeleton h={48} />
				</Stack>
			) : (
				comments.map((comment) => {
					const editable =
						comment.author.id === currentUser.id &&
						Date.now() - new Date(comment.createdAt).getTime() < commentsThreadEditMinutes * 60_000;
					const warned = comment.internal && customerVisible;

					return (
						<Group key={comment.id} align="flex-start" gap="sm" wrap="nowrap">
							<Avatar name={comment.author.name} color={comment.author.color ?? "initials"} size={28} />
							<Box
								miw={0}
								style={{ flex: 1 }}
								p={warned ? "sm" : 0}
								bg={warned ? "var(--mantine-color-yellow-light)" : undefined}
								bdrs={warned ? "md" : undefined}
							>
								<Group gap={6} wrap="wrap">
									<Text size="sm" fw={500}>
										{comment.author.name}
									</Text>
									<Text size="xs" c="dimmed">
										<RelativeTime value={comment.createdAt} capitalize />
										{comment.editedAt && " · edited"}
									</Text>
									{comment.internal && (
										<Badge size="xs" variant="light" color={warned ? "yellow" : "gray"} tt="none" fw={500}>
											Internal
										</Badge>
									)}
									{editable && editing?.id !== comment.id && (
										<Group gap={8} ml="auto">
											<Anchor
												component="button"
												size="xs"
												onClick={() => setEditing({ id: comment.id, body: comment.body })}
											>
												Edit
											</Anchor>
											<Anchor component="button" size="xs" c="red" onClick={() => onDelete?.(comment.id)}>
												Delete
											</Anchor>
										</Group>
									)}
								</Group>
								{editing?.id === comment.id ? (
									<Stack gap="xs" mt={6}>
										<Mentions
											value={editing.body}
											onChange={(payload) => setEditing({ id: comment.id, body: payload.value })}
											minRows={2}
											aria-label="Edit comment"
										>
											<Mentions.Mention trigger="@" data={mentionData} />
										</Mentions>
										<Group gap="xs" justify="flex-end">
											<Button variant="default" size="xs" onClick={() => setEditing(null)}>
												Cancel
											</Button>
											<Button
												size="xs"
												onClick={() => {
													onEdit?.(comment.id, editing.body);
													setEditing(null);
												}}
											>
												Save comment
											</Button>
										</Group>
									</Stack>
								) : (
									<Box mt={2}>
										<CommentsThreadBody body={comment.body} />
									</Box>
								)}
							</Box>
						</Group>
					);
				})
			)}
			<Stack gap="xs">
				<Mentions
					value={draft}
					onChange={(payload) => {
						setDraft(payload.value);
						setMentions(payload.mentions.map((mention) => mention.id));
					}}
					placeholder="Add a note. Use @ to mention someone."
					minRows={2}
					aria-label="New comment"
				>
					<Mentions.Mention trigger="@" data={mentionData} />
				</Mentions>
				<Group justify="space-between">
					<Checkbox
						size="xs"
						label="Internal only"
						checked={internal}
						onChange={(event) => setInternal(event.currentTarget.checked)}
					/>
					<Button size="xs" disabled={draft.trim() === ""} onClick={submit}>
						Add comment
					</Button>
				</Group>
			</Stack>
		</Stack>
	);
}

const commentsThreadUsers: ThreadUser[] = Object.values(users).map((user) => ({
	id: user.id,
	name: user.name,
	email: user.email,
	color: user.color,
}));

function CommentsThreadExample() {
	const [comments, setComments] = useState<ThreadComment[]>([
		{
			id: "cmt_1",
			author: commentsThreadUsers[1],
			body: `Customer wants invoices sent to finance@ from December. @[${users.anna.name}](${users.anna.id}) can you update the contact?`,
			internal: false,
			createdAt: ago({ hours: 2 }),
		},
		{
			id: "cmt_2",
			author: commentsThreadUsers[0],
			body: "Done. They're also disputing INV-0441, see the refund request.",
			internal: true,
			createdAt: ago({ minutes: 6 }),
		},
	]);

	return (
		<Card withBorder>
			<CommentsThread
				comments={comments}
				currentUser={commentsThreadUsers[0]}
				customerVisible
				mentionSearch={(query) =>
					commentsThreadUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
				}
				onSubmit={({ body, internal }) =>
					setComments((current) => [
						...current,
						{ id: `cmt_${current.length + 1}`, author: commentsThreadUsers[0], body, internal, createdAt: new Date() },
					])
				}
				onEdit={(id, body) =>
					setComments((current) =>
						current.map((comment) => (comment.id === id ? { ...comment, body, editedAt: new Date() } : comment)),
					)
				}
				onDelete={(id) => setComments((current) => current.filter((comment) => comment.id !== id))}
			/>
		</Card>
	);
}

export type KanbanMoveCheck = true | { allowed: false; reason: string };

export interface DocumentViewerProps {
	name: string;
	type: "pdf" | "image";
	pages: ReactNode[];
	aside?: ReactNode;
	onRotate?: (degrees: number) => void;
	height?: number;
}

const documentViewerPage = { width: 360, height: 509 };

const documentViewerZooms = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function DocumentViewer({ name, type, pages, aside, onRotate, height = 520 }: DocumentViewerProps) {
	const [page, setPage] = useState(0);
	const [zoomIndex, setZoomIndex] = useState(2);
	const [rotation, setRotation] = useState(0);

	const zoom = documentViewerZooms[zoomIndex];
	const sideways = rotation % 180 !== 0;
	const zoomBy = (step: number) =>
		setZoomIndex((current) => Math.min(Math.max(current + step, 0), documentViewerZooms.length - 1));
	const goTo = (target: number) => setPage(Math.min(Math.max(target, 0), pages.length - 1));
	const rotate = () => {
		const next = (rotation + 90) % 360;
		setRotation(next);
		onRotate?.(next);
	};
	const handleKeys = useShortcutScope(
		[
			{ keys: "=", description: "Zoom in", handler: () => zoomBy(1) },
			{ keys: "-", description: "Zoom out", handler: () => zoomBy(-1) },
			...(pages.length > 1
				? [
						{ keys: "ArrowRight", description: "Next page", handler: () => goTo(page + 1) },
						{ keys: "ArrowLeft", description: "Previous page", handler: () => goTo(page - 1) },
					]
				: []),
			{ keys: "r", description: "Rotate", handler: rotate },
		],
		{ group: "Document" },
	);

	const toolbar = (
		<Group justify="space-between" wrap="nowrap" w="100%">
			<Group gap={4} wrap="nowrap">
				{type === "pdf" && (
					<>
						<ActionIcon
							variant="subtle"
							color="gray"
							aria-label="Previous page"
							disabled={page === 0}
							onClick={() => goTo(page - 1)}
						>
							<TbChevronLeft />
						</ActionIcon>
						<Text size="sm" style={{ fontVariantNumeric: "tabular-nums" }}>
							{page + 1} / {pages.length}
						</Text>
						<ActionIcon
							variant="subtle"
							color="gray"
							aria-label="Next page"
							disabled={page === pages.length - 1}
							onClick={() => goTo(page + 1)}
						>
							<TbChevronRight />
						</ActionIcon>
					</>
				)}
			</Group>
			<Group gap={4} wrap="nowrap">
				<ActionIcon
					variant="subtle"
					color="gray"
					aria-label="Zoom out"
					disabled={zoomIndex === 0}
					onClick={() => zoomBy(-1)}
				>
					<TbZoomOut />
				</ActionIcon>
				<Text size="sm" w={44} ta="center" style={{ fontVariantNumeric: "tabular-nums" }}>
					{Math.round(zoom * 100)}%
				</Text>
				<ActionIcon
					variant="subtle"
					color="gray"
					aria-label="Zoom in"
					disabled={zoomIndex === documentViewerZooms.length - 1}
					onClick={() => zoomBy(1)}
				>
					<TbZoomIn />
				</ActionIcon>
				<ActionIcon variant="subtle" color="gray" aria-label="Rotate" onClick={rotate}>
					<TbRotateClockwise />
				</ActionIcon>
			</Group>
		</Group>
	);

	return (
		<Group
			gap={0}
			wrap="nowrap"
			align="stretch"
			h={height}
			style={frameStyle}
			tabIndex={0}
			aria-label={`${name}, page ${page + 1} of ${pages.length}`}
			onKeyDown={handleKeys}
		>
			<Pane withBorder={false} header={toolbar} miw={0} flex={1}>
				<Box p="lg" bg="var(--mantine-color-default-hover)" style={{ flex: "1 0 auto", minWidth: "max-content" }}>
					<Box
						pos="relative"
						mx="auto"
						w={(sideways ? documentViewerPage.height : documentViewerPage.width) * zoom}
						h={(sideways ? documentViewerPage.width : documentViewerPage.height) * zoom}
					>
						<Paper
							shadow="sm"
							radius={0}
							p="lg"
							w={documentViewerPage.width}
							h={documentViewerPage.height}
							pos="absolute"
							top="50%"
							left="50%"
							style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${zoom})` }}
						>
							{pages[page]}
						</Paper>
					</Box>
				</Box>
			</Pane>
			{aside && (
				<Box w={250} p="md" style={{ flexShrink: 0, borderLeft: "1px solid var(--mantine-color-default-border)" }}>
					{aside}
				</Box>
			)}
		</Group>
	);
}

function DocumentViewerLines({ widths }: { widths: string[] }) {
	return (
		<Stack gap={8}>
			{widths.map((width) => (
				<Skeleton key={width} h={6} w={width} animate={false} />
			))}
		</Stack>
	);
}

const documentViewerPages = [
	<Stack key="page-1" gap="md">
		<Group justify="space-between" align="flex-start">
			<Stack gap={2}>
				<Text fw={700} size="sm">
					Extrait Kbis
				</Text>
				<Text size="xs" c="dimmed">
					Registre du commerce et des sociétés
				</Text>
			</Stack>
			<TbFileText size={28} aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />
		</Group>
		<Stack gap={4}>
			<Text size="xs">Dénomination: Nova SAS</Text>
			<Text size="xs" ff="monospace">
				SIREN 852 114 920
			</Text>
			<Text size="xs">Représentant légal: Claire Nova</Text>
		</Stack>
		<DocumentViewerLines widths={["100%", "92%", "96%", "70%"]} />
		<DocumentViewerLines widths={["98%", "88%", "94%", "62%"]} />
	</Stack>,
	<Stack key="page-2" gap="md">
		<Text fw={700} size="sm">
			Activité
		</Text>
		<DocumentViewerLines widths={["100%", "95%", "90%", "97%", "60%"]} />
		<DocumentViewerLines widths={["99%", "93%", "80%"]} />
	</Stack>,
	<Stack key="page-3" gap="md">
		<Text fw={700} size="sm">
			Dirigeants
		</Text>
		<DocumentViewerLines widths={["100%", "86%", "92%"]} />
	</Stack>,
];

function DocumentViewerExample() {
	return (
		<DocumentViewer
			name="Kbis_Nova_2026.pdf"
			type="pdf"
			pages={documentViewerPages}
			aside={
				<Stack gap="md" h="100%">
					<Text size="sm" fw={600} truncate>
						Kbis_Nova_2026.pdf
					</Text>
					<DataList>
						<DataList.Item>
							<DataList.ItemLabel>Uploaded</DataList.ItemLabel>
							<DataList.ItemValue>
								<RelativeTime value={ago({ days: 7 })} capitalize />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>By</DataList.ItemLabel>
							<DataList.ItemValue>
								<UserChip user={users.lea} />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Check</DataList.ItemLabel>
							<DataList.ItemValue>
								<Text span inherit c="red">
									Name on ID ≠ legal representative
								</Text>
							</DataList.ItemValue>
						</DataList.Item>
					</DataList>
					<Box style={{ flex: 1 }} />
					<Stack gap="xs">
						<Button variant="default" fullWidth>
							Reject document
						</Button>
						<Button fullWidth>Accept document</Button>
					</Stack>
				</Stack>
			}
		/>
	);
}

export interface StatusTransition<Status extends string> {
	from: Status | Status[];
	to: Status;
	label: string;
	guard?: () => string | null;
	requiresReason?: boolean;
	consequence?: ReactNode;
	tone?: "default" | "danger";
}

export interface StatusMachine<Status extends string> {
	states: StatusMap<Status>;
	transitions: StatusTransition<Status>[];
}

export function defineStatusMachine<Status extends string>(machine: StatusMachine<Status>) {
	return machine;
}

export interface StatusMenuProps<Status extends string> {
	machine: StatusMachine<Status>;
	value: Status;
	onChange: (
		to: Status,
		details: ConfirmActionDetails & { transition: StatusTransition<Status> },
	) => void | Promise<void>;
	disabled?: boolean;
}

export function StatusMenu<Status extends string>({
	machine,
	value,
	onChange,
	disabled = false,
}: StatusMenuProps<Status>) {
	const available = machine.transitions.filter((transition) =>
		(Array.isArray(transition.from) ? transition.from : [transition.from]).includes(value),
	);
	// The confirmation lives outside the menu, so it survives the menu closing; the last move stays for the exit animation
	const [confirming, setConfirming] = useState<StatusTransition<Status> | null>(null);
	const [confirmOpened, setConfirmOpened] = useState(false);

	return (
		<Group gap="xs" wrap="nowrap">
			<StatusBadge value={value} tones={machine.states} />
			{available.length > 0 && (
				<Menu position="bottom-end" disabled={disabled}>
					<Menu.Target>
						<Button variant="default" size="xs" rightSection={<TbChevronDown />} disabled={disabled}>
							Move to
						</Button>
					</Menu.Target>
					<Menu.Dropdown>
						{available.map((transition) => {
							const blocked = transition.guard?.() ?? null;
							const item = (onClick?: () => void) => (
								<Menu.Item
									color={transition.tone === "danger" && !blocked ? "red" : undefined}
									disabled={blocked !== null}
									onClick={onClick}
								>
									{transition.label}
									{blocked && (
										<Text size="xs" c="dimmed">
											{blocked}
										</Text>
									)}
								</Menu.Item>
							);
							if (blocked) return <Fragment key={transition.label}>{item()}</Fragment>;
							if (transition.requiresReason || transition.tone === "danger") {
								return (
									<Fragment key={transition.label}>
										{item(() => {
											setConfirming(transition);
											setConfirmOpened(true);
										})}
									</Fragment>
								);
							}
							return <Fragment key={transition.label}>{item(() => onChange(transition.to, { transition }))}</Fragment>;
						})}
					</Menu.Dropdown>
				</Menu>
			)}
			{confirming && (
				<ConfirmAction
					opened={confirmOpened}
					onClose={() => setConfirmOpened(false)}
					action={confirming.label}
					consequence={confirming.consequence}
					tone={confirming.tone}
					reason={confirming.requiresReason ? { required: true } : undefined}
					onConfirm={(details) => onChange(confirming.to, { ...details, transition: confirming })}
				/>
			)}
		</Group>
	);
}

const statusMenuInvoiceMachine = defineStatusMachine({
	states: defineStatusMap({
		draft: ["Draft", "neutral"],
		open: ["Open", "info"],
		paid: ["Paid", "success"],
		void: ["Void", "neutral"],
		uncollectible: ["Uncollectible", "danger"],
	}),
	transitions: [
		{ from: "draft", to: "open", label: "Send invoice" },
		{ from: "open", to: "paid", label: "Mark as paid" },
		{
			from: "open",
			to: "uncollectible",
			label: "Mark as uncollectible",
			guard: () => "Possible once the invoice is 90 days overdue.",
		},
		{
			from: ["draft", "open"],
			to: "void",
			label: "Void invoice",
			requiresReason: true,
			tone: "danger",
			consequence: "The invoice number stays used. The customer is told the invoice was cancelled.",
		},
		{ from: "void", to: "draft", label: "Reopen as draft" },
	],
});

function StatusMenuExample() {
	const [status, setStatus] = useState<"draft" | "open" | "paid" | "void" | "uncollectible">("open");
	const [lastReason, setLastReason] = useState<string | null>(null);

	return (
		<Panel
			title="INV-0441"
			actions={
				<StatusMenu
					machine={statusMenuInvoiceMachine}
					value={status}
					onChange={(to, { reason }) => {
						setStatus(to);
						setLastReason(reason ?? null);
					}}
				/>
			}
		>
			<DataList>
				<DataList.Item>
					<DataList.ItemLabel>Customer</DataList.ItemLabel>
					<DataList.ItemValue>{customers[2].name}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Amount</DataList.ItemLabel>
					<DataList.ItemValue>
						<MoneyText amount={312050} currency="EUR" />
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Due</DataList.ItemLabel>
					<DataList.ItemValue>
						<DateText value={ago({ days: 12 })} />
					</DataList.ItemValue>
				</DataList.Item>
				{lastReason && (
					<DataList.Item>
						<DataList.ItemLabel>Reason</DataList.ItemLabel>
						<DataList.ItemValue>{lastReason}</DataList.ItemValue>
					</DataList.Item>
				)}
			</DataList>
		</Panel>
	);
}

export type ApprovalStepState = "approved" | "rejected" | "pending" | "skipped";

export interface ApprovalStep {
	id: string;
	approver: { user: UserChipUser } | { group: string };
	state: ApprovalStepState;
	at?: DateLike;
	comment?: string;
}

export interface ApprovalStepsProps {
	steps: ApprovalStep[];
	policy?: ReactNode;
	canDecide?: boolean;
	approveLabel?: string;
	rejectLabel?: string;
	onApprove?: (comment: string) => void | Promise<void>;
	onReject?: (reason: string) => void | Promise<void>;
}

const approvalStepIcons: Record<ApprovalStepState, ReactNode> = {
	approved: <TbCheck />,
	rejected: <TbX />,
	pending: <TbClock />,
	skipped: <TbPlayerSkipForward />,
};

const approvalStepColors: Record<ApprovalStepState, MantineColor | undefined> = {
	approved: "green",
	rejected: "red",
	pending: undefined,
	skipped: "dimmed",
};

const approvalStepLabels: Record<ApprovalStepState, string> = {
	approved: "Approved",
	rejected: "Rejected",
	pending: "",
	skipped: "Skipped",
};

export function ApprovalSteps({
	steps,
	policy,
	canDecide = false,
	approveLabel = "Approve",
	rejectLabel = "Reject",
	onApprove,
	onReject,
}: ApprovalStepsProps) {
	const [comment, setComment] = useState("");
	const rejected = steps.some((step) => step.state === "rejected");
	const currentIndex = rejected ? -1 : steps.findIndex((step) => step.state === "pending");

	return (
		<Stack gap="md">
			{policy && (
				<Group gap={6} wrap="nowrap" c="dimmed">
					<TbShieldCheck aria-hidden />
					<Text size="sm">{policy}</Text>
				</Group>
			)}
			<Timeline bulletSize={24} lineWidth={1} active={-1}>
				{steps.map((step, index) => {
					const current = index === currentIndex;
					return (
						<Timeline.Item
							key={step.id}
							bullet={
								<Box
									component="span"
									c={current ? "var(--mantine-primary-color-filled)" : approvalStepColors[step.state]}
									style={{ display: "flex" }}
								>
									{approvalStepIcons[step.state]}
								</Box>
							}
							title={
								<Group justify="space-between" wrap="nowrap" gap="sm">
									{"user" in step.approver ? (
										<UserChip user={step.approver.user} />
									) : (
										<Group gap={8} wrap="nowrap">
											<ThemeIcon variant="light" color="gray" radius="xl" size={26}>
												<TbUsers />
											</ThemeIcon>
											<Text size="sm" fw={500}>
												{step.approver.group}
											</Text>
										</Group>
									)}
									<Text
										size="xs"
										fw={current ? 600 : undefined}
										c={current ? "var(--mantine-primary-color-filled)" : "dimmed"}
									>
										{current ? "Waiting" : approvalStepLabels[step.state]}
									</Text>
								</Group>
							}
						>
							{step.at && (
								<Text size="xs" c="dimmed" mt={2}>
									<RelativeTime value={step.at} capitalize />
								</Text>
							)}
							{step.comment && (
								<Text size="sm" mt={4}>
									{step.comment}
								</Text>
							)}
						</Timeline.Item>
					);
				})}
			</Timeline>
			{canDecide && currentIndex >= 0 && (
				<Stack gap="xs">
					<Textarea
						aria-label="Comment"
						placeholder="Add a comment (optional)"
						autosize
						minRows={2}
						value={comment}
						onChange={(event) => setComment(event.currentTarget.value)}
					/>
					<Group justify="flex-end" gap="sm">
						<ConfirmAction
							action={rejectLabel}
							tone="danger"
							reason={{ label: "Reason, shared with the requester", required: true }}
							onConfirm={({ reason }) => onReject?.(reason ?? "")}
							trigger={(open) => (
								<Button variant="default" onClick={open}>
									{rejectLabel}
								</Button>
							)}
						/>
						<Button
							onClick={async () => {
								await onApprove?.(comment.trim());
								setComment("");
							}}
						>
							{approveLabel}
						</Button>
					</Group>
				</Stack>
			)}
		</Stack>
	);
}

function ApprovalStepsExample() {
	const [steps, setSteps] = useState<ApprovalStep[]>([
		{
			id: "lead",
			approver: { user: users.jean },
			state: "approved",
			at: ago({ hours: 3 }),
			comment: "Disputed twice this year. The refund covers INV-0441.",
		},
		{ id: "finance", approver: { group: "Finance team" }, state: "pending" },
		{ id: "cfo", approver: { user: users.anna }, state: "pending" },
	]);
	const decide = (state: ApprovalStepState, comment: string) =>
		setSteps((current) => {
			const index = current.findIndex((step) => step.state === "pending");
			return current.map((step, position) =>
				position === index ? { ...step, state, at: new Date(), comment: comment || undefined } : step,
			);
		});

	return (
		<Panel title={<MoneyText amount={230000} currency="EUR" />} description={`Refund to ${customers[2].name}`}>
			<ApprovalSteps
				steps={steps}
				policy="Refunds above €2,000 need finance and the CFO."
				canDecide
				approveLabel="Approve refund"
				rejectLabel="Reject refund"
				onApprove={(comment) => decide("approved", comment)}
				onReject={(reason) => decide("rejected", reason)}
			/>
		</Panel>
	);
}

export interface RecordVersion<Values extends object> {
	id: string;
	number: number;
	at: DateLike;
	author: Actor;
	onBehalfOf?: { name: string; email?: string };
	summary: string;
	values: Values;
}

export interface VersionField<Values extends object> {
	key: keyof Values & string;
	label: string;
	render?: (value: unknown) => ReactNode;
}

export interface VersionHistoryProps<Values extends object> {
	versions: RecordVersion<Values>[];
	fields: VersionField<Values>[];
	selectedId: string;
	onSelect: (id: string) => void;
	onRestore: (version: RecordVersion<Values>) => void | Promise<void>;
	height?: number;
	breakpoint?: number;
}

export function VersionHistory<Values extends object>({
	versions,
	fields,
	selectedId,
	onSelect,
	onRestore,
	height = 420,
	breakpoint = 720,
}: VersionHistoryProps<Values>) {
	const { ref, width } = useElementSize();
	const narrow = width > 0 && width < breakpoint;
	const current = versions[0];
	const selected = versions.find((version) => version.id === selectedId) ?? current;
	const isCurrent = selected.id === current.id;
	const changes: DiffChange[] = fields
		.filter((field) => JSON.stringify(selected.values[field.key]) !== JSON.stringify(current.values[field.key]))
		.map((field) => ({
			field: field.key,
			label: field.label,
			before: selected.values[field.key],
			after: current.values[field.key],
			render: field.render,
		}));

	return (
		<Flex ref={ref} direction={narrow ? "column" : "row"} h={narrow ? undefined : height} style={frameStyle}>
			<Pane
				withBorder={false}
				w={narrow ? undefined : 280}
				miw={narrow ? undefined : 280}
				title="Versions"
				count={versions.length}
			>
				<Stack gap={0}>
					{versions.map((version) => {
						const active = version.id === selected.id;
						return (
							<UnstyledButton
								key={version.id}
								onClick={() => onSelect(version.id)}
								aria-current={active || undefined}
								px="md"
								py="sm"
								bg={active ? "var(--mantine-primary-color-light)" : undefined}
								style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
							>
								<Group justify="space-between" wrap="nowrap" gap="xs">
									<Text size="sm" fw={500}>
										Version {version.number}
										{version.id === current.id && " (current)"}
									</Text>
									<Text size="xs" c="dimmed">
										<RelativeTime value={version.at} capitalize />
									</Text>
								</Group>
								<Text size="xs" c="dimmed" truncate>
									{version.summary}
								</Text>
								<Box mt={4}>
									<ActorChip actor={version.author} onBehalfOf={version.onBehalfOf} />
								</Box>
							</UnstyledButton>
						);
					})}
				</Stack>
			</Pane>
			<Divider orientation={narrow ? "horizontal" : "vertical"} />
			<Pane
				withBorder={false}
				miw={0}
				flex={1}
				title={isCurrent ? "Current version" : `Version ${selected.number} compared with the current one`}
				actions={
					!isCurrent && (
						<ConfirmAction
							action="Restore"
							target={`version ${selected.number}`}
							confirmLabel={`Restore version ${selected.number}`}
							consequence="The current values are saved as a new version first, so this can be undone."
							onConfirm={() => onRestore(selected)}
							trigger={(open) => (
								<Button variant="default" size="xs" leftSection={<TbRestore />} onClick={open}>
									Restore
								</Button>
							)}
						/>
					)
				}
			>
				<Box p="md">
					{isCurrent ? (
						<Text size="sm" c="dimmed">
							Pick an older version to see what changed since.
						</Text>
					) : changes.length === 0 ? (
						<Text size="sm" c="dimmed">
							Same values as the current version.
						</Text>
					) : (
						<DiffView changes={changes} />
					)}
				</Box>
			</Pane>
		</Flex>
	);
}

interface VersionHistoryCustomer {
	legalName: string;
	billingEmail: string;
	paymentTerms: string;
	plan: string;
	vatNumber: string | null;
}

const versionHistoryFields: VersionField<VersionHistoryCustomer>[] = [
	{ key: "legalName", label: "Legal name" },
	{ key: "billingEmail", label: "Billing email" },
	{ key: "paymentTerms", label: "Payment terms" },
	{ key: "plan", label: "Plan" },
	{ key: "vatNumber", label: "VAT number" },
];

const versionHistoryCreated: VersionHistoryCustomer = {
	legalName: "Acme Logistics",
	billingEmail: "billing@acme.io",
	paymentTerms: "45 days",
	plan: "Growth",
	vatNumber: null,
};

function VersionHistoryExample() {
	const [versions, setVersions] = useState<RecordVersion<VersionHistoryCustomer>[]>(() => {
		const synced = { ...versionHistoryCreated, legalName: "Acme Logistics SAS", vatNumber: "FR40123456789" };
		const terms = { ...synced, paymentTerms: "30 days" };
		const email = { ...terms, billingEmail: "finance@acme.io" };
		return [
			{
				id: "v15",
				number: 15,
				at: ago({ minutes: 40 }),
				author: { type: "user", name: users.anna.name },
				summary: "Changed the plan",
				values: { ...email, plan: "Enterprise" },
			},
			{
				id: "v14",
				number: 14,
				at: ago({ days: 9 }),
				author: { type: "user", name: users.jean.name, color: users.jean.color },
				onBehalfOf: { name: "Marie Dubois", email: "marie@acme.io" },
				summary: "Updated the billing email",
				values: email,
			},
			{
				id: "v13",
				number: 13,
				at: ago({ days: 23 }),
				author: { type: "user", name: users.lea.name, color: users.lea.color },
				summary: "Changed the payment terms",
				values: terms,
			},
			{
				id: "v12",
				number: 12,
				at: ago({ days: 61 }),
				author: { type: "system", name: "erp-sync" },
				summary: "Synced the legal name and VAT number",
				values: synced,
			},
		];
	});
	const [selectedId, setSelectedId] = useState("v13");

	return (
		<VersionHistory
			versions={versions}
			fields={versionHistoryFields}
			selectedId={selectedId}
			onSelect={setSelectedId}
			onRestore={(version) => {
				setVersions((current) => [
					{
						id: `v${current[0].number + 1}`,
						number: current[0].number + 1,
						at: new Date(),
						author: { type: "user", name: users.anna.name },
						summary: `Restored version ${version.number}`,
						values: version.values,
					},
					...current,
				]);
				setSelectedId(`v${versions[0].number + 1}`);
			}}
		/>
	);
}

export interface CompareField<Row> {
	key: keyof Row & string;
	label: string;
	render?: (row: Row) => ReactNode;
	equals?: (first: Row[keyof Row], second: Row[keyof Row]) => boolean;
}

export interface RecordCompareProps<Row> {
	records: Row[];
	recordId: keyof Row;
	heading: (record: Row) => ReactNode;
	fields: CompareField<Row>[];
	onlyDifferences: boolean;
	onOnlyDifferencesChange: (value: boolean) => void;
}

export function RecordCompare<Row>({
	records,
	recordId,
	heading,
	fields,
	onlyDifferences,
	onOnlyDifferencesChange,
}: RecordCompareProps<Row>) {
	const differs = (field: CompareField<Row>) => {
		const [first, ...rest] = records.map((record) => record[field.key]);
		const same = field.equals ?? ((left, right) => JSON.stringify(left) === JSON.stringify(right));
		return rest.some((value) => !same(first, value));
	};
	const differing = fields.filter(differs);
	const shown = onlyDifferences ? differing : fields;

	return (
		<Stack gap="sm">
			<Group justify="space-between" wrap="nowrap">
				<Text size="sm" c="dimmed">
					{differing.length === 0
						? "All fields match"
						: `${differing.length} of ${fields.length} fields ${differing.length === 1 ? "differs" : "differ"}`}
				</Text>
				<Switch
					size="sm"
					label="Only differences"
					checked={onlyDifferences}
					onChange={(event) => onOnlyDifferencesChange(event.currentTarget.checked)}
				/>
			</Group>
			<Table.ScrollContainer minWidth={180 + records.length * 200}>
				<Table withTableBorder verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={160}>Field</Table.Th>
							{records.map((record) => (
								<Table.Th key={String(record[recordId])}>{heading(record)}</Table.Th>
							))}
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{shown.map((field) => {
							const different = differing.includes(field);
							return (
								<Table.Tr key={field.key}>
									<Table.Td
										c={different ? undefined : "dimmed"}
										fw={different ? 500 : undefined}
										// A bar instead of a row tint: tints get loud in dark schemes
										style={different ? { boxShadow: "inset 3px 0 0 var(--mantine-color-orange-filled)" } : undefined}
									>
										{field.label}
									</Table.Td>
									{records.map((record) => (
										<Table.Td key={String(record[recordId])}>
											{field.render ? field.render(record) : String(record[field.key] ?? emptyValue)}
										</Table.Td>
									))}
								</Table.Tr>
							);
						})}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Stack>
	);
}

interface RecordCompareCustomer {
	id: string;
	name: string;
	email: string;
	vatNumber: string;
	country: string;
	plan: string;
	mrr: number;
	createdAt: string;
	status: Customer["status"];
}

const recordCompareCustomers: RecordCompareCustomer[] = [
	{
		id: "cus_8f2KqL",
		name: "Acme Logistics",
		email: "billing@acme.io",
		vatNumber: "FR40123456789",
		country: "FR",
		plan: "Enterprise",
		mrr: 1248000,
		createdAt: "2025-03-04",
		status: "active",
	},
	{
		id: "cus_4Wx9Lr",
		name: "ACME Logistics SAS",
		email: "billing@acme.io",
		vatNumber: "FR40123456789",
		country: "FR",
		plan: "Growth",
		mrr: 0,
		createdAt: "2026-11-02",
		status: "trial",
	},
];

const recordCompareRegions = new Intl.DisplayNames(undefined, { type: "region" });

const recordCompareFields: CompareField<RecordCompareCustomer>[] = [
	{ key: "name", label: "Name" },
	{ key: "email", label: "Billing email" },
	{
		key: "vatNumber",
		label: "VAT number",
		render: (customer) => (
			<Text span ff="monospace" size="sm">
				{customer.vatNumber}
			</Text>
		),
	},
	{ key: "country", label: "Country", render: (customer) => recordCompareRegions.of(customer.country) },
	{ key: "plan", label: "Plan" },
	{ key: "mrr", label: "MRR", render: (customer) => <MoneyText amount={customer.mrr} currency="EUR" /> },
	{ key: "createdAt", label: "Customer since", render: (customer) => <DateText value={customer.createdAt} /> },
	{
		key: "status",
		label: "Status",
		render: (customer) => <StatusBadge value={customer.status} tones={customerStatus} />,
	},
];

function RecordCompareExample() {
	const [onlyDifferences, setOnlyDifferences] = useState(false);

	return (
		<Panel title="Possible duplicate" description="Same VAT number and billing email">
			<RecordCompare
				records={recordCompareCustomers}
				recordId="id"
				heading={(customer) => (
					<Stack gap={2}>
						{customer.name}
						<CopyableId value={customer.id} />
					</Stack>
				)}
				fields={recordCompareFields}
				onlyDifferences={onlyDifferences}
				onOnlyDifferencesChange={setOnlyDifferences}
			/>
		</Panel>
	);
}

export type JobStatus = "running" | "done" | "cancelled";

export interface JobFailure {
	id: string;
	item: ReactNode;
	reason: string;
}

function RecordHoverCardExample() {
	const acme = customers[0];

	return (
		<Card withBorder mih={300}>
			<Text size="sm" component="div">
				Invoice INV-0441 was sent to{" "}
				<HoverCard openDelay={400} width={300} position="bottom-start" withinPortal={false} initiallyOpened>
					<HoverCard.Target>
						<Anchor href="#customer" inherit>
							{acme.name}
						</Anchor>
					</HoverCard.Target>
					<HoverCard.Dropdown>
						<Stack gap="sm">
							<Group gap="sm" wrap="nowrap">
								<Avatar name={acme.name} color="initials" radius="md" />
								<Box miw={0}>
									<Group gap="xs" wrap="nowrap">
										<Text size="sm" fw={600} truncate>
											{acme.name}
										</Text>
										<StatusBadge value={acme.status} tones={customerStatus} />
									</Group>
									<Group gap={6} wrap="nowrap">
										<CopyableId value={acme.id} />
										<Text size="xs" c="dimmed">
											Enterprise
										</Text>
									</Group>
								</Box>
							</Group>
							<DataList>
								<DataList.Item>
									<DataList.ItemLabel>MRR</DataList.ItemLabel>
									<DataList.ItemValue>
										<MoneyText amount={acme.mrr} currency="EUR" />
									</DataList.ItemValue>
								</DataList.Item>
								<DataList.Item>
									<DataList.ItemLabel>Owner</DataList.ItemLabel>
									<DataList.ItemValue>{users.anna.name}</DataList.ItemValue>
								</DataList.Item>
							</DataList>
							<Button size="xs" variant="default" style={{ alignSelf: "flex-start" }}>
								Open customer
							</Button>
						</Stack>
					</HoverCard.Dropdown>
				</HoverCard>{" "}
				yesterday.
			</Text>
		</Card>
	);
}

export interface RecordDrawerProps {
	opened: boolean;
	onClose: () => void;
	title: ReactNode;
	subtitle?: ReactNode;
	status?: ReactNode;
	position?: { index: number; total: number };
	onPrevious?: () => void;
	onNext?: () => void;
	onOpenFullPage?: () => void;
	actions?: ReactNode;
	children: ReactNode;
	size?: DrawerRootProps["size"];
	drawerProps?: Omit<DrawerRootProps, "opened" | "onClose" | "children" | "size" | "position">;
}

type RecordDrawerContentProps = Omit<RecordDrawerProps, "opened" | "size" | "drawerProps">;

export function RecordDrawer({ opened, onClose, size = "md", drawerProps, ...content }: RecordDrawerProps) {
	return (
		<Drawer.Root opened={opened} onClose={onClose} position="right" size={size} {...drawerProps}>
			<Drawer.Overlay />
			<Drawer.Content>
				<Drawer.Body p={0} h="100%">
					<RecordDrawerContent onClose={onClose} {...content} />
				</Drawer.Body>
			</Drawer.Content>
		</Drawer.Root>
	);
}

function RecordDrawerContent({
	onClose,
	title,
	subtitle,
	status,
	position,
	onPrevious,
	onNext,
	onOpenFullPage,
	actions,
	children,
}: RecordDrawerContentProps) {
	const hasPrevious = Boolean(onPrevious) && (position ? position.index > 0 : true);
	const hasNext = Boolean(onNext) && (position ? position.index < position.total - 1 : true);
	const handleKeys = useShortcutScope(
		[
			{
				keys: "j",
				description: "Next record",
				handler: () => {
					if (hasNext) onNext?.();
				},
			},
			{
				keys: "k",
				description: "Previous record",
				handler: () => {
					if (hasPrevious) onPrevious?.();
				},
			},
		],
		{ group: "Quick view" },
	);

	return (
		<Box h="100%" onKeyDown={handleKeys}>
			<Pane
				withBorder={false}
				h="100%"
				header={
					<Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm" w="100%" py={4}>
						<Stack gap={4} miw={0}>
							{subtitle && (
								<Text size="xs" c="dimmed" component="div">
									{subtitle}
								</Text>
							)}
							<Drawer.Title fz="lg" fw={600} lh={1.3}>
								{title}
							</Drawer.Title>
							{status && <Box>{status}</Box>}
						</Stack>
						<Group gap={4} wrap="nowrap" style={{ flexShrink: 0 }}>
							{position && (
								<Text size="xs" c="dimmed" mr={4} style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
									{position.index + 1} of {position.total}
								</Text>
							)}
							{(onPrevious || onNext) && (
								<>
									<Tooltip
										label={
											<Group gap={6} wrap="nowrap">
												Previous <ShortcutHint keys="k" />
											</Group>
										}
										withArrow
									>
										<ActionIcon
											variant="subtle"
											color="gray"
											aria-label="Previous record"
											disabled={!hasPrevious}
											onClick={onPrevious}
										>
											<TbChevronUp />
										</ActionIcon>
									</Tooltip>
									<Tooltip
										label={
											<Group gap={6} wrap="nowrap">
												Next <ShortcutHint keys="j" />
											</Group>
										}
										withArrow
									>
										<ActionIcon
											variant="subtle"
											color="gray"
											aria-label="Next record"
											disabled={!hasNext}
											onClick={onNext}
										>
											<TbChevronDown />
										</ActionIcon>
									</Tooltip>
								</>
							)}
							<CloseButton aria-label="Close" onClick={onClose} />
						</Group>
					</Group>
				}
				footer={
					(onOpenFullPage || actions) && (
						<Group justify="space-between" wrap="nowrap" gap="sm">
							{onOpenFullPage ? (
								<Button variant="default" size="xs" leftSection={<TbArrowsMaximize />} onClick={onOpenFullPage}>
									Open full page
								</Button>
							) : (
								<span />
							)}
							{actions && (
								<Group gap="xs" wrap="nowrap">
									{actions}
								</Group>
							)}
						</Group>
					)
				}
			>
				<Box p="md">{children}</Box>
			</Pane>
		</Box>
	);
}

type RecordDrawerInvoiceStatus = "open" | "overdue" | "paid";

const recordDrawerInvoiceStatus = defineStatusMap<RecordDrawerInvoiceStatus>({
	open: ["Open", "info"],
	overdue: ["Overdue", "danger"],
	paid: ["Paid", "success"],
});

const recordDrawerInvoices: {
	id: string;
	customer: Customer;
	amount: number;
	due: Date;
	status: RecordDrawerInvoiceStatus;
	owner: UserChipUser;
}[] = [
	{
		id: "INV-0447",
		customer: customers[0],
		amount: 1248000,
		due: fromNow({ days: 12 }),
		status: "open",
		owner: users.anna,
	},
	{
		id: "INV-0446",
		customer: customers[2],
		amount: 312050,
		due: ago({ days: 9 }),
		status: "overdue",
		owner: users.lea,
	},
	{ id: "INV-0445", customer: customers[4], amount: 4500210, due: ago({ days: 2 }), status: "paid", owner: users.jean },
	{
		id: "INV-0444",
		customer: customers[3],
		amount: 98000,
		due: ago({ days: 16 }),
		status: "overdue",
		owner: users.lea,
	},
	{
		id: "INV-0443",
		customer: customers[5],
		amount: 186000,
		due: fromNow({ days: 20 }),
		status: "open",
		owner: users.anna,
	},
];

function RecordDrawerExample() {
	const [openedIndex, setOpenedIndex] = useState<number | null>(1);
	// Keeps the last record on screen while the drawer slides out
	const [shownIndex, setShownIndex] = useState(1);
	const invoice = recordDrawerInvoices[shownIndex];
	const open = (index: number) => {
		setShownIndex(index);
		setOpenedIndex(index);
	};

	return (
		// `contain: layout` makes the frame the containing block of the drawer's fixed layers
		<Box pos="relative" h={460} style={{ ...frameStyle, contain: "layout" }}>
			<Table highlightOnHover verticalSpacing="sm">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Invoice</Table.Th>
						<Table.Th>Customer</Table.Th>
						<Table.Th>Status</Table.Th>
						<Table.Th ta="right">Amount</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{recordDrawerInvoices.map((row, index) => (
						<Table.Tr
							key={row.id}
							onClick={() => open(index)}
							style={{ cursor: "pointer" }}
							bg={index === openedIndex ? "var(--mantine-primary-color-light)" : undefined}
						>
							<Table.Td>
								<Anchor component="button" size="sm" ff="monospace" onClick={() => open(index)}>
									{row.id}
								</Anchor>
							</Table.Td>
							<Table.Td>{row.customer.name}</Table.Td>
							<Table.Td>
								<StatusBadge value={row.status} tones={recordDrawerInvoiceStatus} />
							</Table.Td>
							<Table.Td ta="right">
								<MoneyText amount={row.amount} currency="EUR" />
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
			<RecordDrawer
				opened={openedIndex !== null}
				onClose={() => setOpenedIndex(null)}
				title={invoice.customer.name}
				subtitle={<CopyableId value={invoice.id} size="xs" />}
				status={<StatusBadge value={invoice.status} tones={recordDrawerInvoiceStatus} />}
				position={{ index: shownIndex, total: recordDrawerInvoices.length }}
				onPrevious={() => open(Math.max(0, shownIndex - 1))}
				onNext={() => open(Math.min(recordDrawerInvoices.length - 1, shownIndex + 1))}
				onOpenFullPage={() => {}}
				actions={
					invoice.status !== "paid" && (
						<Button size="xs" leftSection={<TbSend />}>
							Send reminder
						</Button>
					)
				}
				size={380}
				drawerProps={{ withinPortal: false, lockScroll: false, trapFocus: false, returnFocus: false }}
			>
				<DataList>
					<DataList.Item>
						<DataList.ItemLabel>Amount</DataList.ItemLabel>
						<DataList.ItemValue>
							<MoneyText amount={invoice.amount} currency="EUR" />
						</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Due</DataList.ItemLabel>
						<DataList.ItemValue>
							<DateText value={invoice.due} />
						</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Billing email</DataList.ItemLabel>
						<DataList.ItemValue>{invoice.customer.email}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Owner</DataList.ItemLabel>
						<DataList.ItemValue>
							<UserChip user={invoice.owner} size="sm" />
						</DataList.ItemValue>
					</DataList.Item>
				</DataList>
			</RecordDrawer>
		</Box>
	);
}

export interface MergeRecordsField<Row> {
	key: keyof Row & string;
	label: string;
	render?: (row: Row) => ReactNode;
	equals?: (first: Row, second: Row) => boolean;
}

export interface MergeRecordsRelated {
	label: string;
	noun: CountForms;
	counts: [number, number];
}

export type MergeRecordsChoices = Record<string, 0 | 1>;

interface MergeRecordsProps<Row> {
	records: [Row, Row];
	recordId: keyof Row & string;
	fields: MergeRecordsField<Row>[];
	survivor: 0 | 1;
	onSurvivorChange: (survivor: 0 | 1) => void;
	choices: MergeRecordsChoices;
	onChoicesChange: (choices: MergeRecordsChoices) => void;
	noun: CountForms;
	reason?: ReactNode;
	related?: MergeRecordsRelated[];
	undoNote?: ReactNode;
	onMerge: (result: Row) => void | Promise<void>;
}

function mergeRecordsSame<Row>(field: MergeRecordsField<Row>, first: Row, second: Row) {
	return field.equals
		? field.equals(first, second)
		: JSON.stringify(first[field.key]) === JSON.stringify(second[field.key]);
}

export function mergeRecordsResult<Row>(
	records: [Row, Row],
	fields: MergeRecordsField<Row>[],
	choices: MergeRecordsChoices,
	survivor: 0 | 1,
): Row {
	const result = { ...records[survivor] };
	for (const field of fields) {
		result[field.key] = records[choices[field.key] ?? survivor][field.key];
	}
	return result;
}

export function MergeRecords<Row>({
	records,
	recordId,
	fields,
	survivor,
	onSurvivorChange,
	choices,
	onChoicesChange,
	noun,
	reason,
	related = [],
	undoNote,
	onMerge,
}: MergeRecordsProps<Row>) {
	const result = mergeRecordsResult(records, fields, choices, survivor);
	const render = (field: MergeRecordsField<Row>, row: Row) =>
		field.render ? field.render(row) : String(row[field.key] ?? emptyValue);
	const survivorId = String(records[survivor][recordId]);
	const removed = records[survivor === 0 ? 1 : 0];
	const removedId = String(removed[recordId]);
	const moving = related
		.map((item) => item.counts[survivor === 0 ? 1 : 0])
		.map((count, index) => (count > 0 ? formatCount(count, related[index].noun) : null))
		.filter((text): text is string => text !== null);

	return (
		<Panel
			title={`Merge ${formatCount(2, noun)}`}
			description={reason}
			flush
			footer={
				<Group justify="space-between" wrap="nowrap" gap="sm">
					<Text size="xs" c="dimmed">
						{undoNote}
					</Text>
					<ConfirmAction
						action="Merge"
						noun={noun}
						count={2}
						consequence={
							<>
								<Text span inherit ff="monospace">
									{removedId}
								</Text>{" "}
								is removed
								{moving.length > 0 && (
									<>
										, and its {new Intl.ListFormat(undefined, { type: "conjunction" }).format(moving)} move to{" "}
										<Text span inherit ff="monospace">
											{survivorId}
										</Text>
									</>
								)}
								.
							</>
						}
						onConfirm={() => onMerge(result)}
						trigger={(open) => (
							<Button leftSection={<TbGitMerge />} onClick={open} style={{ flexShrink: 0 }}>
								Merge {noun.other}
							</Button>
						)}
					/>
				</Group>
			}
		>
			<Table.ScrollContainer minWidth={680}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={140}>Field</Table.Th>
							{records.map((record, index) => (
								<Table.Th key={String(record[recordId])}>
									<Stack gap={4}>
										<CopyableId value={String(record[recordId])} size="xs" />
										<Radio
											size="xs"
											name="merge-records-survivor"
											label="Keep this ID"
											checked={survivor === index}
											onChange={() => onSurvivorChange(index as 0 | 1)}
										/>
									</Stack>
								</Table.Th>
							))}
							<Table.Th>After the merge</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{fields.map((field) => {
							const same = mergeRecordsSame(field, records[0], records[1]);
							const chosen = choices[field.key] ?? survivor;
							return (
								<Table.Tr key={field.key}>
									<Table.Td c="dimmed">{field.label}</Table.Td>
									{same ? (
										<Table.Td colSpan={2}>
											<Group gap="xs" wrap="nowrap">
												{render(field, records[0])}
												<Text size="xs" c="dimmed">
													Same in both
												</Text>
											</Group>
										</Table.Td>
									) : (
										records.map((record, index) => (
											<Table.Td key={String(record[recordId])}>
												<Radio
													name={`merge-records-${field.key}`}
													aria-label={`${field.label} from ${String(record[recordId])}`}
													label={render(field, record)}
													checked={chosen === index}
													onChange={() => onChoicesChange({ ...choices, [field.key]: index as 0 | 1 })}
												/>
											</Table.Td>
										))
									)}
									<Table.Td fw={500}>{render(field, result)}</Table.Td>
								</Table.Tr>
							);
						})}
						{related.map((item) => (
							<Table.Tr key={item.label}>
								<Table.Td c="dimmed">{item.label}</Table.Td>
								{item.counts.map((count, index) => (
									<Table.Td key={String(records[index][recordId])} style={{ fontVariantNumeric: "tabular-nums" }}>
										{count}
									</Table.Td>
								))}
								<Table.Td fw={500} style={{ fontVariantNumeric: "tabular-nums" }}>
									{item.counts[0] + item.counts[1]}
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

interface MergeRecordsCustomer {
	id: string;
	name: string;
	email: string;
	vat: string;
	address: string;
	phone: string | null;
	owner: UserChipUser;
	plan: string;
}

const mergeRecordsCustomers: [MergeRecordsCustomer, MergeRecordsCustomer] = [
	{
		id: "cus_8f2KqL",
		name: "Acme Logistics",
		email: "billing@acme.io",
		vat: "FR40123456789",
		address: "12 rue des Docks, 69002 Lyon",
		phone: "+33 4 72 00 18 40",
		owner: users.anna,
		plan: "Enterprise",
	},
	{
		id: "cus_4Ad7Rx",
		name: "ACME Logistics SAS",
		email: "finance@acme.io",
		vat: "FR40123456789",
		address: "12 rue des Docks, Lyon",
		phone: null,
		owner: users.lea,
		plan: "Enterprise",
	},
];

const mergeRecordsFields: MergeRecordsField<MergeRecordsCustomer>[] = [
	{ key: "name", label: "Name" },
	{
		key: "vat",
		label: "VAT number",
		render: (row) => (
			<Text span inherit ff="monospace">
				{row.vat}
			</Text>
		),
	},
	{ key: "email", label: "Billing email" },
	{ key: "address", label: "Address" },
	{ key: "phone", label: "Phone" },
	{
		key: "owner",
		label: "Owner",
		render: (row) => <UserChip user={row.owner} size="sm" />,
		equals: (first, second) => first.owner.name === second.owner.name,
	},
	{ key: "plan", label: "Plan" },
];

const mergeRecordsDefaultChoices: MergeRecordsChoices = { name: 0, email: 1, address: 0, phone: 0, owner: 0 };

function MergeRecordsExample() {
	const [survivor, setSurvivor] = useState<0 | 1>(0);
	const [choices, setChoices] = useState(mergeRecordsDefaultChoices);
	const [merged, setMerged] = useState<MergeRecordsCustomer | null>(null);

	if (merged) {
		return (
			<Alert color="green" icon={<TbCheck />} title={`Merged into ${merged.id}`} withCloseButton={false}>
				<Group justify="space-between" wrap="nowrap" gap="sm">
					<Text size="sm">
						{merged.name} keeps {merged.email} as its billing email.
					</Text>
					<Button
						variant="default"
						size="xs"
						onClick={() => {
							setMerged(null);
							setChoices(mergeRecordsDefaultChoices);
							setSurvivor(0);
						}}
					>
						Undo merge
					</Button>
				</Group>
			</Alert>
		);
	}

	return (
		<MergeRecords
			records={mergeRecordsCustomers}
			recordId="id"
			fields={mergeRecordsFields}
			survivor={survivor}
			onSurvivorChange={setSurvivor}
			choices={choices}
			onChoicesChange={setChoices}
			noun={{ one: "customer", other: "customers" }}
			reason="Same VAT number and a similar name"
			related={[
				{ label: "Invoices", noun: { one: "invoice", other: "invoices" }, counts: [41, 3] },
				{ label: "Contacts", noun: { one: "contact", other: "contacts" }, counts: [4, 2] },
				{ label: "Notes", noun: { one: "note", other: "notes" }, counts: [12, 1] },
			]}
			undoNote="You can undo a merge for 30 days."
			onMerge={(result) =>
				new Promise<void>((resolve) => {
					setTimeout(() => {
						setMerged(result);
						resolve();
					}, 600);
				})
			}
		/>
	);
}

export function RecordsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<RecordDrawerExample />
			</PreviewItem>
			<PreviewItem>
				<StatusMenuExample />
			</PreviewItem>
			<PreviewItem span="half">
				<Panel title="Activity">
					<ActivityTimeline items={activityTimelineItems} hasMore onLoadMore={() => {}} />
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<CommentsThreadExample />
			</PreviewItem>
			<PreviewItem span="full">
				<VersionHistoryExample />
			</PreviewItem>
			<PreviewItem span="full">
				<RecordCompareExample />
			</PreviewItem>
			<PreviewItem span="full">
				<MergeRecordsExample />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<ApprovalStepsExample />
			</PreviewItem>
			<PreviewItem span="full">
				<DocumentViewerExample />
			</PreviewItem>
			<PreviewItem span="half">
				<RecordHoverCardExample />
			</PreviewItem>
		</PreviewGrid>
	);
}

interface UsageMeterProps {
	label: ReactNode;
	used: number;
	limit: number | null;
	warnAt?: number;
	format?: "standard" | "compact";
	unit?: string;
	resetsAt?: DateLike;
	overage?: ReactNode;
}

export function UsageMeter({
	label,
	used,
	limit,
	warnAt = 0.8,
	format = "standard",
	unit,
	resetsAt,
	overage,
}: UsageMeterProps) {
	const settings = useFormatSettings();
	const amount = (value: number) =>
		`${formatNumber(value, { compact: format === "compact", locale: settings.locale })}${unit ? ` ${unit}` : ""}`;
	const ratio = limit ? used / limit : 0;
	const color = limit === null ? undefined : ratio > 1 ? "red" : ratio >= warnAt ? "orange" : undefined;

	return (
		<Stack gap={6}>
			<Group justify="space-between" wrap="nowrap" gap="sm">
				<Text size="sm" fw={500}>
					{label}
				</Text>
				<Text size="sm" c={color ?? "dimmed"} style={tabularStyle}>
					{limit === null ? `${amount(used)} · Unlimited` : `${amount(used)} / ${amount(limit)}`}
				</Text>
			</Group>
			{limit !== null && (
				<Progress value={Math.min(ratio, 1) * 100} color={color} size="sm" aria-label={`${amount(used)} used`} />
			)}
			{(resetsAt || overage) && (
				<Text size="xs" c="dimmed">
					{resetsAt && (
						<>
							Resets <DateText value={resetsAt} />
						</>
					)}
					{resetsAt && overage && " · "}
					{overage}
				</Text>
			)}
		</Stack>
	);
}

export interface HealthScoreFactor {
	label: string;
	weight: number;
	value: number;
}

const healthScoreLabels = { danger: "Critical", warning: "At risk", success: "Healthy" } as const;

function healthScoreTone(value: number, bands: { danger: number; warning: number }) {
	return value < bands.danger ? "danger" : value < bands.warning ? "warning" : "success";
}

export function HealthScore({
	value,
	bands = { danger: 40, warning: 70 },
	factors,
	trend,
	trendPeriod = "last month",
}: {
	value: number;
	bands?: { danger: number; warning: number };
	factors: HealthScoreFactor[];
	trend?: number;
	trendPeriod?: string;
}) {
	const tone = healthScoreTone(value, bands);

	return (
		<HoverCard width={260} shadow="md" withArrow position="bottom-start">
			<HoverCard.Target>
				<Group gap="xs" wrap="nowrap" tabIndex={0} style={{ cursor: "default" }}>
					<RingProgress
						size={44}
						thickness={4}
						roundCaps
						sections={[{ value, color: statusToneColors[tone] }]}
						label={
							<Text ta="center" size="xs" fw={700} style={tabularStyle}>
								{value}
							</Text>
						}
					/>
					<Box>
						<Text size="sm" fw={500}>
							{healthScoreLabels[tone]}
						</Text>
						{trend !== undefined && (
							<Text size="xs" c={trend === 0 ? "dimmed" : trend > 0 ? "green" : "red"} style={tabularStyle}>
								{trend > 0 ? "+" : trend < 0 ? "−" : ""}
								{Math.abs(trend)} since {trendPeriod}
							</Text>
						)}
					</Box>
				</Group>
			</HoverCard.Target>
			<HoverCard.Dropdown>
				<Stack gap="sm">
					{factors.map((factor) => (
						<Stack key={factor.label} gap={4}>
							<Group justify="space-between" wrap="nowrap">
								<Text size="sm">
									{factor.label}{" "}
									<Text span size="xs" c="dimmed">
										{Math.round(factor.weight * 100)}% of the score
									</Text>
								</Text>
								<Text size="sm" fw={500} style={tabularStyle}>
									{factor.value}
								</Text>
							</Group>
							<Progress
								value={factor.value}
								size="xs"
								color={statusToneColors[healthScoreTone(factor.value, bands)]}
								aria-label={`${factor.label}: ${factor.value}`}
							/>
						</Stack>
					))}
				</Stack>
			</HoverCard.Dropdown>
		</HoverCard>
	);
}

const primitivesAreaHealthFactors = (usage: number, payments: number, support: number): HealthScoreFactor[] => [
	{ label: "Usage", weight: 0.4, value: usage },
	{ label: "Payments", weight: 0.3, value: payments },
	{ label: "Support", weight: 0.3, value: support },
];

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogLine {
	id: string;
	at: DateLike;
	level: LogLevel;
	message: string;
	fields?: Record<string, string | number | boolean | null>;
}

export const logLevelStatus = defineStatusMap<LogLevel>({
	debug: ["Debug", "neutral"],
	info: ["Info", "info"],
	warn: ["Warn", "warning"],
	error: ["Error", "danger"],
});

const logViewerLevels: LogLevel[] = ["debug", "info", "warn", "error"];

interface LogViewerProps {
	lines: LogLine[];
	title?: ReactNode;
	loading?: boolean;
	error?: AsyncStateError | null;
	onRetry?: () => void;
	hasOlder?: boolean;
	loadingOlder?: boolean;
	onLoadOlder?: () => void;
	follow: boolean;
	onFollowChange: (follow: boolean) => void;
	height?: number;
	timeZone?: string;
}

function logViewerLineText(line: LogLine, time: string) {
	const fields = line.fields ? ` ${JSON.stringify(line.fields)}` : "";
	return `${time} ${line.level.toUpperCase()} ${line.message}${fields}`;
}

export function LogViewer({
	lines,
	title,
	loading = false,
	error,
	onRetry,
	hasOlder = false,
	loadingOlder = false,
	onLoadOlder,
	follow,
	onFollowChange,
	height = 420,
	timeZone,
}: LogViewerProps) {
	const settings = useFormatSettings();
	const [levels, setLevels] = useState<string[]>(["info", "warn", "error"]);
	const [query, setQuery] = useState("");
	const [wrap, setWrap] = useState(false);
	const [expanded, setExpanded] = useState<string[]>([]);
	const viewport = useRef<HTMLDivElement>(null);
	const lastScrollTop = useRef(0);

	const needle = query.trim().toLowerCase();
	const visible = lines.filter(
		(line) =>
			levels.includes(line.level) &&
			(needle === "" ||
				line.message.toLowerCase().includes(needle) ||
				JSON.stringify(line.fields ?? {})
					.toLowerCase()
					.includes(needle)),
	);
	const timeFormat = new Intl.DateTimeFormat(settings.locale, {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		fractionalSecondDigits: 3,
		hourCycle: "h23",
		timeZone: timeZone ?? settings.timeZone,
	});

	useEffect(() => {
		const element = viewport.current;
		if (follow && element && visible.length > 0) element.scrollTo({ top: element.scrollHeight });
	}, [follow, visible.length]);

	const toggleExpanded = (id: string) =>
		setExpanded((current) =>
			current.includes(id) ? current.filter((candidate) => candidate !== id) : [...current, id],
		);

	return (
		<Pane
			h={height}
			header={
				<Group gap="sm" w="100%" wrap="wrap">
					{title && (
						<Text size="sm" fw={600}>
							{title}
						</Text>
					)}
					<TextInput
						size="xs"
						w={200}
						leftSection={<TbSearch />}
						placeholder="Search lines"
						aria-label="Search lines"
						value={query}
						onChange={(event) => setQuery(event.currentTarget.value)}
					/>
					<Chip.Group multiple value={levels} onChange={setLevels}>
						<Group gap={4}>
							{logViewerLevels.map((level) => (
								<Chip
									key={level}
									value={level}
									size="xs"
									variant="light"
									color={statusToneColors[logLevelStatus[level].tone]}
								>
									{logLevelStatus[level].label}
								</Chip>
							))}
						</Group>
					</Chip.Group>
					<Box style={{ flex: 1 }} />
					<Switch size="xs" label="Wrap" checked={wrap} onChange={(event) => setWrap(event.currentTarget.checked)} />
					<Switch
						size="xs"
						label="Follow"
						checked={follow}
						onChange={(event) => onFollowChange(event.currentTarget.checked)}
					/>
				</Group>
			}
			footer={
				<Text size="xs" c="dimmed">
					{visible.length === lines.length
						? formatCount(lines.length, { one: "line", other: "lines" })
						: `${formatCount(visible.length, { one: "line", other: "lines" })} of ${formatNumber(lines.length)}`}
				</Text>
			}
		>
			<AsyncState
				loading={loading}
				error={error}
				onRetry={onRetry}
				empty={
					lines.length === 0 ? (
						<EmptyState
							size="sm"
							title="No log lines yet"
							description="Lines appear here as the service writes them."
						/>
					) : visible.length === 0 ? (
						<EmptyState size="sm" icon={<TbFilterOff />} title="No lines match">
							<EmptyState.Actions>
								<Button
									variant="default"
									size="xs"
									onClick={() => {
										setQuery("");
										setLevels(logViewerLevels);
									}}
								>
									Clear filters
								</Button>
							</EmptyState.Actions>
						</EmptyState>
					) : null
				}
			>
				<ScrollArea
					style={{ flex: 1 }}
					viewportRef={viewport}
					type="auto"
					onScrollPositionChange={({ y }) => {
						// Only a scroll up by the reader stops following; new lines and the follow jump only scroll down
						const scrolledUp = y < lastScrollTop.current - 4;
						lastScrollTop.current = y;
						const element = viewport.current;
						if (follow && scrolledUp && element && element.scrollHeight - element.clientHeight - y > 24) {
							onFollowChange(false);
						}
					}}
				>
					{hasOlder && onLoadOlder && (
						<Group justify="center" py="xs">
							<Button variant="subtle" size="xs" loading={loadingOlder} onClick={onLoadOlder}>
								Load older lines
							</Button>
						</Group>
					)}
					{visible.map((line) => {
						const time = timeFormat.format(new Date(line.at));
						const open = expanded.includes(line.id);
						return (
							<Box
								key={line.id}
								px="sm"
								py={4}
								style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
							>
								<Group gap="sm" wrap="nowrap" align="flex-start">
									{line.fields ? (
										<ActionIcon
											variant="subtle"
											color="gray"
											size="xs"
											aria-label={open ? "Hide fields" : "Show fields"}
											aria-expanded={open}
											onClick={() => toggleExpanded(line.id)}
										>
											{open ? <TbChevronDown /> : <TbChevronRight />}
										</ActionIcon>
									) : (
										<Box w={18} style={{ flexShrink: 0 }} />
									)}
									<Text size="xs" ff="monospace" c="dimmed" style={{ whiteSpace: "nowrap" }}>
										{time}
									</Text>
									<Box w={56} style={{ flexShrink: 0 }}>
										<StatusBadge value={line.level} tones={logLevelStatus} size="xs" />
									</Box>
									<Highlight
										highlight={needle}
										size="xs"
										ff="monospace"
										style={{ flex: 1, minWidth: 0, whiteSpace: wrap ? "pre-wrap" : "pre", overflowWrap: "anywhere" }}
									>
										{line.message}
									</Highlight>
									<CopyButton value={logViewerLineText(line, time)}>
										{({ copied, copy }) => (
											<ActionIcon
												variant="subtle"
												color={copied ? "teal" : "gray"}
												size="xs"
												aria-label={copied ? "Copied" : "Copy line"}
												onClick={copy}
											>
												{copied ? <TbCheck /> : <TbCopy />}
											</ActionIcon>
										)}
									</CopyButton>
								</Group>
								{open && line.fields && (
									<Code block mt={4} ml={26} fz="xs">
										{Object.entries(line.fields)
											.map(([key, value]) => `${key}=${JSON.stringify(value)}`)
											.join("\n")}
									</Code>
								)}
							</Box>
						);
					})}
				</ScrollArea>
			</AsyncState>
		</Pane>
	);
}

export interface StatusHistoryBucket {
	date: DateLike;
	tone: StatusTone;
	incidents?: string[];
}

interface StatusHistoryProps {
	label: ReactNode;
	buckets: StatusHistoryBucket[];
	uptime: number;
}

export function StatusHistory({ label, buckets, uptime }: StatusHistoryProps) {
	const { locale, timeZone } = useFormatSettings();
	const incidentCount = buckets.reduce((sum, bucket) => sum + (bucket.incidents?.length ?? 0), 0);
	const percent = formatPercent(uptime, { decimals: 2, locale });
	const period = formatCount(buckets.length, { one: "day", other: "days" });

	return (
		<Stack gap={6}>
			<Group justify="space-between" wrap="nowrap">
				<Text size="sm" fw={500}>
					{label}
				</Text>
				<Text size="sm" c="dimmed" style={{ whiteSpace: "nowrap" }}>
					{percent} uptime
				</Text>
			</Group>
			<Group
				gap={2}
				wrap="nowrap"
				role="img"
				aria-label={`${percent} uptime over ${period}, ${formatCount(incidentCount, { one: "incident", other: "incidents" })}`}
			>
				{buckets.map((bucket) => (
					<Tooltip
						key={new Date(bucket.date).toISOString()}
						withArrow
						label={
							<Stack gap={2}>
								<Text size="xs" fw={600}>
									{formatDate(bucket.date, "date", locale, timeZone)}
								</Text>
								{bucket.tone === "neutral" ? (
									<Text size="xs">No data</Text>
								) : bucket.incidents?.length ? (
									bucket.incidents.map((incident) => (
										<Text key={incident} size="xs">
											{incident}
										</Text>
									))
								) : (
									<Text size="xs">No incidents</Text>
								)}
							</Stack>
						}
					>
						<Box
							h={28}
							style={{
								flex: 1,
								minWidth: 2,
								borderRadius: 2,
								background:
									bucket.tone === "neutral"
										? "var(--mantine-color-default-border)"
										: `var(--mantine-color-${statusToneColors[bucket.tone]}-filled)`,
							}}
						/>
					</Tooltip>
				))}
			</Group>
			<Group justify="space-between">
				<Text size="xs" c="dimmed">
					{period} ago
				</Text>
				<Text size="xs" c="dimmed">
					Today
				</Text>
			</Group>
		</Stack>
	);
}

const tablesLogTemplates: Omit<LogLine, "id" | "at">[] = [
	{
		level: "info",
		message: "POST /v1/invoices 201 in 182 ms",
		fields: { requestId: "req_7Fk2Lm9Q", customer: "cus_8f2KqL", durationMs: 182 },
	},
	{ level: "debug", message: "Cache hit for customers:cus_8f2KqL" },
	{
		level: "info",
		message: "Sent reminder for INV-0441 to billing@acme.io",
		fields: { invoice: "INV-0441", channel: "email" },
	},
	{
		level: "warn",
		message: "Webhook delivery to https://erp.acme.io/hooks/billing failed, retrying (attempt 2 of 5)",
		fields: { endpoint: "we_3Kd8", status: 502, nextAttemptInSeconds: 60 },
	},
	{
		level: "info",
		message: "nightly-sync matched 18 payments",
		fields: { job: "nightly-sync", matched: 18, unmatched: 2 },
	},
	{
		level: "error",
		message: "Card declined for cus_5Tz1Pc: insufficient_funds",
		fields: { customer: "cus_5Tz1Pc", invoice: "INV-0441", code: "insufficient_funds" },
	},
	{
		level: "warn",
		message: "Slow query on invoices.list: 1,204 ms",
		fields: { query: "invoices.list", durationMs: 1204 },
	},
	{ level: "info", message: "GET /v1/customers 200 in 41 ms", fields: { requestId: "req_2Wq8Zx4T", durationMs: 41 } },
];

function tablesLogLine(index: number, at: Date): LogLine {
	return { id: `line-${index}`, at, ...tablesLogTemplates[Math.abs(index) % tablesLogTemplates.length] };
}

function TablesLogViewerDemo() {
	const [lines, setLines] = useState(() =>
		Array.from({ length: 30 }, (_, index) => tablesLogLine(index, ago({ minutes: 30 - index }))),
	);
	const [follow, setFollow] = useState(true);
	const [olderBatches, setOlderBatches] = useState(0);
	const [loadingOlder, setLoadingOlder] = useState(false);

	useInterval(
		() =>
			setLines((current) => {
				const next = tablesLogLine(current.length + olderBatches * 10, new Date());
				return [...current, { ...next, id: `line-live-${Date.now()}` }].slice(-300);
			}),
		3000,
		{ autoInvoke: true },
	);

	return (
		<LogViewer
			title="api-gateway"
			lines={lines}
			follow={follow}
			onFollowChange={setFollow}
			hasOlder={olderBatches < 3}
			loadingOlder={loadingOlder}
			onLoadOlder={() => {
				setLoadingOlder(true);
				window.setTimeout(() => {
					const batch = olderBatches + 1;
					setLines((current) => [
						...Array.from({ length: 10 }, (_, index) => ({
							...tablesLogLine(-(batch * 10) + index, ago({ minutes: 30 + batch * 10 - index })),
							id: `line-older-${batch}-${index}`,
						})),
						...current,
					]);
					setOlderBatches(batch);
					setLoadingOlder(false);
				}, 600);
			}}
		/>
	);
}

function tablesStatusBuckets(incidents: Record<number, [StatusTone, string]>, noDataBefore = 60) {
	return Array.from({ length: 60 }, (_, index): StatusHistoryBucket => {
		const daysAgo = 59 - index;
		const incident = incidents[daysAgo];
		if (daysAgo >= noDataBefore) return { date: ago({ days: daysAgo }), tone: "neutral" };
		return incident
			? { date: ago({ days: daysAgo }), tone: incident[0], incidents: [incident[1]] }
			: { date: ago({ days: daysAgo }), tone: "success" };
	});
}

function TablesStatusHistoryDemo() {
	return (
		<Panel title="Service status">
			<Stack gap="lg">
				<StatusHistory
					label="API"
					uptime={0.9998}
					buckets={tablesStatusBuckets({ 12: ["warning", "Elevated error rate for 14 min"] })}
				/>
				<StatusHistory
					label="Webhooks"
					uptime={0.9971}
					buckets={tablesStatusBuckets({
						3: ["danger", "Deliveries delayed for 1 h 20 min"],
						27: ["warning", "Retries slower than usual for 35 min"],
					})}
				/>
				<StatusHistory label="Customer portal" uptime={1} buckets={tablesStatusBuckets({}, 21)} />
			</Stack>
		</Panel>
	);
}

export interface StatCardProps {
	label: string;
	value: ReactNode;
	delta?: ReactNode;
	comparison: string;
	href?: string;
	linkLabel?: string;
	loading?: boolean;
}

export function StatCard({
	label,
	value,
	delta,
	comparison,
	href,
	linkLabel = "View",
	loading = false,
}: StatCardProps) {
	return (
		<Card withBorder>
			<Text size="sm" c="dimmed">
				{label}
			</Text>
			{loading ? (
				<Skeleton h={30} w="60%" my={6} />
			) : (
				<Text fz="h2" fw={700} lh={1.3} style={{ fontVariantNumeric: "tabular-nums" }}>
					{value}
				</Text>
			)}
			<Group gap={6} mt={4} wrap="wrap">
				{delta && (
					<Text size="sm" fw={500} span>
						{delta}
					</Text>
				)}
				<Text size="sm" c="dimmed" span>
					{comparison}
				</Text>
				{href && (
					<Anchor href={href} size="sm" ml="auto">
						{linkLabel}
					</Anchor>
				)}
			</Group>
		</Card>
	);
}

function StatCardExamples() {
	return (
		<SimpleGrid type="container" cols={{ base: 1, "640px": 3 }} spacing="xl">
			<StatCard
				label="MRR"
				value={<MoneyText amount={18422000} currency="EUR" wholeUnits />}
				delta={<PercentDelta value={0.042} goodWhen="up" />}
				comparison="vs last month"
				href="#payments"
			/>
			<StatCard
				label="Active customers"
				value={<NumberText value={1248} />}
				delta={
					<Text span inherit c="green">
						+38
					</Text>
				}
				comparison="this week"
				href="#customers"
			/>
			<StatCard
				label="Failed payments"
				value={<NumberText value={17} />}
				delta={
					<Text span inherit c="red">
						+5
					</Text>
				}
				comparison="since yesterday"
				href="#payments"
				linkLabel="Review failed payments"
			/>
		</SimpleGrid>
	);
}

export interface ChartCardProps<Range extends string> {
	title: string;
	range: Range;
	ranges: Range[];
	onRangeChange: (range: Range) => void;
	loading?: boolean;
	error?: AsyncStateError | null;
	empty?: boolean;
	onRetry?: () => void;
	asOf: DateLike;
	source?: string;
	dataHref: string;
	height?: number;
	children: (size: { width: number; height: number }) => ReactNode;
}

export function ChartCard<Range extends string>({
	title,
	range,
	ranges,
	onRangeChange,
	loading = false,
	error,
	empty = false,
	onRetry,
	asOf,
	source,
	dataHref,
	height = 220,
	children,
}: ChartCardProps<Range>) {
	const { ref, width } = useElementSize();

	return (
		<Panel
			title={title}
			actions={
				<SegmentedControl size="xs" value={range} onChange={(value) => onRangeChange(value as Range)} data={ranges} />
			}
			footer={
				<Group justify="space-between" wrap="nowrap">
					<Text size="xs" c="dimmed">
						As of <DateText value={asOf} format="datetime" />
						{source && ` · ${source}`}
					</Text>
					<Anchor href={dataHref} size="xs">
						View data
					</Anchor>
				</Group>
			}
		>
			<Box ref={ref} h={height} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
				<AsyncState
					loading={loading}
					error={error}
					onRetry={onRetry}
					skeleton={<Skeleton h={height} />}
					empty={empty && <EmptyState title="Nothing in this period" description="Pick a longer range." />}
				>
					{width > 0 && children({ width, height })}
				</AsyncState>
			</Box>
		</Panel>
	);
}

type ChartCardRange = "7d" | "12w" | "12m";

const chartCardData: Record<ChartCardRange, { period: string; collected: number }[]> = {
	"7d": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((period, index) => ({
		period,
		collected: [18400, 22100, 19800, 25600, 31200, 6400, 3100][index] * 100,
	})),
	"12w": Array.from({ length: 12 }, (_, index) => ({
		period: `W${index + 37}`,
		collected: [96, 104, 99, 112, 118, 109, 121, 127, 119, 131, 138, 142][index] * 100_000,
	})),
	"12m": ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((period, index) => ({
		period,
		collected: [402, 388, 421, 445, 438, 462, 470, 455, 481, 503, 512, 534][index] * 100_000,
	})),
};

function ChartCardExample() {
	const theme = useMantineTheme();
	const [range, setRange] = useState<ChartCardRange>("12w");

	return (
		<ChartCard
			title="Collected per week"
			range={range}
			ranges={["7d", "12w", "12m"]}
			onRangeChange={setRange}
			asOf={ago({ minutes: 8 })}
			dataHref="#payments"
		>
			{({ height }) => (
				<BarChart
					h={height}
					data={chartCardData[range]}
					dataKey="period"
					series={[{ name: "collected", label: "Collected", color: `${theme.primaryColor}.6` }]}
					valueFormatter={(value) => formatMoney(value, "EUR", undefined, { compact: true })}
					gridAxis="y"
					tickLine="none"
				/>
			)}
		</ChartCard>
	);
}

function ChartCardErrorExample() {
	const [loading, setLoading] = useState(false);

	return (
		<ChartCard
			title="Refunds by reason"
			range="12w"
			ranges={["12w"]}
			onRangeChange={() => {}}
			loading={loading}
			error={{
				title: "This chart didn't load",
				message: "The payments service took too long to answer.",
				requestId: "req_4Fz81K",
			}}
			onRetry={() => {
				setLoading(true);
				setTimeout(() => setLoading(false), 900);
			}}
			asOf={ago({ hours: 1 })}
			dataHref="#refunds"
		>
			{() => null}
		</ChartCard>
	);
}

export interface JobProgressProps {
	title: ReactNode;
	status: JobStatus;
	noun: CountForms;
	total: number;
	succeeded: number;
	failed: number;
	skipped: number;
	minutesLeft?: number;
	finishedAt?: DateLike;
	failures?: JobFailure[];
	stopLabel?: string;
	onStop?: () => void | Promise<void>;
	onRetryFailed?: () => void;
}

const jobProgressStatus = defineStatusMap({
	running: ["Running", "info"],
	done: ["Finished", "success"],
	cancelled: ["Stopped", "neutral"],
});

const jobProgressShownFailures = 4;

export function JobProgress({
	title,
	status,
	noun,
	total,
	succeeded,
	failed,
	skipped,
	minutesLeft,
	finishedAt,
	failures = [],
	stopLabel = "Stop",
	onStop,
	onRetryFailed,
}: JobProgressProps) {
	const processed = succeeded + failed + skipped;
	const share = (count: number) => (total === 0 ? 0 : (count / total) * 100);

	return (
		<Panel
			title={title}
			actions={
				<>
					<StatusBadge value={status} tones={jobProgressStatus} />
					{status === "running" && onStop && (
						<ConfirmAction
							action={stopLabel}
							tone="danger"
							consequence={`The ${formatCount(processed, noun)} already processed stay as they are.`}
							onConfirm={onStop}
							trigger={(open) => (
								<Button variant="default" size="xs" leftSection={<TbPlayerStop />} onClick={open}>
									{stopLabel}
								</Button>
							)}
						/>
					)}
				</>
			}
		>
			<Stack gap="sm">
				<Progress.Root size="lg" aria-label={`${processed} of ${total} processed`}>
					<Progress.Section value={share(succeeded)} color="green" />
					<Progress.Section value={share(failed)} color="red" />
					<Progress.Section value={share(skipped)} color="gray" />
				</Progress.Root>
				<Group justify="space-between" wrap="nowrap" gap="sm">
					<Text size="sm">
						<NumberText value={processed} /> of {formatCount(total, noun)}
					</Text>
					<Text size="sm" c="dimmed">
						{status === "running" && minutesLeft !== undefined && `About ${formatDuration(minutesLeft)} left`}
						{status !== "running" && finishedAt && <RelativeTime value={finishedAt} capitalize />}
					</Text>
				</Group>
				<Group gap="lg">
					<Text size="sm">
						<Text span c="green" fw={600} inherit>
							<NumberText value={succeeded} />
						</Text>{" "}
						succeeded
					</Text>
					<Text size="sm">
						<Text span c={failed > 0 ? "red" : undefined} fw={600} inherit>
							<NumberText value={failed} />
						</Text>{" "}
						failed
					</Text>
					<Text size="sm">
						<Text span fw={600} inherit>
							<NumberText value={skipped} />
						</Text>{" "}
						skipped
					</Text>
				</Group>
				{failures.length > 0 && (
					<Stack gap={6}>
						<Group justify="space-between" wrap="nowrap">
							<Text size="sm" fw={500}>
								Failures
							</Text>
							{status !== "running" && onRetryFailed && (
								<Button variant="subtle" size="compact-sm" leftSection={<TbRefresh />} onClick={onRetryFailed}>
									Retry {formatCount(failed, noun)}
								</Button>
							)}
						</Group>
						<Table verticalSpacing={6} withTableBorder>
							<Table.Tbody>
								{failures.slice(0, jobProgressShownFailures).map((failure) => (
									<Table.Tr key={failure.id}>
										<Table.Td w={120} style={{ whiteSpace: "nowrap" }}>
											{failure.item}
										</Table.Td>
										<Table.Td>{failure.reason}</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
						{failed > jobProgressShownFailures && (
							<Text size="xs" c="dimmed">
								And {formatCount(failed - jobProgressShownFailures, { one: "more failure", other: "more failures" })}.
							</Text>
						)}
					</Stack>
				)}
			</Stack>
		</Panel>
	);
}

const jobProgressFailures: JobFailure[] = [
	{ id: "row-112", item: "Row 112", reason: "VAT number must be 13 characters for France." },
	{ id: "row-487", item: "Row 487", reason: "Billing email is missing." },
	{ id: "row-903", item: "Row 903", reason: "Country “Frnace” isn't a country." },
	{ id: "row-1150", item: "Row 1,150", reason: "A customer with this VAT number already exists." },
];

function JobProgressRunningExample() {
	const [status, setStatus] = useState<JobStatus>("running");

	return (
		<JobProgress
			title="Import customers.csv"
			status={status}
			noun={{ one: "row", other: "rows" }}
			total={4186}
			succeeded={1180}
			failed={38}
			skipped={22}
			minutesLeft={4}
			finishedAt={status === "running" ? undefined : new Date()}
			failures={jobProgressFailures}
			stopLabel="Stop import"
			onStop={() => setStatus("cancelled")}
			onRetryFailed={() => setStatus("running")}
		/>
	);
}

function JobProgressDoneExample() {
	const [failed, setFailed] = useState(2);

	return (
		<JobProgress
			title="Change the owner of 38 customers"
			status="done"
			noun={{ one: "customer", other: "customers" }}
			total={38}
			succeeded={38 - failed}
			failed={failed}
			skipped={0}
			finishedAt={ago({ minutes: 3 })}
			failures={
				failed > 0
					? [
							{
								id: "cus_5Tz1Pc",
								item: "Cobalt & Partners",
								reason: "You can't change the owner of a past-due account.",
							},
							{ id: "cus_2Nv8Ns", item: "Nova SAS", reason: "Léa M. edited this customer during the change." },
						]
					: []
			}
			onRetryFailed={() => setFailed(0)}
		/>
	);
}

export type RunStepStatus = "queued" | "running" | "succeeded" | "failed" | "skipped";

export type RunStatus = "running" | "succeeded" | "failed" | "cancelled";

export const runStatus = defineStatusMap<RunStatus>({
	running: ["Running", "info"],
	succeeded: ["Succeeded", "success"],
	failed: ["Failed", "danger"],
	cancelled: ["Cancelled", "neutral"],
});

export interface RunStep {
	id: string;
	label: string;
	status: RunStepStatus;
	offset?: number;
	duration?: number;
	error?: string;
	logs?: LogLine[];
}

interface RunTimelineProps {
	job: string;
	runId: string;
	status: RunStatus;
	startedAt: DateLike;
	duration: number;
	trigger?: ReactNode;
	steps: RunStep[];
	onRetry?: (fromStepId: string) => void | Promise<void>;
	locale?: string;
}

export function formatRunDuration(milliseconds: number, locale?: string) {
	const unit = (value: number, name: "millisecond" | "second" | "minute", digits = 0) =>
		new Intl.NumberFormat(locale, {
			style: "unit",
			unit: name,
			unitDisplay: "narrow",
			maximumFractionDigits: digits,
		}).format(value);
	if (milliseconds < 1000) return unit(Math.round(milliseconds), "millisecond");
	if (milliseconds < 60_000) return unit(milliseconds / 1000, "second", 1);
	const minutes = Math.floor(milliseconds / 60_000);
	const seconds = Math.round((milliseconds % 60_000) / 1000);
	return seconds > 0 ? `${unit(minutes, "minute")} ${unit(seconds, "second")}` : unit(minutes, "minute");
}

const runStepIcons: Record<RunStepStatus, { icon: ReactNode; color: MantineColor; label: string }> = {
	queued: { icon: <TbClock />, color: "gray", label: "Queued" },
	running: { icon: <Loader size={12} color="blue" />, color: "blue", label: "Running" },
	succeeded: { icon: <TbCheck />, color: "green", label: "Succeeded" },
	failed: { icon: <TbX />, color: "red", label: "Failed" },
	skipped: { icon: <TbMinus />, color: "gray", label: "Skipped" },
};

export function RunTimeline({
	job,
	runId,
	status,
	startedAt,
	duration,
	trigger,
	steps,
	onRetry,
	locale,
}: RunTimelineProps) {
	const [openLogs, setOpenLogs] = useState<string[]>([]);
	const [retrying, setRetrying] = useState<string | null>(null);
	const toggleLogs = (id: string) =>
		setOpenLogs((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]));
	const retry = async (id: string) => {
		setRetrying(id);
		try {
			await onRetry?.(id);
		} finally {
			setRetrying(null);
		}
	};

	return (
		<Panel
			title={
				<Text span inherit ff="monospace">
					{job}
				</Text>
			}
			actions={<StatusBadge value={status} tones={runStatus} />}
		>
			<Stack gap="md">
				<Group gap={6} wrap="wrap">
					<CopyableId value={runId} size="xs" />
					<Text size="xs" c="dimmed">
						Started <RelativeTime value={startedAt} />
						{status !== "running" && ` · took ${formatRunDuration(duration, locale)}`}
						{trigger && <> · {trigger}</>}
					</Text>
				</Group>
				{steps.map((step) => {
					const visual = runStepIcons[step.status];
					const hasBar = step.offset !== undefined && step.duration !== undefined && duration > 0;
					const logsOpen = openLogs.includes(step.id);
					return (
						<Stack key={step.id} gap={6}>
							<Group justify="space-between" wrap="nowrap" gap="sm">
								<Group gap="sm" wrap="nowrap" miw={0}>
									<ThemeIcon
										size={22}
										radius="xl"
										variant="light"
										color={visual.color}
										aria-label={visual.label}
										role="img"
									>
										{visual.icon}
									</ThemeIcon>
									<Text size="sm" fw={500} c={step.status === "skipped" ? "dimmed" : undefined} truncate>
										{step.label}
									</Text>
								</Group>
								<Text size="xs" c="dimmed" style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
									{step.status === "skipped"
										? "Skipped"
										: step.status === "queued"
											? "Waiting"
											: step.duration !== undefined
												? formatRunDuration(step.duration, locale)
												: emptyValue}
								</Text>
							</Group>
							<Box
								pos="relative"
								h={6}
								ml={34}
								aria-hidden
								style={{ borderRadius: "var(--mantine-radius-xl)", background: "var(--mantine-color-default-hover)" }}
							>
								{hasBar && (
									<Box
										pos="absolute"
										top={0}
										bottom={0}
										style={{
											left: `${((step.offset ?? 0) / duration) * 100}%`,
											width: `${Math.max(1, ((step.duration ?? 0) / duration) * 100)}%`,
											borderRadius: "var(--mantine-radius-xl)",
											background: `var(--mantine-color-${visual.color}-filled)`,
										}}
									/>
								)}
							</Box>
							{step.error && (
								<Text size="sm" c="var(--mantine-color-red-text)" ml={34}>
									{step.error}
								</Text>
							)}
							{(step.logs?.length || (step.status === "failed" && onRetry)) && (
								<Group gap="xs" ml={34}>
									{step.logs && step.logs.length > 0 && (
										<Button
											variant="subtle"
											size="compact-xs"
											color="gray"
											leftSection={logsOpen ? <TbChevronDown /> : <TbChevronRight />}
											aria-expanded={logsOpen}
											onClick={() => toggleLogs(step.id)}
										>
											{logsOpen
												? "Hide logs"
												: `Show ${formatCount(step.logs.length, { one: "log line", other: "log lines" })}`}
										</Button>
									)}
									{step.status === "failed" && onRetry && (
										<Button
											variant="default"
											size="compact-xs"
											leftSection={<TbRefresh />}
											loading={retrying === step.id}
											onClick={() => retry(step.id)}
										>
											Retry from this step
										</Button>
									)}
								</Group>
							)}
							{step.logs && step.logs.length > 0 && (
								<Collapse expanded={logsOpen}>
									<Box ml={34}>
										<RunTimelineLogs lines={step.logs} />
									</Box>
								</Collapse>
							)}
						</Stack>
					);
				})}
			</Stack>
		</Panel>
	);
}

function RunTimelineLogs({ lines }: { lines: LogLine[] }) {
	const [follow, setFollow] = useState(false);
	return <LogViewer lines={lines} follow={follow} onFollowChange={setFollow} height={220} />;
}

const runTimelineSendLogs: LogLine[] = [
	{ id: "send-1", at: ago({ minutes: 42 }), level: "info", message: "Sending 18 emails through Resend" },
	{
		id: "send-2",
		at: ago({ minutes: 42 }),
		level: "warn",
		message: "Retrying after a failed request",
		fields: { attempt: 2, status: 401 },
	},
	{
		id: "send-3",
		at: ago({ minutes: 42 }),
		level: "error",
		message: "Resend rejected the API key",
		fields: { status: 401, key: "re_••••8Kd2", requestId: "req_9fK2mQ7x" },
	},
	{ id: "send-4", at: ago({ minutes: 42 }), level: "info", message: "Stopped: 0 of 18 emails sent" },
];

const runTimelineInitialSteps: RunStep[] = [
	{
		id: "load",
		label: "Load overdue invoices",
		status: "succeeded",
		offset: 0,
		duration: 120,
		logs: [{ id: "load-1", at: ago({ minutes: 42 }), level: "info", message: "Found 18 overdue invoices" }],
	},
	{ id: "render", label: "Render 18 emails", status: "succeeded", offset: 120, duration: 840 },
	{
		id: "send",
		label: "Send through Resend",
		status: "failed",
		offset: 960,
		duration: 2140,
		error: "Resend answered 401: the API key is invalid or revoked. Rotate it in Settings → API keys, then retry.",
		logs: runTimelineSendLogs,
	},
	{ id: "mark", label: "Mark invoices as reminded", status: "skipped" },
];

function RunTimelineExample() {
	const [steps, setSteps] = useState(runTimelineInitialSteps);
	const [status, setStatus] = useState<RunStatus>("failed");

	return (
		<RunTimeline
			job="send-invoice-reminders"
			runId="run_8f2c1a7e"
			status={status}
			startedAt={ago({ minutes: 42 })}
			duration={3100}
			trigger="Scheduled"
			steps={steps}
			onRetry={(fromStepId) => {
				const from = steps.findIndex((step) => step.id === fromStepId);
				setStatus("running");
				setSteps((current) =>
					current.map((step, index) =>
						index === from
							? { ...step, status: "running", error: undefined }
							: index > from
								? { ...step, status: "queued" }
								: step,
					),
				);
				return new Promise<void>((resolve) => {
					setTimeout(() => {
						setSteps((current) =>
							current.map((step, index) =>
								index === from
									? { ...step, status: "succeeded", duration: 1840 }
									: index > from
										? { ...step, status: "succeeded", offset: 2800, duration: 240 }
										: step,
							),
						);
						setStatus("succeeded");
						resolve();
					}, 1400);
				});
			}}
		/>
	);
}

export interface AuditEventTarget {
	type: string;
	id: string;
	label: string;
}

export interface AuditEvent {
	id: string;
	at: DateLike;
	actor: Actor;
	onBehalfOf?: { name: string; email?: string };
	action: string;
	target: AuditEventTarget;
	diff?: DiffChange[];
	reason?: string;
	ip?: string;
}

export interface AuditLogFilters {
	actor: string | null;
	action: string | null;
	targetType: string | null;
	range: [string | null, string | null];
}

export const auditLogNoFilters: AuditLogFilters = { actor: null, action: null, targetType: null, range: [null, null] };

function auditLogDay(value: DateLike) {
	return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(
		new Date(value),
	);
}

export function auditLogMatches(event: AuditEvent, filters: AuditLogFilters) {
	const day = auditLogDay(event.at);
	const [from, to] = filters.range;
	return (
		(!filters.actor || event.actor.name === filters.actor) &&
		(!filters.action || event.action === filters.action) &&
		(!filters.targetType || event.target.type === filters.targetType) &&
		(!from || day >= from) &&
		(!to || day <= to)
	);
}

function auditLogCsvCell(value: string) {
	return /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

export function auditEventsToCsv(events: AuditEvent[], actions: { value: string; label: string }[]) {
	const label = (action: string) => actions.find((option) => option.value === action)?.label ?? action;
	const header = [
		"Time (UTC)",
		"Actor",
		"On behalf of",
		"Action",
		"Target type",
		"Target ID",
		"Target",
		"Reason",
		"IP",
	];
	const rows = events.map((event) => [
		new Date(event.at).toISOString(),
		event.actor.name,
		event.onBehalfOf?.email ?? event.onBehalfOf?.name ?? "",
		label(event.action),
		event.target.type,
		event.target.id,
		event.target.label,
		event.reason ?? "",
		event.ip ?? "",
	]);
	return [header, ...rows].map((row) => row.map(auditLogCsvCell).join(",")).join("\n");
}

interface AuditLogProps {
	events: AuditEvent[];
	filters: AuditLogFilters;
	onFiltersChange: (filters: AuditLogFilters) => void;
	actors: string[];
	actions: { value: string; label: string }[];
	targetTypes: { value: string; label: string }[];
	loading?: boolean;
	error?: AsyncStateError | null;
	onRetry?: () => void;
	hasMore?: boolean;
	loadingMore?: boolean;
	onLoadMore?: () => void;
	onExport?: (format: "csv" | "json") => void;
	locale?: string;
	timeZone?: string;
}

export function AuditLog({
	events,
	filters,
	onFiltersChange,
	actors,
	actions,
	targetTypes,
	loading = false,
	error,
	onRetry,
	hasMore = false,
	loadingMore = false,
	onLoadMore,
	onExport,
	locale,
	timeZone,
}: AuditLogProps) {
	const [expanded, setExpanded] = useState<string[]>([]);
	const filtered =
		filters.actor !== null ||
		filters.action !== null ||
		filters.targetType !== null ||
		filters.range[0] !== null ||
		filters.range[1] !== null;
	const actionLabel = (action: string) => actions.find((option) => option.value === action)?.label ?? action;
	const typeLabel = (type: string) => targetTypes.find((option) => option.value === type)?.label ?? type;
	const toggle = (id: string) =>
		setExpanded((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]));

	return (
		<Panel
			title="Audit log"
			flush
			actions={
				onExport && (
					<Menu position="bottom-end">
						<Menu.Target>
							<Button variant="default" size="xs" leftSection={<TbDownload />}>
								Export
							</Button>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item onClick={() => onExport("csv")}>CSV</Menu.Item>
							<Menu.Item onClick={() => onExport("json")}>JSON</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				)
			}
			footer={
				hasMore && (
					<Group justify="center">
						<Button variant="subtle" size="xs" loading={loadingMore} onClick={onLoadMore}>
							Load older events
						</Button>
					</Group>
				)
			}
		>
			<Group gap="xs" p="sm" wrap="wrap" style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}>
				<Select
					size="xs"
					aria-label="Actor"
					placeholder="Anyone"
					data={actors}
					value={filters.actor}
					onChange={(actor) => onFiltersChange({ ...filters, actor })}
					searchable
					clearable
					w={170}
				/>
				<Select
					size="xs"
					aria-label="Action"
					placeholder="All actions"
					data={actions}
					value={filters.action}
					onChange={(action) => onFiltersChange({ ...filters, action })}
					searchable
					clearable
					w={220}
				/>
				<Select
					size="xs"
					aria-label="Record type"
					placeholder="All records"
					data={targetTypes}
					value={filters.targetType}
					onChange={(targetType) => onFiltersChange({ ...filters, targetType })}
					clearable
					w={150}
				/>
				<DatePickerInput
					type="range"
					size="xs"
					aria-label="Dates"
					placeholder="Any date"
					valueFormat="MMM D"
					value={filters.range}
					onChange={(range) => onFiltersChange({ ...filters, range })}
					clearable
					allowSingleDateInRange
					w={190}
				/>
				{filtered && (
					<Anchor component="button" size="xs" onClick={() => onFiltersChange(auditLogNoFilters)}>
						Clear filters
					</Anchor>
				)}
			</Group>
			<AsyncState
				loading={loading}
				error={error}
				onRetry={onRetry}
				empty={
					events.length === 0 && (
						<EmptyState
							my="xl"
							title={filtered ? "No events match" : "No events yet"}
							description={
								filtered
									? "Try a longer period or fewer filters."
									: "Sign-ins, role changes, exports and other sensitive actions appear here."
							}
						>
							{filtered && (
								<Button variant="default" size="xs" onClick={() => onFiltersChange(auditLogNoFilters)}>
									Clear filters
								</Button>
							)}
						</EmptyState>
					)
				}
			>
				<Table.ScrollContainer minWidth={760}>
					<Table verticalSpacing="sm" horizontalSpacing="md">
						<Table.Thead>
							<Table.Tr>
								<Table.Th w={230}>Time</Table.Th>
								<Table.Th w={240}>Who</Table.Th>
								<Table.Th>What</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							{events.map((event) => {
								const open = expanded.includes(event.id);
								return (
									<Fragment key={event.id}>
										<Table.Tr style={{ verticalAlign: "top" }}>
											<Table.Td>
												<Text size="sm" style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
													<DateText value={event.at} format="datetime" locale={locale} timeZone={timeZone} />
												</Text>
												{event.ip && (
													<Text size="xs" c="dimmed" ff="monospace">
														{event.ip}
													</Text>
												)}
											</Table.Td>
											<Table.Td>
												<ActorChip actor={event.actor} onBehalfOf={event.onBehalfOf} />
											</Table.Td>
											<Table.Td>
												<Stack gap={4}>
													<Text size="sm">
														<Text span inherit fw={500}>
															{actionLabel(event.action)}
														</Text>{" "}
														<Text span inherit c="dimmed">
															· {typeLabel(event.target.type)}
														</Text>
														{event.target.label !== event.target.id && <> {event.target.label}</>}
													</Text>
													<Group gap="xs" wrap="wrap">
														<CopyableId value={event.target.id} size="xs" />
														{event.diff && event.diff.length > 0 && (
															<Button
																variant="subtle"
																size="compact-xs"
																color="gray"
																leftSection={open ? <TbChevronDown /> : <TbChevronRight />}
																aria-expanded={open}
																onClick={() => toggle(event.id)}
															>
																{open
																	? "Hide changes"
																	: `Show ${formatCount(event.diff.length, { one: "change", other: "changes" })}`}
															</Button>
														)}
													</Group>
													{event.reason && (
														<Text size="xs" c="dimmed">
															Reason: {event.reason}
														</Text>
													)}
												</Stack>
											</Table.Td>
										</Table.Tr>
										{open && event.diff && (
											<Table.Tr>
												<Table.Td colSpan={3} bg="var(--mantine-color-default-hover)">
													<DiffView changes={event.diff} />
												</Table.Td>
											</Table.Tr>
										)}
									</Fragment>
								);
							})}
						</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
			</AsyncState>
		</Panel>
	);
}

const auditLogActions = [
	{ value: "member.role_changed", label: "Changed a role" },
	{ value: "security.mfa_disabled", label: "Turned off two-step verification" },
	{ value: "customer.updated", label: "Updated a customer" },
	{ value: "invoice.created", label: "Created an invoice" },
	{ value: "invoice.updated", label: "Updated an invoice" },
	{ value: "payment.refunded", label: "Refunded a payment" },
	{ value: "customers.exported", label: "Exported customers" },
	{ value: "api_key.created", label: "Created an API key" },
];

const auditLogTargetTypes = [
	{ value: "member", label: "Member" },
	{ value: "customer", label: "Customer" },
	{ value: "invoice", label: "Invoice" },
	{ value: "payment", label: "Payment" },
	{ value: "export", label: "Export" },
	{ value: "api_key", label: "API key" },
];

const auditLogEvents: AuditEvent[] = [
	{
		id: "evt_01",
		at: ago({ minutes: 18 }),
		actor: { type: "user", name: users.anna.name },
		action: "member.role_changed",
		target: { type: "member", id: users.lea.id, label: users.lea.name },
		diff: [{ field: "role", label: "Role", before: "Member", after: "Admin" }],
		reason: "Covering billing while Jean is away",
		ip: "81.2.69.160",
	},
	{
		id: "evt_02",
		at: ago({ hours: 2 }),
		actor: { type: "system", name: "nightly-sync" },
		action: "invoice.updated",
		target: { type: "invoice", id: "INV-0441", label: "INV-0441" },
		diff: [{ field: "status", label: "Status", before: "Open", after: "Past due" }],
	},
	{
		id: "evt_03",
		at: ago({ hours: 5 }),
		actor: { type: "user", name: users.lea.name },
		onBehalfOf: { name: "Marie Dubois", email: "marie@acme.io" },
		action: "customer.updated",
		target: { type: "customer", id: "cus_8f2KqL", label: "Acme Logistics" },
		diff: [{ field: "email", label: "Billing email", before: "billing@acme.io", after: "finance@acme.io" }],
		reason: "Ticket #4812, asked by the customer",
		ip: "92.184.12.7",
	},
	{
		id: "evt_04",
		at: ago({ hours: 9 }),
		actor: { type: "api_key", name: "Production backend" },
		action: "invoice.created",
		target: { type: "invoice", id: "INV-0447", label: "INV-0447" },
		ip: "34.240.18.91",
	},
	{
		id: "evt_05",
		at: ago({ days: 1, hours: 3 }),
		actor: { type: "user", name: users.jean.name },
		action: "payment.refunded",
		target: { type: "payment", id: "pay_3Kd9Wq", label: "Payment for INV-0432" },
		diff: [{ field: "refunded", label: "Refunded", before: "€0.00", after: "€310.00" }],
		reason: "Charged twice",
		ip: "81.2.69.160",
	},
	{
		id: "evt_06",
		at: ago({ days: 2 }),
		actor: { type: "user", name: users.anna.name },
		action: "security.mfa_disabled",
		target: { type: "member", id: users.jean.id, label: users.jean.name },
		reason: "Lost phone, identity checked on a video call",
		ip: "81.2.69.160",
	},
	{
		id: "evt_07",
		at: ago({ days: 4 }),
		actor: { type: "user", name: users.lea.name },
		action: "customers.exported",
		target: { type: "export", id: "exp_7Tn2Lc", label: "1,248 customers, CSV" },
		ip: "92.184.12.7",
	},
	{
		id: "evt_08",
		at: ago({ days: 6 }),
		actor: { type: "user", name: users.anna.name },
		action: "api_key.created",
		target: { type: "api_key", id: "key_5Hb8Ze", label: "Production backend" },
		ip: "81.2.69.160",
	},
];

function AuditLogExample() {
	const [filters, setFilters] = useState<AuditLogFilters>(auditLogNoFilters);
	const events = auditLogEvents.filter((event) => auditLogMatches(event, filters));
	const download = (format: "csv" | "json") => {
		const body = format === "csv" ? auditEventsToCsv(events, auditLogActions) : JSON.stringify(events, null, 2);
		const url = URL.createObjectURL(new Blob([body], { type: format === "csv" ? "text/csv" : "application/json" }));
		const link = document.createElement("a");
		link.href = url;
		link.download = `audit-log.${format}`;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<AuditLog
			events={events}
			filters={filters}
			onFiltersChange={setFilters}
			actors={[users.anna.name, users.lea.name, users.jean.name, "nightly-sync", "Production backend"]}
			actions={auditLogActions}
			targetTypes={auditLogTargetTypes}
			hasMore
			onLoadMore={() => {}}
			onExport={download}
		/>
	);
}

export interface AutomationRuleAction {
	id: string;
	type: string;
	config: Record<string, string | number | null>;
}

export interface AutomationRule {
	name: string;
	enabled: boolean;
	trigger: string;
	conditions: FilterGroup;
	actions: AutomationRuleAction[];
}

export interface AutomationActionType {
	value: string;
	label: string;
	defaultConfig: AutomationRuleAction["config"];
	renderConfig: (
		config: AutomationRuleAction["config"],
		onConfigChange: (config: AutomationRuleAction["config"]) => void,
	) => ReactNode;
}

export interface AutomationDryRun {
	total: number;
	matches: { id: string; label: ReactNode; changes: string[] }[];
}

interface AutomationRuleEditorProps {
	value: AutomationRule;
	onChange: (value: AutomationRule) => void;
	triggers: { value: string; label: string }[];
	fields: FilterField[];
	actionTypes: AutomationActionType[];
	noun: CountForms;
	dryRun: AutomationDryRun | null;
	dryRunLoading?: boolean;
	onDryRun: () => void;
	dirty?: boolean;
	onSave?: () => void | Promise<void>;
}

function AutomationRuleEditorStep({ label, children }: { label: string; children: ReactNode }) {
	return (
		<Group align="flex-start" wrap="nowrap" gap="md">
			<Text size="sm" fw={600} w={44} pt={6} style={{ flexShrink: 0 }}>
				{label}
			</Text>
			<Box style={{ flex: 1, minWidth: 0, overflowX: "auto" }}>{children}</Box>
		</Group>
	);
}

export function AutomationRuleEditor({
	value,
	onChange,
	triggers,
	fields,
	actionTypes,
	noun,
	dryRun,
	dryRunLoading = false,
	onDryRun,
	dirty = false,
	onSave,
}: AutomationRuleEditorProps) {
	const [saving, setSaving] = useState(false);
	const typeOf = (type: string) => actionTypes.find((option) => option.value === type);
	const setActions = (actions: AutomationRuleAction[]) => onChange({ ...value, actions });
	const addAction = () => {
		const type = actionTypes[0];
		setActions([...value.actions, { id: `action-${Date.now()}`, type: type.value, config: { ...type.defaultConfig } }]);
	};
	const save = async () => {
		setSaving(true);
		try {
			await onSave?.();
		} finally {
			setSaving(false);
		}
	};
	const canEnable = value.actions.length > 0;

	return (
		<Panel
			title={value.name || "Untitled rule"}
			description={value.enabled ? "On: runs every time the trigger happens" : "Off: nothing runs until you turn it on"}
			actions={
				<Tooltip label="Add an action first" disabled={canEnable} withArrow>
					<Switch
						label={value.enabled ? "On" : "Off"}
						checked={value.enabled}
						disabled={!canEnable}
						onChange={(event) => onChange({ ...value, enabled: event.currentTarget.checked })}
					/>
				</Tooltip>
			}
			footer={
				onSave && (
					<Group justify="flex-end">
						<Button size="xs" disabled={!dirty} loading={saving} onClick={save}>
							Save rule
						</Button>
					</Group>
				)
			}
		>
			<Stack gap="lg">
				<TextInput
					label="Name"
					value={value.name}
					onChange={(event) => onChange({ ...value, name: event.currentTarget.value })}
					maw={420}
				/>
				<AutomationRuleEditorStep label="When">
					<Select
						aria-label="Trigger"
						data={triggers}
						value={value.trigger}
						onChange={(trigger) => trigger && onChange({ ...value, trigger })}
						allowDeselect={false}
						maw={320}
					/>
				</AutomationRuleEditorStep>
				<AutomationRuleEditorStep label="If">
					<AdvancedFilterBuilder
						fields={fields}
						value={value.conditions}
						onChange={(conditions) => onChange({ ...value, conditions })}
					/>
				</AutomationRuleEditorStep>
				<AutomationRuleEditorStep label="Then">
					<Stack gap="xs">
						{value.actions.map((action, index) => {
							const type = typeOf(action.type);
							return (
								<Group key={action.id} gap="xs" wrap="wrap" align="center">
									<ThemeIcon size={22} radius="xl" variant="light" color="gray" fz="xs" fw={600}>
										{index + 1}
									</ThemeIcon>
									<Select
										size="xs"
										aria-label={`Action ${index + 1}`}
										data={actionTypes.map(({ value: optionValue, label }) => ({ value: optionValue, label }))}
										value={action.type}
										onChange={(next) => {
											const nextType = next ? typeOf(next) : undefined;
											if (!nextType) return;
											setActions(
												value.actions.map((entry) =>
													entry.id === action.id
														? { ...entry, type: nextType.value, config: { ...nextType.defaultConfig } }
														: entry,
												),
											);
										}}
										allowDeselect={false}
										w={190}
									/>
									{type?.renderConfig(action.config, (config) =>
										setActions(value.actions.map((entry) => (entry.id === action.id ? { ...entry, config } : entry))),
									)}
									<ActionIcon
										variant="subtle"
										color="gray"
										aria-label={`Remove action ${index + 1}`}
										onClick={() => setActions(value.actions.filter((entry) => entry.id !== action.id))}
									>
										<TbTrash />
									</ActionIcon>
								</Group>
							);
						})}
						<Box>
							<Button variant="subtle" size="xs" leftSection={<TbPlus />} onClick={addAction}>
								Add action
							</Button>
						</Box>
					</Stack>
				</AutomationRuleEditorStep>
				<Paper withBorder p="md" bg="var(--mantine-color-default-hover)">
					<Stack gap="sm">
						<Group justify="space-between" wrap="wrap" gap="sm">
							<Text size="sm" c="dimmed">
								A dry run shows what the rule would do right now. Nothing is changed.
							</Text>
							<Button variant="default" size="xs" leftSection={<TbFlask />} loading={dryRunLoading} onClick={onDryRun}>
								Run a dry run
							</Button>
						</Group>
						{dryRun && (
							<Stack gap={6}>
								<Text size="sm" fw={500}>
									{dryRun.total === 0
										? `No ${noun.other} match right now.`
										: `${formatCount(dryRun.total, noun)} ${dryRun.total === 1 ? "matches" : "match"} right now.`}
								</Text>
								{dryRun.matches.map((match) => (
									<Group key={match.id} gap="xs" wrap="nowrap" align="flex-start">
										<Box miw={0} style={{ flex: 1 }}>
											<Text size="sm">{match.label}</Text>
											<Text size="xs" c="dimmed">
												{match.changes.join(" · ")}
											</Text>
										</Box>
									</Group>
								))}
								{dryRun.total > dryRun.matches.length && (
									<Text size="xs" c="dimmed">
										And {formatCount(dryRun.total - dryRun.matches.length, { one: "more", other: "more" })}.
									</Text>
								)}
							</Stack>
						)}
					</Stack>
				</Paper>
			</Stack>
		</Panel>
	);
}

interface AutomationRuleEditorInvoice {
	id: string;
	customer: string;
	amount: number;
	daysOverdue: number;
	plan: string;
	paymentPlan: boolean;
}

const automationRuleEditorInvoices: AutomationRuleEditorInvoice[] = [
	{
		id: "INV-0441",
		customer: "Acme Logistics",
		amount: 1248000,
		daysOverdue: 9,
		plan: "enterprise",
		paymentPlan: false,
	},
	{
		id: "INV-0438",
		customer: "Cobalt & Partners",
		amount: 312050,
		daysOverdue: 21,
		plan: "business",
		paymentPlan: false,
	},
	{
		id: "INV-0436",
		customer: "Evergreen Foods",
		amount: 4500210,
		daysOverdue: 3,
		plan: "enterprise",
		paymentPlan: true,
	},
	{ id: "INV-0431", customer: "Dune Studio", amount: 98000, daysOverdue: 16, plan: "starter", paymentPlan: false },
	{ id: "INV-0429", customer: "Nova SAS", amount: 860000, daysOverdue: 34, plan: "business", paymentPlan: false },
	{
		id: "INV-0425",
		customer: "Brightline Health",
		amount: 1520000,
		daysOverdue: 12,
		plan: "business",
		paymentPlan: false,
	},
];

const automationRuleEditorFields: FilterField[] = [
	{ key: "amount", label: "Amount", type: "money", currency: "EUR" },
	{ key: "daysOverdue", label: "Days overdue", type: "number" },
	{
		key: "plan",
		label: "Customer plan",
		type: "enum",
		options: [
			{ value: "starter", label: "Starter" },
			{ value: "business", label: "Business" },
			{ value: "enterprise", label: "Enterprise" },
		],
	},
	{ key: "paymentPlan", label: "Payment plan", type: "boolean" },
];

const automationRuleEditorActionTypes: AutomationActionType[] = [
	{
		value: "assign",
		label: "Assign to",
		defaultConfig: { assignee: "Finance team" },
		renderConfig: (config, onConfigChange) => (
			<Select
				size="xs"
				aria-label="Assignee"
				data={["Finance team", users.anna.name, users.lea.name, users.jean.name]}
				value={String(config.assignee ?? "")}
				onChange={(assignee) => onConfigChange({ ...config, assignee })}
				allowDeselect={false}
				w={160}
			/>
		),
	},
	{
		value: "email",
		label: "Email the customer",
		defaultConfig: { template: "Payment reminder" },
		renderConfig: (config, onConfigChange) => (
			<Select
				size="xs"
				aria-label="Email template"
				data={["Payment reminder", "Final notice"]}
				value={String(config.template ?? "")}
				onChange={(template) => onConfigChange({ ...config, template })}
				allowDeselect={false}
				w={170}
			/>
		),
	},
	{
		value: "notify",
		label: "Post in Slack",
		defaultConfig: { channel: "#finance" },
		renderConfig: (config, onConfigChange) => (
			<TextInput
				size="xs"
				aria-label="Slack channel"
				value={String(config.channel ?? "")}
				onChange={(event) => onConfigChange({ ...config, channel: event.currentTarget.value })}
				w={130}
			/>
		),
	},
];

function automationRuleEditorEvaluate(node: FilterNode, record: AutomationRuleEditorInvoice): boolean {
	if (isFilterGroup(node)) {
		const children = filterGroupChildren(node);
		return "and" in node
			? children.every((child) => automationRuleEditorEvaluate(child, record))
			: children.some((child) => automationRuleEditorEvaluate(child, record));
	}
	const value = record[node.field as keyof AutomationRuleEditorInvoice];
	switch (node.operator) {
		case "is":
			return String(value) === String(node.value);
		case "isNot":
			return String(value) !== String(node.value);
		case "isAnyOf":
			return Array.isArray(node.value) && node.value.includes(String(value));
		case "contains":
			return String(value)
				.toLowerCase()
				.includes(String(node.value ?? "").toLowerCase());
		case "greaterThan":
			return typeof value === "number" && typeof node.value === "number" && value > node.value;
		case "lessThan":
			return typeof value === "number" && typeof node.value === "number" && value < node.value;
		case "isTrue":
			return value === true;
		case "isFalse":
			return value === false;
		default:
			return true;
	}
}

function automationRuleEditorDescribe(action: AutomationRuleAction) {
	if (action.type === "assign") return `Assign to ${action.config.assignee}`;
	if (action.type === "email") return `Email “${action.config.template}”`;
	if (action.type === "notify") return `Post in ${action.config.channel}`;
	return action.type;
}

const automationRuleEditorInitial: AutomationRule = {
	name: "Escalate large unpaid invoices",
	enabled: false,
	trigger: "invoice.overdue",
	conditions: {
		and: [
			{ field: "amount", operator: "greaterThan", value: 500000 },
			{ field: "paymentPlan", operator: "isFalse" },
		],
	},
	actions: [
		{ id: "action-assign", type: "assign", config: { assignee: "Finance team" } },
		{ id: "action-email", type: "email", config: { template: "Final notice" } },
	],
};

function AutomationRuleEditorExample() {
	const [rule, setRule] = useState(automationRuleEditorInitial);
	const [saved, setSaved] = useState(automationRuleEditorInitial);
	const [dryRun, setDryRun] = useState<AutomationDryRun | null>(null);
	const [dryRunLoading, setDryRunLoading] = useState(false);

	const runDry = () => {
		setDryRunLoading(true);
		setTimeout(() => {
			const matching = automationRuleEditorInvoices.filter((invoice) =>
				automationRuleEditorEvaluate(rule.conditions, invoice),
			);
			setDryRun({
				total: matching.length,
				matches: matching.slice(0, 3).map((invoice) => ({
					id: invoice.id,
					label: `${invoice.id} · ${invoice.customer} · ${formatMoney(invoice.amount, "EUR")}`,
					changes: rule.actions.map(automationRuleEditorDescribe),
				})),
			});
			setDryRunLoading(false);
		}, 500);
	};

	return (
		<AutomationRuleEditor
			value={rule}
			onChange={(next) => {
				setRule(next);
				setDryRun(null);
			}}
			triggers={[
				{ value: "invoice.overdue", label: "An invoice becomes overdue" },
				{ value: "invoice.created", label: "An invoice is created" },
				{ value: "customer.created", label: "A customer is created" },
			]}
			fields={automationRuleEditorFields}
			actionTypes={automationRuleEditorActionTypes}
			noun={{ one: "invoice", other: "invoices" }}
			dryRun={dryRun}
			dryRunLoading={dryRunLoading}
			onDryRun={runDry}
			dirty={JSON.stringify(rule) !== JSON.stringify(saved)}
			onSave={() => setSaved(rule)}
		/>
	);
}

export type ScheduledJobRunStatus = "running" | "succeeded" | "failed";

export const scheduledJobRunStatus = defineStatusMap<ScheduledJobRunStatus>({
	running: ["Running", "info"],
	succeeded: ["Succeeded", "success"],
	failed: ["Failed", "danger"],
});

export interface ScheduledJob {
	id: string;
	name: string;
	description?: string;
	schedule: ScheduleValue;
	paused: boolean;
	lastRun?: { at: DateLike; status: ScheduledJobRunStatus };
}

function scheduledJobOrdinal(day: number, locale?: string) {
	const suffixes: Record<string, string> = { one: "st", two: "nd", few: "rd", other: "th" };
	return `${day}${suffixes[new Intl.PluralRules(locale ?? "en", { type: "ordinal" }).select(day)] ?? "th"}`;
}

export function describeSchedule(value: ScheduleValue, locale?: string) {
	const city = value.timeZone.split("/").at(-1)?.replaceAll("_", " ") ?? value.timeZone;
	const when =
		value.frequency === "daily"
			? "Every day"
			: value.frequency === "weekdays"
				? "Weekdays"
				: value.frequency === "weekly"
					? `Every ${new Intl.ListFormat(locale, { type: "conjunction" }).format(
							[...value.weekdays]
								.sort((first, second) => ((first + 6) % 7) - ((second + 6) % 7))
								.map((day) => formatWeekday(day, { locale })),
						)}`
					: `Monthly on the ${scheduledJobOrdinal(value.monthDay, locale)}`;
	return `${when} at ${value.time} (${city})`;
}

interface ScheduledJobsTableProps {
	jobs: ScheduledJob[];
	onPausedChange: (id: string, paused: boolean) => void;
	onRunNow: (id: string) => void;
	onOpenRuns?: (id: string) => void;
	loading?: boolean;
	error?: { title?: string; message: string; requestId?: string } | null;
	onRetry?: () => void;
	locale?: string;
}

export function ScheduledJobsTable({
	jobs,
	onPausedChange,
	onRunNow,
	onOpenRuns,
	loading,
	error,
	onRetry,
	locale,
}: ScheduledJobsTableProps) {
	const [state, setState] = useState<DataTableState>({ page: 1, pageSize: 10, selection: [] });
	const column = createColumnHelpers<ScheduledJob>();
	const rowActions = [
		{ label: "Run now", icon: <TbPlayerPlay />, onClick: (job: ScheduledJob) => onRunNow(job.id) },
		...(onOpenRuns
			? [{ label: "View runs", icon: <TbHistory />, onClick: (job: ScheduledJob) => onOpenRuns(job.id) }]
			: []),
	];

	return (
		<DataTable<ScheduledJob>
			rows={jobs.slice((state.page - 1) * state.pageSize, state.page * state.pageSize)}
			total={jobs.length}
			rowId="id"
			rowLabel={(job) => job.name}
			state={state}
			onStateChange={setState}
			loading={loading}
			error={error}
			onRetry={onRetry}
			itemName={{ singular: "job", plural: "jobs" }}
			minWidth={860}
			columns={[
				{
					key: "name",
					header: "Job",
					render: (job) => (
						<Box miw={0}>
							<Text size="sm" ff="monospace" fw={500} truncate>
								{job.name}
							</Text>
							{job.description && (
								<Text size="xs" c="dimmed" truncate>
									{job.description}
								</Text>
							)}
						</Box>
					),
				},
				{ key: "schedule", header: "Schedule", render: (job) => describeSchedule(job.schedule, locale) },
				{
					key: "lastRun",
					header: "Last run",
					render: (job) =>
						job.lastRun ? (
							<Group gap="xs" wrap="nowrap">
								<StatusBadge value={job.lastRun.status} tones={scheduledJobRunStatus} />
								<Text size="xs" c="dimmed">
									<RelativeTime value={job.lastRun.at} />
								</Text>
							</Group>
						) : (
							emptyValue
						),
				},
				{
					key: "nextRun",
					header: "Next run",
					render: (job) => {
						if (job.paused) {
							return (
								<Text size="sm" c="dimmed">
									Paused
								</Text>
							);
						}
						const next = scheduleNextRuns(job.schedule, 1)[0];
						return next ? <RelativeTime value={next} capitalize /> : emptyValue;
					},
				},
				{
					key: "active",
					header: "On schedule",
					render: (job) => (
						<Switch
							aria-label={job.paused ? `Resume ${job.name}` : `Pause ${job.name}`}
							checked={!job.paused}
							onChange={(event) => onPausedChange(job.id, !event.currentTarget.checked)}
						/>
					),
				},
				column.actions(rowActions, { label: (job) => job.name }),
			]}
		/>
	);
}

const scheduledJobsInitial: ScheduledJob[] = [
	{
		id: "job_reminders",
		name: "send-invoice-reminders",
		description: "Emails customers about overdue invoices",
		schedule: { frequency: "weekdays", weekdays: [], monthDay: 1, time: "09:00", timeZone: "Europe/Paris" },
		paused: false,
		lastRun: { at: ago({ minutes: 42 }), status: "failed" },
	},
	{
		id: "job_sync",
		name: "nightly-sync",
		description: "Pulls payments from Stripe",
		schedule: { frequency: "daily", weekdays: [], monthDay: 1, time: "02:00", timeZone: "UTC" },
		paused: false,
		lastRun: { at: ago({ hours: 8 }), status: "succeeded" },
	},
	{
		id: "job_health",
		name: "recalculate-health-scores",
		schedule: { frequency: "weekly", weekdays: [1, 4], monthDay: 1, time: "07:30", timeZone: "Europe/Paris" },
		paused: false,
		lastRun: { at: ago({ days: 2 }), status: "succeeded" },
	},
	{
		id: "job_close",
		name: "close-accounting-month",
		description: "Locks last month's invoices and exports the ledger",
		schedule: { frequency: "monthly", weekdays: [], monthDay: 1, time: "05:00", timeZone: "Europe/Paris" },
		paused: false,
		lastRun: { at: ago({ days: 25 }), status: "succeeded" },
	},
	{
		id: "job_quotes",
		name: "archive-old-quotes",
		schedule: { frequency: "weekly", weekdays: [0], monthDay: 1, time: "03:00", timeZone: "Europe/Paris" },
		paused: true,
		lastRun: { at: ago({ days: 12 }), status: "succeeded" },
	},
];

function ScheduledJobsTableExample() {
	const [jobs, setJobs] = useState(scheduledJobsInitial);
	const update = (id: string, change: Partial<ScheduledJob>) =>
		setJobs((current) => current.map((job) => (job.id === id ? { ...job, ...change } : job)));

	return (
		<ScheduledJobsTable
			jobs={jobs}
			onPausedChange={(id, paused) => update(id, { paused })}
			onRunNow={(id) => {
				update(id, { lastRun: { at: new Date(), status: "running" } });
				setTimeout(() => update(id, { lastRun: { at: new Date(), status: "succeeded" } }), 1500);
			}}
			onOpenRuns={() => {}}
		/>
	);
}

export function OperationsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<StatCardExamples />
			</PreviewItem>
			<PreviewItem span="half">
				<ChartCardExample />
			</PreviewItem>
			<PreviewItem span="half">
				<ChartCardErrorExample />
			</PreviewItem>
			<PreviewItem>
				<Panel title="Usage this month">
					<Stack gap="md">
						<UsageMeter
							label="API calls"
							used={842_000}
							limit={1_000_000}
							format="compact"
							resetsAt="2026-12-01T00:00:00Z"
							overage="Overage billed at €0.40 per 1,000 calls"
						/>
						<UsageMeter label="Seats" used={45} limit={50} />
						<UsageMeter label="Storage" used={120} limit={500} unit="GB" />
						<UsageMeter label="Webhooks" used={1_204_330} limit={null} format="compact" />
					</Stack>
				</Panel>
			</PreviewItem>
			<PreviewItem>
				<Panel title="Account health">
					<Stack gap="md">
						<Group justify="space-between" wrap="nowrap">
							<Text size="sm">Acme Logistics</Text>
							<HealthScore value={86} trend={4} factors={primitivesAreaHealthFactors(92, 88, 74)} />
						</Group>
						<Group justify="space-between" wrap="nowrap">
							<Text size="sm">Cobalt & Partners</Text>
							<HealthScore value={58} trend={-12} factors={primitivesAreaHealthFactors(71, 32, 66)} />
						</Group>
						<Group justify="space-between" wrap="nowrap">
							<Text size="sm">Dune Studio</Text>
							<HealthScore value={24} trend={-20} factors={primitivesAreaHealthFactors(12, 40, 25)} />
						</Group>
					</Stack>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<TablesStatusHistoryDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<JobProgressRunningExample />
			</PreviewItem>
			<PreviewItem span="half">
				<JobProgressDoneExample />
			</PreviewItem>
			<PreviewItem span="full">
				<RunTimelineExample />
			</PreviewItem>
			<PreviewItem span="full">
				<ScheduledJobsTableExample />
			</PreviewItem>
			<PreviewItem span="full">
				<TablesLogViewerDemo />
			</PreviewItem>
			<PreviewItem span="full">
				<AuditLogExample />
			</PreviewItem>
			<PreviewItem span="full">
				<AutomationRuleEditorExample />
			</PreviewItem>
		</PreviewGrid>
	);
}

export type SystemBannerKind =
	| "impersonation"
	| "paymentFailed"
	| "maintenance"
	| "read-only"
	| "trialEnding"
	| "environment";

const systemBannerLooks: Record<SystemBannerKind, { background: string; color: string; icon: ReactNode }> = {
	impersonation: {
		background: "var(--mantine-color-red-filled)",
		color: "var(--mantine-color-white)",
		icon: <TbUserShield />,
	},
	maintenance: {
		background: "var(--mantine-color-orange-light)",
		color: "var(--mantine-color-orange-light-color)",
		icon: <TbTool />,
	},
	"read-only": {
		background: "var(--mantine-color-gray-light)",
		color: "var(--mantine-color-gray-light-color)",
		icon: <TbLock />,
	},
	environment: {
		background: "var(--mantine-color-blue-light)",
		color: "var(--mantine-color-blue-light-color)",
		icon: <TbFlask />,
	},
	paymentFailed: {
		background: "var(--mantine-color-red-light)",
		color: "var(--mantine-color-red-light-color)",
		icon: <TbCreditCardOff />,
	},
	trialEnding: {
		background: "var(--mantine-color-violet-light)",
		color: "var(--mantine-color-violet-light-color)",
		icon: <TbHourglass />,
	},
};

export const systemBannerPrecedence: SystemBannerKind[] = [
	"impersonation",
	"paymentFailed",
	"maintenance",
	"read-only",
	"trialEnding",
	"environment",
];

export function pickSystemBanner<Banner extends { kind: SystemBannerKind }>(banners: Banner[]) {
	return [...banners].sort(
		(first, second) => systemBannerPrecedence.indexOf(first.kind) - systemBannerPrecedence.indexOf(second.kind),
	)[0];
}

export function SystemBanner({
	kind,
	message,
	action,
}: {
	kind: SystemBannerKind;
	message: ReactNode;
	action?: ReactNode;
}) {
	const look = systemBannerLooks[kind];
	return (
		<Group
			role="status"
			gap="sm"
			wrap="nowrap"
			px="md"
			py="xs"
			style={{ background: look.background, color: look.color }}
		>
			<Box component="span" style={{ display: "flex", flexShrink: 0 }}>
				{look.icon}
			</Box>
			<Text size="sm" c="inherit" style={{ flex: 1 }}>
				{message}
			</Text>
			{action}
		</Group>
	);
}

export interface SidebarNavItem {
	id: string;
	label: string;
	icon?: ReactNode;
	href?: string;
	badge?: number;
	active?: boolean;
	children?: SidebarNavItem[];
}

export interface SidebarNavSection {
	id: string;
	label?: string;
	items: SidebarNavItem[];
}

interface SidebarNavProps {
	sections: SidebarNavSection[];
	collapsed?: boolean;
	onNavigate?: (item: SidebarNavItem, event: MouseEvent<HTMLElement>) => void;
	"aria-label"?: string;
}

function SidebarNavBadge({ count }: { count: number }) {
	return (
		<Badge size="sm" variant="light" color="gray" tt="none" style={{ fontVariantNumeric: "tabular-nums" }}>
			{formatNumber(count, { compact: true })}
		</Badge>
	);
}

function SidebarNavLink({ item, onNavigate }: { item: SidebarNavItem; onNavigate?: SidebarNavProps["onNavigate"] }) {
	const childActive = item.children?.some((child) => child.active) ?? false;

	if (item.children?.length) {
		return (
			<NavLink label={item.label} leftSection={item.icon} defaultOpened={childActive} childrenOffset={28}>
				{item.children.map((child) => (
					<SidebarNavLink key={child.id} item={child} onNavigate={onNavigate} />
				))}
			</NavLink>
		);
	}

	const shared = {
		label: item.label,
		leftSection: item.icon,
		rightSection: item.badge !== undefined ? <SidebarNavBadge count={item.badge} /> : undefined,
		active: item.active,
		"aria-current": item.active ? ("page" as const) : undefined,
		onClick: (event: MouseEvent<HTMLElement>) => onNavigate?.(item, event),
	};

	return item.href ? (
		<NavLink component="a" href={item.href} {...shared} />
	) : (
		<NavLink component="button" type="button" {...shared} />
	);
}

const sidebarNavRailStyles = {
	root: { justifyContent: "center", paddingInline: 0 },
	section: { marginInlineEnd: 0 },
	body: { display: "none" },
};

function SidebarNavRailIcon({ item }: { item: SidebarNavItem }) {
	const waiting = (item.badge ?? 0) > 0 || item.children?.some((child) => (child.badge ?? 0) > 0);
	return (
		<Indicator size={7} offset={2} disabled={!waiting}>
			<Center>{item.icon}</Center>
		</Indicator>
	);
}

function SidebarNavRailItem({
	item,
	onNavigate,
}: {
	item: SidebarNavItem;
	onNavigate?: SidebarNavProps["onNavigate"];
}) {
	const childActive = item.children?.some((child) => child.active) ?? false;
	const label =
		item.badge !== undefined ? `${item.label} (${formatNumber(item.badge, { compact: true })})` : item.label;

	if (item.children?.length) {
		return (
			<Menu position="right-start" offset={8} trigger="click-hover" openDelay={80} closeDelay={150}>
				<Menu.Target>
					<NavLink
						component="button"
						type="button"
						aria-label={item.label}
						leftSection={<SidebarNavRailIcon item={item} />}
						active={childActive}
						styles={sidebarNavRailStyles}
					/>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label>{item.label}</Menu.Label>
					{item.children.map((child) => (
						<Menu.Item
							key={child.id}
							component="a"
							href={child.href}
							aria-current={child.active ? "page" : undefined}
							rightSection={child.active ? <TbCheck aria-hidden /> : undefined}
							onClick={(event: MouseEvent<HTMLElement>) => onNavigate?.(child, event)}
						>
							{child.label}
						</Menu.Item>
					))}
				</Menu.Dropdown>
			</Menu>
		);
	}

	const shared = {
		"aria-label": label,
		leftSection: <SidebarNavRailIcon item={item} />,
		active: item.active,
		"aria-current": item.active ? ("page" as const) : undefined,
		styles: sidebarNavRailStyles,
		onClick: (event: MouseEvent<HTMLElement>) => onNavigate?.(item, event),
	};

	return (
		<Tooltip label={label} position="right" withArrow>
			{item.href ? (
				<NavLink component="a" href={item.href} {...shared} />
			) : (
				<NavLink component="button" type="button" {...shared} />
			)}
		</Tooltip>
	);
}

export function SidebarNav({
	sections,
	collapsed = false,
	onNavigate,
	"aria-label": ariaLabel = "Main",
}: SidebarNavProps) {
	return (
		<Box component="nav" aria-label={ariaLabel}>
			<Stack gap={collapsed ? "xs" : "md"}>
				{sections.map((section, index) => (
					<Box key={section.id}>
						{section.label &&
							(collapsed ? (
								index > 0 && <Divider mx="xs" mb="xs" />
							) : (
								<Text size="xs" c="dimmed" fw={500} px="sm" mb={4}>
									{section.label}
								</Text>
							))}
						<Stack gap={2}>
							{section.items.map((item) =>
								collapsed ? (
									<SidebarNavRailItem key={item.id} item={item} onNavigate={onNavigate} />
								) : (
									<SidebarNavLink key={item.id} item={item} onNavigate={onNavigate} />
								),
							)}
						</Stack>
					</Box>
				))}
			</Stack>
		</Box>
	);
}

export type UserMenuColorScheme = "light" | "dark" | "auto";

export interface UserMenuItem {
	label: string;
	icon?: ReactNode;
	href?: string;
	onClick?: () => void;
}

interface UserMenuProps {
	user: UserChipUser & { email: string };
	colorScheme: UserMenuColorScheme;
	onColorSchemeChange: (colorScheme: UserMenuColorScheme) => void;
	items?: UserMenuItem[];
	onOpenShortcuts?: () => void;
	shortcutKeys?: string;
	onSignOut: () => void;
	menuProps?: Omit<MenuProps, "children">;
}

const userMenuSchemes = [
	{ value: "light", label: "Light", icon: <TbSun aria-hidden /> },
	{ value: "dark", label: "Dark", icon: <TbMoon aria-hidden /> },
	{ value: "auto", label: "System", icon: <TbDeviceDesktop aria-hidden /> },
] as const;

export function UserMenu({
	user,
	colorScheme,
	onColorSchemeChange,
	items = [],
	onOpenShortcuts,
	shortcutKeys = "shift+?",
	onSignOut,
	menuProps,
}: UserMenuProps) {
	return (
		<Menu position="bottom-end" width={240} {...menuProps}>
			<Menu.Target>
				<UnstyledButton aria-label={`Account menu for ${user.name}`} style={{ borderRadius: "50%" }}>
					<Avatar src={user.avatarUrl} name={user.name} color={user.color ?? "initials"} size={32} />
				</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown>
				<Box px="sm" py={6}>
					<Text size="sm" fw={500} truncate>
						{user.name}
					</Text>
					<Text size="xs" c="dimmed" truncate>
						{user.email}
					</Text>
				</Box>
				{items.length > 0 && <Menu.Divider />}
				{items.map((item) =>
					item.href ? (
						<Menu.Item key={item.label} component="a" href={item.href} leftSection={item.icon} onClick={item.onClick}>
							{item.label}
						</Menu.Item>
					) : (
						<Menu.Item key={item.label} leftSection={item.icon} onClick={item.onClick}>
							{item.label}
						</Menu.Item>
					),
				)}
				{onOpenShortcuts && (
					<Menu.Item
						leftSection={<TbKeyboard aria-hidden />}
						rightSection={<ShortcutHint keys={shortcutKeys} />}
						onClick={onOpenShortcuts}
					>
						Keyboard shortcuts
					</Menu.Item>
				)}
				<Menu.Divider />
				<Group justify="space-between" wrap="nowrap" px="sm" py={4}>
					<Text size="sm" id="user-menu-theme-label">
						Theme
					</Text>
					<SegmentedControl
						size="xs"
						aria-labelledby="user-menu-theme-label"
						value={colorScheme}
						onChange={(value) => onColorSchemeChange(value as UserMenuColorScheme)}
						data={userMenuSchemes.map((scheme) => ({
							value: scheme.value,
							label: (
								<Center>
									{scheme.icon}
									<VisuallyHidden>{scheme.label}</VisuallyHidden>
								</Center>
							),
						}))}
					/>
				</Group>
				<Menu.Divider />
				<Menu.Item leftSection={<TbLogout aria-hidden />} onClick={onSignOut}>
					Sign out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}

export interface Workspace {
	id: string;
	name: string;
	plan?: string;
	role: string;
	color?: MantineColor;
}

interface WorkspaceSwitcherProps {
	workspaces: Workspace[];
	currentId: string;
	onSelect: (workspaceId: string) => void;
	onCreate?: () => void;
	collapsed?: boolean;
	defaultOpened?: boolean;
	comboboxProps?: Omit<ComboboxProps, "store" | "children" | "onOptionSubmit">;
}

function WorkspaceSwitcherLogo({ workspace, size = 28 }: { workspace: Workspace; size?: number }) {
	return <Avatar name={workspace.name} color={workspace.color ?? "initials"} radius="sm" size={size} />;
}

export function WorkspaceSwitcher({
	workspaces,
	currentId,
	onSelect,
	onCreate,
	collapsed = false,
	defaultOpened = false,
	comboboxProps,
}: WorkspaceSwitcherProps) {
	const [search, setSearch] = useState("");
	const combobox = useCombobox({
		defaultOpened,
		onDropdownOpen: () => combobox.focusSearchInput(),
		onDropdownClose: () => {
			combobox.resetSelectedOption();
			setSearch("");
		},
	});
	const current = workspaces.find((workspace) => workspace.id === currentId) ?? workspaces[0];
	const query = search.trim().toLocaleLowerCase();
	const matches = workspaces.filter((workspace) => workspace.name.toLocaleLowerCase().includes(query));

	return (
		<Combobox
			store={combobox}
			position={collapsed ? "right-start" : "bottom-start"}
			width={260}
			{...comboboxProps}
			onOptionSubmit={(workspaceId) => {
				onSelect(workspaceId);
				combobox.closeDropdown();
			}}
		>
			<Combobox.Target targetType="button">
				<UnstyledButton
					onClick={() => combobox.toggleDropdown()}
					aria-label={collapsed ? `Switch workspace, current: ${current.name}` : undefined}
					w={collapsed ? undefined : "100%"}
					p={6}
					style={{ borderRadius: "var(--mantine-radius-default)" }}
				>
					<Group gap="sm" wrap="nowrap" justify={collapsed ? "center" : undefined}>
						<WorkspaceSwitcherLogo workspace={current} />
						{!collapsed && (
							<>
								<Box miw={0} style={{ flex: 1 }}>
									<Text size="sm" fw={600} truncate>
										{current.name}
									</Text>
									{current.plan && (
										<Text size="xs" c="dimmed" truncate>
											{current.plan}
										</Text>
									)}
								</Box>
								<TbSelector aria-hidden style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }} />
							</>
						)}
					</Group>
				</UnstyledButton>
			</Combobox.Target>
			<Combobox.Dropdown>
				<Combobox.Search
					value={search}
					onChange={(event) => setSearch(event.currentTarget.value)}
					placeholder="Search workspaces"
					aria-label="Search workspaces"
				/>
				<Combobox.Options>
					{matches.length > 0 ? (
						matches.map((workspace) => (
							<Combobox.Option key={workspace.id} value={workspace.id} active={workspace.id === current.id}>
								<Group gap="sm" wrap="nowrap">
									<WorkspaceSwitcherLogo workspace={workspace} size={24} />
									<Box miw={0} style={{ flex: 1 }}>
										<Text size="sm" truncate>
											{workspace.name}
										</Text>
										<Text size="xs" c="dimmed">
											{workspace.role}
										</Text>
									</Box>
									{workspace.id === current.id && <TbCheck aria-label="Current workspace" style={{ flexShrink: 0 }} />}
								</Group>
							</Combobox.Option>
						))
					) : (
						<Combobox.Empty>No workspace matches “{search.trim()}”</Combobox.Empty>
					)}
				</Combobox.Options>
				{onCreate && (
					<Combobox.Footer>
						<UnstyledButton
							w="100%"
							onClick={() => {
								combobox.closeDropdown();
								onCreate();
							}}
						>
							<Group gap="xs" wrap="nowrap">
								<TbPlus aria-hidden />
								<Text size="sm">Create workspace</Text>
							</Group>
						</UnstyledButton>
					</Combobox.Footer>
				)}
			</Combobox.Dropdown>
		</Combobox>
	);
}

interface UseAppFrameOptions {
	navbarWidth?: number;
	railWidth?: number;
	breakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
	storageKey?: string;
}

export function useAppFrame({
	navbarWidth = 240,
	railWidth = 64,
	breakpoint = "sm",
	storageKey = "groundwork-sidebar-collapsed",
}: UseAppFrameOptions = {}) {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: calc(${theme.breakpoints[breakpoint]} - 0.0625rem))`) ?? false;
	const [mobileOpened, mobileHandlers] = useDisclosure(false);
	const [collapsed, setCollapsed] = useLocalStorage<boolean>({ key: storageKey, defaultValue: false });
	const toggleCollapsed = useCallback(() => setCollapsed((current) => !current), [setCollapsed]);

	useShortcut("mod+B", toggleCollapsed, { description: "Collapse or expand the sidebar", group: "Navigation" });

	const railed = collapsed && !mobile;

	return {
		navbar: {
			width: railed ? railWidth : navbarWidth,
			breakpoint,
			collapsed: { mobile: !mobileOpened },
		},
		burgerProps: {
			opened: mobileOpened,
			onClick: mobileHandlers.toggle,
			hiddenFrom: breakpoint,
			size: "sm",
			"aria-label": mobileOpened ? "Close navigation" : "Open navigation",
		} satisfies BurgerProps & { "aria-label": string },
		railed,
		collapsed,
		toggleCollapsed,
		mobile,
		onNavigate: mobileHandlers.close,
	};
}

type CommandPaletteProps = Omit<SpotlightRootProps, "store" | "query" | "onQueryChange" | "children" | "shortcut"> & {
	search?: (query: string) => Promise<EntityOption[]>;
	recent?: EntityOption[];
	onSelectRecord?: (record: EntityOption) => void;
	recordsLabel?: string;
	shortcut?: string | null;
	trigger?: (open: () => void) => ReactNode;
	placeholder?: string;
	defaultQuery?: string;
	listHeight?: number;
};

function commandPaletteMatches(action: ActionDefinition, query: string) {
	if (query === "") return true;
	const haystack = [action.label, action.description ?? "", action.group, ...(action.keywords ?? [])]
		.join(" ")
		.toLowerCase();
	return query
		.toLowerCase()
		.split(/\s+/)
		.every((word) => haystack.includes(word));
}

function CommandPaletteRecord({ record, query }: { record: EntityOption; query: string }) {
	return (
		<Group gap="sm" wrap="nowrap" w="100%">
			<Avatar name={record.name} color={record.color ?? "initials"} size={28} radius="sm">
				{record.icon}
			</Avatar>
			<Box miw={0} style={{ flex: 1 }}>
				<Highlight highlight={query} size="sm" truncate>
					{record.name}
				</Highlight>
				{record.description && (
					<Text size="xs" c="dimmed" truncate>
						{record.description}
					</Text>
				)}
			</Box>
			{record.status}
		</Group>
	);
}

function CommandPaletteGroup({ label, children }: { label: string; children: ReactNode }) {
	return (
		<Box mt="sm" role="group" aria-label={label}>
			<Text size="xs" fw={600} c="dimmed" px="md" pb={4}>
				{label}
			</Text>
			{children}
		</Box>
	);
}

function CommandPaletteUnavailable({ action, reason }: { action: ActionDefinition; reason: string }) {
	return (
		<Group gap="sm" wrap="nowrap" px="md" py={8} c="dimmed" aria-disabled>
			<Box component="span" style={{ display: "inline-flex", flexShrink: 0 }}>
				{action.icon}
			</Box>
			<Box miw={0}>
				<Text size="sm">{action.label}</Text>
				<Text size="xs">{reason}</Text>
			</Box>
		</Group>
	);
}

export function CommandPalette({
	search,
	recent = [],
	onSelectRecord,
	recordsLabel = "Records",
	shortcut = "mod+K",
	trigger,
	placeholder = "Search or run a command",
	defaultQuery = "",
	listHeight = 400,
	...rootProps
}: CommandPaletteProps) {
	const [[store, controls]] = useState(() => createSpotlight());
	const [query, setQuery] = useState(defaultQuery);
	const [records, setRecords] = useState<EntityOption[]>([]);
	const [searching, setSearching] = useState(false);
	const actions = useRegisteredActions();
	const searchRef = useRef(search);
	useEffect(() => {
		searchRef.current = search;
	});

	useShortcut(shortcut, controls.open, { description: "Open the command palette", group: "General" });

	const trimmed = query.trim();
	const canSearch = search !== undefined;

	useEffect(() => {
		const run = searchRef.current;
		if (!canSearch || !run || trimmed === "") {
			setRecords((current) => (current.length === 0 ? current : []));
			setSearching(false);
			return;
		}
		let cancelled = false;
		setSearching(true);
		const timer = setTimeout(() => {
			run(trimmed).then(
				(results) => {
					if (cancelled) return;
					setRecords(results);
					setSearching(false);
				},
				() => {
					if (cancelled) return;
					setRecords([]);
					setSearching(false);
				},
			);
		}, 200);
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [canSearch, trimmed]);

	const shownRecords = trimmed === "" ? recent : records;
	const groups = new Map<string, ActionDefinition[]>();
	for (const action of actions.filter((entry) => commandPaletteMatches(entry, trimmed))) {
		groups.set(action.group, [...(groups.get(action.group) ?? []), action]);
	}
	const nothing = shownRecords.length === 0 && groups.size === 0 && !searching;

	return (
		<>
			{trigger?.(controls.open)}
			<Spotlight.Root store={store} query={query} onQueryChange={setQuery} shortcut={null} {...rootProps}>
				<Spotlight.Search placeholder={placeholder} aria-label={placeholder} leftSection={<TbSearch />} />
				<Spotlight.ActionsList mah={listHeight}>
					{shownRecords.length > 0 && (
						<CommandPaletteGroup label={trimmed === "" ? "Recent" : recordsLabel}>
							{shownRecords.map((record) => (
								<Spotlight.Action key={record.id} onClick={() => onSelectRecord?.(record)}>
									<CommandPaletteRecord record={record} query={trimmed} />
								</Spotlight.Action>
							))}
						</CommandPaletteGroup>
					)}
					{searching && shownRecords.length === 0 && (
						<Group gap="xs" px="md" py="sm">
							<Loader size="xs" />
							<Text size="sm" c="dimmed">
								Searching {recordsLabel.toLowerCase()}
							</Text>
						</Group>
					)}
					{[...groups].map(([group, entries]) => (
						<CommandPaletteGroup key={group} label={group}>
							{entries.map((action) => {
								const availability = actionAvailability(action);
								return availability === true ? (
									<Spotlight.Action
										key={action.id}
										label={action.label}
										description={action.description}
										leftSection={action.icon}
										rightSection={action.shortcut ? <ShortcutHint keys={action.shortcut} /> : undefined}
										highlightQuery
										onClick={action.run}
									/>
								) : (
									<CommandPaletteUnavailable key={action.id} action={action} reason={availability.reason} />
								);
							})}
						</CommandPaletteGroup>
					))}
					{nothing && (
						<Text size="sm" c="dimmed" ta="center" py="lg">
							Nothing matches “{trimmed}”
						</Text>
					)}
				</Spotlight.ActionsList>
			</Spotlight.Root>
		</>
	);
}

export interface InboxNotification {
	id: string;
	at: DateLike;
	actor: Actor;
	text: ReactNode;
	detail?: ReactNode;
	read: boolean;
}

interface NotificationInboxProps {
	notifications: InboxNotification[];
	onMarkRead: (id: string) => void;
	onMarkAllRead: () => void;
	onOpenNotification?: (notification: InboxNotification) => void;
	hasMore?: boolean;
	loadingMore?: boolean;
	onLoadMore?: () => void;
	opened?: boolean;
	defaultOpened?: boolean;
	onOpenedChange?: (opened: boolean) => void;
	popoverProps?: Omit<PopoverProps, "opened" | "onChange" | "children">;
}

const notificationInboxBorder = "1px solid var(--mantine-color-default-border)";

function NotificationInboxRow({
	notification,
	onOpen,
	onMarkRead,
}: {
	notification: InboxNotification;
	onOpen: () => void;
	onMarkRead: () => void;
}) {
	return (
		<Group gap="sm" align="flex-start" wrap="nowrap">
			<Box
				mt={10}
				w={8}
				h={8}
				style={{
					flexShrink: 0,
					borderRadius: "50%",
					background: notification.read ? "transparent" : "var(--mantine-primary-color-filled)",
				}}
				aria-hidden
			/>
			<UnstyledButton onClick={onOpen} miw={0} style={{ flex: 1 }}>
				<Group gap={6} wrap="nowrap" align="center">
					<ActorChip actor={notification.actor} />
				</Group>
				<Text size="sm" mt={4} fw={notification.read ? undefined : 500}>
					{notification.text}
				</Text>
				{notification.detail && (
					<Text size="sm" c="dimmed" lineClamp={2}>
						{notification.detail}
					</Text>
				)}
				<Text size="xs" c="dimmed" mt={4}>
					<RelativeTime value={notification.at} capitalize />
				</Text>
			</UnstyledButton>
			{!notification.read && (
				<Tooltip label="Mark as read" withArrow>
					<ActionIcon variant="subtle" color="gray" size="sm" aria-label="Mark as read" onClick={onMarkRead}>
						<TbCheck />
					</ActionIcon>
				</Tooltip>
			)}
		</Group>
	);
}

export function NotificationInbox({
	notifications,
	onMarkRead,
	onMarkAllRead,
	onOpenNotification,
	hasMore = false,
	loadingMore = false,
	onLoadMore,
	opened,
	defaultOpened,
	onOpenedChange,
	popoverProps,
}: NotificationInboxProps) {
	const [isOpened, setOpened] = useUncontrolled({
		value: opened,
		defaultValue: defaultOpened,
		finalValue: false,
		onChange: onOpenedChange,
	});
	const unread = notifications.filter((notification) => !notification.read).length;
	const [tab, setTab] = useState<string | null>(unread > 0 ? "unread" : "all");
	const shown = tab === "unread" ? notifications.filter((notification) => !notification.read) : notifications;

	return (
		<Popover width={380} position="bottom-end" shadow="md" opened={isOpened} onChange={setOpened} {...popoverProps}>
			<Popover.Target>
				<Indicator disabled={unread === 0} label={formatNumber(unread, { compact: true })} size={16} offset={6}>
					<ActionIcon
						variant="subtle"
						color="gray"
						size="lg"
						aria-label={
							unread > 0 ? `Notifications, ${formatCount(unread, { one: "unread", other: "unread" })}` : "Notifications"
						}
						onClick={() => setOpened(!isOpened)}
					>
						<TbBell />
					</ActionIcon>
				</Indicator>
			</Popover.Target>
			<Popover.Dropdown p={0}>
				<Group justify="space-between" px="md" py="sm" style={{ borderBottom: notificationInboxBorder }}>
					<Text fw={600}>Notifications</Text>
					<Button
						variant="subtle"
						size="compact-sm"
						leftSection={<TbChecks />}
						disabled={unread === 0}
						onClick={onMarkAllRead}
					>
						Mark all as read
					</Button>
				</Group>
				<Tabs value={tab} onChange={setTab}>
					<Tabs.List px="md">
						<Tabs.Tab
							value="unread"
							rightSection={
								unread > 0 ? (
									<Badge size="xs" variant="light" circle>
										{unread}
									</Badge>
								) : undefined
							}
						>
							Unread
						</Tabs.Tab>
						<Tabs.Tab value="all">All</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<ScrollArea.Autosize mah={420}>
					{shown.length === 0 ? (
						<Text size="sm" c="dimmed" ta="center" py="xl">
							No unread notifications
						</Text>
					) : (
						<Box px="md" pb="sm">
							<InfiniteFeed
								items={shown}
								itemId="id"
								dayOf={(notification) => notification.at}
								hasMore={hasMore}
								loadingMore={loadingMore}
								onLoadMore={() => onLoadMore?.()}
								endLabel={null}
								renderItem={(notification) => (
									<NotificationInboxRow
										notification={notification}
										onMarkRead={() => onMarkRead(notification.id)}
										onOpen={() => {
											if (!notification.read) onMarkRead(notification.id);
											onOpenNotification?.(notification);
										}}
									/>
								)}
							/>
						</Box>
					)}
				</ScrollArea.Autosize>
			</Popover.Dropdown>
		</Popover>
	);
}

interface SettingsLayoutProps {
	sections: SidebarNavSection[];
	onNavigate: SidebarNavProps["onNavigate"];
	selected: boolean;
	onBack: () => void;
	backLabel?: string;
	breakpoint?: number;
	children: ReactNode;
}

export function SettingsLayout({
	sections,
	onNavigate,
	selected,
	onBack,
	backLabel = "Settings",
	breakpoint = 640,
	children,
}: SettingsLayoutProps) {
	const { ref, width } = useElementSize();
	const narrow = width > 0 && width < breakpoint;
	const navigation = <SidebarNav sections={sections} onNavigate={onNavigate} aria-label={backLabel} />;

	return (
		<Box ref={ref}>
			{narrow ? (
				selected ? (
					<Stack gap="lg">
						<Anchor component="button" type="button" size="sm" onClick={onBack} style={{ alignSelf: "flex-start" }}>
							<Group gap={4} wrap="nowrap">
								<TbArrowLeft aria-hidden />
								{backLabel}
							</Group>
						</Anchor>
						{children}
					</Stack>
				) : (
					navigation
				)
			) : (
				<Group align="flex-start" gap="xl" wrap="nowrap">
					<Box w={220} style={{ flexShrink: 0 }}>
						{navigation}
					</Box>
					<Box miw={0} maw={720} style={{ flex: 1 }}>
						{children}
					</Box>
				</Group>
			)}
		</Box>
	);
}

const navigationWorkspaces: Workspace[] = [
	{ id: "ws_acme", name: "Acme Ops", plan: "Enterprise", role: "Owner" },
	{ id: "ws_acme_staging", name: "Acme Ops staging", plan: "Enterprise", role: "Admin" },
	{ id: "ws_brightline", name: "Brightline pilot", plan: "Trial", role: "Member" },
];

const navigationPageDescriptions: Record<string, string> = {
	overview: "What changed since yesterday.",
	inbox: "Mentions, approvals and finished exports.",
	customers: "Accounts, plans and billing contacts.",
	orders: "Orders and their delivery status.",
	review: "Requests waiting for a decision.",
	revenue: "MRR, expansion and contraction by month.",
	churn: "Cancelled and paused accounts.",
	usage: "API calls and seats against each plan.",
	roles: "Who can see and change what.",
	audit: "Every sensitive action, newest first.",
	settings: "Workspace name, timezone and sign-in.",
};

function navigationSections(activeId: string): SidebarNavSection[] {
	const item = (id: string, label: string, icon: ReactNode, badge?: number): SidebarNavItem => ({
		id,
		label,
		icon,
		badge,
		href: `#${id}`,
		active: id === activeId,
	});

	return [
		{
			id: "main",
			items: [item("overview", "Overview", <TbLayoutDashboard />), item("inbox", "Inbox", <TbInbox />, 12)],
		},
		{
			id: "customers",
			label: "Customers",
			items: [
				item("customers", "Customers", <TbUsers />),
				item("orders", "Orders", <TbPackage />),
				item("review", "Review queue", <TbChecklist />, 4),
			],
		},
		{
			id: "insights",
			label: "Insights",
			items: [
				{
					id: "reports",
					label: "Reports",
					icon: <TbChartBar />,
					children: [item("revenue", "Revenue", null), item("churn", "Churn", null), item("usage", "Usage", null)],
				},
			],
		},
		{
			id: "admin",
			label: "Admin",
			items: [
				item("roles", "Roles & access", <TbShieldLock />),
				item("audit", "Audit log", <TbHistory />),
				item("settings", "Settings", <TbSettings />),
			],
		},
	];
}

function navigationPageLabel(sections: SidebarNavSection[], activeId: string) {
	const items = sections.flatMap((section) => section.items.flatMap((entry) => [entry, ...(entry.children ?? [])]));
	return items.find((entry) => entry.id === activeId)?.label ?? "";
}

const navigationUserMenuItems: UserMenuItem[] = [
	{ label: "Profile", icon: <TbUser aria-hidden /> },
	{ label: "Account settings", icon: <TbSettings aria-hidden /> },
];

function navigationCustomerOption(customer: Customer): EntityOption {
	return {
		id: customer.id,
		name: customer.name,
		description: `${customer.id} · ${customer.email}`,
		status: <StatusBadge value={customer.status} tones={customerStatus} size="sm" />,
	};
}

const navigationRecentCustomers = [customers[0], customers[2]].map(navigationCustomerOption);

function navigationSearchCustomers(query: string) {
	const words = query.toLowerCase().split(/\s+/);
	const matches = customers.filter((customer) =>
		words.every((word) => `${customer.name} ${customer.id} ${customer.email}`.toLowerCase().includes(word)),
	);
	return new Promise<EntityOption[]>((resolve) => {
		setTimeout(() => resolve(matches.map(navigationCustomerOption)), 150);
	});
}

const navigationInitialNotifications: InboxNotification[] = [
	{
		id: "ntf_1",
		at: ago({ minutes: 12 }),
		actor: { type: "user", name: users.lea.name, color: users.lea.color },
		text: "mentioned you on Acme Logistics",
		detail: "“Can you retry INV-0441 tonight?”",
		read: false,
	},
	{
		id: "ntf_2",
		at: ago({ hours: 2 }),
		actor: { type: "user", name: users.jean.name, color: users.jean.color },
		text: "asked you to approve a refund",
		detail: "€1,240.00 to Cobalt & Partners",
		read: false,
	},
	{
		id: "ntf_3",
		at: ago({ hours: 5 }),
		actor: { type: "system", name: "customers-export" },
		text: "finished your export",
		detail: "1,248 customers · customers.csv",
		read: false,
	},
	{
		id: "ntf_4",
		at: ago({ days: 1, hours: 3 }),
		actor: { type: "user", name: users.lea.name, color: users.lea.color },
		text: "approved your access request",
		detail: "Billing admin until Friday",
		read: true,
	},
	{
		id: "ntf_5",
		at: ago({ days: 3 }),
		actor: { type: "user", name: users.jean.name, color: users.jean.color },
		text: "mentioned you on Nova SAS",
		detail: "“The Kbis is attached now.”",
		read: true,
	},
];

function useNavigationInbox() {
	const [notifications, setNotifications] = useState(navigationInitialNotifications);
	return {
		notifications,
		onMarkRead: (id: string) =>
			setNotifications((current) =>
				current.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
			),
		onMarkAllRead: () =>
			setNotifications((current) => current.map((notification) => ({ ...notification, read: true }))),
	};
}

function NavigationPaletteTrigger({ onOpen }: { onOpen: () => void }) {
	return (
		<Input
			component="button"
			type="button"
			pointer
			w={280}
			maw="100%"
			leftSection={<TbSearch />}
			rightSection={<ShortcutHint keys="mod+K" />}
			rightSectionWidth={64}
			onClick={onOpen}
			// One line, cut with an ellipsis, when the header leaves less room than the text needs
			styles={{ input: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }}
		>
			<Input.Placeholder>Search or run a command</Input.Placeholder>
		</Input>
	);
}

function NavigationAppFrameDemo() {
	const frame = useAppFrame({ storageKey: "groundwork-preview-sidebar" });
	const [activeId, setActiveId] = useState("customers");
	const [workspaceId, setWorkspaceId] = useState(navigationWorkspaces[0].id);
	const [colorScheme, setColorScheme] = useState<UserMenuColorScheme>("auto");
	const [shortcutsOpened, setShortcutsOpened] = useState(false);
	const inbox = useNavigationInbox();
	const sections = navigationSections(activeId);

	useActions([
		defineAction({
			id: "create-customer",
			label: "Create customer",
			group: "Customers",
			icon: <TbUserPlus />,
			keywords: ["new", "add", "account"],
			run: () => setActiveId("customers"),
		}),
		defineAction({
			id: "import-customers",
			label: "Import customers",
			description: "From a CSV or Excel file",
			group: "Customers",
			icon: <TbUpload />,
			keywords: ["csv", "upload", "xlsx"],
			run: () => setActiveId("customers"),
		}),
		defineAction({
			id: "open-review-queue",
			label: "Open review queue",
			group: "Go to",
			icon: <TbChecklist />,
			run: () => setActiveId("review"),
		}),
		defineAction({
			id: "open-settings",
			label: "Open settings",
			group: "Go to",
			icon: <TbSettings />,
			run: () => setActiveId("settings"),
		}),
		defineAction({
			id: "invite-people",
			label: "Invite people",
			group: "Workspace",
			icon: <TbMail />,
			keywords: ["member", "teammate", "user"],
			run: () => setActiveId("roles"),
		}),
		defineAction({
			id: "export-invoices",
			label: "Export invoices",
			group: "Workspace",
			icon: <TbDownload />,
			run: () => {},
			available: () => ({ reason: "Only admins can export invoices" }),
		}),
		defineAction({
			id: "show-shortcuts",
			label: "Show keyboard shortcuts",
			group: "Help",
			icon: <TbKeyboard />,
			shortcut: "shift+?",
			run: () => setShortcutsOpened(true),
		}),
	]);

	return (
		<Box h={640} style={frameStyle}>
			<AppShell mode="static" layout="alt" header={{ height: 56 }} navbar={frame.navbar} padding="lg">
				<AppShell.Header>
					<Group h="100%" px="md" gap="sm" wrap="nowrap" justify="space-between">
						<Burger {...frame.burgerProps} />
						<CommandPalette
							search={navigationSearchCustomers}
							recent={navigationRecentCustomers}
							recordsLabel="Customers"
							onSelectRecord={() => setActiveId("customers")}
							trigger={(open) => (
								<Box visibleFrom="xs">
									<NavigationPaletteTrigger onOpen={open} />
								</Box>
							)}
						/>
						<Box style={{ flex: 1 }} />
						<NotificationInbox {...inbox} />
						<UserMenu
							user={users.anna}
							colorScheme={colorScheme}
							onColorSchemeChange={setColorScheme}
							items={navigationUserMenuItems}
							onOpenShortcuts={() => setShortcutsOpened(true)}
							onSignOut={() => {}}
						/>
						<ShortcutsDialog opened={shortcutsOpened} onClose={() => setShortcutsOpened(false)} />
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="sm">
					<AppShell.Section>
						<WorkspaceSwitcher
							workspaces={navigationWorkspaces}
							currentId={workspaceId}
							onSelect={setWorkspaceId}
							onCreate={() => {}}
							collapsed={frame.railed}
						/>
					</AppShell.Section>
					<AppShell.Section grow component={ScrollArea} mt="md" mx="-sm" px="sm">
						<SidebarNav
							sections={sections}
							collapsed={frame.railed}
							onNavigate={(item, event) => {
								event.preventDefault();
								setActiveId(item.id);
								frame.onNavigate();
							}}
						/>
					</AppShell.Section>
					<AppShell.Section visibleFrom="sm" pt="xs">
						<Tooltip label="Expand sidebar" position="right" withArrow disabled={!frame.railed}>
							<NavLink
								component="button"
								type="button"
								label={frame.railed ? undefined : "Collapse sidebar"}
								aria-label={frame.railed ? "Expand sidebar" : undefined}
								leftSection={frame.railed ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
								rightSection={frame.railed ? undefined : <ShortcutHint keys="mod+B" />}
								onClick={frame.toggleCollapsed}
								styles={frame.railed ? sidebarNavRailStyles : undefined}
							/>
						</Tooltip>
					</AppShell.Section>
				</AppShell.Navbar>
				<AppShell.Main>
					<Title order={3}>{navigationPageLabel(sections, activeId)}</Title>
					<Text size="sm" c="dimmed" mt={4}>
						{navigationPageDescriptions[activeId]}
					</Text>
				</AppShell.Main>
			</AppShell>
		</Box>
	);
}

function NavigationRailDemo() {
	const [activeId, setActiveId] = useState("review");

	return (
		<Paper withBorder p="xs" w={64}>
			<SidebarNav
				sections={navigationSections(activeId)}
				collapsed
				onNavigate={(item, event) => {
					event.preventDefault();
					setActiveId(item.id);
				}}
			/>
		</Paper>
	);
}

function NavigationExpandedDemo() {
	const [activeId, setActiveId] = useState("revenue");

	return (
		<Paper withBorder p="sm" w={260} maw="100%">
			<SidebarNav
				sections={navigationSections(activeId)}
				onNavigate={(item, event) => {
					event.preventDefault();
					setActiveId(item.id);
				}}
			/>
		</Paper>
	);
}

function NavigationUserMenuDemo() {
	const [colorScheme, setColorScheme] = useState<UserMenuColorScheme>("dark");

	return (
		<Group justify="flex-end" align="flex-start" mih={380}>
			<UserMenu
				user={users.anna}
				colorScheme={colorScheme}
				onColorSchemeChange={setColorScheme}
				items={navigationUserMenuItems}
				onOpenShortcuts={() => {}}
				onSignOut={() => {}}
				menuProps={{
					opened: true,
					withinPortal: false,
					trapFocus: false,
					returnFocus: false,
					middlewares: { flip: false, shift: false },
				}}
			/>
		</Group>
	);
}

function NavigationWorkspaceSwitcherDemo() {
	const [workspaceId, setWorkspaceId] = useState(navigationWorkspaces[0].id);

	return (
		<Box mih={380} w={260} maw="100%">
			<WorkspaceSwitcher
				workspaces={navigationWorkspaces}
				currentId={workspaceId}
				onSelect={setWorkspaceId}
				onCreate={() => {}}
				defaultOpened
				comboboxProps={{ withinPortal: false, middlewares: { flip: false, shift: false } }}
			/>
		</Box>
	);
}

function NavigationPaletteDemo() {
	return (
		<Box h={480} style={{ ...frameStyle, position: "relative", transform: "translateZ(0)" }}>
			<CommandPalette
				search={navigationSearchCustomers}
				recent={navigationRecentCustomers}
				recordsLabel="Customers"
				shortcut={null}
				forceOpened
				withinPortal={false}
				lockScroll={false}
				trapFocus={false}
				returnFocus={false}
				yOffset={32}
				listHeight={340}
				transitionProps={{ duration: 0 }}
			/>
		</Box>
	);
}

function NavigationInboxDemo() {
	const inbox = useNavigationInbox();

	return (
		<Group justify="flex-end" align="flex-start" mih={620}>
			<NotificationInbox
				{...inbox}
				defaultOpened
				popoverProps={{ withinPortal: false, middlewares: { flip: false, shift: false } }}
			/>
		</Group>
	);
}

const navigationSettingsSections = (activeId: string | null): SidebarNavSection[] => {
	const item = (id: string, label: string, icon: ReactNode): SidebarNavItem => ({
		id,
		label,
		icon,
		href: `#settings-${id}`,
		active: id === activeId,
	});
	return [
		{
			id: "account",
			label: "Account",
			items: [
				item("profile", "Profile", <TbUser />),
				item("security", "Security", <TbShieldLock />),
				item("notifications", "Notifications", <TbBell />),
			],
		},
		{
			id: "workspace",
			label: "Workspace",
			items: [
				item("general", "General", <TbSettings />),
				item("members", "Members", <TbUsers />),
				item("billing", "Billing", <TbCreditCard />),
				item("api", "API keys", <TbKey />),
			],
		},
	];
};

function NavigationSettingsSection({ id }: { id: string }) {
	switch (id) {
		case "profile":
			return (
				<Panel title="Profile" description="Shown to people in your workspaces.">
					<Stack>
						<TextInput label="Name" defaultValue={users.anna.name} />
						<TextInput label="Email" defaultValue={users.anna.email} />
					</Stack>
				</Panel>
			);
		case "security":
			return (
				<Panel title="Two-step verification" actions={<Button variant="default">Turn off</Button>}>
					<Text size="sm">On, with an authenticator app. One passkey is set up.</Text>
				</Panel>
			);
		case "notifications":
			return (
				<Panel title="Email me about">
					<Stack gap="sm">
						<Switch label="Mentions" defaultChecked />
						<Switch label="Approvals waiting on me" defaultChecked />
						<Switch label="Finished exports" />
					</Stack>
				</Panel>
			);
		case "members":
			return (
				<Panel title="Members" actions={<Button leftSection={<TbMail />}>Invite people</Button>}>
					<Group gap="sm">
						<UserStack users={[users.anna, users.lea, users.jean]} />
						<Text size="sm" c="dimmed">
							{formatCount(3, { one: "member", other: "members" })}
						</Text>
					</Group>
				</Panel>
			);
		case "billing":
			return (
				<Panel title="Seats">
					<UsageMeter label="Seats used" used={3} limit={10} />
				</Panel>
			);
		case "api":
			return (
				<Panel title="API keys">
					<SecretField label="Production" prefix="sk_live_" lastFour="4f2a" />
				</Panel>
			);
		default:
			return (
				<Panel title="General" description="Name and timezone for the workspace.">
					<Stack>
						<TextInput label="Workspace name" defaultValue="Acme Ops" />
						<TimezoneSelect label="Timezone" defaultValue="Europe/Paris" />
					</Stack>
				</Panel>
			);
	}
}

function NavigationSettingsDemo({ narrow = false }: { narrow?: boolean }) {
	const [activeId, setActiveId] = useState<string | null>(narrow ? null : "general");

	return (
		<Box p="md" style={frameStyle} maw={narrow ? 380 : undefined}>
			<SettingsLayout
				sections={navigationSettingsSections(activeId)}
				selected={activeId !== null}
				onBack={() => setActiveId(null)}
				onNavigate={(item, event) => {
					event.preventDefault();
					setActiveId(item.id);
				}}
			>
				<NavigationSettingsSection id={activeId ?? "general"} />
			</SettingsLayout>
		</Box>
	);
}

export interface PageHeaderBreadcrumb {
	label: string;
	href?: string;
}

export interface PageHeaderAction {
	label: string;
	icon?: ReactNode;
	onClick?: () => void;
	destructive?: boolean;
	confirmation?: ReactNode;
	confirmTitle?: string;
}

export interface PageHeaderProps {
	title: ReactNode;
	breadcrumbs?: PageHeaderBreadcrumb[];
	status?: ReactNode;
	meta?: ReactNode;
	primaryAction?: ReactNode;
	actions?: PageHeaderAction[];
	moreActions?: PageHeaderAction[];
	tabs?: ReactNode;
	order?: TitleOrder;
}

type PageHeaderOverflowEntry = PageHeaderAction | "more";

function PageHeaderConfirm({
	action,
	trigger,
}: {
	action: PageHeaderAction;
	trigger: (open: () => void) => ReactNode;
}) {
	return (
		<ConfirmAction
			action={action.label}
			title={action.confirmTitle}
			consequence={action.confirmation}
			tone="danger"
			onConfirm={() => action.onClick?.()}
			trigger={trigger}
		/>
	);
}

function PageHeaderMenu({ actions }: { actions: PageHeaderAction[] }) {
	const safe = actions.filter((action) => !action.destructive);
	const destructive = actions.filter((action) => action.destructive);
	// The confirmation lives outside the menu, so it survives the menu closing; the last action stays for the exit animation
	const [confirming, setConfirming] = useState<PageHeaderAction | null>(null);
	const [confirmOpened, setConfirmOpened] = useState(false);

	return (
		<>
			<Menu position="bottom-end">
				<Menu.Target>
					<ActionIcon variant="default" size="input-sm" aria-label="More actions">
						<TbDots />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					{safe.map((action) => (
						<Menu.Item key={action.label} leftSection={action.icon} onClick={action.onClick}>
							{action.label}
						</Menu.Item>
					))}
					{safe.length > 0 && destructive.length > 0 && <Menu.Divider />}
					{destructive.map((action) => (
						<Menu.Item
							key={action.label}
							color="red"
							leftSection={action.icon}
							onClick={() => {
								setConfirming(action);
								setConfirmOpened(true);
							}}
						>
							{action.label}
						</Menu.Item>
					))}
				</Menu.Dropdown>
			</Menu>
			{confirming && (
				<ConfirmAction
					opened={confirmOpened}
					onClose={() => setConfirmOpened(false)}
					action={confirming.label}
					title={confirming.confirmTitle}
					consequence={confirming.confirmation}
					tone="danger"
					onConfirm={() => confirming.onClick?.()}
				/>
			)}
		</>
	);
}

export function PageHeader({
	title,
	breadcrumbs = [],
	status,
	meta,
	primaryAction,
	actions = [],
	moreActions = [],
	tabs,
	order = 2,
}: PageHeaderProps) {
	const secondary = actions.slice(0, 2);
	const menuOnly = [...actions.slice(2), ...moreActions];

	return (
		<Stack gap="sm">
			{breadcrumbs.length > 0 && (
				<Breadcrumbs separator={<TbChevronRight aria-hidden />} separatorMargin={6}>
					{breadcrumbs.map((crumb) => (
						<Anchor key={crumb.label} href={crumb.href} size="sm" c="dimmed">
							{crumb.label}
						</Anchor>
					))}
				</Breadcrumbs>
			)}
			<Group align="center" gap="sm" wrap="nowrap">
				<Group gap="sm" wrap="nowrap" miw={0} style={{ flexShrink: 1 }}>
					<Title order={order} lineClamp={1}>
						{title}
					</Title>
					{status}
				</Group>
				<OverflowList<PageHeaderOverflowEntry>
					data={menuOnly.length > 0 ? [...secondary, "more"] : secondary}
					gap="sm"
					style={{ flex: 1, minWidth: 0, justifyContent: "flex-end" }}
					getItemKey={(entry) => (entry === "more" ? "more" : entry.label)}
					renderItem={(entry) =>
						entry === "more" ? (
							<PageHeaderMenu actions={menuOnly} />
						) : entry.destructive ? (
							<PageHeaderConfirm
								action={entry}
								trigger={(open) => (
									<Button variant="light" color="red" leftSection={entry.icon} onClick={open}>
										{entry.label}
									</Button>
								)}
							/>
						) : (
							<Button variant="default" leftSection={entry.icon} onClick={entry.onClick}>
								{entry.label}
							</Button>
						)
					}
					renderOverflow={(hidden) => (
						// A DOM element, so OverflowList can measure the indicator (Menu forwards no ref)
						<Box>
							<PageHeaderMenu actions={hidden.flatMap((entry) => (entry === "more" ? menuOnly : [entry]))} />
						</Box>
					)}
				/>
				{primaryAction && <Box style={{ flexShrink: 0 }}>{primaryAction}</Box>}
			</Group>
			{meta && (
				<Text size="sm" c="dimmed" component="div">
					{meta}
				</Text>
			)}
			{tabs}
		</Stack>
	);
}

function PageHeaderExample() {
	const acme = customers[0];

	return (
		<Card withBorder>
			<PageHeader
				breadcrumbs={[{ label: "Customers", href: "#customers" }, { label: acme.name }]}
				title={acme.name}
				status={<StatusBadge value={acme.status} tones={customerStatus} />}
				meta={
					<Group gap={6} wrap="wrap">
						<CopyableId value={acme.id} />
						<Text span inherit>
							· Created <DateText value="2025-03-04" /> · Owner {users.anna.name}
						</Text>
					</Group>
				}
				primaryAction={<Button leftSection={<TbPencil />}>Edit customer</Button>}
				actions={[
					{ label: "Export", icon: <TbDownload /> },
					{ label: "Send statement", icon: <TbSend /> },
				]}
				moreActions={[
					{ label: "Assign owner", icon: <TbUserPlus /> },
					{
						label: "Archive customer",
						destructive: true,
						confirmTitle: "Archive Acme Logistics?",
						confirmation: "It disappears from lists and search. You can restore it from the archive.",
					},
				]}
				tabs={
					<Tabs defaultValue="overview">
						<Tabs.List>
							<Tabs.Tab value="overview">Overview</Tabs.Tab>
							<Tabs.Tab value="invoices">Invoices</Tabs.Tab>
							<Tabs.Tab value="users">Users</Tabs.Tab>
							<Tabs.Tab value="history">History</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				}
			/>
		</Card>
	);
}

export function ShortcutsList() {
	const shortcuts = useRegisteredShortcuts();
	const byGroup = new Map<string, typeof shortcuts>();
	for (const shortcut of shortcuts) byGroup.set(shortcut.group, [...(byGroup.get(shortcut.group) ?? []), shortcut]);
	const groups = [...byGroup]
		.sort(([first], [second]) => Number(second === "Global") - Number(first === "Global"))
		.map(([label, items]) => ({ label, items }));

	return (
		<Stack gap="md">
			{groups.map((group) => (
				<Stack key={group.label} gap={6}>
					<Text size="xs" fw={600} c="dimmed">
						{group.label}
					</Text>
					{group.items.map((shortcut) => (
						<Group key={shortcut.id} justify="space-between" wrap="nowrap">
							<Text size="sm">{shortcut.description}</Text>
							<ShortcutHint keys={[shortcut.keys, ...(shortcut.alternatives ?? [])]} />
						</Group>
					))}
				</Stack>
			))}
		</Stack>
	);
}

export function ShortcutsDialog({ opened, onClose }: { opened: boolean; onClose: () => void }) {
	return (
		<Modal opened={opened} onClose={onClose} title="Keyboard shortcuts">
			<ShortcutsList />
		</Modal>
	);
}

function ShortcutsDialogExample() {
	const [opened, setOpened] = useState(false);
	const noAction = () => {};

	useShortcut("mod+k", noAction, { description: "Search everything", group: "Global" });
	useShortcut("shift+?", () => setOpened(true), { description: "Show shortcuts", group: "Global" });
	useShortcut("a", noAction, { description: "Approve", group: "Review queue" });
	useShortcut("r", noAction, { description: "Reject", group: "Review queue" });
	useShortcut("e", noAction, { description: "Edit record", group: "Current page" });

	return (
		<Panel
			title="Keyboard shortcuts"
			actions={
				<Button variant="default" size="xs" onClick={() => setOpened(true)}>
					Open as dialog
				</Button>
			}
		>
			<ShortcutsList />
			<ShortcutsDialog opened={opened} onClose={() => setOpened(false)} />
		</Panel>
	);
}

export function AppFrameArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<NavigationAppFrameDemo />
			</PreviewItem>
			<PreviewItem>
				<Group align="flex-start" gap="lg" wrap="nowrap">
					<NavigationExpandedDemo />
					<NavigationRailDemo />
				</Group>
			</PreviewItem>
			<PreviewItem>
				<NavigationWorkspaceSwitcherDemo />
			</PreviewItem>
			<PreviewItem>
				<NavigationUserMenuDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<NavigationPaletteDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<NavigationInboxDemo />
			</PreviewItem>
			<PreviewItem span="full">
				<PageHeaderExample />
			</PreviewItem>
			<PreviewItem span="full">
				<SystemBanner
					kind="impersonation"
					message={
						<>
							You're viewing as <b>marie.dubois@acme.io</b>. Actions are logged under both names.
						</>
					}
					action={
						<Button size="xs" variant="white" color="red">
							Stop impersonating
						</Button>
					}
				/>
			</PreviewItem>
			<PreviewItem span="full">
				<SystemBanner kind="environment" message="Staging environment: data resets nightly at 02:00 UTC." />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<NavigationSettingsDemo />
			</PreviewItem>
			<PreviewItem span="third">
				<NavigationSettingsDemo narrow />
			</PreviewItem>
			<PreviewItem span="half">
				<ShortcutsDialogExample />
			</PreviewItem>
		</PreviewGrid>
	);
}

function accessIsEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function useAccessSubmit<Values>(onSubmit: (values: Values) => void | Promise<void>) {
	const [pending, setPending] = useState(false);
	const run = async (values: Values) => {
		setPending(true);
		try {
			await onSubmit(values);
		} finally {
			setPending(false);
		}
	};
	return { pending, run };
}

function AccessError({ children }: { children: ReactNode }) {
	return (
		<Alert variant="light" color="red" icon={<TbAlertCircle />} role="alert">
			{children}
		</Alert>
	);
}

function AccessHeading({ title, description }: { title: ReactNode; description?: ReactNode }) {
	return (
		<Box>
			<Title order={3}>{title}</Title>
			{description && (
				<Text size="sm" c="dimmed" mt={4}>
					{description}
				</Text>
			)}
		</Box>
	);
}

export type SignInEmailMethod = "link" | "password";

export interface SignInValues {
	method: SignInEmailMethod;
	email: string;
	password?: string;
}

export interface SignInFormProps {
	title?: ReactNode;
	description?: ReactNode;
	onSso?: () => void;
	ssoLabel?: string;
	lastUsed?: "sso" | SignInEmailMethod;
	method?: SignInEmailMethod;
	defaultMethod?: SignInEmailMethod;
	onMethodChange?: (method: SignInEmailMethod) => void;
	defaultEmail?: string;
	error?: ReactNode;
	onSubmit: (values: SignInValues) => void | Promise<void>;
	onForgotPassword?: () => void;
	onSignUp?: () => void;
	appName?: string;
}

function SignInLastUsed({ onFilled = false }: { onFilled?: boolean }) {
	return (
		<Badge size="xs" variant={onFilled ? "white" : "light"}>
			Last used
		</Badge>
	);
}

export function SignInForm({
	title = "Sign in",
	description,
	onSso,
	ssoLabel = "Continue with SSO",
	lastUsed,
	method: methodProp,
	defaultMethod = "link",
	onMethodChange,
	defaultEmail = "",
	error,
	onSubmit,
	onForgotPassword,
	onSignUp,
	appName = app.name,
}: SignInFormProps) {
	const [method, setMethod] = useUncontrolled({
		value: methodProp,
		defaultValue: defaultMethod,
		finalValue: "link",
		onChange: onMethodChange,
	});
	const [email, setEmail] = useState(defaultEmail);
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState<string | null>(null);
	const { pending, run } = useAccessSubmit(onSubmit);

	const submit = () => {
		if (!accessIsEmail(email)) {
			setEmailError("Enter an email address like name@company.com");
			return;
		}
		setEmailError(null);
		run({ method, email: email.trim(), password: method === "password" ? password : undefined });
	};

	return (
		<Stack
			gap="md"
			component="form"
			onSubmit={(event) => {
				event.preventDefault();
				submit();
			}}
		>
			<AccessHeading title={title} description={description} />
			{error && <AccessError>{error}</AccessError>}
			{onSso && (
				<>
					<Button
						fullWidth
						leftSection={<TbBuildingSkyscraper />}
						rightSection={lastUsed === "sso" ? <SignInLastUsed onFilled /> : undefined}
						onClick={onSso}
					>
						{ssoLabel}
					</Button>
					<Divider label="or" labelPosition="center" />
				</>
			)}
			<TextInput
				label="Work email"
				placeholder="name@company.com"
				type="email"
				autoComplete="email"
				value={email}
				onChange={(event) => setEmail(event.currentTarget.value)}
				error={emailError}
			/>
			{method === "password" && (
				<PasswordInput
					label="Password"
					autoComplete="current-password"
					value={password}
					onChange={(event) => setPassword(event.currentTarget.value)}
				/>
			)}
			<Button
				type="submit"
				fullWidth
				variant={onSso ? "default" : "filled"}
				loading={pending}
				disabled={method === "password" && password === ""}
				leftSection={method === "link" ? <TbMail /> : undefined}
				rightSection={lastUsed === method ? <SignInLastUsed onFilled={!onSso} /> : undefined}
			>
				{method === "link" ? "Email me a sign-in link" : "Sign in with password"}
			</Button>
			<Group justify="center" gap="md">
				<Button variant="subtle" size="compact-sm" onClick={() => setMethod(method === "link" ? "password" : "link")}>
					{method === "link" ? "Use a password instead" : "Email me a link instead"}
				</Button>
				{method === "password" && onForgotPassword && (
					<Button variant="subtle" size="compact-sm" onClick={onForgotPassword}>
						Forgot password?
					</Button>
				)}
			</Group>
			{onSignUp && (
				<Text size="xs" c="dimmed" ta="center">
					New to {appName}?{" "}
					<Anchor component="button" type="button" size="xs" onClick={onSignUp}>
						Create an account
					</Anchor>
				</Text>
			)}
		</Stack>
	);
}

export function SignInCard(props: SignInFormProps) {
	return (
		<Card withBorder p="xl">
			<SignInForm {...props} />
		</Card>
	);
}

export interface SignInSplitProps extends SignInFormProps {
	brand: ReactNode;
	aside: ReactNode;
}

export function SignInSplit({ brand, aside, ...formProps }: SignInSplitProps) {
	return (
		<Box style={frameStyle}>
			<Grid type="container" breakpoints={previewBreakpoints} gap={0}>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Center p="xl" mih={480} h="100%">
						<Stack gap="lg" w="100%" maw={340}>
							{brand}
							<SignInForm {...formProps} />
						</Stack>
					</Center>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Center p="xl" h="100%" bg="var(--mantine-primary-color-light)">
						<Box maw={340} w="100%">
							{aside}
						</Box>
					</Center>
				</Grid.Col>
			</Grid>
		</Box>
	);
}

export interface SignUpValues {
	email: string;
	password: string;
}

export interface SignUpCardProps {
	appName?: string;
	defaultEmail?: string;
	onGoogle?: () => void;
	onSso?: () => void;
	termsHref?: string;
	privacyHref?: string;
	error?: ReactNode;
	onSubmit: (values: SignUpValues) => void | Promise<void>;
	onSignIn?: () => void;
}

export function SignUpCard({
	appName = app.name,
	defaultEmail = "",
	onGoogle,
	onSso,
	termsHref = "#terms",
	privacyHref = "#privacy",
	error,
	onSubmit,
	onSignIn,
}: SignUpCardProps) {
	const [email, setEmail] = useState(defaultEmail);
	const [password, setPassword] = useState("");
	const [accepted, setAccepted] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const { valid: passwordValid } = usePasswordRules(password, { email });
	const emailValid = accessIsEmail(email);
	const { pending, run } = useAccessSubmit(onSubmit);

	return (
		<Card withBorder p="xl">
			<Stack
				gap="md"
				component="form"
				onSubmit={(event) => {
					event.preventDefault();
					if (emailValid && passwordValid && accepted) run({ email: email.trim(), password });
				}}
			>
				<AccessHeading title="Create your account" description={`Start using ${appName} with your work email.`} />
				{error && <AccessError>{error}</AccessError>}
				{(onGoogle || onSso) && (
					<>
						<Stack gap="xs">
							{onGoogle && (
								<Button variant="default" fullWidth leftSection={<TbBrandGoogle />} onClick={onGoogle}>
									Sign up with Google
								</Button>
							)}
							{onSso && (
								<Button variant="default" fullWidth leftSection={<TbBuildingSkyscraper />} onClick={onSso}>
									Sign up with SSO
								</Button>
							)}
						</Stack>
						<Divider label="or with email" labelPosition="center" />
					</>
				)}
				<TextInput
					label="Work email"
					placeholder="name@company.com"
					type="email"
					autoComplete="email"
					value={email}
					onChange={(event) => setEmail(event.currentTarget.value)}
					onBlur={() => setEmailTouched(true)}
					error={emailTouched && email !== "" && !emailValid ? "Enter an email address like name@company.com" : null}
				/>
				<Stack gap={6}>
					<PasswordInput
						label="Password"
						autoComplete="new-password"
						value={password}
						onChange={(event) => setPassword(event.currentTarget.value)}
					/>
					<PasswordRules password={password} context={{ email }} />
				</Stack>
				<Checkbox
					checked={accepted}
					onChange={(event) => setAccepted(event.currentTarget.checked)}
					label={
						<>
							I agree to the{" "}
							<Anchor href={termsHref} inherit>
								terms
							</Anchor>{" "}
							and the{" "}
							<Anchor href={privacyHref} inherit>
								privacy policy
							</Anchor>
						</>
					}
				/>
				<Button type="submit" fullWidth loading={pending} disabled={!emailValid || !passwordValid || !accepted}>
					Create account
				</Button>
				{onSignIn && (
					<Text size="xs" c="dimmed" ta="center">
						Already have an account?{" "}
						<Anchor component="button" type="button" size="xs" onClick={onSignIn}>
							Sign in
						</Anchor>
					</Text>
				)}
			</Stack>
		</Card>
	);
}

export interface MfaValues {
	method: "app" | "recovery";
	code: string;
	trustDevice: boolean;
}

export interface MfaChallengeProps {
	trustDays?: number;
	error?: ReactNode;
	onSubmit: (values: MfaValues) => void | Promise<void>;
	onUsePasskey?: () => void;
}

export function MfaChallenge({ trustDays = 30, error, onSubmit, onUsePasskey }: MfaChallengeProps) {
	const [method, setMethod] = useState<"app" | "recovery">("app");
	const [code, setCode] = useState("");
	const [recoveryCode, setRecoveryCode] = useState("");
	const [trustDevice, setTrustDevice] = useState(true);
	const { pending, run } = useAccessSubmit(onSubmit);

	const submitCode = (value: string) => run({ method: "app", code: value, trustDevice });

	return (
		<Card withBorder p="xl">
			<Stack gap="md">
				<ThemeIcon variant="light" size="xl">
					<TbShieldLock size={22} />
				</ThemeIcon>
				{method === "app" ? (
					<>
						<AccessHeading
							title="Two-step verification"
							description="Enter the 6-digit code from your authenticator app."
						/>
						<Stack gap={6}>
							<PinInput
								length={6}
								type="number"
								oneTimeCode
								ariaLabel="Verification code"
								value={code}
								onChange={setCode}
								onComplete={submitCode}
								error={Boolean(error)}
								disabled={pending}
							/>
							{error && (
								<Text size="sm" c="var(--mantine-color-error)" role="alert">
									{error}
								</Text>
							)}
						</Stack>
					</>
				) : (
					<>
						<AccessHeading
							title="Use a recovery code"
							description="Each code works once. You'll find them where you saved them when you set up two-step verification."
						/>
						<TextInput
							label="Recovery code"
							placeholder="XXXX-XXXX"
							autoComplete="one-time-code"
							value={recoveryCode}
							onChange={(event) => setRecoveryCode(event.currentTarget.value)}
							error={error}
							styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
						/>
					</>
				)}
				<Checkbox
					label={`Trust this device for ${trustDays} days`}
					checked={trustDevice}
					onChange={(event) => setTrustDevice(event.currentTarget.checked)}
				/>
				<Button
					fullWidth
					loading={pending}
					disabled={method === "app" ? code.length < 6 : recoveryCode.trim() === ""}
					onClick={() =>
						method === "app" ? submitCode(code) : run({ method: "recovery", code: recoveryCode.trim(), trustDevice })
					}
				>
					Verify
				</Button>
				<Divider />
				<Stack gap={4}>
					<Text size="xs" c="dimmed">
						{method === "app" ? "Can't use your app?" : "Have your phone?"}
					</Text>
					<Group gap="md">
						<Button variant="subtle" size="compact-sm" onClick={() => setMethod(method === "app" ? "recovery" : "app")}>
							{method === "app" ? "Use a recovery code" : "Use your authenticator app"}
						</Button>
						{onUsePasskey && (
							<Button variant="subtle" size="compact-sm" leftSection={<TbFingerprint />} onClick={onUsePasskey}>
								Use a passkey
							</Button>
						)}
					</Group>
				</Stack>
			</Stack>
		</Card>
	);
}

export interface CheckEmailCardProps {
	email: string;
	purpose?: "sign-in" | "reset";
	expiresInMinutes?: number;
	resendAvailableAt?: Date;
	onResend: () => void | Promise<void>;
	onChangeEmail: () => void;
}

export function CheckEmailCard({
	email,
	purpose = "sign-in",
	expiresInMinutes = 15,
	resendAvailableAt,
	onResend,
	onChangeEmail,
}: CheckEmailCardProps) {
	const [now, setNow] = useState(() => Date.now());
	useInterval(() => setNow(Date.now()), 1000, { autoInvoke: true });
	const { pending, run } = useAccessSubmit(onResend);
	const secondsLeft = resendAvailableAt ? Math.max(0, Math.ceil((resendAvailableAt.getTime() - now) / 1000)) : 0;

	return (
		<Card withBorder p="xl">
			<Stack gap="md" align="center" ta="center">
				<ThemeIcon variant="light" size="xl">
					<TbMail size={22} />
				</ThemeIcon>
				<AccessHeading
					title="Check your email"
					description={
						<>
							We sent {purpose === "sign-in" ? "a sign-in link" : "a link to reset your password"} to{" "}
							<Text span fw={600} c="var(--mantine-color-text)" inherit>
								{email}
							</Text>
							. It expires in {expiresInMinutes} minutes.
						</>
					}
				/>
				<Button variant="default" fullWidth loading={pending} disabled={secondsLeft > 0} onClick={() => run(undefined)}>
					{secondsLeft > 0 ? `Resend in ${secondsLeft} s` : "Resend email"}
				</Button>
				<Button variant="subtle" size="compact-sm" onClick={onChangeEmail}>
					Use a different email
				</Button>
			</Stack>
		</Card>
	);
}

export interface ForgotPasswordCardProps {
	defaultEmail?: string;
	onSubmit: (email: string) => void | Promise<void>;
	onBack: () => void;
}

export function ForgotPasswordCard({ defaultEmail = "", onSubmit, onBack }: ForgotPasswordCardProps) {
	const [email, setEmail] = useState(defaultEmail);
	const [error, setError] = useState<string | null>(null);
	const { pending, run } = useAccessSubmit(onSubmit);

	return (
		<Card withBorder p="xl">
			<Stack
				gap="md"
				component="form"
				onSubmit={(event) => {
					event.preventDefault();
					if (!accessIsEmail(email)) {
						setError("Enter an email address like name@company.com");
						return;
					}
					setError(null);
					run(email.trim());
				}}
			>
				<AccessHeading title="Reset your password" description="We'll email you a link to choose a new one." />
				<TextInput
					label="Work email"
					type="email"
					autoComplete="email"
					value={email}
					onChange={(event) => setEmail(event.currentTarget.value)}
					error={error}
				/>
				<Button type="submit" fullWidth loading={pending}>
					Send reset link
				</Button>
				<Button
					variant="subtle"
					size="compact-sm"
					leftSection={<TbArrowLeft />}
					onClick={onBack}
					style={{ alignSelf: "center" }}
				>
					Back to sign in
				</Button>
			</Stack>
		</Card>
	);
}

export interface ResetPasswordCardProps {
	email: string;
	submitLabel?: string;
	error?: ReactNode;
	onSubmit: (password: string) => void | Promise<void>;
	onBack?: () => void;
}

export function ResetPasswordCard({
	email,
	submitLabel = "Save password and sign in",
	error,
	onSubmit,
	onBack,
}: ResetPasswordCardProps) {
	const [password, setPassword] = useState("");
	const { valid } = usePasswordRules(password, { email });
	const { pending, run } = useAccessSubmit(onSubmit);

	return (
		<Card withBorder p="xl">
			<Stack
				gap="md"
				component="form"
				onSubmit={(event) => {
					event.preventDefault();
					if (valid) run(password);
				}}
			>
				<AccessHeading title="Set a new password" description={`For ${email}`} />
				{error && <AccessError>{error}</AccessError>}
				<PasswordInput
					label="New password"
					autoComplete="new-password"
					value={password}
					onChange={(event) => setPassword(event.currentTarget.value)}
				/>
				<PasswordRules password={password} context={{ email }} />
				<Button type="submit" fullWidth loading={pending} disabled={!valid}>
					{submitLabel}
				</Button>
				{onBack && (
					<Button
						variant="subtle"
						size="compact-sm"
						leftSection={<TbArrowLeft />}
						onClick={onBack}
						style={{ alignSelf: "center" }}
					>
						Back to sign in
					</Button>
				)}
			</Stack>
		</Card>
	);
}

export interface WorkspaceInvitation {
	id: string;
	workspaceName: string;
	invitedBy: User;
	role: string;
}

export interface WorkspacePickerProps {
	email: string;
	workspaces: Workspace[];
	invitations?: WorkspaceInvitation[];
	onSelect: (workspaceId: string) => void;
	onAcceptInvitation?: (invitationId: string) => void | Promise<void>;
	onCreate?: () => void;
	onSwitchAccount?: () => void;
}

function WorkspacePickerInvitation({
	invitation,
	onAccept,
}: {
	invitation: WorkspaceInvitation;
	onAccept?: (invitationId: string) => void | Promise<void>;
}) {
	const { pending, run } = useAccessSubmit(async (id: string) => onAccept?.(id));

	return (
		<Paper withBorder p="sm">
			<Group gap="sm" wrap="nowrap">
				<Avatar size={28} name={invitation.invitedBy.name} color={invitation.invitedBy.color ?? "initials"} />
				<Text size="sm" style={{ flex: 1 }} miw={0}>
					<Text span fw={600} inherit>
						{invitation.invitedBy.name}
					</Text>{" "}
					invited you to{" "}
					<Text span fw={600} inherit>
						{invitation.workspaceName}
					</Text>{" "}
					as {invitation.role}
				</Text>
				{onAccept && (
					<Button size="xs" variant="light" loading={pending} onClick={() => run(invitation.id)}>
						Join
					</Button>
				)}
			</Group>
		</Paper>
	);
}

export function WorkspacePicker({
	email,
	workspaces,
	invitations = [],
	onSelect,
	onAcceptInvitation,
	onCreate,
	onSwitchAccount,
}: WorkspacePickerProps) {
	return (
		<Card withBorder p="xl">
			<Stack gap="md">
				<AccessHeading
					title="Choose a workspace"
					description={
						<>
							Signed in as {email}
							{onSwitchAccount && (
								<>
									{" · "}
									<Anchor component="button" type="button" size="sm" onClick={onSwitchAccount}>
										Switch account
									</Anchor>
								</>
							)}
						</>
					}
				/>
				<Paper withBorder>
					{workspaces.map((workspace, index) => (
						<UnstyledButton
							key={workspace.id}
							w="100%"
							p="sm"
							onClick={() => onSelect(workspace.id)}
							style={{
								display: "block",
								borderTop: index > 0 ? "1px solid var(--mantine-color-default-border)" : undefined,
							}}
						>
							<Group gap="sm" wrap="nowrap">
								<Avatar name={workspace.name} color={workspace.color ?? "initials"} radius="sm" size={36} />
								<Box style={{ flex: 1 }} miw={0}>
									<Text size="sm" fw={500} truncate>
										{workspace.name}
									</Text>
									<Text size="xs" c="dimmed">
										{[workspace.role, workspace.plan].filter(Boolean).join(" · ")}
									</Text>
								</Box>
								<TbChevronRight aria-hidden style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }} />
							</Group>
						</UnstyledButton>
					))}
				</Paper>
				{invitations.map((invitation) => (
					<WorkspacePickerInvitation key={invitation.id} invitation={invitation} onAccept={onAcceptInvitation} />
				))}
				{onCreate && (
					<Button variant="subtle" fullWidth leftSection={<TbPlus />} onClick={onCreate}>
						Create a workspace
					</Button>
				)}
			</Stack>
		</Card>
	);
}

export interface InviteAcceptCardProps {
	invitedBy: User;
	workspaceName: string;
	invitedAs: string;
	email: string;
	onAccept: () => void | Promise<void>;
	onDecline: () => void;
	onSwitchAccount?: () => void;
}

export function InviteAcceptCard({
	invitedBy,
	workspaceName,
	invitedAs,
	email,
	onAccept,
	onDecline,
	onSwitchAccount,
}: InviteAcceptCardProps) {
	const { pending, run } = useAccessSubmit(onAccept);

	return (
		<Card withBorder p="xl">
			<Stack gap="md" align="center" ta="center">
				<Avatar size="lg" name={invitedBy.name} color={invitedBy.color ?? "initials"} />
				<AccessHeading title={`Join ${workspaceName}`} description={`${invitedBy.name} invited you as ${invitedAs}.`} />
				<Group grow w="100%">
					<Button variant="default" onClick={onDecline} disabled={pending}>
						Decline
					</Button>
					<Button loading={pending} onClick={() => run(undefined)}>
						Join workspace
					</Button>
				</Group>
				<Text size="xs" c="dimmed">
					You'll join as {email}
					{onSwitchAccount && (
						<>
							{" · "}
							<Anchor component="button" type="button" size="xs" onClick={onSwitchAccount}>
								Switch account
							</Anchor>
						</>
					)}
				</Text>
			</Stack>
		</Card>
	);
}

export interface ReauthValues {
	method: "password" | "passkey";
	password?: string;
}

export interface ReauthModalProps {
	opened: boolean;
	onClose: () => void;
	action: string;
	passkeyAvailable?: boolean;
	error?: ReactNode;
	onConfirm: (values: ReauthValues) => void | Promise<void>;
}

const reauthModalTitle = "Confirm it's you";

function ReauthModalBody({
	action,
	passkeyAvailable,
	error,
	onConfirm,
	onCancel,
}: Omit<ReauthModalProps, "opened" | "onClose"> & { onCancel: () => void }) {
	const [password, setPassword] = useState("");
	const { pending, run } = useAccessSubmit(onConfirm);

	return (
		<Stack
			gap="md"
			component="form"
			onSubmit={(event) => {
				event.preventDefault();
				if (password !== "") run({ method: "password", password });
			}}
		>
			<Text size="sm">Enter your password to {action}.</Text>
			<PasswordInput
				label="Password"
				autoComplete="current-password"
				value={password}
				onChange={(event) => setPassword(event.currentTarget.value)}
				error={error}
				data-autofocus
			/>
			{passkeyAvailable && (
				<Button
					variant="subtle"
					size="compact-sm"
					leftSection={<TbFingerprint />}
					onClick={() => run({ method: "passkey" })}
					style={{ alignSelf: "flex-start" }}
				>
					Use a passkey instead
				</Button>
			)}
			<Group justify="flex-end" gap="sm">
				<Button variant="default" onClick={onCancel} disabled={pending}>
					Cancel
				</Button>
				<Button type="submit" loading={pending} disabled={password === ""}>
					Confirm
				</Button>
			</Group>
		</Stack>
	);
}

export function ReauthModal({ opened, onClose, ...bodyProps }: ReauthModalProps) {
	return (
		<Modal opened={opened} onClose={onClose} title={reauthModalTitle}>
			<ReauthModalBody {...bodyProps} onCancel={onClose} />
		</Modal>
	);
}

export interface SessionExpiredCardProps {
	email: string;
	reason?: ReactNode;
	kept?: ReactNode;
	onSso: () => void | Promise<void>;
	onSignInAsSomeoneElse: () => void;
}

export function SessionExpiredCard({
	email,
	reason = "You were signed out after 12 hours without activity.",
	kept,
	onSso,
	onSignInAsSomeoneElse,
}: SessionExpiredCardProps) {
	const { pending, run } = useAccessSubmit(onSso);

	return (
		<Card withBorder p="xl">
			<Stack gap="md">
				<AccessHeading title="Sign in again" description={reason} />
				{kept && (
					<Paper withBorder p="sm" bg="var(--mantine-color-default-hover)">
						<Text size="sm">{kept}</Text>
					</Paper>
				)}
				<Button fullWidth leftSection={<TbBuildingSkyscraper />} loading={pending} onClick={() => run(undefined)}>
					Continue as {email}
				</Button>
				<Button variant="subtle" size="compact-sm" onClick={onSignInAsSomeoneElse} style={{ alignSelf: "center" }}>
					Sign in as someone else
				</Button>
			</Stack>
		</Card>
	);
}

const accessWorkspaces: Workspace[] = [
	{ id: "ws_acme", name: "Acme Ops", plan: "Enterprise", role: "Owner" },
	{ id: "ws_acme_staging", name: "Acme Ops staging", plan: "Enterprise", role: "Admin" },
	{ id: "ws_brightline", name: "Brightline pilot", plan: "Trial", role: "Member" },
];

const accessInvitations: WorkspaceInvitation[] = [
	{ id: "inv_4Tq8", workspaceName: "Evergreen rollout", invitedBy: users.jean, role: "Member" },
];

function AccessBrand() {
	return (
		<Group gap="sm" justify="center">
			<ThemeIcon size={32} radius="sm">
				<TbStack2 />
			</ThemeIcon>
			<Text fw={600} size="lg">
				{app.name}
			</Text>
		</Group>
	);
}

function AccessFrame({ children }: { children: ReactNode }) {
	return (
		<Center mih={600} p="xl" h="100%" style={frameStyle}>
			<Stack gap="lg" w="100%" maw={380}>
				<AccessBrand />
				{children}
			</Stack>
		</Center>
	);
}

function AccessSignInDemo() {
	const [error, setError] = useState<ReactNode>(null);

	return (
		<SignInCard
			onSso={() => {}}
			lastUsed="sso"
			defaultEmail={users.anna.email}
			error={error}
			onForgotPassword={() => {}}
			onSubmit={async ({ method }) => {
				await wait(500);
				setError(
					method === "password" ? "That email and password don't match. Try again or reset your password." : null,
				);
			}}
		/>
	);
}

function AccessMfaDemo() {
	const [error, setError] = useState<ReactNode>(null);

	return (
		<MfaChallenge
			error={error}
			onUsePasskey={() => {}}
			onSubmit={async ({ code }) => {
				await wait(400);
				setError(code === "246810" ? null : "That code didn't work. Enter the newest code from your app.");
			}}
		/>
	);
}

function AccessCheckEmailDemo() {
	const [resendAvailableAt, setResendAvailableAt] = useState(() => new Date(Date.now() + 42_000));

	return (
		<CheckEmailCard
			email={users.anna.email}
			resendAvailableAt={resendAvailableAt}
			onResend={async () => {
				await wait(400);
				setResendAvailableAt(new Date(Date.now() + 60_000));
			}}
			onChangeEmail={() => {}}
		/>
	);
}

function AccessReauthDemo() {
	const [opened, setOpened] = useState(false);
	const action = "turn off two-step verification";
	const close = () => setOpened(false);

	return (
		<Stack gap="lg" align="center" w="100%">
			<Paper shadow="xl" p="lg" w="100%" maw={420}>
				<Group justify="space-between" align="flex-start" wrap="nowrap" mb="md">
					<Title order={4}>{reauthModalTitle}</Title>
					<CloseButton aria-label="Close" />
				</Group>
				<ReauthModalBody action={action} passkeyAvailable onConfirm={() => {}} onCancel={() => {}} />
			</Paper>
			<Button variant="light" color="red" leftSection={<TbLock />} onClick={() => setOpened(true)}>
				Turn off two-step verification
			</Button>
			<ReauthModal
				opened={opened}
				onClose={close}
				action={action}
				passkeyAvailable
				onConfirm={async () => {
					await wait(500);
					close();
				}}
			/>
		</Stack>
	);
}

export interface MemberRole {
	value: string;
	label: string;
	locked?: boolean;
}

export type MemberStatus = "active" | "invited" | "suspended";

export const memberStatus = defineStatusMap<MemberStatus>({
	active: ["Active", "success"],
	invited: ["Invited", "info"],
	suspended: ["Suspended", "neutral"],
});

export interface WorkspaceMember {
	id: string;
	user: UserChipUser & { email: string };
	role: string;
	status: MemberStatus;
	twoStep: boolean;
	lastActiveAt: Date | null;
}

interface MembersTableProps {
	members: WorkspaceMember[];
	total: number;
	roles: MemberRole[];
	state: DataTableState;
	onStateChange: (state: DataTableState) => void;
	currentUserId?: string;
	onRoleChange: (member: WorkspaceMember, role: string) => void;
	onResendInvite: (member: WorkspaceMember) => void;
	onRevokeInvite: (member: WorkspaceMember) => void;
	onResetTwoStep: (member: WorkspaceMember) => void;
	onRemoveRequest: (member: WorkspaceMember) => void;
	onBulkRemove: (ids: string[]) => void;
	loading?: boolean;
}

function MembersTableRoleCell({
	member,
	roles,
	isCurrentUser,
	onRoleChange,
}: {
	member: WorkspaceMember;
	roles: MemberRole[];
	isCurrentUser: boolean;
	onRoleChange: (member: WorkspaceMember, role: string) => void;
}) {
	const role = roles.find((candidate) => candidate.value === member.role);

	if (role?.locked) {
		return (
			<Tooltip label="Ownership changes through a transfer, in workspace settings" withArrow>
				<Group gap={6} wrap="nowrap" w="fit-content">
					<TbLock aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />
					<Text size="sm">{role.label}</Text>
				</Group>
			</Tooltip>
		);
	}

	const select = (
		<Select
			size="xs"
			w={130}
			data={roles.filter((candidate) => !candidate.locked)}
			value={member.role}
			onChange={(value) => value && onRoleChange(member, value)}
			allowDeselect={false}
			disabled={isCurrentUser}
			aria-label={`Role for ${member.user.name}`}
		/>
	);

	return isCurrentUser ? (
		<Tooltip label="Someone else has to change your role" withArrow>
			<Box w="fit-content">{select}</Box>
		</Tooltip>
	) : (
		select
	);
}

function MembersTableRowMenu({
	member,
	onResendInvite,
	onRevokeInvite,
	onResetTwoStep,
	onRemoveRequest,
}: {
	member: WorkspaceMember;
	onResendInvite: (member: WorkspaceMember) => void;
	onRevokeInvite: (member: WorkspaceMember) => void;
	onResetTwoStep: (member: WorkspaceMember) => void;
	onRemoveRequest: (member: WorkspaceMember) => void;
}) {
	// The confirmations live outside the menu, so they survive it closing
	const [confirming, setConfirming] = useState<"revoke" | "reset" | null>(null);

	return (
		<Box onClick={(event) => event.stopPropagation()}>
			<Menu position="bottom-end" withinPortal>
				<Menu.Target>
					<ActionIcon variant="subtle" color="gray" aria-label={`Actions for ${member.user.name}`}>
						<TbDots />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					{member.status === "invited" ? (
						<>
							<Menu.Item leftSection={<TbMail />} onClick={() => onResendInvite(member)}>
								Resend invite
							</Menu.Item>
							<Menu.Item color="red" leftSection={<TbX />} onClick={() => setConfirming("revoke")}>
								Revoke invite
							</Menu.Item>
						</>
					) : (
						<>
							{member.twoStep && (
								<Menu.Item leftSection={<TbShieldOff />} onClick={() => setConfirming("reset")}>
									Reset two-step
								</Menu.Item>
							)}
							<Menu.Item color="red" leftSection={<TbUserMinus />} onClick={() => onRemoveRequest(member)}>
								Remove from workspace…
							</Menu.Item>
						</>
					)}
				</Menu.Dropdown>
			</Menu>
			<ConfirmAction
				opened={confirming === "revoke"}
				onClose={() => setConfirming(null)}
				action="Revoke invite"
				title={`Revoke the invite to ${member.user.email}?`}
				consequence="The link in the email stops working. You can invite them again later."
				tone="danger"
				onConfirm={() => onRevokeInvite(member)}
			/>
			<ConfirmAction
				opened={confirming === "reset"}
				onClose={() => setConfirming(null)}
				action="Reset two-step"
				title={`Reset two-step for ${member.user.name}?`}
				consequence="They set it up again the next time they sign in. Until then, a password alone signs them in."
				onConfirm={() => onResetTwoStep(member)}
			/>
		</Box>
	);
}

export function MembersTable({
	members,
	total,
	roles,
	state,
	onStateChange,
	currentUserId,
	onRoleChange,
	onResendInvite,
	onRevokeInvite,
	onResetTwoStep,
	onRemoveRequest,
	onBulkRemove,
	loading,
}: MembersTableProps) {
	const column = createColumnHelpers<WorkspaceMember>();
	const isLocked = (member: WorkspaceMember) =>
		member.id === currentUserId || Boolean(roles.find((role) => role.value === member.role)?.locked);

	return (
		<DataTable
			rows={members}
			total={total}
			rowId="id"
			rowLabel={(member) => member.user.name}
			selectable={(member) => !isLocked(member)}
			itemName={{ singular: "member", plural: "members" }}
			state={state}
			onStateChange={onStateChange}
			loading={loading}
			bulkActionsPosition="table"
			minWidth={760}
			bulkActions={[
				{
					label: "Remove",
					icon: <TbUserMinus />,
					tone: "danger",
					confirmation:
						"They lose access straight away. Their open work stays assigned to them until you hand it over.",
					onClick: (ids) => onBulkRemove(ids),
				},
			]}
			columns={[
				{
					key: "user",
					header: "Member",
					sortable: true,
					render: (member) => (
						<Group gap="xs" wrap="nowrap" miw={0}>
							<UserChip user={member.user} size="md" withEmail />
							{member.id === currentUserId && (
								<Text size="xs" c="dimmed">
									You
								</Text>
							)}
						</Group>
					),
				},
				{
					key: "role",
					header: "Role",
					sortable: true,
					render: (member) => (
						<MembersTableRoleCell
							member={member}
							roles={roles}
							isCurrentUser={member.id === currentUserId}
							onRoleChange={onRoleChange}
						/>
					),
				},
				column.status("status", memberStatus, { header: "Status" }),
				{
					key: "twoStep",
					header: "Two-step",
					render: (member) =>
						member.status === "invited" ? (
							emptyValue
						) : member.twoStep ? (
							<Group gap={4} wrap="nowrap">
								<TbShieldCheck aria-hidden style={{ color: "var(--mantine-color-green-text)" }} />
								<Text size="sm">On</Text>
							</Group>
						) : (
							<Group gap={4} wrap="nowrap" c="var(--mantine-color-orange-text)">
								<TbShieldOff aria-hidden />
								<Text size="sm" inherit>
									Off
								</Text>
							</Group>
						),
				},
				column.relative("lastActiveAt", { header: "Last active", sortable: true }),
				{
					key: "actions",
					header: <VisuallyHidden>Actions</VisuallyHidden>,
					align: "right",
					width: 48,
					render: (member) =>
						isLocked(member) ? null : (
							<MembersTableRowMenu
								member={member}
								onResendInvite={onResendInvite}
								onRevokeInvite={onRevokeInvite}
								onResetTwoStep={onResetTwoStep}
								onRemoveRequest={onRemoveRequest}
							/>
						),
				},
			]}
		/>
	);
}

const inviteMembersEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface InviteMembersProps {
	roles: MemberRole[];
	defaultRole: string;
	seats: { used: number; total: number };
	existingEmails: string[];
	defaultEmails?: string[];
	onSubmit: (invite: { emails: string[]; role: string }) => void | Promise<void>;
	onCancel?: () => void;
}

function inviteMembersQuote(values: string[]) {
	return values.map((value) => `“${value}”`).join(", ");
}

export function InviteMembers({
	roles,
	defaultRole,
	seats,
	existingEmails,
	defaultEmails = [],
	onSubmit,
	onCancel,
}: InviteMembersProps) {
	const [emails, setEmails] = useState(defaultEmails);
	const [role, setRole] = useState(defaultRole);
	const [pending, setPending] = useState(false);

	const existing = new Set(existingEmails.map((email) => email.toLowerCase()));
	const invalid = emails.filter((email) => !inviteMembersEmailPattern.test(email));
	const alreadyIn = emails.filter((email) => inviteMembersEmailPattern.test(email) && existing.has(email));
	const valid = emails.filter((email) => !invalid.includes(email) && !alreadyIn.includes(email));
	const seatsLeft = seats.total - seats.used - valid.length;

	const problems = [
		invalid.length > 0 &&
			`${inviteMembersQuote(invalid)} ${invalid.length === 1 ? "isn't an email address" : "aren't email addresses"}. Fix or remove ${invalid.length === 1 ? "it" : "them"}.`,
		alreadyIn.length > 0 &&
			`${inviteMembersQuote(alreadyIn)} ${alreadyIn.length === 1 ? "is" : "are"} already in the workspace or invited.`,
	].filter(Boolean);

	const submit = async () => {
		setPending(true);
		try {
			await onSubmit({ emails: valid, role });
			setEmails([]);
		} finally {
			setPending(false);
		}
	};

	return (
		<Stack gap="md">
			<TagsInput
				label="Email addresses"
				description="Paste a list or press Enter after each one."
				placeholder={emails.length === 0 ? "name@company.com" : undefined}
				value={emails}
				onChange={(values) => setEmails([...new Set(values.map((value) => value.trim().toLowerCase()))])}
				splitChars={[",", " ", ";"]}
				acceptValueOnBlur
				error={problems.length > 0 ? problems.join(" ") : undefined}
				renderPill={({ option, onRemove, disabled }) => {
					const email = String(option.value);
					const problem = invalid.includes(email) || alreadyIn.includes(email);
					return (
						<Pill
							withRemoveButton={!disabled}
							onRemove={onRemove}
							bg={problem ? "var(--mantine-color-red-light)" : undefined}
							c={problem ? "var(--mantine-color-red-light-color)" : undefined}
						>
							{option.label}
						</Pill>
					);
				}}
			/>
			<Select
				label="Role"
				data={roles.filter((candidate) => !candidate.locked)}
				value={role}
				onChange={(value) => value && setRole(value)}
				allowDeselect={false}
			/>
			{seatsLeft >= 0 ? (
				<Text size="sm" c="dimmed">
					You'll have {seatsLeft} of {seats.total} seats left.
				</Text>
			) : (
				<Text size="sm" c="var(--mantine-color-red-text)">
					That's {formatCount(-seatsLeft, { one: "seat", other: "seats" })} more than your plan has. Remove{" "}
					{-seatsLeft === 1 ? "an address" : `${-seatsLeft} addresses`} or add seats.
				</Text>
			)}
			<Group justify="flex-end" gap="sm">
				{onCancel && (
					<Button variant="default" onClick={onCancel} disabled={pending}>
						Cancel
					</Button>
				)}
				<Button
					loading={pending}
					disabled={valid.length === 0 || problems.length > 0 || seatsLeft < 0}
					onClick={submit}
				>
					{valid.length === 0
						? "Send invites"
						: `Send ${formatCount(valid.length, { one: "invite", other: "invites" })}`}
				</Button>
			</Group>
		</Stack>
	);
}

export interface MemberOpenWork {
	id: string;
	count: number;
	noun: CountForms;
}

interface RemoveMemberProps {
	member: { name: string; email: string };
	openWork: MemberOpenWork[];
	searchPeople: (query: string) => Promise<EntityOption[]>;
	defaultAssignee: EntityOption | null;
	opened: boolean;
	onClose: () => void;
	onRemove: (details: {
		reassignments: Record<string, EntityOption>;
		signOutEverywhere: boolean;
	}) => void | Promise<void>;
}

export function RemoveMember({
	member,
	openWork,
	searchPeople,
	defaultAssignee,
	opened,
	onClose,
	onRemove,
}: RemoveMemberProps) {
	const initialAssignees = () => Object.fromEntries(openWork.map((work) => [work.id, defaultAssignee]));
	const [assignees, setAssignees] = useState<Record<string, EntityOption | null>>(initialAssignees);
	const [signOutEverywhere, setSignOutEverywhere] = useState(true);

	// A fresh form every time it opens
	const [wasOpened, setWasOpened] = useState(opened);
	if (opened !== wasOpened) {
		setWasOpened(opened);
		if (opened) {
			setAssignees(initialAssignees());
			setSignOutEverywhere(true);
		}
	}

	return (
		<ConfirmAction
			opened={opened}
			onClose={onClose}
			action="Remove"
			target={member.name}
			confirmLabel={`Remove ${member.name}`}
			tone="danger"
			consequence={
				<Stack gap="md">
					<Text size="sm">
						{member.name} loses access straight away.{" "}
						{openWork.length > 0 ? "Choose who takes over their open work." : "They have no open work to hand over."}
					</Text>
					{openWork.map((work) => (
						<EntitySelect
							key={work.id}
							label={formatCount(work.count, work.noun)}
							placeholder="Search people"
							value={assignees[work.id] ?? null}
							onChange={(value) => setAssignees((current) => ({ ...current, [work.id]: value }))}
							search={searchPeople}
							noun={{ one: "person", other: "people" }}
						/>
					))}
					<Checkbox
						checked={signOutEverywhere}
						onChange={(event) => setSignOutEverywhere(event.currentTarget.checked)}
						label="Sign them out of every device"
					/>
				</Stack>
			}
			onConfirm={async () => {
				const unassigned = openWork.find((work) => !assignees[work.id]);
				if (unassigned) {
					throw new Error(`Choose who takes over the ${formatCount(unassigned.count, unassigned.noun)}.`);
				}
				const reassignments = Object.fromEntries(
					openWork.map((work) => [work.id, assignees[work.id] as EntityOption]),
				) as Record<string, EntityOption>;
				await onRemove({ reassignments, signOutEverywhere });
			}}
		/>
	);
}

export type AccessLevel = "none" | "view" | "edit" | "full";

const roleEditorLevels: Exclude<AccessLevel, "none">[] = ["view", "edit", "full"];

const roleEditorLevelLabels: Record<AccessLevel, string> = { none: "None", view: "View", edit: "Edit", full: "Full" };

export interface RoleResource {
	key: string;
	label: string;
	permissions: Partial<Record<Exclude<AccessLevel, "none">, { key: string; label: string }[]>>;
}

export interface RoleEditorValue {
	name: string;
	baseRole: string;
	access: Record<string, AccessLevel>;
}

interface RoleEditorProps {
	value: RoleEditorValue;
	onChange: (value: RoleEditorValue) => void;
	savedValue: RoleEditorValue;
	baseRoles: { value: string; label: string; access: Record<string, AccessLevel> }[];
	resources: RoleResource[];
	memberCount: number;
	takenNames: string[];
	onSave: () => void | Promise<void>;
	onDiscard: () => void;
}

export function roleEditorPermissions(resources: RoleResource[], access: Record<string, AccessLevel>) {
	return resources.flatMap((resource) => {
		const level = access[resource.key] ?? "none";
		const reached = level === "none" ? -1 : roleEditorLevels.indexOf(level);
		return roleEditorLevels
			.filter((_, index) => index <= reached)
			.flatMap((candidate) => resource.permissions[candidate] ?? [])
			.map((permission) => permission.key);
	});
}

export function RoleEditor({
	value,
	onChange,
	savedValue,
	baseRoles,
	resources,
	memberCount,
	takenNames,
	onSave,
	onDiscard,
}: RoleEditorProps) {
	const [permissionsShown, { toggle: togglePermissions }] = useDisclosure(false);
	const base = baseRoles.find((role) => role.value === value.baseRole);
	const trimmedName = value.name.trim();
	const nameError =
		trimmedName === ""
			? "Name the role."
			: takenNames.some((name) => name.toLowerCase() === trimmedName.toLowerCase())
				? `Another role is called ${trimmedName}. Pick another name.`
				: undefined;

	const changes = [
		value.name !== savedValue.name,
		value.baseRole !== savedValue.baseRole,
		...resources.map((resource) => value.access[resource.key] !== savedValue.access[resource.key]),
	].filter(Boolean).length;

	const granted = new Set(roleEditorPermissions(resources, value.access));
	const allPermissions: PermissionMatrixPermission[] = resources.flatMap((resource) =>
		roleEditorLevels.flatMap((level) =>
			(resource.permissions[level] ?? []).map((permission) => ({
				key: permission.key,
				group: resource.label,
				label: permission.label,
			})),
		),
	);

	return (
		<Stack gap="md">
			<TextInput
				label="Name"
				value={value.name}
				onChange={(event) => onChange({ ...value, name: event.currentTarget.value })}
				error={nameError}
			/>
			<Select
				label="Based on"
				description="Levels you don't change here come from this role."
				data={baseRoles.map(({ value: roleValue, label }) => ({ value: roleValue, label }))}
				value={value.baseRole}
				onChange={(next) => {
					const nextBase = baseRoles.find((role) => role.value === next);
					if (nextBase) onChange({ ...value, baseRole: nextBase.value, access: { ...nextBase.access } });
				}}
				allowDeselect={false}
			/>
			<Stack gap="xs">
				<Text size="sm" fw={500}>
					Access
				</Text>
				{resources.map((resource) => {
					const level = value.access[resource.key] ?? "none";
					const baseLevel = base?.access[resource.key] ?? "none";
					const options: AccessLevel[] = [
						"none",
						...roleEditorLevels.filter((candidate) => resource.permissions[candidate]),
					];
					return (
						<Group key={resource.key} justify="space-between" wrap="nowrap" gap="sm">
							<Box miw={0}>
								<Text size="sm">{resource.label}</Text>
								{level !== baseLevel && base && (
									<Text size="xs" c="dimmed">
										{base.label} has {roleEditorLevelLabels[baseLevel]}
									</Text>
								)}
							</Box>
							<SegmentedControl
								size="xs"
								data={options.map((option) => ({ value: option, label: roleEditorLevelLabels[option] }))}
								value={level}
								onChange={(next) =>
									onChange({ ...value, access: { ...value.access, [resource.key]: next as AccessLevel } })
								}
								aria-label={`Access to ${resource.label}`}
							/>
						</Group>
					);
				})}
			</Stack>
			<Box>
				<Button variant="subtle" size="compact-sm" px={0} onClick={togglePermissions}>
					{permissionsShown
						? "Hide permissions"
						: `Show the ${formatCount(granted.size, { one: "permission", other: "permissions" })} this gives`}
				</Button>
				<Collapse expanded={permissionsShown}>
					<Box mt="sm">
						<PermissionMatrix
							readOnly
							roles={[{ id: "draft", name: trimmedName || "This role" }]}
							permissions={allPermissions}
							value={{
								draft: Object.fromEntries(
									allPermissions.map((permission) => [permission.key, granted.has(permission.key) ? "allow" : "deny"]),
								),
							}}
						/>
					</Box>
				</Collapse>
			</Box>
			<SaveBar
				dirty={changes > 0}
				changesCount={changes}
				onSave={() => {
					if (!nameError) return onSave();
				}}
				onDiscard={onDiscard}
				saveLabel={
					memberCount > 0 ? `Save for ${formatCount(memberCount, { one: "person", other: "people" })}` : "Save role"
				}
			/>
		</Stack>
	);
}

export interface IdentityGroup {
	id: string;
	name: string;
	memberCount: number;
}

export interface GroupMapping {
	groupId: string;
	role: string;
}

interface GroupRoleMappingProps {
	provider: string;
	syncedAt: Date;
	groups: IdentityGroup[];
	mappings: GroupMapping[];
	onMappingsChange: (mappings: GroupMapping[]) => void;
	roles: MemberRole[];
	fallbackRole: string | null;
	onFallbackRoleChange: (role: string | null) => void;
	onSync: () => void | Promise<void>;
}

export function GroupRoleMapping({
	provider,
	syncedAt,
	groups,
	mappings,
	onMappingsChange,
	roles,
	fallbackRole,
	onFallbackRoleChange,
	onSync,
}: GroupRoleMappingProps) {
	const [syncing, setSyncing] = useState(false);
	const [unmapping, setUnmapping] = useState<IdentityGroup | null>(null);
	const [unmapOpened, setUnmapOpened] = useState(false);
	const assignable = roles.filter((role) => !role.locked);
	const unmapped = groups.filter((group) => !mappings.some((mapping) => mapping.groupId === group.id));
	const roleLabel = (value: string) => roles.find((role) => role.value === value)?.label ?? value;

	const sync = async () => {
		setSyncing(true);
		try {
			await onSync();
		} finally {
			setSyncing(false);
		}
	};

	return (
		<Panel
			title={`${provider} groups`}
			description={
				<>
					Synced <RelativeTime value={syncedAt} />
				</>
			}
			actions={
				<>
					<Button size="xs" variant="default" leftSection={<TbRefresh />} loading={syncing} onClick={sync}>
						Sync now
					</Button>
					<Menu position="bottom-end" withinPortal>
						<Menu.Target>
							<Button size="xs" variant="default" leftSection={<TbPlus />} disabled={unmapped.length === 0}>
								Map a group
							</Button>
						</Menu.Target>
						<Menu.Dropdown>
							{unmapped.map((group) => (
								<Menu.Item
									key={group.id}
									rightSection={
										<Text size="xs" c="dimmed">
											{formatCount(group.memberCount, { one: "person", other: "people" })}
										</Text>
									}
									onClick={() =>
										onMappingsChange([
											...mappings,
											{ groupId: group.id, role: fallbackRole ?? assignable[assignable.length - 1].value },
										])
									}
								>
									{group.name}
								</Menu.Item>
							))}
						</Menu.Dropdown>
					</Menu>
				</>
			}
			flush
			footer={
				<Stack gap={6}>
					<Group gap="xs" wrap="nowrap">
						<Text size="sm">People in no mapped group get</Text>
						<Select
							size="xs"
							w={130}
							data={[{ value: "none", label: "No access" }, ...assignable]}
							value={fallbackRole ?? "none"}
							onChange={(value) => onFallbackRoleChange(value === "none" || value === null ? null : value)}
							allowDeselect={false}
							aria-label="Role for people in no mapped group"
						/>
					</Group>
					<Text size="xs" c="dimmed">
						Someone in several groups gets the role with the most access.
					</Text>
				</Stack>
			}
		>
			<Table verticalSpacing="sm" horizontalSpacing="md">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Group</Table.Th>
						<Table.Th w={24} />
						<Table.Th>Role</Table.Th>
						<Table.Th w={48}>
							<VisuallyHidden>Actions</VisuallyHidden>
						</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{mappings.map((mapping) => {
						const group = groups.find((candidate) => candidate.id === mapping.groupId);
						if (!group) return null;
						return (
							<Table.Tr key={mapping.groupId}>
								<Table.Td>
									<Text size="sm" fw={500}>
										{group.name}
									</Text>
									<Text size="xs" c="dimmed">
										{formatCount(group.memberCount, { one: "person", other: "people" })}
									</Text>
								</Table.Td>
								<Table.Td c="dimmed">
									<TbArrowRight aria-hidden />
								</Table.Td>
								<Table.Td>
									<Select
										size="xs"
										w={130}
										data={assignable}
										value={mapping.role}
										onChange={(value) =>
											value &&
											onMappingsChange(
												mappings.map((candidate) =>
													candidate.groupId === mapping.groupId ? { ...candidate, role: value } : candidate,
												),
											)
										}
										allowDeselect={false}
										aria-label={`Role for ${group.name}`}
									/>
								</Table.Td>
								<Table.Td>
									<Tooltip label="Stop mapping this group" withArrow>
										<ActionIcon
											variant="subtle"
											color="gray"
											aria-label={`Stop mapping ${group.name}`}
											onClick={() => {
												setUnmapping(group);
												setUnmapOpened(true);
											}}
										>
											<TbTrash />
										</ActionIcon>
									</Tooltip>
								</Table.Td>
							</Table.Tr>
						);
					})}
				</Table.Tbody>
			</Table>
			{unmapping && (
				<ConfirmAction
					opened={unmapOpened}
					onClose={() => setUnmapOpened(false)}
					action="Stop mapping"
					target={unmapping.name}
					tone="danger"
					consequence={`At the next sync, the ${formatCount(unmapping.memberCount, { one: "person", other: "people" })} in it lose the ${roleLabel(
						mappings.find((mapping) => mapping.groupId === unmapping.id)?.role ?? "",
					)} role, unless another group gives it to them.`}
					onConfirm={() => onMappingsChange(mappings.filter((mapping) => mapping.groupId !== unmapping.id))}
				/>
			)}
		</Panel>
	);
}

export type AccessStepKind = "person" | "group" | "role" | "permission";

export interface AccessStep {
	kind: AccessStepKind;
	label: string;
	detail?: string;
}

export interface AccessExplanation {
	allowed: boolean;
	paths: AccessStep[][];
	grantingRoles?: string[];
	grantedBy?: string[];
}

interface AccessExplainerProps {
	people: (UserChipUser & { id: string })[];
	permissions: { key: string; label: string }[];
	personId: string;
	onPersonChange: (personId: string) => void;
	permissionKey: string;
	onPermissionChange: (permissionKey: string) => void;
	explanation: AccessExplanation;
}

const accessExplainerKindLabels: Record<AccessStepKind, string> = {
	person: "Person",
	group: "Group",
	role: "Role",
	permission: "Permission",
};

function AccessExplainerPath({ steps }: { steps: AccessStep[] }) {
	return (
		<Paper withBorder p="xs">
			<Group gap="xs" wrap="wrap" align="center">
				{steps.map((step, index) => (
					<Group key={`${step.kind}-${step.label}`} gap="xs" wrap="nowrap">
						{index > 0 && <TbArrowRight aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />}
						<Box>
							<Text size="xs" c="dimmed">
								{accessExplainerKindLabels[step.kind]}
								{step.detail && ` · ${step.detail}`}
							</Text>
							<Text size="sm" fw={500} ff={step.kind === "permission" ? "monospace" : undefined}>
								{step.label}
							</Text>
						</Box>
					</Group>
				))}
			</Group>
		</Paper>
	);
}

export function AccessExplainer({
	people,
	permissions,
	personId,
	onPersonChange,
	permissionKey,
	onPermissionChange,
	explanation,
}: AccessExplainerProps) {
	const person = people.find((candidate) => candidate.id === personId);
	const permission = permissions.find((candidate) => candidate.key === permissionKey);
	const sentence = `${person?.name ?? "This person"} ${explanation.allowed ? "can" : "can't"} ${permission?.label ?? permissionKey}`;

	return (
		<Stack gap="md">
			<Group gap="xs" wrap="nowrap" align="center">
				<Select
					aria-label="Person"
					data={people.map((candidate) => ({ value: candidate.id, label: candidate.name }))}
					value={personId}
					onChange={(value) => value && onPersonChange(value)}
					allowDeselect={false}
					renderOption={({ option }) => {
						const match = people.find((candidate) => candidate.id === option.value);
						return match ? <UserChip user={match} /> : option.label;
					}}
					style={{ flex: 1 }}
				/>
				<Text c="dimmed" size="sm">
					can
				</Text>
				<Select
					aria-label="Permission"
					data={permissions.map((candidate) => ({ value: candidate.key, label: candidate.label }))}
					value={permissionKey}
					onChange={(value) => value && onPermissionChange(value)}
					allowDeselect={false}
					renderOption={({ option }) => (
						<Box>
							<Text size="sm">{option.label}</Text>
							<Text size="xs" c="dimmed" ff="monospace">
								{option.value}
							</Text>
						</Box>
					)}
					style={{ flex: 1 }}
				/>
			</Group>
			{explanation.allowed ? (
				<Alert color="green" icon={<TbCheck />} title={sentence}>
					{explanation.paths.length === 1
						? "Through one route."
						: `Through ${formatCount(explanation.paths.length, { one: "route", other: "routes" })}. Removing one leaves the others.`}
				</Alert>
			) : (
				<Alert color="gray" icon={<TbX />} title={sentence}>
					{explanation.grantingRoles && explanation.grantingRoles.length > 0
						? `${explanation.grantingRoles.join(", ")} ${explanation.grantingRoles.length === 1 ? "gives" : "give"} it.`
						: "No role gives it."}{" "}
					{explanation.grantedBy &&
						explanation.grantedBy.length > 0 &&
						`${explanation.grantedBy.join(" or ")} can grant it.`}
				</Alert>
			)}
			{explanation.paths.length > 0 && (
				<Stack gap="xs">
					{explanation.paths.map((path) => (
						<AccessExplainerPath key={path.map((step) => step.label).join(">")} steps={path} />
					))}
				</Stack>
			)}
		</Stack>
	);
}

export type ShareLevel = "view" | "edit";

export type GeneralAccess = "restricted" | "workspace";

export interface ShareEntry {
	id: string;
	kind: "person" | "group";
	name: string;
	detail: string;
	level: ShareLevel | "owner";
}

interface ShareSettingsProps {
	entries: ShareEntry[];
	onEntriesChange: (entries: ShareEntry[]) => void;
	generalAccess: GeneralAccess;
	onGeneralAccessChange: (access: GeneralAccess) => void;
	workspaceName: string;
	search: (query: string) => Promise<EntityOption[]>;
}

const shareLevelOptions = [
	{ value: "view", label: "Can view" },
	{ value: "edit", label: "Can edit" },
];

export function ShareSettings({
	entries,
	onEntriesChange,
	generalAccess,
	onGeneralAccessChange,
	workspaceName,
	search,
}: ShareSettingsProps) {
	const [adding, setAdding] = useState<EntityOption[]>([]);
	const [addLevel, setAddLevel] = useState<ShareLevel>("view");

	const share = () => {
		const fresh = adding
			.filter((option) => !entries.some((entry) => entry.id === option.id))
			.map<ShareEntry>((option) => ({
				id: option.id,
				kind: option.icon ? "group" : "person",
				name: option.name,
				detail: typeof option.description === "string" ? option.description : "",
				level: addLevel,
			}));
		onEntriesChange([...entries, ...fresh]);
		setAdding([]);
	};

	return (
		<Stack gap="md">
			<Group gap="xs" wrap="nowrap" align="flex-end">
				<Box style={{ flex: 1 }} miw={0}>
					<EntitySelect
						multiple
						aria-label="Add people or groups"
						placeholder="Add people or groups"
						value={adding}
						onChange={setAdding}
						search={search}
						noun={{ one: "person or group", other: "people or groups" }}
					/>
				</Box>
				<Select
					w={120}
					data={shareLevelOptions}
					value={addLevel}
					onChange={(value) => value && setAddLevel(value as ShareLevel)}
					allowDeselect={false}
					aria-label="Access for the people you add"
				/>
				<Button onClick={share} disabled={adding.length === 0}>
					Share
				</Button>
			</Group>
			<Stack gap="sm">
				{entries.map((entry) => (
					<Group key={entry.id} justify="space-between" wrap="nowrap" gap="sm">
						{entry.kind === "group" ? (
							<Group gap="xs" wrap="nowrap" miw={0}>
								<Avatar size={32} radius="sm" color="gray">
									<TbUsers />
								</Avatar>
								<Box miw={0}>
									<Text size="sm" fw={500} truncate>
										{entry.name}
									</Text>
									<Text size="xs" c="dimmed" truncate>
										{entry.detail}
									</Text>
								</Box>
							</Group>
						) : (
							<UserChip user={{ name: entry.name, email: entry.detail }} size="md" withEmail />
						)}
						{entry.level === "owner" ? (
							<Text size="sm" c="dimmed" pr="sm">
								Owner
							</Text>
						) : (
							<Select
								size="xs"
								w={140}
								data={[...shareLevelOptions, { value: "remove", label: "Remove access" }]}
								value={entry.level}
								onChange={(value) =>
									onEntriesChange(
										value === "remove"
											? entries.filter((candidate) => candidate.id !== entry.id)
											: entries.map((candidate) =>
													candidate.id === entry.id ? { ...candidate, level: value as ShareLevel } : candidate,
												),
									)
								}
								allowDeselect={false}
								aria-label={`Access for ${entry.name}`}
							/>
						)}
					</Group>
				))}
			</Stack>
			<Divider />
			<Group gap="sm" wrap="nowrap" align="flex-start">
				<ThemeIcon variant="light" color="gray" size="lg" mt={2}>
					{generalAccess === "restricted" ? <TbLock /> : <TbBuilding />}
				</ThemeIcon>
				<Box style={{ flex: 1 }} miw={0}>
					<Select
						size="sm"
						variant="unstyled"
						fw={500}
						data={[
							{ value: "restricted", label: "Only people with access" },
							{ value: "workspace", label: `Everyone at ${workspaceName}` },
						]}
						value={generalAccess}
						onChange={(value) => value && onGeneralAccessChange(value as GeneralAccess)}
						allowDeselect={false}
						aria-label="General access"
					/>
					<Text size="xs" c="dimmed">
						{generalAccess === "restricted"
							? "Nobody else can open it, even with the link."
							: `Anyone at ${workspaceName} with the link can view it.`}
					</Text>
				</Box>
			</Group>
		</Stack>
	);
}

interface ShareDialogProps extends ShareSettingsProps {
	recordName: string;
	link: string;
	opened: boolean;
	onClose: () => void;
}

export function ShareDialog({ recordName, link, opened, onClose, ...settings }: ShareDialogProps) {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			size="lg"
			centered
			title={
				<Text span fw={600} size="lg">
					Share “{recordName}”
				</Text>
			}
		>
			<ShareSettings {...settings} />
			<Group justify="space-between" mt="lg">
				<ShareDialogCopyLink link={link} />
				<Button onClick={onClose}>Done</Button>
			</Group>
		</Modal>
	);
}

function ShareDialogCopyLink({ link }: { link: string }) {
	return (
		<CopyButton value={link} timeout={2000}>
			{({ copied, copy }) => (
				<Button variant="default" leftSection={copied ? <TbCheck /> : <TbLink />} onClick={copy}>
					{copied ? "Link copied" : "Copy link"}
				</Button>
			)}
		</CopyButton>
	);
}

const membersWorkspaceName = "Acme Ops";

const membersRoles: MemberRole[] = [
	{ value: "owner", label: "Owner", locked: true },
	{ value: "admin", label: "Admin" },
	{ value: "support", label: "Support" },
	{ value: "finance", label: "Finance" },
	{ value: "viewer", label: "Viewer" },
];

const membersPaul = { id: "usr_4Pr2", name: "Paul R.", email: "paul@company.com" };

const membersNadia = { id: "usr_8Nb5", name: "Nadia B.", email: "nadia@company.com" };

const membersSami = { id: "usr_2St7", name: "Sami T.", email: "sami@company.com" };

const membersInitial: WorkspaceMember[] = [
	{
		id: users.anna.id,
		user: users.anna,
		role: "owner",
		status: "active",
		twoStep: true,
		lastActiveAt: ago({ minutes: 1 }),
	},
	{
		id: users.lea.id,
		user: users.lea,
		role: "admin",
		status: "active",
		twoStep: true,
		lastActiveAt: ago({ hours: 2 }),
	},
	{
		id: users.jean.id,
		user: users.jean,
		role: "support",
		status: "active",
		twoStep: false,
		lastActiveAt: ago({ days: 1 }),
	},
	{
		id: membersPaul.id,
		user: membersPaul,
		role: "finance",
		status: "active",
		twoStep: true,
		lastActiveAt: ago({ days: 12 }),
	},
	{ id: membersNadia.id, user: membersNadia, role: "support", status: "invited", twoStep: false, lastActiveAt: null },
	{
		id: membersSami.id,
		user: membersSami,
		role: "viewer",
		status: "suspended",
		twoStep: true,
		lastActiveAt: ago({ days: 64 }),
	},
];

const membersSeats = { used: membersInitial.length, total: 25 };

const membersPeopleOptions: EntityOption[] = membersInitial
	.filter((member) => member.status === "active")
	.map((member) => ({
		id: member.id,
		name: member.user.name,
		description: member.user.email,
		color: member.user.color,
	}));

const membersGroups: (IdentityGroup & { role: string | null; memberIds: string[] })[] = [
	{
		id: "grp_finance",
		name: "Finance team",
		memberCount: 4,
		role: "finance",
		memberIds: [membersPaul.id, users.lea.id],
	},
	{ id: "grp_support", name: "Support", memberCount: 11, role: "support", memberIds: [users.jean.id, membersNadia.id] },
	{ id: "grp_it", name: "IT admins", memberCount: 2, role: "admin", memberIds: [users.lea.id] },
	{ id: "grp_sales", name: "Sales", memberCount: 7, role: null, memberIds: [] },
];

const membersGroupOptions: EntityOption[] = membersGroups.map((group) => ({
	id: group.id,
	name: group.name,
	description: formatCount(group.memberCount, { one: "person", other: "people" }),
	icon: <TbUsers />,
}));

function membersSearch(options: EntityOption[]) {
	return (query: string) =>
		new Promise<EntityOption[]>((resolve) =>
			setTimeout(() => {
				const needle = query.trim().toLowerCase();
				resolve(
					options.filter(
						(option) =>
							option.name.toLowerCase().includes(needle) ||
							(typeof option.description === "string" && option.description.toLowerCase().includes(needle)),
					),
				);
			}, 250),
		);
}

const membersPermissions = [
	{ key: "customers.view", label: "view customers" },
	{ key: "customers.edit", label: "edit customers" },
	{ key: "invoices.refund", label: "refund invoices" },
	{ key: "payouts.view", label: "see payouts" },
	{ key: "settings.manage", label: "manage settings" },
];

const membersRolePermissions: Record<string, string[]> = {
	owner: membersPermissions.map((permission) => permission.key),
	admin: membersPermissions.map((permission) => permission.key),
	support: ["customers.view", "customers.edit"],
	finance: ["customers.view", "invoices.refund", "payouts.view"],
	viewer: ["customers.view"],
};

function membersRoleLabel(value: string) {
	return membersRoles.find((role) => role.value === value)?.label ?? value;
}

function membersExplain(members: WorkspaceMember[], personId: string, permissionKey: string): AccessExplanation {
	const member = members.find((candidate) => candidate.id === personId);
	if (!member) return { allowed: false, paths: [] };
	const person: AccessStep = { kind: "person", label: member.user.name };
	const permission: AccessStep = { kind: "permission", label: permissionKey };
	const paths: AccessStep[][] = [];

	if (membersRolePermissions[member.role]?.includes(permissionKey)) {
		paths.push([
			person,
			{ kind: "role", label: membersRoleLabel(member.role), detail: "assigned directly" },
			permission,
		]);
	}
	for (const group of membersGroups) {
		if (
			group.role &&
			group.memberIds.includes(personId) &&
			membersRolePermissions[group.role]?.includes(permissionKey)
		) {
			paths.push([
				person,
				{ kind: "group", label: group.name, detail: "from Okta" },
				{ kind: "role", label: membersRoleLabel(group.role) },
				permission,
			]);
		}
	}

	return paths.length > 0
		? { allowed: true, paths }
		: {
				allowed: false,
				paths: [],
				grantingRoles: membersRoles
					.filter((role) => !role.locked && membersRolePermissions[role.value]?.includes(permissionKey))
					.map((role) => role.label),
				grantedBy: members
					.filter((candidate) => candidate.status === "active" && ["owner", "admin"].includes(candidate.role))
					.map((candidate) => candidate.user.name),
			};
}

const membersRoleResources: RoleResource[] = [
	{
		key: "customers",
		label: "Customers",
		permissions: {
			view: [{ key: "customers.view", label: "View customers" }],
			edit: [{ key: "customers.edit", label: "Edit customers" }],
			full: [{ key: "customers.delete", label: "Delete customers" }],
		},
	},
	{
		key: "invoices",
		label: "Invoices",
		permissions: {
			view: [{ key: "invoices.view", label: "View invoices" }],
			edit: [{ key: "invoices.edit", label: "Edit drafts" }],
			full: [
				{ key: "invoices.refund", label: "Refund invoices" },
				{ key: "invoices.void", label: "Void invoices" },
			],
		},
	},
	{
		key: "payouts",
		label: "Payouts",
		permissions: {
			view: [{ key: "payouts.view", label: "See payouts" }],
			full: [{ key: "payouts.manage", label: "Change payout accounts" }],
		},
	},
	{
		key: "settings",
		label: "Workspace settings",
		permissions: {
			view: [{ key: "settings.view", label: "See settings" }],
			full: [{ key: "settings.manage", label: "Change settings" }],
		},
	},
];

const membersBaseRoles = [
	{
		value: "viewer",
		label: "Viewer",
		access: { customers: "view", invoices: "view", payouts: "none", settings: "none" },
	},
	{
		value: "support",
		label: "Support",
		access: { customers: "edit", invoices: "view", payouts: "none", settings: "none" },
	},
	{
		value: "admin",
		label: "Admin",
		access: { customers: "full", invoices: "full", payouts: "full", settings: "full" },
	},
] satisfies { value: string; label: string; access: Record<string, AccessLevel> }[];

const membersFinanceRole: RoleEditorValue = {
	name: "Finance",
	baseRole: "viewer",
	access: { customers: "view", invoices: "full", payouts: "view", settings: "none" },
};

function MembersTableExample() {
	const [members, setMembers] = useState(membersInitial);
	const [state, setState] = useState<DataTableState>({ page: 1, pageSize: 10, selection: [] });
	const [inviteOpened, { open: openInvite, close: closeInvite }] = useDisclosure(false);
	const [removing, setRemoving] = useState<WorkspaceMember | null>(null);
	const [removeOpened, setRemoveOpened] = useState(false);

	const sorted = [...members].sort((first, second) => {
		const sort = state.sort;
		if (!sort) return 0;
		const direction = sort.direction === "asc" ? 1 : -1;
		if (sort.field === "user") return first.user.name.localeCompare(second.user.name) * direction;
		if (sort.field === "role")
			return membersRoleLabel(first.role).localeCompare(membersRoleLabel(second.role)) * direction;
		const firstTime = first.lastActiveAt?.getTime() ?? 0;
		const secondTime = second.lastActiveAt?.getTime() ?? 0;
		return (firstTime - secondTime) * direction;
	});
	const page = sorted.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
	const update = (id: string, change: Partial<WorkspaceMember>) =>
		setMembers((current) => current.map((member) => (member.id === id ? { ...member, ...change } : member)));
	const remove = (ids: string[]) => {
		// The owner and the signed-in person can't be removed this way
		const removable = ids.filter((id) => id !== users.anna.id);
		setMembers((current) => current.filter((member) => !removable.includes(member.id)));
		setState((current) => ({ ...current, selection: [] }));
	};

	return (
		<Stack gap="md">
			<Group justify="space-between" align="flex-end">
				<Box>
					<Title order={5}>Members</Title>
					<Text size="sm" c="dimmed">
						{members.length} of {membersSeats.total} seats used
					</Text>
				</Box>
				<Button leftSection={<TbPlus />} onClick={openInvite}>
					Invite members
				</Button>
			</Group>
			<MembersTable
				members={page}
				total={members.length}
				roles={membersRoles}
				state={state}
				onStateChange={setState}
				currentUserId={users.anna.id}
				onRoleChange={(member, role) => update(member.id, { role })}
				onResendInvite={() => {}}
				onRevokeInvite={(member) => remove([member.id])}
				onResetTwoStep={(member) => update(member.id, { twoStep: false })}
				onRemoveRequest={(member) => {
					setRemoving(member);
					setRemoveOpened(true);
				}}
				onBulkRemove={remove}
			/>
			<Modal
				opened={inviteOpened}
				onClose={closeInvite}
				centered
				title={
					<Text span fw={600} size="lg">
						Invite members
					</Text>
				}
			>
				<InviteMembers
					roles={membersRoles}
					defaultRole="support"
					seats={{ used: members.length, total: membersSeats.total }}
					existingEmails={members.map((member) => member.user.email)}
					onCancel={closeInvite}
					onSubmit={({ emails, role }) => {
						setMembers((current) => [
							...current,
							...emails.map<WorkspaceMember>((email) => ({
								id: `usr_${email}`,
								user: { name: email.split("@")[0], email },
								role,
								status: "invited",
								twoStep: false,
								lastActiveAt: null,
							})),
						]);
						closeInvite();
					}}
				/>
			</Modal>
			{removing && (
				<RemoveMember
					member={removing.user}
					openWork={
						removing.id === users.jean.id
							? [
									{ id: "claims", count: 7, noun: { one: "open claim", other: "open claims" } },
									{ id: "tickets", count: 3, noun: { one: "support ticket", other: "support tickets" } },
								]
							: [{ id: "invoices", count: 14, noun: { one: "draft invoice", other: "draft invoices" } }]
					}
					searchPeople={membersSearch(membersPeopleOptions.filter((option) => option.id !== removing.id))}
					defaultAssignee={membersPeopleOptions.find((option) => option.id === users.lea.id) ?? null}
					opened={removeOpened}
					onClose={() => setRemoveOpened(false)}
					onRemove={() => remove([removing.id])}
				/>
			)}
		</Stack>
	);
}

function InviteMembersExample() {
	return (
		<Panel title="Invite members">
			<InviteMembers
				roles={membersRoles}
				defaultRole="support"
				seats={membersSeats}
				existingEmails={membersInitial.map((member) => member.user.email)}
				defaultEmails={["camille@company.com", "marc@company"]}
				onSubmit={() => {}}
			/>
		</Panel>
	);
}

function RemoveMemberExample() {
	const [opened, setOpened] = useState(false);
	const [removed, setRemoved] = useState(false);

	return (
		<Panel
			title={users.jean.name}
			description={`Support · ${users.jean.email}`}
			actions={
				removed ? undefined : (
					<Button size="xs" variant="light" color="red" leftSection={<TbUserMinus />} onClick={() => setOpened(true)}>
						Remove from workspace
					</Button>
				)
			}
		>
			{removed ? (
				<Text size="sm" c="dimmed">
					Removed. Their claims and tickets now belong to {users.lea.name}.
				</Text>
			) : (
				<Text size="sm">7 open claims and 3 support tickets are assigned to them.</Text>
			)}
			<RemoveMember
				member={users.jean}
				openWork={[
					{ id: "claims", count: 7, noun: { one: "open claim", other: "open claims" } },
					{ id: "tickets", count: 3, noun: { one: "support ticket", other: "support tickets" } },
				]}
				searchPeople={membersSearch(membersPeopleOptions.filter((option) => option.id !== users.jean.id))}
				defaultAssignee={membersPeopleOptions.find((option) => option.id === users.lea.id) ?? null}
				opened={opened}
				onClose={() => setOpened(false)}
				onRemove={() =>
					new Promise<void>((resolve) =>
						setTimeout(() => {
							setRemoved(true);
							resolve();
						}, 600),
					)
				}
			/>
		</Panel>
	);
}

function RoleEditorExample() {
	const [saved, setSaved] = useState(membersFinanceRole);
	// One change already made: Finance can also manage payout accounts
	const [value, setValue] = useState<RoleEditorValue>({
		...membersFinanceRole,
		access: { ...membersFinanceRole.access, payouts: "full" },
	});

	return (
		<Panel
			title="Edit role"
			description={`Changes apply to the ${formatCount(3, { one: "person", other: "people" })} with this role.`}
		>
			<RoleEditor
				value={value}
				onChange={setValue}
				savedValue={saved}
				baseRoles={membersBaseRoles}
				resources={membersRoleResources}
				memberCount={3}
				takenNames={["Owner", "Admin", "Support", "Viewer"]}
				onSave={() => setSaved(value)}
				onDiscard={() => setValue(saved)}
			/>
		</Panel>
	);
}

function GroupRoleMappingExample() {
	const [mappings, setMappings] = useState<GroupMapping[]>(
		membersGroups.flatMap((group) => (group.role ? [{ groupId: group.id, role: group.role }] : [])),
	);
	const [fallbackRole, setFallbackRole] = useState<string | null>("viewer");
	const [syncedAt, setSyncedAt] = useState(() => ago({ minutes: 10 }));

	return (
		<GroupRoleMapping
			provider="Okta"
			syncedAt={syncedAt}
			groups={membersGroups}
			mappings={mappings}
			onMappingsChange={setMappings}
			roles={membersRoles}
			fallbackRole={fallbackRole}
			onFallbackRoleChange={setFallbackRole}
			onSync={() =>
				new Promise<void>((resolve) =>
					setTimeout(() => {
						setSyncedAt(new Date());
						resolve();
					}, 800),
				)
			}
		/>
	);
}

function AccessExplainerExample() {
	const [personId, setPersonId] = useState(users.jean.id);
	const [permissionKey, setPermissionKey] = useState("customers.edit");

	return (
		<Panel title="Check access">
			<AccessExplainer
				people={membersInitial
					.filter((member) => member.status !== "invited")
					.map((member) => ({ id: member.id, ...member.user }))}
				permissions={membersPermissions}
				personId={personId}
				onPersonChange={setPersonId}
				permissionKey={permissionKey}
				onPermissionChange={setPermissionKey}
				explanation={membersExplain(membersInitial, personId, permissionKey)}
			/>
		</Panel>
	);
}

const membersShareInitial: ShareEntry[] = [
	{ id: users.anna.id, kind: "person", name: users.anna.name, detail: users.anna.email, level: "owner" },
	{ id: users.jean.id, kind: "person", name: users.jean.name, detail: users.jean.email, level: "edit" },
	{ id: "grp_finance", kind: "group", name: "Finance team", detail: "4 people", level: "view" },
];

function ShareDialogExample() {
	const [entries, setEntries] = useState(membersShareInitial);
	const [generalAccess, setGeneralAccess] = useState<GeneralAccess>("restricted");
	const [opened, { open, close }] = useDisclosure(false);
	const settings = {
		entries,
		onEntriesChange: setEntries,
		generalAccess,
		onGeneralAccessChange: setGeneralAccess,
		workspaceName: membersWorkspaceName,
		search: membersSearch([...membersPeopleOptions, ...membersGroupOptions]),
	};
	const link = "https://ops.company.com/claims/CLM-298";

	return (
		<Stack gap="md">
			<Paper withBorder p="sm">
				<Group justify="space-between" wrap="nowrap">
					<Box miw={0}>
						<Text size="xs" c="dimmed" ff="monospace">
							CLM-298
						</Text>
						<Text size="sm" fw={600} truncate>
							Broken seal on arrival
						</Text>
					</Box>
					<Button size="xs" variant="default" leftSection={<TbUsers />} onClick={open}>
						Share
					</Button>
				</Group>
			</Paper>
			<Panel title="Share “Broken seal on arrival”" footer={<ShareDialogCopyLink link={link} />}>
				<ShareSettings {...settings} />
			</Panel>
			<ShareDialog recordName="Broken seal on arrival" link={link} opened={opened} onClose={close} {...settings} />
		</Stack>
	);
}

export type SsoProtocol = "saml" | "oidc";

export interface SsoSetupValue {
	protocol: SsoProtocol;
	metadataUrl: string;
	metadataFileName: string | null;
	issuerUrl: string;
	clientId: string;
	clientSecret: string;
	enforced: boolean;
}

export type SsoTestResult =
	| { status: "untested" }
	| { status: "passed"; email: string; at: Date }
	| { status: "failed"; message: string };

interface SsoSetupProps {
	value: SsoSetupValue;
	onChange: (value: SsoSetupValue) => void;
	serviceProvider: { acsUrl: string; entityId: string; redirectUri: string };
	domain: string;
	providerName: string;
	memberCount: number;
	testResult: SsoTestResult;
	onTest: () => Promise<void> | void;
}

function ssoSetupUrlError(value: string) {
	if (value === "") return null;
	try {
		return new URL(value).protocol === "https:" ? null : "Use an https:// address";
	} catch {
		return "Enter the full address, starting with https://";
	}
}

export function SsoSetup({
	value,
	onChange,
	serviceProvider,
	domain,
	providerName,
	memberCount,
	testResult,
	onTest,
}: SsoSetupProps) {
	const [test, testing] = usePendingAction(onTest);
	const [confirmingEnforce, setConfirmingEnforce] = useState(false);
	const update = (changes: Partial<SsoSetupValue>) => onChange({ ...value, ...changes });

	const connected =
		value.protocol === "saml"
			? (value.metadataUrl !== "" && ssoSetupUrlError(value.metadataUrl) === null) || value.metadataFileName !== null
			: ssoSetupUrlError(value.issuerUrl) === null &&
				value.issuerUrl !== "" &&
				value.clientId !== "" &&
				value.clientSecret !== "";
	const passed = testResult.status === "passed";

	return (
		<Panel
			title="Single sign-on"
			description={`Members at ${domain} sign in through ${providerName}.`}
			actions={
				<SegmentedControl
					size="xs"
					aria-label="Protocol"
					value={value.protocol}
					onChange={(protocol) => update({ protocol: protocol as SsoProtocol })}
					data={[
						{ value: "saml", label: "SAML" },
						{ value: "oidc", label: "OpenID Connect" },
					]}
				/>
			}
		>
			<Stack gap="lg">
				<Stack gap="sm">
					<Box>
						<Text size="sm" fw={600}>
							In {providerName}
						</Text>
						<Text size="sm" c="dimmed">
							Create an app for Ops Console and paste these values into it.
						</Text>
					</Box>
					{value.protocol === "saml" ? (
						<>
							<CopyField label="Single sign-on URL" value={serviceProvider.acsUrl} />
							<CopyField label="Audience URI (SP entity ID)" value={serviceProvider.entityId} />
						</>
					) : (
						<CopyField label="Redirect URI" value={serviceProvider.redirectUri} />
					)}
				</Stack>
				<Divider />
				<Stack gap="sm">
					<Text size="sm" fw={600}>
						From {providerName}
					</Text>
					{value.protocol === "saml" ? (
						<>
							<TextInput
								label="Metadata URL"
								placeholder="https://company.okta.com/app/…/sso/saml/metadata"
								value={value.metadataUrl}
								onChange={(event) => update({ metadataUrl: event.currentTarget.value, metadataFileName: null })}
								error={ssoSetupUrlError(value.metadataUrl)}
							/>
							<Group gap="sm">
								<Text size="sm" c="dimmed">
									or
								</Text>
								<FileButton
									accept=".xml,application/xml,text/xml"
									onChange={(file) => file && update({ metadataFileName: file.name, metadataUrl: "" })}
								>
									{(props) => (
										<Button variant="default" size="xs" leftSection={<TbUpload />} {...props}>
											Upload metadata XML
										</Button>
									)}
								</FileButton>
								{value.metadataFileName && (
									<Text size="sm" ff="monospace">
										{value.metadataFileName}
									</Text>
								)}
							</Group>
						</>
					) : (
						<>
							<TextInput
								label="Issuer URL"
								placeholder="https://company.okta.com"
								value={value.issuerUrl}
								onChange={(event) => update({ issuerUrl: event.currentTarget.value })}
								error={ssoSetupUrlError(value.issuerUrl)}
							/>
							<TextInput
								label="Client ID"
								value={value.clientId}
								onChange={(event) => update({ clientId: event.currentTarget.value })}
								styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
							/>
							<PasswordInput
								label="Client secret"
								value={value.clientSecret}
								onChange={(event) => update({ clientSecret: event.currentTarget.value })}
							/>
						</>
					)}
				</Stack>
				<Divider />
				<Stack gap="sm">
					<Group justify="space-between" gap="sm">
						<Box>
							<Text size="sm" fw={600}>
								Test sign-in
							</Text>
							<Text size="sm" c="dimmed">
								Opens {providerName} in a new tab. Nothing changes for members yet.
							</Text>
						</Box>
						<Button variant="default" onClick={() => void test()} loading={testing} disabled={!connected}>
							Test sign-in
						</Button>
					</Group>
					{testResult.status === "passed" && (
						<Alert color="green" icon={<TbShieldCheck />} p="sm">
							Signed in as {testResult.email}, <RelativeTime value={testResult.at} />.
						</Alert>
					)}
					{testResult.status === "failed" && (
						<Alert color="red" icon={<TbAlertTriangle />} p="sm">
							{testResult.message}
						</Alert>
					)}
				</Stack>
				<Divider />
				<Switch
					label={`Require single sign-on for ${domain}`}
					description={
						passed
							? "Members can no longer sign in with a password. Owners keep a password, so you can't be locked out."
							: "Test a sign-in first."
					}
					disabled={!passed}
					checked={value.enforced}
					onChange={(event) => {
						if (event.currentTarget.checked) setConfirmingEnforce(true);
						else update({ enforced: false });
					}}
				/>
			</Stack>
			<ConfirmAction
				opened={confirmingEnforce}
				onClose={() => setConfirmingEnforce(false)}
				action="Require"
				title="Require single sign-on?"
				confirmLabel="Require single sign-on"
				consequence={`${formatCount(memberCount, { one: "member", other: "members" })} at ${domain} will sign in through ${providerName} from their next sign-in.`}
				onConfirm={() => update({ enforced: true })}
			/>
		</Panel>
	);
}

export interface DnsRecord {
	id: string;
	type: "TXT" | "CNAME" | "MX";
	host: string;
	value: string;
	status: "verified" | "pending" | "mismatch";
	found?: string;
}

export const dnsRecordStatus = defineStatusMap({
	verified: ["Verified", "success"],
	pending: ["Not found yet", "warning"],
	mismatch: ["Wrong value", "danger"],
});

interface DomainVerificationProps {
	domain: string;
	records: DnsRecord[];
	checkedAt: Date | null;
	onCheck: () => Promise<void> | void;
}

export function DomainVerification({ domain, records, checkedAt, onCheck }: DomainVerificationProps) {
	const [check, checking] = usePendingAction(onCheck);
	const verified = records.every((record) => record.status === "verified");

	return (
		<Panel
			title={
				<Text span ff="monospace" inherit>
					{domain}
				</Text>
			}
			description={
				verified
					? "Verified. Members with this email domain can sign in with single sign-on."
					: "Add these records at your DNS provider. Changes can take up to 48 hours to show."
			}
			actions={
				<Button variant="default" size="xs" leftSection={<TbRefresh />} loading={checking} onClick={() => check()}>
					Check again
				</Button>
			}
			flush
			footer={
				checkedAt && (
					<Text size="xs" c="dimmed">
						Checked <RelativeTime value={checkedAt} />
					</Text>
				)
			}
		>
			<Table.ScrollContainer minWidth={420}>
				<Table verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={72}>Type</Table.Th>
							<Table.Th>Host and value</Table.Th>
							<Table.Th w={130}>Status</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{records.map((record) => (
							<Table.Tr key={record.id}>
								<Table.Td>
									<Text size="sm" ff="monospace">
										{record.type}
									</Text>
								</Table.Td>
								<Table.Td maw={0}>
									<Stack gap={2} align="flex-start">
										<CopyableId value={record.host} />
										<CopyField
											value={record.value}
											aria-label={`${record.type} value for ${record.host}`}
											size="xs"
											w="100%"
										/>
										{record.status === "mismatch" && record.found && (
											<Text size="xs" c="var(--mantine-color-red-text)">
												Found {record.found}
											</Text>
										)}
									</Stack>
								</Table.Td>
								<Table.Td style={{ whiteSpace: "nowrap" }}>
									<StatusBadge value={record.status} tones={dnsRecordStatus} />
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

export interface IpAllowlistEntry {
	id: string;
	range: string;
	label: string;
}

export function parseIpv4Range(text: string): [number, number] | null {
	const match = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(?:\/(\d{1,2}))?$/.exec(text.trim());
	if (!match) return null;
	const octets = match.slice(1, 5).map(Number);
	const prefix = match[5] === undefined ? 32 : Number(match[5]);
	if (octets.some((octet) => octet > 255) || prefix > 32) return null;
	const address = octets.reduce((total, octet) => total * 256 + octet, 0);
	const size = 2 ** (32 - prefix);
	return [address - (address % size), prefix];
}

export function ipv4RangeContains(range: string, address: string) {
	const network = parseIpv4Range(range);
	const host = parseIpv4Range(address);
	if (!network || !host || host[1] !== 32) return false;
	const size = 2 ** (32 - network[1]);
	return host[0] >= network[0] && host[0] < network[0] + size;
}

interface IpAllowlistProps {
	entries: IpAllowlistEntry[];
	enabled: boolean;
	currentAddress: string;
	onAdd: (entry: { range: string; label: string }) => void;
	onRemove: (id: string) => void;
	onEnabledChange: (enabled: boolean) => void;
}

export function IpAllowlist({ entries, enabled, currentAddress, onAdd, onRemove, onEnabledChange }: IpAllowlistProps) {
	const [range, setRange] = useState("");
	const [label, setLabel] = useState("");
	const [error, setError] = useState<string | null>(null);

	const covering = entries.filter((entry) => ipv4RangeContains(entry.range, currentAddress));
	const covered = covering.length > 0;

	const add = (nextRange = range, nextLabel = label) => {
		const parsed = parseIpv4Range(nextRange);
		if (!parsed) {
			setError("Enter an IPv4 address like 203.0.113.7 or a range like 203.0.113.0/24");
			return;
		}
		if (entries.some((entry) => entry.range === nextRange.trim())) {
			setError("That range is already on the list.");
			return;
		}
		onAdd({ range: nextRange.trim(), label: nextLabel.trim() });
		setRange("");
		setLabel("");
		setError(null);
	};

	return (
		<Panel title="IP allowlist" description="Only these addresses can sign in or use the API.">
			<Stack gap="md">
				<Switch
					label="Only allow these addresses"
					description={covered ? undefined : "Add your own address first, or you'd be locked out."}
					checked={enabled}
					disabled={!covered && !enabled}
					onChange={(event) => onEnabledChange(event.currentTarget.checked)}
				/>
				{!covered && (
					<Alert color={enabled ? "red" : "orange"} icon={<TbAlertTriangle />} p="sm">
						<Group justify="space-between" gap="sm">
							<Text size="sm">
								Your address,{" "}
								<Text span ff="monospace" inherit>
									{currentAddress}
								</Text>
								, isn't on the list.
							</Text>
							<Button size="xs" variant="default" onClick={() => add(currentAddress, "My address")}>
								Add my address
							</Button>
						</Group>
					</Alert>
				)}
				<Table verticalSpacing="xs">
					<Table.Tbody>
						{entries.map((entry) => {
							const onlyCover = enabled && covering.length === 1 && covering[0].id === entry.id;
							return (
								<Table.Tr key={entry.id}>
									<Table.Td>
										<Text size="sm" ff="monospace">
											{entry.range}
										</Text>
									</Table.Td>
									<Table.Td>
										<Text size="sm" c={entry.label ? undefined : "dimmed"}>
											{entry.label || emptyValue}
										</Text>
										{covering.some((item) => item.id === entry.id) && (
											<Text size="xs" c="dimmed">
												Includes your address
											</Text>
										)}
									</Table.Td>
									<Table.Td ta="right" w={48}>
										<Tooltip label={onlyCover ? "Removing it would lock you out" : `Remove ${entry.range}`} withArrow>
											<ActionIcon
												variant="subtle"
												color="gray"
												aria-label={`Remove ${entry.range}`}
												disabled={onlyCover}
												onClick={() => onRemove(entry.id)}
											>
												<TbTrash />
											</ActionIcon>
										</Tooltip>
									</Table.Td>
								</Table.Tr>
							);
						})}
					</Table.Tbody>
				</Table>
				<Group align="flex-start" gap="sm" wrap="nowrap">
					<TextInput
						label="Address or range"
						placeholder="203.0.113.0/24"
						value={range}
						onChange={(event) => {
							setRange(event.currentTarget.value);
							setError(null);
						}}
						onKeyDown={(event) => event.key === "Enter" && add()}
						error={error}
						styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
						style={{ flex: 1 }}
					/>
					<TextInput
						label="Label"
						placeholder="Office"
						value={label}
						onChange={(event) => setLabel(event.currentTarget.value)}
						onKeyDown={(event) => event.key === "Enter" && add()}
						style={{ flex: 1 }}
					/>
					<Button variant="default" mt={25} onClick={() => add()} disabled={range.trim() === ""}>
						Add
					</Button>
				</Group>
			</Stack>
		</Panel>
	);
}

function SsoSetupDemo() {
	const [value, setValue] = useState<SsoSetupValue>({
		protocol: "saml",
		metadataUrl: "https://company.okta.com/app/exk8f2kq9lm/sso/saml/metadata",
		metadataFileName: null,
		issuerUrl: "",
		clientId: "",
		clientSecret: "",
		enforced: false,
	});
	const [testResult, setTestResult] = useState<SsoTestResult>({ status: "untested" });

	return (
		<SsoSetup
			value={value}
			onChange={setValue}
			serviceProvider={{
				acsUrl: "https://console.company.com/auth/saml/acs",
				entityId: "https://console.company.com/auth/saml/metadata",
				redirectUri: "https://console.company.com/auth/oidc/callback",
			}}
			domain="company.com"
			providerName="Okta"
			memberCount={18}
			testResult={testResult}
			onTest={async () => {
				await wait(900);
				setTestResult(
					value.protocol === "saml"
						? { status: "passed", email: users.anna.email, at: new Date() }
						: {
								status: "failed",
								message: "Okta refused the redirect URI. Add it to the app's sign-in redirect URIs, then test again.",
							},
				);
			}}
		/>
	);
}

function DomainVerificationDemo() {
	const [records, setRecords] = useState<DnsRecord[]>([
		{
			id: "dns_1",
			type: "TXT",
			host: "_ops-console",
			value: "ops-console-verification=8f2Kq9LmZ3wX",
			status: "verified",
		},
		{ id: "dns_2", type: "CNAME", host: "em4821", value: "u4821.wl.sendgrid.net", status: "verified" },
		{
			id: "dns_3",
			type: "CNAME",
			host: "s1._domainkey",
			value: "s1.domainkey.u4821.wl.sendgrid.net",
			status: "pending",
		},
		{
			id: "dns_4",
			type: "TXT",
			host: "@",
			value: "v=spf1 include:sendgrid.net include:_spf.google.com ~all",
			status: "mismatch",
			found: "v=spf1 include:_spf.google.com ~all",
		},
	]);
	const [checkedAt, setCheckedAt] = useState<Date | null>(ago({ minutes: 12 }));

	return (
		<DomainVerification
			domain="company.com"
			records={records}
			checkedAt={checkedAt}
			onCheck={async () => {
				await wait(900);
				setRecords((current) =>
					current.map((record) => (record.status === "pending" ? { ...record, status: "verified" } : record)),
				);
				setCheckedAt(new Date());
			}}
		/>
	);
}

function IpAllowlistDemo() {
	const [entries, setEntries] = useState<IpAllowlistEntry[]>([
		{ id: "ip_1", range: "10.0.0.0/16", label: "Office VPN" },
		{ id: "ip_2", range: "203.0.113.0/24", label: "Data warehouse" },
	]);
	const [enabled, setEnabled] = useState(false);

	return (
		<IpAllowlist
			entries={entries}
			enabled={enabled}
			currentAddress="188.81.47.201"
			onAdd={(entry) => setEntries((current) => [...current, { id: `ip_${Date.now()}`, ...entry }])}
			onRemove={(id) => setEntries((current) => current.filter((entry) => entry.id !== id))}
			onEnabledChange={setEnabled}
		/>
	);
}

export type PermissionLevel = "allow" | "deny" | "approval";

export interface PermissionMatrixRole {
	id: string;
	name: string;
	builtIn?: boolean;
}

export interface PermissionMatrixPermission {
	key: string;
	group: string;
	label: string;
	description?: string;
}

export type PermissionMatrixValue = Record<string, Record<string, PermissionLevel>>;

export interface PermissionMatrixProps {
	roles: PermissionMatrixRole[];
	permissions: PermissionMatrixPermission[];
	value: PermissionMatrixValue;
	onChange?: (value: PermissionMatrixValue) => void;
	readOnly?: boolean;
	savedValue?: PermissionMatrixValue;
	impactOf?: (roleId: string, permissionKey: string) => number;
}

const permissionMatrixNext: Record<PermissionLevel, PermissionLevel> = {
	deny: "allow",
	allow: "approval",
	approval: "deny",
};

const permissionMatrixLevelLabels: Record<PermissionLevel, string> = {
	allow: "allowed",
	approval: "allowed with approval",
	deny: "not allowed",
};

export function permissionMatrixChanges(value: PermissionMatrixValue, savedValue: PermissionMatrixValue) {
	const roleIds = new Set([...Object.keys(value), ...Object.keys(savedValue)]);
	return [...roleIds].flatMap((roleId) => {
		const keys = new Set([...Object.keys(value[roleId] ?? {}), ...Object.keys(savedValue[roleId] ?? {})]);
		return [...keys]
			.filter(
				(permissionKey) =>
					(value[roleId]?.[permissionKey] ?? "deny") !== (savedValue[roleId]?.[permissionKey] ?? "deny"),
			)
			.map((permissionKey) => ({ roleId, permissionKey }));
	});
}

export function PermissionMatrix({
	roles,
	permissions,
	value,
	onChange,
	readOnly = false,
	savedValue,
	impactOf,
}: PermissionMatrixProps) {
	const groups = [...new Set(permissions.map((permission) => permission.group))];
	const changes = savedValue ? permissionMatrixChanges(value, savedValue) : [];
	const impact = impactOf
		? changes.reduce((total, change) => total + impactOf(change.roleId, change.permissionKey), 0)
		: 0;

	const cycle = (roleId: string, permissionKey: string) => {
		const current = value[roleId]?.[permissionKey] ?? "deny";
		onChange?.({ ...value, [roleId]: { ...value[roleId], [permissionKey]: permissionMatrixNext[current] } });
	};

	return (
		<Stack gap="sm">
			<Table.ScrollContainer minWidth={140 + roles.length * 80}>
				<Table verticalSpacing={6}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Permission</Table.Th>
							{roles.map((role) => (
								<Table.Th key={role.id} ta="center">
									{role.builtIn ? (
										<Tooltip label="Built-in role, can't be edited" withArrow>
											<Group gap={4} justify="center" wrap="nowrap">
												<TbLock aria-hidden />
												{role.name}
											</Group>
										</Tooltip>
									) : (
										role.name
									)}
								</Table.Th>
							))}
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{groups.map((group) => (
							<Fragment key={group}>
								<Table.Tr bg="var(--mantine-color-default-hover)">
									<Table.Td colSpan={roles.length + 1} fw={600} fz="sm">
										{group}
									</Table.Td>
								</Table.Tr>
								{permissions
									.filter((permission) => permission.group === group)
									.map((permission) => (
										<Table.Tr key={permission.key}>
											<Table.Td>
												<Tooltip label={permission.description} disabled={!permission.description} withArrow>
													<Text span size="sm">
														{permission.label}
													</Text>
												</Tooltip>
											</Table.Td>
											{roles.map((role) => {
												const level = value[role.id]?.[permission.key] ?? "deny";
												const changed = changes.some(
													(change) => change.roleId === role.id && change.permissionKey === permission.key,
												);
												const people = impactOf?.(role.id, permission.key);
												return (
													<Table.Td key={role.id}>
														<Group justify="center">
															<Tooltip
																label={`Affects ${formatCount(people ?? 0, { one: "person", other: "people" })}`}
																disabled={!changed || people === undefined}
																withArrow
															>
																<Indicator disabled={!changed} size={7} color="orange" offset={2}>
																	<Checkbox
																		aria-label={`${role.name}, ${permission.label}: ${permissionMatrixLevelLabels[level]}`}
																		checked={level !== "deny"}
																		indeterminate={level === "approval"}
																		disabled={readOnly || role.builtIn}
																		onChange={() => cycle(role.id, permission.key)}
																	/>
																</Indicator>
															</Tooltip>
														</Group>
													</Table.Td>
												);
											})}
										</Table.Tr>
									))}
							</Fragment>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
			<Group gap="lg" justify="space-between" wrap="wrap">
				<Group gap="md" aria-hidden>
					<Checkbox size="xs" checked readOnly label="Allowed" tabIndex={-1} />
					<Checkbox size="xs" checked indeterminate readOnly label="Allowed with approval" tabIndex={-1} />
					<Checkbox size="xs" checked={false} readOnly label="Not allowed" tabIndex={-1} />
				</Group>
				{changes.length > 0 && impactOf && (
					<Text size="sm" c="dimmed">
						{formatCount(changes.length, { one: "change affects", other: "changes affect" })}{" "}
						{formatCount(impact, { one: "person", other: "people" })}
					</Text>
				)}
			</Group>
		</Stack>
	);
}

const permissionMatrixRoles: PermissionMatrixRole[] = [
	{ id: "viewer", name: "Viewer", builtIn: true },
	{ id: "support", name: "Support" },
	{ id: "finance", name: "Finance" },
	{ id: "admin", name: "Admin", builtIn: true },
];

const permissionMatrixMembers: Record<string, number> = { viewer: 12, support: 6, finance: 3, admin: 2 };

const permissionMatrixPermissions: PermissionMatrixPermission[] = [
	{ key: "customers.view", group: "Customers", label: "View", description: "See customers and their contacts" },
	{ key: "customers.edit", group: "Customers", label: "Edit", description: "Change customer details and owners" },
	{ key: "invoices.refund", group: "Invoices", label: "Refund", description: "Refund part or all of a paid invoice" },
	{
		key: "users.impersonate",
		group: "Users",
		label: "Impersonate",
		description: "Sign in as a customer's user, read-only by default",
	},
	{ key: "settings.manage", group: "Settings", label: "Manage", description: "Change workspace settings and roles" },
];

const permissionMatrixSaved: PermissionMatrixValue = {
	viewer: { "customers.view": "allow" },
	support: { "customers.view": "allow", "customers.edit": "allow", "users.impersonate": "approval" },
	finance: { "customers.view": "allow", "invoices.refund": "allow" },
	admin: {
		"customers.view": "allow",
		"customers.edit": "allow",
		"invoices.refund": "allow",
		"users.impersonate": "allow",
		"settings.manage": "allow",
	},
};

function PermissionMatrixExample() {
	const [saved, setSaved] = useState(permissionMatrixSaved);
	// One edit already made: Support can refund, with approval
	const [value, setValue] = useState<PermissionMatrixValue>({
		...permissionMatrixSaved,
		support: { ...permissionMatrixSaved.support, "invoices.refund": "approval" },
	});
	const changes = permissionMatrixChanges(value, saved);

	return (
		<Panel title="Roles" flush>
			<Box p="md">
				<PermissionMatrix
					roles={permissionMatrixRoles}
					permissions={permissionMatrixPermissions}
					value={value}
					onChange={setValue}
					savedValue={saved}
					impactOf={(roleId) => permissionMatrixMembers[roleId] ?? 0}
				/>
			</Box>
			<SaveBar
				dirty={changes.length > 0}
				changesCount={changes.length}
				onDiscard={() => setValue(saved)}
				onSave={() => setSaved(value)}
				saveLabel="Save roles"
			/>
		</Panel>
	);
}

export function AuthArea() {
	return (
		<PreviewGrid>
			<PreviewItem>
				<AccessFrame>
					<AccessSignInDemo />
				</AccessFrame>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<SignUpCard
						defaultEmail="camille@nova.fr"
						onGoogle={() => {}}
						onSignIn={() => {}}
						onSubmit={() => wait(600)}
					/>
				</AccessFrame>
			</PreviewItem>
			<PreviewItem span="full">
				<SignInSplit
					brand={<AccessBrand />}
					onSso={() => {}}
					onForgotPassword={() => {}}
					onSubmit={() => wait(500)}
					aside={
						<Stack gap="md">
							<Box>
								<Text fw={600}>{app.name}</Text>
								<Text size="sm" c="dimmed" mt={4}>
									Customers, billing and review queues for Acme's support, ops and finance teams.
								</Text>
							</Box>
							<Alert variant="light" color="orange" icon={<TbTool />} title="Maintenance on Sunday">
								From 02:00 to 03:00 UTC. Imports and exports pause during the window.
							</Alert>
						</Stack>
					}
				/>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<AccessMfaDemo />
				</AccessFrame>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<AccessCheckEmailDemo />
				</AccessFrame>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<ForgotPasswordCard defaultEmail={users.anna.email} onSubmit={() => wait(500)} onBack={() => {}} />
				</AccessFrame>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<ResetPasswordCard email={users.anna.email} onSubmit={() => wait(500)} onBack={() => {}} />
				</AccessFrame>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<WorkspacePicker
						email={users.anna.email}
						workspaces={accessWorkspaces}
						invitations={accessInvitations}
						onSelect={() => {}}
						onAcceptInvitation={() => wait(500)}
						onCreate={() => {}}
						onSwitchAccount={() => {}}
					/>
				</AccessFrame>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<InviteAcceptCard
						invitedBy={users.lea}
						workspaceName="Acme Ops"
						invitedAs="Member"
						email={users.jean.email}
						onAccept={() => wait(500)}
						onDecline={() => {}}
						onSwitchAccount={() => {}}
					/>
				</AccessFrame>
			</PreviewItem>
			<PreviewItem span="half">
				<Center mih={600} p="xl" h="100%" style={frameStyle}>
					<AccessReauthDemo />
				</Center>
			</PreviewItem>
			<PreviewItem>
				<AccessFrame>
					<SessionExpiredCard
						email={users.anna.email}
						kept="Your unsaved changes to Acme Logistics are kept."
						onSso={() => wait(500)}
						onSignInAsSomeoneElse={() => {}}
					/>
				</AccessFrame>
			</PreviewItem>
			<PreviewItem span="half">
				<Center mih={600} p="xl" h="100%" style={frameStyle}>
					<EmptyState
						icon={<TbLock />}
						withIndicatorBackground
						title="You can't see payouts"
						description={
							<>
								Payouts need the <Code>payouts.view</Code> permission. {users.lea.name}, an admin, can grant it.
							</>
						}
					>
						<EmptyState.Actions>
							<Button>Ask {users.lea.name} for access</Button>
							<Button variant="default">Go to overview</Button>
						</EmptyState.Actions>
					</EmptyState>
				</Center>
			</PreviewItem>
			<PreviewItem span="full">
				<MembersTableExample />
			</PreviewItem>
			<PreviewItem span="half">
				<InviteMembersExample />
			</PreviewItem>
			<PreviewItem span="half">
				<RemoveMemberExample />
			</PreviewItem>
			<PreviewItem span="half">
				<RoleEditorExample />
			</PreviewItem>
			<PreviewItem span="half">
				<PermissionMatrixExample />
			</PreviewItem>
			<PreviewItem span="half">
				<GroupRoleMappingExample />
			</PreviewItem>
			<PreviewItem span="half">
				<AccessExplainerExample />
			</PreviewItem>
			<PreviewItem span="half">
				<ShareDialogExample />
			</PreviewItem>
			<PreviewItem span="half">
				<SsoSetupDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<Stack gap="xl">
					<DomainVerificationDemo />
					<IpAllowlistDemo />
				</Stack>
			</PreviewItem>
		</PreviewGrid>
	);
}

export interface ProfileSectionValue {
	firstName: string;
	lastName: string;
	email: string;
	avatarUrl?: string | null;
	pendingEmail?: string | null;
}

export interface ProfileSectionProps {
	profile: ProfileSectionValue;
	onSaveName: (name: { firstName: string; lastName: string }) => void | Promise<void>;
	onPhotoChange: (file: File | null) => void;
	onEmailChange: (email: string) => void | Promise<void>;
	onResendConfirmation: () => void;
	onCancelEmailChange: () => void;
}

const profileSectionEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProfileSection({
	profile,
	onSaveName,
	onPhotoChange,
	onEmailChange,
	onResendConfirmation,
	onCancelEmailChange,
}: ProfileSectionProps) {
	const [name, setName] = useState({ firstName: profile.firstName, lastName: profile.lastName });
	const [savedName, setSavedName] = useState({ firstName: profile.firstName, lastName: profile.lastName });
	// A new saved name from the parent replaces the draft
	if (profile.firstName !== savedName.firstName || profile.lastName !== savedName.lastName) {
		const next = { firstName: profile.firstName, lastName: profile.lastName };
		setSavedName(next);
		setName(next);
	}
	const [savingName, setSavingName] = useState(false);
	const [editingEmail, setEditingEmail] = useState(false);
	const [newEmail, setNewEmail] = useState("");
	const [emailError, setEmailError] = useState<string | null>(null);
	const [sendingEmail, setSendingEmail] = useState(false);

	const dirty = name.firstName !== profile.firstName || name.lastName !== profile.lastName;
	useUnsavedChangesGuard(dirty);
	const fullName = `${profile.firstName} ${profile.lastName}`.trim();

	const saveName = async () => {
		setSavingName(true);
		try {
			await onSaveName({ firstName: name.firstName.trim(), lastName: name.lastName.trim() });
		} finally {
			setSavingName(false);
		}
	};

	const sendConfirmation = async () => {
		const email = newEmail.trim();
		if (!profileSectionEmailPattern.test(email)) {
			setEmailError("Enter an email address, such as name@company.com.");
			return;
		}
		if (email.toLowerCase() === profile.email.toLowerCase()) {
			setEmailError("That's already your email.");
			return;
		}
		setSendingEmail(true);
		try {
			await onEmailChange(email);
			setEditingEmail(false);
			setNewEmail("");
		} finally {
			setSendingEmail(false);
		}
	};

	return (
		<Panel
			title="Profile"
			footer={
				dirty && (
					<Group justify="flex-end" gap="sm">
						<Button variant="default" onClick={() => setName(savedName)} disabled={savingName}>
							Discard
						</Button>
						<Button onClick={saveName} loading={savingName} disabled={!name.firstName.trim()}>
							Save name
						</Button>
					</Group>
				)
			}
		>
			<Stack gap="lg">
				<Group gap="md" wrap="nowrap">
					<Avatar src={profile.avatarUrl ?? undefined} name={fullName} color="initials" size={64} />
					<Stack gap={6}>
						<Group gap="xs">
							<FileButton onChange={onPhotoChange} accept="image/png,image/jpeg">
								{(props) => (
									<Button {...props} variant="default" size="xs" leftSection={<TbUpload />}>
										Upload photo
									</Button>
								)}
							</FileButton>
							{profile.avatarUrl && (
								<Button variant="subtle" color="gray" size="xs" onClick={() => onPhotoChange(null)}>
									Remove
								</Button>
							)}
						</Group>
						<Text size="xs" c="dimmed">
							PNG or JPG, at least 256 × 256 px.
						</Text>
					</Stack>
				</Group>
				<SimpleGrid cols={2}>
					<TextInput
						label="First name"
						value={name.firstName}
						onChange={(event) => setName({ ...name, firstName: event.currentTarget.value })}
						error={name.firstName.trim() ? undefined : "Enter your first name."}
					/>
					<TextInput
						label="Last name"
						value={name.lastName}
						onChange={(event) => setName({ ...name, lastName: event.currentTarget.value })}
					/>
				</SimpleGrid>
				<Divider />
				{profile.pendingEmail ? (
					<Stack gap="sm">
						<TextInput label="Email" value={profile.email} readOnly />
						<Alert color="blue" icon={<TbMail />} p="sm">
							<Text size="sm">
								We sent a confirmation link to{" "}
								<Text span inherit fw={600}>
									{profile.pendingEmail}
								</Text>
								. Your email changes when you open it.
							</Text>
							<Group gap="md" mt={6}>
								<Anchor component="button" size="sm" onClick={onResendConfirmation}>
									Resend the link
								</Anchor>
								<Anchor component="button" size="sm" onClick={onCancelEmailChange}>
									Cancel the change
								</Anchor>
							</Group>
						</Alert>
					</Stack>
				) : editingEmail ? (
					<Stack gap="sm">
						<TextInput
							label="New email"
							description={`Your current email is ${profile.email}. We'll send a link to the new one to confirm it.`}
							value={newEmail}
							onChange={(event) => {
								setNewEmail(event.currentTarget.value);
								setEmailError(null);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") sendConfirmation();
							}}
							error={emailError}
							type="email"
							data-autofocus
						/>
						<Group gap="sm">
							<Button size="xs" onClick={sendConfirmation} loading={sendingEmail}>
								Send confirmation link
							</Button>
							<Button
								size="xs"
								variant="default"
								onClick={() => {
									setEditingEmail(false);
									setNewEmail("");
									setEmailError(null);
								}}
								disabled={sendingEmail}
							>
								Cancel
							</Button>
						</Group>
					</Stack>
				) : (
					<Group justify="space-between" wrap="nowrap" gap="sm">
						<Box miw={0}>
							<Text size="sm" fw={500}>
								Email
							</Text>
							<Text size="sm" c="dimmed" truncate>
								{profile.email}
							</Text>
						</Box>
						<Button variant="default" size="xs" onClick={() => setEditingEmail(true)}>
							Change email
						</Button>
					</Group>
				)}
			</Stack>
		</Panel>
	);
}

export interface SessionsListItem {
	id: string;
	device: string;
	kind: "desktop" | "laptop" | "phone" | "tablet";
	browser: string;
	location: string;
	lastActive: Date;
	current?: boolean;
}

export interface SessionsListProps {
	sessions: SessionsListItem[];
	onSignOut: (id: string) => void | Promise<void>;
	onSignOutOthers: () => void | Promise<void>;
}

const sessionsListIcons = {
	desktop: <TbDeviceDesktop />,
	laptop: <TbDeviceLaptop />,
	phone: <TbDeviceMobile />,
	tablet: <TbDeviceTablet />,
} as const;

export function SessionsList({ sessions, onSignOut, onSignOutOthers }: SessionsListProps) {
	const [signingOut, setSigningOut] = useState<string | null>(null);
	const others = sessions.filter((session) => !session.current).length;

	const signOut = async (id: string) => {
		setSigningOut(id);
		try {
			await onSignOut(id);
		} finally {
			setSigningOut(null);
		}
	};

	return (
		<Panel
			title="Where you're signed in"
			description="Sign out of any device you don't recognise."
			flush
			actions={
				<ConfirmAction
					action="Sign out of"
					noun={{ one: "other device", other: "other devices" }}
					count={others}
					consequence="They'll need to sign in again. This device stays signed in."
					onConfirm={onSignOutOthers}
					trigger={(open) => (
						<Button variant="default" size="xs" onClick={open} disabled={others === 0}>
							Sign out everywhere else
						</Button>
					)}
				/>
			}
		>
			{sessions.map((session, position) => (
				<Fragment key={session.id}>
					{position > 0 && <Divider />}
					<Group justify="space-between" wrap="nowrap" gap="sm" px="md" py="sm">
						<Group gap="sm" wrap="nowrap" miw={0}>
							<ThemeIcon variant="light" color="gray" size="lg" aria-hidden>
								{sessionsListIcons[session.kind]}
							</ThemeIcon>
							<Box miw={0}>
								<Group gap="xs" wrap="nowrap">
									<Text size="sm" fw={500} truncate>
										{session.device} · {session.browser}
									</Text>
									{session.current && (
										<Badge size="xs" variant="light" style={{ flexShrink: 0 }}>
											This device
										</Badge>
									)}
								</Group>
								<Text size="xs" c="dimmed" truncate>
									{session.location} · {session.current ? "Active now" : <RelativeTime value={session.lastActive} />}
								</Text>
							</Box>
						</Group>
						{!session.current && (
							<Button
								variant="default"
								size="xs"
								loading={signingOut === session.id}
								onClick={() => signOut(session.id)}
								style={{ flexShrink: 0 }}
							>
								Sign out
							</Button>
						)}
					</Group>
				</Fragment>
			))}
		</Panel>
	);
}

const mfaSetupQrSize = 25;

function mfaSetupQrPath(secret: string) {
	let seed = 0;
	for (const character of secret) seed = (Math.imul(seed, 31) + character.charCodeAt(0)) >>> 0;
	const random = () => {
		seed ^= seed << 13;
		seed ^= seed >>> 17;
		seed ^= seed << 5;
		seed >>>= 0;
		return seed;
	};
	const corners = [
		[0, 0],
		[0, mfaSetupQrSize - 7],
		[mfaSetupQrSize - 7, 0],
	];
	const marker = (row: number, column: number) => {
		for (const [top, left] of corners) {
			const inRow = row - top;
			const inColumn = column - left;
			if (inRow >= -1 && inRow <= 7 && inColumn >= -1 && inColumn <= 7) {
				if (inRow < 0 || inRow > 6 || inColumn < 0 || inColumn > 6) return false;
				const ring = inRow === 0 || inRow === 6 || inColumn === 0 || inColumn === 6;
				const centre = inRow >= 2 && inRow <= 4 && inColumn >= 2 && inColumn <= 4;
				return ring || centre;
			}
		}
		return undefined;
	};
	let path = "";
	for (let row = 0; row < mfaSetupQrSize; row++) {
		for (let column = 0; column < mfaSetupQrSize; column++) {
			const dark = marker(row, column) ?? (random() & 3) < 2;
			if (dark) path += `M${column} ${row}h1v1h-1z`;
		}
	}
	return path;
}

export interface MfaSetupProps {
	step: number;
	onStepChange: (step: number) => void;
	secret: string;
	onVerify: (code: string) => Promise<void>;
	codes: string[];
	codesSaved: boolean;
	onCodesSavedChange: (saved: boolean) => void;
	onRegenerateCodes: () => void | Promise<void>;
	onFinish: () => void;
	account: string;
}

export function MfaSetup({
	step,
	onStepChange,
	secret,
	onVerify,
	codes,
	codesSaved,
	onCodesSavedChange,
	onRegenerateCodes,
	onFinish,
	account,
}: MfaSetupProps) {
	const qrPath = useMemo(() => mfaSetupQrPath(secret), [secret]);
	const [code, setCode] = useState("");
	const [verifying, setVerifying] = useState(false);
	const [verifyError, setVerifyError] = useState<string | null>(null);

	const verify = async (value: string) => {
		setVerifying(true);
		setVerifyError(null);
		try {
			await onVerify(value);
			setCode("");
			onStepChange(2);
		} catch {
			setVerifyError("That code didn't work. Codes change every 30 seconds, so enter the newest one.");
			setCode("");
		} finally {
			setVerifying(false);
		}
	};

	return (
		<Panel title="Set up two-step verification">
			<Stepper active={step} onStepClick={onStepChange} allowNextStepsSelect={false} size="xs">
				<Stepper.Step label="Scan">
					<Stack gap="md" mt="md">
						<Text size="sm">Scan this code with an authenticator app, such as 1Password or Google Authenticator.</Text>
						<Box
							p={8}
							bg="var(--mantine-color-white)"
							w="fit-content"
							style={{
								border: "1px solid var(--mantine-color-default-border)",
								borderRadius: "var(--mantine-radius-sm)",
							}}
						>
							<svg
								viewBox={`0 0 ${mfaSetupQrSize} ${mfaSetupQrSize}`}
								width={140}
								height={140}
								shapeRendering="crispEdges"
								role="img"
								aria-label="QR code for your authenticator app"
							>
								<path d={qrPath} fill="var(--mantine-color-black)" />
							</svg>
						</Box>
						<Box>
							<Text size="sm" c="dimmed" mb={4}>
								Can't scan it? Enter this key instead.
							</Text>
							<CopyableId value={secret} />
						</Box>
						<Group justify="flex-end">
							<Button onClick={() => onStepChange(1)}>Continue</Button>
						</Group>
					</Stack>
				</Stepper.Step>
				<Stepper.Step label="Verify">
					<Stack gap="md" mt="md">
						<Text size="sm">Enter the 6-digit code your app shows for {account}.</Text>
						<PinInput
							length={6}
							type="number"
							oneTimeCode
							value={code}
							onChange={(value) => {
								setCode(value);
								setVerifyError(null);
							}}
							onComplete={verify}
							error={verifyError !== null}
							disabled={verifying}
							ariaLabel="Verification code"
						/>
						{verifyError && (
							<Text size="sm" c="var(--mantine-color-error)">
								{verifyError}
							</Text>
						)}
						<Group justify="space-between">
							<Button variant="default" onClick={() => onStepChange(0)} disabled={verifying}>
								Back
							</Button>
							<Button onClick={() => verify(code)} loading={verifying} disabled={code.length < 6}>
								Verify code
							</Button>
						</Group>
					</Stack>
				</Stepper.Step>
				<Stepper.Step label="Save codes">
					<Box mt="md">
						<RecoveryCodes
							codes={codes}
							saved={codesSaved}
							onSavedChange={onCodesSavedChange}
							onRegenerate={onRegenerateCodes}
							onFinish={onFinish}
							account={account}
						/>
					</Box>
				</Stepper.Step>
			</Stepper>
		</Panel>
	);
}

export interface PasskeysListItem {
	id: string;
	name: string;
	kind: "device" | "securityKey";
	createdAt: Date;
	lastUsed: Date | null;
}

export interface PasskeysListProps {
	passkeys: PasskeysListItem[];
	otherSignInMethods: number;
	onAdd: () => void;
	onRename: (id: string, name: string) => void | Promise<void>;
	onRemove: (id: string) => void | Promise<void>;
}

export function PasskeysList({ passkeys, otherSignInMethods, onAdd, onRename, onRemove }: PasskeysListProps) {
	const [renamingId, setRenamingId] = useState<string | null>(null);
	const [draftName, setDraftName] = useState("");
	const [removing, setRemoving] = useState<PasskeysListItem | null>(null);
	const [removeOpened, setRemoveOpened] = useState(false);
	const isLastMethod = passkeys.length + otherSignInMethods <= 1;

	const saveName = async (id: string) => {
		if (!draftName.trim()) return;
		await onRename(id, draftName.trim());
		setRenamingId(null);
	};

	return (
		<Panel
			title="Passkeys"
			description="Sign in with your fingerprint, face or a security key."
			flush={passkeys.length > 0}
			actions={
				<Button variant="default" size="xs" leftSection={<TbPlus />} onClick={onAdd}>
					Add a passkey
				</Button>
			}
		>
			{passkeys.length === 0 ? (
				<Text size="sm" c="dimmed">
					No passkeys yet. Add one to sign in without a password.
				</Text>
			) : (
				passkeys.map((passkey, position) => (
					<Fragment key={passkey.id}>
						{position > 0 && <Divider />}
						<Group justify="space-between" wrap="nowrap" gap="sm" px="md" py="sm">
							<Group gap="sm" wrap="nowrap" miw={0} style={{ flex: 1 }}>
								<ThemeIcon variant="light" color="gray" size="lg" aria-hidden>
									{passkey.kind === "securityKey" ? <TbKey /> : <TbFingerprint />}
								</ThemeIcon>
								{renamingId === passkey.id ? (
									<Group gap="xs" wrap="nowrap" style={{ flex: 1 }}>
										<TextInput
											aria-label="Passkey name"
											size="xs"
											value={draftName}
											onChange={(event) => setDraftName(event.currentTarget.value)}
											onKeyDown={(event) => {
												if (event.key === "Enter") saveName(passkey.id);
												if (event.key === "Escape") setRenamingId(null);
											}}
											style={{ flex: 1 }}
											data-autofocus
										/>
										<Button size="xs" onClick={() => saveName(passkey.id)} disabled={!draftName.trim()}>
											Save
										</Button>
										<Button size="xs" variant="default" onClick={() => setRenamingId(null)}>
											Cancel
										</Button>
									</Group>
								) : (
									<Box miw={0}>
										<Text size="sm" fw={500} truncate>
											{passkey.name}
										</Text>
										<Text size="xs" c="dimmed">
											Added {formatDate(passkey.createdAt, "date")} ·{" "}
											{passkey.lastUsed ? (
												<>
													Last used <RelativeTime value={passkey.lastUsed} />
												</>
											) : (
												"Never used"
											)}
										</Text>
									</Box>
								)}
							</Group>
							{renamingId !== passkey.id && (
								<Menu position="bottom-end" width={240}>
									<Menu.Target>
										<ActionIcon variant="subtle" color="gray" aria-label={`Actions for ${passkey.name}`}>
											<TbDots />
										</ActionIcon>
									</Menu.Target>
									<Menu.Dropdown>
										<Menu.Item
											leftSection={<TbPencil />}
											onClick={() => {
												setDraftName(passkey.name);
												setRenamingId(passkey.id);
											}}
										>
											Rename
										</Menu.Item>
										<Menu.Item
											leftSection={<TbTrash />}
											color="red"
											disabled={isLastMethod}
											onClick={() => {
												setRemoving(passkey);
												setRemoveOpened(true);
											}}
										>
											Remove
											{isLastMethod && (
												<Text size="xs" c="dimmed">
													It's your only way to sign in
												</Text>
											)}
										</Menu.Item>
									</Menu.Dropdown>
								</Menu>
							)}
						</Group>
					</Fragment>
				))
			)}
			{removing && (
				<ConfirmAction
					opened={removeOpened}
					onClose={() => setRemoveOpened(false)}
					action="Remove"
					target={removing.name}
					consequence="You won't be able to sign in with it any more, on any device it's synced to."
					tone="danger"
					confirmLabel="Remove passkey"
					onConfirm={() => onRemove(removing.id)}
				/>
			)}
		</Panel>
	);
}

export type ConnectedAccountsProvider = "google" | "microsoft";

export interface ConnectedAccountsItem {
	provider: ConnectedAccountsProvider;
	email: string;
	connectedAt: Date;
}

export interface ConnectedAccountsProps {
	accounts: ConnectedAccountsItem[];
	otherSignInMethods: number;
	onConnect: (provider: ConnectedAccountsProvider) => void;
	onDisconnect: (provider: ConnectedAccountsProvider) => void | Promise<void>;
}

const connectedAccountsProviders = [
	{ provider: "google", name: "Google", icon: <TbBrandGoogle /> },
	{ provider: "microsoft", name: "Microsoft", icon: <TbBrandWindows /> },
] as const;

export function ConnectedAccounts({ accounts, otherSignInMethods, onConnect, onDisconnect }: ConnectedAccountsProps) {
	const isLastMethod = accounts.length + otherSignInMethods <= 1;

	return (
		<Panel title="Connected accounts" description="Accounts you can sign in with." flush>
			{connectedAccountsProviders.map(({ provider, name, icon }, position) => {
				const account = accounts.find((item) => item.provider === provider);
				return (
					<Fragment key={provider}>
						{position > 0 && <Divider />}
						<Group justify="space-between" wrap="nowrap" gap="sm" px="md" py="sm">
							<Group gap="sm" wrap="nowrap" miw={0}>
								<ThemeIcon variant="default" size="lg" aria-hidden>
									{icon}
								</ThemeIcon>
								<Box miw={0}>
									<Text size="sm" fw={500}>
										{name}
									</Text>
									<Text size="xs" c="dimmed" truncate>
										{account
											? `${account.email} · Connected ${formatDate(account.connectedAt, "date")}`
											: "Not connected"}
									</Text>
									{account && isLastMethod && (
										<Text size="xs" c="dimmed">
											It's your only way to sign in. Add a passkey or connect another account first.
										</Text>
									)}
								</Box>
							</Group>
							{account ? (
								<ConfirmAction
									action="Disconnect"
									target={name}
									consequence={`You won't be able to sign in with ${account.email} any more.`}
									confirmLabel={`Disconnect ${name}`}
									onConfirm={() => onDisconnect(provider)}
									trigger={(open) => (
										<Button
											variant="default"
											size="xs"
											onClick={open}
											disabled={isLastMethod}
											style={{ flexShrink: 0 }}
										>
											Disconnect
										</Button>
									)}
								/>
							) : (
								<Button variant="default" size="xs" onClick={() => onConnect(provider)} style={{ flexShrink: 0 }}>
									Connect
								</Button>
							)}
						</Group>
					</Fragment>
				);
			})}
		</Panel>
	);
}

export type NotificationPreferencesChannel = "inApp" | "email" | "slack";

export interface NotificationPreferencesGroup {
	id: string;
	label: string;
	events: { id: string; label: string }[];
}

export type NotificationPreferencesValue = Record<string, Partial<Record<NotificationPreferencesChannel, boolean>>>;

export interface NotificationPreferencesProps {
	groups: NotificationPreferencesGroup[];
	channels: {
		id: NotificationPreferencesChannel;
		label: string;
		unavailableReason?: string;
	}[];
	value: NotificationPreferencesValue;
	onChange: (value: NotificationPreferencesValue) => void;
}

export function NotificationPreferences({ groups, channels, value, onChange }: NotificationPreferencesProps) {
	const isOn = (eventId: string, channel: NotificationPreferencesChannel) => value[eventId]?.[channel] === true;
	const setEvents = (eventIds: string[], channel: NotificationPreferencesChannel, on: boolean) => {
		const next = { ...value };
		for (const eventId of eventIds) next[eventId] = { ...next[eventId], [channel]: on };
		onChange(next);
	};

	return (
		<Panel title="Notify me about" flush>
			<Table.ScrollContainer minWidth={420}>
				<Table verticalSpacing={6} horizontalSpacing="md">
					<Table.Thead>
						<Table.Tr>
							<Table.Th />
							{channels.map((channel) => (
								<Table.Th key={channel.id} ta="center" w={88}>
									{channel.unavailableReason ? (
										<Tooltip label={channel.unavailableReason} withArrow>
											<Text span size="sm" fw={600} c="dimmed" style={{ cursor: "help" }}>
												{channel.label}
											</Text>
										</Tooltip>
									) : (
										channel.label
									)}
								</Table.Th>
							))}
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{groups.map((group) => {
							const eventIds = group.events.map((event) => event.id);
							return (
								<Fragment key={group.id}>
									<Table.Tr bg="var(--mantine-color-default-hover)">
										<Table.Td fw={600}>{group.label}</Table.Td>
										{channels.map((channel) => {
											const onCount = eventIds.filter((eventId) => isOn(eventId, channel.id)).length;
											return (
												<Table.Td key={channel.id}>
													<Checkbox
														mx="auto"
														w="fit-content"
														aria-label={`${group.label}, ${channel.label}`}
														checked={onCount === eventIds.length}
														indeterminate={onCount > 0 && onCount < eventIds.length}
														disabled={channel.unavailableReason !== undefined}
														onChange={() => setEvents(eventIds, channel.id, onCount < eventIds.length)}
													/>
												</Table.Td>
											);
										})}
									</Table.Tr>
									{group.events.map((event) => (
										<Table.Tr key={event.id}>
											<Table.Td pl="xl">{event.label}</Table.Td>
											{channels.map((channel) => (
												<Table.Td key={channel.id}>
													<Checkbox
														mx="auto"
														w="fit-content"
														aria-label={`${event.label}, ${channel.label}`}
														checked={isOn(event.id, channel.id)}
														disabled={channel.unavailableReason !== undefined}
														onChange={(change) => setEvents([event.id], channel.id, change.currentTarget.checked)}
													/>
												</Table.Td>
											))}
										</Table.Tr>
									))}
								</Fragment>
							);
						})}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

export interface RegionalSettingsValue {
	language: string;
	formatLocale: string;
	timeZone: string;
	weekStart: "monday" | "sunday";
}

export interface RegionalSettingsProps {
	value: RegionalSettingsValue;
	onChange: (value: RegionalSettingsValue) => void;
	formatLocales?: string[];
}

const regionalSettingsDefaultLocales = ["en-GB", "en-US", "fr-FR", "de-DE", "es-ES", "pt-PT", "ja-JP"];

export function RegionalSettings({
	value,
	onChange,
	formatLocales = regionalSettingsDefaultLocales,
}: RegionalSettingsProps) {
	const localeNames = useMemo(() => new Intl.DisplayNames(["en"], { type: "language" }), []);
	const sample = useMemo(() => new Date(), []);

	return (
		<Panel title="Language and region">
			<Stack gap="md">
				<SimpleGrid cols={{ base: 1, xs: 2 }} type="container">
					<LanguageSelect
						label="Language"
						value={value.language}
						onChange={(language) => language && onChange({ ...value, language })}
						searchable
						allowDeselect={false}
						favourites={["en", "fr", "de"]}
					/>
					<Select
						label="Formats"
						description="Dates, times and numbers"
						data={formatLocales.map((locale) => ({ value: locale, label: localeNames.of(locale) ?? locale }))}
						value={value.formatLocale}
						onChange={(formatLocale) => formatLocale && onChange({ ...value, formatLocale })}
						allowDeselect={false}
					/>
					<TimezoneSelect
						label="Time zone"
						value={value.timeZone}
						onChange={(timeZone) => timeZone && onChange({ ...value, timeZone })}
						searchable
						allowDeselect={false}
					/>
					<Box>
						<Text size="sm" fw={500} mb={4}>
							Week starts on
						</Text>
						<SegmentedControl
							fullWidth
							value={value.weekStart}
							onChange={(weekStart) =>
								onChange({ ...value, weekStart: weekStart as RegionalSettingsValue["weekStart"] })
							}
							data={[
								{ value: "monday", label: "Monday" },
								{ value: "sunday", label: "Sunday" },
							]}
						/>
					</Box>
				</SimpleGrid>
				<Divider label="How it looks" labelPosition="left" />
				<DataList>
					<DataList.Item>
						<DataList.ItemLabel>Date</DataList.ItemLabel>
						<DataList.ItemValue>{formatDate(sample, "date", value.formatLocale, value.timeZone)}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Time</DataList.ItemLabel>
						<DataList.ItemValue>{formatDate(sample, "time", value.formatLocale, value.timeZone)}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Number</DataList.ItemLabel>
						<DataList.ItemValue>{formatNumber(1234567.89, { locale: value.formatLocale })}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Amount</DataList.ItemLabel>
						<DataList.ItemValue>{formatMoney(1248000, "EUR", value.formatLocale)}</DataList.ItemValue>
					</DataList.Item>
				</DataList>
			</Stack>
		</Panel>
	);
}

export type AppearanceSettingsColorScheme = "light" | "dark" | "auto";

export type AppearanceSettingsDensity = "compact" | "default" | "comfortable";

export interface AppearanceSettingsProps {
	colorScheme: AppearanceSettingsColorScheme;
	onColorSchemeChange: (colorScheme: AppearanceSettingsColorScheme) => void;
	density: AppearanceSettingsDensity;
	onDensityChange: (density: AppearanceSettingsDensity) => void;
}

function AppearanceSettingsThumbnail({ ground, line }: { ground: string; line: string }) {
	return (
		<Box
			h={48}
			p={8}
			bg={ground}
			style={{ borderRadius: "var(--mantine-radius-sm)", border: "1px solid var(--mantine-color-default-border)" }}
		>
			<Box h={6} w="60%" bg={line} style={{ borderRadius: 3 }} />
			<Box h={6} w="85%" mt={6} bg={line} style={{ borderRadius: 3, opacity: 0.6 }} />
		</Box>
	);
}

const appearanceSettingsSchemes = [
	{
		value: "light",
		label: "Light",
		thumbnail: <AppearanceSettingsThumbnail ground="var(--mantine-color-gray-0)" line="var(--mantine-color-gray-4)" />,
	},
	{
		value: "dark",
		label: "Dark",
		thumbnail: <AppearanceSettingsThumbnail ground="var(--mantine-color-dark-7)" line="var(--mantine-color-dark-3)" />,
	},
	{
		value: "auto",
		label: "System",
		thumbnail: (
			<SimpleGrid cols={2} spacing={0} style={{ borderRadius: "var(--mantine-radius-sm)", overflow: "hidden" }}>
				<AppearanceSettingsThumbnail ground="var(--mantine-color-gray-0)" line="var(--mantine-color-gray-4)" />
				<AppearanceSettingsThumbnail ground="var(--mantine-color-dark-7)" line="var(--mantine-color-dark-3)" />
			</SimpleGrid>
		),
	},
] as const;

export function AppearanceSettings({
	colorScheme,
	onColorSchemeChange,
	density,
	onDensityChange,
}: AppearanceSettingsProps) {
	return (
		<Panel title="Appearance">
			<Stack gap="lg">
				<Radio.Group
					label="Colour scheme"
					value={colorScheme}
					onChange={(next) => onColorSchemeChange(next as AppearanceSettingsColorScheme)}
				>
					<SimpleGrid cols={3} spacing="sm" mt={6}>
						{appearanceSettingsSchemes.map((scheme) => (
							<Radio.Card key={scheme.value} value={scheme.value} p="xs">
								{scheme.thumbnail}
								<Group gap="xs" mt="xs" wrap="nowrap">
									<Radio.Indicator size="xs" />
									<Text size="sm">{scheme.label}</Text>
								</Group>
							</Radio.Card>
						))}
					</SimpleGrid>
				</Radio.Group>
				<Box>
					<Text size="sm" fw={500} mb={4}>
						Density
					</Text>
					<SegmentedControl
						fullWidth
						value={density}
						onChange={(next) => onDensityChange(next as AppearanceSettingsDensity)}
						data={[
							{ value: "compact", label: "Compact" },
							{ value: "default", label: "Default" },
							{ value: "comfortable", label: "Comfortable" },
						]}
					/>
					<Text size="xs" c="dimmed" mt={6}>
						Changes row height and spacing in tables and lists.
					</Text>
				</Box>
			</Stack>
		</Panel>
	);
}

export type PersonalDataSectionExport =
	| { status: "idle" }
	| { status: "running"; progress: number }
	| { status: "ready"; size: number; expiresAt: Date };

export interface PersonalDataSectionProps {
	email: string;
	exportState: PersonalDataSectionExport;
	onExport: () => void;
	onDownload: () => void;
	ownedWorkspaces?: string[];
	onDeleteAccount: () => void | Promise<void>;
}

export function PersonalDataSection({
	email,
	exportState,
	onExport,
	onDownload,
	ownedWorkspaces = [],
	onDeleteAccount,
}: PersonalDataSectionProps) {
	return (
		<Panel title="Your data">
			<Stack gap="md">
				<Box>
					<Text size="sm" fw={500}>
						Export your data
					</Text>
					<Text size="sm" c="dimmed">
						A ZIP file with your profile, comments and activity.
					</Text>
					{exportState.status === "idle" && (
						<Button variant="default" size="xs" mt="sm" onClick={onExport}>
							Export my data
						</Button>
					)}
					{exportState.status === "running" && (
						<Box mt="sm">
							<Progress value={exportState.progress} size="sm" aria-label="Export progress" />
							<Text size="xs" c="dimmed" mt={6}>
								Preparing your export. We'll email {email} when it's ready.
							</Text>
						</Box>
					)}
					{exportState.status === "ready" && (
						<Group gap="sm" mt="sm">
							<Button size="xs" leftSection={<TbDownload />} onClick={onDownload}>
								Download export
							</Button>
							<Text size="xs" c="dimmed">
								{formatFileSize(exportState.size)} · Expires {formatDate(exportState.expiresAt, "date")}
							</Text>
						</Group>
					)}
				</Box>
				<Divider />
				<Box>
					<Text size="sm" fw={500}>
						Delete your account
					</Text>
					<Text size="sm" c="dimmed">
						Your profile, sessions and passkeys are deleted. Records you created stay, shown as created by a deleted
						user.
					</Text>
					{ownedWorkspaces.length > 0 ? (
						<Text size="sm" mt="sm">
							You own {ownedWorkspaces.join(", ")}. Transfer {ownedWorkspaces.length === 1 ? "it" : "them"} to someone
							else or delete {ownedWorkspaces.length === 1 ? "it" : "them"} first.
						</Text>
					) : (
						<ConfirmAction
							action="Delete"
							title="Delete your account?"
							consequence="This can't be undone. You'll be signed out everywhere."
							phrase={email}
							tone="danger"
							confirmLabel="Delete my account"
							onConfirm={onDeleteAccount}
							trigger={(open) => (
								<Button color="red" variant="light" size="xs" mt="sm" onClick={open}>
									Delete account
								</Button>
							)}
						/>
					)}
				</Box>
			</Stack>
		</Panel>
	);
}

function AccountAreaProfile() {
	const [profile, setProfile] = useState<ProfileSectionValue>({
		firstName: "Anna",
		lastName: "Kowalska",
		email: users.anna.email,
		avatarUrl: null,
		pendingEmail: "anna.kowalska@company.com",
	});

	return (
		<ProfileSection
			profile={profile}
			onSaveName={async (name) => {
				await wait(500);
				setProfile((current) => ({ ...current, ...name }));
			}}
			onPhotoChange={(file) =>
				setProfile((current) => ({ ...current, avatarUrl: file ? URL.createObjectURL(file) : null }))
			}
			onEmailChange={async (email) => {
				await wait(500);
				setProfile((current) => ({ ...current, pendingEmail: email }));
			}}
			onResendConfirmation={() => undefined}
			onCancelEmailChange={() => setProfile((current) => ({ ...current, pendingEmail: null }))}
		/>
	);
}

function AccountAreaSessions() {
	const [sessions, setSessions] = useState<SessionsListItem[]>([
		{
			id: "ses_1",
			device: "MacBook Pro",
			kind: "laptop",
			browser: "Chrome",
			location: "Lisbon, Portugal",
			lastActive: new Date(),
			current: true,
		},
		{
			id: "ses_2",
			device: "iPhone",
			kind: "phone",
			browser: "Safari",
			location: "Lisbon, Portugal",
			lastActive: ago({ hours: 2 }),
		},
		{
			id: "ses_3",
			device: "Windows PC",
			kind: "desktop",
			browser: "Edge",
			location: "Paris, France",
			lastActive: ago({ days: 3 }),
		},
		{
			id: "ses_4",
			device: "iPad",
			kind: "tablet",
			browser: "Safari",
			location: "Porto, Portugal",
			lastActive: ago({ days: 12 }),
		},
	]);

	return (
		<SessionsList
			sessions={sessions}
			onSignOut={async (id) => {
				await wait(400);
				setSessions((current) => current.filter((session) => session.id !== id));
			}}
			onSignOutOthers={async () => {
				await wait(600);
				setSessions((current) => current.filter((session) => session.current));
			}}
		/>
	);
}

function AccountAreaSignInMethods() {
	const [passkeys, setPasskeys] = useState<PasskeysListItem[]>([
		{
			id: "pk_1",
			name: "MacBook Pro",
			kind: "device",
			createdAt: ago({ days: 64 }),
			lastUsed: ago({ hours: 2 }),
		},
		{
			id: "pk_2",
			name: "YubiKey 5C",
			kind: "securityKey",
			createdAt: ago({ days: 130 }),
			lastUsed: ago({ days: 21 }),
		},
	]);
	const [accounts, setAccounts] = useState<ConnectedAccountsItem[]>([
		{ provider: "google", email: users.anna.email, connectedAt: ago({ days: 210 }) },
	]);

	return (
		<>
			<PreviewItem span="half">
				<PasskeysList
					passkeys={passkeys}
					otherSignInMethods={accounts.length}
					onAdd={() =>
						setPasskeys((current) => [
							...current,
							{
								id: `pk_${current.length + 3}`,
								name: "iPhone",
								kind: "device",
								createdAt: new Date(),
								lastUsed: null,
							},
						])
					}
					onRename={(id, name) =>
						setPasskeys((current) => current.map((passkey) => (passkey.id === id ? { ...passkey, name } : passkey)))
					}
					onRemove={async (id) => {
						await wait(400);
						setPasskeys((current) => current.filter((passkey) => passkey.id !== id));
					}}
				/>
			</PreviewItem>
			<PreviewItem span="half">
				<ConnectedAccounts
					accounts={accounts}
					otherSignInMethods={passkeys.length}
					onConnect={(provider) =>
						setAccounts((current) => [
							...current,
							{
								provider,
								email: provider === "microsoft" ? "anna.kowalska@outlook.com" : users.anna.email,
								connectedAt: new Date(),
							},
						])
					}
					onDisconnect={async (provider) => {
						await wait(400);
						setAccounts((current) => current.filter((account) => account.provider !== provider));
					}}
				/>
			</PreviewItem>
		</>
	);
}

const accountAreaRecoveryCodes = () =>
	Array.from({ length: 10 }, () =>
		Array.from({ length: 2 }, () =>
			Math.floor(Math.random() * 36 ** 4)
				.toString(36)
				.padStart(4, "0"),
		).join("-"),
	);

function AccountAreaMfa() {
	const [step, setStep] = useState(0);
	const [codes, setCodes] = useState(accountAreaRecoveryCodes);
	const [codesSaved, setCodesSaved] = useState(false);
	const [finished, setFinished] = useState(false);

	if (finished) {
		return (
			<Panel
				title="Two-step verification"
				actions={
					<Button
						variant="default"
						size="xs"
						onClick={() => {
							setFinished(false);
							setStep(0);
							setCodesSaved(false);
						}}
					>
						Set up again
					</Button>
				}
			>
				<Text size="sm">Two-step verification is on. You'll enter a code from your app when you sign in.</Text>
			</Panel>
		);
	}

	return (
		<MfaSetup
			step={step}
			onStepChange={setStep}
			secret="JBSWY3DPEHPK3PXPLQ7MZ4TA"
			account={users.anna.email}
			onVerify={async (code) => {
				await wait(500);
				if (code === "000000") throw new Error("Wrong code");
			}}
			codes={codes}
			codesSaved={codesSaved}
			onCodesSavedChange={setCodesSaved}
			onRegenerateCodes={async () => {
				await wait(400);
				setCodes(accountAreaRecoveryCodes());
				setCodesSaved(false);
			}}
			onFinish={() => setFinished(true)}
		/>
	);
}

const accountAreaNotificationGroups: NotificationPreferencesGroup[] = [
	{
		id: "billing",
		label: "Billing",
		events: [
			{ id: "invoicePaid", label: "Invoice paid" },
			{ id: "invoiceOverdue", label: "Invoice overdue" },
			{ id: "paymentFailed", label: "Payment failed" },
		],
	},
	{
		id: "approvals",
		label: "Approvals",
		events: [
			{ id: "accessRequested", label: "Someone requests access" },
			{ id: "changeWaiting", label: "A change waits for my approval" },
		],
	},
	{
		id: "mentions",
		label: "Mentions and comments",
		events: [
			{ id: "mentioned", label: "Someone mentions me" },
			{ id: "commentFollowed", label: "A comment on a record I follow" },
		],
	},
	{
		id: "jobs",
		label: "Imports and exports",
		events: [{ id: "jobFinished", label: "An import or export finishes" }],
	},
];

function AccountAreaNotifications() {
	const [value, setValue] = useState<NotificationPreferencesValue>({
		invoicePaid: { inApp: true },
		invoiceOverdue: { inApp: true, email: true, slack: true },
		paymentFailed: { inApp: true, email: true, slack: true },
		accessRequested: { inApp: true, email: true },
		changeWaiting: { inApp: true, email: true },
		mentioned: { inApp: true, email: true },
		commentFollowed: { inApp: true },
		jobFinished: { inApp: true, email: true },
	});

	return (
		<NotificationPreferences
			groups={accountAreaNotificationGroups}
			channels={[
				{ id: "inApp", label: "In app" },
				{ id: "email", label: "Email" },
				{ id: "slack", label: "Slack" },
			]}
			value={value}
			onChange={setValue}
		/>
	);
}

function AccountAreaRegional() {
	const [value, setValue] = useState<RegionalSettingsValue>({
		language: "en",
		formatLocale: "en-GB",
		timeZone: "Europe/Lisbon",
		weekStart: "monday",
	});
	return <RegionalSettings value={value} onChange={setValue} />;
}

function AccountAreaAppearance() {
	const [colorScheme, setColorScheme] = useState<AppearanceSettingsColorScheme>("auto");
	const [density, setDensity] = useState<AppearanceSettingsDensity>("default");
	return (
		<AppearanceSettings
			colorScheme={colorScheme}
			onColorSchemeChange={setColorScheme}
			density={density}
			onDensityChange={setDensity}
		/>
	);
}

function AccountAreaPersonalData() {
	const [exportState, setExportState] = useState<PersonalDataSectionExport>({
		status: "ready",
		size: 4_200_000,
		expiresAt: fromNow({ days: 7 }),
	});

	// Simulated export job; a real app polls the job or gets an event
	useEffect(() => {
		if (exportState.status !== "running") return;
		const timer = setTimeout(() => {
			setExportState(
				exportState.progress >= 100
					? { status: "ready", size: 4_200_000, expiresAt: fromNow({ days: 7 }) }
					: { status: "running", progress: exportState.progress + 25 },
			);
		}, 600);
		return () => clearTimeout(timer);
	}, [exportState]);

	return (
		<PersonalDataSection
			email={users.anna.email}
			exportState={exportState}
			onExport={() => setExportState({ status: "running", progress: 0 })}
			onDownload={() => undefined}
			onDeleteAccount={() => wait(600)}
		/>
	);
}

export interface RecoveryCodesProps {
	codes: string[];
	saved: boolean;
	onSavedChange: (saved: boolean) => void;
	onRegenerate: () => void | Promise<void>;
	onFinish: () => void;
	account: string;
	fileName?: string;
}

function recoveryCodesFile(codes: string[], account: string) {
	return [
		`Recovery codes for ${account}`,
		`Saved ${formatDate(new Date(), "datetime")}`,
		"",
		...codes,
		"",
		"Each code works once.",
	].join("\n");
}

export function RecoveryCodes({
	codes,
	saved,
	onSavedChange,
	onRegenerate,
	onFinish,
	account,
	fileName = "recovery-codes.txt",
}: RecoveryCodesProps) {
	const download = () => {
		const url = URL.createObjectURL(new Blob([recoveryCodesFile(codes, account)], { type: "text/plain" }));
		const link = document.createElement("a");
		link.href = url;
		link.download = fileName;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<Stack gap="md">
			<Text size="sm">
				Each code signs you in once if you lose your authenticator. Keep them somewhere safe, such as a password
				manager.
			</Text>
			<Paper withBorder p="md" bg="var(--mantine-color-default-hover)">
				<SimpleGrid cols={2} spacing="lg" verticalSpacing={6}>
					{codes.map((code) => (
						<Text key={code} size="sm" ff="monospace">
							{code}
						</Text>
					))}
				</SimpleGrid>
			</Paper>
			<Group gap="xs">
				<CopyButton value={codes.join("\n")}>
					{({ copied, copy }) => (
						<Button variant="default" size="xs" leftSection={copied ? <TbCheck /> : <TbCopy />} onClick={copy}>
							{copied ? "Copied" : "Copy all"}
						</Button>
					)}
				</CopyButton>
				<Button variant="default" size="xs" leftSection={<TbDownload />} onClick={download}>
					Download .txt
				</Button>
				<ConfirmAction
					action="Regenerate"
					title="Regenerate recovery codes?"
					consequence="Your current codes stop working straight away."
					tone="danger"
					confirmLabel="Regenerate codes"
					onConfirm={onRegenerate}
					trigger={(open) => (
						<Button variant="subtle" color="red" size="xs" leftSection={<TbRefresh />} onClick={open}>
							Regenerate
						</Button>
					)}
				/>
			</Group>
			<Checkbox
				label="I've saved these codes"
				checked={saved}
				onChange={(event) => onSavedChange(event.currentTarget.checked)}
			/>
			<Group justify="flex-end">
				<Button disabled={!saved} onClick={onFinish}>
					Finish setup
				</Button>
			</Group>
		</Stack>
	);
}

const recoveryCodesAlphabet = "abcdefghjkmnpqrstuvwxyz23456789";

function recoveryCodesGenerate(count = 10) {
	return Array.from({ length: count }, () => {
		const bytes = crypto.getRandomValues(new Uint8Array(8));
		const characters = [...bytes].map((byte) => recoveryCodesAlphabet[byte % recoveryCodesAlphabet.length]).join("");
		return `${characters.slice(0, 4)}-${characters.slice(4)}`;
	});
}

const recoveryCodesInitial = [
	"k7m2-xq9d",
	"p3wf-8hzn",
	"t6jc-4vrb",
	"n9ya-2kse",
	"h4dq-7mpu",
	"c8vz-3wfk",
	"r2nb-6tjx",
	"w5ue-9cqh",
	"e3sk-4yzm",
	"y7pt-2nbd",
];

function RecoveryCodesExample() {
	const [codes, setCodes] = useState(recoveryCodesInitial);
	const [saved, setSaved] = useState(false);
	const [finished, setFinished] = useState(false);

	if (finished) {
		return (
			<Panel title="Two-step verification">
				<Stack gap="sm" align="flex-start">
					<Group gap="xs">
						<Box component="span" c="var(--mantine-color-green-text)" style={{ display: "inline-flex" }}>
							<TbCheck aria-hidden />
						</Box>
						<Text size="sm">Two-step verification is on for {users.anna.email}.</Text>
					</Group>
					<Button
						variant="default"
						size="xs"
						onClick={() => {
							setSaved(false);
							setFinished(false);
						}}
					>
						Start over
					</Button>
				</Stack>
			</Panel>
		);
	}

	return (
		<Panel title="Save your recovery codes">
			<RecoveryCodes
				codes={codes}
				saved={saved}
				onSavedChange={setSaved}
				account={users.anna.email}
				onRegenerate={async () => {
					await inlineEditRequest();
					setCodes(recoveryCodesGenerate());
					setSaved(false);
				}}
				onFinish={() => setFinished(true)}
			/>
		</Panel>
	);
}

export function AccountArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<AccountAreaProfile />
			</PreviewItem>
			<PreviewItem span="half">
				<AccountAreaRegional />
			</PreviewItem>
			<PreviewItem span="half">
				<AccountAreaAppearance />
			</PreviewItem>
			<PreviewItem span="half">
				<AccountAreaNotifications />
			</PreviewItem>
			<PreviewItem span="half">
				<AccountAreaMfa />
			</PreviewItem>
			<PreviewItem span="half">
				<AccountAreaSessions />
			</PreviewItem>
			<AccountAreaSignInMethods />
			<PreviewItem span="half">
				<AccountAreaPersonalData />
			</PreviewItem>
			<PreviewItem span="half">
				<RecoveryCodesExample />
			</PreviewItem>
		</PreviewGrid>
	);
}

export type BillingInterval = "month" | "year";

export interface BillingPlan {
	id: string;
	name: string;
	description: string;
	seatPrice: Record<BillingInterval, number>;
}

export interface BillingSubscription {
	planId: string;
	interval: BillingInterval;
	seats: number;
	seatsInUse: number;
	currency: string;
	periodStart: DateLike;
	periodEnd: DateLike;
}

export interface PlanChoice {
	planId: string;
	interval: BillingInterval;
}

export type PlanChangeSummary =
	| { kind: "current" }
	| {
			kind: "now";
			dueToday: number;
			charge: number;
			credit: number;
			remainingDays: number;
			renewsOn: Date;
			recurring: number;
			interval: BillingInterval;
			intervalChanged: boolean;
	  }
	| { kind: "scheduled"; startsOn: Date; recurring: number; interval: BillingInterval };

const billingDayInMilliseconds = 86_400_000;

function billingDaysBetween(from: DateLike, to: DateLike) {
	return Math.max(0, Math.round((new Date(to).getTime() - new Date(from).getTime()) / billingDayInMilliseconds));
}

function billingIntervalWord(interval: BillingInterval) {
	return interval === "month" ? "a month" : "a year";
}

export function planChangeSummary(
	plans: BillingPlan[],
	subscription: BillingSubscription,
	choice: PlanChoice,
	now = Date.now(),
): PlanChangeSummary {
	const currentPlan = plans.find((plan) => plan.id === subscription.planId);
	const nextPlan = plans.find((plan) => plan.id === choice.planId);
	if (
		!currentPlan ||
		!nextPlan ||
		(choice.planId === subscription.planId && choice.interval === subscription.interval)
	) {
		return { kind: "current" };
	}

	const currentPrice = currentPlan.seatPrice[subscription.interval] * subscription.seats;
	const recurring = nextPlan.seatPrice[choice.interval] * subscription.seats;
	const periodDays = Math.max(1, billingDaysBetween(subscription.periodStart, subscription.periodEnd));
	const remainingDays = billingDaysBetween(now, subscription.periodEnd);
	const credit = Math.round((currentPrice * remainingDays) / periodDays);
	const periodEnd = new Date(subscription.periodEnd);

	if (choice.interval === subscription.interval) {
		if (recurring <= currentPrice)
			return { kind: "scheduled", startsOn: periodEnd, recurring, interval: choice.interval };
		const charge = Math.round((recurring * remainingDays) / periodDays);
		return {
			kind: "now",
			dueToday: charge - credit,
			charge,
			credit,
			remainingDays,
			renewsOn: periodEnd,
			recurring,
			interval: choice.interval,
			intervalChanged: false,
		};
	}
	if (choice.interval === "year") {
		const renewsOn = new Date(now);
		renewsOn.setFullYear(renewsOn.getFullYear() + 1);
		return {
			kind: "now",
			dueToday: recurring - credit,
			charge: recurring,
			credit,
			remainingDays,
			renewsOn,
			recurring,
			interval: "year",
			intervalChanged: true,
		};
	}
	return { kind: "scheduled", startsOn: periodEnd, recurring, interval: choice.interval };
}

interface PlanPickerProps {
	plans: BillingPlan[];
	subscription: BillingSubscription;
	value: PlanChoice;
	onChange: (value: PlanChoice) => void;
	onConfirm: (value: PlanChoice, summary: PlanChangeSummary) => void | Promise<void>;
	locale?: string;
}

export function PlanPicker({ plans, subscription, value, onChange, onConfirm, locale }: PlanPickerProps) {
	const settings = useFormatSettings();
	const resolvedLocale = locale ?? settings.locale;
	const [pending, setPending] = useState(false);
	const summary = planChangeSummary(plans, subscription, value);
	const selected = plans.find((plan) => plan.id === value.planId);
	const money = (amount: number) => formatMoney(amount, subscription.currency, resolvedLocale);
	const planChanges = value.planId !== subscription.planId;
	const intervalChanges = value.interval !== subscription.interval;
	const confirmLabel =
		planChanges && intervalChanges
			? `Switch to ${selected?.name}, billed ${value.interval === "year" ? "annually" : "monthly"}`
			: planChanges
				? `Switch to ${selected?.name}`
				: `Switch to ${value.interval === "year" ? "annual" : "monthly"} billing`;

	const confirm = async () => {
		setPending(true);
		try {
			await onConfirm(value, summary);
		} finally {
			setPending(false);
		}
	};

	return (
		<Stack gap="md">
			<SegmentedControl
				value={value.interval}
				onChange={(interval) => onChange({ ...value, interval: interval as BillingInterval })}
				data={[
					{ label: "Monthly", value: "month" },
					{ label: "Annual", value: "year" },
				]}
				aria-label="Billing interval"
			/>
			<Radio.Group value={value.planId} onChange={(planId) => onChange({ ...value, planId })} aria-label="Plan">
				<Stack gap="xs">
					{plans.map((plan) => (
						<Radio.Card key={plan.id} value={plan.id} p="sm">
							<Group wrap="nowrap" align="flex-start" gap="sm">
								<Radio.Indicator />
								<Box miw={0} style={{ flex: 1 }}>
									<Group gap="xs">
										<Text size="sm" fw={500}>
											{plan.name}
										</Text>
										{plan.id === subscription.planId && (
											<Badge size="sm" variant="light" color="gray" tt="none" fw={500}>
												Current
											</Badge>
										)}
									</Group>
									<Text size="xs" c="dimmed">
										{plan.description}
									</Text>
								</Box>
								<Box ta="right" style={{ flexShrink: 0 }}>
									<Text size="sm" fw={500} style={{ fontVariantNumeric: "tabular-nums" }}>
										{money(plan.seatPrice[value.interval])}
									</Text>
									<Text size="xs" c="dimmed">
										per seat {billingIntervalWord(value.interval)}
									</Text>
								</Box>
							</Group>
						</Radio.Card>
					))}
				</Stack>
			</Radio.Group>
			<PlanChangeSummaryView
				summary={summary}
				planName={selected?.name ?? ""}
				subscription={subscription}
				money={money}
			/>
			<Group justify="flex-end">
				<Button disabled={summary.kind === "current"} loading={pending} onClick={confirm}>
					{confirmLabel}
				</Button>
			</Group>
		</Stack>
	);
}

function PlanChangeSummaryView({
	summary,
	planName,
	subscription,
	money,
}: {
	summary: PlanChangeSummary;
	planName: string;
	subscription: BillingSubscription;
	money: (amount: number) => string;
}) {
	if (summary.kind === "current") {
		return (
			<Text size="sm" c="dimmed">
				This is your current plan.
			</Text>
		);
	}
	if (summary.kind === "scheduled") {
		return (
			<Text size="sm" c="dimmed">
				{planName} starts on <DateText value={summary.startsOn} />. Nothing is charged today. Then{" "}
				{money(summary.recurring)} {billingIntervalWord(summary.interval)}.
			</Text>
		);
	}
	return (
		<Paper withBorder p="sm">
			<Group justify="space-between" wrap="nowrap">
				<Text size="sm" fw={500}>
					Due today
				</Text>
				<Text size="sm" fw={600} style={{ fontVariantNumeric: "tabular-nums" }}>
					{money(summary.dueToday)}
				</Text>
			</Group>
			<Text size="xs" c="dimmed" mt={4}>
				{summary.intervalChanged
					? `${money(summary.charge)} for a year of ${formatCount(subscription.seats, { one: "seat", other: "seats" })}, less ${money(summary.credit)} unused on your current plan.`
					: `${money(summary.charge)} for the ${formatCount(summary.remainingDays, { one: "day", other: "days" })} left in this period, less ${money(summary.credit)} unused on your current plan.`}{" "}
				Then {money(summary.recurring)} {billingIntervalWord(summary.interval)} from{" "}
				<DateText value={summary.renewsOn} />.
			</Text>
		</Paper>
	);
}

interface SeatsInputProps {
	value: number;
	onChange: (value: number) => void;
	subscription: BillingSubscription;
	plan: BillingPlan;
	onConfirm: (seats: number) => void | Promise<void>;
	locale?: string;
}

export function SeatsInput({ value, onChange, subscription, plan, onConfirm, locale }: SeatsInputProps) {
	const settings = useFormatSettings();
	const money = (amount: number) => formatMoney(amount, subscription.currency, locale ?? settings.locale);
	const [pending, setPending] = useState(false);
	const seatPrice = plan.seatPrice[subscription.interval];
	const difference = value - subscription.seats;
	const periodDays = Math.max(1, billingDaysBetween(subscription.periodStart, subscription.periodEnd));
	const remainingDays = billingDaysBetween(Date.now(), subscription.periodEnd);
	const dueToday = Math.round((seatPrice * Math.max(difference, 0) * remainingDays) / periodDays);
	const nextInvoice = seatPrice * value;
	const tooFew = value < subscription.seatsInUse;
	const seats = (count: number) => formatCount(count, { one: "seat", other: "seats" });

	const confirm = async () => {
		setPending(true);
		try {
			await onConfirm(value);
		} finally {
			setPending(false);
		}
	};

	return (
		<Stack gap="md">
			<NumberInput
				label="Seats"
				description={`${formatCount(subscription.seatsInUse, { one: "member", other: "members" })} use a seat now`}
				value={value}
				onChange={(next) => onChange(typeof next === "number" ? next : subscription.seatsInUse)}
				min={1}
				allowDecimal={false}
				error={tooFew ? `Remove members first: ${subscription.seatsInUse} are using a seat` : undefined}
				w={200}
			/>
			<Stack gap={4}>
				{difference > 0 && (
					<Group justify="space-between" wrap="nowrap">
						<Text size="sm">Due today, for the rest of this period</Text>
						<Text size="sm" fw={600} style={{ fontVariantNumeric: "tabular-nums" }}>
							{money(dueToday)}
						</Text>
					</Group>
				)}
				<Group justify="space-between" wrap="nowrap">
					<Text size="sm" c="dimmed">
						Next invoice on <DateText value={subscription.periodEnd} />
					</Text>
					<Text size="sm" style={{ fontVariantNumeric: "tabular-nums" }}>
						{money(nextInvoice)}
					</Text>
				</Group>
				{difference < 0 && (
					<Text size="xs" c="dimmed">
						The {seats(-difference)} go on <DateText value={subscription.periodEnd} />. Nothing is refunded for this
						period.
					</Text>
				)}
			</Stack>
			<Group justify="flex-end">
				<Button disabled={difference === 0 || tooFew} loading={pending} onClick={confirm}>
					{difference >= 0 ? `Add ${seats(Math.max(difference, 0))}` : `Remove ${seats(-difference)}`}
				</Button>
			</Group>
		</Stack>
	);
}

export type PaymentMethod =
	| { id: string; type: "card"; brand: string; last4: string; expiresMonth: number; expiresYear: number }
	| { id: string; type: "sepa"; bankName: string; last4: string };

export function paymentMethodLabel(method: PaymentMethod) {
	return method.type === "card"
		? `${method.brand} ending ${method.last4}`
		: `SEPA Direct Debit, ${method.bankName} ending ${method.last4}`;
}

function paymentMethodExpiry(method: PaymentMethod, now: number) {
	if (method.type !== "card") return null;
	const endsAt = new Date(method.expiresYear, method.expiresMonth, 0, 23, 59, 59).getTime();
	const label = `${String(method.expiresMonth).padStart(2, "0")}/${String(method.expiresYear).slice(-2)}`;
	return { label, endsAt, expired: endsAt < now, soon: endsAt >= now && endsAt - now < 60 * billingDayInMilliseconds };
}

interface PaymentMethodCardProps {
	methods: PaymentMethod[];
	defaultId: string;
	onMakeDefault: (id: string) => void;
	onReplace: (id: string) => void;
	onRemove: (id: string) => void | Promise<void>;
	onAdd: () => void;
	nextChargeAt?: DateLike;
}

export function PaymentMethodCard({
	methods,
	defaultId,
	onMakeDefault,
	onReplace,
	onRemove,
	onAdd,
	nextChargeAt,
}: PaymentMethodCardProps) {
	const now = Date.now();
	return (
		<Panel
			title="Payment methods"
			flush
			actions={
				<Button variant="default" size="xs" leftSection={<TbPlus />} onClick={onAdd}>
					Add payment method
				</Button>
			}
		>
			<Stack gap={0}>
				{methods.map((method, index) => {
					const expiry = paymentMethodExpiry(method, now);
					const isDefault = method.id === defaultId;
					const failsBeforeCharge =
						expiry !== null &&
						!expiry.expired &&
						nextChargeAt !== undefined &&
						expiry.endsAt < new Date(nextChargeAt).getTime();
					return (
						<Group
							key={method.id}
							gap="sm"
							wrap="nowrap"
							px="md"
							py="sm"
							style={{ borderTop: index === 0 ? undefined : "1px solid var(--mantine-color-default-border)" }}
						>
							<ThemeIcon variant="light" color="gray" size="lg">
								{method.type === "card" ? <TbCreditCard /> : <TbBuildingBank />}
							</ThemeIcon>
							<Box miw={0} style={{ flex: 1 }}>
								<Group gap="xs" wrap="nowrap">
									<Text size="sm" fw={500} truncate>
										{paymentMethodLabel(method)}
									</Text>
									{isDefault && (
										<Badge size="sm" variant="light" color="gray" tt="none" fw={500}>
											Default
										</Badge>
									)}
								</Group>
								{expiry && (
									<Text
										size="xs"
										c={
											expiry.expired
												? "var(--mantine-color-red-text)"
												: expiry.soon
													? "var(--mantine-color-orange-text)"
													: "dimmed"
										}
									>
										{expiry.expired ? `Expired ${expiry.label}` : `Expires ${expiry.label}`}
										{failsBeforeCharge && nextChargeAt && (
											<>
												, before the next charge on <DateText value={nextChargeAt} />
											</>
										)}
									</Text>
								)}
								{method.type === "sepa" && (
									<Text size="xs" c="dimmed">
										Charged 3 days before each invoice is due
									</Text>
								)}
							</Box>
							<Group gap="xs" wrap="nowrap">
								{expiry && (expiry.expired || expiry.soon) && (
									<Button variant="default" size="xs" onClick={() => onReplace(method.id)}>
										Replace
									</Button>
								)}
								{!isDefault && (
									<>
										<Button variant="subtle" size="xs" onClick={() => onMakeDefault(method.id)}>
											Make default
										</Button>
										<ConfirmAction
											action="Remove"
											target={paymentMethodLabel(method)}
											consequence="Invoices keep going to your default payment method."
											tone="danger"
											onConfirm={() => onRemove(method.id)}
											trigger={(open) => (
												<Tooltip label="Remove" withArrow>
													<ActionIcon
														variant="subtle"
														color="gray"
														aria-label={`Remove ${paymentMethodLabel(method)}`}
														onClick={open}
													>
														<TbX />
													</ActionIcon>
												</Tooltip>
											)}
										/>
									</>
								)}
							</Group>
						</Group>
					);
				})}
			</Stack>
		</Panel>
	);
}

export const billingInvoiceStatus = defineStatusMap({
	paid: ["Paid", "success"],
	open: ["Open", "info"],
	pastDue: ["Past due", "danger"],
	refunded: ["Refunded", "neutral"],
	void: ["Void", "neutral"],
});

export interface BillingInvoice {
	id: string;
	number: string;
	issuedAt: Date;
	amount: number;
	currency: string;
	status: keyof typeof billingInvoiceStatus;
}

export function createInvoicePdf(lines: string[]) {
	const printable = (value: string) =>
		value.replace(/[^\x20-\x7e]/g, " ").replace(/[\\()]/g, (character) => `\\${character}`);
	const content = [
		"BT",
		"/F1 12 Tf",
		"72 770 Td",
		"18 TL",
		...lines.map((line) => `(${printable(line)}) Tj T*`),
		"ET",
	].join("\n");
	const objects = [
		"<< /Type /Catalog /Pages 2 0 R >>",
		"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
		"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
		`<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
		"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
	];
	let pdf = "%PDF-1.4\n";
	const offsets: number[] = [];
	objects.forEach((object, index) => {
		offsets.push(pdf.length);
		pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
	});
	const xrefAt = pdf.length;
	pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
	pdf += offsets.map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`).join("");
	pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF\n`;
	return new Blob([pdf], { type: "application/pdf" });
}

export function downloadBlob(blob: Blob, fileName: string) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = fileName;
	link.click();
	setTimeout(() => URL.revokeObjectURL(url), 0);
}

function invoicesTableDownload(invoice: BillingInvoice, seller: string) {
	// The PDF's standard font has no € sign, so the amount uses the currency code
	const amount = new Intl.NumberFormat("en", {
		style: "currency",
		currency: invoice.currency,
		currencyDisplay: "code",
	}).format(invoice.amount / 10 ** currencyFractionDigits(invoice.currency, "en"));
	const blob = createInvoicePdf([
		seller,
		`Invoice ${invoice.number}`,
		`Issued ${formatDate(invoice.issuedAt, "date", "en")}`,
		`Amount ${amount}`,
		`Status ${billingInvoiceStatus[invoice.status].label}`,
	]);
	downloadBlob(blob, `${invoice.number}.pdf`);
}

interface InvoicesTableProps {
	invoices: BillingInvoice[];
	state: DataTableState;
	onStateChange: (state: DataTableState) => void;
	seller: string;
	onDownload?: (invoice: BillingInvoice) => void;
	loading?: boolean;
	error?: { title?: string; message: string; requestId?: string } | null;
	onRetry?: () => void;
}

const invoicesTableColumns = createColumnHelpers<BillingInvoice>();

export function InvoicesTable({
	invoices,
	state,
	onStateChange,
	seller,
	onDownload,
	loading,
	error,
	onRetry,
}: InvoicesTableProps) {
	const direction = state.sort?.direction === "asc" ? 1 : -1;
	const sorted = [...invoices].sort(
		(first, second) => direction * (first.issuedAt.getTime() - second.issuedAt.getTime()),
	);
	const page = sorted.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
	const download: DataTableColumn<BillingInvoice> = {
		key: "download",
		header: <VisuallyHidden>Download</VisuallyHidden>,
		align: "right",
		width: 48,
		render: (invoice) => (
			<Tooltip label="Download PDF" withArrow>
				<ActionIcon
					variant="subtle"
					color="gray"
					aria-label={`Download ${invoice.number} as PDF`}
					onClick={() => (onDownload ? onDownload(invoice) : invoicesTableDownload(invoice, seller))}
				>
					<TbDownload />
				</ActionIcon>
			</Tooltip>
		),
	};

	return (
		<DataTable
			rows={page}
			total={invoices.length}
			rowId="id"
			rowLabel={(invoice) => invoice.number}
			columns={[
				invoicesTableColumns.id("number", { header: "Invoice" }),
				invoicesTableColumns.date("issuedAt", { header: "Issued", sortable: true }),
				invoicesTableColumns.status("status", billingInvoiceStatus, { header: "Status" }),
				invoicesTableColumns.money("amount", { header: "Amount", currency: invoices[0]?.currency ?? "EUR" }),
				download,
			]}
			state={state}
			onStateChange={onStateChange}
			loading={loading}
			error={error}
			onRetry={onRetry}
			itemName={{ singular: "invoice", plural: "invoices" }}
			minWidth={520}
		/>
	);
}

export function PaymentFailedBanner({
	amount,
	currency,
	method,
	retryAt,
	onUpdate,
}: {
	amount: number;
	currency: string;
	method: string;
	retryAt: DateLike;
	onUpdate: () => void;
}) {
	return (
		<SystemBanner
			kind="paymentFailed"
			message={
				<>
					Your last payment failed: we couldn't charge <MoneyText amount={amount} currency={currency} /> to {method}.
					We'll try again on <DateText value={retryAt} />.
				</>
			}
			action={
				<Button size="xs" color="red" onClick={onUpdate}>
					Update payment method
				</Button>
			}
		/>
	);
}

export function TrialEndingBanner({
	endsAt,
	planName,
	onChoosePlan,
}: {
	endsAt: DateLike;
	planName: string;
	onChoosePlan: () => void;
}) {
	const days = Math.max(0, Math.ceil((new Date(endsAt).getTime() - Date.now()) / billingDayInMilliseconds));
	return (
		<SystemBanner
			kind="trialEnding"
			message={
				<>
					{days === 0
						? "Your trial ends today."
						: `Your trial ends in ${formatCount(days, { one: "day", other: "days" })}.`}{" "}
					Choose a plan to keep {planName} after <DateText value={endsAt} />. Nothing is charged before then.
				</>
			}
			action={
				<Button size="xs" color="violet" onClick={onChoosePlan}>
					Choose a plan
				</Button>
			}
		/>
	);
}

export type SubscriptionStatus =
	| { status: "active" }
	| { status: "cancelling"; endsOn: DateLike }
	| { status: "paused"; resumesOn: DateLike };

interface CancelSubscriptionFlowProps {
	planName: string;
	periodEnd: DateLike;
	value: SubscriptionStatus;
	consequences: { label: string; kept?: boolean }[];
	reasons: string[];
	pauseMonths?: number[];
	onCancel: (details: { reason: string; comment: string }) => void | Promise<void>;
	onPause: (months: number) => void | Promise<void>;
	onResume: () => void | Promise<void>;
}

export function CancelSubscriptionFlow({
	planName,
	periodEnd,
	value,
	consequences,
	reasons,
	pauseMonths = [1, 2, 3],
	onCancel,
	onPause,
	onResume,
}: CancelSubscriptionFlowProps) {
	const [reason, setReason] = useState<string | null>(null);
	const [comment, setComment] = useState("");
	const [months, setMonths] = useState(String(pauseMonths[0]));
	const [resuming, setResuming] = useState(false);
	const monthsLabel = (count: number) => formatCount(count, { one: "month", other: "months" });

	const resume = async () => {
		setResuming(true);
		try {
			await onResume();
		} finally {
			setResuming(false);
		}
	};

	if (value.status !== "active") {
		return (
			<Panel title={value.status === "cancelling" ? "Subscription cancelled" : "Subscription paused"}>
				<Stack gap="sm" align="flex-start">
					<Text size="sm">
						{value.status === "cancelling" ? (
							<>
								{planName} ends on <DateText value={value.endsOn} />. Until then everything keeps working.
							</>
						) : (
							<>
								Billing restarts on <DateText value={value.resumesOn} />. Your data and settings are kept until then.
							</>
						)}
					</Text>
					<Button variant="default" loading={resuming} onClick={resume}>
						{value.status === "cancelling" ? "Keep subscription" : "Resume now"}
					</Button>
				</Stack>
			</Panel>
		);
	}

	return (
		<Panel
			title="Cancel subscription"
			footer={
				<Group justify="flex-end">
					<ConfirmAction
						action="Cancel"
						title={`Cancel ${planName}?`}
						consequence={
							<>
								It stays active until <DateText value={periodEnd} />. You can keep it any time before then.
							</>
						}
						tone="danger"
						confirmLabel="Cancel subscription"
						onConfirm={() => onCancel({ reason: reason ?? "", comment })}
						trigger={(open) => (
							<Button variant="outline" color="red" disabled={!reason} onClick={open}>
								Cancel subscription
							</Button>
						)}
					/>
				</Group>
			}
		>
			<Stack gap="md">
				<Text size="sm">
					{planName} stays active until <DateText value={periodEnd} />. After that:
				</Text>
				<List size="sm" spacing={6} center>
					{consequences.map((consequence) => (
						<List.Item
							key={consequence.label}
							icon={
								<ThemeIcon size={18} radius="xl" variant="light" color={consequence.kept ? "gray" : "red"}>
									{consequence.kept ? <TbInfoCircle /> : <TbX />}
								</ThemeIcon>
							}
						>
							{consequence.label}
						</List.Item>
					))}
				</List>
				<Select
					label="Why are you cancelling?"
					placeholder="Choose a reason"
					data={reasons}
					value={reason}
					onChange={setReason}
					required
				/>
				<Textarea
					label="Anything we should know?"
					value={comment}
					onChange={(event) => setComment(event.currentTarget.value)}
					autosize
					minRows={2}
				/>
				<Alert variant="light" color="blue" icon={<TbPlayerPause />} title="Pause instead">
					<Text size="sm">Keep your data and settings without paying. Billing restarts when the pause ends.</Text>
					<Group gap="sm" mt="sm">
						<SegmentedControl
							size="xs"
							value={months}
							onChange={setMonths}
							data={pauseMonths.map((count) => ({ label: monthsLabel(count), value: String(count) }))}
							aria-label="Pause length"
						/>
						<Button size="xs" variant="default" onClick={() => onPause(Number(months))}>
							Pause for {monthsLabel(Number(months))}
						</Button>
					</Group>
				</Alert>
			</Stack>
		</Panel>
	);
}

export interface RefundablePayment {
	invoiceNumber: string;
	customerName: string;
	paidAmount: number;
	refundedAmount: number;
	currency: string;
}

export interface RefundDetails {
	amount: number;
	reason: string;
	note: string;
	creditNote: boolean;
}

const refundReasons = ["Duplicate payment", "Goods damaged in transit", "Delivery not made", "Other"];

interface RefundFormProps {
	payment: RefundablePayment;
	onRefund: (details: RefundDetails) => void | Promise<void>;
	onCancel?: () => void;
}

export function RefundForm({ payment, onRefund, onCancel }: RefundFormProps) {
	const refundable = payment.paidAmount - payment.refundedAmount;
	const [mode, setMode] = useState<"full" | "partial">("full");
	const [partial, setPartial] = useState<number | null>(null);
	const [reason, setReason] = useState<string | null>(null);
	const [note, setNote] = useState("");
	const [creditNote, setCreditNote] = useState(true);
	const [pending, setPending] = useState(false);
	const [failure, setFailure] = useState<string | null>(null);
	const settings = useFormatSettings();
	const money = (amount: number) => formatMoney(amount, payment.currency, settings.locale);

	const amount = mode === "full" ? refundable : (partial ?? 0);
	const amountError =
		mode === "partial" && partial !== null && (partial <= 0 || partial > refundable)
			? partial <= 0
				? "Enter an amount above zero"
				: `You can refund up to ${money(refundable)}`
			: undefined;
	const valid = amount > 0 && amount <= refundable && reason !== null && (reason !== "Other" || note.trim() !== "");

	const submit = async () => {
		setPending(true);
		setFailure(null);
		try {
			await onRefund({ amount, reason: reason ?? "", note: note.trim(), creditNote });
		} catch (error) {
			setFailure(error instanceof Error ? error.message : "The refund didn't go through. Try again.");
		} finally {
			setPending(false);
		}
	};

	return (
		<Stack gap="md">
			<Text size="sm" c="dimmed">
				{payment.customerName} paid {money(payment.paidAmount)}
				{payment.refundedAmount > 0 && `, ${money(payment.refundedAmount)} already refunded`}.
			</Text>
			<SegmentedControl
				value={mode}
				onChange={(next) => setMode(next as "full" | "partial")}
				data={[
					{ label: `Full refund, ${money(refundable)}`, value: "full" },
					{ label: "Partial refund", value: "partial" },
				]}
				aria-label="Refund amount"
			/>
			{mode === "partial" && (
				<MoneyInput
					label="Amount"
					description={`Up to ${money(refundable)}`}
					value={partial}
					onChange={setPartial}
					currency={payment.currency}
					error={amountError}
				/>
			)}
			<Select
				label="Reason"
				placeholder="Choose a reason"
				data={refundReasons}
				value={reason}
				onChange={setReason}
				required
			/>
			<Textarea
				label="Note"
				description={reason === "Other" ? "Required when the reason is Other" : "Kept with the refund in the audit log"}
				value={note}
				onChange={(event) => setNote(event.currentTarget.value)}
				autosize
				minRows={2}
			/>
			<Checkbox
				label={`Send ${payment.customerName} a credit note`}
				checked={creditNote}
				onChange={(event) => setCreditNote(event.currentTarget.checked)}
			/>
			{failure && (
				<Alert variant="light" color="red" icon={<TbAlertTriangle />}>
					{failure}
				</Alert>
			)}
			<Group justify="flex-end" gap="sm">
				{onCancel && (
					<Button variant="default" onClick={onCancel}>
						Cancel
					</Button>
				)}
				<Button disabled={!valid} loading={pending} onClick={submit}>
					{amount > 0 && amount <= refundable ? `Refund ${money(amount)}` : "Refund"}
				</Button>
			</Group>
		</Stack>
	);
}

export function RefundModal({
	opened,
	onClose,
	payment,
	onRefund,
}: {
	opened: boolean;
	onClose: () => void;
	payment: RefundablePayment;
	onRefund: (details: RefundDetails) => void | Promise<void>;
}) {
	return (
		<Modal opened={opened} onClose={onClose} title={`Refund ${payment.invoiceNumber}`} centered>
			<RefundForm
				payment={payment}
				onCancel={onClose}
				onRefund={async (details) => {
					await onRefund(details);
					onClose();
				}}
			/>
		</Modal>
	);
}

interface BillingOverviewProps {
	plan: BillingPlan;
	subscription: BillingSubscription;
	usage: ComponentProps<typeof UsageMeter>[];
	nextInvoice: { date: DateLike; amount: number };
	paymentMethod: PaymentMethod;
	onChangePlan: () => void;
	onManageSeats: () => void;
	onChangePaymentMethod: () => void;
}

export function BillingOverview({
	plan,
	subscription,
	usage,
	nextInvoice,
	paymentMethod,
	onChangePlan,
	onManageSeats,
	onChangePaymentMethod,
}: BillingOverviewProps) {
	const recurring = plan.seatPrice[subscription.interval] * subscription.seats;
	return (
		<SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
			<Panel
				title="Plan"
				actions={
					<Button variant="default" size="xs" onClick={onChangePlan}>
						Change plan
					</Button>
				}
			>
				<Stack gap={4}>
					<Text size="lg" fw={600}>
						{plan.name}
					</Text>
					<Text size="sm" c="dimmed">
						<MoneyText amount={recurring} currency={subscription.currency} />{" "}
						{billingIntervalWord(subscription.interval)}, billed{" "}
						{subscription.interval === "month" ? "monthly" : "annually"}
					</Text>
					<Group gap="xs" mt="xs">
						<Text size="sm">
							{subscription.seatsInUse} of {formatCount(subscription.seats, { one: "seat", other: "seats" })} in use
						</Text>
						<Button variant="subtle" size="compact-sm" onClick={onManageSeats}>
							Manage seats
						</Button>
					</Group>
				</Stack>
			</Panel>
			<Panel title="Usage this period">
				<Stack gap="md">
					{usage.map((meter) => (
						<UsageMeter key={String(meter.label)} {...meter} />
					))}
				</Stack>
			</Panel>
			<Panel
				title="Next invoice"
				actions={
					<Button variant="default" size="xs" onClick={onChangePaymentMethod}>
						Change payment method
					</Button>
				}
			>
				<Stack gap={4}>
					<Text size="lg" fw={600}>
						<MoneyText amount={nextInvoice.amount} currency={subscription.currency} />
					</Text>
					<Text size="sm" c="dimmed">
						On <DateText value={nextInvoice.date} />, charged to {paymentMethodLabel(paymentMethod)}
					</Text>
				</Stack>
			</Panel>
		</SimpleGrid>
	);
}

const billingPlans: BillingPlan[] = [
	{
		id: "team",
		name: "Team",
		description: "Lists, records and review queues",
		seatPrice: { month: 1200, year: 12000 },
	},
	{
		id: "business",
		name: "Business",
		description: "Adds SSO, approvals and the audit log",
		seatPrice: { month: 2400, year: 24000 },
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "Adds sandboxes, data retention controls and a support contact",
		seatPrice: { month: 4000, year: 40000 },
	},
];

const billingSubscription: BillingSubscription = {
	planId: "enterprise",
	interval: "month",
	seats: 24,
	seatsInUse: 18,
	currency: "EUR",
	periodStart: ago({ days: 11 }),
	periodEnd: fromNow({ days: 19 }),
};

function billingDemoCardExpiry() {
	const soon = fromNow({ days: 30 });
	return { expiresMonth: soon.getMonth() + 1, expiresYear: soon.getFullYear() };
}

const billingPaymentMethods: PaymentMethod[] = [
	{ id: "pm_card", type: "card", brand: "Visa", last4: "4242", ...billingDemoCardExpiry() },
	{ id: "pm_sepa", type: "sepa", bankName: "Deutsche Bank", last4: "4410" },
];

const billingInvoices: BillingInvoice[] = Array.from({ length: 14 }, (_, index) => ({
	id: `in_${index}`,
	number: `INV-2026-${String(48 - index).padStart(4, "0")}`,
	issuedAt: ago({ days: 11 + index * 30 }),
	amount: index < 4 ? 96000 : index < 9 ? 88000 : 80000,
	currency: "EUR",
	status: index === 0 ? "pastDue" : index === 6 ? "refunded" : "paid",
}));

const billingCancelConsequences = [
	{ label: "Members sign in with passwords instead of SSO" },
	{ label: "Automation rules stop running" },
	{ label: "Your data can be exported for 12 months", kept: true },
];

const billingCancelReasons = [
	"Too expensive for our team",
	"Missing a feature we need",
	"Moving to another product",
	"We no longer need it",
	"Something else",
];

const billingRefundablePayment: RefundablePayment = {
	invoiceNumber: "INV-0418",
	customerName: "Brightline Health",
	paidAmount: 124000,
	refundedAmount: 0,
	currency: "EUR",
};

function billingDelay(milliseconds = 700) {
	return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}

function BillingPlanDemo() {
	const [choice, setChoice] = useState<PlanChoice>({ planId: "enterprise", interval: "year" });
	return (
		<Panel title="Change plan">
			<PlanPicker
				plans={billingPlans}
				subscription={billingSubscription}
				value={choice}
				onChange={setChoice}
				onConfirm={() => billingDelay()}
			/>
		</Panel>
	);
}

function BillingSeatsDemo() {
	const [seats, setSeats] = useState(26);
	const plan = billingPlans.find((candidate) => candidate.id === billingSubscription.planId) ?? billingPlans[0];
	return (
		<Panel title="Seats">
			<SeatsInput
				value={seats}
				onChange={setSeats}
				subscription={billingSubscription}
				plan={plan}
				onConfirm={() => billingDelay()}
			/>
		</Panel>
	);
}

function BillingPaymentMethodsDemo() {
	const [methods, setMethods] = useState(billingPaymentMethods);
	const [defaultId, setDefaultId] = useState("pm_card");
	return (
		<PaymentMethodCard
			methods={methods}
			defaultId={defaultId}
			nextChargeAt={billingSubscription.periodEnd}
			onMakeDefault={setDefaultId}
			onReplace={() => undefined}
			onAdd={() => undefined}
			onRemove={async (id) => {
				await billingDelay();
				setMethods((current) => current.filter((method) => method.id !== id));
			}}
		/>
	);
}

function BillingCancelDemo() {
	const [status, setStatus] = useState<SubscriptionStatus>({ status: "active" });
	return (
		<CancelSubscriptionFlow
			planName="Enterprise"
			periodEnd={billingSubscription.periodEnd}
			value={status}
			consequences={billingCancelConsequences}
			reasons={billingCancelReasons}
			onCancel={async () => {
				await billingDelay();
				setStatus({ status: "cancelling", endsOn: billingSubscription.periodEnd });
			}}
			onPause={(months) => setStatus({ status: "paused", resumesOn: fromNow({ days: months * 30 }) })}
			onResume={async () => {
				await billingDelay(400);
				setStatus({ status: "active" });
			}}
		/>
	);
}

function BillingInvoicesDemo() {
	const [state, setState] = useState<DataTableState>({
		page: 1,
		pageSize: 6,
		selection: [],
		sort: { field: "issuedAt", direction: "desc" },
	});
	return <InvoicesTable invoices={billingInvoices} state={state} onStateChange={setState} seller="Acme Ops" />;
}

function BillingRefundDemo() {
	const [opened, setOpened] = useState(false);
	const [refunded, setRefunded] = useState(0);
	const payment = { ...billingRefundablePayment, refundedAmount: refunded };
	const refund = async ({ amount }: RefundDetails) => {
		await billingDelay();
		setRefunded((current) => current + amount);
	};

	return (
		<Stack gap="md">
			<Paper withBorder shadow="xl" p="lg">
				<Title order={4} mb="md">
					Refund {payment.invoiceNumber}
				</Title>
				<RefundForm payment={payment} onRefund={refund} />
			</Paper>
			<Panel
				title={`${payment.customerName}, ${payment.invoiceNumber}`}
				description={refunded > 0 ? `${formatMoney(refunded, payment.currency)} refunded` : "Paid by card"}
				actions={
					<Button
						variant="default"
						size="xs"
						leftSection={<TbReceiptRefund />}
						disabled={refunded >= payment.paidAmount}
						onClick={() => setOpened(true)}
					>
						Refund
					</Button>
				}
			>
				<Text size="sm" style={{ fontVariantNumeric: "tabular-nums" }}>
					<MoneyText amount={payment.paidAmount} currency={payment.currency} />
				</Text>
			</Panel>
			<RefundModal opened={opened} onClose={() => setOpened(false)} payment={payment} onRefund={refund} />
		</Stack>
	);
}

function BillingOverviewDemo() {
	const plan = billingPlans.find((candidate) => candidate.id === billingSubscription.planId) ?? billingPlans[0];
	return (
		<BillingOverview
			plan={plan}
			subscription={billingSubscription}
			usage={[
				{
					label: "API calls",
					used: 842_000,
					limit: 1_000_000,
					format: "compact",
					resetsAt: billingSubscription.periodEnd,
				},
				{ label: "Storage", used: 38, limit: 100, unit: "GB" },
			]}
			nextInvoice={{ date: billingSubscription.periodEnd, amount: 96000 }}
			paymentMethod={billingPaymentMethods[0]}
			onChangePlan={() => undefined}
			onManageSeats={() => undefined}
			onChangePaymentMethod={() => undefined}
		/>
	);
}

export function BillingArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<PaymentFailedBanner
					amount={96000}
					currency="EUR"
					method="Visa ending 4242"
					retryAt={fromNow({ days: 3 })}
					onUpdate={() => undefined}
				/>
			</PreviewItem>
			<PreviewItem span="half">
				<TrialEndingBanner endsAt={fromNow({ days: 5 })} planName="Business" onChoosePlan={() => undefined} />
			</PreviewItem>
			<PreviewItem span="full">
				<BillingOverviewDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<BillingPlanDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<BillingSeatsDemo />
				<BillingPaymentMethodsDemo />
			</PreviewItem>
			<PreviewItem span="full">
				<BillingInvoicesDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<BillingCancelDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<BillingRefundDemo />
			</PreviewItem>
		</PreviewGrid>
	);
}

export type ScopeAccess = "none" | "read" | "write";

export interface ScopeResource {
	key: string;
	label: string;
	group: string;
	readOnly?: boolean;
}

export type ScopeValue = Record<string, ScopeAccess>;

export function ScopePicker({
	resources,
	value,
	onChange,
	disabled = false,
}: {
	resources: ScopeResource[];
	value: ScopeValue;
	onChange: (value: ScopeValue) => void;
	disabled?: boolean;
}) {
	const groups = [...new Set(resources.map((resource) => resource.group))];
	const granted = resources.filter((resource) => (value[resource.key] ?? "none") !== "none").length;
	const writable = resources.filter((resource) => value[resource.key] === "write").length;

	return (
		<Stack gap="xs">
			<Table verticalSpacing={6} horizontalSpacing={0}>
				<Table.Tbody>
					{groups.map((group) => (
						<Fragment key={group}>
							<Table.Tr>
								<Table.Td colSpan={2} pt="sm">
									<Text size="xs" c="dimmed" fw={500}>
										{group}
									</Text>
								</Table.Td>
							</Table.Tr>
							{resources
								.filter((resource) => resource.group === group)
								.map((resource) => (
									<Table.Tr key={resource.key}>
										<Table.Td>
											<Text size="sm">{resource.label}</Text>
										</Table.Td>
										<Table.Td ta="right">
											<SegmentedControl
												size="xs"
												aria-label={`${resource.label} access`}
												disabled={disabled}
												value={value[resource.key] ?? "none"}
												onChange={(access) => onChange({ ...value, [resource.key]: access as ScopeAccess })}
												data={[
													{ value: "none", label: "No access" },
													{ value: "read", label: "Read" },
													...(resource.readOnly ? [] : [{ value: "write", label: "Read and write" }]),
												]}
											/>
										</Table.Td>
									</Table.Tr>
								))}
						</Fragment>
					))}
				</Table.Tbody>
			</Table>
			<Text size="xs" c="dimmed">
				{granted === 0
					? "A key needs access to at least one resource."
					: `${formatCount(granted, { one: "resource", other: "resources" })}, ${writable} with write access`}
			</Text>
		</Stack>
	);
}

export function describeScopes(scopes: ScopeValue, resources: ScopeResource[], locale?: string) {
	const list = new Intl.ListFormat(locale, { type: "conjunction" });
	const labelsWith = (access: ScopeAccess) =>
		resources
			.filter((resource) => scopes[resource.key] === access)
			.map((resource) => resource.label.toLocaleLowerCase(locale));
	const writes = labelsWith("write");
	const reads = labelsWith("read");
	const parts = [
		writes.length > 0 ? `read and write ${list.format(writes)}` : null,
		reads.length > 0 ? `read ${list.format(reads)}` : null,
	].filter((part): part is string => part !== null);
	if (parts.length === 0) return "No access";
	const sentence = parts.join("; ");
	return sentence.charAt(0).toLocaleUpperCase(locale) + sentence.slice(1);
}

export interface ApiKey {
	id: string;
	name: string;
	prefix: string;
	lastFour: string;
	scopes: ScopeValue;
	createdBy: string;
	lastUsedAt: Date | null;
	expiresAt: Date | null;
}

export interface ApiKeyDraft {
	name: string;
	scopes: ScopeValue;
	expiresInDays: number | null;
}

interface ApiKeysTableProps {
	keys: ApiKey[];
	resources: ScopeResource[];
	onCreate: (draft: ApiKeyDraft) => Promise<{ secret: string }> | { secret: string };
	onRevoke: (key: ApiKey) => void | Promise<void>;
}

const apiKeysTableExpiry = [
	{ value: "30", label: "In 30 days" },
	{ value: "90", label: "In 90 days" },
	{ value: "365", label: "In a year" },
	{ value: "never", label: "Never" },
];

const apiKeysTableColumn = createColumnHelpers<ApiKey>();

export function ApiKeysTable({ keys, resources, onCreate, onRevoke }: ApiKeysTableProps) {
	const [tableState, setTableState] = useState<DataTableState>({ page: 1, pageSize: 10, selection: [] });
	const [stage, setStage] = useState<"closed" | "form" | "created">("closed");
	const [name, setName] = useState("");
	const [scopes, setScopes] = useState<ScopeValue>({});
	const [expiry, setExpiry] = useState("90");
	const [failure, setFailure] = useState<string | null>(null);
	const [secret, setSecret] = useState<string | null>(null);

	const hasScope = Object.values(scopes).some((access) => access !== "none");
	const nameTaken = keys.some((key) => key.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase());

	const openForm = () => {
		setName("");
		setScopes({});
		setExpiry("90");
		setFailure(null);
		setSecret(null);
		setStage("form");
	};

	const [create, pending] = usePendingAction(async () => {
		setFailure(null);
		try {
			const created = await onCreate({
				name: name.trim(),
				scopes,
				expiresInDays: expiry === "never" ? null : Number(expiry),
			});
			setSecret(created.secret);
			setStage("created");
		} catch (error) {
			setFailure(error instanceof Error ? error.message : "The key wasn't created. Try again.");
		}
	});
	const canCreate = name.trim() !== "" && !nameTaken && hasScope && !pending;

	const soon = fromNow({ days: 14 }).getTime();

	return (
		<Stack gap="md">
			<Group justify="space-between" align="flex-start" wrap="nowrap">
				<Box>
					<Title order={5}>API keys</Title>
					<Text size="sm" c="dimmed" mt={2}>
						Keys act as the workspace, not as a person. Requests made with them show in the audit log under the key's
						name.
					</Text>
				</Box>
				<Button leftSection={<TbPlus />} onClick={openForm} style={{ flexShrink: 0 }}>
					Create key
				</Button>
			</Group>
			<DataTable
				rows={keys}
				total={keys.length}
				rowId="id"
				rowLabel={(key) => key.name}
				itemName={{ singular: "key", plural: "keys" }}
				state={tableState}
				onStateChange={setTableState}
				minWidth={720}
				emptyState={
					<EmptyState
						icon={<TbKey />}
						title="No API keys yet"
						description="Create a key to call the API from your own systems."
					>
						<EmptyState.Actions>
							<Button leftSection={<TbPlus />} onClick={openForm}>
								Create key
							</Button>
						</EmptyState.Actions>
					</EmptyState>
				}
				columns={[
					{
						key: "name",
						header: "Name",
						render: (key) => (
							<Box miw={0}>
								<Text size="sm" fw={500}>
									{key.name}
								</Text>
								<Text size="xs" c="dimmed" ff="monospace">
									{key.prefix}…{key.lastFour}
								</Text>
							</Box>
						),
					},
					{
						key: "scopes",
						header: "Access",
						render: (key) => <TruncatedText value={describeScopes(key.scopes, resources)} size="sm" maw={400} />,
					},
					{
						key: "lastUsedAt",
						header: "Last used",
						render: (key) =>
							key.lastUsedAt ? (
								<RelativeTime value={key.lastUsedAt} capitalize />
							) : (
								<Text span size="sm" c="dimmed">
									Never
								</Text>
							),
					},
					{
						key: "expiresAt",
						header: "Expires",
						render: (key) =>
							key.expiresAt ? (
								<Text
									span
									size="sm"
									c={key.expiresAt.getTime() < soon ? "var(--mantine-color-orange-text)" : undefined}
								>
									<DateText value={key.expiresAt} />
								</Text>
							) : (
								<Text span size="sm" c="dimmed">
									Never
								</Text>
							),
					},
					apiKeysTableColumn.actions(
						[
							{
								label: "Revoke",
								icon: <TbTrash />,
								tone: "danger",
								confirmation: "Requests using this key start failing straight away. This can't be undone.",
								onClick: (key) => {
									void onRevoke(key);
								},
							},
						],
						{ label: (key) => key.name },
					),
				]}
			/>

			<Modal
				opened={stage !== "closed"}
				onClose={() => !pending && setStage("closed")}
				title={stage === "created" ? "Copy your new key" : "Create an API key"}
				size="lg"
			>
				{stage === "created" && secret ? (
					<Stack gap="md">
						<Text size="sm">{name.trim()} is ready. Store the key in your secrets manager before you close this.</Text>
						<SecretField
							label="Secret key"
							revealedValue={secret}
							prefix="gw_live_"
							lastFour={secret.slice(-4)}
							shownOnce
						/>
						<Group justify="flex-end">
							<Button onClick={() => setStage("closed")}>Done</Button>
						</Group>
					</Stack>
				) : (
					<Stack gap="md">
						<TextInput
							label="Name"
							description="So you can tell keys apart in the list and the audit log"
							placeholder="Production backend"
							value={name}
							onChange={(event) => setName(event.currentTarget.value)}
							error={nameTaken ? "A key already has this name. Pick another one." : null}
							data-autofocus
						/>
						<Box>
							<Text size="sm" fw={500}>
								Access
							</Text>
							<ScopePicker resources={resources} value={scopes} onChange={setScopes} />
						</Box>
						<Select
							label="Expires"
							data={apiKeysTableExpiry}
							value={expiry}
							onChange={(next) => setExpiry(next ?? "90")}
							allowDeselect={false}
							comboboxProps={{ withinPortal: false }}
						/>
						{failure && (
							<Alert color="red" icon={<TbAlertTriangle />}>
								{failure}
							</Alert>
						)}
						<Group justify="flex-end" gap="sm">
							<Button variant="default" onClick={() => setStage("closed")} disabled={pending}>
								Cancel
							</Button>
							<Button onClick={create} disabled={!canCreate} loading={pending}>
								Create key
							</Button>
						</Group>
					</Stack>
				)}
			</Modal>
		</Stack>
	);
}

export interface WebhookEventType {
	key: string;
	description: string;
}

export interface WebhookEndpoint {
	id: string;
	url: string;
	events: string[];
	enabled: boolean;
	health: "healthy" | "failing";
	failingSince?: Date;
	secretLastFour: string;
	secretRotatedAt: Date | null;
}

export const webhookEndpointStatus = defineStatusMap({
	healthy: ["Healthy", "success"],
	failing: ["Failing", "danger"],
	disabled: ["Off", "neutral"],
});

interface WebhookEndpointsProps {
	endpoints: WebhookEndpoint[];
	eventTypes: WebhookEventType[];
	onAdd?: () => void;
	onEnabledChange: (id: string, enabled: boolean) => void;
	onEventsChange: (id: string, events: string[]) => void;
	onRevealSecret: (id: string) => Promise<string> | string;
	onRotateSecret: (id: string) => Promise<string> | string;
	onSendTest: (id: string) => Promise<void> | void;
	onDelete: (id: string) => Promise<void> | void;
	defaultExpandedId?: string;
}

export function WebhookEndpoints({
	endpoints,
	eventTypes,
	defaultExpandedId,
	onAdd,
	onEnabledChange,
	onEventsChange,
	onRevealSecret,
	onRotateSecret,
	onSendTest,
	onDelete,
}: WebhookEndpointsProps) {
	const [revealed, setRevealed] = useState<Record<string, string>>({});
	const [rotated, setRotated] = useState<Record<string, boolean>>({});
	const [rotating, setRotating] = useState<WebhookEndpoint | null>(null);
	const [testing, setTesting] = useState<string | null>(null);

	const reveal = async (id: string) => {
		const secret = await onRevealSecret(id);
		setRevealed((current) => ({ ...current, [id]: secret }));
	};
	const hide = (id: string) => {
		setRevealed(({ [id]: _hidden, ...rest }) => rest);
		setRotated(({ [id]: _rotated, ...rest }) => rest);
	};
	const sendTest = async (id: string) => {
		setTesting(id);
		try {
			await onSendTest(id);
		} finally {
			setTesting(null);
		}
	};

	return (
		<Panel
			title="Webhooks"
			description="Every request is signed with the endpoint's secret, so your server can check it came from Ops Console."
			actions={
				onAdd && (
					<Button variant="default" size="xs" leftSection={<TbPlus />} onClick={onAdd}>
						Add endpoint
					</Button>
				)
			}
			flush
		>
			{endpoints.length === 0 ? (
				<EmptyState
					py="xl"
					title="No endpoints yet"
					description="Add an endpoint to get an HTTPS request when an invoice is paid or a delivery changes."
				/>
			) : (
				<Accordion chevronPosition="left" defaultValue={defaultExpandedId}>
					{endpoints.map((endpoint) => {
						const status = endpoint.enabled ? endpoint.health : "disabled";
						return (
							<Accordion.Item key={endpoint.id} value={endpoint.id}>
								<Accordion.Control>
									<Group justify="space-between" wrap="nowrap" gap="sm">
										<Box miw={0}>
											<TruncatedText value={endpoint.url} mode="middle" monospace size="sm" />
											<Text size="xs" c="dimmed">
												{formatCount(endpoint.events.length, { one: "event", other: "events" })}
											</Text>
										</Box>
										<StatusBadge value={status} tones={webhookEndpointStatus} />
									</Group>
								</Accordion.Control>
								<Accordion.Panel>
									<Stack gap="md">
										{endpoint.enabled && endpoint.health === "failing" && (
											<Alert color="red" icon={<TbAlertTriangle />} p="sm">
												Deliveries have failed since{" "}
												{endpoint.failingSince ? <RelativeTime value={endpoint.failingSince} /> : "the last attempt"}.
												We retry for 3 days, then turn the endpoint off.
											</Alert>
										)}
										<Switch
											label="Send events to this endpoint"
											checked={endpoint.enabled}
											onChange={(event) => onEnabledChange(endpoint.id, event.currentTarget.checked)}
										/>
										<Checkbox.Group
											label="Events"
											value={endpoint.events}
											onChange={(events) => onEventsChange(endpoint.id, events)}
										>
											<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs" mt="xs">
												{eventTypes.map((eventType) => (
													<Checkbox
														key={eventType.key}
														value={eventType.key}
														label={
															<Text span size="sm" ff="monospace">
																{eventType.key}
															</Text>
														}
														description={eventType.description}
													/>
												))}
											</SimpleGrid>
										</Checkbox.Group>
										<SecretField
											label="Signing secret"
											prefix="whsec_"
											lastFour={endpoint.secretLastFour}
											revealedValue={revealed[endpoint.id]}
											onReveal={() => void reveal(endpoint.id)}
											onHide={() => hide(endpoint.id)}
											onRotate={() => setRotating(endpoint)}
											rotatedAt={endpoint.secretRotatedAt ?? undefined}
											shownOnce={rotated[endpoint.id] === true}
										/>
										<Group justify="space-between" gap="sm">
											<Button
												variant="default"
												size="xs"
												leftSection={<TbSend />}
												loading={testing === endpoint.id}
												disabled={!endpoint.enabled}
												onClick={() => void sendTest(endpoint.id)}
											>
												Send a test event
											</Button>
											<ConfirmAction
												action="Delete"
												target={endpoint.url}
												tone="danger"
												consequence="Events stop being sent to it straight away. Past deliveries stay in the log."
												onConfirm={() => onDelete(endpoint.id)}
												trigger={(open) => (
													<Button variant="subtle" color="red" size="xs" leftSection={<TbTrash />} onClick={open}>
														Delete endpoint
													</Button>
												)}
											/>
										</Group>
									</Stack>
								</Accordion.Panel>
							</Accordion.Item>
						);
					})}
				</Accordion>
			)}
			<ConfirmAction
				opened={rotating !== null}
				onClose={() => setRotating(null)}
				action="Rotate"
				title="Rotate the signing secret?"
				confirmLabel="Rotate secret"
				consequence="The old secret keeps working for 24 hours, so you have time to update your server."
				onConfirm={async () => {
					if (!rotating) return;
					const secret = await onRotateSecret(rotating.id);
					setRevealed((current) => ({ ...current, [rotating.id]: secret }));
					setRotated((current) => ({ ...current, [rotating.id]: true }));
				}}
			/>
		</Panel>
	);
}

export interface WebhookDelivery {
	id: string;
	event: string;
	endpointUrl: string;
	status: "succeeded" | "failed" | "retrying";
	responseCode: number | null;
	durationMilliseconds: number | null;
	at: Date;
	attempt: number;
	maxAttempts: number;
	nextRetryAt?: Date;
	payload: unknown;
	responseBody?: string;
}

export const webhookDeliveryStatus = defineStatusMap({
	succeeded: ["Delivered", "success"],
	failed: ["Failed", "danger"],
	retrying: ["Retrying", "warning"],
});

interface WebhookDeliveriesProps {
	deliveries: WebhookDelivery[];
	selectedId: string | null;
	onSelect: (id: string | null) => void;
	onResend: (id: string) => Promise<void> | void;
	height?: number;
}

function webhookDeliveriesResponse(delivery: WebhookDelivery) {
	if (delivery.responseCode === null) return "No response";
	const milliseconds = delivery.durationMilliseconds;
	if (milliseconds === null) return String(delivery.responseCode);
	// "182 ms" under a second, "10 s" above
	const duration =
		milliseconds < 1000
			? new Intl.NumberFormat(undefined, { style: "unit", unit: "millisecond", unitDisplay: "short" }).format(
					milliseconds,
				)
			: new Intl.NumberFormat(undefined, {
					style: "unit",
					unit: "second",
					unitDisplay: "short",
					maximumFractionDigits: 1,
				}).format(milliseconds / 1000);
	return `${delivery.responseCode} in ${duration}`;
}

export function WebhookDeliveries({
	deliveries,
	selectedId,
	onSelect,
	onResend,
	height = 520,
}: WebhookDeliveriesProps) {
	const [resend, resending] = usePendingAction(onResend);
	const index = deliveries.findIndex((delivery) => delivery.id === selectedId);

	return (
		<SplitView
			items={deliveries}
			itemId="id"
			selectedId={selectedId}
			onSelect={onSelect}
			onNext={() => index < deliveries.length - 1 && onSelect(deliveries[index + 1].id)}
			onPrevious={() => index > 0 && onSelect(deliveries[index - 1].id)}
			listTitle="Deliveries"
			listCount={deliveries.length}
			shortcutGroup="Webhook deliveries"
			height={height}
			listWidth={340}
			renderItem={(delivery) => (
				<Stack gap={2}>
					<Group justify="space-between" wrap="nowrap" gap="xs">
						<Text size="sm" ff="monospace" truncate>
							{delivery.event}
						</Text>
						<StatusBadge value={delivery.status} tones={webhookDeliveryStatus} size="sm" />
					</Group>
					<Text size="xs" c="dimmed">
						<RelativeTime value={delivery.at} capitalize /> · {webhookDeliveriesResponse(delivery)}
					</Text>
				</Stack>
			)}
			renderDetail={(delivery) => (
				<Stack gap="md" p="lg">
					<Group justify="space-between" align="flex-start" wrap="nowrap">
						<Box miw={0}>
							<Text size="lg" fw={600} ff="monospace">
								{delivery.event}
							</Text>
							<Text size="sm" c="dimmed">
								<RelativeTime value={delivery.at} capitalize />
							</Text>
						</Box>
						<Button
							variant="default"
							size="xs"
							leftSection={<TbRefresh />}
							loading={resending}
							onClick={() => resend(delivery.id)}
						>
							Resend
						</Button>
					</Group>
					<DataList>
						<DataList.Item>
							<DataList.ItemLabel>Status</DataList.ItemLabel>
							<DataList.ItemValue>
								<StatusBadge value={delivery.status} tones={webhookDeliveryStatus} />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Endpoint</DataList.ItemLabel>
							<DataList.ItemValue>
								<TruncatedText value={delivery.endpointUrl} mode="middle" monospace size="sm" />
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Response</DataList.ItemLabel>
							<DataList.ItemValue>{webhookDeliveriesResponse(delivery)}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Attempt</DataList.ItemLabel>
							<DataList.ItemValue>
								{delivery.attempt} of {delivery.maxAttempts}
								{delivery.nextRetryAt && (
									<Text span size="sm" c="dimmed">
										{" "}
										· next <RelativeTime value={delivery.nextRetryAt} />
									</Text>
								)}
							</DataList.ItemValue>
						</DataList.Item>
					</DataList>
					<Box>
						<Text size="sm" fw={500} mb={6}>
							Request body
						</Text>
						<JsonViewer value={delivery.payload} collapsedDepth={2} />
					</Box>
					<Box>
						<Text size="sm" fw={500} mb={6}>
							Response body
						</Text>
						{delivery.responseBody ? (
							<Code block>{delivery.responseBody}</Code>
						) : (
							<Text size="sm" c="dimmed">
								{emptyValue}
							</Text>
						)}
					</Box>
				</Stack>
			)}
			emptyDetail={
				<EmptyState py="xl" title="Pick a delivery" description="Its request, response and attempts show here." />
			}
		/>
	);
}

export interface CodeSnippet {
	language: string;
	label: string;
	code: string;
}

export function CodeSnippetTabs({ snippets, title }: { snippets: CodeSnippet[]; title?: ReactNode }) {
	return (
		<Panel title={title ?? "Example request"} flush>
			<Tabs defaultValue={snippets[0]?.language}>
				<Tabs.List px="md">
					{snippets.map((snippet) => (
						<Tabs.Tab key={snippet.language} value={snippet.language}>
							{snippet.label}
						</Tabs.Tab>
					))}
				</Tabs.List>
				{snippets.map((snippet) => (
					<Tabs.Panel key={snippet.language} value={snippet.language} pos="relative">
						<Code block style={{ borderRadius: 0, paddingInlineEnd: 48 }}>
							{snippet.code}
						</Code>
						<Box pos="absolute" top={8} right={8}>
							<CopyButton value={snippet.code} timeout={2000}>
								{({ copied, copy }) => (
									<Tooltip label={copied ? "Copied" : "Copy"} withArrow>
										<ActionIcon
											variant="default"
											color={copied ? "green" : "gray"}
											aria-label={`Copy the ${snippet.label} example`}
											onClick={copy}
										>
											{copied ? <TbCheck /> : <TbCopy />}
										</ActionIcon>
									</Tooltip>
								)}
							</CopyButton>
						</Box>
					</Tabs.Panel>
				))}
			</Tabs>
		</Panel>
	);
}

const developerAreaResources: ScopeResource[] = [
	{ key: "shipments", label: "Shipments", group: "Operations" },
	{ key: "deliveries", label: "Deliveries", group: "Operations" },
	{ key: "invoices", label: "Invoices", group: "Finance" },
	{ key: "payments", label: "Payments", group: "Finance" },
	{ key: "customers", label: "Customers", group: "Customers" },
	{ key: "auditLog", label: "Audit log", group: "Workspace", readOnly: true },
];

const developerAreaKeys: ApiKey[] = [
	{
		id: "key_1",
		name: "Production backend",
		prefix: "gw_live_",
		lastFour: "4f2a",
		scopes: { invoices: "write", customers: "write", payments: "read", shipments: "read" },
		createdBy: users.anna.name,
		lastUsedAt: ago({ minutes: 2 }),
		expiresAt: null,
	},
	{
		id: "key_2",
		name: "Zapier",
		prefix: "gw_live_",
		lastFour: "9c1e",
		scopes: { customers: "read", invoices: "read" },
		createdBy: users.lea.name,
		lastUsedAt: ago({ days: 3 }),
		expiresAt: fromNow({ days: 9 }),
	},
	{
		id: "key_3",
		name: "Data warehouse export",
		prefix: "gw_live_",
		lastFour: "77b0",
		scopes: { invoices: "read", payments: "read", shipments: "read", deliveries: "read" },
		createdBy: users.jean.name,
		lastUsedAt: null,
		expiresAt: fromNow({ days: 320 }),
	},
];

function developerAreaRandomSecret(prefix: string, length = 24) {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const bytes = crypto.getRandomValues(new Uint8Array(length));
	return prefix + Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
}

function ApiKeysDemo() {
	const [keys, setKeys] = useState(developerAreaKeys);
	return (
		<ApiKeysTable
			keys={keys}
			resources={developerAreaResources}
			onCreate={async (draft) => {
				await wait(600);
				const secret = developerAreaRandomSecret("gw_live_");
				setKeys((current) => [
					{
						id: `key_${Date.now()}`,
						name: draft.name,
						prefix: "gw_live_",
						lastFour: secret.slice(-4),
						scopes: draft.scopes,
						createdBy: users.anna.name,
						lastUsedAt: null,
						expiresAt: draft.expiresInDays === null ? null : fromNow({ days: draft.expiresInDays }),
					},
					...current,
				]);
				return { secret };
			}}
			onRevoke={(key) => setKeys((current) => current.filter((item) => item.id !== key.id))}
		/>
	);
}

function ScopePickerDemo() {
	const [scopes, setScopes] = useState<ScopeValue>(developerAreaKeys[0].scopes);
	return (
		<Panel title="Access for Production backend" description={describeScopes(scopes, developerAreaResources)}>
			<ScopePicker resources={developerAreaResources} value={scopes} onChange={setScopes} />
		</Panel>
	);
}

const developerAreaEventTypes: WebhookEventType[] = [
	{ key: "invoice.paid", description: "A payment covers the whole invoice" },
	{ key: "invoice.payment_failed", description: "A charge was declined" },
	{ key: "customer.created", description: "Someone signs up or is imported" },
	{ key: "customer.updated", description: "Billing details or owner change" },
	{ key: "delivery.completed", description: "The recipient signed for it" },
	{ key: "delivery.delayed", description: "The carrier reports a new date" },
];

function WebhookEndpointsDemo() {
	const [endpoints, setEndpoints] = useState<WebhookEndpoint[]>([
		{
			id: "we_1",
			url: "https://erp.acme.io/hooks/billing",
			events: ["invoice.paid", "invoice.payment_failed", "customer.updated"],
			enabled: true,
			health: "healthy",
			secretLastFour: "h3Qx",
			secretRotatedAt: ago({ days: 41 }),
		},
		{
			id: "we_2",
			url: "https://warehouse.acme.io/ingest/ops-console/events",
			events: ["delivery.completed", "delivery.delayed"],
			enabled: true,
			health: "failing",
			failingSince: ago({ hours: 5 }),
			secretLastFour: "Zp81",
			secretRotatedAt: null,
		},
	]);
	const change = (id: string, changes: Partial<WebhookEndpoint>) =>
		setEndpoints((current) => current.map((endpoint) => (endpoint.id === id ? { ...endpoint, ...changes } : endpoint)));

	return (
		<WebhookEndpoints
			endpoints={endpoints}
			defaultExpandedId="we_2"
			eventTypes={developerAreaEventTypes}
			onAdd={() => undefined}
			onEnabledChange={(id, enabled) => change(id, { enabled })}
			onEventsChange={(id, events) => change(id, { events })}
			onRevealSecret={(id) => {
				const endpoint = endpoints.find((item) => item.id === id);
				return `whsec_7Hq2kLm9Rt4VbN8sYx${endpoint?.secretLastFour ?? ""}`;
			}}
			onRotateSecret={async (id) => {
				await wait(500);
				const secret = developerAreaRandomSecret("whsec_", 28);
				change(id, { secretLastFour: secret.slice(-4), secretRotatedAt: new Date() });
				return secret;
			}}
			onSendTest={() => wait(700)}
			onDelete={(id) => setEndpoints((current) => current.filter((endpoint) => endpoint.id !== id))}
		/>
	);
}

const developerAreaDeliveries: WebhookDelivery[] = [
	{
		id: "wd_6",
		event: "delivery.delayed",
		endpointUrl: "https://warehouse.acme.io/ingest/ops-console/events",
		status: "retrying",
		responseCode: 503,
		durationMilliseconds: 10_000,
		at: ago({ minutes: 4 }),
		attempt: 3,
		maxAttempts: 8,
		nextRetryAt: fromNow({ minutes: 16 }),
		payload: {
			id: "evt_9Kq2Wd",
			type: "delivery.delayed",
			created: "2026-11-26T09:41:00Z",
			data: { delivery: "DLV-58213", customer: "cus_6Re4Ef", carrier: "Atlas Haulage", newDate: "2026-11-28" },
		},
		responseBody: "Service Unavailable",
	},
	{
		id: "wd_5",
		event: "invoice.paid",
		endpointUrl: "https://erp.acme.io/hooks/billing",
		status: "succeeded",
		responseCode: 200,
		durationMilliseconds: 182,
		at: ago({ minutes: 38 }),
		attempt: 1,
		maxAttempts: 8,
		payload: {
			id: "evt_3Lm9Pa",
			type: "invoice.paid",
			created: "2026-11-26T09:07:00Z",
			data: { invoice: "INV-0447", customer: "cus_8f2KqL", amount: 1248000, currency: "EUR" },
		},
		responseBody: '{"received":true}',
	},
	{
		id: "wd_4",
		event: "invoice.payment_failed",
		endpointUrl: "https://erp.acme.io/hooks/billing",
		status: "succeeded",
		responseCode: 200,
		durationMilliseconds: 240,
		at: ago({ hours: 2 }),
		attempt: 1,
		maxAttempts: 8,
		payload: {
			id: "evt_7Tz1Qc",
			type: "invoice.payment_failed",
			created: "2026-11-26T07:44:00Z",
			data: { invoice: "INV-0441", customer: "cus_5Tz1Pc", reason: "card_declined" },
		},
		responseBody: '{"received":true}',
	},
	{
		id: "wd_3",
		event: "delivery.completed",
		endpointUrl: "https://warehouse.acme.io/ingest/ops-console/events",
		status: "failed",
		responseCode: null,
		durationMilliseconds: null,
		at: ago({ hours: 6 }),
		attempt: 8,
		maxAttempts: 8,
		payload: {
			id: "evt_1Qa9Ds",
			type: "delivery.completed",
			created: "2026-11-26T03:12:00Z",
			data: { delivery: "DLV-58190", customer: "cus_1Qa9Ds", signedBy: "M. Duarte" },
		},
	},
	{
		id: "wd_2",
		event: "customer.updated",
		endpointUrl: "https://erp.acme.io/hooks/billing",
		status: "succeeded",
		responseCode: 204,
		durationMilliseconds: 96,
		at: ago({ days: 1, hours: 2 }),
		attempt: 1,
		maxAttempts: 8,
		payload: {
			id: "evt_2Nv8Ns",
			type: "customer.updated",
			created: "2026-11-25T07:30:00Z",
			data: { customer: "cus_2Nv8Ns", changed: ["billingEmail"] },
		},
	},
];

function WebhookDeliveriesDemo() {
	const [selectedId, setSelectedId] = useState<string | null>(developerAreaDeliveries[0].id);
	return (
		<WebhookDeliveries
			deliveries={developerAreaDeliveries}
			selectedId={selectedId}
			onSelect={setSelectedId}
			onResend={() => wait(700)}
		/>
	);
}

const developerAreaSnippets: CodeSnippet[] = [
	{
		language: "curl",
		label: "curl",
		code: `curl https://api.company.com/v1/invoices?status=open \\
  -H "Authorization: Bearer $OPS_CONSOLE_KEY"`,
	},
	{
		language: "javascript",
		label: "JavaScript",
		code: `const response = await fetch("https://api.company.com/v1/invoices?status=open", {
  headers: { Authorization: \`Bearer \${process.env.OPS_CONSOLE_KEY}\` },
});
const { data: invoices } = await response.json();`,
	},
	{
		language: "python",
		label: "Python",
		code: `import os, requests

response = requests.get(
    "https://api.company.com/v1/invoices",
    params={"status": "open"},
    headers={"Authorization": f"Bearer {os.environ['OPS_CONSOLE_KEY']}"},
)
invoices = response.json()["data"]`,
	},
];

export function DeveloperArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<ApiKeysDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<ScopePickerDemo />
			</PreviewItem>
			<PreviewItem span="half">
				<CodeSnippetTabs title="List open invoices" snippets={developerAreaSnippets} />
			</PreviewItem>
			<PreviewItem span="full">
				<WebhookEndpointsDemo />
			</PreviewItem>
			<PreviewItem span="full">
				<WebhookDeliveriesDemo />
			</PreviewItem>
		</PreviewGrid>
	);
}

function screensThreadUser(user: User): ThreadUser {
	return { id: user.id, name: user.name, email: user.email, color: user.color };
}

function screensRequest() {
	return new Promise<void>((resolve) => setTimeout(resolve, 600));
}

const screensWorkspaces: Workspace[] = [
	{ id: "ws_acme", name: "Acme Ops", plan: "Enterprise", role: "Owner" },
	{ id: "ws_acme_staging", name: "Acme Ops staging", plan: "Enterprise", role: "Admin" },
];

const screensNavigationSections: SidebarNavSection[] = [
	{
		id: "main",
		items: [
			{ id: "overview", label: "Overview", icon: <TbLayoutDashboard /> },
			{ id: "customers", label: "Customers", icon: <TbUsers />, active: true },
			{ id: "orders", label: "Orders", icon: <TbPackage /> },
			{ id: "reports", label: "Reports", icon: <TbChartBar /> },
		],
	},
	{
		id: "admin",
		label: "Admin",
		items: [
			{ id: "roles", label: "Roles & access", icon: <TbShieldLock /> },
			{ id: "audit", label: "Audit log", icon: <TbHistory /> },
			{ id: "settings", label: "Settings", icon: <TbSettings /> },
		],
	},
];

interface ScreensCustomerRow extends Customer {
	owner: User;
	lastActivityAt: Date;
}

const screensCustomerRows: ScreensCustomerRow[] = customers.map((customer, index) => ({
	...customer,
	owner: [users.anna, users.lea, users.jean][index % 3],
	lastActivityAt: [
		ago({ minutes: 2 }),
		ago({ hours: 1 }),
		ago({ days: 1 }),
		ago({ days: 3 }),
		ago({ days: 9 }),
		ago({ days: 15 }),
	][index],
}));

const screensCustomerColumn = createColumnHelpers<ScreensCustomerRow>();

const screensCustomerFields: FilterField[] = [
	{
		key: "status",
		label: "Status",
		type: "enum",
		options: Object.entries(customerStatus).map(([value, definition]) => ({ value, label: definition.label })),
	},
	{ key: "mrr", label: "MRR", type: "money", currency: "EUR" },
	{
		key: "owner",
		label: "Owner",
		type: "relation",
		options: Object.values(users).map((user) => ({ value: user.name, label: user.name })),
	},
];

function screensCustomerMatches(row: ScreensCustomerRow, node: FilterNode): boolean {
	if (isFilterGroup(node)) {
		const children = filterGroupChildren(node);
		return "and" in node
			? children.every((child) => screensCustomerMatches(row, child))
			: children.some((child) => screensCustomerMatches(row, child));
	}
	const { field, operator, value } = node;
	if (value == null || value === "" || (Array.isArray(value) && value.length === 0)) return true;
	const actual = field === "owner" ? row.owner.name : row[field as keyof ScreensCustomerRow];
	switch (operator) {
		case "isAnyOf":
			return Array.isArray(value) && value.includes(String(actual));
		case "is":
			return String(actual) === String(value);
		case "isNot":
			return String(actual) !== String(value);
		case "greaterThan":
			return Number(actual) > Number(value);
		case "lessThan":
			return Number(actual) < Number(value);
		default:
			return true;
	}
}

function screensCustomerCompare(sort: DataTableSort | undefined) {
	return (first: ScreensCustomerRow, second: ScreensCustomerRow) => {
		if (!sort) return 0;
		const read = (row: ScreensCustomerRow) => {
			const value = row[sort.field as keyof ScreensCustomerRow];
			return value instanceof Date ? value.getTime() : value;
		};
		const left = read(first);
		const right = read(second);
		const order =
			typeof left === "number" && typeof right === "number" ? left - right : String(left).localeCompare(String(right));
		return sort.direction === "asc" ? order : -order;
	};
}

interface ScreensListViewState {
	filter: { and: FilterNode[] };
	sort?: DataTableSort;
}

const screensSavedViews: SavedView<ScreensListViewState>[] = [
	{
		id: "all",
		name: "All customers",
		scope: "team",
		owner: users.lea,
		state: { filter: { and: [] }, sort: { field: "name", direction: "asc" } },
	},
	{
		id: "current",
		name: "Current customers",
		scope: "personal",
		owner: users.anna,
		state: {
			filter: { and: [{ field: "status", operator: "isAnyOf", value: ["active", "trial", "pastDue"] }] },
			sort: { field: "lastActivityAt", direction: "desc" },
		},
	},
	{
		id: "past-due",
		name: "Past due",
		scope: "team",
		owner: users.lea,
		state: { filter: { and: [{ field: "status", operator: "isAnyOf", value: ["pastDue"] }] } },
	},
];

function ScreensCustomerList() {
	const [views, setViews] = useState(screensSavedViews);
	const [activeViewId, setActiveViewId] = useState("current");
	const [filter, setFilter] = useState<{ and: FilterNode[] }>(screensSavedViews[1].state.filter);
	const [search, setSearch] = useState("");
	const [allMatching, setAllMatching] = useState(false);
	const [state, setState] = useState<DataTableState>({
		sort: { field: "lastActivityAt", direction: "desc" },
		page: 1,
		pageSize: 5,
		selection: ["cus_8f2KqL", "cus_5Tz1Pc"],
	});

	const matching = screensCustomerRows
		.filter((row) => screensCustomerMatches(row, filter))
		.filter((row) => `${row.name} ${row.email} ${row.id}`.toLowerCase().includes(search.trim().toLowerCase()))
		.sort(screensCustomerCompare(state.sort));
	const page = matching.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
	const current: ScreensListViewState = { filter, sort: state.sort };

	const applyView = (id: string) => {
		const view = views.find((candidate) => candidate.id === id);
		if (!view) return;
		setActiveViewId(id);
		setFilter(view.state.filter);
		setState({ ...state, sort: view.state.sort, page: 1, selection: [] });
		setAllMatching(false);
	};

	return (
		<Stack gap="md">
			<PageHeader
				title="Customers"
				primaryAction={<Button leftSection={<TbPlus />}>New customer</Button>}
				actions={[
					{ label: "Import", icon: <TbUpload /> },
					{ label: "Export", icon: <TbDownload /> },
				]}
			/>
			<FilterBar
				fields={screensCustomerFields}
				value={filter}
				onChange={(next) => {
					setFilter(next);
					setState({ ...state, page: 1, selection: [] });
					setAllMatching(false);
				}}
				search={search}
				onSearchChange={(next) => {
					setSearch(next);
					setState({ ...state, page: 1 });
				}}
				searchPlaceholder="Search name, email, ID"
				views={
					<SavedViewsMenu
						views={views}
						activeId={activeViewId}
						current={current}
						currentUser={users.anna}
						canShare
						onSelect={applyView}
						onUpdate={(id) => setViews(views.map((view) => (view.id === id ? { ...view, state: current } : view)))}
						onDelete={(id) => setViews(views.filter((view) => view.id !== id))}
						onSave={(name, scope) => {
							const id = `view-${views.length + 1}`;
							setViews([...views, { id, name, scope, owner: users.anna, state: current }]);
							setActiveViewId(id);
						}}
					/>
				}
			/>
			<DataTable
				rows={page}
				total={matching.length}
				rowId="id"
				rowLabel={(row) => row.name}
				itemName={{ singular: "customer", plural: "customers" }}
				columns={[
					screensCustomerColumn.entity("name", { header: "Customer", secondary: "email", sortable: true }),
					screensCustomerColumn.status("status", customerStatus, { header: "Status" }),
					screensCustomerColumn.money("mrr", { header: "MRR", currency: "EUR", sortable: true }),
					screensCustomerColumn.user("owner", { header: "Owner" }),
					screensCustomerColumn.relative("lastActivityAt", { header: "Last activity", sortable: true }),
					screensCustomerColumn.actions(
						[
							{ label: "Assign owner", icon: <TbUserPlus />, onClick: () => undefined },
							{
								label: "Archive",
								icon: <TbArchive />,
								tone: "danger",
								confirmation: "It disappears from lists and search. You can restore it from the archive.",
								onClick: () => undefined,
							},
						],
						{ label: (row) => row.name },
					),
				]}
				state={state}
				onStateChange={(next) => {
					if (next.selection !== state.selection) setAllMatching(false);
					setState(next);
				}}
				filtered={filter.and.length > 0 || search !== ""}
				onClearFilters={() => {
					setFilter({ and: [] });
					setSearch("");
					setState({ ...state, page: 1, selection: [] });
				}}
				bulkActions={[
					{ label: "Export", icon: <TbDownload />, onClick: () => undefined },
					{ label: "Assign owner", icon: <TbUserPlus />, onClick: () => undefined },
					{
						label: "Delete",
						icon: <TbTrash />,
						tone: "danger",
						confirmation: "Their invoices, notes and history are deleted too. This can't be undone.",
						onClick: () => setState({ ...state, selection: [] }),
					},
				]}
				allMatchingSelected={allMatching}
				onSelectAllMatching={() => setAllMatching(true)}
				bulkActionsPosition="table"
			/>
		</Stack>
	);
}

function ScreensAppFrame() {
	const frame = useAppFrame({ storageKey: "groundwork-preview-screens-sidebar" });
	const [workspaceId, setWorkspaceId] = useState(screensWorkspaces[0].id);
	const [colorScheme, setColorScheme] = useState<UserMenuColorScheme>("auto");
	const [shortcutsOpened, shortcuts] = useDisclosure(false);

	return (
		<Box h={800} style={{ ...frameStyle, display: "flex", flexDirection: "column" }}>
			<SystemBanner
				kind="maintenance"
				message="Maintenance on Sunday from 02:00 to 03:00 UTC. Imports and exports pause during the window."
			/>
			<Box style={{ flex: 1, minHeight: 0 }}>
				<AppShell mode="static" layout="alt" header={{ height: 56 }} navbar={frame.navbar} padding="lg">
					<AppShell.Header>
						<Group h="100%" px="md" gap="sm" wrap="nowrap">
							<Burger {...frame.burgerProps} />
							<TextInput
								placeholder="Search customers, orders…"
								aria-label="Search"
								leftSection={<TbSearch />}
								rightSection={<ShortcutHint keys="mod+k" />}
								rightSectionWidth={56}
								readOnly
								miw={0}
								style={{ flex: 1, maxWidth: 320 }}
							/>
							<Box style={{ flex: 1 }} />
							<Badge variant="light" color="orange" style={{ flexShrink: 0 }}>
								Staging
							</Badge>
							<ActionIcon variant="subtle" color="gray" aria-label="Notifications">
								<TbBell />
							</ActionIcon>
							<UserMenu
								user={users.anna}
								colorScheme={colorScheme}
								onColorSchemeChange={setColorScheme}
								items={[{ label: "Profile", icon: <TbUserCircle aria-hidden /> }]}
								onOpenShortcuts={shortcuts.open}
								onSignOut={() => undefined}
							/>
						</Group>
					</AppShell.Header>
					<AppShell.Navbar p="sm">
						<AppShell.Section>
							<WorkspaceSwitcher
								workspaces={screensWorkspaces}
								currentId={workspaceId}
								onSelect={setWorkspaceId}
								collapsed={frame.railed}
							/>
						</AppShell.Section>
						<AppShell.Section grow component={ScrollArea} mt="md" mx="-sm" px="sm">
							<SidebarNav
								sections={screensNavigationSections}
								collapsed={frame.railed}
								onNavigate={(_item, event) => {
									event.preventDefault();
									frame.onNavigate();
								}}
							/>
						</AppShell.Section>
					</AppShell.Navbar>
					<AppShell.Main>
						<ScreensCustomerList />
					</AppShell.Main>
				</AppShell>
			</Box>
			<ShortcutsDialog opened={shortcutsOpened} onClose={shortcuts.close} />
		</Box>
	);
}

const screensCustomerLifecycle = defineStatusMachine({
	states: defineStatusMap({
		active: ["Active", "success"],
		paused: ["Paused", "neutral"],
		churned: ["Churned", "danger"],
	}),
	transitions: [
		{ from: "active", to: "paused", label: "Pause customer" },
		{ from: "paused", to: "active", label: "Resume customer" },
		{
			from: ["active", "paused"],
			to: "churned",
			label: "Mark as churned",
			requiresReason: true,
			tone: "danger",
			consequence: "Their subscription ends at the close of the billing period.",
		},
		{ from: "churned", to: "active", label: "Reactivate customer" },
	],
});

type ScreensLifecycleStatus = "active" | "paused" | "churned";

const screensInvoiceStatus = defineStatusMap({
	paid: ["Paid", "success"],
	open: ["Open", "info"],
	pastDue: ["Past due", "danger"],
	void: ["Void", "neutral"],
});

interface ScreensInvoice {
	id: string;
	issuedAt: Date;
	status: keyof typeof screensInvoiceStatus;
	amount: number;
}

const screensInvoices: ScreensInvoice[] = [
	{ id: "INV-0447", issuedAt: ago({ days: 2 }), status: "open", amount: 1248000 },
	{ id: "INV-0441", issuedAt: ago({ days: 33 }), status: "pastDue", amount: 1248000 },
	{ id: "INV-0418", issuedAt: ago({ days: 63 }), status: "paid", amount: 1155000 },
	{ id: "INV-0392", issuedAt: ago({ days: 94 }), status: "paid", amount: 1155000 },
	{ id: "INV-0377", issuedAt: ago({ days: 98 }), status: "void", amount: 42000 },
	...[1155000, 1040000, 1040000, 960000, 910000, 910000, 820000, 820000, 820000].map(
		(amount, index): ScreensInvoice => ({
			id: `INV-0${360 - index * 21}`,
			issuedAt: ago({ days: 124 + index * 30 }),
			status: "paid",
			amount,
		}),
	),
];

const screensInvoiceColumn = createColumnHelpers<ScreensInvoice>();

const screensActivity: ActivityItem[] = [
	{
		id: "activity-plan",
		at: ago({ minutes: 40 }),
		actor: { type: "user", name: users.anna.name },
		icon: <TbPencil />,
		title: "changed the plan",
		diff: [{ field: "plan", label: "Plan", before: "Growth · monthly", after: "Enterprise · annual" }],
	},
	{
		id: "activity-payment",
		at: ago({ days: 1, hours: 2 }),
		actor: { type: "system", name: "stripe-webhook" },
		icon: <TbAlertTriangle />,
		color: "red",
		title: "recorded a failed payment for INV-0441",
		source: "Stripe",
	},
	{
		id: "activity-impersonation",
		at: ago({ days: 3 }),
		actor: { type: "user", name: users.lea.name, color: users.lea.color },
		onBehalfOf: { name: "Marie D.", email: "marie@acme.io" },
		icon: <TbUserShield />,
		title: "updated the billing contact",
		diff: [{ field: "billingEmail", label: "Billing email", before: "finance@acme.io", after: "billing@acme.io" }],
	},
	{
		id: "activity-key",
		at: ago({ days: 12 }),
		actor: { type: "api_key", name: "erp-sync" },
		icon: <TbKey />,
		title: "synced 14 invoices",
	},
];

const screensInitialComments: ThreadComment[] = [
	{
		id: "comment-1",
		author: screensThreadUser(users.lea),
		body: "Their card expired. Finance sent a new one this morning. @[Anna K.](usr_7Hq2) can you retry INV-0441?",
		internal: true,
		createdAt: ago({ hours: 3 }),
	},
	{
		id: "comment-2",
		author: screensThreadUser(users.anna),
		body: "Retrying tonight with the nightly run.",
		internal: true,
		createdAt: ago({ hours: 2 }),
	},
];

const screensOwnerOptions: EntityOption[] = Object.values(users).map((user) => ({
	id: user.id,
	name: user.name,
	description: user.email,
	color: user.color,
}));

function screensSearchOwners(query: string) {
	const needle = query.trim().toLowerCase();
	return new Promise<EntityOption[]>((resolve) =>
		setTimeout(() => resolve(screensOwnerOptions.filter((option) => option.name.toLowerCase().includes(needle))), 250),
	);
}

const screensEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ScreensCustomerValues {
	legalName: string;
	billingEmail: string;
	plan: string;
	paymentTerms: string;
}

const screensVersionFields: VersionField<ScreensCustomerValues>[] = [
	{ key: "legalName", label: "Legal name" },
	{ key: "billingEmail", label: "Billing email" },
	{ key: "plan", label: "Plan" },
	{ key: "paymentTerms", label: "Payment terms" },
];

const screensCreatedValues: ScreensCustomerValues = {
	legalName: "Acme Logistics SAS",
	billingEmail: "finance@acme.io",
	plan: "Growth · monthly",
	paymentTerms: "45 days",
};

const screensInitialVersions: RecordVersion<ScreensCustomerValues>[] = [
	{
		id: "v4",
		number: 4,
		at: ago({ minutes: 40 }),
		author: { type: "user", name: users.anna.name },
		summary: "Changed the plan",
		values: {
			...screensCreatedValues,
			paymentTerms: "30 days",
			billingEmail: "billing@acme.io",
			plan: "Enterprise · annual",
		},
	},
	{
		id: "v3",
		number: 3,
		at: ago({ days: 3 }),
		author: { type: "user", name: users.lea.name, color: users.lea.color },
		onBehalfOf: { name: "Marie D.", email: "marie@acme.io" },
		summary: "Updated the billing email",
		values: { ...screensCreatedValues, paymentTerms: "30 days", billingEmail: "billing@acme.io" },
	},
	{
		id: "v2",
		number: 2,
		at: ago({ days: 40 }),
		author: { type: "user", name: users.jean.name, color: users.jean.color },
		summary: "Changed the payment terms",
		values: { ...screensCreatedValues, paymentTerms: "30 days" },
	},
	{
		id: "v1",
		number: 1,
		at: ago({ days: 400 }),
		author: { type: "user", name: users.jean.name, color: users.jean.color },
		summary: "Created the customer",
		values: screensCreatedValues,
	},
];

function ScreensCustomerRecord() {
	const [tab, setTab] = useState<string | null>("overview");
	const [status, setStatus] = useState<ScreensLifecycleStatus>("active");
	const [details, setDetails] = useState({
		legalName: "Acme Logistics SAS",
		billingEmail: customers[0].email,
		owner: screensOwnerOptions[0] as EntityOption | null,
	});
	const [invoiceState, setInvoiceState] = useState<DataTableState>({ page: 1, pageSize: 5, selection: [] });
	const [comments, setComments] = useState(screensInitialComments);
	const [versions, setVersions] = useState(screensInitialVersions);
	const [versionId, setVersionId] = useState(screensInitialVersions[1].id);
	const acme = customers[0];

	const invoices = (
		<DataTable
			rows={screensInvoices.slice(
				(invoiceState.page - 1) * invoiceState.pageSize,
				invoiceState.page * invoiceState.pageSize,
			)}
			total={screensInvoices.length}
			rowId="id"
			itemName={{ singular: "invoice", plural: "invoices" }}
			columns={[
				screensInvoiceColumn.id("id", { header: "Invoice" }),
				screensInvoiceColumn.date("issuedAt", { header: "Issued" }),
				screensInvoiceColumn.status("status", screensInvoiceStatus, { header: "Status" }),
				screensInvoiceColumn.money("amount", { header: "Amount", currency: "EUR" }),
			]}
			state={invoiceState}
			onStateChange={setInvoiceState}
			minWidth={480}
		/>
	);

	return (
		<Stack gap="lg">
			<PageHeader
				breadcrumbs={[{ label: "Customers", href: "#customers" }, { label: acme.name }]}
				title={acme.name}
				status={
					<StatusMenu
						machine={screensCustomerLifecycle}
						value={status}
						onChange={async (to) => {
							await screensRequest();
							setStatus(to);
						}}
					/>
				}
				meta={
					<Group gap="xs" wrap="wrap">
						<CopyableId value={acme.id} />
						<Text size="sm" c="dimmed">
							Enterprise · annual
						</Text>
					</Group>
				}
				primaryAction={<Button leftSection={<TbPencil />}>Edit customer</Button>}
				actions={[
					{ label: "Impersonate", icon: <TbUserShield /> },
					{ label: "Open in Stripe", icon: <TbExternalLink /> },
				]}
				moreActions={[
					{ label: "Export data", icon: <TbDownload /> },
					{
						label: "Archive customer",
						icon: <TbArchive />,
						destructive: true,
						confirmTitle: "Archive Acme Logistics?",
						confirmation:
							"It disappears from lists and search, and its invoices stop. You can restore it from the archive.",
					},
				]}
				tabs={
					<Tabs value={tab} onChange={setTab}>
						<Tabs.List>
							<Tabs.Tab value="overview">Overview</Tabs.Tab>
							<Tabs.Tab
								value="invoices"
								rightSection={
									<Badge size="xs" variant="light" color="gray">
										{screensInvoices.length}
									</Badge>
								}
							>
								Invoices
							</Tabs.Tab>
							<Tabs.Tab value="history">History</Tabs.Tab>
						</Tabs.List>
					</Tabs>
				}
			/>

			{tab === "overview" && (
				<Grid type="container" breakpoints={previewBreakpoints} gap="lg">
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Stack gap="lg">
							<Panel title="Details">
								<DataList>
									<DataList.Item>
										<DataList.ItemLabel>Legal name</DataList.ItemLabel>
										<DataList.ItemValue>
											<InlineEdit
												type="text"
												label="Legal name"
												value={details.legalName}
												validate={(value) =>
													value.trim().length < 2 ? "Enter the legal name, at least 2 characters" : null
												}
												onSave={async (legalName) => {
													await screensRequest();
													setDetails((current) => ({ ...current, legalName }));
												}}
											/>
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>VAT number</DataList.ItemLabel>
										<DataList.ItemValue>
											<CopyableId value="FR40123456789" />
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Billing email</DataList.ItemLabel>
										<DataList.ItemValue>
											<InlineEdit
												type="text"
												label="Billing email"
												value={details.billingEmail}
												validate={(value) =>
													screensEmailPattern.test(value) ? null : "Enter an email address, such as name@company.com"
												}
												onSave={async (billingEmail) => {
													await screensRequest();
													setDetails((current) => ({ ...current, billingEmail }));
												}}
											/>
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Owner</DataList.ItemLabel>
										<DataList.ItemValue>
											<InlineEditBase<EntityOption | null>
												label="Owner"
												value={details.owner}
												saveOnEnter={false}
												validate={(value) => (value ? null : "Pick who owns this customer")}
												renderValue={(owner) =>
													owner ? <UserChip user={{ name: owner.name, color: owner.color }} /> : emptyValue
												}
												renderInput={({ value, onChange, error, disabled }) => (
													<EntitySelect
														label={<VisuallyHidden>Owner</VisuallyHidden>}
														placeholder="Search people"
														search={screensSearchOwners}
														recents={screensOwnerOptions}
														noun={{ one: "person", other: "people" }}
														value={value}
														onChange={onChange}
														error={error}
														disabled={disabled}
														defaultDropdownOpened
													/>
												)}
												onSave={async (owner) => {
													await screensRequest();
													setDetails((current) => ({ ...current, owner }));
												}}
											/>
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>MRR</DataList.ItemLabel>
										<DataList.ItemValue>
											<MoneyText amount={acme.mrr} currency="EUR" />
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Customer since</DataList.ItemLabel>
										<DataList.ItemValue>
											<DateText value={ago({ days: 400 })} />
										</DataList.ItemValue>
									</DataList.Item>
								</DataList>
							</Panel>
							<Stack gap="xs">
								<Title order={5}>Latest invoices</Title>
								{invoices}
							</Stack>
							<Panel title="Internal notes">
								<CommentsThread
									comments={comments}
									currentUser={screensThreadUser(users.anna)}
									mentionSearch={(query) =>
										Object.values(users)
											.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
											.map(screensThreadUser)
									}
									onSubmit={({ body, internal }) =>
										setComments([
											...comments,
											{
												id: `comment-${comments.length + 1}`,
												author: screensThreadUser(users.anna),
												body,
												internal,
												createdAt: new Date(),
											},
										])
									}
									onDelete={(id) => setComments(comments.filter((comment) => comment.id !== id))}
								/>
							</Panel>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Panel title="Activity">
							<ActivityTimeline items={screensActivity} />
						</Panel>
					</Grid.Col>
				</Grid>
			)}
			{tab === "invoices" && invoices}
			{tab === "history" && (
				<VersionHistory
					versions={versions}
					fields={screensVersionFields}
					selectedId={versionId}
					onSelect={setVersionId}
					onRestore={async (version) => {
						await screensRequest();
						const number = versions[0].number + 1;
						setVersions([
							{
								id: `v${number}`,
								number,
								at: new Date(),
								author: { type: "user", name: users.anna.name },
								summary: `Restored version ${version.number}`,
								values: version.values,
							},
							...versions,
						]);
						setVersionId(`v${number}`);
					}}
				/>
			)}
		</Stack>
	);
}

const screensPriority = defineStatusMap({
	high: ["High", "danger"],
	normal: ["Normal", "neutral"],
});

const screensReviewStatus = defineStatusMap({
	pending: ["Pending review", "warning"],
	approved: ["Approved", "success"],
	rejected: ["Rejected", "danger"],
	infoRequested: ["Info requested", "info"],
});

type ScreensDecision = Exclude<keyof typeof screensReviewStatus, "pending">;

interface ScreensReviewItem {
	id: string;
	company: string;
	registration: string;
	reason: string;
	priority: keyof typeof screensPriority;
	due: Date;
	documents: string[];
	check: { passed: boolean; message: string };
}

const screensReviewItems: ScreensReviewItem[] = [
	{
		id: "kyc-1",
		company: "Nova SAS",
		registration: "SIREN 852 114 920",
		reason: "Document mismatch",
		priority: "high",
		due: fromNow({ hours: 2 }),
		documents: ["Kbis.pdf", "ID_front.jpg"],
		check: { passed: false, message: "Name on ID ≠ legal representative" },
	},
	{
		id: "kyc-2",
		company: "Dune Studio",
		registration: "SIREN 913 552 018",
		reason: "New account",
		priority: "normal",
		due: fromNow({ hours: 6 }),
		documents: ["Kbis.pdf", "ID_front.jpg", "ID_back.jpg"],
		check: { passed: true, message: "Every check passed" },
	},
	{
		id: "kyc-3",
		company: "Brightline Health",
		registration: "SIREN 804 337 291",
		reason: "Address proof",
		priority: "normal",
		due: fromNow({ days: 1 }),
		documents: ["Utility_bill_october.pdf"],
		check: { passed: false, message: "Bill is older than 3 months" },
	},
	{
		id: "kyc-4",
		company: "Cobalt & Partners",
		registration: "SIREN 791 006 455",
		reason: "Beneficial owner missing",
		priority: "high",
		due: ago({ hours: 3 }),
		documents: ["Kbis.pdf"],
		check: { passed: false, message: "No beneficial owner declared" },
	},
];

function ScreensReviewQueue() {
	const [selectedId, setSelectedId] = useState<string | null>(screensReviewItems[0].id);
	const [decisions, setDecisions] = useState<Record<string, ScreensDecision>>({});
	const rejectButton = useRef<HTMLButtonElement>(null);
	const remaining = screensReviewItems.filter((item) => !decisions[item.id]).length;

	const nextUndecided = (fromId: string, decided: Record<string, ScreensDecision>) => {
		const index = screensReviewItems.findIndex((item) => item.id === fromId);
		return [...screensReviewItems.slice(index + 1), ...screensReviewItems.slice(0, index)].find(
			(item) => !decided[item.id],
		);
	};
	const decide = (decision: ScreensDecision) => {
		if (!selectedId || decisions[selectedId]) return;
		const next = { ...decisions, [selectedId]: decision };
		setDecisions(next);
		setSelectedId(nextUndecided(selectedId, next)?.id ?? null);
	};
	const skip = () => {
		if (!selectedId) return;
		const following = nextUndecided(selectedId, decisions);
		if (following) setSelectedId(following.id);
	};
	// Reject goes through the same confirmation as its button, so R clicks it
	const handleKeys = useShortcutScope(
		[
			{ keys: "a", description: "Approve", handler: () => decide("approved") },
			{ keys: "r", description: "Reject, with a reason", handler: () => rejectButton.current?.click() },
			{ keys: "i", description: "Request info", handler: () => decide("infoRequested") },
		],
		{ group: "Review queue" },
	);

	return (
		<Box onKeyDown={handleKeys}>
			<SplitView
				items={screensReviewItems}
				itemId="id"
				selectedId={selectedId}
				onSelect={setSelectedId}
				height={480}
				shortcutGroup="Review queue"
				listTitle="KYC review"
				listCount={remaining}
				listActions={
					<Select
						size="xs"
						w={110}
						aria-label="Queue"
						data={["Mine", "Unassigned", "Everyone"]}
						defaultValue="Mine"
						allowDeselect={false}
					/>
				}
				renderItem={(item) => (
					<Stack gap={4}>
						<Group justify="space-between" wrap="nowrap" gap="xs">
							<Text size="sm" fw={500} truncate>
								{item.company}
							</Text>
							<SlaTimer due={item.due} warnAt="3h" />
						</Group>
						<Group justify="space-between" wrap="nowrap" gap="xs">
							<Text size="xs" c="dimmed" truncate>
								{item.reason}
							</Text>
							{decisions[item.id] ? (
								<StatusBadge value={decisions[item.id]} tones={screensReviewStatus} size="sm" />
							) : (
								item.priority === "high" && <StatusBadge value="high" tones={screensPriority} size="sm" />
							)}
						</Group>
					</Stack>
				)}
				renderDetail={(item) => {
					const decided = decisions[item.id];
					return (
						<Pane
							withBorder={false}
							h="100%"
							header={
								<Group justify="space-between" wrap="wrap" gap="sm" w="100%">
									<Group gap="sm" wrap="nowrap">
										<Title order={4}>{item.company}</Title>
										<StatusBadge value={decided ?? "pending"} tones={screensReviewStatus} />
									</Group>
									<Text size="xs" c="dimmed">
										Assigned to you
									</Text>
								</Group>
							}
							footer={
								<Group justify="space-between" wrap="wrap" gap="xs">
									<Group gap="xs">
										<Button variant="subtle" color="gray" size="xs" disabled={Boolean(decided)} onClick={skip}>
											Skip
										</Button>
										<Button variant="subtle" color="gray" size="xs" leftSection={<TbUsers />}>
											Reassign
										</Button>
									</Group>
									<Group gap="xs">
										<Button
											variant="default"
											size="xs"
											leftSection={<TbMessageQuestion />}
											rightSection={<ShortcutHint keys="i" />}
											disabled={Boolean(decided)}
											onClick={() => decide("infoRequested")}
										>
											Request info
										</Button>
										<ConfirmAction
											action="Reject"
											target={item.company}
											tone="danger"
											reason={{ label: "Reason sent to the customer", required: true }}
											consequence="They can submit new documents from the same link."
											onConfirm={() => decide("rejected")}
											trigger={(open) => (
												<Button
													ref={rejectButton}
													variant="default"
													size="xs"
													leftSection={<TbX />}
													rightSection={<ShortcutHint keys="r" />}
													disabled={Boolean(decided)}
													onClick={open}
												>
													Reject
												</Button>
											)}
										/>
										<Button
											size="xs"
											leftSection={<TbCheck />}
											rightSection={<ShortcutHint keys="a" />}
											disabled={Boolean(decided)}
											onClick={() => decide("approved")}
										>
											Approve
										</Button>
									</Group>
								</Group>
							}
						>
							<Box px="lg" py="md">
								<DataList>
									<DataList.Item>
										<DataList.ItemLabel>Registration</DataList.ItemLabel>
										<DataList.ItemValue>{item.registration}</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Submitted</DataList.ItemLabel>
										<DataList.ItemValue>{item.documents.join(", ")}</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Check</DataList.ItemLabel>
										<DataList.ItemValue>
											<Text
												span
												inherit
												c={item.check.passed ? "var(--mantine-color-green-text)" : "var(--mantine-color-red-text)"}
											>
												{item.check.message}
											</Text>
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Due</DataList.ItemLabel>
										<DataList.ItemValue>
											<SlaTimer due={item.due} warnAt="3h" />
										</DataList.ItemValue>
									</DataList.Item>
								</DataList>
							</Box>
						</Pane>
					);
				}}
				emptyDetail={
					<Center h="100%">
						<EmptyState
							icon={<TbInbox />}
							withIndicatorBackground
							title="Nothing left in your queue"
							description="New requests appear here as customers submit documents."
						/>
					</Center>
				}
			/>
		</Box>
	);
}

const screensSettingsSaved = {
	name: "Acme Ops",
	timezone: "Europe/Paris",
	requireSso: true,
	sessionLength: "12 hours",
};

const screensSettingsSections: SidebarNavSection[] = [
	{
		id: "workspace",
		label: "Workspace",
		items: [
			{ id: "general", label: "General", active: true },
			{ id: "branding", label: "Branding" },
			{ id: "integrations", label: "Integrations" },
		],
	},
	{
		id: "security",
		label: "Security",
		items: [
			{ id: "sso", label: "SSO" },
			{ id: "sessions", label: "Sessions" },
		],
	},
];

function ScreensSettings() {
	const [saved, setSaved] = useState(screensSettingsSaved);
	const [values, setValues] = useState(screensSettingsSaved);
	const changes = (Object.keys(values) as (keyof typeof values)[]).filter((key) => values[key] !== saved[key]).length;

	return (
		<Group h={620} gap={0} wrap="nowrap" align="stretch" style={frameStyle}>
			<Box
				w={200}
				p="sm"
				visibleFrom="xs"
				style={{ flexShrink: 0, borderRight: "1px solid var(--mantine-color-default-border)" }}
			>
				<SidebarNav
					aria-label="Settings"
					sections={screensSettingsSections}
					onNavigate={(_item, event) => event.preventDefault()}
				/>
			</Box>
			<ScrollArea style={{ flex: 1 }}>
				<Box px="lg" pt="lg" maw={760}>
					<Title order={3} mb="lg">
						General
					</Title>
					<Stack gap="xl">
						<FormSection title="Workspace" description="Shown to members and on exported files.">
							<Stack gap="md">
								<TextInput
									label="Workspace name"
									value={values.name}
									onChange={(event) => setValues({ ...values, name: event.currentTarget.value })}
								/>
								<TimezoneSelect
									label="Default timezone"
									description="Dates in lists and exports use it unless a member picks their own."
									value={values.timezone}
									onChange={(timezone) => timezone && setValues({ ...values, timezone })}
									searchable
								/>
							</Stack>
						</FormSection>
						<Divider />
						<FormSection title="Sign-in" description="Applies to every member, including owners.">
							<Stack gap="md">
								<Switch
									label="Require SSO"
									description={
										values.requireSso
											? "Password sign-in is disabled for all members."
											: "Members can also sign in with a password."
									}
									checked={values.requireSso}
									onChange={(event) => setValues({ ...values, requireSso: event.currentTarget.checked })}
								/>
								<Select
									label="Sign members out after"
									data={["8 hours", "12 hours", "24 hours", "7 days"]}
									value={values.sessionLength}
									onChange={(sessionLength) => sessionLength && setValues({ ...values, sessionLength })}
									allowDeselect={false}
								/>
							</Stack>
						</FormSection>
						<SaveBar
							dirty={changes > 0}
							changesCount={changes}
							saveLabel="Save settings"
							onSave={() => setSaved(values)}
							onDiscard={() => setValues(saved)}
						/>
					</Stack>
				</Box>
			</ScrollArea>
		</Group>
	);
}

type ScreensSignInStep = "sign-in" | "check-sign-in" | "forgot" | "check-reset" | "reset";

function ScreensSignIn() {
	const [step, setStep] = useState<ScreensSignInStep>("sign-in");
	const [email, setEmail] = useState(users.anna.email);
	const [resendAvailableAt, setResendAvailableAt] = useState(() => new Date());
	const sent = (address: string, next: ScreensSignInStep) => {
		setEmail(address);
		setResendAvailableAt(new Date(Date.now() + 30_000));
		setStep(next);
	};
	const resend = () => setResendAvailableAt(new Date(Date.now() + 60_000));

	return (
		<Center mih={560} p="xl" style={frameStyle}>
			<Stack gap="lg" w="100%" maw={380}>
				<Group gap="sm" justify="center">
					<ThemeIcon size={32} radius="sm">
						<TbStack2 />
					</ThemeIcon>
					<Text fw={600} size="lg">
						{app.name}
					</Text>
				</Group>
				{step === "sign-in" && (
					<SignInCard
						description="Use your company account."
						onSso={() => {}}
						defaultEmail={email}
						onForgotPassword={() => setStep("forgot")}
						onSubmit={(values) => {
							if (values.method === "link") sent(values.email, "check-sign-in");
						}}
					/>
				)}
				{step === "check-sign-in" && (
					<CheckEmailCard
						email={email}
						resendAvailableAt={resendAvailableAt}
						onResend={resend}
						onChangeEmail={() => setStep("sign-in")}
					/>
				)}
				{step === "forgot" && (
					<ForgotPasswordCard
						defaultEmail={email}
						onSubmit={(address) => sent(address, "check-reset")}
						onBack={() => setStep("sign-in")}
					/>
				)}
				{step === "check-reset" && (
					<CheckEmailCard
						email={email}
						purpose="reset"
						resendAvailableAt={resendAvailableAt}
						onResend={resend}
						onChangeEmail={() => setStep("forgot")}
					/>
				)}
				{step === "reset" && (
					<ResetPasswordCard email={email} onSubmit={() => setStep("sign-in")} onBack={() => setStep("sign-in")} />
				)}
				{step === "check-reset" ? (
					<Anchor component="button" type="button" size="xs" ta="center" onClick={() => setStep("reset")}>
						Open the reset link
					</Anchor>
				) : (
					<Text size="xs" c="dimmed" ta="center">
						Signed out after 12 hours without activity.
					</Text>
				)}
			</Stack>
		</Center>
	);
}

type ScreensMrrRange = "6m" | "12m";

const screensMrrHistory = [
	{ month: "Dec", mrr: 820000 },
	{ month: "Jan", mrr: 820000 },
	{ month: "Feb", mrr: 910000 },
	{ month: "Mar", mrr: 910000 },
	{ month: "Apr", mrr: 960000 },
	{ month: "May", mrr: 1040000 },
	{ month: "Jun", mrr: 1040000 },
	{ month: "Jul", mrr: 1155000 },
	{ month: "Aug", mrr: 1155000 },
	{ month: "Sep", mrr: 1155000 },
	{ month: "Oct", mrr: 1248000 },
	{ month: "Nov", mrr: 1248000 },
];

const screensHealthFactors: HealthScoreFactor[] = [
	{ label: "Product usage", weight: 0.4, value: 92 },
	{ label: "Payments", weight: 0.3, value: 70 },
	{ label: "Support", weight: 0.3, value: 94 },
];

const screensSignals = [
	{ color: "var(--mantine-color-red-text)", label: "Past due", detail: "INV-0441, 15 days" },
	{ color: "var(--mantine-color-blue-text)", label: "Expansion", detail: "45 of 50 seats used" },
	{ color: undefined, label: "Renewal", detail: "In 99 days" },
] as const;

function ScreensCustomer360() {
	const theme = useMantineTheme();
	const [range, setRange] = useState<ScreensMrrRange>("12m");
	const acme = customers[0];

	return (
		<Stack gap="lg">
			<Group justify="space-between" align="flex-start" gap="md">
				<Group gap="md" wrap="nowrap" miw={0}>
					<Avatar name={acme.name} color="initials" size={52} radius="md" />
					<Box miw={0}>
						<Group gap="sm" wrap="nowrap">
							<Title order={2}>{acme.name}</Title>
							<StatusBadge value={acme.status} tones={customerStatus} />
						</Group>
						<Text size="sm" c="dimmed">
							Enterprise · annual
						</Text>
					</Box>
				</Group>
				<Group gap="lg" wrap="wrap">
					<HealthScore value={86} trend={4} factors={screensHealthFactors} />
					<Group gap="xs">
						<Button variant="default" leftSection={<TbUserShield />}>
							Impersonate
						</Button>
						<Button variant="default" rightSection={<TbExternalLink />}>
							Open in Stripe
						</Button>
					</Group>
				</Group>
			</Group>

			<Grid type="container" breakpoints={previewBreakpoints} gap="md">
				<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
					<StatCard
						label="MRR"
						value={<MoneyText amount={acme.mrr} currency="EUR" wholeUnits />}
						delta={<PercentDelta value={0.08} />}
						comparison="vs last quarter"
						href="#invoices"
						linkLabel="View invoices"
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
					<StatCard label="Seats" value="45 / 50" comparison="5 left on the plan" />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
					<StatCard label="Open tickets" value="2" comparison="1 urgent" href="#tickets" linkLabel="View tickets" />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
					<StatCard label="Active users" value="38" comparison="Signed in this week" />
				</Grid.Col>
			</Grid>

			<Grid type="container" breakpoints={previewBreakpoints} gap="md">
				<Grid.Col span={{ base: 12, lg: 8 }}>
					<ChartCard
						title="MRR"
						range={range}
						ranges={["6m", "12m"]}
						onRangeChange={setRange}
						asOf={ago({ minutes: 12 })}
						source="Stripe"
						dataHref="#invoices"
					>
						{({ height }) => (
							<AreaChart
								h={height}
								data={range === "6m" ? screensMrrHistory.slice(-6) : screensMrrHistory}
								dataKey="month"
								series={[{ name: "mrr", label: "MRR", color: `${theme.primaryColor}.6` }]}
								valueFormatter={(value) => formatMoney(value, "EUR", undefined, { compact: true })}
								curveType="stepAfter"
								withDots={false}
								gridAxis="y"
								tickLine="none"
							/>
						)}
					</ChartCard>
				</Grid.Col>
				<Grid.Col span={{ base: 12, lg: 4 }}>
					<Stack gap="md" h="100%">
						<Panel title="Usage this period">
							<Stack gap="md">
								<UsageMeter
									label="API calls"
									used={842_000}
									limit={1_000_000}
									format="compact"
									resetsAt={fromNow({ days: 6 })}
								/>
								<UsageMeter label="Storage" used={120} limit={500} unit="GB" />
							</Stack>
						</Panel>
						<Panel title="Signals" style={{ flex: 1 }}>
							<Stack gap="xs">
								{screensSignals.map((signal) => (
									<Group key={signal.label} gap="sm" wrap="nowrap">
										<Text size="sm" fw={500} c={signal.color}>
											{signal.label}
										</Text>
										<Text size="sm" c="dimmed" truncate>
											{signal.detail}
										</Text>
									</Group>
								))}
							</Stack>
						</Panel>
					</Stack>
				</Grid.Col>
			</Grid>
		</Stack>
	);
}

export function ScreensArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<ScreensAppFrame />
			</PreviewItem>
			<PreviewItem span="full">
				<ScreensCustomerRecord />
			</PreviewItem>
			<PreviewItem span="full">
				<ScreensReviewQueue />
			</PreviewItem>
			<PreviewItem span="full">
				<ScreensSettings />
			</PreviewItem>
			<PreviewItem span="full">
				<ScreensSignIn />
			</PreviewItem>
			<PreviewItem span="full">
				<ScreensCustomer360 />
			</PreviewItem>
		</PreviewGrid>
	);
}

const previewAreas = [
	{ value: "FoundationsArea", label: "Foundations", Area: FoundationsArea },
	{ value: "AppFrameArea", label: "App frame", Area: AppFrameArea },
	{ value: "FormsArea", label: "Forms and inputs", Area: FormsArea },
	{ value: "DataArea", label: "Data and lists", Area: DataArea },
	{ value: "RecordsArea", label: "Records", Area: RecordsArea },
	{ value: "OperationsArea", label: "Insights and operations", Area: OperationsArea },
	{ value: "AuthArea", label: "Auth", Area: AuthArea },
	{ value: "AccountArea", label: "Account", Area: AccountArea },
	{ value: "BillingArea", label: "Billing", Area: BillingArea },
	{ value: "DeveloperArea", label: "Developers", Area: DeveloperArea },
	{ value: "ScreensArea", label: "Screens", Area: ScreensArea },
];

export function BackofficePreview() {
	return (
		<Tabs defaultValue="ScreensArea" keepMounted={false}>
			<Tabs.List mb="xl">
				{previewAreas.map(({ value, label }) => (
					<Tabs.Tab key={value} value={value}>
						{label}
					</Tabs.Tab>
				))}
			</Tabs.List>
			{previewAreas.map(({ value, Area }) => (
				<Tabs.Panel key={value} value={value}>
					<Area />
				</Tabs.Panel>
			))}
		</Tabs>
	);
}
