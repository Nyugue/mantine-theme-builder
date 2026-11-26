import { AreaChart } from "@mantine/charts";
import {
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
	CloseButton,
	Code,
	Combobox,
	type ComboboxData,
	type ComboboxProps,
	CopyButton,
	DataList,
	Divider,
	EmptyState,
	Flex,
	Grid,
	Group,
	Highlight,
	HoverCard,
	Indicator,
	InputBase,
	Kbd,
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
	NumberInput,
	type NumberInputProps,
	OverflowList,
	Pagination,
	Paper,
	PasswordInput,
	Pill,
	PillsInput,
	Popover,
	Progress,
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
	Switch,
	Table,
	Tabs,
	Text,
	Textarea,
	TextInput,
	ThemeIcon,
	Timeline,
	Title,
	type TitleOrder,
	Tooltip,
	UnstyledButton,
	useCombobox,
	useMantineTheme,
	VisuallyHidden,
} from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import {
	getHotkeyHandler,
	useDebouncedCallback,
	useDisclosure,
	useElementSize,
	useHotkeys,
	useInterval,
	useLocalStorage,
	useMediaQuery,
	useOs,
	useUncontrolled,
} from "@mantine/hooks";
import {
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
	TbArrowUp,
	TbArrowUpRight,
	TbBell,
	TbBookmark,
	TbBuildingSkyscraper,
	TbChartBar,
	TbCheck,
	TbChevronDown,
	TbChevronRight,
	TbClock,
	TbClockCheck,
	TbCopy,
	TbCreditCardOff,
	TbDeviceDesktop,
	TbDots,
	TbDownload,
	TbExternalLink,
	TbFilterOff,
	TbFlask,
	TbHistory,
	TbHourglass,
	TbInbox,
	TbInfoCircle,
	TbKey,
	TbKeyboard,
	TbLayoutDashboard,
	TbLock,
	TbLogout,
	TbMail,
	TbMessageQuestion,
	TbMoon,
	TbNote,
	TbPackage,
	TbPencil,
	TbPlus,
	TbRefresh,
	TbRestore,
	TbRobot,
	TbSearch,
	TbSelector,
	TbSettings,
	TbShieldLock,
	TbSortAscending,
	TbSortDescending,
	TbStack2,
	TbSun,
	TbTool,
	TbTrash,
	TbUpload,
	TbUserCircle,
	TbUserPlus,
	TbUserShield,
	TbUsers,
	TbX,
} from "react-icons/tb";

export const app = { name: "Ops Console" };

interface User {
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

interface Customer {
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

function ago({ days = 0, hours = 0, minutes = 0 }) {
	return new Date(Date.now() - ((days * 24 + hours) * 60 + minutes) * 60_000);
}

function fromNow({ days = 0, hours = 0, minutes = 0 }) {
	return new Date(Date.now() + ((days * 24 + hours) * 60 + minutes) * 60_000);
}

export const previewBreakpoints = { xs: "480px", sm: "640px", md: "860px", lg: "1080px", xl: "1320px" };

const previewSpans = {
	third: { base: 12, md: 6, xl: 4 },
	half: { base: 12, lg: 6 },
	twoThirds: { base: 12, xl: 8 },
	full: { base: 12 },
} as const;

function PreviewGrid({ children }: { children: ReactNode }) {
	return (
		<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
			{children}
		</Grid>
	);
}

function PreviewItem({ span = "third", children }: { span?: keyof typeof previewSpans; children: ReactNode }) {
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

function useFormatSettings() {
	return useContext(formatSettingsContext);
}

export const emptyValue = "—";

type DateLike = Date | string | number;

export const tabularStyle = { fontVariantNumeric: "tabular-nums" } as const;

function toDate(value: DateLike) {
	return value instanceof Date ? value : new Date(value);
}

function currencyFractionDigits(currency: string, locale?: string) {
	return new Intl.NumberFormat(locale, { style: "currency", currency }).resolvedOptions().maximumFractionDigits ?? 2;
}

interface MoneyFormatOptions {
	compact?: boolean;
	wholeUnits?: boolean;
}

function formatMoney(
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

function formatNumber(value: number, { compact = false, locale }: { compact?: boolean; locale?: string } = {}) {
	return new Intl.NumberFormat(locale, compact ? { notation: "compact", maximumFractionDigits: 1 } : undefined).format(
		value,
	);
}

function formatDate(value: DateLike, format: "date" | "datetime" | "time", locale?: string, timeZone?: string) {
	return new Intl.DateTimeFormat(locale, {
		...(format !== "time" && { year: "numeric", month: "short", day: "numeric" }),
		...(format !== "date" && { hour: "2-digit", minute: "2-digit" }),
		...(format === "datetime" && { timeZoneName: "short" }),
		timeZone,
	}).format(toDate(value));
}

interface CountForms {
	one: string;
	other: string;
	zero?: string;
	two?: string;
	few?: string;
	many?: string;
}

function formatCount(count: number, forms: CountForms, locale?: string) {
	const rule = new Intl.PluralRules(locale).select(count);
	return `${formatNumber(count, { locale })} ${forms[rule] ?? forms.other}`;
}

function dayKey(date: Date, timeZone?: string) {
	return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit", timeZone }).format(date);
}

function groupByDay<Item>(items: Item[], getDate: (item: Item) => DateLike, { timeZone }: { timeZone?: string } = {}) {
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

function formatDayLabel(
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

function formatRelative(value: DateLike, now: number, locale?: string) {
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

function MoneyText({
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

function NumberText({
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

function DateText({
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

function RelativeTime({
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

function PercentDelta({
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

type StatusTone = "success" | "info" | "warning" | "danger" | "neutral";

export const statusToneColors: Record<StatusTone, MantineColor> = {
	success: "green",
	info: "blue",
	warning: "orange",
	danger: "red",
	neutral: "gray",
};

type StatusMap<Value extends string> = Record<Value, { label: string; tone: StatusTone }>;

function defineStatusMap<Value extends string>(
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

function StatusBadge<Value extends string>({ value, tones, size }: StatusBadgeProps<Value>) {
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

function CopyableId({ value, size = "sm" }: { value: string; size?: MantineSize }) {
	return (
		<Group gap={2} wrap="nowrap" display="inline-flex">
			<Text span ff="monospace" size={size}>
				{value}
			</Text>
			<CopyableIdButton value={value} label={`Copy ${value}`} />
		</Group>
	);
}

interface UserChipUser {
	name: string;
	email?: string;
	avatarUrl?: string;
	color?: MantineColor;
}

const userChipSizes = { sm: 24, md: 32, lg: 40 } as const;

function UserChip({
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

interface Actor {
	type: "user" | "system" | "api_key";
	name: string;
	color?: MantineColor;
}

function ActorChip({ actor, onBehalfOf }: { actor: Actor; onBehalfOf?: { name: string; email?: string } }) {
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

interface DiffChange {
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

function DiffView({ changes }: { changes: DiffChange[] }) {
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

function formatDuration(minutes: number) {
	const total = Math.round(Math.abs(minutes));
	const days = Math.floor(total / 1440);
	const hours = Math.floor((total % 1440) / 60);
	const rest = total % 60;
	if (days > 0) return `${days}d ${hours}h`;
	if (hours > 0) return `${hours}h ${String(rest).padStart(2, "0")}m`;
	return `${rest}m`;
}

function slaMinutesRemaining(due: DateLike, now = Date.now()) {
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

function SlaTimer({ due, warnAt = "1h", met }: { due: DateLike; warnAt?: string | number; met?: DateLike | null }) {
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

function TypeToConfirm({ phrase, onValidChange }: { phrase: string; onValidChange?: (valid: boolean) => void }) {
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

function formatShortcut(keys: string, apple: boolean) {
	return keys.split("+").map((key) => {
		const symbol = shortcutHintSymbols[key.trim().toLowerCase()];
		return symbol ? symbol[apple ? 0 : 1] : key.trim().toUpperCase();
	});
}

function ShortcutHint({ keys }: { keys: string | string[] }) {
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

interface RegisteredShortcut {
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

function useShortcut(
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

function useRegisteredShortcuts() {
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

interface ScopedShortcut {
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

function useShortcutScope(shortcuts: ScopedShortcut[], { group }: { group: string }) {
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

type PanelProps = Omit<CardProps, "title" | "children"> & {
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	flush?: boolean;
	footer?: ReactNode;
	children?: ReactNode;
};

function Panel({ title, description, actions, flush = false, footer, children, ...cardProps }: PanelProps) {
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

function Pane({ title, count, actions, header, footer, withBorder = true, children, ...boxProps }: PaneProps) {
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

interface AsyncStateError {
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

function AsyncState({
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

interface ConfirmActionDetails {
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

function ConfirmAction({
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

function useUnsavedChangesGuard(dirty: boolean, message = "You have unsaved changes. Leave without saving?") {
	useEffect(() => {
		if (!dirty) return;
		const warn = (event: BeforeUnloadEvent) => event.preventDefault();
		window.addEventListener("beforeunload", warn);
		return () => window.removeEventListener("beforeunload", warn);
	}, [dirty]);

	return { confirmLeave: () => !dirty || window.confirm(message) };
}

type IntlSelectProps = Omit<SelectProps, "data"> & {
	favourites?: string[];
	locale?: string;
};

const intlSelectNoFavourites: string[] = [];

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

function timezoneSelectOffset(timeZone: string) {
	return (
		new Intl.DateTimeFormat("en", { timeZone, timeZoneName: "shortOffset" })
			.formatToParts(new Date())
			.find((part) => part.type === "timeZoneName")?.value ?? ""
	);
}

function TimezoneSelect({ favourites = intlSelectNoFavourites, locale: _locale, ...props }: IntlSelectProps) {
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

function MoneyInput({
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

interface PasswordRuleContext {
	email?: string;
	minLength?: number;
}

interface PasswordRuleResult {
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

function usePasswordRules(password: string, { email, minLength = 12 }: PasswordRuleContext = {}) {
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

function PasswordRules({ password, context }: { password: string; context?: PasswordRuleContext }) {
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

interface EntityOption {
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

function EntitySelect(props: EntitySelectProps) {
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

interface FormSectionProps {
	title: ReactNode;
	description?: ReactNode;
	children: ReactNode;
}

function FormSection({ title, description, children }: FormSectionProps) {
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

interface SaveBarProps {
	dirty: boolean;
	saving?: boolean;
	changesCount?: number;
	onSave: () => void;
	onDiscard: () => void;
	saveLabel?: string;
}

function SaveBar({ dirty, saving = false, changesCount, onSave, onDiscard, saveLabel = "Save changes" }: SaveBarProps) {
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

interface InlineEditInput<Value> {
	value: Value;
	onChange: (value: Value) => void;
	error: string | null;
	disabled: boolean;
	inputProps: { "aria-label": string; autoFocus: boolean; onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void };
}

interface InlineEditBaseProps<Value> {
	label: string;
	value: Value;
	onSave: (value: Value) => void | Promise<void>;
	validate?: (value: Value) => string | null;
	renderValue?: (value: Value) => ReactNode;
	renderInput: (input: InlineEditInput<Value>) => ReactNode;
	saveOnEnter?: boolean;
	disabled?: boolean;
}

function InlineEditBase<Value>({
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

type InlineEditProps =
	| (InlineEditShared<string> & { type: "text"; placeholder?: string })
	| (InlineEditShared<number | null> & { type: "number"; min?: number; max?: number })
	| (InlineEditShared<string | null> & { type: "select"; data: { value: string; label: string }[] })
	| (InlineEditShared<string | null> & { type: "date" });

function InlineEdit(props: InlineEditProps) {
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

type FilterFieldType = "text" | "number" | "money" | "date" | "enum" | "relation" | "boolean";

interface FilterField {
	key: string;
	label: string;
	type: FilterFieldType;
	options?: { value: string; label: string }[];
	currency?: string;
}

type FilterOperator =
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

type FilterValue = string | number | string[] | null;

interface FilterCondition {
	field: string;
	operator: FilterOperator;
	value?: FilterValue;
}

type FilterGroup = { and: FilterNode[] } | { or: FilterNode[] };

type FilterNode = FilterGroup | FilterCondition;

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

function isFilterGroup(node: FilterNode): node is FilterGroup {
	return "and" in node || "or" in node;
}

function filterGroupChildren(group: FilterGroup) {
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

function describeFilterValue(field: FilterField, condition: FilterCondition, locale?: string) {
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

function FilterValueInput({ field, condition, onChange }: FilterValueInputProps) {
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

interface DataTableColumn<Row> {
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

interface DataTableColumnsState {
	visible: string[];
	order: string[];
}

type DataTableDensity = "compact" | "default" | "comfortable";

interface DataTableSort {
	field: string;
	direction: "asc" | "desc";
}

interface DataTableState {
	sort?: DataTableSort;
	page: number;
	pageSize: number;
	selection: string[];
	density?: DataTableDensity;
}

interface DataTableBulkAction {
	label: string;
	icon?: ReactNode;
	onClick: (ids: string[], allMatching: boolean) => void;
	tone?: "danger";
	confirmation?: string;
}

interface DataTableRowAction<Row> {
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

function DataTable<Row>({
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

function dataTableColumnLabel<Row>(column: DataTableColumn<Row>) {
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

function createColumnHelpers<Row>() {
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

function FilterBar({
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

interface SavedView<State> {
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

function SavedViewsMenu<State>({
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

function AdvancedFilterBuilder({
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

interface SplitViewProps<Item> {
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

function SplitView<Item>({
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

interface InfiniteFeedProps<Item> {
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

function InfiniteFeed<Item>({
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

interface ActivityItem {
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

interface ActivityTimelineProps {
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

function ActivityTimeline({
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

interface ThreadUser extends UserChipUser {
	id: string;
}

interface ThreadComment {
	id: string;
	author: ThreadUser;
	body: string;
	internal: boolean;
	createdAt: DateLike;
	editedAt?: DateLike;
}

interface CommentsThreadProps {
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

function CommentsThread({
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

interface StatusTransition<Status extends string> {
	from: Status | Status[];
	to: Status;
	label: string;
	guard?: () => string | null;
	requiresReason?: boolean;
	consequence?: ReactNode;
	tone?: "default" | "danger";
}

interface StatusMachine<Status extends string> {
	states: StatusMap<Status>;
	transitions: StatusTransition<Status>[];
}

function defineStatusMachine<Status extends string>(machine: StatusMachine<Status>) {
	return machine;
}

interface StatusMenuProps<Status extends string> {
	machine: StatusMachine<Status>;
	value: Status;
	onChange: (
		to: Status,
		details: ConfirmActionDetails & { transition: StatusTransition<Status> },
	) => void | Promise<void>;
	disabled?: boolean;
}

function StatusMenu<Status extends string>({ machine, value, onChange, disabled = false }: StatusMenuProps<Status>) {
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

interface RecordVersion<Values extends object> {
	id: string;
	number: number;
	at: DateLike;
	author: Actor;
	onBehalfOf?: { name: string; email?: string };
	summary: string;
	values: Values;
}

interface VersionField<Values extends object> {
	key: keyof Values & string;
	label: string;
	render?: (value: unknown) => ReactNode;
}

interface VersionHistoryProps<Values extends object> {
	versions: RecordVersion<Values>[];
	fields: VersionField<Values>[];
	selectedId: string;
	onSelect: (id: string) => void;
	onRestore: (version: RecordVersion<Values>) => void | Promise<void>;
	height?: number;
	breakpoint?: number;
}

function VersionHistory<Values extends object>({
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

function UsageMeter({
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

interface HealthScoreFactor {
	label: string;
	weight: number;
	value: number;
}

const healthScoreLabels = { danger: "Critical", warning: "At risk", success: "Healthy" } as const;

function healthScoreTone(value: number, bands: { danger: number; warning: number }) {
	return value < bands.danger ? "danger" : value < bands.warning ? "warning" : "success";
}

function HealthScore({
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

type LogLevel = "debug" | "info" | "warn" | "error";

export const logLevelStatus = defineStatusMap<LogLevel>({
	debug: ["Debug", "neutral"],
	info: ["Info", "info"],
	warn: ["Warn", "warning"],
	error: ["Error", "danger"],
});

interface StatCardProps {
	label: string;
	value: ReactNode;
	delta?: ReactNode;
	comparison: string;
	href?: string;
	linkLabel?: string;
	loading?: boolean;
}

function StatCard({ label, value, delta, comparison, href, linkLabel = "View", loading = false }: StatCardProps) {
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

interface ChartCardProps<Range extends string> {
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

function ChartCard<Range extends string>({
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

type RunStatus = "running" | "succeeded" | "failed" | "cancelled";

export const runStatus = defineStatusMap<RunStatus>({
	running: ["Running", "info"],
	succeeded: ["Succeeded", "success"],
	failed: ["Failed", "danger"],
	cancelled: ["Cancelled", "neutral"],
});

interface AuditLogFilters {
	actor: string | null;
	action: string | null;
	targetType: string | null;
	range: [string | null, string | null];
}

export const auditLogNoFilters: AuditLogFilters = { actor: null, action: null, targetType: null, range: [null, null] };

type ScheduledJobRunStatus = "running" | "succeeded" | "failed";

export const scheduledJobRunStatus = defineStatusMap<ScheduledJobRunStatus>({
	running: ["Running", "info"],
	succeeded: ["Succeeded", "success"],
	failed: ["Failed", "danger"],
});

type SystemBannerKind = "impersonation" | "paymentFailed" | "maintenance" | "read-only" | "trialEnding" | "environment";

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

function SystemBanner({ kind, message, action }: { kind: SystemBannerKind; message: ReactNode; action?: ReactNode }) {
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

interface SidebarNavItem {
	id: string;
	label: string;
	icon?: ReactNode;
	href?: string;
	badge?: number;
	active?: boolean;
	children?: SidebarNavItem[];
}

interface SidebarNavSection {
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

function SidebarNav({ sections, collapsed = false, onNavigate, "aria-label": ariaLabel = "Main" }: SidebarNavProps) {
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

type UserMenuColorScheme = "light" | "dark" | "auto";

interface UserMenuItem {
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

function UserMenu({
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

interface Workspace {
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

function WorkspaceSwitcher({
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

function useAppFrame({
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

interface PageHeaderBreadcrumb {
	label: string;
	href?: string;
}

interface PageHeaderAction {
	label: string;
	icon?: ReactNode;
	onClick?: () => void;
	destructive?: boolean;
	confirmation?: ReactNode;
	confirmTitle?: string;
}

interface PageHeaderProps {
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

function PageHeader({
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

function ShortcutsList() {
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

function ShortcutsDialog({ opened, onClose }: { opened: boolean; onClose: () => void }) {
	return (
		<Modal opened={opened} onClose={onClose} title="Keyboard shortcuts">
			<ShortcutsList />
		</Modal>
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

type SignInEmailMethod = "link" | "password";

interface SignInValues {
	method: SignInEmailMethod;
	email: string;
	password?: string;
}

interface SignInFormProps {
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

function SignInForm({
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

function SignInCard(props: SignInFormProps) {
	return (
		<Card withBorder p="xl">
			<SignInForm {...props} />
		</Card>
	);
}

interface CheckEmailCardProps {
	email: string;
	purpose?: "sign-in" | "reset";
	expiresInMinutes?: number;
	resendAvailableAt?: Date;
	onResend: () => void | Promise<void>;
	onChangeEmail: () => void;
}

function CheckEmailCard({
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

interface ForgotPasswordCardProps {
	defaultEmail?: string;
	onSubmit: (email: string) => void | Promise<void>;
	onBack: () => void;
}

function ForgotPasswordCard({ defaultEmail = "", onSubmit, onBack }: ForgotPasswordCardProps) {
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

interface ResetPasswordCardProps {
	email: string;
	submitLabel?: string;
	error?: ReactNode;
	onSubmit: (password: string) => void | Promise<void>;
	onBack?: () => void;
}

function ResetPasswordCard({
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

type MemberStatus = "active" | "invited" | "suspended";

export const memberStatus = defineStatusMap<MemberStatus>({
	active: ["Active", "success"],
	invited: ["Invited", "info"],
	suspended: ["Suspended", "neutral"],
});

export const dnsRecordStatus = defineStatusMap({
	verified: ["Verified", "success"],
	pending: ["Not found yet", "warning"],
	mismatch: ["Wrong value", "danger"],
});

export const billingInvoiceStatus = defineStatusMap({
	paid: ["Paid", "success"],
	open: ["Open", "info"],
	pastDue: ["Past due", "danger"],
	refunded: ["Refunded", "neutral"],
	void: ["Void", "neutral"],
});

export const webhookEndpointStatus = defineStatusMap({
	healthy: ["Healthy", "success"],
	failing: ["Failing", "danger"],
	disabled: ["Off", "neutral"],
});

export const webhookDeliveryStatus = defineStatusMap({
	succeeded: ["Delivered", "success"],
	failed: ["Failed", "danger"],
	retrying: ["Retrying", "warning"],
});

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
