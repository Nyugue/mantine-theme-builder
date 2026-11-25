import { AreaChart, Sparkline } from "@mantine/charts";
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
	Breadcrumbs,
	Burger,
	Button,
	Card,
	Center,
	Checkbox,
	Chip,
	CloseButton,
	Code,
	ColorInput,
	ColorSwatch,
	Combobox,
	CopyButton,
	type CSSProperties,
	DataList,
	Divider,
	EmptyState,
	Grid,
	Group,
	Highlight,
	Indicator,
	Input,
	Kbd,
	List,
	Loader,
	luminance,
	type MantineColor,
	type MantineSize,
	Mark,
	Mention,
	Mentions,
	Menu,
	MultiSelect,
	NativeSelect,
	NavLink,
	Notification,
	NumberInput,
	OverflowList,
	Overlay,
	Pagination,
	Paper,
	PasswordInput,
	Pill,
	PillsInput,
	PinInput,
	Popover,
	Progress,
	Radio,
	ScrollArea,
	SegmentedControl,
	Select,
	SimpleGrid,
	Skeleton,
	Splitter,
	Stack,
	Stepper,
	Switch,
	Table,
	Tabs,
	TagsInput,
	Text,
	Textarea,
	TextInput,
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
import { DatePicker, type DatePickerPreset, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { getHotkeyHandler, useDisclosure, useElementSize, useInterval, useOs } from "@mantine/hooks";
import { Fragment, type ReactNode, useId, useState } from "react";
import {
	TbAlertCircle,
	TbAlertTriangle,
	TbArrowDown,
	TbArrowDownRight,
	TbArrowLeft,
	TbArrowRight,
	TbArrowUpRight,
	TbBell,
	TbBrandGoogle,
	TbBrandWindows,
	TbBuilding,
	TbBuildingBank,
	TbBuildingSkyscraper,
	TbCheck,
	TbChevronDown,
	TbChevronLeft,
	TbChevronRight,
	TbClock,
	TbCloudOff,
	TbColumns,
	TbCopy,
	TbCreditCard,
	TbDeviceDesktop,
	TbDeviceLaptop,
	TbDeviceMobile,
	TbDots,
	TbDownload,
	TbEye,
	TbEyeOff,
	TbFileInvoice,
	TbFileTypePdf,
	TbFileUnknown,
	TbFilter,
	TbFingerprint,
	TbGripVertical,
	TbHelpCircle,
	TbHome,
	TbHourglass,
	TbInbox,
	TbInfoCircle,
	TbKey,
	TbKeyboard,
	TbLink,
	TbLock,
	TbLogout,
	TbMail,
	TbMinus,
	TbMoon,
	TbPencil,
	TbPhoto,
	TbPlayerPause,
	TbPlayerPlay,
	TbPlug,
	TbPlus,
	TbRefresh,
	TbRestore,
	TbSearch,
	TbSelector,
	TbSend,
	TbSettings,
	TbShieldLock,
	TbSparkles,
	TbSun,
	TbTool,
	TbTrash,
	TbTruck,
	TbUpload,
	TbUser,
	TbUsers,
	TbWebhook,
	TbX,
} from "react-icons/tb";

export interface Person {
	name: string;
	initials: string;
	email: string;
	role: string;
	color?: MantineColor;
}

export const people: Record<"jane" | "tomas" | "mei" | "arjun" | "sofia", Person> = {
	jane: { name: "Jane Okafor", initials: "JO", email: "jane@halden.io", role: "Owner" },
	tomas: { name: "Tomás Ruiz", initials: "TR", email: "tomas@halden.io", role: "Admin", color: "blue" },
	mei: { name: "Mei Lin", initials: "ML", email: "mei@halden.io", role: "Member", color: "teal" },
	arjun: { name: "Arjun Patel", initials: "AP", email: "arjun@patel-consulting.com", role: "Guest", color: "violet" },
	sofia: { name: "Sofia Berg", initials: "SB", email: "sofia@halden.io", role: "Member", color: "gray" },
};

export const workspace = { name: "Halden Logistics", initials: "HL", domain: "halden-logistics.com" };

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

interface StatusDefinition {
	label: string;
	color: MantineColor;
}

export function createStatusBadge<Status extends string>(definitions: Record<Status, StatusDefinition>) {
	// biome-ignore lint/correctness/noComponentHookFactories: called once per status set at module level, never during render
	return function StatusBadge({ status, size }: { status: Status; size?: MantineSize }) {
		return (
			<Badge variant="light" color={definitions[status].color} size={size}>
				{definitions[status].label}
			</Badge>
		);
	};
}

export const StatusBadge = createStatusBadge({
	paid: { label: "Paid", color: "green" },
	overdue: { label: "Overdue", color: "red" },
	draft: { label: "Draft", color: "gray" },
	open: { label: "Open", color: "blue" },
	pending: { label: "Pending", color: "yellow" },
	active: { label: "Active", color: "green" },
	invited: { label: "Invited", color: "blue" },
	suspended: { label: "Suspended", color: "gray" },
	queued: { label: "Queued", color: "gray" },
	running: { label: "Running", color: "blue" },
	succeeded: { label: "Succeeded", color: "green" },
	failed: { label: "Failed", color: "red" },
	approved: { label: "Approved", color: "green" },
	rejected: { label: "Rejected", color: "red" },
	connected: { label: "Connected", color: "green" },
	verified: { label: "Verified", color: "green" },
	expired: { label: "Expired", color: "gray" },
});

export type Status = Parameters<typeof StatusBadge>[0]["status"];

interface PanelProps {
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	footer?: ReactNode;
	flush?: boolean;
	children?: ReactNode;
}

export function Panel({ title, description, actions, footer, flush = false, children }: PanelProps) {
	return (
		<Card withBorder>
			<Group justify="space-between" align="flex-start" wrap="nowrap" gap="md">
				<Stack gap={2} miw={0}>
					<Title order={4}>{title}</Title>
					{description && (
						<Text size="sm" c="dimmed">
							{description}
						</Text>
					)}
				</Stack>
				{actions && (
					<Group gap="xs" wrap="nowrap">
						{actions}
					</Group>
				)}
			</Group>
			{children &&
				(flush ? (
					<Card.Section mt="md" withBorder>
						{children}
					</Card.Section>
				) : (
					<Box mt="md">{children}</Box>
				))}
			{footer && (
				<Card.Section withBorder inheritPadding py="sm" mt={flush ? 0 : "md"}>
					{footer}
				</Card.Section>
			)}
		</Card>
	);
}

interface EntityLabelProps {
	name: ReactNode;
	detail?: ReactNode;
	initials?: string;
	icon?: ReactNode;
	color?: MantineColor;
	size?: "sm" | "md";
}

export function EntityLabel({ name, detail, initials, icon, color, size = "sm" }: EntityLabelProps) {
	const theme = useMantineTheme();

	return (
		<Group gap="sm" wrap="nowrap" miw={0}>
			<Avatar size={size === "sm" ? 30 : 38} color={color ?? theme.primaryColor}>
				{icon ?? initials}
			</Avatar>
			<Box miw={0}>
				<Text size="sm" fw={500} truncate>
					{name}
				</Text>
				{detail && (
					<Text size="xs" c="dimmed" truncate>
						{detail}
					</Text>
				)}
			</Box>
		</Group>
	);
}

export function ago({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
	return new Date(Date.now() - (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000);
}

const relativeTimeUnits: [Intl.RelativeTimeFormatUnit, number][] = [
	["year", 31_536_000],
	["month", 2_592_000],
	["week", 604_800],
	["day", 86_400],
	["hour", 3_600],
	["minute", 60],
	["second", 1],
];

const relativeTimeFormat = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function formatRelativeTime(date: Date, now: number) {
	const seconds = Math.round((date.getTime() - now) / 1000);
	const [unit, size] = relativeTimeUnits.find(([, size]) => Math.abs(seconds) >= size) ?? ["second", 1];
	return relativeTimeFormat.format(Math.round(seconds / size), unit);
}

export function RelativeTime({ date, timeZone = "Europe/Lisbon" }: { date: Date; timeZone?: string }) {
	const [now, setNow] = useState(() => Date.now());
	useInterval(() => setNow(Date.now()), 60_000, { autoInvoke: true });

	const exact = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeStyle: "short",
		hourCycle: "h23",
		timeZone,
	}).format(date);
	const city = timeZone.split("/").at(-1)?.replaceAll("_", " ");

	return (
		<Tooltip label={`${exact} (${city})`} withArrow>
			<Text component="time" dateTime={date.toISOString()} inherit>
				{formatRelativeTime(date, now)}
			</Text>
		</Tooltip>
	);
}

export function CopyableCode({ value, masked }: { value: string; masked?: string }) {
	const [revealed, setRevealed] = useState(false);

	return (
		<Group gap={4} wrap="nowrap">
			<Code style={{ whiteSpace: "nowrap" }}>{masked && !revealed ? masked : value}</Code>
			{masked && (
				<ActionIcon
					variant="subtle"
					color="gray"
					size="sm"
					aria-label={revealed ? "Hide" : "Reveal"}
					onClick={() => setRevealed((current) => !current)}
				>
					{revealed ? <TbEyeOff /> : <TbEye />}
				</ActionIcon>
			)}
			<CopyButton value={value}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Copied" : "Copy"} withArrow>
						<ActionIcon variant="subtle" color={copied ? "teal" : "gray"} size="sm" aria-label="Copy" onClick={copy}>
							{copied ? <TbCheck /> : <TbCopy />}
						</ActionIcon>
					</Tooltip>
				)}
			</CopyButton>
		</Group>
	);
}

export const euros = new Intl.NumberFormat("en", { style: "currency", currency: "EUR" });

interface CheckboxMatrixGroup {
	label: string;
	rows: { label: string; values: boolean[] }[];
}

interface CheckboxMatrixProps {
	columns: string[];
	groups: CheckboxMatrixGroup[];
	lockedColumns?: number[];
}

export function CheckboxMatrix({ columns, groups, lockedColumns = [] }: CheckboxMatrixProps) {
	const [checked, setChecked] = useState(() => groups.map((group) => group.rows.map((row) => [...row.values])));

	const toggleCell = (groupIndex: number, rowIndex: number, columnIndex: number) =>
		setChecked((current) =>
			current.map((groupRows, currentGroup) =>
				groupRows.map((values, currentRow) =>
					values.map((value, currentColumn) =>
						currentGroup === groupIndex && currentRow === rowIndex && currentColumn === columnIndex ? !value : value,
					),
				),
			),
		);

	const toggleGroup = (groupIndex: number, columnIndex: number) =>
		setChecked((current) => {
			const allChecked = current[groupIndex].every((values) => values[columnIndex]);
			return current.map((groupRows, currentGroup) =>
				currentGroup === groupIndex
					? groupRows.map((values) =>
							values.map((value, currentColumn) => (currentColumn === columnIndex ? !allChecked : value)),
						)
					: groupRows,
			);
		});

	return (
		<Table verticalSpacing={6}>
			<Table.Thead>
				<Table.Tr>
					<Table.Th />
					{columns.map((column, columnIndex) => (
						<Table.Th key={column} ta="center">
							<Group gap={4} justify="center" wrap="nowrap">
								{lockedColumns.includes(columnIndex) && <TbLock aria-label="Locked" />}
								{column}
							</Group>
						</Table.Th>
					))}
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{groups.map((group, groupIndex) => (
					<Fragment key={group.label}>
						<Table.Tr bg="var(--mantine-color-default-hover)">
							<Table.Td fw={600}>{group.label}</Table.Td>
							{columns.map((column, columnIndex) => {
								const values = checked[groupIndex].map((rowValues) => rowValues[columnIndex]);
								const all = values.every(Boolean);
								return (
									<Table.Td key={column}>
										<Center>
											<Checkbox
												aria-label={`${group.label}, ${column}`}
												checked={all}
												indeterminate={!all && values.some(Boolean)}
												disabled={lockedColumns.includes(columnIndex)}
												onChange={() => toggleGroup(groupIndex, columnIndex)}
											/>
										</Center>
									</Table.Td>
								);
							})}
						</Table.Tr>
						{group.rows.map((row, rowIndex) => (
							<Table.Tr key={row.label}>
								<Table.Td pl="lg">{row.label}</Table.Td>
								{columns.map((column, columnIndex) => (
									<Table.Td key={column}>
										<Center>
											<Checkbox
												aria-label={`${row.label}, ${column}`}
												checked={checked[groupIndex][rowIndex][columnIndex]}
												disabled={lockedColumns.includes(columnIndex)}
												onChange={() => toggleCell(groupIndex, rowIndex, columnIndex)}
											/>
										</Center>
									</Table.Td>
								))}
							</Table.Tr>
						))}
					</Fragment>
				))}
			</Table.Tbody>
		</Table>
	);
}

export function Shortcut({ keys }: { keys: string[] }) {
	const os = useOs();
	const apple = os === "macos" || os === "ios";

	return (
		<Box component="span" style={{ display: "inline-flex", gap: 4 }}>
			{keys.map((key) => (
				<Kbd key={key} size="xs">
					{key === "mod" ? (apple ? "⌘" : "Ctrl") : key}
				</Kbd>
			))}
		</Box>
	);
}

interface DialogFrameProps {
	title: ReactNode;
	children: ReactNode;
	footer?: ReactNode;
	width?: number;
}

export function DialogFrame({ title, children, footer, width = 440 }: DialogFrameProps) {
	return (
		<Paper shadow="xl" p="lg" maw={width} w="100%">
			<Group justify="space-between" align="flex-start" wrap="nowrap" mb="md">
				<Title order={4}>{title}</Title>
				<CloseButton aria-label="Close" />
			</Group>
			{children}
			{footer && (
				<Group justify="flex-end" gap="sm" mt="lg">
					{footer}
				</Group>
			)}
		</Paper>
	);
}

export function WorkspaceLogo({ size = 32 }: { size?: number }) {
	return (
		<ThemeIcon size={size} radius="md" fz="xs" fw={700}>
			{workspace.initials}
		</ThemeIcon>
	);
}

interface SettingsLayoutProps {
	navigation: ReactNode;
	children: ReactNode;
	selected: boolean;
	onBack: () => void;
	breakpoint?: number;
}

export function SettingsLayout({ navigation, children, selected, onBack, breakpoint = 640 }: SettingsLayoutProps) {
	const { ref, width } = useElementSize();
	const narrow = width > 0 && width < breakpoint;

	return (
		<Box ref={ref}>
			{narrow ? (
				selected ? (
					<Stack gap="xl">
						<Box>
							<Button variant="subtle" size="xs" leftSection={<TbArrowLeft />} onClick={onBack}>
								Settings
							</Button>
						</Box>
						{children}
					</Stack>
				) : (
					navigation
				)
			) : (
				<Group align="flex-start" gap="xl" wrap="nowrap">
					<Box w={200} style={{ flexShrink: 0 }}>
						{navigation}
					</Box>
					<Stack gap="xl" maw={640} miw={0} style={{ flex: 1 }}>
						{children}
					</Stack>
				</Group>
			)}
		</Box>
	);
}

interface ListDetailLayoutProps {
	list: ReactNode;
	detail: ReactNode;
	selected: boolean;
	onBack: () => void;
	onPrevious?: () => void;
	onNext?: () => void;
	height?: number;
	breakpoint?: number;
}

export function ListDetailLayout({
	list,
	detail,
	selected,
	onBack,
	onPrevious,
	onNext,
	height = 440,
	breakpoint = 640,
}: ListDetailLayoutProps) {
	const { ref, width } = useElementSize();
	const narrow = width > 0 && width < breakpoint;
	const handleKeys = getHotkeyHandler([
		["j", () => onNext?.()],
		["k", () => onPrevious?.()],
	]);

	return (
		<Box ref={ref} h={height} style={frameStyle} onKeyDown={handleKeys}>
			{narrow ? (
				selected ? (
					<Stack gap={0} h="100%">
						<Box px="xs" py={6} style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}>
							<Button variant="subtle" size="xs" leftSection={<TbArrowLeft />} onClick={onBack}>
								Back
							</Button>
						</Box>
						<ScrollArea style={{ flex: 1 }}>{detail}</ScrollArea>
					</Stack>
				) : (
					<ScrollArea h="100%">{list}</ScrollArea>
				)
			) : (
				<Splitter h="100%">
					<Splitter.Pane defaultSize="300px" min="220px" max="420px">
						<ScrollArea h="100%">{list}</ScrollArea>
					</Splitter.Pane>
					<Splitter.Pane defaultSize={100}>
						<ScrollArea h="100%">{detail}</ScrollArea>
					</Splitter.Pane>
				</Splitter>
			)}
		</Box>
	);
}

function AppSidebar() {
	return (
		<>
			<AppShell.Section p="sm">
				<UnstyledButton w="100%" p={6} style={{ borderRadius: "var(--mantine-radius-default)" }}>
					<Group gap="sm" wrap="nowrap">
						<WorkspaceLogo size={26} />
						<Text size="sm" fw={600} truncate style={{ flex: 1 }}>
							{workspace.name}
						</Text>
						<TbSelector aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />
					</Group>
				</UnstyledButton>
			</AppShell.Section>
			<AppShell.Section grow component={ScrollArea} px="sm">
				<NavLink label="Home" leftSection={<TbHome />} />
				<NavLink
					label="Inbox"
					leftSection={<TbInbox />}
					rightSection={
						<Badge size="xs" variant="light" circle>
							3
						</Badge>
					}
				/>
				<AppSidebarGroupLabel>Billing</AppSidebarGroupLabel>
				<NavLink label="Invoices" leftSection={<TbFileInvoice />} active />
				<NavLink label="Customers" leftSection={<TbBuilding />} />
				<NavLink label="Payments" leftSection={<TbCreditCard />} />
				<AppSidebarGroupLabel>Operations</AppSidebarGroupLabel>
				<NavLink label="Deliveries" leftSection={<TbTruck />} />
				<NavLink label="Claims" leftSection={<TbAlertTriangle />} />
				<AppSidebarGroupLabel>Workspace</AppSidebarGroupLabel>
				<NavLink label="Members" leftSection={<TbUsers />} />
				<NavLink label="Settings" leftSection={<TbSettings />} />
			</AppShell.Section>
			<AppShell.Section p="md" style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}>
				<EntityLabel
					name={people.jane.name}
					initials={people.jane.initials}
					color={people.jane.color}
					detail={"Owner"}
				/>
			</AppShell.Section>
		</>
	);
}

function AppSidebarGroupLabel({ children }: { children: ReactNode }) {
	return (
		<Text size="xs" fw={500} c="dimmed" px="sm" mt="md" mb={4}>
			{children}
		</Text>
	);
}

const appSidebarRailItems = [
	{ label: "Home", icon: <TbHome /> },
	{ label: "Inbox", icon: <TbInbox /> },
	{ label: "Invoices", icon: <TbFileInvoice />, active: true },
	{ label: "Customers", icon: <TbBuilding /> },
	{ label: "Payments", icon: <TbCreditCard /> },
	{ label: "Deliveries", icon: <TbTruck /> },
	{ label: "Claims", icon: <TbAlertTriangle /> },
];

function AppSidebarRail() {
	return (
		<Paper withBorder w={64} py="sm" h={500}>
			<Stack align="center" justify="space-between" h="100%">
				<Stack align="center" gap="xs">
					<WorkspaceLogo size={32} />
					<Divider w={32} my={4} />
					{appSidebarRailItems.map((item) => (
						<Tooltip key={item.label} label={item.label} position="right" withArrow>
							<ActionIcon
								variant={item.active ? "light" : "subtle"}
								color={item.active ? undefined : "gray"}
								size="lg"
								aria-label={item.label}
							>
								{item.icon}
							</ActionIcon>
						</Tooltip>
					))}
				</Stack>
				<Stack align="center" gap="xs">
					<Tooltip label="Settings" position="right" withArrow>
						<ActionIcon variant="subtle" color="gray" size="lg" aria-label="Settings">
							<TbSettings />
						</ActionIcon>
					</Tooltip>
					<Avatar size={30}>{people.jane.initials}</Avatar>
				</Stack>
			</Stack>
		</Paper>
	);
}

function AppHeader({
	navigationOpened,
	onNavigationToggle,
}: {
	navigationOpened: boolean;
	onNavigationToggle: () => void;
}) {
	return (
		<Group h="100%" px="md" gap="sm" wrap="nowrap">
			<Burger
				size="sm"
				hiddenFrom="sm"
				opened={navigationOpened}
				onClick={onNavigationToggle}
				aria-label="Toggle navigation"
			/>
			<TextInput
				placeholder="Search"
				aria-label="Search"
				leftSection={<TbSearch />}
				rightSection={<Shortcut keys={["mod", "K"]} />}
				rightSectionWidth={64}
				w={280}
				readOnly
			/>
			<Box style={{ flex: 1 }} />
			<ActionIcon variant="subtle" color="gray" aria-label="Help">
				<TbHelpCircle />
			</ActionIcon>
			<Indicator label="3" size={16} offset={6}>
				<ActionIcon variant="subtle" color="gray" aria-label="Notifications">
					<TbBell />
				</ActionIcon>
			</Indicator>
			<Avatar size={30}>{people.jane.initials}</Avatar>
		</Group>
	);
}

interface PageHeaderAction {
	label: string;
	icon?: ReactNode;
	onClick?: () => void;
}

interface PageHeaderProps {
	title: ReactNode;
	description?: ReactNode;
	primaryAction?: PageHeaderAction;
	actions?: PageHeaderAction[];
	back?: { label: string; onClick?: () => void };
	order?: TitleOrder;
	tabs?: ReactNode;
}

function PageHeader({ title, description, primaryAction, actions = [], back, order = 2, tabs }: PageHeaderProps) {
	return (
		<Stack gap="md">
			{back && (
				<Anchor component="button" size="sm" c="dimmed" onClick={back.onClick} style={{ alignSelf: "flex-start" }}>
					<Group gap={4} wrap="nowrap">
						<TbArrowLeft aria-hidden />
						{back.label}
					</Group>
				</Anchor>
			)}
			<Group align="flex-end" gap="sm" wrap="nowrap">
				<Stack gap={4} miw={0} style={{ flexShrink: 1 }}>
					<Title order={order}>{title}</Title>
					{description && (
						<Text size="sm" c="dimmed">
							{description}
						</Text>
					)}
				</Stack>
				<OverflowList
					data={actions}
					maxRows={1}
					gap="sm"
					style={{ flex: 1, minWidth: 0, justifyContent: "flex-end" }}
					getItemKey={(action) => action.label}
					renderItem={(action) => (
						<Button variant="default" leftSection={action.icon} onClick={action.onClick}>
							{action.label}
						</Button>
					)}
					renderOverflow={(hidden) => (
						<Menu position="bottom-end">
							<Menu.Target>
								<ActionIcon variant="default" size="input-sm" aria-label="More actions">
									<TbDots />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								{hidden.map((action) => (
									<Menu.Item key={action.label} leftSection={action.icon} onClick={action.onClick}>
										{action.label}
									</Menu.Item>
								))}
							</Menu.Dropdown>
						</Menu>
					)}
				/>
				{primaryAction && (
					<Button leftSection={primaryAction.icon} onClick={primaryAction.onClick} style={{ flexShrink: 0 }}>
						{primaryAction.label}
					</Button>
				)}
			</Group>
			{tabs}
		</Stack>
	);
}

const dashboardShellInvoices = [
	{ number: "HAL-2041", customer: "Brightwater Foods", status: "overdue", amount: 4820 },
	{ number: "HAL-2040", customer: "Osaka Trading Co.", status: "paid", amount: 1960 },
	{ number: "HAL-2039", customer: "Fjord Outfitters", status: "draft", amount: 730 },
] as const;

function DashboardShellExample() {
	const [navigationOpened, { toggle: toggleNavigation }] = useDisclosure();

	return (
		<Box h={640} style={frameStyle}>
			<AppShell
				mode="static"
				layout="alt"
				header={{ height: 56 }}
				navbar={{ width: 232, breakpoint: "sm", collapsed: { mobile: !navigationOpened } }}
				padding="lg"
			>
				<AppShell.Header>
					<AppHeader navigationOpened={navigationOpened} onNavigationToggle={toggleNavigation} />
				</AppShell.Header>
				<AppShell.Navbar>
					<AppSidebar />
				</AppShell.Navbar>
				<AppShell.Main>
					<Stack gap="lg" maw={1120} mx="auto">
						<PageHeader
							title="Invoices"
							primaryAction={{ label: "New invoice", icon: <TbPlus /> }}
							actions={[
								{ label: "Import", icon: <TbUpload /> },
								{ label: "Export", icon: <TbDownload /> },
								{ label: "Send reminders", icon: <TbMail /> },
							]}
							tabs={
								<Tabs defaultValue="invoices">
									<Tabs.List>
										<Tabs.Tab value="invoices">Invoices</Tabs.Tab>
										<Tabs.Tab value="credit-notes">Credit notes</Tabs.Tab>
										<Tabs.Tab value="quotes">Quotes</Tabs.Tab>
									</Tabs.List>
								</Tabs>
							}
						/>
						<Card withBorder p={0}>
							<Table>
								<Table.Thead>
									<Table.Tr>
										<Table.Th>Invoice</Table.Th>
										<Table.Th>Customer</Table.Th>
										<Table.Th>Status</Table.Th>
										<Table.Th ta="right">Amount</Table.Th>
									</Table.Tr>
								</Table.Thead>
								<Table.Tbody>
									{dashboardShellInvoices.map((invoice) => (
										<Table.Tr key={invoice.number}>
											<Table.Td>
												<Anchor ff="monospace" size="sm">
													{invoice.number}
												</Anchor>
											</Table.Td>
											<Table.Td>{invoice.customer}</Table.Td>
											<Table.Td>
												<StatusBadge status={invoice.status} />
											</Table.Td>
											<Table.Td ta="right">{euros.format(invoice.amount)}</Table.Td>
										</Table.Tr>
									))}
								</Table.Tbody>
							</Table>
						</Card>
					</Stack>
				</AppShell.Main>
			</AppShell>
		</Box>
	);
}

function UserMenu() {
	return (
		<Box mih={400}>
			<Group justify="flex-end">
				<Menu
					opened
					withinPortal={false}
					trapFocus={false}
					returnFocus={false}
					closeOnItemClick={false}
					position="bottom-end"
					width={250}
				>
					<Menu.Target>
						<UnstyledButton aria-label="Account menu">
							<Avatar>{people.jane.initials}</Avatar>
						</UnstyledButton>
					</Menu.Target>
					<Menu.Dropdown>
						<Box px="sm" py={6}>
							<Text size="sm" fw={500}>
								{people.jane.name}
							</Text>
							<Text size="xs" c="dimmed">
								{people.jane.email}
							</Text>
						</Box>
						<Menu.Divider />
						<Menu.Item leftSection={<TbUser />}>Profile</Menu.Item>
						<Menu.Item leftSection={<TbSettings />}>Account settings</Menu.Item>
						<Menu.Item leftSection={<TbBuilding />}>Switch workspace</Menu.Item>
						<Menu.Item leftSection={<TbKeyboard />} rightSection={<Kbd size="xs">?</Kbd>}>
							Keyboard shortcuts
						</Menu.Item>
						<Menu.Divider />
						<Group justify="space-between" px="sm" py={4} wrap="nowrap">
							<Text size="xs" c="dimmed">
								Theme
							</Text>
							<SegmentedControl
								size="xs"
								defaultValue="system"
								data={[
									{ value: "light", label: <UserMenuSchemeIcon icon={<TbSun />} label="Light" /> },
									{ value: "dark", label: <UserMenuSchemeIcon icon={<TbMoon />} label="Dark" /> },
									{ value: "system", label: <UserMenuSchemeIcon icon={<TbDeviceDesktop />} label="System" /> },
								]}
							/>
						</Group>
						<Menu.Divider />
						<Menu.Item color="red" leftSection={<TbLogout />}>
							Sign out
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Group>
		</Box>
	);
}

function UserMenuSchemeIcon({ icon, label }: { icon: ReactNode; label: string }) {
	return (
		<Center>
			{icon}
			<VisuallyHidden>{label}</VisuallyHidden>
		</Center>
	);
}

function CommandMenu() {
	const query = "brigh";

	return (
		<Paper withBorder shadow="md" maw={460}>
			<TextInput
				variant="unstyled"
				aria-label="Search"
				defaultValue={query}
				leftSection={<TbSearch />}
				rightSection={<Kbd size="xs">Esc</Kbd>}
				rightSectionWidth={48}
				px={4}
				py={4}
			/>
			<Divider />
			<Stack gap={0} p={6}>
				<CommandMenuGroup label="Customers" />
				<CommandMenuOption icon={<TbBuilding />} highlighted>
					<Highlight highlight={query} size="sm">
						Brightwater Foods
					</Highlight>
				</CommandMenuOption>
				<CommandMenuGroup label="Invoices" />
				<CommandMenuOption icon={<TbFileInvoice />} hint="Overdue">
					<Group gap={6} wrap="nowrap">
						<Code>HAL-2041</Code>
						<Highlight highlight={query} size="sm">
							Brightwater Foods
						</Highlight>
					</Group>
				</CommandMenuOption>
				<CommandMenuOption icon={<TbFileInvoice />} hint="Void">
					<Group gap={6} wrap="nowrap">
						<Code>HAL-1987</Code>
						<Highlight highlight={query} size="sm">
							Brightwater Foods
						</Highlight>
					</Group>
				</CommandMenuOption>
				<CommandMenuGroup label="Actions" />
				<CommandMenuOption icon={<TbPlus />}>
					<Highlight highlight={query} size="sm">
						New invoice for Brightwater Foods
					</Highlight>
				</CommandMenuOption>
			</Stack>
		</Paper>
	);
}

function CommandMenuGroup({ label }: { label: string }) {
	return (
		<Text size="xs" fw={500} c="dimmed" px="sm" pt="sm" pb={4}>
			{label}
		</Text>
	);
}

interface CommandMenuOptionProps {
	icon: ReactNode;
	hint?: string;
	highlighted?: boolean;
	children: ReactNode;
}

function CommandMenuOption({ icon, hint, highlighted = false, children }: CommandMenuOptionProps) {
	return (
		<UnstyledButton
			px="sm"
			py={8}
			bg={highlighted ? "var(--mantine-color-default-hover)" : undefined}
			style={{ borderRadius: "var(--mantine-radius-default)" }}
		>
			<Group gap="sm" wrap="nowrap">
				<Box c="dimmed" style={{ display: "flex" }}>
					{icon}
				</Box>
				<Box style={{ flex: 1 }} miw={0}>
					{children}
				</Box>
				{hint && (
					<Text size="xs" c="dimmed">
						{hint}
					</Text>
				)}
			</Group>
		</UnstyledButton>
	);
}

function SettingsLayoutExample() {
	const [profileOpen, setProfileOpen] = useState(true);

	return (
		<SettingsLayout
			selected={profileOpen}
			onBack={() => setProfileOpen(false)}
			navigation={
				<Stack gap={0}>
					<AppSidebarGroupLabel>Account</AppSidebarGroupLabel>
					<NavLink label="Profile" active onClick={() => setProfileOpen(true)} />
					<NavLink label="Security" />
					<NavLink label="Notifications" />
					<NavLink label="Appearance" />
					<AppSidebarGroupLabel>Workspace</AppSidebarGroupLabel>
					<NavLink label="General" />
					<NavLink label="Members" />
					<NavLink label="Billing" />
					<NavLink label="API keys" />
					<NavLink label="Integrations" />
				</Stack>
			}
		>
			<Title order={2}>Profile</Title>
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Name and photo</Title>
					<Text size="sm" c="dimmed" mt={4}>
						Shown to members of your workspaces.
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Card withBorder>
						<Stack>
							<Group gap="sm">
								<Avatar size="lg">{people.jane.initials}</Avatar>
								<Button variant="default" size="xs">
									Upload photo
								</Button>
								<Button variant="subtle" color="gray" size="xs">
									Remove
								</Button>
							</Group>
							<SimpleGrid cols={2}>
								<TextInput label="First name" defaultValue="Jane" />
								<TextInput label="Last name" defaultValue="Okafor" />
							</SimpleGrid>
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Email</Title>
					<Text size="sm" c="dimmed" mt={4}>
						Used to sign in and for notifications.
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Card withBorder>
						<Stack>
							<TextInput label="Email" defaultValue={people.jane.email} />
							<Alert color="blue" icon={<TbMail />}>
								<Stack gap={6}>
									<Text size="sm">
										We sent a confirmation link to{" "}
										<Text span fw={600} inherit>
											jane.okafor@halden.io
										</Text>
										. Your email changes when you open it.
									</Text>
									<Group gap="md">
										<Anchor size="sm">Resend</Anchor>
										<Anchor size="sm">Cancel the change</Anchor>
									</Group>
								</Stack>
							</Alert>
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
		</SettingsLayout>
	);
}

const listDetailLayoutClaims = [
	{ id: "CLM-298", title: "Broken seal on arrival", customer: "Keller & Sons", due: "1d late", urgency: "late" },
	{
		id: "CLM-312",
		title: "Late delivery, perishables",
		customer: "Osaka Trading Co.",
		due: "3h left",
		urgency: "soon",
	},
	{
		id: "CLM-307",
		title: "Delivered to the wrong address",
		customer: "Brightwater Foods",
		due: "2h left",
		urgency: "soon",
	},
	{ id: "CLM-305", title: "Water damage", customer: "Keller & Sons", due: "1d left", urgency: "normal" },
	{
		id: "CLM-311",
		title: "Pallet crushed in transit",
		customer: "Brightwater Foods",
		due: "1d left",
		urgency: "normal",
	},
] as const;

const listDetailLayoutUrgencyColors = { late: "red", soon: "orange", normal: "dimmed" } as const;

function ListDetailLayoutExample() {
	const [selectedId, setSelectedId] = useState<string | null>(listDetailLayoutClaims[0].id);
	const selectedIndex = Math.max(
		0,
		listDetailLayoutClaims.findIndex((claim) => claim.id === selectedId),
	);
	const selected = listDetailLayoutClaims[selectedIndex];
	const select = (index: number) =>
		setSelectedId(listDetailLayoutClaims[Math.min(Math.max(index, 0), listDetailLayoutClaims.length - 1)].id);

	return (
		<ListDetailLayout
			selected={selectedId !== null}
			onBack={() => setSelectedId(null)}
			onPrevious={() => select(selectedIndex - 1)}
			onNext={() => select(selectedIndex + 1)}
			list={
				<Stack gap={0}>
					<Group gap="xs" px="md" py="sm" style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}>
						<Text fw={600} size="sm">
							Open claims
						</Text>
						<Badge size="sm" variant="light" color="gray" circle>
							11
						</Badge>
						<Box style={{ flex: 1 }} />
						<ActionIcon variant="subtle" color="gray" aria-label="Filter">
							<TbFilter />
						</ActionIcon>
					</Group>
					{listDetailLayoutClaims.map((claim) => (
						<UnstyledButton
							key={claim.id}
							px="md"
							py="sm"
							bg={claim.id === selected.id ? "var(--mantine-color-default-hover)" : undefined}
							onClick={() => setSelectedId(claim.id)}
							style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
						>
							<Group justify="space-between" wrap="nowrap" gap="xs">
								<Text size="sm" fw={500} truncate>
									{claim.title}
								</Text>
								<Group gap={4} wrap="nowrap" c={listDetailLayoutUrgencyColors[claim.urgency]}>
									<TbClock aria-hidden />
									<Text size="xs" style={{ whiteSpace: "nowrap" }}>
										{claim.due}
									</Text>
								</Group>
							</Group>
							<Text size="xs" c="dimmed">
								<Text span ff="monospace" inherit>
									{claim.id}
								</Text>{" "}
								· {claim.customer}
							</Text>
						</UnstyledButton>
					))}
				</Stack>
			}
			detail={
				<Stack p="lg" gap="md">
					<Group justify="space-between" align="flex-start">
						<Stack gap={2}>
							<Text size="xs" c="dimmed" ff="monospace">
								{selected.id}
							</Text>
							<Title order={4}>{selected.title}</Title>
						</Stack>
						<Group gap="xs">
							<Button variant="default" size="xs">
								Reassign
							</Button>
							<Button size="xs">Resolve</Button>
						</Group>
					</Group>
					<DataList>
						<DataList.Item>
							<DataList.ItemLabel>Customer</DataList.ItemLabel>
							<DataList.ItemValue>{selected.customer}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Carrier</DataList.ItemLabel>
							<DataList.ItemValue>Atlas Haulage</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Claimed</DataList.ItemLabel>
							<DataList.ItemValue>{euros.format(3400)}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Owner</DataList.ItemLabel>
							<DataList.ItemValue>
								<Group gap={6} wrap="nowrap">
									<Avatar size={22} color={people.mei.color}>
										{people.mei.initials}
									</Avatar>
									{people.mei.name}
								</Group>
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Stage</DataList.ItemLabel>
							<DataList.ItemValue>Waiting on carrier</DataList.ItemValue>
						</DataList.Item>
					</DataList>
					<Divider />
					<Stack gap="sm">
						<Group gap="sm" wrap="nowrap" align="flex-start">
							<Avatar size={26} color={people.mei.color}>
								{people.mei.initials}
							</Avatar>
							<Box>
								<Text size="sm">Asked Atlas Haulage for photos of the seal</Text>
								<Text size="xs" c="dimmed">
									Yesterday
								</Text>
							</Box>
						</Group>
						<Group gap="sm" wrap="nowrap" align="flex-start">
							<Avatar size={26} color="gray">
								<TbSettings />
							</Avatar>
							<Box>
								<Text size="sm">Moved to Waiting on carrier</Text>
								<Text size="xs" c="dimmed">
									Nov 20
								</Text>
							</Box>
						</Group>
					</Stack>
				</Stack>
			}
		/>
	);
}

function RecordDrawer() {
	return (
		<Box pos="relative" h={440} style={frameStyle}>
			<Table>
				<Table.Tbody>
					{dashboardShellInvoices.map((invoice) => (
						<Table.Tr key={invoice.number}>
							<Table.Td ff="monospace">{invoice.number}</Table.Td>
							<Table.Td>{invoice.customer}</Table.Td>
							<Table.Td ta="right">{euros.format(invoice.amount)}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
			<Overlay backgroundOpacity={0.35} zIndex={1} />
			<Paper
				shadow="xl"
				radius={0}
				pos="absolute"
				top={0}
				right={0}
				bottom={0}
				w={340}
				maw="85%"
				p="lg"
				style={{ zIndex: 2, display: "flex", flexDirection: "column" }}
			>
				<Group justify="space-between" align="flex-start" wrap="nowrap">
					<Stack gap={2}>
						<Text size="xs" c="dimmed" ff="monospace">
							HAL-2041
						</Text>
						<Title order={4}>Brightwater Foods</Title>
					</Stack>
					<ActionIcon variant="subtle" color="gray" aria-label="Close">
						<TbX />
					</ActionIcon>
				</Group>
				<Box mt="sm">
					<StatusBadge status="overdue" />
				</Box>
				<DataList mt="lg">
					<DataList.Item>
						<DataList.ItemLabel>Amount</DataList.ItemLabel>
						<DataList.ItemValue>{euros.format(4820)}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Due</DataList.ItemLabel>
						<DataList.ItemValue>Nov 12</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Owner</DataList.ItemLabel>
						<DataList.ItemValue>{people.mei.name}</DataList.ItemValue>
					</DataList.Item>
				</DataList>
				<Box style={{ flex: 1 }} />
				<Group gap="xs" justify="flex-end">
					<Button variant="default" size="xs">
						Open full page
					</Button>
					<Button size="xs">Send reminder</Button>
				</Group>
			</Paper>
		</Box>
	);
}

export function NavigationArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<DashboardShellExample />
			</PreviewItem>
			<PreviewItem>
				<AppSidebarRail />
			</PreviewItem>
			<PreviewItem>
				<UserMenu />
			</PreviewItem>
			<PreviewItem>
				<CommandMenu />
			</PreviewItem>
			<PreviewItem span="full">
				<SettingsLayoutExample />
			</PreviewItem>
			<PreviewItem span="full">
				<ListDetailLayoutExample />
			</PreviewItem>
			<PreviewItem span="half">
				<RecordDrawer />
			</PreviewItem>
		</PreviewGrid>
	);
}

function SignInCard() {
	return (
		<Card withBorder p="lg">
			<Stack>
				<Title order={3}>Sign in to Halden</Title>
				<Stack gap="xs">
					<Button
						variant="default"
						fullWidth
						justify="space-between"
						leftSection={<TbBrandGoogle />}
						rightSection={
							<Badge size="xs" variant="light">
								Last used
							</Badge>
						}
					>
						Continue with Google
					</Button>
					<Button
						variant="default"
						fullWidth
						justify="space-between"
						leftSection={<TbBuildingSkyscraper />}
						rightSection={<span />}
					>
						Continue with SSO
					</Button>
				</Stack>
				<Divider label="or with email" labelPosition="center" />
				<TextInput label="Email" defaultValue={people.jane.email} />
				<Stack gap={4}>
					<Group justify="space-between">
						<Text component="label" htmlFor="sign-in-card-password" size="sm" fw={500}>
							Password
						</Text>
						<Anchor size="xs">Forgot password?</Anchor>
					</Group>
					<PasswordInput id="sign-in-card-password" defaultValue="halden-logistics" />
				</Stack>
				<Button fullWidth>Sign in</Button>
				<Text size="xs" c="dimmed" ta="center">
					New to Halden? <Anchor size="xs">Create an account</Anchor>
				</Text>
			</Stack>
		</Card>
	);
}

function SignUpCard() {
	const email = "tomas@ruizco.es";
	const [password, setPassword] = useState("ruiz-2026");
	const [accepted, setAccepted] = useState(false);

	const rules = [
		{ label: "At least 12 characters", passed: password.length >= 12 },
		{ label: "Different from your email", passed: password !== email },
	];

	return (
		<Card withBorder p="lg">
			<Stack>
				<Title order={3}>Create your account</Title>
				<Button variant="default" fullWidth leftSection={<TbBrandGoogle />}>
					Sign up with Google
				</Button>
				<Divider label="or with email" labelPosition="center" />
				<TextInput label="Work email" defaultValue={email} />
				<Stack gap={6}>
					<PasswordInput
						label="Password"
						value={password}
						onChange={(event) => setPassword(event.currentTarget.value)}
					/>
					{rules.map((rule) => (
						<Group key={rule.label} gap={6} c={rule.passed ? "green" : "dimmed"}>
							{rule.passed ? <TbCheck aria-hidden /> : <TbX aria-hidden />}
							<Text size="xs">{rule.label}</Text>
						</Group>
					))}
				</Stack>
				<Checkbox
					size="sm"
					checked={accepted}
					onChange={(event) => setAccepted(event.currentTarget.checked)}
					label={
						<>
							I agree to the <Anchor inherit>terms</Anchor> and the <Anchor inherit>privacy policy</Anchor>
						</>
					}
				/>
				<Button fullWidth disabled={!accepted || rules.some((rule) => !rule.passed)}>
					Create account
				</Button>
				<Text size="xs" c="dimmed" ta="center">
					Already have an account? <Anchor size="xs">Sign in</Anchor>
				</Text>
			</Stack>
		</Card>
	);
}

function SsoSignIn() {
	return (
		<Card withBorder p="lg">
			<Stack>
				<Title order={3}>Sign in with SSO</Title>
				<TextInput label="Work email" defaultValue={people.mei.email} />
				<Text size="sm" c="dimmed">
					{workspace.name} signs in with Okta.
				</Text>
				<Button fullWidth>Continue with Okta</Button>
				<Anchor size="xs" ta="center">
					Sign in another way
				</Anchor>
			</Stack>
		</Card>
	);
}

function MfaChallenge() {
	return (
		<Card withBorder p="lg">
			<Stack>
				<ThemeIcon variant="light" size="xl">
					<TbShieldLock size={22} />
				</ThemeIcon>
				<Stack gap={4}>
					<Title order={3}>Two-step verification</Title>
					<Text size="sm" c="dimmed">
						Enter the 6-digit code from your authenticator app.
					</Text>
				</Stack>
				<PinInput length={6} type="number" oneTimeCode defaultValue="481" ariaLabel="Verification code" />
				<Checkbox label="Trust this device for 30 days" defaultChecked />
				<Button fullWidth>Verify</Button>
				<Divider />
				<Stack gap={4}>
					<Text size="xs" c="dimmed">
						Can't use your app?
					</Text>
					<Group gap="xs">
						<Anchor size="sm">Use a recovery code</Anchor>
						<Text size="sm" c="dimmed">
							·
						</Text>
						<Anchor size="sm">Use a passkey</Anchor>
					</Group>
				</Stack>
			</Stack>
		</Card>
	);
}

function CheckEmailCard() {
	return (
		<Card withBorder p="lg">
			<Stack align="center" ta="center">
				<ThemeIcon variant="light" size="xl">
					<TbMail size={22} />
				</ThemeIcon>
				<Stack gap={4}>
					<Title order={3}>Check your email</Title>
					<Text size="sm" c="dimmed">
						We sent a sign-in link to{" "}
						<Text span fw={600} c="var(--mantine-color-text)" inherit>
							tomas@ruizco.es
						</Text>
						. It expires in 15 minutes.
					</Text>
				</Stack>
				<Button variant="default" fullWidth disabled>
					Resend in 42 s
				</Button>
				<Anchor size="xs">Use a different email</Anchor>
			</Stack>
		</Card>
	);
}

function ForgotPasswordCard() {
	return (
		<Card withBorder p="lg">
			<Stack>
				<Stack gap={4}>
					<Title order={3}>Reset your password</Title>
					<Text size="sm" c="dimmed">
						We'll email you a link to choose a new one.
					</Text>
				</Stack>
				<TextInput label="Email" defaultValue={people.jane.email} />
				<Button fullWidth>Send reset link</Button>
				<Anchor size="sm">
					<Group gap={4} justify="center">
						<TbArrowLeft aria-hidden />
						Back to sign in
					</Group>
				</Anchor>
			</Stack>
		</Card>
	);
}

function WorkspacePicker() {
	const theme = useMantineTheme();

	const workspaces = [
		{ initials: workspace.initials, name: workspace.name, detail: "Owner · 18 members", color: theme.primaryColor },
		{ initials: "NF", name: "Northwind Freight", detail: "Admin · 6 members", color: "blue" },
		{ initials: "HS", name: "Halden Sandbox", detail: "Owner · development", color: "yellow" },
	];

	return (
		<Card withBorder p="lg">
			<Stack>
				<Stack gap={4}>
					<Title order={3}>Choose a workspace</Title>
					<Text size="xs" c="dimmed">
						Signed in as {people.jane.email} · <Anchor size="xs">Switch account</Anchor>
					</Text>
				</Stack>
				<Paper withBorder>
					{workspaces.map((item, index) => (
						<UnstyledButton
							key={item.name}
							w="100%"
							p="sm"
							bg={index === 0 ? "var(--mantine-color-default-hover)" : undefined}
							style={{ borderTop: index > 0 ? "1px solid var(--mantine-color-default-border)" : undefined }}
						>
							<Group gap="sm" wrap="nowrap">
								<Avatar radius="md" color={item.color}>
									{item.initials}
								</Avatar>
								<Box style={{ flex: 1 }} miw={0}>
									<Text size="sm" fw={500}>
										{item.name}
									</Text>
									<Text size="xs" c="dimmed">
										{item.detail}
									</Text>
								</Box>
								<TbChevronRight aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />
							</Group>
						</UnstyledButton>
					))}
				</Paper>
				<Paper withBorder p="sm">
					<Group gap="sm" wrap="nowrap">
						<Avatar size={26} color={people.tomas.color}>
							{people.tomas.initials}
						</Avatar>
						<Text size="xs" style={{ flex: 1 }}>
							<Text span fw={600} inherit>
								{people.tomas.name}
							</Text>{" "}
							invited you to{" "}
							<Text span fw={600} inherit>
								Ruiz & Co.
							</Text>
						</Text>
						<Button size="xs" variant="light">
							Join
						</Button>
					</Group>
				</Paper>
				<Button variant="subtle" fullWidth leftSection={<TbPlus />}>
					Create a workspace
				</Button>
			</Stack>
		</Card>
	);
}

function InviteAcceptCard() {
	return (
		<Card withBorder p="lg">
			<Stack align="center" ta="center">
				<Avatar size="lg" color={people.tomas.color}>
					{people.tomas.initials}
				</Avatar>
				<Stack gap={4}>
					<Title order={3}>Join Ruiz & Co.</Title>
					<Text size="sm" c="dimmed">
						{people.tomas.name} invited you as a Member. You'll join as {people.jane.email}.
					</Text>
				</Stack>
				<Group grow w="100%">
					<Button variant="default">Decline</Button>
					<Button>Join workspace</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function ReauthModal() {
	return (
		<DialogFrame
			title="Confirm it's you"
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button>Confirm</Button>
				</>
			}
		>
			<Stack>
				<Text size="sm">Enter your password to turn off two-step verification.</Text>
				<PasswordInput label="Password" />
				<Anchor size="sm">Use a passkey instead</Anchor>
			</Stack>
		</DialogFrame>
	);
}

function SignInSplit() {
	return (
		<SimpleGrid cols={2} spacing={0} style={frameStyle}>
			<Center p="xl" mih={460}>
				<Stack w="100%" maw={320}>
					<WorkspaceLogo size={36} />
					<Title order={3}>Sign in to Halden</Title>
					<TextInput label="Email" defaultValue={people.jane.email} />
					<PasswordInput label="Password" defaultValue="halden-logistics" />
					<Button fullWidth>Sign in</Button>
					<Text size="xs" c="dimmed">
						New to Halden? <Anchor size="xs">Create an account</Anchor>
					</Text>
				</Stack>
			</Center>
			<Center p="xl" bg="var(--mantine-primary-color-light)">
				<Stack maw={340} gap="md">
					<Text size="lg" fw={500}>
						We close the month two days earlier since invoices and payments live in one place.
					</Text>
					<Text size="sm" c="dimmed">
						Head of finance, Keller & Sons
					</Text>
				</Stack>
			</Center>
		</SimpleGrid>
	);
}

export function AccessArea() {
	return (
		<PreviewGrid>
			<PreviewItem>
				<SignInCard />
			</PreviewItem>
			<PreviewItem>
				<SignUpCard />
			</PreviewItem>
			<PreviewItem>
				<SsoSignIn />
			</PreviewItem>
			<PreviewItem>
				<MfaChallenge />
			</PreviewItem>
			<PreviewItem>
				<CheckEmailCard />
			</PreviewItem>
			<PreviewItem>
				<ForgotPasswordCard />
			</PreviewItem>
			<PreviewItem>
				<WorkspacePicker />
			</PreviewItem>
			<PreviewItem>
				<InviteAcceptCard />
			</PreviewItem>
			<PreviewItem>
				<ReauthModal />
			</PreviewItem>
			<PreviewItem span="full">
				<SignInSplit />
			</PreviewItem>
		</PreviewGrid>
	);
}

function CreateWorkspaceWizard() {
	return (
		<Card withBorder p="lg" maw={560}>
			<Stack>
				<Stepper active={0} size="sm">
					<Stepper.Step label="Workspace" />
					<Stepper.Step label="Invite your team" />
					<Stepper.Step label="Import data" />
				</Stepper>
				<Title order={3}>Create a workspace</Title>
				<TextInput label="Name" defaultValue="Ruiz & Co." />
				<TextInput
					label="Address"
					description="Available"
					inputWrapperOrder={["label", "input", "description", "error"]}
					leftSection={
						<Text size="sm" c="dimmed">
							app.halden.io/
						</Text>
					}
					leftSectionWidth={110}
					rightSection={<TbCheck aria-label="Available" style={{ color: "var(--mantine-color-green-filled)" }} />}
					defaultValue="ruiz-co"
				/>
				<SimpleGrid cols={2}>
					<Select
						label="Time zone"
						defaultValue="Europe/Madrid"
						data={["Europe/Lisbon", "Europe/Madrid", "Europe/Paris", "Europe/Berlin"]}
					/>
					<Select
						label="Currency"
						defaultValue="EUR"
						data={[
							{ value: "EUR", label: "EUR · Euro" },
							{ value: "USD", label: "USD · US dollar" },
							{ value: "GBP", label: "GBP · Pound sterling" },
						]}
					/>
				</SimpleGrid>
				<Group justify="flex-end">
					<Button>Continue</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const onboardingChecklistSteps = [
	{ label: "Create your workspace", done: true },
	{ label: "Invite your team", done: true },
	{ label: "Connect Stripe", done: false },
	{ label: "Import customers", done: false },
	{ label: "Send your first invoice", done: false },
];

function OnboardingChecklist() {
	const doneCount = onboardingChecklistSteps.filter((step) => step.done).length;
	const nextStep = onboardingChecklistSteps.find((step) => !step.done);

	return (
		<Card withBorder maw={360}>
			<Stack gap="sm">
				<Group justify="space-between">
					<Title order={4}>Get started</Title>
					<Text size="xs" c="dimmed">
						{doneCount} of {onboardingChecklistSteps.length}
					</Text>
				</Group>
				<Progress value={(doneCount / onboardingChecklistSteps.length) * 100} size="sm" />
				<Stack gap="sm" mt="xs">
					{onboardingChecklistSteps.map((step) => (
						<Group key={step.label} gap="sm" wrap="nowrap" align="flex-start">
							{step.done ? (
								<ThemeIcon size={20} radius="xl" color="green">
									<TbCheck size={12} />
								</ThemeIcon>
							) : (
								<Box
									w={20}
									h={20}
									style={{
										flexShrink: 0,
										borderRadius: "50%",
										border: "1.5px solid var(--mantine-color-default-border)",
									}}
								/>
							)}
							{step === nextStep ? (
								<Stack gap={6}>
									<Text size="sm" fw={600}>
										{step.label}
									</Text>
									<Text size="xs" c="dimmed">
										Payments get matched to invoices automatically.
									</Text>
									<Box>
										<Button size="xs">Connect Stripe</Button>
									</Box>
								</Stack>
							) : (
								<Text size="sm" c={step.done ? "dimmed" : undefined}>
									{step.label}
								</Text>
							)}
						</Group>
					))}
				</Stack>
			</Stack>
		</Card>
	);
}

interface StatCardProps {
	label: string;
	value: ReactNode;
	change: string;
	positive: boolean;
	direction: "up" | "down";
}

function StatCard({ label, value, change, positive, direction }: StatCardProps) {
	return (
		<Card withBorder>
			<Text size="sm" c="dimmed">
				{label}
			</Text>
			<Text fz={26} fw={700} mt={4} style={{ fontVariantNumeric: "tabular-nums" }}>
				{value}
			</Text>
			<Group gap={4} mt={4}>
				<Group gap={2} c={positive ? "green" : "red"}>
					{direction === "up" ? <TbArrowUpRight aria-hidden /> : <TbArrowDownRight aria-hidden />}
					<Text size="xs" fw={500}>
						{change}
					</Text>
				</Group>
				<Text size="xs" c="dimmed">
					vs last month
				</Text>
			</Group>
		</Card>
	);
}

function StatsGrid() {
	return (
		<Grid type="container" breakpoints={previewBreakpoints}>
			<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
				<StatCard label="Outstanding" value={euros.format(48210)} change="8%" direction="up" positive={false} />
			</Grid.Col>
			<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
				<StatCard label="Overdue" value={euros.format(12940)} change="3%" direction="down" positive />
			</Grid.Col>
			<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
				<StatCard label="Paid this month" value={euros.format(86400)} change="12%" direction="up" positive />
			</Grid.Col>
			<Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
				<StatCard label="Days to get paid" value="31" change="2 days" direction="down" positive />
			</Grid.Col>
		</Grid>
	);
}

function KpiCard({ label, value, data }: { label: string; value: ReactNode; data: number[] }) {
	const theme = useMantineTheme();

	return (
		<Card withBorder>
			<Group justify="space-between" wrap="nowrap">
				<Box>
					<Text size="sm" c="dimmed">
						{label}
					</Text>
					<Text fz={26} fw={700} mt={4}>
						{value}
					</Text>
				</Box>
				<Sparkline w={120} h={48} data={data} color={theme.primaryColor} curveType="natural" fillOpacity={0.3} />
			</Group>
		</Card>
	);
}

const chartCardData = [
	{ month: "Jun", invoiced: 61200, paid: 54800 },
	{ month: "Jul", invoiced: 58400, paid: 57100 },
	{ month: "Aug", invoiced: 49900, paid: 51300 },
	{ month: "Sep", invoiced: 67300, paid: 59800 },
	{ month: "Oct", invoiced: 72100, paid: 68400 },
	{ month: "Nov", invoiced: 69800, paid: 63900 },
];

function ChartCard() {
	const theme = useMantineTheme();

	return (
		<Card withBorder>
			<Group justify="space-between" align="flex-start">
				<Box>
					<Text size="sm" c="dimmed">
						Invoiced
					</Text>
					<Text fz={26} fw={700} mt={4}>
						{euros.format(378700)}
					</Text>
				</Box>
				<SegmentedControl size="xs" defaultValue="6m" data={["30d", "6m", "12m"]} />
			</Group>
			<AreaChart
				mt="lg"
				h={220}
				data={chartCardData}
				dataKey="month"
				series={[
					{ name: "invoiced", label: "Invoiced", color: theme.primaryColor },
					{ name: "paid", label: "Paid", color: "teal" },
				]}
				withLegend
				legendProps={{ verticalAlign: "bottom" }}
				valueFormatter={(value) => `€${Math.round(value / 1000)}k`}
				curveType="monotone"
				gridAxis="y"
			/>
		</Card>
	);
}

const activityFeedEvents: { person: Person | null; text: string; at: Date }[] = [
	{ person: people.mei, text: "resolved claim CLM-305", at: ago({ minutes: 20 }) },
	{ person: null, text: "Stripe matched a payment to HAL-2040", at: ago({ hours: 1 }) },
	{
		person: people.tomas,
		text: "sent HAL-2041 to Brightwater Foods",
		at: ago({ hours: 3 }),
	},
	{ person: people.jane, text: "invited Sofia Berg", at: ago({ days: 1 }) },
];

function ActivityFeed() {
	return (
		<Card withBorder>
			<Title order={4} mb="md">
				Recent activity
			</Title>
			<Timeline bulletSize={26} lineWidth={2}>
				{activityFeedEvents.map((event) => (
					<Timeline.Item
						key={event.text}
						bullet={
							event.person ? (
								<Avatar size={26} color={event.person.color}>
									{event.person.initials}
								</Avatar>
							) : (
								<TbCreditCard size={14} />
							)
						}
					>
						<Text size="sm">
							{event.person && (
								<Text span fw={600} inherit>
									{event.person.name}{" "}
								</Text>
							)}
							{event.text}
						</Text>
						<Text size="xs" c="dimmed">
							<RelativeTime date={event.at} />
						</Text>
					</Timeline.Item>
				))}
			</Timeline>
		</Card>
	);
}

export function HomeArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<CreateWorkspaceWizard />
			</PreviewItem>
			<PreviewItem>
				<OnboardingChecklist />
			</PreviewItem>
			<PreviewItem span="full">
				<StatsGrid />
			</PreviewItem>
			<PreviewItem>
				<Stack>
					<KpiCard label="Deliveries on time" value="94%" data={[88, 91, 90, 93, 92, 95, 94]} />
					<KpiCard label="Open claims" value="11" data={[18, 16, 17, 14, 13, 12, 11]} />
				</Stack>
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<ChartCard />
			</PreviewItem>
			<PreviewItem>
				<ActivityFeed />
			</PreviewItem>
		</PreviewGrid>
	);
}

const membersTableRoleOptions = ["Admin", "Member", "Billing", "Viewer"];

interface MembersTableRow {
	person: Person;
	role: string;
	invited?: boolean;
	twoStep?: boolean;
	lastActive?: string;
	selected?: boolean;
}

const membersTableRows: MembersTableRow[] = [
	{ person: people.jane, role: "Owner", twoStep: true, lastActive: "Now" },
	{ person: people.tomas, role: "Admin", twoStep: true, lastActive: "2 hours ago" },
	{ person: people.mei, role: "Member", twoStep: false, lastActive: "Yesterday", selected: true },
	{ person: people.arjun, role: "Viewer", twoStep: false, lastActive: "12 days ago", selected: true },
	{ person: people.sofia, role: "Member", invited: true },
];

function membersTableStatus(color: string, label: string) {
	return (
		<Group gap={6} wrap="nowrap">
			<ColorSwatch color={`var(--mantine-color-${color}-filled)`} size={8} withShadow={false} />
			<Text size="sm">{label}</Text>
		</Group>
	);
}

function membersTableRowMenu() {
	return (
		<Menu position="bottom-end" withinPortal>
			<Menu.Target>
				<ActionIcon variant="subtle" color="gray" aria-label="Member actions">
					<TbDots />
				</ActionIcon>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item>Change role</Menu.Item>
				<Menu.Item>Reset two-step</Menu.Item>
				<Menu.Divider />
				<Menu.Item color="red">Remove from workspace</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}

function MembersTable() {
	return (
		<Card withBorder>
			<Card.Section inheritPadding py="sm">
				<Group gap="sm">
					<TextInput
						placeholder="Search members"
						leftSection={<TbSearch />}
						aria-label="Search members"
						style={{ flex: "1 1 200px" }}
						maw={280}
					/>
					<Select
						data={["All roles", "Owner", ...membersTableRoleOptions]}
						defaultValue="All roles"
						aria-label="Filter by role"
						allowDeselect={false}
						w={150}
					/>
					<Button leftSection={<TbPlus />} ml="auto">
						Invite members
					</Button>
				</Group>
			</Card.Section>
			<Card.Section
				inheritPadding
				py="xs"
				bg="var(--mantine-primary-color-light)"
				style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}
			>
				<Group gap="sm">
					<Checkbox indeterminate aria-label="Clear selection" />
					<Text size="sm" fw={600}>
						2 selected
					</Text>
					<Button size="xs" variant="default" rightSection={<TbChevronDown />}>
						Change role
					</Button>
					<Button size="xs" variant="subtle" color="red">
						Remove from workspace
					</Button>
				</Group>
			</Card.Section>
			<Card.Section withBorder>
				<Table.ScrollContainer minWidth={760}>
					<Table verticalSpacing="sm" horizontalSpacing="md" highlightOnHover>
						<Table.Thead>
							<Table.Tr>
								<Table.Th w={40}>
									<Checkbox indeterminate aria-label="Select all members" />
								</Table.Th>
								<Table.Th>Member</Table.Th>
								<Table.Th>Role</Table.Th>
								<Table.Th>Status</Table.Th>
								<Table.Th>Two-step</Table.Th>
								<Table.Th>Last active</Table.Th>
								<Table.Th w={48} />
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							{membersTableRows.map((row) => {
								const owner = row.role === "Owner";
								return (
									<Table.Tr key={row.person.email} bg={row.selected ? "var(--mantine-primary-color-light)" : undefined}>
										<Table.Td>
											<Checkbox
												defaultChecked={row.selected}
												disabled={owner}
												aria-label={`Select ${row.person.name}`}
											/>
										</Table.Td>
										<Table.Td>
											<EntityLabel
												name={row.person.name}
												initials={row.person.initials}
												color={row.person.color}
												detail={owner ? `${row.person.email} (you)` : row.person.email}
											/>
										</Table.Td>
										<Table.Td>
											{owner ? (
												<Group gap={6} c="dimmed" wrap="nowrap">
													<TbLock />
													<Text size="sm">Owner</Text>
												</Group>
											) : (
												<Select
													size="xs"
													w={128}
													data={membersTableRoleOptions}
													defaultValue={row.role}
													allowDeselect={false}
													aria-label={`Role of ${row.person.name}`}
												/>
											)}
										</Table.Td>
										<Table.Td>
											{row.invited ? membersTableStatus("blue", "Invited") : membersTableStatus("green", "Active")}
										</Table.Td>
										<Table.Td>
											{row.twoStep === undefined ? (
												<Text size="sm" c="dimmed">
													–
												</Text>
											) : (
												<Group gap={4} wrap="nowrap" c={row.twoStep ? "green" : "orange"}>
													{row.twoStep ? <TbCheck /> : <TbAlertTriangle />}
													<Text size="sm">{row.twoStep ? "On" : "Off"}</Text>
												</Group>
											)}
										</Table.Td>
										<Table.Td>
											{row.invited ? (
												<Text size="sm" c="dimmed">
													Sent Nov 22 ·{" "}
													<Anchor component="button" size="sm">
														Resend
													</Anchor>
												</Text>
											) : (
												<Text size="sm" c="dimmed">
													{row.lastActive}
												</Text>
											)}
										</Table.Td>
										<Table.Td>{!owner && membersTableRowMenu()}</Table.Td>
									</Table.Tr>
								);
							})}
						</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
			</Card.Section>
			<Card.Section inheritPadding py="sm">
				<Text size="xs" c="dimmed">
					5 of 25 seats used
				</Text>
			</Card.Section>
		</Card>
	);
}

function InviteMembersModal() {
	return (
		<DialogFrame
			title="Invite members"
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button>Send 2 invites</Button>
				</>
			}
		>
			<Stack gap="md">
				<TagsInput
					label="Email addresses"
					description="Paste a list or press Enter after each one."
					defaultValue={["lucas@halden.io", "amara@halden.io"]}
				/>
				<Select label="Role" data={membersTableRoleOptions} defaultValue="Member" allowDeselect={false} />
				<Text size="sm" c="dimmed">
					You'll have 18 of 25 seats left.
				</Text>
			</Stack>
		</DialogFrame>
	);
}

const removeMemberModalWork: { work: string; owner: Person }[] = [
	{ work: "7 claims", owner: people.tomas },
	{ work: "14 invoices", owner: people.jane },
	{ work: "1 automation rule", owner: people.jane },
];

const removeMemberModalOwners = [people.jane, people.tomas, people.sofia].map((person) => person.name);

function RemoveMemberModal() {
	return (
		<DialogFrame
			title="Remove Mei Lin?"
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button color="red">Remove Mei Lin</Button>
				</>
			}
		>
			<Stack gap="md">
				<Text size="sm">She loses access straight away. Choose who takes over her open work.</Text>
				<Table withTableBorder verticalSpacing="xs">
					<Table.Tbody>
						{removeMemberModalWork.map((row) => (
							<Table.Tr key={row.work}>
								<Table.Td>
									<Text size="sm">{row.work}</Text>
								</Table.Td>
								<Table.Td w={190}>
									<Select
										size="xs"
										data={removeMemberModalOwners}
										defaultValue={row.owner.name}
										allowDeselect={false}
										aria-label={`New owner for ${row.work}`}
										leftSection={
											<Avatar size={18} color={row.owner.color}>
												{row.owner.initials}
											</Avatar>
										}
									/>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
				<Checkbox defaultChecked label="Sign her out of every device" />
			</Stack>
		</DialogFrame>
	);
}

const teamsSectionTeams: { name: string; members: Person[]; more: number; role: string }[] = [
	{ name: "Finance team", members: [people.mei, people.tomas], more: 2, role: "Billing" },
	{ name: "Operations", members: [people.sofia, people.mei, people.arjun], more: 8, role: "Member" },
	{ name: "IT admins", members: [people.tomas, people.jane], more: 0, role: "Admin" },
];

function TeamsSection() {
	return (
		<Panel
			title="Teams"
			actions={
				<Button size="xs" variant="default" leftSection={<TbPlus />}>
					Create team
				</Button>
			}
			flush
		>
			<Table verticalSpacing="sm" horizontalSpacing="md">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Team</Table.Th>
						<Table.Th>Members</Table.Th>
						<Table.Th>Default role</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{teamsSectionTeams.map((team) => (
						<Table.Tr key={team.name}>
							<Table.Td>
								<Text size="sm" fw={500}>
									{team.name}
								</Text>
							</Table.Td>
							<Table.Td>
								<Avatar.Group spacing={4}>
									{team.members.map((person) => (
										<Avatar key={person.email} size={28} color={person.color}>
											{person.initials}
										</Avatar>
									))}
									{team.more > 0 && <Avatar size={28}>+{team.more}</Avatar>}
								</Avatar.Group>
							</Table.Td>
							<Table.Td>
								<Text size="sm">{team.role}</Text>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Panel>
	);
}

function PermissionMatrix() {
	return (
		<Panel
			title="Roles and permissions"
			description="Changes apply to every member with the role. Owner can't be edited."
			actions={
				<Button size="xs" variant="default" leftSection={<TbPlus />}>
					Create role
				</Button>
			}
			flush
			footer={
				<Group justify="flex-end" gap="sm">
					<Button size="xs" variant="default">
						Discard
					</Button>
					<Button size="xs">Save changes</Button>
				</Group>
			}
		>
			<Table.ScrollContainer minWidth={560}>
				<CheckboxMatrix
					columns={["Owner", "Admin", "Member", "Billing", "Viewer"]}
					lockedColumns={[0]}
					groups={[
						{
							label: "Invoices",
							rows: [
								{ label: "View invoices", values: [true, true, true, true, true] },
								{ label: "Create and edit invoices", values: [true, true, true, false, false] },
								{ label: "Void invoices", values: [true, true, false, true, false] },
								{ label: "Export to CSV", values: [true, true, true, true, false] },
							],
						},
						{
							label: "Customers",
							rows: [
								{ label: "View customers", values: [true, true, true, true, true] },
								{ label: "Edit customers", values: [true, true, true, false, false] },
								{ label: "Delete customers", values: [true, true, false, false, false] },
							],
						},
						{
							label: "Workspace",
							rows: [
								{ label: "Manage members", values: [true, true, false, false, false] },
								{ label: "Manage billing", values: [true, true, false, true, false] },
								{ label: "Manage API keys", values: [true, true, false, false, false] },
							],
						},
					]}
				/>
			</Table.ScrollContainer>
		</Panel>
	);
}

const groupRoleMappingGroups = [
	{ group: "Finance team", role: "Billing", people: 4 },
	{ group: "Operations", role: "Member", people: 11 },
	{ group: "IT admins", role: "Admin", people: 2 },
];

function GroupRoleMapping() {
	return (
		<Panel
			title="Okta groups"
			description="Synced 10 minutes ago"
			actions={
				<Button size="xs" variant="default" leftSection={<TbPlus />}>
					Map a group
				</Button>
			}
			flush
			footer={
				<Text size="xs" c="dimmed">
					People in no mapped group get Viewer.
				</Text>
			}
		>
			<Table verticalSpacing="sm" horizontalSpacing="md">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Group</Table.Th>
						<Table.Th w={24} />
						<Table.Th>Role</Table.Th>
						<Table.Th ta="right">People</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{groupRoleMappingGroups.map((row) => (
						<Table.Tr key={row.group}>
							<Table.Td>
								<Text size="sm" fw={500}>
									{row.group}
								</Text>
							</Table.Td>
							<Table.Td c="dimmed">
								<TbArrowRight aria-hidden />
							</Table.Td>
							<Table.Td>
								<Select
									size="xs"
									w={120}
									data={membersTableRoleOptions}
									defaultValue={row.role}
									allowDeselect={false}
									aria-label={`Role for ${row.group}`}
								/>
							</Table.Td>
							<Table.Td ta="right" style={{ fontVariantNumeric: "tabular-nums" }}>
								{row.people}
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Panel>
	);
}

const roleEditorAccess = [
	{ resource: "Invoices", level: "Full" },
	{ resource: "Payments", level: "Full" },
	{ resource: "Customers", level: "View" },
	{ resource: "Workspace settings", level: "None" },
];

function RoleEditor() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Title order={4}>Edit role</Title>
				<TextInput label="Name" defaultValue="Billing" />
				<Select
					label="Based on"
					description="Anything not set below comes from this role."
					data={membersTableRoleOptions}
					defaultValue="Viewer"
					allowDeselect={false}
				/>
				<Input.Wrapper label="Access">
					<Stack gap="xs" mt={4}>
						{roleEditorAccess.map((row) => (
							<Group key={row.resource} justify="space-between" wrap="nowrap">
								<Text size="sm">{row.resource}</Text>
								<SegmentedControl
									size="xs"
									data={["None", "View", "Edit", "Full"]}
									defaultValue={row.level}
									aria-label={`Access to ${row.resource}`}
								/>
							</Group>
						))}
					</Stack>
				</Input.Wrapper>
				<Group justify="flex-end" gap="sm">
					<Button variant="default">Cancel</Button>
					<Button>Save role</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const accessExplainerChain = [
	{ kind: "Person", value: "Mei Lin" },
	{ kind: "Group", value: "Finance team", detail: "from Okta" },
	{ kind: "Role", value: "Billing" },
];

function AccessExplainer() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group gap="xs" wrap="nowrap">
					<Select
						data={Object.values(people).map((person) => person.name)}
						defaultValue={people.mei.name}
						allowDeselect={false}
						aria-label="Person"
						leftSection={
							<Avatar size={20} color={people.mei.color}>
								{people.mei.initials}
							</Avatar>
						}
						style={{ flex: 1 }}
					/>
					<Text c="dimmed">can</Text>
					<Select
						data={["invoices.view", "invoices.void", "customers.delete", "keys.manage"]}
						defaultValue="invoices.void"
						allowDeselect={false}
						aria-label="Permission"
						styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
						style={{ flex: 1 }}
					/>
				</Group>
				<Alert color="green" icon={<TbCheck />} title="Allowed">
					Through a group. Her own role doesn't allow it.
				</Alert>
				<Timeline active={3} bulletSize={18} lineWidth={2}>
					{accessExplainerChain.map((step) => (
						<Timeline.Item
							key={step.kind}
							title={
								<Group gap="xs">
									<Text size="xs" c="dimmed" w={72}>
										{step.kind}
									</Text>
									<Text size="sm">{step.value}</Text>
									{step.detail && (
										<Text size="xs" c="dimmed">
											{step.detail}
										</Text>
									)}
								</Group>
							}
						/>
					))}
					<Timeline.Item
						color="green"
						bullet={<TbCheck size={12} />}
						title={
							<Group gap="xs">
								<Text size="xs" c="dimmed" w={72}>
									Permission
								</Text>
								<Text size="sm" ff="monospace">
									invoices.void
								</Text>
							</Group>
						}
					/>
				</Timeline>
				<Group gap="xs" wrap="nowrap" c="dimmed" align="flex-start">
					<TbX style={{ flexShrink: 0, marginTop: 3 }} />
					<Text size="sm">
						Her direct role,{" "}
						<Text span fw={600} inherit>
							Member
						</Text>
						, doesn't include{" "}
						<Text span ff="monospace" inherit>
							invoices.void
						</Text>
						.
					</Text>
				</Group>
			</Stack>
		</Card>
	);
}

function AccessRequestCard() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group gap="sm" wrap="nowrap" align="flex-start">
					<Avatar color={people.mei.color}>{people.mei.initials}</Avatar>
					<Box style={{ flex: 1 }}>
						<Text size="sm">
							<Text span fw={600} inherit>
								Mei Lin
							</Text>{" "}
							requests{" "}
							<Text span fw={600} inherit>
								Admin
							</Text>
						</Text>
						<Text size="xs" c="dimmed">
							<RelativeTime date={ago({ minutes: 4 })} />
						</Text>
					</Box>
					<StatusBadge status="pending" />
				</Group>
				<DataList size="sm">
					<DataList.Item>
						<DataList.ItemLabel>For</DataList.ItemLabel>
						<DataList.ItemValue>2 hours, then back to Member</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Reason</DataList.ItemLabel>
						<DataList.ItemValue>
							Rotate the Stripe webhook secret after this morning's failed payouts.
						</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Approvers</DataList.ItemLabel>
						<DataList.ItemValue>Jane Okafor, Tomás Ruiz</DataList.ItemValue>
					</DataList.Item>
				</DataList>
				<Group justify="flex-end" gap="sm">
					<Button variant="default">Deny</Button>
					<Button>Approve for 2 hours</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function ShareDialog() {
	return (
		<DialogFrame
			title="Share “Broken seal on arrival”"
			footer={
				<>
					<Button variant="default" leftSection={<TbLink />}>
						Copy link
					</Button>
					<Button>Done</Button>
				</>
			}
		>
			<Stack gap="md">
				<Group gap="xs" wrap="nowrap">
					<TextInput placeholder="Add people or teams" aria-label="Add people or teams" style={{ flex: 1 }} />
					<Button variant="default">Invite</Button>
				</Group>
				<Stack gap="sm">
					<Group justify="space-between" wrap="nowrap">
						<EntityLabel
							name={people.jane.name}
							initials={people.jane.initials}
							color={people.jane.color}
							detail={people.jane.email}
						/>
						<Text size="sm" c="dimmed">
							Owner
						</Text>
					</Group>
					<Group justify="space-between" wrap="nowrap">
						<EntityLabel
							name={people.mei.name}
							initials={people.mei.initials}
							color={people.mei.color}
							detail={people.mei.email}
						/>
						<Select
							size="xs"
							w={110}
							data={["Can view", "Can edit"]}
							defaultValue="Can edit"
							allowDeselect={false}
							aria-label="Access for Mei Lin"
						/>
					</Group>
					<Group justify="space-between" wrap="nowrap">
						<EntityLabel name="Finance team" detail="4 people" icon={<TbUsers />} color="gray" />
						<Select
							size="xs"
							w={110}
							data={["Can view", "Can edit"]}
							defaultValue="Can view"
							allowDeselect={false}
							aria-label="Access for Finance team"
						/>
					</Group>
				</Stack>
				<Divider />
				<Select
					label="General access"
					data={["Only people with access", `Everyone at ${workspace.name}`]}
					defaultValue="Only people with access"
					allowDeselect={false}
				/>
			</Stack>
		</DialogFrame>
	);
}

export function MembersArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<MembersTable />
			</PreviewItem>
			<PreviewItem>
				<InviteMembersModal />
			</PreviewItem>
			<PreviewItem>
				<RemoveMemberModal />
			</PreviewItem>
			<PreviewItem>
				<TeamsSection />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<PermissionMatrix />
			</PreviewItem>
			<PreviewItem>
				<GroupRoleMapping />
			</PreviewItem>
			<PreviewItem>
				<RoleEditor />
			</PreviewItem>
			<PreviewItem>
				<AccessExplainer />
			</PreviewItem>
			<PreviewItem>
				<AccessRequestCard />
			</PreviewItem>
			<PreviewItem>
				<ShareDialog />
			</PreviewItem>
		</PreviewGrid>
	);
}

function ProfileSection() {
	return (
		<Stack gap="xl">
			<Title order={3}>Profile</Title>
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Name and photo</Title>
					<Text size="sm" c="dimmed" mt={4}>
						Shown to members of your workspaces.
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Card withBorder>
						<Stack gap="md">
							<Group gap="md">
								<Avatar size="lg">{people.jane.initials}</Avatar>
								<Button size="xs" variant="default">
									Upload photo
								</Button>
								<Button size="xs" variant="subtle" color="gray">
									Remove
								</Button>
							</Group>
							<SimpleGrid cols={2}>
								<TextInput label="First name" defaultValue="Jane" />
								<TextInput label="Last name" defaultValue="Okafor" />
							</SimpleGrid>
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Email</Title>
					<Text size="sm" c="dimmed" mt={4}>
						Used to sign in and for notifications.
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Card withBorder>
						<Stack gap="md">
							<TextInput label="Email" defaultValue={people.jane.email} />
							<Alert color="blue" icon={<TbMail />}>
								<Text size="sm">
									We sent a confirmation link to{" "}
									<Text span fw={600} inherit>
										jane.okafor@halden.io
									</Text>
									. Your email changes when you open it.
								</Text>
								<Group gap="md" mt="xs">
									<Anchor component="button" size="sm">
										Resend
									</Anchor>
									<Anchor component="button" size="sm">
										Cancel the change
									</Anchor>
								</Group>
							</Alert>
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
		</Stack>
	);
}

const appearanceSettingsSchemes = [
	{
		value: "light",
		label: "Light",
		background: "var(--mantine-color-white)",
		line: "var(--mantine-color-gray-3)",
	},
	{
		value: "dark",
		label: "Dark",
		background: "var(--mantine-color-dark-7)",
		line: "var(--mantine-color-dark-4)",
	},
	{
		value: "auto",
		label: "System",
		background: "linear-gradient(135deg, var(--mantine-color-white) 50%, var(--mantine-color-dark-7) 50%)",
		line: "var(--mantine-color-gray-5)",
	},
];

function AppearanceSettings() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Title order={4}>Appearance</Title>
				<Radio.Group label="Colour scheme" defaultValue="auto">
					<SimpleGrid cols={3} spacing="sm" mt="xs">
						{appearanceSettingsSchemes.map((scheme) => (
							<Radio.Card key={scheme.value} value={scheme.value} p="xs">
								<Stack gap="xs">
									<Stack
										gap={5}
										h={56}
										p={8}
										style={{
											background: scheme.background,
											borderRadius: "var(--mantine-radius-sm)",
											border: "1px solid var(--mantine-color-default-border)",
										}}
									>
										{["60%", "90%", "75%"].map((width) => (
											<Box key={width} h={5} w={width} bg={scheme.line} style={{ borderRadius: 2 }} />
										))}
									</Stack>
									<Group gap="xs" wrap="nowrap">
										<Radio.Indicator size="xs" />
										<Text size="sm">{scheme.label}</Text>
									</Group>
								</Stack>
							</Radio.Card>
						))}
					</SimpleGrid>
				</Radio.Group>
				<Input.Wrapper label="Density">
					<Box mt={4}>
						<SegmentedControl data={["Compact", "Default", "Comfortable"]} defaultValue="Default" />
					</Box>
				</Input.Wrapper>
			</Stack>
		</Card>
	);
}

function NotificationMatrix() {
	return (
		<Panel
			title="Notify me about"
			flush
			footer={
				<Text size="xs" c="dimmed">
					Slack messages go to <Code>#finance</Code>
				</Text>
			}
		>
			<CheckboxMatrix
				columns={["In app", "Email", "Slack"]}
				groups={[
					{
						label: "Invoices",
						rows: [
							{ label: "Invoice paid", values: [true, false, false] },
							{ label: "Invoice overdue", values: [true, true, false] },
						],
					},
					{
						label: "Approvals",
						rows: [
							{ label: "Someone requests access", values: [true, true, true] },
							{ label: "A change waits for me", values: [true, true, false] },
						],
					},
				]}
			/>
		</Panel>
	);
}

const sessionsListSessions = [
	{ device: "Chrome on macOS", mobile: false, place: "Lisbon, Portugal", when: "Active now", current: true },
	{ device: "Safari on iPhone", mobile: true, place: "Lisbon, Portugal", when: "2 hours ago" },
	{ device: "Firefox on Windows", mobile: false, place: "Frankfurt, Germany", when: "Nov 18", newLocation: true },
];

const sessionsListRowBorder = "1px solid var(--mantine-color-default-border)";

function SessionsList() {
	return (
		<Panel
			title="Where you're signed in"
			description="Sign out of any device you don't recognise."
			flush
			footer={
				<Button size="xs" variant="outline" color="red">
					Sign out of all other devices
				</Button>
			}
		>
			{sessionsListSessions.map((session, index) => (
				<Group
					key={session.device}
					gap="sm"
					wrap="nowrap"
					px="md"
					py="sm"
					style={index > 0 ? { borderTop: sessionsListRowBorder } : undefined}
				>
					<ThemeIcon variant="light" color="gray" size="lg">
						{session.mobile ? <TbDeviceMobile /> : <TbDeviceLaptop />}
					</ThemeIcon>
					<Box style={{ flex: 1 }} miw={0}>
						<Group gap={6}>
							<Text size="sm" fw={500}>
								{session.device}
							</Text>
							{session.current && (
								<Badge size="xs" variant="light" color="green">
									This device
								</Badge>
							)}
							{session.newLocation && (
								<Badge size="xs" variant="light" color="yellow">
									New location
								</Badge>
							)}
						</Group>
						<Text size="xs" c="dimmed">
							{session.place} · {session.when}
						</Text>
					</Box>
					{!session.current && (
						<Button size="xs" variant="subtle" color="red">
							Sign out
						</Button>
					)}
				</Group>
			))}
		</Panel>
	);
}

const mfaSetupCodes = [
	"7KQ2-M9XD",
	"PL4R-82HZ",
	"W3NC-QY6T",
	"8FJD-L2VA",
	"XM7E-41PK",
	"D9TB-6RWS",
	"HZ2U-N8CE",
	"5VGA-KQ3M",
];

function MfaSetup() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Stepper active={2} size="xs">
					<Stepper.Step label="Scan" />
					<Stepper.Step label="Verify" />
					<Stepper.Step label="Save codes" />
				</Stepper>
				<Stack gap={4}>
					<Title order={4}>Save your recovery codes</Title>
					<Text size="sm" c="dimmed">
						Each code signs you in once if you lose your phone. You won't see them again.
					</Text>
				</Stack>
				<Paper withBorder p="sm" bg="var(--mantine-color-default-hover)">
					<SimpleGrid cols={2} spacing="xs" verticalSpacing={6}>
						{mfaSetupCodes.map((code) => (
							<Text key={code} size="sm" ff="monospace" ta="center">
								{code}
							</Text>
						))}
					</SimpleGrid>
				</Paper>
				<Group gap="xs">
					<CopyButton value={mfaSetupCodes.join("\n")}>
						{({ copied, copy }) => (
							<Button size="xs" variant="default" leftSection={copied ? <TbCheck /> : <TbCopy />} onClick={copy}>
								{copied ? "Copied" : "Copy"}
							</Button>
						)}
					</CopyButton>
					<Button size="xs" variant="default" leftSection={<TbDownload />}>
						Download .txt
					</Button>
				</Group>
				<Checkbox label="I've saved these codes" />
				<Button fullWidth disabled>
					Finish setup
				</Button>
			</Stack>
		</Card>
	);
}

const passkeysListPasskeys = [
	{ name: "MacBook Pro", icon: <TbFingerprint />, at: ago({ hours: 2 }) },
	{ name: "YubiKey 5C", icon: <TbKey />, at: ago({ days: 22 }) },
];

function PasskeysList() {
	return (
		<Panel
			title="Passkeys"
			description="Sign in with your fingerprint, face or a security key."
			actions={
				<Button size="xs" variant="default" leftSection={<TbPlus />}>
					Add a passkey
				</Button>
			}
			flush
		>
			{passkeysListPasskeys.map((passkey, index) => (
				<Group
					key={passkey.name}
					gap="sm"
					wrap="nowrap"
					px="md"
					py="sm"
					style={index > 0 ? { borderTop: sessionsListRowBorder } : undefined}
				>
					<ThemeIcon variant="light" color="gray" size="lg">
						{passkey.icon}
					</ThemeIcon>
					<Box style={{ flex: 1 }}>
						<Text size="sm" fw={500}>
							{passkey.name}
						</Text>
						<Text size="xs" c="dimmed">
							Last used <RelativeTime date={passkey.at} />
						</Text>
					</Box>
					<Menu position="bottom-end">
						<Menu.Target>
							<ActionIcon variant="subtle" color="gray" aria-label={`Actions for ${passkey.name}`}>
								<TbDots />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item>Rename</Menu.Item>
							<Menu.Item color="red">Remove</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			))}
		</Panel>
	);
}

function ConnectedAccounts() {
	return (
		<Panel title="Connected accounts" description="Accounts you can sign in with." flush>
			<Group gap="sm" wrap="nowrap" px="md" py="sm">
				<ThemeIcon variant="default" size="lg">
					<TbBrandGoogle />
				</ThemeIcon>
				<Box style={{ flex: 1 }} miw={0}>
					<Text size="sm" fw={500}>
						Google
					</Text>
					<Text size="xs" c="dimmed" truncate>
						{people.jane.email}
					</Text>
				</Box>
				<Tooltip label="It's your only way to sign in. Connect another account first." withArrow multiline w={220}>
					<Button size="xs" variant="default" data-disabled onClick={(event) => event.preventDefault()}>
						Remove
					</Button>
				</Tooltip>
			</Group>
			<Group gap="sm" wrap="nowrap" px="md" py="sm" style={{ borderTop: sessionsListRowBorder }}>
				<ThemeIcon variant="default" size="lg">
					<TbBrandWindows />
				</ThemeIcon>
				<Box style={{ flex: 1 }}>
					<Text size="sm" fw={500}>
						Microsoft
					</Text>
					<Text size="xs" c="dimmed">
						Not connected
					</Text>
				</Box>
				<Button size="xs" variant="default">
					Connect
				</Button>
			</Group>
		</Panel>
	);
}

function RegionalSettings() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Title order={4}>Language and region</Title>
				<SimpleGrid cols={2}>
					<Select
						label="Language"
						data={["English (UK)", "English (US)", "Français", "Português", "Deutsch"]}
						defaultValue="English (UK)"
						allowDeselect={false}
					/>
					<Select
						label="Time zone"
						data={["Europe/Lisbon", "Europe/Paris", "Europe/Berlin", "America/New_York"]}
						defaultValue="Europe/Lisbon"
						allowDeselect={false}
						searchable
					/>
					<Select
						label="Dates"
						data={["24/11/2026", "11/24/2026", "2026-11-24"]}
						defaultValue="24/11/2026"
						allowDeselect={false}
					/>
					<Select
						label="Numbers"
						data={["1,234.56", "1.234,56", "1 234,56"]}
						defaultValue="1,234.56"
						allowDeselect={false}
					/>
				</SimpleGrid>
				<Group justify="flex-end">
					<Button>Save</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function PersonalDataSection() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group justify="space-between" wrap="nowrap" align="flex-start" gap="lg">
					<Box>
						<Text fw={500}>Export your data</Text>
						<Text size="sm" c="dimmed">
							A ZIP file with your profile, comments and activity, sent to {people.jane.email}.
						</Text>
					</Box>
					<Button size="xs" variant="default" style={{ flexShrink: 0 }}>
						Request export
					</Button>
				</Group>
				<Divider />
				<Group justify="space-between" wrap="nowrap" align="flex-start" gap="lg">
					<Box>
						<Text fw={500} c="red">
							Delete your account
						</Text>
						<Text size="sm" c="dimmed">
							You own {workspace.name}. Transfer ownership before deleting your account.
						</Text>
					</Box>
					<Button size="xs" variant="outline" color="red" disabled style={{ flexShrink: 0 }}>
						Delete account
					</Button>
				</Group>
			</Stack>
		</Card>
	);
}

export function SecurityArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="twoThirds">
				<ProfileSection />
			</PreviewItem>
			<PreviewItem>
				<AppearanceSettings />
			</PreviewItem>
			<PreviewItem>
				<NotificationMatrix />
			</PreviewItem>
			<PreviewItem>
				<SessionsList />
			</PreviewItem>
			<PreviewItem>
				<MfaSetup />
			</PreviewItem>
			<PreviewItem span="half">
				<PasskeysList />
			</PreviewItem>
			<PreviewItem span="half">
				<ConnectedAccounts />
			</PreviewItem>
			<PreviewItem span="half">
				<RegionalSettings />
			</PreviewItem>
			<PreviewItem span="half">
				<PersonalDataSection />
			</PreviewItem>
		</PreviewGrid>
	);
}

const apiKeysSectionKeys = [
	{
		name: "Production backend",
		key: "hl_live_4f9a…c21e",
		scopes: ["invoices:write", "customers:read"],
		lastUsed: "3 minutes ago",
		expires: "Never",
	},
	{
		name: "Zapier sync",
		key: "hl_live_77b0…0a9d",
		scopes: ["invoices:read"],
		lastUsed: "12 days ago",
		expires: "Dec 12, 2026",
	},
	{
		name: "CI test runner",
		key: "hl_test_19ce…f310",
		scopes: [],
		lastUsed: "Aug 22",
		expires: "Expired",
		expired: true,
	},
];

function ApiKeysSection() {
	return (
		<Panel
			title="API keys"
			description={
				<>
					Keys act as the workspace, not as a person. <Anchor inherit>API reference</Anchor>
				</>
			}
			actions={
				<Button size="xs" leftSection={<TbPlus />}>
					Create key
				</Button>
			}
			flush
		>
			<Table.ScrollContainer minWidth={720}>
				<Table verticalSpacing="sm" horizontalSpacing="md">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Name</Table.Th>
							<Table.Th>Key</Table.Th>
							<Table.Th>Scopes</Table.Th>
							<Table.Th>Last used</Table.Th>
							<Table.Th>Expires</Table.Th>
							<Table.Th w={48} />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{apiKeysSectionKeys.map((apiKey) => (
							<Table.Tr key={apiKey.name} c={apiKey.expired ? "dimmed" : undefined}>
								<Table.Td>
									<Text size="sm" fw={500} inherit>
										{apiKey.name}
									</Text>
								</Table.Td>
								<Table.Td>
									{apiKey.expired ? (
										<Text size="xs" ff="monospace" c="dimmed">
											{apiKey.key}
										</Text>
									) : (
										<CopyableCode value={apiKey.key} />
									)}
								</Table.Td>
								<Table.Td>
									{apiKey.scopes.length > 0 ? (
										<Group gap={4} wrap="nowrap">
											{apiKey.scopes.map((scope) => (
												<Code key={scope}>{scope}</Code>
											))}
										</Group>
									) : (
										<Text size="sm" c="red">
											Full access
										</Text>
									)}
								</Table.Td>
								<Table.Td>
									<Text size="sm" inherit>
										{apiKey.lastUsed}
									</Text>
								</Table.Td>
								<Table.Td>
									<Text size="sm" inherit>
										{apiKey.expires}
									</Text>
								</Table.Td>
								<Table.Td>
									<Menu position="bottom-end">
										<Menu.Target>
											<ActionIcon variant="subtle" color="gray" aria-label={`Actions for ${apiKey.name}`}>
												<TbDots />
											</ActionIcon>
										</Menu.Target>
										<Menu.Dropdown>
											<Menu.Item>Rename</Menu.Item>
											<Menu.Item>Edit scopes</Menu.Item>
											<Menu.Divider />
											<Menu.Item color="red">Revoke</Menu.Item>
										</Menu.Dropdown>
									</Menu>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

function CredentialRevealModal() {
	return (
		<DialogFrame title="Copy your new key" width={480}>
			<Stack gap="md">
				<Text size="sm">
					<Text span fw={600} inherit>
						Warehouse sync
					</Text>{" "}
					can read and write shipments.
				</Text>
				<Alert color="yellow" icon={<TbAlertTriangle />}>
					You won't see this key again. Store it in your secret manager now.
				</Alert>
				<Paper withBorder p="xs">
					<CopyableCode value="hl_live_8d2c51f0b7e94a3c9e1d6b27a4f08c55" />
				</Paper>
				<Checkbox defaultChecked label="I've stored the key" />
				<Button fullWidth>Done</Button>
			</Stack>
		</DialogFrame>
	);
}

function ScopePicker() {
	return (
		<Card withBorder>
			<Stack gap="xs">
				<Box>
					<Title order={4}>Scopes</Title>
					<Text size="sm" c="dimmed">
						What Warehouse sync can read and change.
					</Text>
				</Box>
				<CheckboxMatrix
					columns={["Read", "Write"]}
					groups={[
						{
							label: "Operations",
							rows: [
								{ label: "Shipments", values: [true, true] },
								{ label: "Deliveries", values: [true, true] },
								{ label: "Claims", values: [true, false] },
							],
						},
						{
							label: "Finance",
							rows: [
								{ label: "Invoices", values: [true, false] },
								{ label: "Payments", values: [false, false] },
							],
						},
					]}
				/>
			</Stack>
		</Card>
	);
}

const webhookEndpointsEndpoints = [
	{
		url: "https://erp.halden.io/hooks/billing",
		events: ["invoice.paid"],
		more: 2,
		status: "active" as const,
		secret: "whsec_3c9e1d6b27a4f0",
	},
	{
		url: "https://hooks.zapier.com/hooks/catch/88213",
		events: ["customer.updated"],
		more: 0,
		status: "failed" as const,
		secret: "whsec_b7e94a3c9e1d6b",
	},
];

function WebhookEndpoints() {
	return (
		<Panel
			title="Webhooks"
			description="Every request is signed with the endpoint's secret."
			actions={
				<Button size="xs" variant="default" leftSection={<TbPlus />}>
					Add endpoint
				</Button>
			}
			flush
		>
			<Table.ScrollContainer minWidth={720}>
				<Table verticalSpacing="sm" horizontalSpacing="md">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Endpoint</Table.Th>
							<Table.Th>Events</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th>Signing secret</Table.Th>
							<Table.Th w={48} />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{webhookEndpointsEndpoints.map((endpoint) => (
							<Table.Tr key={endpoint.url}>
								<Table.Td>
									<Text size="xs" ff="monospace">
										{endpoint.url}
									</Text>
								</Table.Td>
								<Table.Td>
									<Group gap={6} wrap="nowrap">
										{endpoint.events.map((event) => (
											<Code key={event}>{event}</Code>
										))}
										{endpoint.more > 0 && (
											<Text size="xs" c="dimmed">
												+{endpoint.more} more
											</Text>
										)}
									</Group>
								</Table.Td>
								<Table.Td>
									<StatusBadge status={endpoint.status} />
								</Table.Td>
								<Table.Td>
									<CopyableCode value={endpoint.secret} masked="whsec_••••••••" />
								</Table.Td>
								<Table.Td>
									<Menu position="bottom-end">
										<Menu.Target>
											<ActionIcon variant="subtle" color="gray" aria-label="Endpoint actions">
												<TbDots />
											</ActionIcon>
										</Menu.Target>
										<Menu.Dropdown>
											<Menu.Item>Send a test event</Menu.Item>
											<Menu.Item>Roll secret</Menu.Item>
											<Menu.Divider />
											<Menu.Item color="red">Delete</Menu.Item>
										</Menu.Dropdown>
									</Menu>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const codeSnippetTabsSnippets = [
	{
		value: "curl",
		label: "curl",
		code: `curl https://api.halden.io/v1/invoices \\
  -H "Authorization: Bearer $HALDEN_API_KEY" \\
  -d customer=cus_8Hq2 \\
  -d amount=482000 \\
  -d currency=eur`,
	},
	{
		value: "javascript",
		label: "JavaScript",
		code: `const response = await fetch("https://api.halden.io/v1/invoices", {
  method: "POST",
  headers: { Authorization: \`Bearer \${process.env.HALDEN_API_KEY}\` },
  body: JSON.stringify({ customer: "cus_8Hq2", amount: 482000, currency: "eur" }),
});`,
	},
	{
		value: "python",
		label: "Python",
		code: `response = requests.post(
    "https://api.halden.io/v1/invoices",
    headers={"Authorization": f"Bearer {os.environ['HALDEN_API_KEY']}"},
    json={"customer": "cus_8Hq2", "amount": 482000, "currency": "eur"},
)`,
	},
];

function CodeSnippetTabs() {
	return (
		<Card withBorder>
			<Tabs defaultValue="curl">
				<Tabs.List>
					{codeSnippetTabsSnippets.map((snippet) => (
						<Tabs.Tab key={snippet.value} value={snippet.value}>
							{snippet.label}
						</Tabs.Tab>
					))}
				</Tabs.List>
				{codeSnippetTabsSnippets.map((snippet) => (
					<Tabs.Panel key={snippet.value} value={snippet.value} pt="md">
						<Box pos="relative">
							<Code block style={{ overflowX: "auto" }}>
								{snippet.code}
							</Code>
							<CopyButton value={snippet.code}>
								{({ copied, copy }) => (
									<ActionIcon
										variant="default"
										size="sm"
										pos="absolute"
										top={8}
										right={8}
										aria-label="Copy code"
										onClick={copy}
									>
										{copied ? <TbCheck /> : <TbCopy />}
									</ActionIcon>
								)}
							</CopyButton>
						</Box>
					</Tabs.Panel>
				))}
			</Tabs>
		</Card>
	);
}

function OAuthAppSection() {
	return (
		<Panel title="OAuth app" description="Lets partner products act on behalf of people who approve them.">
			<Stack gap="md">
				<Input.Wrapper label="Client ID">
					<Box mt={4}>
						<CopyableCode value="hl_client_4b81f0c2" />
					</Box>
				</Input.Wrapper>
				<Input.Wrapper label="Client secret">
					<Group gap="sm" mt={4}>
						<CopyableCode value="hl_secret_d6b27a4f08c55e1d" masked="hl_secret_••••••••" />
						<Button size="xs" variant="default" leftSection={<TbRefresh />}>
							Rotate
						</Button>
					</Group>
				</Input.Wrapper>
				<Input.Wrapper label="Redirect URIs">
					<Stack gap="xs" mt={4}>
						{["https://app.freightdesk.io/oauth/halden", "https://staging.freightdesk.io/oauth/halden"].map((uri) => (
							<TextInput
								key={uri}
								defaultValue={uri}
								aria-label="Redirect URI"
								styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
								rightSection={<CloseButton size="sm" aria-label="Remove redirect URI" />}
							/>
						))}
						<Button size="xs" variant="subtle" leftSection={<TbPlus />} style={{ alignSelf: "flex-start" }}>
							Add a redirect URI
						</Button>
					</Stack>
				</Input.Wrapper>
				<Group justify="flex-end">
					<Button>Save</Button>
				</Group>
			</Stack>
		</Panel>
	);
}

function SsoSetup() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Stepper active={1} size="xs">
					<Stepper.Step label="Domain" />
					<Stepper.Step label="Connect" />
					<Stepper.Step label="Test" />
					<Stepper.Step label="Enforce" />
				</Stepper>
				<Stack gap={4}>
					<Title order={4}>Connect Okta</Title>
					<Text size="sm" c="dimmed">
						Create a SAML app in Okta and copy these two values into it.
					</Text>
				</Stack>
				<Input.Wrapper label="Single sign-on URL">
					<Box mt={4}>
						<CopyableCode value="https://app.halden.io/sso/saml/acs/ws_8121" />
					</Box>
				</Input.Wrapper>
				<Input.Wrapper label="Audience URI">
					<Box mt={4}>
						<CopyableCode value="https://app.halden.io/sso/saml/ws_8121" />
					</Box>
				</Input.Wrapper>
				<Divider />
				<TextInput
					label="Okta metadata URL"
					defaultValue="https://halden-logistics.okta.com/app/exk9a2/sso/saml/metadata"
					styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
					description={
						<Group component="span" gap={4} c="green" wrap="nowrap">
							<TbCheck />
							Read: signing certificate valid until March 2027
						</Group>
					}
					inputWrapperOrder={["label", "input", "description"]}
				/>
				<Group justify="flex-end" gap="sm">
					<Button variant="default">Back</Button>
					<Button>Test sign-in</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const domainVerificationRecords = [
	{ type: "TXT", name: "_halden", value: "halden-verify=9f2c7a1e4b", found: false },
	{ type: "CNAME", name: "hl1._domainkey", value: "hl1.dkim.halden.io", found: true },
];

function DomainVerification() {
	return (
		<Panel
			title={
				<Box component="span" ff="monospace">
					{workspace.domain}
				</Box>
			}
			description={
				<>
					Checked <RelativeTime date={ago({ seconds: 40 })} />
				</>
			}
			flush
			footer={
				<Group justify="space-between" gap="sm">
					<Text size="xs" c="dimmed">
						DNS changes can take up to 48 hours.
					</Text>
					<Button size="xs" variant="default" leftSection={<TbRefresh />}>
						Check now
					</Button>
				</Group>
			}
		>
			<Table.ScrollContainer minWidth={560}>
				<Table verticalSpacing="sm" horizontalSpacing="md">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Type</Table.Th>
							<Table.Th>Name</Table.Th>
							<Table.Th>Value</Table.Th>
							<Table.Th>Status</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{domainVerificationRecords.map((record) => (
							<Table.Tr key={record.type}>
								<Table.Td>
									<Text size="xs" ff="monospace">
										{record.type}
									</Text>
								</Table.Td>
								<Table.Td>
									<CopyableCode value={record.name} />
								</Table.Td>
								<Table.Td>
									<CopyableCode value={record.value} />
								</Table.Td>
								<Table.Td>
									<Text size="sm" c={record.found ? "green" : "orange"}>
										{record.found ? "Found" : "Not found yet"}
									</Text>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const ipAllowlistRanges = [
	{ range: "85.240.12.0/24", label: "Lisbon office" },
	{ range: "52.29.140.8", label: "Production backend" },
	{ range: "2a02:26f0:fd::/48", label: "VPN" },
];

function IpAllowlist() {
	return (
		<Panel title="IP allowlist" description="Only these addresses can sign in or use the API.">
			<Stack gap="md">
				<Stack gap="xs">
					{ipAllowlistRanges.map((entry) => (
						<Group key={entry.range} justify="space-between" wrap="nowrap">
							<Group gap="sm" wrap="nowrap">
								<Code>{entry.range}</Code>
								<Text size="sm" c="dimmed">
									{entry.label}
								</Text>
							</Group>
							<CloseButton size="sm" aria-label={`Remove ${entry.range}`} />
						</Group>
					))}
				</Stack>
				<Group gap="xs" wrap="nowrap">
					<TextInput
						placeholder="Address or range, like 10.0.0.0/16"
						aria-label="Address or range"
						style={{ flex: 1 }}
					/>
					<Button variant="default">Add</Button>
				</Group>
				<Alert color="yellow" icon={<TbAlertTriangle />}>
					Your address, <Code>188.81.47.201</Code>, isn't on the list. Turning this on would sign you out.
				</Alert>
				<Switch label="Only allow these addresses" />
			</Stack>
		</Panel>
	);
}

export function ApiArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="twoThirds">
				<ApiKeysSection />
			</PreviewItem>
			<PreviewItem>
				<CredentialRevealModal />
			</PreviewItem>
			<PreviewItem>
				<ScopePicker />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<WebhookEndpoints />
			</PreviewItem>
			<PreviewItem span="half">
				<CodeSnippetTabs />
			</PreviewItem>
			<PreviewItem span="half">
				<OAuthAppSection />
			</PreviewItem>
			<PreviewItem>
				<SsoSetup />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<DomainVerification />
			</PreviewItem>
			<PreviewItem>
				<IpAllowlist />
			</PreviewItem>
		</PreviewGrid>
	);
}

const settingsAreaMonospaceInput = { input: { fontFamily: "var(--mantine-font-family-monospace)" } };
const settingsAreaDividerBorder = "1px solid var(--mantine-color-default-border)";

const schemaFormDefaults = {
	prefix: "INV-",
	paymentTerms: 30,
	currency: "EUR",
	lateFee: { enabled: false, rate: 1.5 },
	reminders: ["3 days before", "On the due date", "7 days after"],
	webhookSecret: "whsec_7Hq2Lm9xKp4Rt8Vb3Nc6",
};

type SchemaFormValues = typeof schemaFormDefaults;

function SchemaFormChangedDot() {
	return (
		<Box
			component="span"
			aria-hidden
			w={6}
			h={6}
			bg="var(--mantine-primary-color-filled)"
			style={{ display: "inline-block", borderRadius: "50%", flexShrink: 0 }}
		/>
	);
}

interface SchemaFormFieldProps {
	id: string;
	label: string;
	changed: boolean;
	resetLabel: string;
	onReset: () => void;
	children: ReactNode;
}

function SchemaFormField({ id, label, changed, resetLabel, onReset, children }: SchemaFormFieldProps) {
	return (
		<Stack gap={4}>
			<Group justify="space-between" wrap="nowrap">
				<Input.Label htmlFor={id}>
					<Group component="span" gap={6} wrap="nowrap">
						{changed && <SchemaFormChangedDot />}
						{label}
					</Group>
				</Input.Label>
				{changed && (
					<Anchor component="button" type="button" size="xs" onClick={onReset}>
						{resetLabel}
					</Anchor>
				)}
			</Group>
			{children}
		</Stack>
	);
}

function SchemaForm() {
	const id = useId();
	const form = useForm<SchemaFormValues>({
		mode: "controlled",
		initialValues: { ...schemaFormDefaults, prefix: "HAL-", lateFee: { enabled: true, rate: 1.5 } },
	});

	const changed = (field: keyof SchemaFormValues) =>
		JSON.stringify(form.values[field]) !== JSON.stringify(schemaFormDefaults[field]);
	const reset = (field: keyof SchemaFormValues) => () => form.setFieldValue(field, schemaFormDefaults[field]);
	const changedCount = (Object.keys(schemaFormDefaults) as (keyof SchemaFormValues)[]).filter(changed).length;

	return (
		<Box component="form" maw={900} onSubmit={(event) => event.preventDefault()}>
			<Stack gap="lg">
				<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
					<Grid.Col span={{ base: 12, md: 4 }}>
						<Title order={5}>Invoicing</Title>
						<Text size="sm" c="dimmed" mt={4}>
							Defaults for new invoices. Customers see the prefix and payment terms on every PDF.
						</Text>
					</Grid.Col>
					<Grid.Col span={{ base: 12, md: 8 }}>
						<Card withBorder>
							<Stack gap="md">
								<SchemaFormField
									id={`${id}-prefix`}
									label="Invoice prefix"
									changed={changed("prefix")}
									resetLabel={`Reset to ${schemaFormDefaults.prefix}`}
									onReset={reset("prefix")}
								>
									<TextInput
										id={`${id}-prefix`}
										description="Up to 6 characters, shown before the invoice number."
										inputWrapperOrder={["input", "description"]}
										styles={settingsAreaMonospaceInput}
										{...form.getInputProps("prefix")}
									/>
								</SchemaFormField>
								<SimpleGrid cols={2}>
									<SchemaFormField
										id={`${id}-terms`}
										label="Payment terms"
										changed={changed("paymentTerms")}
										resetLabel="Reset"
										onReset={reset("paymentTerms")}
									>
										<NumberInput
											id={`${id}-terms`}
											min={0}
											rightSection={
												<Text size="sm" c="dimmed">
													days
												</Text>
											}
											rightSectionWidth={56}
											{...form.getInputProps("paymentTerms")}
										/>
									</SchemaFormField>
									<SchemaFormField
										id={`${id}-currency`}
										label="Default currency"
										changed={changed("currency")}
										resetLabel="Reset"
										onReset={reset("currency")}
									>
										<Select
											id={`${id}-currency`}
											data={[
												{ value: "EUR", label: "EUR · Euro" },
												{ value: "USD", label: "USD · US dollar" },
												{ value: "GBP", label: "GBP · Pound sterling" },
											]}
											allowDeselect={false}
											{...form.getInputProps("currency")}
										/>
									</SchemaFormField>
								</SimpleGrid>
								<Stack gap="xs">
									<Group justify="space-between" wrap="nowrap">
										<Switch
											label={
												<Group component="span" gap={6} wrap="nowrap">
													{changed("lateFee") && <SchemaFormChangedDot />}
													Charge a late fee
												</Group>
											}
											{...form.getInputProps("lateFee.enabled", { type: "checkbox" })}
										/>
										{changed("lateFee") && (
											<Anchor component="button" type="button" size="xs" onClick={reset("lateFee")}>
												Reset
											</Anchor>
										)}
									</Group>
									{form.values.lateFee.enabled && (
										<SimpleGrid cols={2} pl="xl">
											<NumberInput
												aria-label="Late fee rate"
												min={0}
												decimalScale={2}
												rightSection={
													<Text size="sm" c="dimmed">
														% per month
													</Text>
												}
												rightSectionWidth={100}
												{...form.getInputProps("lateFee.rate")}
											/>
										</SimpleGrid>
									)}
								</Stack>
								<SchemaFormField
									id={`${id}-reminders`}
									label="Reminders"
									changed={changed("reminders")}
									resetLabel="Reset"
									onReset={reset("reminders")}
								>
									<MultiSelect
										id={`${id}-reminders`}
										data={schemaFormDefaults.reminders}
										{...form.getInputProps("reminders")}
									/>
								</SchemaFormField>
								<SchemaFormField
									id={`${id}-secret`}
									label="Stripe webhook secret"
									changed={changed("webhookSecret")}
									resetLabel="Reset"
									onReset={reset("webhookSecret")}
								>
									<PasswordInput
										id={`${id}-secret`}
										description="Stored encrypted. Only admins can reveal it."
										inputWrapperOrder={["input", "description"]}
										styles={settingsAreaMonospaceInput}
										{...form.getInputProps("webhookSecret")}
									/>
								</SchemaFormField>
							</Stack>
						</Card>
					</Grid.Col>
				</Grid>
				<SaveBar count={changedCount} onDiscard={() => form.setValues(schemaFormDefaults)} />
			</Stack>
		</Box>
	);
}

function SaveBar({ count, onDiscard }: { count: number; onDiscard: () => void }) {
	return (
		<Paper withBorder shadow="md" px="md" py="sm">
			<Group justify="space-between" wrap="nowrap">
				<Group gap="xs" wrap="nowrap">
					{count > 0 && <SchemaFormChangedDot />}
					<Text size="sm">
						{count === 0 ? "No unsaved changes" : count === 1 ? "1 unsaved change" : `${count} unsaved changes`}
					</Text>
				</Group>
				<Group gap="xs" wrap="nowrap">
					<Button variant="default" disabled={count === 0} onClick={onDiscard}>
						Discard
					</Button>
					<Button type="submit" disabled={count === 0}>
						Save changes
					</Button>
				</Group>
			</Group>
		</Paper>
	);
}

const customFieldsEditorFields = [
	{ key: "account_manager", label: "Account manager", type: "Person", visibleTo: ["Everyone"], locked: true },
	{ key: "industry", label: "Industry", type: "Select", visibleTo: ["Everyone"], locked: true },
	{ key: "credit_limit", label: "Credit limit", type: "Money", visibleTo: ["Admin", "Billing"], locked: true },
	{ key: "contract_end", label: "Contract end", type: "Date", visibleTo: ["Admin"], locked: false },
];

function CustomFieldsEditor() {
	return (
		<Card withBorder>
			<Group justify="space-between" mb="md">
				<Title order={4}>Customer fields</Title>
				<Button size="xs" leftSection={<TbPlus />}>
					Add field
				</Button>
			</Group>
			<Accordion variant="contained" defaultValue="credit_limit">
				{customFieldsEditorFields.map((field) => (
					<Accordion.Item key={field.key} value={field.key}>
						<Accordion.Control icon={<TbGripVertical aria-hidden style={{ cursor: "grab" }} />}>
							<Group justify="space-between" wrap="nowrap" pr="xs">
								<Text size="sm" fw={500}>
									{field.label}
								</Text>
								<Code>{field.type}</Code>
							</Group>
						</Accordion.Control>
						<Accordion.Panel>
							<Stack gap="sm">
								<SimpleGrid cols={2}>
									<TextInput size="xs" label="Label" defaultValue={field.label} />
									<TextInput
										size="xs"
										label="Key"
										defaultValue={field.key}
										readOnly={field.locked}
										rightSection={field.locked ? <TbLock aria-hidden /> : undefined}
										description={field.locked ? "Locked: customers already use it" : undefined}
										inputWrapperOrder={["label", "input", "description"]}
										styles={settingsAreaMonospaceInput}
									/>
								</SimpleGrid>
								<Group justify="space-between" wrap="nowrap">
									<Group gap={6} wrap="nowrap">
										<Text size="xs" c="dimmed">
											Visible to
										</Text>
										{field.visibleTo.map((role) => (
											<Pill key={role} size="xs">
												{role}
											</Pill>
										))}
									</Group>
									<Switch size="xs" label="Required" />
								</Group>
							</Stack>
						</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion>
		</Card>
	);
}

const statusSetEditorStages: { name: string; color: MantineColor; closed: boolean }[] = [
	{ name: "Open", color: "blue", closed: false },
	{ name: "In review", color: "yellow", closed: false },
	{ name: "Waiting on customer", color: "gray", closed: false },
	{ name: "Resolved", color: "green", closed: true },
	{ name: "Rejected", color: "red", closed: true },
];

function StatusSetEditor() {
	const firstClosed = statusSetEditorStages.findIndex((stage) => stage.closed);

	return (
		<Card withBorder>
			<Group justify="space-between" mb="md">
				<Title order={4}>Claim stages</Title>
				<Button size="xs" variant="default" leftSection={<TbPlus />}>
					Add stage
				</Button>
			</Group>
			<Stack gap="xs">
				{statusSetEditorStages.map((stage, index) => (
					<Box key={stage.name}>
						{index === firstClosed && <Divider label="Closed" labelPosition="left" mb="xs" />}
						<Group gap="sm" wrap="nowrap">
							<TbGripVertical
								aria-hidden
								style={{ color: "var(--mantine-color-dimmed)", cursor: "grab", flexShrink: 0 }}
							/>
							<ColorSwatch
								component="button"
								type="button"
								color={`var(--mantine-color-${stage.color}-filled)`}
								size={18}
								aria-label={`Colour of ${stage.name}`}
								style={{ flexShrink: 0 }}
							/>
							<TextInput size="xs" defaultValue={stage.name} aria-label="Stage name" style={{ flex: 1 }} />
							<ActionIcon variant="subtle" color="gray" aria-label={`Remove ${stage.name}`}>
								<TbTrash />
							</ActionIcon>
						</Group>
					</Box>
				))}
			</Stack>
		</Card>
	);
}

const tagsManagerTags: { name: string; color: MantineColor; count: number }[] = [
	{ name: "Priority", color: "red", count: 14 },
	{ name: "Key account", color: "violet", count: 9 },
	{ name: "Disputed", color: "orange", count: 3 },
	{ name: "Paper invoice", color: "gray", count: 22 },
];

function TagsManager() {
	return (
		<Card withBorder>
			<Title order={4} mb="md">
				Invoice tags
			</Title>
			<Group gap="xs" wrap="nowrap" mb="md">
				<ColorSwatch
					component="button"
					type="button"
					color="var(--mantine-color-blue-filled)"
					size={22}
					aria-label="Colour of the new tag"
					style={{ flexShrink: 0 }}
				/>
				<TextInput size="xs" placeholder="New tag" aria-label="New tag" style={{ flex: 1 }} />
				<Button size="xs" variant="default">
					Create
				</Button>
			</Group>
			<Stack gap={0}>
				{tagsManagerTags.map((tag) => (
					<Group
						key={tag.name}
						justify="space-between"
						wrap="nowrap"
						py={6}
						style={{ borderTop: settingsAreaDividerBorder }}
					>
						<Badge variant="light" color={tag.color}>
							{tag.name}
						</Badge>
						<Group gap="xs" wrap="nowrap">
							<Text size="xs" c="dimmed">
								{tag.count} invoices
							</Text>
							<ActionIcon variant="subtle" color="gray" size="sm" aria-label={`Edit ${tag.name}`}>
								<TbDots />
							</ActionIcon>
						</Group>
					</Group>
				))}
			</Stack>
		</Card>
	);
}

const businessHoursInputDays = [
	{ day: "Mon", open: true, from: "09:00", to: "18:00" },
	{ day: "Tue", open: true, from: "09:00", to: "18:00" },
	{ day: "Wed", open: true, from: "09:00", to: "18:00" },
	{ day: "Thu", open: true, from: "09:00", to: "18:00" },
	{ day: "Fri", open: true, from: "09:00", to: "16:00" },
	{ day: "Sat", open: false, from: "09:00", to: "13:00" },
	{ day: "Sun", open: false, from: "09:00", to: "13:00" },
];

const businessHoursInputHolidays = [
	"Dec 1 · Independence Restoration",
	"Dec 8 · Immaculate Conception",
	"Dec 25 · Christmas",
];

function BusinessHoursInputDay({ day, open, from, to }: (typeof businessHoursInputDays)[number]) {
	const [isOpen, setIsOpen] = useState(open);

	return (
		<Group gap="sm" wrap="nowrap" mih={30}>
			<Text size="sm" fw={500} w={36} c={isOpen ? undefined : "dimmed"}>
				{day}
			</Text>
			<Switch
				size="sm"
				checked={isOpen}
				onChange={(event) => setIsOpen(event.currentTarget.checked)}
				aria-label={`Open on ${day}`}
			/>
			{isOpen ? (
				<Group gap={6} wrap="nowrap">
					<TimeInput size="xs" defaultValue={from} aria-label={`${day} opens`} w={96} />
					<Text size="sm" c="dimmed">
						–
					</Text>
					<TimeInput size="xs" defaultValue={to} aria-label={`${day} closes`} w={96} />
				</Group>
			) : (
				<Text size="sm" c="dimmed">
					Closed
				</Text>
			)}
		</Group>
	);
}

function BusinessHoursInput() {
	return (
		<Card withBorder>
			<Group justify="space-between" wrap="nowrap" mb="md">
				<Title order={4}>Business hours</Title>
				<Select
					size="xs"
					w={160}
					aria-label="Time zone"
					data={["Europe/Lisbon", "Europe/London", "Europe/Madrid"]}
					defaultValue="Europe/Lisbon"
					allowDeselect={false}
				/>
			</Group>
			<Stack gap={6}>
				{businessHoursInputDays.map((day) => (
					<BusinessHoursInputDay key={day.day} {...day} />
				))}
			</Stack>
			<Input.Wrapper
				label="Holidays"
				mt="md"
				description={
					<Anchor component="button" type="button" size="xs">
						Add Portugal's public holidays for 2027
					</Anchor>
				}
				inputWrapperOrder={["label", "input", "description"]}
			>
				<PillsInput>
					<Pill.Group>
						{businessHoursInputHolidays.map((holiday) => (
							<Pill key={holiday} withRemoveButton>
								{holiday}
							</Pill>
						))}
						<PillsInput.Field placeholder="Add a date" aria-label="Add a holiday" />
					</Pill.Group>
				</PillsInput>
			</Input.Wrapper>
			<Alert color="gray" icon={<TbClock />} mt="md">
				<Text size="xs">A 4-hour SLA opened on a Friday at 15:00 is due on Monday at 12:00.</Text>
			</Alert>
		</Card>
	);
}

const environmentBannerEnvironments: Record<string, { label: string; color: MantineColor; note?: string }> = {
	development: { label: "Development", color: "gray" },
	staging: { label: "Staging", color: "yellow" },
	production: { label: "Production", color: "red", note: "Changes apply immediately." },
};

function EnvironmentBanner() {
	const [environment, setEnvironment] = useState("production");
	const current = environmentBannerEnvironments[environment];

	return (
		<Paper withBorder px="md" py="xs" bg={`var(--mantine-color-${current.color}-light)`}>
			<Group gap="sm" wrap="nowrap">
				<Box
					w={8}
					h={8}
					bg={`var(--mantine-color-${current.color}-filled)`}
					style={{ borderRadius: "50%", flexShrink: 0 }}
				/>
				<Text size="sm" fw={600}>
					{current.label}
				</Text>
				{current.note && (
					<Text size="xs" truncate>
						{current.note}
					</Text>
				)}
				<SegmentedControl
					ml="auto"
					size="xs"
					color={current.color}
					value={environment}
					onChange={setEnvironment}
					data={Object.entries(environmentBannerEnvironments).map(([value, { label }]) => ({ value, label }))}
				/>
			</Group>
		</Paper>
	);
}

const featureFlagsTableEnvironments = ["Development", "Staging", "Production"];

const featureFlagsTableFlags = [
	{ name: "New invoice editor", key: "new-invoice-editor", enabled: [true, true, false], rollout: null },
	{ name: "Smart reminders", key: "smart-reminders", enabled: [true, true, true], rollout: "25%" },
	{ name: "Bulk export", key: "bulk-export", enabled: [true, true, true], rollout: "100%" },
	{ name: "Legacy PDF renderer", key: "legacy-pdf", enabled: [false, false, true], rollout: "100%" },
];

function FeatureFlagsTable() {
	return (
		<Card withBorder padding={0}>
			<Table.ScrollContainer minWidth={560}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Flag</Table.Th>
							{featureFlagsTableEnvironments.map((environment) => (
								<Table.Th key={environment} ta="center">
									{environment}
								</Table.Th>
							))}
							<Table.Th>Rollout</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{featureFlagsTableFlags.map((flag) => (
							<Table.Tr key={flag.key}>
								<Table.Td>
									<Text size="sm" fw={500}>
										{flag.name}
									</Text>
									<Text size="xs" c="dimmed" ff="monospace">
										{flag.key}
									</Text>
								</Table.Td>
								{featureFlagsTableEnvironments.map((environment, index) => (
									<Table.Td key={environment}>
										<Center>
											<Switch
												size="sm"
												defaultChecked={flag.enabled[index]}
												aria-label={`${flag.name} in ${environment}`}
											/>
										</Center>
									</Table.Td>
								))}
								<Table.Td>
									<Text size="xs" ff="monospace" c={flag.rollout ? undefined : "dimmed"}>
										{flag.rollout ?? "–"}
									</Text>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Card>
	);
}

const secretsTableRows = [
	{
		key: "STRIPE_SECRET_KEY",
		value: "sk_live_51Hq8vXk2LmP9",
		masked: "sk_live_••••••••",
		at: ago({ days: 3 }),
	},
	{
		key: "RESEND_API_KEY",
		value: "re_8Kd2Wq4Zt7",
		masked: "re_••••••••",
		at: ago({ hours: 2 }),
	},
	{
		key: "OKTA_CLIENT_SECRET",
		value: "okta_3Fv9Lp2Qs8",
		masked: "okta_••••••••",
		at: ago({ days: 26 }),
	},
	{ key: "DOCUMENTS_BUCKET", value: "halden-documents", at: ago({ days: 74 }) },
];

function SecretsTable() {
	return (
		<Panel
			title="Environment variables"
			actions={
				<Button size="xs" leftSection={<TbPlus />}>
					Add
				</Button>
			}
			flush
		>
			<Table.ScrollContainer minWidth={440}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Key</Table.Th>
							<Table.Th>Value</Table.Th>
							<Table.Th>Updated</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{secretsTableRows.map((row) => (
							<Table.Tr key={row.key}>
								<Table.Td>
									<Text size="xs" ff="monospace" fw={500}>
										{row.key}
									</Text>
								</Table.Td>
								<Table.Td>
									<CopyableCode value={row.value} masked={row.masked} />
								</Table.Td>
								<Table.Td>
									<Text size="sm" c="dimmed">
										<RelativeTime date={row.at} />
									</Text>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const integrationsGridItems: {
	name: string;
	initials: string;
	state: string;
	color: MantineColor;
	detail: string;
	action?: string;
	failing?: boolean;
}[] = [
	{
		name: "Resend",
		initials: "R",
		state: "Failing",
		color: "red",
		detail: "API key revoked 2 hours ago",
		action: "Reconnect",
		failing: true,
	},
	{ name: "Stripe", initials: "S", state: "Connected", color: "green", detail: "Payments" },
	{ name: "Okta", initials: "O", state: "Connected", color: "green", detail: "SSO and SCIM" },
	{
		name: "Amazon S3",
		initials: "S3",
		state: "Not set up",
		color: "gray",
		detail: "Document storage",
		action: "Connect",
	},
];

function IntegrationsGrid() {
	return (
		<Stack gap="sm">
			{integrationsGridItems.map((item) => (
				<Card key={item.name} withBorder padding="sm">
					<Group gap="sm" wrap="nowrap">
						<Avatar radius="md">{item.initials}</Avatar>
						<Box miw={0} style={{ flex: 1 }}>
							<Group gap="xs" wrap="nowrap">
								<Text size="sm" fw={500}>
									{item.name}
								</Text>
								<Badge size="sm" variant="light" color={item.color}>
									{item.state}
								</Badge>
							</Group>
							<Text size="xs" c={item.failing ? "red" : "dimmed"} truncate>
								{item.detail}
							</Text>
						</Box>
						{item.action && (
							<Button size="xs" variant={item.failing ? "filled" : "default"}>
								{item.action}
							</Button>
						)}
					</Group>
				</Card>
			))}
		</Stack>
	);
}

const dangerZoneActions = [
	{
		title: "Transfer ownership",
		description: "Give another admin full control. You stay on as an admin.",
		action: "Transfer",
		variant: "default",
	},
	{
		title: "Archive workspace",
		description: "Everyone gets read-only access. You can restore it for 30 days.",
		action: "Archive",
		variant: "outline",
	},
	{
		title: "Delete workspace",
		description: "Deletes 3,412 invoices, 829 customers and 3 API keys. You can't undo this.",
		action: "Delete workspace",
		variant: "filled",
	},
];

function DangerZone() {
	return (
		<Card withBorder style={{ borderColor: "var(--mantine-color-red-outline)" }}>
			<Card.Section withBorder inheritPadding py="sm">
				<Title order={4} c="red">
					Danger zone
				</Title>
			</Card.Section>
			{dangerZoneActions.map((item) => (
				<Card.Section key={item.title} withBorder inheritPadding py="md">
					<Group justify="space-between" wrap="nowrap" gap="md">
						<Box>
							<Text size="sm" fw={500}>
								{item.title}
							</Text>
							<Text size="xs" c="dimmed">
								{item.description}
							</Text>
						</Box>
						<Button
							size="xs"
							variant={item.variant}
							color={item.variant === "default" ? undefined : "red"}
							style={{ flexShrink: 0 }}
						>
							{item.action}
						</Button>
					</Group>
				</Card.Section>
			))}
		</Card>
	);
}

function ConfirmByTypingModal() {
	const confirmation = "halden-logistics";
	const [typed, setTyped] = useState("");

	return (
		<DialogFrame
			title={`Delete ${workspace.name}?`}
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button color="red" disabled={typed !== confirmation}>
						Delete workspace
					</Button>
				</>
			}
		>
			<Stack gap="md">
				<Text size="sm">All 18 members lose access, and its invoices, customers and API keys are deleted.</Text>
				<TextInput
					label={
						<>
							Type <Code>{confirmation}</Code> to confirm
						</>
					}
					value={typed}
					onChange={(event) => setTyped(event.currentTarget.value)}
					autoComplete="off"
					spellCheck={false}
					styles={settingsAreaMonospaceInput}
				/>
			</Stack>
		</DialogFrame>
	);
}

export function SettingsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<SchemaForm />
			</PreviewItem>
			<PreviewItem span="half">
				<CustomFieldsEditor />
			</PreviewItem>
			<PreviewItem span="half">
				<StatusSetEditor />
			</PreviewItem>
			<PreviewItem span="half">
				<TagsManager />
			</PreviewItem>
			<PreviewItem span="half">
				<BusinessHoursInput />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<Stack gap="sm">
					<EnvironmentBanner />
					<FeatureFlagsTable />
				</Stack>
			</PreviewItem>
			<PreviewItem span="third">
				<SecretsTable />
			</PreviewItem>
			<PreviewItem span="third">
				<IntegrationsGrid />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<SimpleGrid type="container" cols={{ base: 1, "720px": 2 }} spacing="lg">
					<DangerZone />
					<Center
						p="lg"
						bg="var(--mantine-color-default-hover)"
						style={{ borderRadius: "var(--mantine-radius-default)" }}
					>
						<ConfirmByTypingModal />
					</Center>
				</SimpleGrid>
			</PreviewItem>
		</PreviewGrid>
	);
}

const tenantSwitcherGroups: {
	label: string;
	tenants: { name: string; initials: string; detail: string; color?: MantineColor; pastDue?: boolean }[];
}[] = [
	{ label: "Pinned", tenants: [{ name: workspace.name, initials: workspace.initials, detail: "Business" }] },
	{
		label: "Recent",
		tenants: [
			{ name: "Northwind Freight", initials: "NF", detail: "Team", color: "blue" },
			{ name: "Ruiz & Co.", initials: "RC", detail: "Trial ends in 3 days", color: "violet" },
			{ name: "Kestrel Couriers", initials: "KC", detail: "Team", color: "gray", pastDue: true },
		],
	},
];

function TenantSwitcher() {
	return (
		<Box mih={400}>
			<Menu
				opened
				withinPortal={false}
				trapFocus={false}
				returnFocus={false}
				closeOnItemClick={false}
				position="bottom-start"
				width={320}
			>
				<Menu.Target>
					<Button
						variant="default"
						leftSection={
							<Avatar size={20} radius="sm">
								{workspace.initials}
							</Avatar>
						}
						rightSection={<TbSelector />}
					>
						{workspace.name}
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					<TextInput
						size="xs"
						m={4}
						mb={6}
						leftSection={<TbSearch />}
						placeholder="Search 312 workspaces"
						aria-label="Search workspaces"
					/>
					{tenantSwitcherGroups.map((group) => (
						<Box key={group.label}>
							<Menu.Label>{group.label}</Menu.Label>
							{group.tenants.map((tenant) => (
								<Menu.Item
									key={tenant.name}
									leftSection={
										<Avatar size={28} radius="sm" color={tenant.color}>
											{tenant.initials}
										</Avatar>
									}
									rightSection={
										tenant.pastDue && (
											<Badge size="xs" variant="light" color="red">
												Past due
											</Badge>
										)
									}
								>
									<Text size="sm" fw={500}>
										{tenant.name}
									</Text>
									<Text size="xs" c="dimmed">
										{tenant.detail}
									</Text>
								</Menu.Item>
							))}
						</Box>
					))}
				</Menu.Dropdown>
			</Menu>
		</Box>
	);
}

function ImpersonationBanner() {
	return (
		<Box style={frameStyle}>
			<Group gap="sm" wrap="nowrap" px="md" py="xs" bg="var(--mantine-color-yellow-light)">
				<Avatar size={24} color={people.mei.color}>
					{people.mei.initials}
				</Avatar>
				<Text size="xs" style={{ flex: 1 }}>
					<Text span inherit fw={600}>
						Viewing as {people.mei.name}
					</Text>{" "}
					· read-only · every page you open is logged
				</Text>
				<Button size="xs" variant="default">
					Exit
				</Button>
			</Group>
			<Group gap={0} wrap="nowrap" align="stretch" h={190} aria-hidden>
				<Stack gap="sm" w={130} p="md" style={{ borderRight: settingsAreaDividerBorder }}>
					<Skeleton animate={false} height={8} width="70%" />
					<Skeleton animate={false} height={8} width="85%" />
					<Skeleton animate={false} height={8} width="60%" />
					<Skeleton animate={false} height={8} width="75%" />
					<Skeleton animate={false} height={8} width="50%" />
				</Stack>
				<Stack gap="sm" p="md" style={{ flex: 1 }}>
					<Skeleton animate={false} height={14} width="40%" />
					<Skeleton animate={false} height={8} width="65%" />
					<SimpleGrid cols={2} mt="xs">
						<Skeleton animate={false} height={70} />
						<Skeleton animate={false} height={70} />
					</SimpleGrid>
				</Stack>
			</Group>
		</Box>
	);
}

function RefundModal() {
	const [kind, setKind] = useState("partial");

	return (
		<DialogFrame
			title="Refund HAL-0371"
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button>Refund</Button>
				</>
			}
		>
			<Stack gap="md">
				<Text size="sm">Brightwater Foods paid {euros.format(1920)} by card on Nov 3.</Text>
				<SegmentedControl
					fullWidth
					value={kind}
					onChange={setKind}
					data={[
						{ value: "full", label: "Full refund" },
						{ value: "partial", label: "Partial refund" },
					]}
				/>
				{kind === "partial" && (
					<NumberInput
						label="Amount"
						prefix="€"
						defaultValue={480}
						min={0}
						max={1920}
						decimalScale={2}
						fixedDecimalScale
						thousandSeparator=","
					/>
				)}
				<Select
					label="Reason"
					data={["Duplicate payment", "Goods damaged in transit", "Delivery not made", "Other"]}
					defaultValue="Goods damaged in transit"
					allowDeselect={false}
				/>
				<Checkbox label="Send Brightwater Foods a credit note" defaultChecked />
			</Stack>
		</DialogFrame>
	);
}

function AccountOverview() {
	return (
		<Card withBorder>
			<Group justify="space-between" align="flex-start" wrap="nowrap" mb="md">
				<Group gap="sm" wrap="nowrap">
					<Avatar size={40} radius="md" color="blue">
						NF
					</Avatar>
					<Box>
						<Title order={4}>Northwind Freight</Title>
						<Text size="xs" c="dimmed">
							Customer since March 2024
						</Text>
					</Box>
				</Group>
				<Button size="xs" variant="default" leftSection={<TbEye />}>
					View as owner
				</Button>
			</Group>
			<DataList>
				<DataList.Item>
					<DataList.ItemLabel>Plan</DataList.ItemLabel>
					<DataList.ItemValue>Team, 12 of 15 seats</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Monthly revenue</DataList.ItemLabel>
					<DataList.ItemValue>{euros.format(1140)}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Owner</DataList.ItemLabel>
					<DataList.ItemValue>Lena Fischer</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Open tickets</DataList.ItemLabel>
					<DataList.ItemValue>2</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Last active</DataList.ItemLabel>
					<DataList.ItemValue>
						<RelativeTime date={ago({ hours: 3 })} />
					</DataList.ItemValue>
				</DataList.Item>
			</DataList>
		</Card>
	);
}

const privacyRequestsTableRows = [
	{
		requester: "carmen@ruizco.es",
		type: "Access",
		workspace: "Ruiz & Co.",
		received: "Oct 27",
		due: "Tomorrow",
		urgent: true,
		done: false,
	},
	{
		requester: "l.fischer@northwind.de",
		type: "Deletion",
		workspace: "Northwind Freight",
		received: "Nov 3",
		due: "Dec 3",
		urgent: false,
		done: false,
	},
	{
		requester: "ops@kestrel-couriers.com",
		type: "Deletion",
		workspace: "Kestrel Couriers",
		received: "Oct 12",
		due: "Done",
		urgent: false,
		done: true,
	},
];

function PrivacyRequestsTable() {
	return (
		<Panel title="Privacy requests" description="Access and deletion requests must be answered within 30 days." flush>
			<Table.ScrollContainer minWidth={640}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Requester</Table.Th>
							<Table.Th>Request</Table.Th>
							<Table.Th>Workspace</Table.Th>
							<Table.Th>Received</Table.Th>
							<Table.Th>Due</Table.Th>
							<Table.Th />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{privacyRequestsTableRows.map((row) => (
							<Table.Tr key={row.requester}>
								<Table.Td>
									<Text size="sm">{row.requester}</Text>
								</Table.Td>
								<Table.Td>{row.type}</Table.Td>
								<Table.Td>{row.workspace}</Table.Td>
								<Table.Td>{row.received}</Table.Td>
								<Table.Td>
									<Text
										size="sm"
										c={row.urgent ? "red" : row.done ? "dimmed" : undefined}
										fw={row.urgent ? 500 : undefined}
									>
										{row.due}
									</Text>
								</Table.Td>
								<Table.Td ta="right">
									{!row.done && (
										<Button size="xs" variant="default">
											{row.type === "Access" ? "Export data" : "Delete data"}
										</Button>
									)}
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

export function StaffArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<TenantSwitcher />
			</PreviewItem>
			<PreviewItem span="half">
				<ImpersonationBanner />
			</PreviewItem>
			<PreviewItem span="half">
				<RefundModal />
			</PreviewItem>
			<PreviewItem span="half">
				<AccountOverview />
			</PreviewItem>
			<PreviewItem span="full">
				<PrivacyRequestsTable />
			</PreviewItem>
		</PreviewGrid>
	);
}

function RecordSummaryCitation({ number }: { number: number }) {
	return (
		<Anchor component="button" type="button" size="xs" fw={600} style={{ verticalAlign: "super", lineHeight: 1 }}>
			{number}
		</Anchor>
	);
}

function AiSuggestion() {
	return (
		<Card withBorder>
			<Text size="sm" fw={500} mb={6}>
				Claim category
			</Text>
			<Paper withBorder p="sm" bg="var(--mantine-primary-color-light)">
				<Group gap="xs" wrap="nowrap" mb={4}>
					<TbSparkles aria-hidden style={{ color: "var(--mantine-primary-color-filled)", flexShrink: 0 }} />
					<Text size="sm" fw={500}>
						Damaged in transit
					</Text>
				</Group>
				<Text size="xs" c="dimmed">
					From the delivery photo and the note “broken seal on arrival”.
				</Text>
				<Group gap="xs" mt="sm">
					<Button size="xs">Accept</Button>
					<Button size="xs" variant="default">
						Edit
					</Button>
					<Button size="xs" variant="subtle" color="gray">
						Reject
					</Button>
				</Group>
			</Paper>
		</Card>
	);
}

const agentRunTraceSteps = [
	{ tool: "list_payouts", input: "", result: "3 Stripe payouts in November" },
	{ tool: "match_payments", input: "", result: "41 of 43 payments matched to invoices" },
	{ tool: "get_invoice", input: "HAL-0388", result: "Paid €12.00 less than invoiced" },
	{ tool: "search_invoices", input: "€640.00", result: "No invoice for this amount" },
];

function AgentRunTrace() {
	return (
		<Card withBorder>
			<Group justify="space-between" align="flex-start" wrap="nowrap" mb="lg">
				<Box>
					<Title order={4}>Reconcile November payouts</Title>
					<Text size="xs" c="dimmed">
						Started by {people.mei.name}
					</Text>
				</Box>
				<StatusBadge status="succeeded" />
			</Group>
			<Timeline bulletSize={22} lineWidth={2} active={agentRunTraceSteps.length - 1}>
				{agentRunTraceSteps.map((step) => (
					<Timeline.Item
						key={`${step.tool}-${step.input}`}
						bullet={<TbTool size={12} />}
						title={
							<Code>
								{step.tool}({step.input})
							</Code>
						}
					>
						<Text size="xs" c="dimmed" mt={4}>
							{step.result}
						</Text>
					</Timeline.Item>
				))}
			</Timeline>
			<Paper withBorder p="sm" mt="lg">
				<Text size="sm">
					Two payments need a look: HAL-0388 was underpaid by {euros.format(12)}, and a payment of {euros.format(640)}{" "}
					has no invoice.
				</Text>
			</Paper>
			<Card.Section withBorder inheritPadding py="xs" mt="md">
				<Group gap="lg">
					<Text size="xs" c="dimmed">
						4 tool calls
					</Text>
					<Text size="xs" c="dimmed">
						18 seconds
					</Text>
					<Text size="xs" c="dimmed">
						{euros.format(0.04)}
					</Text>
				</Group>
			</Card.Section>
		</Card>
	);
}

const recordSummarySources = [
	"Email from Brightwater Foods, Nov 19",
	"Pickup photos, Nov 17",
	`Note by ${people.mei.name}, Nov 21`,
];

function RecordSummary() {
	return (
		<Card withBorder>
			<Group justify="space-between" wrap="nowrap" mb="sm">
				<Group gap="xs" wrap="nowrap">
					<TbSparkles aria-hidden style={{ color: "var(--mantine-primary-color-filled)" }} />
					<Title order={5}>Summary</Title>
				</Group>
				<Text size="xs" c="dimmed" ff="monospace">
					CLM-298
				</Text>
			</Group>
			<Text size="sm">
				Brightwater Foods reported a broken seal on 2 of 6 pallets delivered on Nov 18
				<RecordSummaryCitation number={1} />. The pickup photos show the seals intact, so the damage happened in transit
				<RecordSummaryCitation number={2} />. {people.mei.name} offered a credit note of {euros.format(480)}, which the
				customer hasn't answered yet
				<RecordSummaryCitation number={3} />.
			</Text>
			<Divider my="sm" />
			<Stack gap={4}>
				{recordSummarySources.map((source, index) => (
					<Group key={source} gap="xs" wrap="nowrap">
						<Text size="xs" c="dimmed" w={12}>
							{index + 1}
						</Text>
						<Anchor component="button" type="button" size="xs">
							{source}
						</Anchor>
					</Group>
				))}
			</Stack>
		</Card>
	);
}

function AssistantPanel() {
	return (
		<Paper withBorder h={440} style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
			<Group justify="space-between" wrap="nowrap" px="md" py="sm" style={{ borderBottom: settingsAreaDividerBorder }}>
				<Group gap="xs" wrap="nowrap">
					<TbSparkles aria-hidden style={{ color: "var(--mantine-primary-color-filled)" }} />
					<Text size="sm" fw={600}>
						Assistant
					</Text>
				</Group>
				<CloseButton aria-label="Close assistant" />
			</Group>
			<ScrollArea style={{ flex: 1 }}>
				<Stack gap="md" p="md">
					<Paper bg="var(--mantine-color-default-hover)" px="sm" py={6} maw="85%" ml="auto">
						<Text size="sm">Why is Brightwater Foods overdue?</Text>
					</Paper>
					<Box>
						<Text size="sm">
							Invoice HAL-0398 for {euros.format(4820)} was due on Nov 12
							<RecordSummaryCitation number={1} />. Brightwater is holding payment until claim CLM-298 is settled
							<RecordSummaryCitation number={2} />, and a reminder went out on Nov 19
							<RecordSummaryCitation number={3} />.
						</Text>
						<Group gap={6} mt="sm">
							<Pill size="sm">1 · HAL-0398</Pill>
							<Pill size="sm">2 · CLM-298</Pill>
							<Pill size="sm">3 · Reminder, Nov 19</Pill>
						</Group>
					</Box>
				</Stack>
			</ScrollArea>
			<Box p="sm" style={{ borderTop: settingsAreaDividerBorder }}>
				<TextInput
					placeholder="Ask about this page"
					aria-label="Ask about this page"
					rightSection={
						<ActionIcon size="sm" aria-label="Send">
							<TbSend size={14} />
						</ActionIcon>
					}
				/>
			</Box>
		</Paper>
	);
}

export function AiArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="half">
				<AiSuggestion />
			</PreviewItem>
			<PreviewItem span="half">
				<AgentRunTrace />
			</PreviewItem>
			<PreviewItem span="half">
				<RecordSummary />
			</PreviewItem>
			<PreviewItem span="half">
				<AssistantPanel />
			</PreviewItem>
		</PreviewGrid>
	);
}

const recordsBorder = "1px solid var(--mantine-color-default-border)";

function FilterBar() {
	const count = (value: string) => (
		<Text span size="xs" c="dimmed">
			{value}
		</Text>
	);

	return (
		<>
			<Tabs defaultValue="overdue">
				<Tabs.List px="md">
					<Tabs.Tab value="all" rightSection={count("3,412")}>
						All invoices
					</Tabs.Tab>
					<Tabs.Tab value="overdue" rightSection={count("18")}>
						Overdue
					</Tabs.Tab>
					<Tabs.Tab value="drafts" rightSection={count("7")}>
						Drafts
					</Tabs.Tab>
					<Button variant="subtle" color="gray" leftSection={<TbPlus />} style={{ alignSelf: "center" }}>
						Save view
					</Button>
				</Tabs.List>
			</Tabs>
			<Group gap="xs" p="md">
				<TextInput placeholder="Search invoices" leftSection={<TbSearch />} w={240} aria-label="Search invoices" />
				<Pill withRemoveButton>
					<Text span inherit c="dimmed">
						Status is
					</Text>{" "}
					Overdue
				</Pill>
				<Pill withRemoveButton>
					<Text span inherit c="dimmed">
						Amount over
					</Text>{" "}
					€1,000
				</Pill>
				<Button variant="subtle" leftSection={<TbFilter />}>
					Add filter
				</Button>
				<Group gap="xs" ml="auto">
					<Button variant="default" leftSection={<TbColumns />}>
						Columns
					</Button>
					<Button variant="default" leftSection={<TbDownload />}>
						Export
					</Button>
				</Group>
			</Group>
		</>
	);
}

const resourceTableRows = [
	{ id: "HAL-2041", customer: "Brightwater Foods", status: "overdue", amount: 4820, due: "Nov 12", daysLate: 12 },
	{ id: "HAL-2038", customer: "Keller & Sons", status: "overdue", amount: 1250, due: "Nov 9", daysLate: 15 },
	{ id: "HAL-2033", customer: "Osaka Trading Co.", status: "reminded", amount: 12400, due: "Nov 3", daysLate: 21 },
	{ id: "HAL-2029", customer: "Fjord Outfitters", status: "disputed", amount: 2105.5, due: "Oct 30", daysLate: 25 },
] as const;

const resourceTableStatuses: Record<(typeof resourceTableRows)[number]["status"], ReactNode> = {
	overdue: <StatusBadge status="overdue" />,
	reminded: (
		<Badge variant="light" color="yellow">
			Reminder sent
		</Badge>
	),
	disputed: (
		<Badge variant="light" color="violet">
			Disputed
		</Badge>
	),
};

function ResourceTableSortHeader({ label, sorted = false }: { label: string; sorted?: boolean }) {
	return (
		<UnstyledButton fz="inherit" fw="inherit">
			<Group gap={4} wrap="nowrap">
				{label}
				{sorted && <TbArrowDown aria-label="Sorted, oldest first" />}
			</Group>
		</UnstyledButton>
	);
}

function ResourceTable() {
	const [selected, setSelected] = useState<string[]>(["HAL-2041", "HAL-2038"]);
	const allSelected = selected.length === resourceTableRows.length;

	const toggle = (id: string) =>
		setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

	return (
		// `contain: layout` makes the fixed-position ActionBar sit inside this box instead of the viewport
		<Box pos="relative" style={{ contain: "layout" }}>
			<Table.ScrollContainer minWidth={760}>
				<Table horizontalSpacing="md" highlightOnHover>
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={40}>
								<Checkbox
									aria-label="Select all"
									checked={allSelected}
									indeterminate={selected.length > 0 && !allSelected}
									onChange={() => setSelected(allSelected ? [] : resourceTableRows.map((row) => row.id))}
								/>
							</Table.Th>
							<Table.Th>
								<ResourceTableSortHeader label="Invoice" />
							</Table.Th>
							<Table.Th>
								<ResourceTableSortHeader label="Customer" />
							</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th ta="right">
								<ResourceTableSortHeader label="Amount" />
							</Table.Th>
							<Table.Th>
								<ResourceTableSortHeader label="Due" sorted />
							</Table.Th>
							<Table.Th w={48} />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{resourceTableRows.map((row) => (
							<Table.Tr key={row.id} bg={selected.includes(row.id) ? "var(--mantine-primary-color-light)" : undefined}>
								<Table.Td>
									<Checkbox
										aria-label={`Select ${row.id}`}
										checked={selected.includes(row.id)}
										onChange={() => toggle(row.id)}
									/>
								</Table.Td>
								<Table.Td>
									<Anchor size="sm" ff="monospace">
										{row.id}
									</Anchor>
								</Table.Td>
								<Table.Td>{row.customer}</Table.Td>
								<Table.Td>{resourceTableStatuses[row.status]}</Table.Td>
								<Table.Td ta="right">{euros.format(row.amount)}</Table.Td>
								<Table.Td>
									{row.due}{" "}
									<Text span size="xs" c="red">
										· {row.daysLate} days late
									</Text>
								</Table.Td>
								<Table.Td>
									<ActionIcon variant="subtle" color="gray" aria-label={`Actions for ${row.id}`}>
										<TbDots />
									</ActionIcon>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
			<Group justify="space-between" px="md" py="sm" style={{ borderTop: recordsBorder }}>
				<Text size="sm" c="dimmed">
					1–4 of 18
				</Text>
				<Pagination total={5} defaultValue={1} />
			</Group>
			<ActionBar
				opened={selected.length > 0}
				onClose={() => setSelected([])}
				withinPortal={false}
				zIndex={1}
				position={{ bottom: 8, left: 0, right: 0 }}
			>
				<Text size="sm" fw={600}>
					{selected.length} selected
				</Text>
				<ActionBar.Divider />
				<Button variant="default">Remind</Button>
				<Button>Record payment</Button>
				<ActionBar.CloseButton aria-label="Clear selection" />
			</ActionBar>
		</Box>
	);
}

function ResourceCardList() {
	const [selected, setSelected] = useState<string[]>(["HAL-2041", "HAL-2038"]);

	const toggle = (id: string) =>
		setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

	return (
		<Paper
			withBorder
			radius="lg"
			maw={380}
			h={560}
			pos="relative"
			style={{ contain: "layout", overflow: "hidden", display: "flex", flexDirection: "column" }}
		>
			<Group gap="xs" px="md" py="sm" wrap="nowrap" style={{ borderBottom: recordsBorder }}>
				<Text fw={600}>Overdue</Text>
				<Text size="sm" c="dimmed">
					18
				</Text>
				<ActionIcon variant="subtle" color="gray" ml="auto" aria-label="Search">
					<TbSearch />
				</ActionIcon>
				<ActionIcon variant="subtle" color="gray" aria-label="Filter">
					<TbFilter />
				</ActionIcon>
			</Group>
			<Stack gap="xs" p="sm" pb={96} style={{ flex: 1, overflow: "auto" }}>
				{resourceTableRows.map((row) => {
					const isSelected = selected.includes(row.id);
					return (
						<Paper key={row.id} withBorder p="sm" bg={isSelected ? "var(--mantine-primary-color-light)" : undefined}>
							<Group align="flex-start" wrap="nowrap" gap="sm">
								<Checkbox aria-label={`Select ${row.id}`} checked={isSelected} onChange={() => toggle(row.id)} />
								<Box miw={0} style={{ flex: 1 }}>
									<Group justify="space-between" wrap="nowrap" gap="xs">
										<Text size="xs" c="dimmed" ff="monospace">
											{row.id}
										</Text>
										<Text size="sm" fw={600}>
											{euros.format(row.amount)}
										</Text>
									</Group>
									<Text size="sm">{row.customer}</Text>
									<Text size="xs" c="red">
										{row.daysLate} days late{row.status === "disputed" && ", disputed"}
									</Text>
								</Box>
							</Group>
						</Paper>
					);
				})}
			</Stack>
			<ActionBar
				opened={selected.length > 0}
				onClose={() => setSelected([])}
				withinPortal={false}
				zIndex={1}
				position={{ bottom: 12, left: 12, right: 12 }}
			>
				<Text size="sm" fw={600} style={{ whiteSpace: "nowrap" }}>
					{selected.length} selected
				</Text>
				<ActionBar.Divider />
				<Tooltip label="Remind" withArrow>
					<ActionIcon variant="default" aria-label="Remind">
						<TbMail />
					</ActionIcon>
				</Tooltip>
				<Button>Record payment</Button>
			</ActionBar>
		</Paper>
	);
}

const columnsMenuColumns = [
	{ label: "Invoice", visible: true, locked: true },
	{ label: "Customer", visible: true },
	{ label: "Status", visible: true },
	{ label: "Amount", visible: true },
	{ label: "Due", visible: true },
	{ label: "Issued", visible: false },
	{ label: "Owner", visible: false },
	{ label: "Payment terms", visible: false },
];

function ColumnsMenu() {
	return (
		<Box mih={420}>
			<Popover opened withinPortal={false} trapFocus={false} returnFocus={false} position="bottom-start" width={260}>
				<Popover.Target>
					<Button variant="default" leftSection={<TbColumns />}>
						Columns
					</Button>
				</Popover.Target>
				<Popover.Dropdown>
					<Stack gap="sm">
						{columnsMenuColumns.map((column) => (
							<Group key={column.label} gap="xs" wrap="nowrap">
								<TbGripVertical
									aria-hidden
									style={{ color: "var(--mantine-color-dimmed)", cursor: column.locked ? undefined : "grab" }}
								/>
								<Checkbox label={column.label} defaultChecked={column.visible} disabled={column.locked} />
							</Group>
						))}
						<Divider />
						<Anchor component="button" size="sm" ta="left">
							Reset to default
						</Anchor>
					</Stack>
				</Popover.Dropdown>
			</Popover>
		</Box>
	);
}

const treeTableCustomers = [
	{
		name: "Brightwater Foods",
		invoices: [
			{ id: "HAL-2041", amount: 4820 },
			{ id: "HAL-2047", amount: 860 },
			{ id: "HAL-2052", amount: 5060 },
		],
	},
	{
		name: "Keller & Sons",
		invoices: [
			{ id: "HAL-2038", amount: 1250 },
			{ id: "HAL-2044", amount: 3300 },
		],
	},
	{ name: "Osaka Trading Co.", invoices: [{ id: "HAL-2033", amount: 12400 }] },
];

function TreeTable() {
	const [expanded, setExpanded] = useState<string[]>(["Brightwater Foods"]);
	const sum = (invoices: { amount: number }[]) => invoices.reduce((total, invoice) => total + invoice.amount, 0);
	const allInvoices = treeTableCustomers.flatMap((customer) => customer.invoices);

	return (
		<Card withBorder padding={0}>
			<Table horizontalSpacing="md">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Customer</Table.Th>
						<Table.Th ta="right">Invoices</Table.Th>
						<Table.Th ta="right">Outstanding</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{treeTableCustomers.map((customer) => {
						const open = expanded.includes(customer.name);
						return (
							<Fragment key={customer.name}>
								<Table.Tr>
									<Table.Td>
										<UnstyledButton
											aria-expanded={open}
											onClick={() =>
												setExpanded((current) =>
													open ? current.filter((name) => name !== customer.name) : [...current, customer.name],
												)
											}
										>
											<Group gap={6} wrap="nowrap">
												<TbChevronRight
													aria-hidden
													style={{ transform: open ? "rotate(90deg)" : undefined, flexShrink: 0 }}
												/>
												<Text size="sm" fw={500}>
													{customer.name}
												</Text>
											</Group>
										</UnstyledButton>
									</Table.Td>
									<Table.Td ta="right">{customer.invoices.length}</Table.Td>
									<Table.Td ta="right" fw={500}>
										{euros.format(sum(customer.invoices))}
									</Table.Td>
								</Table.Tr>
								{open &&
									customer.invoices.map((invoice) => (
										<Table.Tr key={invoice.id}>
											<Table.Td pl="xl">
												<Text size="sm" ff="monospace" pl="xs">
													{invoice.id}
												</Text>
											</Table.Td>
											<Table.Td />
											<Table.Td ta="right">{euros.format(invoice.amount)}</Table.Td>
										</Table.Tr>
									))}
							</Fragment>
						);
					})}
				</Table.Tbody>
				<Table.Tfoot>
					<Table.Tr>
						<Table.Th>Total</Table.Th>
						<Table.Th ta="right">{allInvoices.length}</Table.Th>
						<Table.Th ta="right">{euros.format(sum(allInvoices))}</Table.Th>
					</Table.Tr>
				</Table.Tfoot>
			</Table>
		</Card>
	);
}

function BulkEditModal() {
	return (
		<DialogFrame
			title="Edit 18 invoices"
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button>Update 18 invoices</Button>
				</>
			}
		>
			<Stack>
				<Select label="Field" data={["Payment terms", "Owner", "Due date", "Tags"]} defaultValue="Payment terms" />
				<Select label="New value" data={["14 days", "30 days", "45 days", "60 days"]} defaultValue="30 days" />
				<Text size="sm" c="dimmed">
					11 of them have a different value now. Each invoice's history shows the change.
				</Text>
			</Stack>
		</DialogFrame>
	);
}

const bulkActionProgressFailures = [
	{ id: "HAL-2029", reason: "The customer has no billing email" },
	{ id: "HAL-2017", reason: "The customer is archived" },
];

function BulkActionProgress() {
	return (
		<Panel
			title="Sending 18 reminders"
			description="You can leave this page. We'll notify you when it's done."
			footer={
				<Group justify="flex-end">
					<Button variant="default" leftSection={<TbRefresh />}>
						Retry 2 failed
					</Button>
				</Group>
			}
		>
			<Stack>
				<Stack gap={6}>
					<Progress.Root>
						<Progress.Section value={72} />
						<Progress.Section value={11} color="red" />
					</Progress.Root>
					<Group justify="space-between">
						<Text size="sm">15 of 18 done</Text>
						<Text size="sm" c="red">
							2 failed
						</Text>
					</Group>
				</Stack>
				<Stack gap="xs">
					{bulkActionProgressFailures.map((failure) => (
						<Group key={failure.id} gap="sm" wrap="nowrap" align="baseline">
							<Code>{failure.id}</Code>
							<Text size="sm" c="dimmed">
								{failure.reason}
							</Text>
						</Group>
					))}
				</Stack>
			</Stack>
		</Panel>
	);
}

const trashBinRows = [
	{
		id: "HAL-2019",
		customer: "Fjord Outfitters",
		person: people.tomas,
		at: ago({ days: 2 }),
	},
	{
		id: "HAL-2008",
		customer: "Keller & Sons",
		person: people.mei,
		at: ago({ days: 9 }),
	},
	{
		id: "HAL-1994",
		customer: "Osaka Trading Co.",
		person: people.jane,
		at: ago({ days: 21 }),
	},
];

function TrashBin() {
	return (
		<Panel title="Deleted invoices" description="Restorable for 30 days, then removed for good." flush>
			<Table horizontalSpacing="var(--card-padding)">
				<Table.Tbody>
					{trashBinRows.map((row) => (
						<Table.Tr key={row.id}>
							<Table.Td>
								<Text size="sm">
									<Text span inherit ff="monospace">
										{row.id}
									</Text>{" "}
									{row.customer}
								</Text>
								<Text size="xs" c="dimmed">
									Deleted by {row.person.name}, <RelativeTime date={row.at} />
								</Text>
							</Table.Td>
							<Table.Td ta="right">
								<Button variant="default" leftSection={<TbRestore />}>
									Restore
								</Button>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Panel>
	);
}

function RecordHeader() {
	return (
		<Stack gap="sm">
			<Group justify="space-between" wrap="nowrap">
				<Breadcrumbs separator={<TbChevronRight aria-hidden />}>
					<Anchor size="sm">Invoices</Anchor>
					<Anchor size="sm">Overdue</Anchor>
					<Text size="sm" c="dimmed" ff="monospace">
						HAL-2041
					</Text>
				</Breadcrumbs>
				<Group gap="xs" wrap="nowrap">
					<Text size="sm" c="dimmed">
						4 of 18
					</Text>
					<ActionIcon variant="default" aria-label="Previous invoice">
						<TbChevronLeft />
					</ActionIcon>
					<ActionIcon variant="default" aria-label="Next invoice">
						<TbChevronRight />
					</ActionIcon>
				</Group>
			</Group>
			<Group justify="space-between" align="flex-start">
				<Stack gap={4}>
					<Group gap="sm">
						<Title order={2}>Brightwater Foods</Title>
						<StatusBadge status="overdue" />
					</Group>
					<Group gap="xs">
						<CopyableCode value="inv_01JD8K2M4Q" />
						<Text size="sm" c="dimmed">
							{euros.format(4820)}
						</Text>
					</Group>
				</Stack>
				<Group gap="xs">
					<Button variant="default">Send reminder</Button>
					<Button>Record payment</Button>
					<ActionIcon variant="default" aria-label="More actions">
						<TbDots />
					</ActionIcon>
				</Group>
			</Group>
		</Stack>
	);
}

function LifecycleBar() {
	return (
		<Paper withBorder p="md">
			<Group gap="lg" wrap="nowrap">
				<Stepper active={2} allowNextStepsSelect={false} style={{ flex: 1 }}>
					<Stepper.Step label="Draft" />
					<Stepper.Step label="Sent" />
					<Stepper.Step label="Overdue" color="red" />
					<Stepper.Step label="Paid" />
				</Stepper>
				<Text size="sm" c="dimmed">
					or
				</Text>
				<Group gap="xs" wrap="nowrap">
					<ThemeIcon variant="light" color="gray" radius="xl" size="lg">
						<TbLock />
					</ThemeIcon>
					<Text size="sm" c="dimmed">
						Void
					</Text>
				</Group>
			</Group>
			<Group gap="xs" mt="md" wrap="nowrap" align="center">
				<TbLock aria-hidden style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }} />
				<Text size="sm" c="dimmed">
					Voiding needs <Code>invoices.void</Code>. Your role, Member, doesn't include it.{" "}
					<Anchor size="sm" inherit>
						Ask Jane Okafor
					</Anchor>
				</Text>
			</Group>
		</Paper>
	);
}

const recordHeaderTabCount = (value: string) => (
	<Text span size="xs" c="dimmed">
		{value}
	</Text>
);

function InlineEditField({
	label,
	value,
	defaultEditing = false,
}: {
	label: string;
	value: string;
	defaultEditing?: boolean;
}) {
	const [editing, setEditing] = useState(defaultEditing);

	if (editing) {
		return (
			<Group gap={4} wrap="nowrap">
				<TextInput aria-label={label} defaultValue={value} miw={0} style={{ flex: 1 }} />
				<ActionIcon aria-label="Save" onClick={() => setEditing(false)}>
					<TbCheck />
				</ActionIcon>
				<ActionIcon variant="default" aria-label="Cancel" onClick={() => setEditing(false)}>
					<TbX />
				</ActionIcon>
			</Group>
		);
	}

	return (
		<UnstyledButton fz="inherit" aria-label={`Edit ${label}`} onClick={() => setEditing(true)}>
			<Group gap={6} wrap="nowrap">
				{value}
				<TbPencil aria-hidden style={{ color: "var(--mantine-color-dimmed)" }} />
			</Group>
		</UnstyledButton>
	);
}

function RecordTimeline() {
	const name = (value: string) => (
		<Text span inherit fw={600}>
			{value}
		</Text>
	);
	const time = (date: Date) => (
		<Text size="xs" c="dimmed" mt={4}>
			<RelativeTime date={date} />
		</Text>
	);

	return (
		<Panel title="Activity">
			<Timeline bulletSize={28} lineWidth={2}>
				<Timeline.Item
					bullet={
						<Avatar size={28} color={people.mei.color}>
							{people.mei.initials}
						</Avatar>
					}
					title={<Text size="sm">{name("Mei Lin")} commented</Text>}
				>
					<Text size="sm">Called their AP team. They'll pay this with HAL-2038 next week.</Text>
					{time(ago({ days: 1 }))}
				</Timeline.Item>
				<Timeline.Item bullet={<TbMail />} title={<Text size="sm">Reminder sent to ap@brightwater.pt</Text>}>
					{time(ago({ days: 5 }))}
				</Timeline.Item>
				<Timeline.Item
					bullet={
						<Avatar size={28} color={people.tomas.color}>
							{people.tomas.initials}
						</Avatar>
					}
					title={<Text size="sm">{name("Tomás Ruiz")} changed the payment terms</Text>}
				>
					<Group gap="xs" wrap="nowrap">
						<Text size="sm" c="dimmed" td="line-through">
							45 days
						</Text>
						<TbArrowRight aria-hidden style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }} />
						<Text size="sm" fw={500}>
							30 days
						</Text>
					</Group>
					{time(ago({ days: 11 }))}
				</Timeline.Item>
				<Timeline.Item bullet={<TbAlertTriangle />} color="red" title={<Text size="sm">Became overdue</Text>}>
					{time(ago({ days: 12 }))}
				</Timeline.Item>
				<Timeline.Item bullet={<TbSend />} title={<Text size="sm">Sent to Brightwater Foods</Text>}>
					{time(ago({ days: 43 }))}
				</Timeline.Item>
			</Timeline>
		</Panel>
	);
}

const relatedListRows = [
	{ id: "HAL-2052", status: "draft", amount: 5060, date: "Not sent" },
	{ id: "HAL-2002", status: "paid", amount: 3100, date: "Paid Oct 2" },
	{ id: "HAL-1988", status: "paid", amount: 2740, date: "Paid Sep 1" },
] as const;

function RelatedList() {
	return (
		<Panel title="Other invoices from Brightwater Foods" actions={<Anchor size="sm">View all 41</Anchor>} flush>
			<Table horizontalSpacing="var(--card-padding)">
				<Table.Tbody>
					{relatedListRows.map((row) => (
						<Table.Tr key={row.id}>
							<Table.Td>
								<Anchor size="sm" ff="monospace">
									{row.id}
								</Anchor>
							</Table.Td>
							<Table.Td>
								<StatusBadge status={row.status} />
							</Table.Td>
							<Table.Td c="dimmed">{row.date}</Table.Td>
							<Table.Td ta="right">{euros.format(row.amount)}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Panel>
	);
}

const versionHistoryVersions = [
	{ version: "v14", author: "Tomás Ruiz", time: "Today 10:42", current: true },
	{ version: "v13", author: "Jane Okafor", time: "Nov 20, 16:05" },
	{ version: "v12", author: "Production backend", note: "API key", time: "Nov 18, 03:12" },
	{ version: "v11", author: "Mei Lin", time: "Nov 2, 11:30" },
];

function VersionHistoryValue({
	change,
	mono = false,
	children,
}: {
	change: "old" | "new";
	mono?: boolean;
	children: ReactNode;
}) {
	const color = change === "old" ? "red" : "green";

	return (
		<Text
			span
			size="sm"
			ff={mono ? "monospace" : undefined}
			td={change === "old" ? "line-through" : undefined}
			px={4}
			bg={`var(--mantine-color-${color}-light)`}
			c={`var(--mantine-color-${color}-light-color)`}
			style={{ borderRadius: "var(--mantine-radius-xs)" }}
		>
			{children}
		</Text>
	);
}

function VersionHistory() {
	return (
		<Card withBorder padding={0}>
			<Group align="stretch" gap={0} wrap="nowrap">
				<Box w={240} p="xs" style={{ borderRight: recordsBorder, flexShrink: 0 }}>
					<Text size="xs" fw={600} c="dimmed" px="sm" py={6}>
						Invoicing settings
					</Text>
					{versionHistoryVersions.map((entry) => (
						<NavLink
							key={entry.version}
							active={entry.version === "v13"}
							leftSection={<Code>{entry.version}</Code>}
							label={
								<>
									{entry.author}{" "}
									{(entry.current || entry.note) && (
										<Text span size="xs" c="dimmed">
											{entry.current ? "current" : `(${entry.note})`}
										</Text>
									)}
								</>
							}
							description={entry.time}
						/>
					))}
				</Box>
				<Stack p="lg" miw={0} style={{ flex: 1 }}>
					<Group justify="space-between">
						<Title order={4}>v13 compared with current</Title>
						<Button variant="default" leftSection={<TbRestore />}>
							Restore v13
						</Button>
					</Group>
					<Table>
						<Table.Thead>
							<Table.Tr>
								<Table.Th>Field</Table.Th>
								<Table.Th>v13</Table.Th>
								<Table.Th>Current</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td fw={500}>Invoice prefix</Table.Td>
								<Table.Td>
									<VersionHistoryValue change="old" mono>
										INV-
									</VersionHistoryValue>
								</Table.Td>
								<Table.Td>
									<VersionHistoryValue change="new" mono>
										HAL-
									</VersionHistoryValue>
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fw={500}>Payment terms</Table.Td>
								<Table.Td>
									<VersionHistoryValue change="old">45 days</VersionHistoryValue>
								</Table.Td>
								<Table.Td>
									<VersionHistoryValue change="new">30 days</VersionHistoryValue>
								</Table.Td>
							</Table.Tr>
							<Table.Tr>
								<Table.Td fw={500}>Late fee</Table.Td>
								<Table.Td>
									<VersionHistoryValue change="old">Off</VersionHistoryValue>
								</Table.Td>
								<Table.Td>
									<VersionHistoryValue change="new">1.5% per month</VersionHistoryValue>
								</Table.Td>
							</Table.Tr>
						</Table.Tbody>
					</Table>
					<Text size="xs" c="dimmed">
						Restoring adds a new version.
					</Text>
				</Stack>
			</Group>
		</Card>
	);
}

function ConflictBanner() {
	return (
		<Alert color="yellow" icon={<TbAlertTriangle />} title="Tomás Ruiz saved this invoice 2 minutes ago">
			<Text size="sm">The due date changed. Your edits are still here.</Text>
			<Group gap="xs" mt="sm">
				<Button variant="default">Review changes</Button>
				<Button variant="subtle">Overwrite with mine</Button>
			</Group>
		</Alert>
	);
}

const jsonInspectorData: TreeNodeData[] = [
	{
		value: "data",
		label: "data",
		children: [
			{ value: "data.id", label: "id" },
			{ value: "data.amount", label: "amount" },
			{ value: "data.currency", label: "currency" },
			{ value: "data.paid", label: "paid" },
			{
				value: "data.customer",
				label: "customer",
				children: [
					{ value: "data.customer.name", label: "name" },
					{ value: "data.customer.vat", label: "vat" },
					{
						value: "data.customer.address",
						label: "address",
						children: [
							{ value: "data.customer.address.street", label: "street" },
							{ value: "data.customer.address.city", label: "city" },
							{ value: "data.customer.address.postcode", label: "postcode" },
							{ value: "data.customer.address.country", label: "country" },
						],
					},
				],
			},
			{
				value: "data.lines",
				label: "lines",
				children: ["0", "1", "2"].map((index) => ({
					value: `data.lines.${index}`,
					label: index,
					children: [
						{ value: `data.lines.${index}.description`, label: "description" },
						{ value: `data.lines.${index}.amount`, label: "amount" },
					],
				})),
			},
		],
	},
];

const jsonInspectorValues: Record<string, { text: string; color?: MantineColor }> = {
	data: { text: "{6}" },
	"data.id": { text: '"inv_01JD8K2M4Q"', color: "green" },
	"data.amount": { text: "482000", color: "blue" },
	"data.currency": { text: '"eur"', color: "green" },
	"data.paid": { text: "false", color: "violet" },
	"data.customer": { text: "{3}" },
	"data.customer.name": { text: '"Brightwater Foods"', color: "green" },
	"data.customer.vat": { text: '"PT509876543"', color: "green" },
	"data.customer.address": { text: "{4}" },
	"data.customer.address.street": { text: '"Rua das Flores 12"', color: "green" },
	"data.customer.address.city": { text: '"Porto"', color: "green" },
	"data.customer.address.postcode": { text: '"4050-262"', color: "green" },
	"data.customer.address.country": { text: '"PT"', color: "green" },
	"data.lines": { text: "[3]" },
};

function JsonInspector() {
	const tree = useTree({
		initialExpandedState: { data: true, "data.customer": true },
		initialSelectedState: ["data.customer"],
	});

	return (
		<Card withBorder padding={0}>
			<Group justify="space-between" wrap="nowrap" px="sm" py="xs" style={{ borderBottom: recordsBorder }}>
				<SegmentedControl data={["Tree", "Raw"]} defaultValue="Tree" />
				<CopyableCode value="data.customer" />
			</Group>
			<Box p="xs">
				<Tree
					data={jsonInspectorData}
					tree={tree}
					levelOffset="md"
					renderNode={({ node, expanded, hasChildren, selected, elementProps }) => {
						const entry = jsonInspectorValues[node.value] ?? {
							text: node.value.startsWith("data.lines.") ? "{2}" : "",
						};
						return (
							<Group gap={6} wrap="nowrap" {...elementProps}>
								{hasChildren ? (
									<TbChevronDown
										aria-hidden
										style={{ flexShrink: 0, transform: expanded ? undefined : "rotate(-90deg)" }}
									/>
								) : (
									<Box w="1em" style={{ flexShrink: 0 }} />
								)}
								<Text span size="xs" ff="monospace" fw={500}>
									{node.label}
									{!hasChildren && ":"}
								</Text>
								<Text span size="xs" ff="monospace" c={entry.color ?? "dimmed"} truncate>
									{entry.text}
								</Text>
								{selected && (
									<Tooltip label="Copy value" withArrow>
										<ActionIcon variant="subtle" color="gray" size="sm" ml="auto" aria-label="Copy value">
											<TbCopy />
										</ActionIcon>
									</Tooltip>
								)}
							</Group>
						);
					}}
				/>
			</Box>
		</Card>
	);
}

const internalNotesEntries: { person: Person; at: Date; body: ReactNode }[] = [
	{
		person: people.mei,
		at: ago({ days: 1 }),
		body: (
			<>
				Called their AP team.{" "}
				<Text span inherit fw={500} c="var(--mantine-primary-color-filled)">
					@Tomás Ruiz
				</Text>{" "}
				they'll pay this together with HAL-2038 next week.
			</>
		),
	},
	{
		person: people.jane,
		at: ago({ days: 11 }),
		body: <>Keep reminders weekly for this customer, they're one of our largest accounts.</>,
	},
];

function InternalNotes() {
	return (
		<Panel title="Notes" description="Only your team sees these.">
			<Stack>
				{internalNotesEntries.map((note) => (
					<Group key={note.at.getTime()} align="flex-start" wrap="nowrap" gap="sm">
						<Avatar size="sm" color={note.person.color}>
							{note.person.initials}
						</Avatar>
						<Box miw={0}>
							<Group gap="xs">
								<Text size="sm" fw={600}>
									{note.person.name}
								</Text>
								<Text size="xs" c="dimmed">
									<RelativeTime date={note.at} />
								</Text>
							</Group>
							<Text size="sm">{note.body}</Text>
						</Box>
					</Group>
				))}
				<Mentions placeholder="Add a note. Type @ to mention someone." minRows={2} aria-label="New note">
					<Mention
						trigger="@"
						data={Object.values(people).map((person) => ({ id: person.email, display: person.name }))}
					/>
				</Mentions>
				<Group justify="flex-end">
					<Button>Add note</Button>
				</Group>
			</Stack>
		</Panel>
	);
}

const attachmentsListFiles = [
	{ name: "HAL-2041.pdf", icon: <TbFileTypePdf />, versions: 2, person: people.mei, time: "Nov 20" },
	{ name: "delivery-note-DN-7781.pdf", icon: <TbFileTypePdf />, versions: 1, person: people.tomas, time: "Oct 14" },
	{ name: "proof-of-delivery.jpg", icon: <TbPhoto />, versions: 1, person: people.sofia, time: "Oct 14" },
];

function AttachmentsList() {
	return (
		<Panel
			title="Attachments"
			actions={
				<Button variant="default" leftSection={<TbUpload />}>
					Upload
				</Button>
			}
			flush
		>
			{attachmentsListFiles.map((file, index) => (
				<Group
					key={file.name}
					wrap="nowrap"
					gap="sm"
					py="sm"
					style={{ paddingInline: "var(--card-padding)", borderTop: index > 0 ? recordsBorder : undefined }}
				>
					<ThemeIcon variant="light" color="gray">
						{file.icon}
					</ThemeIcon>
					<Box miw={0} style={{ flex: 1 }}>
						<Text size="sm" fw={500} truncate>
							{file.name}
						</Text>
						<Text size="xs" c="dimmed">
							{file.person.name}, {file.time}
							{file.versions > 1 && (
								<>
									{" · "}
									<Anchor inherit>{file.versions} versions</Anchor>
								</>
							)}
						</Text>
					</Box>
					<ActionIcon variant="subtle" color="gray" aria-label={`Preview ${file.name}`}>
						<TbEye />
					</ActionIcon>
					<ActionIcon variant="subtle" color="gray" aria-label={`Download ${file.name}`}>
						<TbDownload />
					</ActionIcon>
				</Group>
			))}
		</Panel>
	);
}

function MergeRecordsChoice({
	field,
	kept,
	other,
	keepOther = false,
}: {
	field: string;
	kept: string;
	other: string;
	keepOther?: boolean;
}) {
	const name = `merge-records-${field}`;

	return (
		<Table.Tr>
			<Table.Td c="dimmed">{field}</Table.Td>
			<Table.Td>
				<Radio name={name} value="kept" label={kept} defaultChecked={!keepOther} />
			</Table.Td>
			<Table.Td>
				<Radio name={name} value="other" label={other} defaultChecked={keepOther} />
			</Table.Td>
		</Table.Tr>
	);
}

function MergeRecords() {
	return (
		<Panel
			title="Merge 2 customers"
			description="Same VAT number, similar names"
			flush
			footer={
				<Group justify="space-between">
					<Text size="xs" c="dimmed">
						You can undo a merge for 30 days.
					</Text>
					<Button>Merge customers</Button>
				</Group>
			}
		>
			<Table.ScrollContainer minWidth={520}>
				<Table horizontalSpacing="var(--card-padding)">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Field</Table.Th>
							<Table.Th>
								<Code>cus_8121</Code> (kept)
							</Table.Th>
							<Table.Th>
								<Code>cus_9034</Code>
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						<MergeRecordsChoice field="Name" kept="Brightwater Foods" other="Brightwater Foods S.A." />
						<Table.Tr>
							<Table.Td c="dimmed">VAT</Table.Td>
							<Table.Td colSpan={2}>
								<Code>PT509876543</Code>
							</Table.Td>
						</Table.Tr>
						<MergeRecordsChoice
							field="Billing email"
							kept="ap@brightwater.pt"
							other="finance@brightwater.pt"
							keepOther
						/>
						<MergeRecordsChoice
							field="Address"
							kept="Rua das Flores 12, Porto"
							other="R. das Flores, 12, 4050-262 Porto"
						/>
						<Table.Tr>
							<Table.Td c="dimmed">Invoices</Table.Td>
							<Table.Td colSpan={2}>
								41 + 3, all moved to <Code>cus_8121</Code>
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const compareRecordsCarriers = ["Atlas Haulage", "Iberia Cargo", "Norte Express"];

const compareRecordsRows: {
	label: string;
	values: ReactNode[];
	best?: { index: number; label: string };
	worse?: { index: number; color: MantineColor };
}[] = [
	{
		label: "Price",
		values: [euros.format(1240), euros.format(1385), euros.format(1310)],
		best: { index: 0, label: "Lowest" },
	},
	{ label: "Transit", values: ["2 days", "1 day", "2 days"], best: { index: 1, label: "Fastest" } },
	{ label: "Insured up to", values: ["€50,000", "€25,000", "€50,000"], worse: { index: 1, color: "yellow" } },
	{ label: "On time, 90 days", values: ["96%", "91%", "98%"], best: { index: 2, label: "Best" } },
	{ label: "Claims, 90 days", values: ["2", "5", "1"], worse: { index: 1, color: "red" } },
];

function CompareRecords() {
	return (
		<Panel
			title="Quotes: Porto → Madrid"
			description="2 pallets, pickup Nov 28"
			actions={<Switch label="Only differences" defaultChecked />}
			flush
			footer={
				<Text size="xs" c="dimmed">
					2 identical rows hidden
				</Text>
			}
		>
			<Table.ScrollContainer minWidth={480}>
				<Table horizontalSpacing="var(--card-padding)" style={{ fontVariantNumeric: "tabular-nums" }}>
					<Table.Thead>
						<Table.Tr>
							<Table.Th />
							{compareRecordsCarriers.map((carrier) => (
								<Table.Th key={carrier}>{carrier}</Table.Th>
							))}
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{compareRecordsRows.map((row) => (
							<Table.Tr key={row.label}>
								<Table.Td c="dimmed">{row.label}</Table.Td>
								{row.values.map((value, index) => (
									<Table.Td
										key={compareRecordsCarriers[index]}
										fw={row.best?.index === index ? 600 : undefined}
										c={row.worse?.index === index ? row.worse.color : undefined}
									>
										{value}
										{row.best?.index === index && (
											<Text size="xs" c="green" fw={400}>
												{row.best.label}
											</Text>
										)}
									</Table.Td>
								))}
							</Table.Tr>
						))}
						<Table.Tr>
							<Table.Td />
							{compareRecordsCarriers.map((carrier) => (
								<Table.Td key={carrier}>
									<Button variant="default">Book</Button>
								</Table.Td>
							))}
						</Table.Tr>
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

export function RecordsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<Card withBorder padding={0}>
					<FilterBar />
					<ResourceTable />
				</Card>
			</PreviewItem>
			<PreviewItem>
				<ResourceCardList />
			</PreviewItem>
			<PreviewItem>
				<ColumnsMenu />
			</PreviewItem>
			<PreviewItem>
				<TreeTable />
			</PreviewItem>
			<PreviewItem>
				<BulkEditModal />
			</PreviewItem>
			<PreviewItem>
				<BulkActionProgress />
			</PreviewItem>
			<PreviewItem>
				<TrashBin />
			</PreviewItem>
			<PreviewItem span="full">
				<Stack gap="md">
					{
						<Stack>
							<RecordHeader />
							<LifecycleBar />
						</Stack>
					}
					{
						<Tabs defaultValue="overview">
							<Tabs.List>
								<Tabs.Tab value="overview">Overview</Tabs.Tab>
								<Tabs.Tab value="lines" rightSection={recordHeaderTabCount("3")}>
									Lines
								</Tabs.Tab>
								<Tabs.Tab value="activity">Activity</Tabs.Tab>
								<Tabs.Tab value="notes" rightSection={recordHeaderTabCount("2")}>
									Notes
								</Tabs.Tab>
								<Tabs.Tab value="json">Raw JSON</Tabs.Tab>
							</Tabs.List>
						</Tabs>
					}
					<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
						<Grid.Col span={{ base: 12, md: 8 }}>
							<Stack>
								<RecordTimeline />
								<RelatedList />
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, md: 4 }}>
							{
								<Card withBorder>
									<DataList>
										<DataList.Item>
											<DataList.ItemLabel>Customer</DataList.ItemLabel>
											<DataList.ItemValue>
												<Anchor inherit>Brightwater Foods</Anchor>
											</DataList.ItemValue>
										</DataList.Item>
										<DataList.Item>
											<DataList.ItemLabel>Amount</DataList.ItemLabel>
											<DataList.ItemValue>{euros.format(4820)}</DataList.ItemValue>
										</DataList.Item>
										<DataList.Item>
											<DataList.ItemLabel>Issued</DataList.ItemLabel>
											<DataList.ItemValue>Oct 13, 2026</DataList.ItemValue>
										</DataList.Item>
										<DataList.Item>
											<DataList.ItemLabel>Due</DataList.ItemLabel>
											<DataList.ItemValue>
												<InlineEditField label="Due" value="Nov 12, 2026" />
											</DataList.ItemValue>
										</DataList.Item>
										<DataList.Item>
											<DataList.ItemLabel>Payment terms</DataList.ItemLabel>
											<DataList.ItemValue>
												<InlineEditField label="Payment terms" value="30 days" defaultEditing />
											</DataList.ItemValue>
										</DataList.Item>
										<DataList.Item>
											<DataList.ItemLabel>Owner</DataList.ItemLabel>
											<DataList.ItemValue>
												<EntityLabel name={people.mei.name} initials={people.mei.initials} color={people.mei.color} />
											</DataList.ItemValue>
										</DataList.Item>
									</DataList>
								</Card>
							}
						</Grid.Col>
					</Grid>
				</Stack>
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<VersionHistory />
			</PreviewItem>
			<PreviewItem>
				<Stack maw={400}>
					<Group justify="space-between">
						<Text size="sm" c="dimmed">
							Also viewing
						</Text>
						<Avatar.Group>
							<Tooltip label={people.tomas.name} withArrow>
								<Avatar size="sm" color={people.tomas.color}>
									{people.tomas.initials}
								</Avatar>
							</Tooltip>
							<Tooltip label={people.mei.name} withArrow>
								<Avatar size="sm" color={people.mei.color}>
									{people.mei.initials}
								</Avatar>
							</Tooltip>
						</Avatar.Group>
					</Group>
					<ConflictBanner />
					<Card withBorder>
						<Stack>
							<TextInput
								label="Due date"
								defaultValue="Dec 15, 2026"
								inputWrapperOrder={["label", "input", "description"]}
								description={
									<>
										Tomás set{" "}
										<Text span inherit fw={600}>
											Dec 1, 2026
										</Text>
									</>
								}
							/>
							<TextInput label="Amount" defaultValue="4,820.00" leftSection="€" rightSection="EUR" />
						</Stack>
					</Card>
				</Stack>
			</PreviewItem>
			<PreviewItem>
				<JsonInspector />
			</PreviewItem>
			<PreviewItem>
				<InternalNotes />
			</PreviewItem>
			<PreviewItem>
				<AttachmentsList />
			</PreviewItem>
			<PreviewItem span="half">
				<MergeRecords />
			</PreviewItem>
			<PreviewItem span="half">
				<CompareRecords />
			</PreviewItem>
		</PreviewGrid>
	);
}

const lineItemsEditorRows = [
	{ item: "Pallet transport Porto → Hamburg", quantity: 4, unit: "pallet", price: 310, vat: "23%", amount: 1240 },
	{ item: "Tail-lift delivery", quantity: 1, unit: "stop", price: 45, vat: "23%", amount: 45 },
	{ item: "Cargo insurance, 0.3% of goods value", quantity: 1, unit: "–", price: 96, vat: "Exempt", amount: 96 },
];

const lineItemsEditorVatRates = ["23%", "13%", "6%", "Exempt"];

const lineItemsEditorRightAligned = { input: { textAlign: "right" } } satisfies Record<string, CSSProperties>;

function LineItemsEditor() {
	return (
		<Panel
			flush
			title={
				<>
					Quote{" "}
					<Text span inherit ff="monospace">
						Q-2026-118
					</Text>
				</>
			}
			description="Keller & Sons · valid until Dec 8"
			footer={
				<Group justify="space-between" align="flex-start">
					<Button variant="subtle" size="xs" leftSection={<TbPlus />}>
						Add discount
					</Button>
					<Stack gap={6} w={280}>
						<Group justify="space-between">
							<Text size="sm" c="dimmed">
								Subtotal
							</Text>
							<Text size="sm">{euros.format(1381)}</Text>
						</Group>
						<Group justify="space-between">
							<Text size="sm" c="dimmed">
								VAT 23% on {euros.format(1285)}
							</Text>
							<Text size="sm">{euros.format(295.55)}</Text>
						</Group>
						<Divider />
						<Group justify="space-between">
							<Text fw={600}>Total</Text>
							<Text fw={600}>{euros.format(1676.55)}</Text>
						</Group>
					</Stack>
				</Group>
			}
		>
			<Table.ScrollContainer minWidth={840}>
				<Table horizontalSpacing="md" verticalSpacing="xs">
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={32} />
							<Table.Th>Item</Table.Th>
							<Table.Th ta="right">Qty</Table.Th>
							<Table.Th>Unit</Table.Th>
							<Table.Th ta="right">Unit price</Table.Th>
							<Table.Th>VAT</Table.Th>
							<Table.Th ta="right">Amount</Table.Th>
							<Table.Th w={44} />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{lineItemsEditorRows.map((row) => (
							<Table.Tr key={row.item}>
								<Table.Td>
									<TbGripVertical
										aria-label="Drag to reorder"
										style={{ display: "block", color: "var(--mantine-color-dimmed)" }}
									/>
								</Table.Td>
								<Table.Td>
									<TextInput size="xs" defaultValue={row.item} aria-label="Item" miw={240} />
								</Table.Td>
								<Table.Td>
									<NumberInput
										size="xs"
										w={64}
										defaultValue={row.quantity}
										hideControls
										aria-label="Quantity"
										styles={lineItemsEditorRightAligned}
									/>
								</Table.Td>
								<Table.Td>
									<Text size="sm" c="dimmed">
										{row.unit}
									</Text>
								</Table.Td>
								<Table.Td>
									<NumberInput
										size="xs"
										w={110}
										defaultValue={row.price}
										prefix="€"
										thousandSeparator=","
										decimalScale={2}
										fixedDecimalScale
										hideControls
										aria-label="Unit price"
										styles={lineItemsEditorRightAligned}
									/>
								</Table.Td>
								<Table.Td>
									<Select
										size="xs"
										w={100}
										data={lineItemsEditorVatRates}
										defaultValue={row.vat}
										allowDeselect={false}
										aria-label="VAT"
									/>
								</Table.Td>
								<Table.Td ta="right" fw={600}>
									{euros.format(row.amount)}
								</Table.Td>
								<Table.Td>
									<ActionIcon variant="subtle" color="gray" aria-label="Remove line">
										<TbX />
									</ActionIcon>
								</Table.Td>
							</Table.Tr>
						))}
						<Table.Tr>
							<Table.Td />
							<Table.Td colSpan={7}>
								<TextInput size="xs" maw={360} placeholder="Search items or type a description" aria-label="New line" />
							</Table.Td>
						</Table.Tr>
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const conditionBuilderFields = ["Country", "Overdue amount", "Plan", "Seats", "Created"];
const conditionBuilderOperators = ["is", "is any of", "is over", "is under"];

function ConditionBuilderRow({
	operator,
	field,
	comparison,
	children,
}: {
	operator: string;
	field: string;
	comparison: string;
	children: ReactNode;
}) {
	return (
		<Group gap="xs" wrap="nowrap">
			<Text size="xs" c="dimmed" w={40} ta="right" style={{ flexShrink: 0 }}>
				{operator}
			</Text>
			<Select
				size="xs"
				w={140}
				data={conditionBuilderFields}
				defaultValue={field}
				allowDeselect={false}
				aria-label="Field"
			/>
			<Select
				size="xs"
				w={104}
				data={conditionBuilderOperators}
				defaultValue={comparison}
				allowDeselect={false}
				aria-label="Operator"
			/>
			<Box miw={0} style={{ flex: 1 }}>
				{children}
			</Box>
			<ActionIcon variant="subtle" color="gray" size="sm" aria-label="Remove condition">
				<TbX />
			</ActionIcon>
		</Group>
	);
}

function ConditionBuilder() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group gap="xs">
					<Text size="sm">Customers where</Text>
					<SegmentedControl size="xs" data={["all", "any"]} defaultValue="all" />
					<Text size="sm">of these match</Text>
				</Group>
				<Stack gap="xs">
					<ConditionBuilderRow operator="Where" field="Country" comparison="is any of">
						<MultiSelect
							size="xs"
							data={["Portugal", "Spain", "France", "Germany"]}
							defaultValue={["Portugal", "Spain"]}
							aria-label="Countries"
						/>
					</ConditionBuilderRow>
					<ConditionBuilderRow operator="and" field="Overdue amount" comparison="is over">
						<NumberInput
							size="xs"
							defaultValue={1000}
							prefix="€"
							thousandSeparator=","
							hideControls
							aria-label="Amount"
						/>
					</ConditionBuilderRow>
					<Paper withBorder p="xs" ml={48}>
						<Stack gap="xs">
							<Text size="xs">
								<Text span inherit c="dimmed">
									and{" "}
								</Text>
								<Text span inherit fw={600}>
									any of
								</Text>
							</Text>
							<ConditionBuilderRow operator="" field="Plan" comparison="is">
								<Select
									size="xs"
									data={["Starter", "Business", "Enterprise"]}
									defaultValue="Business"
									allowDeselect={false}
									aria-label="Plan"
								/>
							</ConditionBuilderRow>
							<ConditionBuilderRow operator="or" field="Seats" comparison="is over">
								<NumberInput size="xs" defaultValue={20} hideControls aria-label="Seats" />
							</ConditionBuilderRow>
						</Stack>
					</Paper>
				</Stack>
				<Group gap="xs">
					<Button variant="subtle" size="xs" leftSection={<TbPlus />}>
						Add condition
					</Button>
					<Button variant="subtle" size="xs" leftSection={<TbPlus />}>
						Add group
					</Button>
				</Group>
				<Divider />
				<Group justify="space-between">
					<Text size="sm">
						Matches{" "}
						<Text span inherit fw={600}>
							37
						</Text>{" "}
						customers
					</Text>
					<Button size="xs">Save segment</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const scheduleInputNextRuns = [
	"Wed, Nov 25 · 09:00",
	"Thu, Nov 26 · 09:00",
	"Fri, Nov 27 · 09:00",
	"Mon, Nov 30 · 09:00",
	"Tue, Dec 1 · 09:00",
];

function ScheduleInput() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Box>
					<Text size="sm" fw={500} mb={6}>
						Send payment reminders
					</Text>
					<Group gap="xs">
						<Select
							style={{ flex: "1 1 130px" }}
							data={["Every day", "Every weekday", "Every week", "Every month"]}
							defaultValue="Every weekday"
							allowDeselect={false}
							aria-label="Repeat"
						/>
						<Text size="sm" c="dimmed">
							at
						</Text>
						<TimeInput w={96} defaultValue="09:00" aria-label="Time" />
						<Select
							style={{ flex: "1 1 130px" }}
							data={["Europe/Lisbon", "Europe/London", "Europe/Madrid"]}
							defaultValue="Europe/Lisbon"
							allowDeselect={false}
							searchable
							aria-label="Time zone"
						/>
					</Group>
				</Box>
				<Box>
					<Text size="xs" fw={500} mb={4}>
						Next runs
					</Text>
					<Stack gap={2}>
						{scheduleInputNextRuns.map((run) => (
							<Text key={run} size="sm" style={{ fontVariantNumeric: "tabular-nums" }}>
								{run}
							</Text>
						))}
					</Stack>
				</Box>
				<Group gap={6}>
					<Text size="xs" c="dimmed">
						As cron
					</Text>
					<Code>0 9 * * 1-5</Code>
					<Anchor component="button" size="xs">
						Edit as cron
					</Anchor>
				</Group>
			</Stack>
		</Card>
	);
}

const dateRangePresetsOptions: DatePickerPreset<"range">[] = [
	{ label: "Today", value: ["2026-11-24", "2026-11-24"] },
	{ label: "Last 7 days", value: ["2026-11-18", "2026-11-24"] },
	{ label: "Last 30 days", value: ["2026-10-26", "2026-11-24"] },
	{ label: "This month", value: ["2026-11-01", "2026-11-24"] },
	{ label: "Last quarter", value: ["2026-07-01", "2026-09-30"] },
];

function DateRangePresets() {
	return (
		<Paper withBorder shadow="md" p="sm" w="fit-content" maw="100%">
			<DatePicker
				type="range"
				presets={dateRangePresetsOptions}
				defaultDate="2026-11-01"
				defaultValue={["2026-10-26", "2026-11-24"]}
			/>
			<Checkbox mt="sm" size="xs" defaultChecked label="Compare with Sep 26 – Oct 25" />
			<Group justify="flex-end" gap="xs" mt="sm">
				<Button size="xs" variant="default">
					Cancel
				</Button>
				<Button size="xs">Apply</Button>
			</Group>
		</Paper>
	);
}

const relationSelectOptions: { id: string; name: string; initials: string; detail: string; color?: MantineColor }[] = [
	{ id: "cus_8121", name: "Brightwater Foods", initials: "BF", detail: "Porto" },
	{ id: "cus_3307", name: "Brigham Robotics", initials: "BR", detail: "Leeds", color: "blue" },
	{ id: "cus_5520", name: "Abrigo Seguros", initials: "AS", detail: "archived", color: "gray" },
];

function RelationSelect() {
	const combobox = useCombobox({ opened: true });

	return (
		<Box mih={340} maw={360}>
			<Combobox store={combobox} withinPortal={false}>
				<Combobox.Target>
					<TextInput
						label="Customer"
						defaultValue="brig"
						leftSection={<TbSearch />}
						rightSection={<Combobox.Chevron />}
						rightSectionPointerEvents="none"
					/>
				</Combobox.Target>
				<Combobox.Dropdown>
					<Combobox.Options>
						{relationSelectOptions.map((option, index) => (
							<Combobox.Option
								key={option.id}
								value={option.id}
								bg={index === 0 ? "var(--mantine-color-default-hover)" : undefined}
							>
								<Group gap="sm" wrap="nowrap">
									<Avatar size={28} radius="sm" color={option.color}>
										{option.initials}
									</Avatar>
									<Box miw={0}>
										<Highlight highlight="brig" size="sm">
											{option.name}
										</Highlight>
										<Text size="xs" c="dimmed">
											<Text span inherit ff="monospace">
												{option.id}
											</Text>{" "}
											· {option.detail}
										</Text>
									</Box>
								</Group>
							</Combobox.Option>
						))}
						<Divider my={4} />
						<Combobox.Option value="create">
							<Group gap="xs" wrap="nowrap" c="var(--mantine-color-anchor)">
								<TbPlus />
								<Text size="sm" inherit>
									Create customer "brig"
								</Text>
							</Group>
						</Combobox.Option>
					</Combobox.Options>
				</Combobox.Dropdown>
			</Combobox>
		</Box>
	);
}

interface UploadQueueFile {
	name: string;
	type: string;
	size: string;
	state: "done" | "uploading" | "error" | "waiting";
	progress?: number;
	message?: string;
}

const uploadQueueFiles: UploadQueueFile[] = [
	{ name: "dn-4471.pdf", type: "PDF", size: "1.2 MB", state: "done" },
	{ name: "dn-4472.pdf", type: "PDF", size: "2.4 of 3.8 MB", state: "uploading", progress: 64 },
	{
		name: "damage-01.heic",
		type: "HEIC",
		size: "6.1 MB",
		state: "error",
		message: "HEIC isn't supported. Export the photo as JPG.",
	},
	{
		name: "scan-batch-nov.pdf",
		type: "PDF",
		size: "48 MB",
		state: "error",
		message: "Over 20 MB. Split the scan into smaller files.",
	},
	{ name: "damage-02.jpg", type: "JPG", size: "2.9 MB", state: "waiting" },
];

function UploadQueue() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Paper withBorder p="lg" style={{ borderStyle: "dashed" }}>
					<Stack gap={6} align="center" ta="center">
						<ThemeIcon variant="light" size="lg">
							<TbUpload />
						</ThemeIcon>
						<Text size="sm">
							<Text span inherit fw={600}>
								Drop delivery notes here
							</Text>{" "}
							or{" "}
							<Anchor component="button" inherit>
								browse
							</Anchor>
						</Text>
						<Text size="xs" c="dimmed">
							PDF or JPG, up to 20 MB each
						</Text>
					</Stack>
				</Paper>
				<Box>
					{uploadQueueFiles.map((file, index) => (
						<Group
							key={file.name}
							gap="sm"
							wrap="nowrap"
							align="flex-start"
							py="xs"
							style={index > 0 ? { borderTop: "1px solid var(--mantine-color-default-border)" } : undefined}
						>
							<ThemeIcon variant="default" size={34} fz={9} fw={700}>
								{file.type}
							</ThemeIcon>
							<Box miw={0} style={{ flex: 1 }}>
								<Group justify="space-between" wrap="nowrap" gap="xs">
									<Text size="xs" ff="monospace" truncate>
										{file.name}
									</Text>
									<Text size="xs" c="dimmed" style={{ whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
										{file.size}
									</Text>
								</Group>
								{file.state === "uploading" && <Progress value={file.progress ?? 0} size="xs" mt={8} />}
								{file.state === "error" && (
									<Text size="xs" c="red" mt={2}>
										{file.message}
									</Text>
								)}
								{file.state === "waiting" && (
									<Text size="xs" c="dimmed" mt={2}>
										Waiting
									</Text>
								)}
							</Box>
							{file.state === "done" ? (
								<ThemeIcon variant="transparent" color="green" size="sm" aria-label="Uploaded">
									<TbCheck />
								</ThemeIcon>
							) : (
								<ActionIcon variant="subtle" color="gray" size="sm" aria-label="Remove file">
									<TbX />
								</ActionIcon>
							)}
						</Group>
					))}
				</Box>
				<Group justify="space-between">
					<Text size="xs" c="dimmed">
						2 files need attention
					</Text>
					<Anchor component="button" size="xs">
						Clear errors
					</Anchor>
				</Group>
			</Stack>
		</Card>
	);
}

const importWizardColumns = [
	{ column: "Company Name", example: "Brightwater Foods", target: "Name" },
	{ column: "VAT", example: "PT509876543", target: "Tax ID", monospace: true },
	{ column: "E-mail", example: "ap@brightwater.pt", target: "Billing email" },
	{ column: "Country", example: "Portugal", target: "Country", warning: "38 not recognised" },
	{ column: "Notes", example: "Pays by bank transfer", target: "Don't import", skipped: true },
];

const importWizardTargets = ["Name", "Tax ID", "Billing email", "Country", "Phone", "Don't import"];

function ImportWizard() {
	return (
		<Card withBorder>
			<Stack gap="lg">
				<Stepper active={1} size="xs" contentPadding={0}>
					<Stepper.Step label="Upload" />
					<Stepper.Step label="Map columns" />
					<Stepper.Step label="Review" />
					<Stepper.Step label="Import" />
				</Stepper>
				<Group justify="space-between" wrap="nowrap">
					<Group gap="sm" wrap="nowrap">
						<ThemeIcon variant="default" size={36} fz={9} fw={700}>
							CSV
						</ThemeIcon>
						<Box>
							<Text size="sm" fw={600}>
								customers-november.csv
							</Text>
							<Text size="xs" c="dimmed">
								1,204 rows
							</Text>
						</Box>
					</Group>
					<Anchor component="button" size="xs">
						Replace file
					</Anchor>
				</Group>
				<Table.ScrollContainer minWidth={520}>
					<Table verticalSpacing="xs">
						<Table.Thead>
							<Table.Tr>
								<Table.Th>Column in file</Table.Th>
								<Table.Th>Example</Table.Th>
								<Table.Th>Import as</Table.Th>
								<Table.Th />
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							{importWizardColumns.map((row) => (
								<Table.Tr key={row.column}>
									<Table.Td fw={600} c={row.skipped ? "dimmed" : undefined}>
										{row.column}
									</Table.Td>
									<Table.Td c="dimmed" ff={row.monospace ? "monospace" : undefined}>
										{row.example}
									</Table.Td>
									<Table.Td>
										<Select
											size="xs"
											w={160}
											data={importWizardTargets}
											defaultValue={row.target}
											allowDeselect={false}
											aria-label={`Import ${row.column} as`}
										/>
									</Table.Td>
									<Table.Td>
										{row.warning ? (
											<Text size="xs" c="var(--mantine-color-yellow-light-color)" style={{ whiteSpace: "nowrap" }}>
												{row.warning}
											</Text>
										) : (
											!row.skipped && (
												<ThemeIcon variant="transparent" color="green" size="sm" aria-label="Mapped">
													<TbCheck />
												</ThemeIcon>
											)
										)}
									</Table.Td>
								</Table.Tr>
							))}
						</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
				<Group justify="space-between">
					<Button variant="default">Back</Button>
					<Button rightSection={<TbArrowRight />}>Review 1,204 rows</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function DurationInput({ label, value, unit }: { label: string; value: number; unit: string }) {
	return (
		<NumberInput
			label={label}
			defaultValue={value}
			min={0}
			allowDecimal={false}
			hideControls
			rightSection={
				<NativeSelect
					variant="unstyled"
					data={["minutes", "hours", "days", "weeks"]}
					defaultValue={unit}
					aria-label="Unit"
					rightSectionWidth={28}
					styles={{ input: { width: 100 } }}
				/>
			}
			rightSectionWidth={100}
			rightSectionPointerEvents="all"
		/>
	);
}

const timezoneSelectOffsets: Record<string, string> = {
	"Europe/Lisbon": "UTC+0",
	"Europe/London": "UTC+0",
	"Europe/Madrid": "UTC+1",
	"Europe/Berlin": "UTC+1",
	"Europe/Helsinki": "UTC+2",
	"America/New_York": "UTC−5",
	"Asia/Tokyo": "UTC+9",
};

function TimezoneSelect() {
	return (
		<Box mih={320}>
			<Select
				label="Time zone"
				data={Object.keys(timezoneSelectOffsets)}
				defaultValue="Europe/Lisbon"
				searchable
				allowDeselect={false}
				defaultDropdownOpened
				comboboxProps={{ withinPortal: false }}
				renderOption={({ option }) => (
					<Group justify="space-between" wrap="nowrap" w="100%">
						<Text size="sm">{option.value}</Text>
						<Text size="xs" c="dimmed">
							{timezoneSelectOffsets[option.value]}
						</Text>
					</Group>
				)}
			/>
		</Box>
	);
}

const keyValueEditorPairs = [
	["order_ref", "PO-88213"],
	["warehouse", "porto-2"],
	["carrier_account", "ATL-0042"],
];

const keyValueEditorMonospace = { input: { fontFamily: "var(--mantine-font-family-monospace)" } };

function KeyValueEditor() {
	return (
		<Stack gap="xs">
			<Text size="sm" fw={500}>
				Metadata
			</Text>
			{keyValueEditorPairs.map(([key, value]) => (
				<Group key={key} gap="xs" wrap="nowrap">
					<TextInput w={150} defaultValue={key} aria-label="Key" styles={keyValueEditorMonospace} />
					<TextInput defaultValue={value} aria-label="Value" style={{ flex: 1 }} />
					<ActionIcon variant="subtle" color="gray" aria-label="Remove pair">
						<TbX />
					</ActionIcon>
				</Group>
			))}
			<Group gap="xs" wrap="nowrap">
				<TextInput w={150} placeholder="Key" aria-label="New key" styles={keyValueEditorMonospace} />
				<TextInput placeholder="Value" aria-label="New value" style={{ flex: 1 }} />
				<Box w={28} style={{ flexShrink: 0 }} />
			</Group>
			<Button variant="subtle" size="xs" leftSection={<TbPlus />} style={{ alignSelf: "flex-start" }}>
				Add pair
			</Button>
		</Stack>
	);
}

function MoneyInput({ label, value, currency }: { label: string; value: number; currency: string }) {
	return (
		<NumberInput
			label={label}
			defaultValue={value}
			thousandSeparator=","
			decimalScale={2}
			fixedDecimalScale
			hideControls
			rightSection={
				<NativeSelect
					variant="unstyled"
					data={["EUR", "USD", "GBP"]}
					defaultValue={currency}
					aria-label="Currency"
					rightSectionWidth={28}
					styles={{ input: { width: 80 } }}
				/>
			}
			rightSectionWidth={80}
			rightSectionPointerEvents="all"
			styles={{ input: { fontVariantNumeric: "tabular-nums" } }}
		/>
	);
}

function FormWizard() {
	return (
		<Paper withBorder h={540} style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
			<Group
				justify="space-between"
				wrap="nowrap"
				px="lg"
				py="sm"
				style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
			>
				<Text fw={600}>Add a carrier</Text>
				{
					<Stepper active={1} size="xs" contentPadding={0}>
						<Stepper.Step label="Company" />
						<Stepper.Step label="Contacts" />
						<Stepper.Step label="Rates" />
						<Stepper.Step label="Documents" />
					</Stepper>
				}
				<CloseButton aria-label="Close" />
			</Group>
			<ScrollArea style={{ flex: 1 }}>
				<Box maw={480} mx="auto" px="lg" py="xl">
					<Stack gap="md">
						<Box>
							<Title order={3}>Contacts</Title>
							<Text size="sm" c="dimmed">
								Who we call about pickups and who receives remittances.
							</Text>
						</Box>
						<TextInput label="Operations contact" defaultValue="Rui Mendes" />
						<TextInput label="Email" defaultValue="ops@atlas-haulage.pt" />
						<TextInput label="Phone" defaultValue="+351 912 345 678" />
						<TextInput label="Remittances go to" defaultValue="billing@atlas-haulage.pt" />
					</Stack>
				</Box>
			</ScrollArea>
			<Group
				justify="flex-end"
				gap="sm"
				px="lg"
				py="sm"
				style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}
			>
				{
					<>
						<Text size="xs" c="dimmed" mr="auto">
							Draft saved
						</Text>
						<Button variant="default">Back</Button>
						<Button>Next</Button>
					</>
				}
			</Group>
		</Paper>
	);
}

const templateEditorVariables = ["customer.name", "invoice.number", "invoice.amount", "invoice.dueDate"];

const templateEditorBody = `Hello {{customer.name}},

Invoice {{invoice.number}} for {{invoice.amount}} was due on {{invoice.dueDate}}. If you've already paid, you can ignore this email.

Halden Logistics`;

function TemplateEditor() {
	return (
		<Splitter h={520} style={frameStyle}>
			<Splitter.Pane defaultSize={45} min={30}>
				<ScrollArea h="100%">
					<Box p="lg">
						{
							<Stack gap="md">
								<Select
									label="Template"
									data={["Payment reminder", "Final notice", "Invoice sent"]}
									defaultValue="Payment reminder"
									allowDeselect={false}
								/>
								<TextInput label="Subject" defaultValue="Invoice {{invoice.number}} is overdue" />
								<Textarea
									label="Message"
									autosize
									minRows={7}
									defaultValue={templateEditorBody}
									styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
								/>
								<Box>
									<Text size="sm" fw={500} mb={6}>
										Insert a variable
									</Text>
									<Group gap={6}>
										{templateEditorVariables.map((variable) => (
											<Button key={variable} variant="default" size="compact-xs">
												<Text span inherit ff="monospace">{`{{${variable}}}`}</Text>
											</Button>
										))}
									</Group>
								</Box>
							</Stack>
						}
					</Box>
				</ScrollArea>
			</Splitter.Pane>
			<Splitter.Pane defaultSize={55} min={30}>
				<ScrollArea h="100%" bg="var(--mantine-color-default-hover)">
					<Box p="lg">
						{
							<Stack gap="sm">
								<Group justify="space-between" wrap="nowrap">
									<Text size="xs" c="dimmed">
										Preview with
									</Text>
									<Select
										size="xs"
										w={180}
										data={["Brightwater Foods", "Keller & Sons"]}
										defaultValue="Brightwater Foods"
										allowDeselect={false}
										aria-label="Preview customer"
									/>
								</Group>
								<Paper withBorder p="lg">
									<Text size="xs" c="dimmed">
										From Halden Logistics &lt;billing@halden.io&gt;
									</Text>
									<Text fw={600} mt={4}>
										Invoice HAL-2031 is overdue
									</Text>
									<Divider my="md" />
									<Stack gap="sm">
										<Text size="sm">Hello Brightwater Foods,</Text>
										<Text size="sm">
											Invoice HAL-2031 for {euros.format(4820)} was due on Nov 12. If you've already paid, you can
											ignore this email.
										</Text>
										<Button size="xs" style={{ alignSelf: "flex-start" }}>
											Pay invoice
										</Button>
										<Text size="sm">Halden Logistics</Text>
									</Stack>
								</Paper>
							</Stack>
						}
					</Box>
				</ScrollArea>
			</Splitter.Pane>
		</Splitter>
	);
}

function AddressInput() {
	return (
		<Stack gap="sm">
			<Select
				label="Country"
				data={["Portugal", "Spain", "United Kingdom", "United States"]}
				defaultValue="Portugal"
				allowDeselect={false}
				searchable
			/>
			<TextInput label="Address" defaultValue="Avenida da Boavista 1837" />
			<Group gap="sm" wrap="nowrap" align="flex-start">
				<TextInput label="Postal code" defaultValue="4100-133" w={120} />
				<TextInput label="City" defaultValue="Porto" style={{ flex: 1 }} />
			</Group>
		</Stack>
	);
}

export function FormsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<LineItemsEditor />
			</PreviewItem>
			<PreviewItem span="half">
				<ConditionBuilder />
			</PreviewItem>
			<PreviewItem span="half">
				<ScheduleInput />
			</PreviewItem>
			<PreviewItem span="half">
				<DateRangePresets />
			</PreviewItem>
			<PreviewItem span="half">
				<RelationSelect />
			</PreviewItem>
			<PreviewItem span="half">
				<UploadQueue />
			</PreviewItem>
			<PreviewItem span="half">
				<ImportWizard />
			</PreviewItem>
			<PreviewItem>
				<Stack gap="md">
					<DurationInput label="Payment terms" value={30} unit="days" />
					<DurationInput label="Escalate unanswered claims after" value={2} unit="hours" />
				</Stack>
			</PreviewItem>
			<PreviewItem>
				<TimezoneSelect />
			</PreviewItem>
			<PreviewItem>
				<KeyValueEditor />
			</PreviewItem>
			<PreviewItem>
				<Stack gap="md">
					<MoneyInput label="Credit limit" value={15000} currency="EUR" />
					<MoneyInput label="Minimum payout" value={100} currency="USD" />
				</Stack>
			</PreviewItem>
			<PreviewItem span="full">
				<FormWizard />
			</PreviewItem>
			<PreviewItem span="full">
				<TemplateEditor />
			</PreviewItem>
			<PreviewItem>
				<AddressInput />
			</PreviewItem>
			<PreviewItem>
				<Mentions
					label="Internal note"
					defaultValue="@[Mei Lin](mei) can you check #[CLM-312](CLM-312) before Friday? The carrier says the seal was intact."
					minRows={3}
				>
					<Mentions.Mention
						trigger="@"
						data={[people.jane, people.tomas, people.mei, people.sofia].map((person) => ({
							id: person.email.split("@")[0],
							display: person.name,
						}))}
					/>
					<Mentions.Mention
						trigger="#"
						data={["CLM-312", "CLM-311", "CLM-307", "HAL-2017", "HAL-2031"].map((id) => ({ id, display: id }))}
					/>
				</Mentions>
			</PreviewItem>
		</PreviewGrid>
	);
}

type SlaBadgeState = "ok" | "soon" | "late" | "done";

const slaBadgeColors = { ok: "gray", soon: "yellow", late: "red", done: "green" } satisfies Record<
	SlaBadgeState,
	MantineColor
>;

function SlaBadge({ state, children }: { state: SlaBadgeState; children: ReactNode }) {
	return (
		<Badge
			variant="light"
			color={slaBadgeColors[state]}
			size="sm"
			tt="none"
			fw={500}
			leftSection={state === "done" ? <TbCheck /> : <TbClock />}
		>
			{children}
		</Badge>
	);
}

interface KanbanBoardCard {
	id: string;
	title: string;
	customer: string;
	sla: { state: SlaBadgeState; label: string };
	assignee?: Person;
}

interface KanbanBoardColumn {
	name: string;
	count: string;
	over?: boolean;
	note?: string;
	more?: string;
	faded?: boolean;
	cards: KanbanBoardCard[];
}

const kanbanBoardColumns: KanbanBoardColumn[] = [
	{
		name: "New",
		count: "3",
		cards: [
			{
				id: "CLM-312",
				title: "Late delivery, perishables",
				customer: "Osaka Trading Co. · €2,300",
				sla: { state: "soon", label: "3h left" },
			},
			{
				id: "CLM-311",
				title: "Pallet crushed in transit",
				customer: "Brightwater Foods · €640",
				sla: { state: "ok", label: "1d left" },
			},
			{
				id: "CLM-313",
				title: "Missing carton",
				customer: "Fjord Outfitters · €180",
				sla: { state: "ok", label: "2d left" },
			},
		],
	},
	{
		name: "Investigating",
		count: "2 / 5",
		cards: [
			{
				id: "CLM-307",
				title: "Delivered to the wrong address",
				customer: "Brightwater Foods · €95",
				sla: { state: "soon", label: "2h left" },
				assignee: people.tomas,
			},
			{
				id: "CLM-305",
				title: "Water damage",
				customer: "Keller & Sons · €1,120",
				sla: { state: "ok", label: "1d left" },
				assignee: people.mei,
			},
		],
	},
	{
		name: "Waiting on carrier",
		count: "6 / 5",
		over: true,
		more: "4 more",
		cards: [
			{
				id: "CLM-298",
				title: "Broken seal on arrival",
				customer: "Keller & Sons · €3,400",
				sla: { state: "late", label: "1d late" },
				assignee: people.mei,
			},
			{
				id: "CLM-301",
				title: "Scratched furniture",
				customer: "Fjord Outfitters · €760",
				sla: { state: "ok", label: "3d left" },
				assignee: people.tomas,
			},
		],
	},
	{
		name: "Resolved",
		count: "12",
		note: "this week",
		more: "11 more",
		faded: true,
		cards: [
			{
				id: "CLM-290",
				title: "Crushed boxes",
				customer: "Osaka Trading Co.",
				sla: { state: "done", label: "Paid €410" },
				assignee: people.jane,
			},
		],
	},
];

function KanbanBoard() {
	return (
		<ScrollArea type="auto" offsetScrollbars>
			<Group align="flex-start" wrap="nowrap" gap="md">
				{kanbanBoardColumns.map((column) => (
					<Stack
						key={column.name}
						w={270}
						gap="xs"
						p="xs"
						bg="var(--mantine-color-default-hover)"
						style={{ flexShrink: 0, borderRadius: "var(--mantine-radius-default)" }}
					>
						<Group gap={6} px={4}>
							<Text size="sm" fw={600}>
								{column.name}
							</Text>
							<Text size="xs" fw={600} c={column.over ? "red" : "dimmed"}>
								{column.count}
							</Text>
							{column.note && (
								<Text size="xs" c="dimmed">
									{column.note}
								</Text>
							)}
						</Group>
						{column.cards.map((card) => (
							<Card key={card.id} withBorder padding="sm" opacity={column.faded ? 0.65 : 1}>
								<Group justify="space-between" wrap="nowrap">
									<Text size="xs" c="dimmed" ff="monospace">
										{card.id}
									</Text>
									<SlaBadge state={card.sla.state}>{card.sla.label}</SlaBadge>
								</Group>
								<Text size="sm" fw={600} mt={6}>
									{card.title}
								</Text>
								<Group justify="space-between" wrap="nowrap" mt={6}>
									<Text size="xs" c="dimmed" truncate>
										{card.customer}
									</Text>
									{card.assignee ? (
										<Avatar size={22} color={card.assignee.color}>
											{card.assignee.initials}
										</Avatar>
									) : (
										<ActionIcon variant="default" radius="xl" size={22} aria-label="Assign">
											<TbPlus size={12} />
										</ActionIcon>
									)}
								</Group>
							</Card>
						))}
						{column.more && (
							<Text size="xs" c="dimmed" ta="center" py={4}>
								{column.more}
							</Text>
						)}
					</Stack>
				))}
			</Group>
		</ScrollArea>
	);
}

interface AutomationRuleEditorStepProps {
	label: string;
	children: ReactNode;
}

function AutomationRuleEditorStep({ label, children }: AutomationRuleEditorStepProps) {
	return (
		<Group align="flex-start" wrap="nowrap" gap="sm">
			<Text size="sm" fw={600} w={44} pt={4} style={{ flexShrink: 0 }}>
				{label}
			</Text>
			<Box miw={0} style={{ flex: 1 }}>
				{children}
			</Box>
		</Group>
	);
}

function AutomationRuleEditorAction({ number, children }: { number: number; children: ReactNode }) {
	return (
		<Group gap="xs">
			<ThemeIcon variant="light" size={20} radius="xl" fz="xs" fw={700}>
				{number}
			</ThemeIcon>
			{children}
		</Group>
	);
}

function AutomationRuleEditor() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group justify="space-between" align="flex-start" wrap="nowrap">
					<Box>
						<Title order={4}>Escalate large unpaid invoices</Title>
						<Text size="xs" c="dimmed">
							Draft
						</Text>
					</Box>
					<Switch label="Off" />
				</Group>
				<Stack gap="md" p="md" style={frameStyle}>
					<AutomationRuleEditorStep label="When">
						<Group gap="xs">
							<Select
								size="xs"
								w={170}
								data={["An invoice becomes", "A claim becomes", "A customer is created"]}
								defaultValue="An invoice becomes"
								allowDeselect={false}
								aria-label="Trigger"
							/>
							<Select
								size="xs"
								w={110}
								data={["Overdue", "Paid", "Void"]}
								defaultValue="Overdue"
								allowDeselect={false}
								aria-label="State"
							/>
						</Group>
					</AutomationRuleEditorStep>
					<AutomationRuleEditorStep label="If">
						<Group gap="xs">
							<Pill size="md">
								<Text span inherit c="dimmed">
									Amount over{" "}
								</Text>
								€5,000
							</Pill>
							<Pill size="md">
								<Text span inherit c="dimmed">
									Customer isn't on{" "}
								</Text>
								a payment plan
							</Pill>
							<Button variant="subtle" size="compact-xs" leftSection={<TbPlus />}>
								Condition
							</Button>
						</Group>
					</AutomationRuleEditorStep>
					<AutomationRuleEditorStep label="Then">
						<Stack gap="xs">
							<AutomationRuleEditorAction number={1}>
								<Text size="sm">Assign to</Text>
								<Select
									size="xs"
									w={140}
									data={["Finance team", "Jane Okafor", "Mei Lin"]}
									defaultValue="Finance team"
									allowDeselect={false}
									aria-label="Assignee"
								/>
							</AutomationRuleEditorAction>
							<AutomationRuleEditorAction number={2}>
								<Text size="sm">Email the customer</Text>
								<Select
									size="xs"
									w={130}
									data={["Final notice", "Payment reminder"]}
									defaultValue="Final notice"
									allowDeselect={false}
									aria-label="Email template"
								/>
							</AutomationRuleEditorAction>
							<AutomationRuleEditorAction number={3}>
								<Text size="sm">After</Text>
								<NumberInput size="xs" w={80} defaultValue={7} suffix=" days" hideControls aria-label="Delay" />
								<Text size="sm">post in</Text>
								<Select
									size="xs"
									w={110}
									data={["#finance", "#claims", "#ops"]}
									defaultValue="#finance"
									allowDeselect={false}
									aria-label="Channel"
									styles={{ input: { fontFamily: "var(--mantine-font-family-monospace)" } }}
								/>
							</AutomationRuleEditorAction>
							<Button variant="subtle" size="compact-xs" leftSection={<TbPlus />} style={{ alignSelf: "flex-start" }}>
								Action
							</Button>
						</Stack>
					</AutomationRuleEditorStep>
				</Stack>
				<Alert variant="light" color="blue" icon={<TbInfoCircle />} p="sm">
					<Text size="xs">
						In the last 30 days this rule would have run{" "}
						<Text span inherit fw={600}>
							4 times
						</Text>
						.{" "}
						<Anchor component="button" inherit>
							See which invoices
						</Anchor>
					</Text>
				</Alert>
				<Group justify="flex-end" gap="sm">
					<Button variant="default">Save draft</Button>
					<Button>Turn on</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function ReviewQueueKey({ keys, action }: { keys: string[]; action: string }) {
	return (
		<Group gap={4} wrap="nowrap">
			{keys.map((key) => (
				<Kbd key={key} size="xs">
					{key}
				</Kbd>
			))}
			<Text size="xs" c="dimmed">
				{action}
			</Text>
		</Group>
	);
}

function ReviewQueue() {
	return (
		<Panel
			flush
			title="Credit note requests"
			actions={
				<Text size="xs" c="dimmed" style={{ whiteSpace: "nowrap" }}>
					12 of 40
				</Text>
			}
		>
			<Stack gap="md" p="md">
				<Group justify="space-between" wrap="nowrap">
					<Text size="sm">
						<Text span inherit fw={600}>
							{euros.format(640)}
						</Text>{" "}
						<Text span inherit c="dimmed">
							on
						</Text>{" "}
						<Anchor inherit ff="monospace">
							HAL-2017
						</Anchor>
					</Text>
					<Text size="xs" c="dimmed">
						<RelativeTime date={ago({ days: 2 })} />
					</Text>
				</Group>
				<DataList size="sm">
					<DataList.Item>
						<DataList.ItemLabel>Customer</DataList.ItemLabel>
						<DataList.ItemValue>Keller &amp; Sons</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Requested by</DataList.ItemLabel>
						<DataList.ItemValue>{people.mei.name}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Reason</DataList.ItemLabel>
						<DataList.ItemValue>Two pallets arrived damaged. Photos attached.</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Attached</DataList.ItemLabel>
						<DataList.ItemValue>
							<Anchor inherit>2 photos</Anchor>, <Anchor inherit>delivery note</Anchor>
						</DataList.ItemValue>
					</DataList.Item>
				</DataList>
				<Select
					placeholder="Reason, if you reject"
					data={["Not covered by the contract", "Reported too late", "Duplicate request"]}
					aria-label="Rejection reason"
				/>
				<Group justify="space-between" gap="sm">
					<Group gap="sm">
						<ReviewQueueKey keys={["J", "K"]} action="move" />
						<ReviewQueueKey keys={["A"]} action="approve" />
						<ReviewQueueKey keys={["R"]} action="reject" />
					</Group>
					<Group gap="xs">
						<Button variant="default">Reject</Button>
						<Button>Approve</Button>
					</Group>
				</Group>
			</Stack>
		</Panel>
	);
}

function ApprovalChain() {
	return (
		<Card withBorder>
			<Stack gap="lg">
				<Box>
					<Title order={4}>Refund of €2,300.00 to Osaka Trading Co.</Title>
					<Text size="xs" c="dimmed">
						Requested by {people.mei.name} for{" "}
						<Text span inherit ff="monospace">
							CLM-312
						</Text>
					</Text>
				</Box>
				<Timeline active={1} bulletSize={22} lineWidth={2}>
					<Timeline.Item bullet={<TbCheck size={12} />} title="Team lead">
						<Text size="sm">Approved by {people.tomas.name}</Text>
						<Text size="xs" c="dimmed">
							Yesterday
						</Text>
					</Timeline.Item>
					<Timeline.Item bullet={<TbClock size={12} />} title="Finance">
						<Text size="sm" fw={600}>
							Waiting for {people.jane.name}
						</Text>
					</Timeline.Item>
					<Timeline.Item title="CFO">
						<Text size="sm" c="dimmed">
							Added because the refund is over €2,000
						</Text>
					</Timeline.Item>
				</Timeline>
				<Group justify="flex-end" gap="sm">
					<Button variant="default">Reject</Button>
					<Button>Approve</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const changeRequestCardLines = [
	{ removed: true, text: 'schedule: "weekly"' },
	{ removed: false, text: 'schedule: "daily"' },
	{ removed: true, text: "minimumAmount: 500" },
	{ removed: false, text: "minimumAmount: 100" },
];

function ChangeRequestCard() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group align="flex-start" wrap="nowrap" gap="sm">
					<Avatar color={people.tomas.color}>{people.tomas.initials}</Avatar>
					<Box>
						<Text size="sm">
							<Text span inherit fw={600}>
								{people.tomas.name}
							</Text>{" "}
							wants to change{" "}
							<Text span inherit fw={600}>
								Payouts
							</Text>{" "}
							in production
						</Text>
						<Text size="xs" c="dimmed">
							<RelativeTime date={ago({ minutes: 20 })} />
						</Text>
					</Box>
				</Group>
				<Box style={frameStyle}>
					{changeRequestCardLines.map((line) => {
						const color = line.removed ? "red" : "green";
						return (
							<Text
								key={line.text}
								size="xs"
								ff="monospace"
								px="sm"
								py={3}
								bg={`var(--mantine-color-${color}-light)`}
								c={`var(--mantine-color-${color}-light-color)`}
							>
								{line.removed ? "-" : "+"} {line.text}
							</Text>
						);
					})}
				</Box>
				<Text size="xs" c="dimmed">
					"Daily payouts so carriers get paid faster during peak season."
				</Text>
				<Group justify="flex-end" gap="xs">
					<Button variant="default">Comment</Button>
					<Button variant="outline" color="red">
						Reject
					</Button>
					<Button>Approve and apply</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const configPromotionSettings = [
	{
		name: "Reminders",
		key: "invoicing.reminders",
		staging: "3 per invoice",
		production: "2 per invoice",
		selected: true,
	},
	{ name: "PDF layout", key: "invoicing.pdfTemplate", staging: "Compact", production: "Classic", selected: true },
	{ name: "New invoice editor", key: "flags.new-invoice-editor", staging: "On", production: "Off", selected: false },
	{
		name: "Webhook signing secret",
		key: "webhooks.signingSecret",
		staging: "••••a91f",
		production: "••••3c07",
		selected: true,
		secret: true,
	},
];

function ConfigPromotion() {
	return (
		<Panel
			flush
			title={
				<>
					Staging <TbArrowRight aria-label="to" style={{ verticalAlign: "middle" }} /> Production
				</>
			}
			actions={<Button size="xs">Request promotion of 3</Button>}
			footer={
				<Text size="xs" c="dimmed">
					Production changes need a second approval.
				</Text>
			}
		>
			<Table.ScrollContainer minWidth={480}>
				<Table horizontalSpacing="md" verticalSpacing="xs">
					<Table.Thead>
						<Table.Tr>
							<Table.Th w={40}>
								<Checkbox indeterminate aria-label="Select all settings" />
							</Table.Th>
							<Table.Th>Setting</Table.Th>
							<Table.Th>Staging</Table.Th>
							<Table.Th>Production</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{configPromotionSettings.map((setting) => (
							<Table.Tr key={setting.key} bg={setting.selected ? "var(--mantine-primary-color-light)" : undefined}>
								<Table.Td>
									<Checkbox defaultChecked={setting.selected} aria-label={`Promote ${setting.name}`} />
								</Table.Td>
								<Table.Td>
									<Text size="sm" fw={500}>
										{setting.name}
									</Text>
									<Text size="xs" c="dimmed" ff="monospace">
										{setting.key}
									</Text>
								</Table.Td>
								<Table.Td>
									<Text size="sm" fw={500} ff={setting.secret ? "monospace" : undefined}>
										{setting.staging}
									</Text>
								</Table.Td>
								<Table.Td>
									<Text size="sm" c="dimmed" ff={setting.secret ? "monospace" : undefined}>
										{setting.production}
									</Text>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const assigneeSelectPeople = [
	{ person: people.tomas, open: 4, busy: false },
	{ person: people.mei, open: 12, busy: true },
];

function AssigneeSelect() {
	const combobox = useCombobox({ opened: true });

	return (
		<Box mih={330} maw={340}>
			<Combobox store={combobox} withinPortal={false}>
				<Combobox.Target>
					<TextInput
						label="Owner"
						placeholder="Search people or teams"
						leftSection={<TbSearch />}
						rightSection={<Combobox.Chevron />}
						rightSectionPointerEvents="none"
					/>
				</Combobox.Target>
				<Combobox.Dropdown>
					<Combobox.Options>
						<Combobox.Option value="me" bg="var(--mantine-color-default-hover)">
							<Group gap="sm" wrap="nowrap">
								<Avatar size={24}>{people.jane.initials}</Avatar>
								<Text size="sm">Assign to me</Text>
							</Group>
						</Combobox.Option>
						<Combobox.Group label="People">
							{assigneeSelectPeople.map(({ person, open, busy }) => (
								<Combobox.Option key={person.email} value={person.email}>
									<Group gap="sm" wrap="nowrap">
										<Avatar size={24} color={person.color}>
											{person.initials}
										</Avatar>
										<Text size="sm" style={{ flex: 1 }}>
											{person.name}
										</Text>
										<Text size="xs" c={busy ? "var(--mantine-color-yellow-light-color)" : "dimmed"}>
											{open} open
										</Text>
									</Group>
								</Combobox.Option>
							))}
						</Combobox.Group>
						<Combobox.Group label="Teams">
							<Combobox.Option value="finance">
								<Group gap="sm" wrap="nowrap">
									<Avatar size={24} radius="sm" color="violet">
										<TbUsers size={14} />
									</Avatar>
									<Text size="sm" style={{ flex: 1 }}>
										Finance team
									</Text>
									<Text size="xs" c="dimmed">
										Takes turns
									</Text>
								</Group>
							</Combobox.Option>
						</Combobox.Group>
					</Combobox.Options>
				</Combobox.Dropdown>
			</Combobox>
		</Box>
	);
}

const extractionReviewFields = [
	{ label: "Supplier", value: "Atlas Haulage, Lda", confidence: 99 },
	{ label: "Invoice number", value: "FT 2026/1187", confidence: 98, monospace: true },
	{ label: "Issue date", value: "Nov 18, 2026", confidence: 94 },
	{
		label: "Total",
		value: "€1,525.20",
		confidence: 62,
		selected: true,
		note: "Read as 1.525,20 €. Check the decimal separator.",
	},
	{ label: "VAT number", value: "PT514220981", confidence: 91, monospace: true },
	{ label: "IBAN", value: "", confidence: undefined, placeholder: "Not found on the document" },
];

function extractionReviewConfidenceColor(confidence: number | undefined) {
	if (confidence === undefined) return "dimmed";
	return confidence >= 90 ? "var(--mantine-color-green-light-color)" : "var(--mantine-color-yellow-light-color)";
}

function ExtractionReviewSource({ children }: { children: ReactNode }) {
	return (
		<Box component="span" bg="var(--mantine-color-yellow-light)" px={2} style={{ borderRadius: 2 }}>
			{children}
		</Box>
	);
}

function ExtractionReviewLine({ width }: { width: string }) {
	return <Box h={6} w={width} bg="var(--mantine-color-default-border)" style={{ borderRadius: 3 }} />;
}

function ExtractionReview() {
	return (
		<Card withBorder padding={0}>
			<Grid type="container" breakpoints={previewBreakpoints} gap={0}>
				<Grid.Col span={{ base: 12, md: 6 }} bg="var(--mantine-color-default-hover)">
					<Stack gap="sm" p="lg" h="100%">
						<Paper shadow="xs" p="md" fz="xs">
							<Stack gap={8}>
								<Group justify="space-between" wrap="nowrap">
									<Text inherit fw={700}>
										ATLAS HAULAGE, LDA
									</Text>
									<ExtractionReviewSource>Fatura FT 2026/1187</ExtractionReviewSource>
								</Group>
								<Text inherit>
									Rua do Freixo 210, 4300-219 Porto · NIF <ExtractionReviewSource>514 220 981</ExtractionReviewSource>
								</Text>
								<Group justify="space-between" wrap="nowrap">
									<Text inherit>Cliente: Halden Logistics</Text>
									<Text inherit>
										Data: <ExtractionReviewSource>18/11/2026</ExtractionReviewSource>
									</Text>
								</Group>
								<Divider />
								<Group justify="space-between" wrap="nowrap">
									<Text inherit>Transporte Porto → Madrid, 2 paletes</Text>
									<Text inherit>1.240,00</Text>
								</Group>
								<Divider />
								<Group justify="space-between">
									<Text inherit>Subtotal</Text>
									<Text inherit>1.240,00</Text>
								</Group>
								<Group justify="space-between">
									<Text inherit>IVA 23%</Text>
									<Text inherit>285,20</Text>
								</Group>
								<Group justify="space-between">
									<Text inherit fw={700}>
										Total
									</Text>
									<Mark fw={700}>1.525,20 €</Mark>
								</Group>
								<ExtractionReviewLine width="70%" />
								<ExtractionReviewLine width="45%" />
							</Stack>
						</Paper>
						<Group justify="space-between">
							<Text size="xs" c="dimmed" ff="monospace">
								atlas-ft-2026-1187.pdf
							</Text>
							<Text size="xs" c="dimmed">
								Page 1 of 1
							</Text>
						</Group>
					</Stack>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Stack gap="md" p="lg">
						<Title order={4}>Supplier invoice</Title>
						<Stack gap="sm">
							{extractionReviewFields.map((field) => (
								<Box key={field.label}>
									<Group gap="sm" wrap="nowrap">
										<Text size="xs" fw={500} w={104} style={{ flexShrink: 0 }}>
											{field.label}
										</Text>
										<TextInput
											size="xs"
											defaultValue={field.value}
											placeholder={field.placeholder}
											aria-label={field.label}
											style={{ flex: 1 }}
											styles={{
												input: {
													...(field.monospace && { fontFamily: "var(--mantine-font-family-monospace)" }),
													...(field.selected && { borderColor: "var(--mantine-primary-color-filled)" }),
												},
											}}
										/>
										<Text
											size="xs"
											fw={600}
											w={32}
											ta="right"
											c={extractionReviewConfidenceColor(field.confidence)}
											style={{ flexShrink: 0 }}
										>
											{field.confidence === undefined ? "–" : `${field.confidence}%`}
										</Text>
									</Group>
									{field.note && (
										<Text size="xs" c="var(--mantine-color-yellow-light-color)" mt={4} ml={116}>
											{field.note}
										</Text>
									)}
								</Box>
							))}
						</Stack>
						<Group justify="space-between">
							<Button variant="default">Skip</Button>
							<Button rightSection={<TbArrowRight />}>Confirm and next</Button>
						</Group>
					</Stack>
				</Grid.Col>
			</Grid>
		</Card>
	);
}

interface ResourceTimelineBar {
	label: string;
	start: number;
	end: number;
	kind?: "conflict" | "maintenance" | "unassigned";
	lower?: boolean;
	title?: string;
}

interface ResourceTimelineLane {
	name: string;
	detail: string;
	monospace?: boolean;
	tall?: boolean;
	bars: ResourceTimelineBar[];
}

const resourceTimelineLanes: ResourceTimelineLane[] = [
	{
		name: "PT-41-KD",
		detail: "Truck · Rui Mendes",
		monospace: true,
		bars: [
			{ label: "Porto → Braga", start: 7, end: 9.5 },
			{ label: "Braga → Viana", start: 10, end: 12.5 },
			{ label: "Viana → Porto", start: 14, end: 17 },
		],
	},
	{
		name: "Van 12",
		detail: "Ana Sousa",
		monospace: true,
		tall: true,
		bars: [
			{ label: "Porto centre · 8 stops", start: 8, end: 11 },
			{ label: "Gaia · 5 stops", start: 12.5, end: 14.5 },
			{
				label: "Matosinhos pickup",
				start: 13.5,
				end: 15,
				kind: "conflict",
				lower: true,
				title: "Overlaps Gaia from 13:30 to 14:30",
			},
		],
	},
	{
		name: "PT-77-RA",
		detail: "Truck · Joana Lima",
		monospace: true,
		bars: [
			{ label: "Maintenance", start: 6, end: 12, kind: "maintenance" },
			{ label: "Porto → Madrid", start: 13, end: 17.5 },
		],
	},
	{
		name: "Unassigned",
		detail: "2 deliveries",
		bars: [
			{ label: "Keller", start: 9, end: 10, kind: "unassigned" },
			{ label: "Osaka", start: 15, end: 16, kind: "unassigned" },
		],
	},
];

const resourceTimelineStart = 6;
const resourceTimelineHours = 12;
const resourceTimelineNow = 14 + 20 / 60;

function resourceTimelinePosition(hour: number) {
	return `${((hour - resourceTimelineStart) / resourceTimelineHours) * 100}%`;
}

function resourceTimelineBarStyle(kind: ResourceTimelineBar["kind"]): CSSProperties {
	switch (kind) {
		case "conflict":
			return {
				background: "var(--mantine-color-red-light)",
				color: "var(--mantine-color-red-light-color)",
				border: "1px solid var(--mantine-color-red-filled)",
			};
		case "maintenance":
			return {
				background: "repeating-linear-gradient(135deg, var(--mantine-color-default-hover) 0 6px, transparent 6px 12px)",
				color: "var(--mantine-color-dimmed)",
				border: "1px solid var(--mantine-color-default-border)",
			};
		case "unassigned":
			return {
				background: "transparent",
				color: "var(--mantine-color-dimmed)",
				border: "1px dashed var(--mantine-color-default-border)",
			};
		default:
			return {
				background: "var(--mantine-primary-color-light)",
				color: "var(--mantine-primary-color-light-color)",
				border: "1px solid transparent",
			};
	}
}

const resourceTimelineLabelWidth = 150;
const resourceTimelineRowBorder = "1px solid var(--mantine-color-default-border)";

function ResourceTimeline() {
	return (
		<Panel
			flush
			title="Deliveries"
			description="Tuesday, Nov 24"
			actions={
				<>
					<SegmentedControl size="xs" data={["Day", "Week"]} defaultValue="Day" />
					<Button size="xs" variant="default">
						Today
					</Button>
				</>
			}
		>
			<ScrollArea type="auto">
				<Box miw={780} pb="xs">
					<Group gap={0} wrap="nowrap" h={32}>
						<Box w={resourceTimelineLabelWidth} style={{ flexShrink: 0 }} />
						<Box pos="relative" h="100%" mr="md" style={{ flex: 1 }}>
							{[6, 8, 10, 12, 14, 16, 18].map((hour, index, hours) => (
								<Text
									key={hour}
									size="xs"
									c="dimmed"
									pos="absolute"
									top={8}
									left={resourceTimelinePosition(hour)}
									style={{
										transform:
											index === 0 ? undefined : index === hours.length - 1 ? "translateX(-100%)" : "translateX(-50%)",
										fontVariantNumeric: "tabular-nums",
									}}
								>
									{`${String(hour).padStart(2, "0")}:00`}
								</Text>
							))}
						</Box>
					</Group>
					{resourceTimelineLanes.map((lane) => (
						<Group
							key={lane.name}
							gap={0}
							wrap="nowrap"
							h={lane.tall ? 68 : 44}
							style={{ borderTop: resourceTimelineRowBorder }}
						>
							<Box w={resourceTimelineLabelWidth} px="md" style={{ flexShrink: 0 }}>
								<Text size="xs" fw={600} ff={lane.monospace ? "monospace" : undefined}>
									{lane.name}
								</Text>
								<Text size="xs" c="dimmed" truncate>
									{lane.detail}
								</Text>
							</Box>
							<Box pos="relative" h="100%" mr="md" style={{ flex: 1 }}>
								{lane.bars.map((bar) => (
									<Box
										key={bar.label}
										title={bar.title}
										pos="absolute"
										top={bar.lower ? 36 : 9}
										h={24}
										left={resourceTimelinePosition(bar.start)}
										w={`${((bar.end - bar.start) / resourceTimelineHours) * 100}%`}
										px={8}
										fz="xs"
										fw={500}
										lh="22px"
										style={{
											...resourceTimelineBarStyle(bar.kind),
											borderRadius: "var(--mantine-radius-sm)",
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										{bar.label}
									</Box>
								))}
								<Box
									pos="absolute"
									top={0}
									bottom={0}
									w={2}
									left={resourceTimelinePosition(resourceTimelineNow)}
									bg="var(--mantine-color-red-filled)"
									aria-hidden
								/>
							</Box>
						</Group>
					))}
				</Box>
			</ScrollArea>
		</Panel>
	);
}

type ChecklistReviewResult = "pass" | "fail" | "na";

const checklistReviewItems: { requirement: string; result: ChecklistReviewResult; note?: string }[] = [
	{ requirement: "Insurance certificate valid until 2027", result: "pass" },
	{ requirement: "Licence number matches the transport registry", result: "pass" },
	{ requirement: "Vehicles under 10 years old", result: "fail", note: "Two trucks are from 2014." },
	{ requirement: "Hazardous goods permit", result: "na" },
];

const checklistReviewOptions = [
	{ value: "pass", label: "Pass" },
	{ value: "fail", label: "Fail" },
	{ value: "na", label: "N/A" },
];

function ChecklistReview() {
	return (
		<Card withBorder>
			<Stack gap="sm">
				<Title order={4}>Atlas Haulage onboarding</Title>
				<Box>
					{checklistReviewItems.map((item, index) => (
						<Group
							key={item.requirement}
							justify="space-between"
							align="flex-start"
							wrap="nowrap"
							py="sm"
							style={index > 0 ? { borderTop: "1px solid var(--mantine-color-default-border)" } : undefined}
						>
							<Box miw={0}>
								<Text size="sm">{item.requirement}</Text>
								{item.note && (
									<Text size="xs" c="red">
										{item.note}
									</Text>
								)}
							</Box>
							<SegmentedControl
								size="xs"
								data={checklistReviewOptions}
								defaultValue={item.result}
								color={item.result === "fail" ? "red" : undefined}
								style={{ flexShrink: 0 }}
							/>
						</Group>
					))}
				</Box>
				<Group justify="flex-end" gap="sm">
					<Button variant="default">Approve</Button>
					<Button>Request changes</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const taskListGroups = [
	{
		label: "Overdue",
		overdue: true,
		tasks: [{ title: "Call Brightwater Foods about an unpaid invoice", record: "HAL-2031", due: "Nov 20" }],
	},
	{
		label: "Today",
		overdue: false,
		tasks: [
			{ title: "Approve the refund to Osaka Trading Co.", record: "CLM-312", due: "Today" },
			{ title: "Review a credit note for Keller & Sons", record: "HAL-2017", due: "Today" },
		],
	},
	{
		label: "This week",
		overdue: false,
		tasks: [{ title: "Renew Atlas Haulage's insurance certificate", record: "CAR-014", due: "Fri" }],
	},
];

function TaskList() {
	return (
		<Panel title="Assigned to you">
			<Stack gap="md">
				{taskListGroups.map((group) => (
					<Box key={group.label}>
						<Text size="xs" fw={600} c={group.overdue ? "red" : "dimmed"} mb={6}>
							{group.label}
						</Text>
						<Stack gap="sm">
							{group.tasks.map((task) => (
								<Group key={task.title} gap="sm" wrap="nowrap" align="flex-start">
									<Checkbox aria-label={task.title} mt={2} />
									<Box miw={0} style={{ flex: 1 }}>
										<Text size="sm">{task.title}</Text>
										<Text size="xs" c="dimmed" ff="monospace">
											{task.record}
										</Text>
									</Box>
									<Text size="xs" c={group.overdue ? "red" : "dimmed"} style={{ whiteSpace: "nowrap" }}>
										{task.due}
									</Text>
								</Group>
							))}
						</Stack>
					</Box>
				))}
			</Stack>
		</Panel>
	);
}

const weekCalendarDays = [
	{ name: "Mon", date: 23, today: false },
	{ name: "Tue", date: 24, today: true },
	{ name: "Wed", date: 25, today: false },
	{ name: "Thu", date: 26, today: false },
	{ name: "Fri", date: 27, today: false },
];

const weekCalendarEvents = [
	{ day: 0, start: 9, end: 10.5, title: "Pickup at Keller & Sons", detail: "Dock 3" },
	{ day: 1, start: 13, end: 14, title: "Dock inspection", detail: "Porto warehouse" },
	{ day: 1, start: 15.5, end: 16, title: "Call with Atlas Haulage" },
	{ day: 2, start: 10, end: 11, title: "Quarterly review", detail: "Brightwater Foods" },
	{ day: 3, start: 8, end: 12, title: "Delivery window", detail: "Osaka Trading Co." },
	{ day: 4, start: 14, end: 15.5, title: "Carrier onboarding", detail: "Atlas Haulage" },
];

const weekCalendarFirstHour = 8;
const weekCalendarHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
const weekCalendarHourHeight = 44;
const weekCalendarNow = 14 + 20 / 60;
const weekCalendarColumns = "56px repeat(5, minmax(0, 1fr))";
const weekCalendarBorder = "1px solid var(--mantine-color-default-border)";

function WeekCalendar() {
	return (
		<Panel
			flush
			title="Nov 23 – 27"
			actions={
				<>
					<ActionIcon variant="default" aria-label="Previous week">
						<TbChevronLeft />
					</ActionIcon>
					<ActionIcon variant="default" aria-label="Next week">
						<TbChevronRight />
					</ActionIcon>
					<Button size="xs" variant="default">
						Today
					</Button>
				</>
			}
		>
			<ScrollArea type="auto">
				<Box miw={620}>
					<Box style={{ display: "grid", gridTemplateColumns: weekCalendarColumns, borderBottom: weekCalendarBorder }}>
						<Box />
						{weekCalendarDays.map((day) => (
							<Group key={day.name} gap={6} justify="center" py="xs">
								<Text size="xs" c="dimmed">
									{day.name}
								</Text>
								<Text
									size="sm"
									fw={600}
									w={26}
									h={26}
									lh="26px"
									ta="center"
									bg={day.today ? "var(--mantine-primary-color-filled)" : undefined}
									c={day.today ? "var(--mantine-primary-color-contrast)" : undefined}
									style={{ borderRadius: "50%" }}
								>
									{day.date}
								</Text>
							</Group>
						))}
					</Box>
					<Box style={{ display: "grid", gridTemplateColumns: weekCalendarColumns }}>
						<Box>
							{weekCalendarHours.map((hour) => (
								<Text key={hour} size="xs" c="dimmed" h={weekCalendarHourHeight} ta="right" pr="xs" pt={2}>
									{`${String(hour).padStart(2, "0")}:00`}
								</Text>
							))}
						</Box>
						{weekCalendarDays.map((day, dayIndex) => (
							<Box
								key={day.name}
								pos="relative"
								h={weekCalendarHours.length * weekCalendarHourHeight}
								style={{
									borderLeft: weekCalendarBorder,
									backgroundImage: "linear-gradient(var(--mantine-color-default-border) 1px, transparent 1px)",
									backgroundSize: `100% ${weekCalendarHourHeight}px`,
								}}
							>
								{weekCalendarEvents
									.filter((event) => event.day === dayIndex)
									.map((event) => (
										<Box
											key={event.title}
											pos="absolute"
											left={4}
											right={4}
											top={(event.start - weekCalendarFirstHour) * weekCalendarHourHeight + 2}
											h={(event.end - event.start) * weekCalendarHourHeight - 4}
											px={6}
											py={2}
											bg="var(--mantine-primary-color-light)"
											c="var(--mantine-primary-color-light-color)"
											style={{
												borderLeft: "3px solid var(--mantine-primary-color-filled)",
												borderRadius: "var(--mantine-radius-sm)",
												overflow: "hidden",
											}}
										>
											<Text size="xs" fw={600} truncate>
												{event.title}
											</Text>
											{event.detail && event.end - event.start >= 1 && (
												<Text size="xs" truncate opacity={0.8}>
													{event.detail}
												</Text>
											)}
										</Box>
									))}
								{day.today && (
									<Box
										pos="absolute"
										left={0}
										right={0}
										h={2}
										top={(weekCalendarNow - weekCalendarFirstHour) * weekCalendarHourHeight}
										bg="var(--mantine-color-red-filled)"
										aria-hidden
									/>
								)}
							</Box>
						))}
					</Box>
				</Box>
			</ScrollArea>
		</Panel>
	);
}

export function WorkflowsArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<KanbanBoard />
			</PreviewItem>
			<PreviewItem span="half">
				<AutomationRuleEditor />
			</PreviewItem>
			<PreviewItem span="half">
				<ReviewQueue />
			</PreviewItem>
			<PreviewItem>
				<ApprovalChain />
			</PreviewItem>
			<PreviewItem>
				<ChangeRequestCard />
			</PreviewItem>
			<PreviewItem span="half">
				<ConfigPromotion />
			</PreviewItem>
			<PreviewItem>
				<AssigneeSelect />
			</PreviewItem>
			<PreviewItem span="full">
				<ExtractionReview />
			</PreviewItem>
			<PreviewItem span="full">
				<ResourceTimeline />
			</PreviewItem>
			<PreviewItem>
				<ChecklistReview />
			</PreviewItem>
			<PreviewItem>
				<TaskList />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<WeekCalendar />
			</PreviewItem>
		</PreviewGrid>
	);
}

const operationsRowBorder = "1px solid var(--mantine-color-default-border)";

// Scheduled, Retrying and Canceled aren't in the shared statuses yet
const statusBadgeRows: { badge: ReactNode; meaning: string }[] = [
	{
		badge: (
			<Badge variant="light" color="violet" size="sm">
				Scheduled
			</Badge>
		),
		meaning: "Waiting for its start time",
	},
	{ badge: <StatusBadge status="queued" />, meaning: "Waiting for a worker" },
	{ badge: <StatusBadge status="running" />, meaning: "In progress" },
	{ badge: <StatusBadge status="succeeded" />, meaning: "Finished without errors" },
	{
		badge: (
			<Badge variant="light" color="yellow" size="sm">
				Retrying
			</Badge>
		),
		meaning: "Failed, will try again",
	},
	{ badge: <StatusBadge status="failed" />, meaning: "Out of attempts" },
	{
		badge: (
			<Badge variant="outline" color="gray" size="sm">
				Canceled
			</Badge>
		),
		meaning: "Stopped by a person",
	},
];

function StatusBadgeTable() {
	return (
		<Card withBorder padding={0}>
			<Table horizontalSpacing="md">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Status</Table.Th>
						<Table.Th>Means</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{statusBadgeRows.map((row) => (
						<Table.Tr key={row.meaning}>
							<Table.Td>{row.badge}</Table.Td>
							<Table.Td>
								<Text size="sm" c="dimmed">
									{row.meaning}
								</Text>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Card>
	);
}

interface RunTimelineStep {
	label: string;
	start: number;
	width: number;
	duration: string;
	result: "done" | "failed" | "skipped";
	error?: string;
}

const runTimelineSteps: RunTimelineStep[] = [
	{ label: "Load overdue invoices", start: 0, width: 4, duration: "120 ms", result: "done" },
	{ label: "Render 18 emails", start: 4, width: 27, duration: "840 ms", result: "done" },
	{
		label: "Send through Resend",
		start: 31,
		width: 68,
		duration: "2.1 s",
		result: "failed",
		error: "401 Unauthorized: API key is invalid or revoked",
	},
	{ label: "Mark invoices as reminded", start: 0, width: 0, duration: "Skipped", result: "skipped" },
];

const runTimelineResults = {
	done: { icon: <TbCheck />, color: "green" },
	failed: { icon: <TbX />, color: "red" },
	skipped: { icon: <TbMinus />, color: "gray" },
};

function RunTimeline() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group justify="space-between" align="flex-start" wrap="nowrap">
					<Stack gap={2} miw={0}>
						<Text size="xs" c="dimmed" ff="monospace">
							run_8f2c1a7e
						</Text>
						<Title order={4} ff="monospace">
							send-invoice-reminders
						</Title>
					</Stack>
					<Badge variant="light" color="yellow" leftSection={<TbRefresh />}>
						Retrying
					</Badge>
				</Group>
				<DataList
					orientation="vertical"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
						gap: "var(--mantine-spacing-sm)",
					}}
				>
					<DataList.Item>
						<DataList.ItemLabel>Started</DataList.ItemLabel>
						<DataList.ItemValue>Today, 09:00:04</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Attempt</DataList.ItemLabel>
						<DataList.ItemValue>2 of 5</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemLabel>Next attempt</DataList.ItemLabel>
						<DataList.ItemValue>In 4 minutes</DataList.ItemValue>
					</DataList.Item>
				</DataList>
				<Divider />
				<Box
					style={{
						display: "grid",
						gridTemplateColumns: "auto minmax(0, 1fr) minmax(60px, 30%) auto",
						alignItems: "center",
						columnGap: "var(--mantine-spacing-sm)",
						rowGap: "var(--mantine-spacing-xs)",
					}}
				>
					{runTimelineSteps.map((step) => (
						<Fragment key={step.label}>
							<ThemeIcon size="sm" radius="xl" variant="light" color={runTimelineResults[step.result].color}>
								{runTimelineResults[step.result].icon}
							</ThemeIcon>
							<Text
								size="sm"
								fw={step.result === "failed" ? 600 : undefined}
								c={step.result === "skipped" ? "dimmed" : undefined}
								truncate
							>
								{step.label}
							</Text>
							<Box h={6} pos="relative" bg="var(--mantine-color-default-hover)" style={{ borderRadius: 999 }}>
								{step.width > 0 && (
									<Box
										pos="absolute"
										top={0}
										bottom={0}
										left={`${step.start}%`}
										w={`${step.width}%`}
										bg={step.result === "failed" ? "red" : "var(--mantine-primary-color-filled)"}
										style={{ borderRadius: "inherit" }}
									/>
								)}
							</Box>
							<Text size="xs" c="dimmed" ff="monospace" ta="right">
								{step.duration}
							</Text>
							{step.error && (
								<Text size="xs" c="var(--mantine-color-red-text)" ff="monospace" style={{ gridColumn: "2 / -1" }}>
									{step.error}
								</Text>
							)}
						</Fragment>
					))}
				</Box>
				<Group justify="flex-end" gap="xs">
					<Button size="xs" variant="default">
						View logs
					</Button>
					<Button size="xs" leftSection={<TbRefresh />}>
						Retry now
					</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function AuditLogStrong({ children }: { children: ReactNode }) {
	return (
		<Text span inherit fw={600}>
			{children}
		</Text>
	);
}

interface AuditLogRowProps {
	avatar: ReactNode;
	when: string;
	ip?: string;
	details?: ReactNode;
	children: ReactNode;
}

function AuditLogRow({ avatar, when, ip, details, children }: AuditLogRowProps) {
	return (
		<Box px="md" py="sm" style={{ borderTop: operationsRowBorder }}>
			<Group gap="sm" wrap="nowrap" align="flex-start">
				{avatar}
				<Box miw={0} style={{ flex: 1 }}>
					<Text size="sm">{children}</Text>
					<Text size="xs" c="dimmed">
						{when}
						{ip && (
							<>
								{" · "}
								<Text span inherit ff="monospace">
									{ip}
								</Text>
							</>
						)}
					</Text>
				</Box>
				<Box c="dimmed" mt={2}>
					{details ? <TbChevronDown aria-hidden /> : <TbChevronRight aria-hidden />}
				</Box>
			</Group>
			{details && (
				<Stack gap={4} mt="xs" ml={40}>
					{details}
				</Stack>
			)}
		</Box>
	);
}

function AuditLog() {
	return (
		<Card withBorder padding={0}>
			<Group gap="xs" p="sm" wrap="nowrap">
				<Select
					size="xs"
					aria-label="Who"
					data={["Anyone", people.jane.name, people.tomas.name, people.mei.name]}
					defaultValue="Anyone"
					style={{ flex: 1 }}
				/>
				<Select
					size="xs"
					aria-label="Action"
					data={["All actions", "Role changes", "Sign-ins", "Invoices"]}
					defaultValue="All actions"
					style={{ flex: 1 }}
				/>
				<Select
					size="xs"
					aria-label="Period"
					data={["Last 24 hours", "Last 7 days", "Last 30 days"]}
					defaultValue="Last 7 days"
					style={{ flex: 1 }}
				/>
			</Group>
			<AuditLogRow
				avatar={
					<Avatar size={28} color={people.tomas.color}>
						{people.tomas.initials}
					</Avatar>
				}
				when="Today 10:42"
				ip="81.2.69.160"
				details={
					<>
						<Group gap="xs" wrap="nowrap">
							<Text size="sm" c="dimmed">
								role
							</Text>
							<Text size="sm" c="dimmed" td="line-through">
								member
							</Text>
							<TbArrowRight aria-hidden style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }} />
							<Text size="sm" fw={500}>
								admin
							</Text>
						</Group>
						<Group gap="xs" wrap="nowrap">
							<Text size="sm" c="dimmed">
								expiresAt
							</Text>
							<Text size="sm" c="dimmed" td="line-through">
								none
							</Text>
							<TbArrowRight aria-hidden style={{ color: "var(--mantine-color-dimmed)", flexShrink: 0 }} />
							<Text size="sm" fw={500}>
								2026-11-24T12:42:00Z
							</Text>
						</Group>
					</>
				}
			>
				<AuditLogStrong>{people.tomas.name}</AuditLogStrong> approved <AuditLogStrong>Admin</AuditLogStrong> for{" "}
				{people.mei.name}
			</AuditLogRow>
			<AuditLogRow
				avatar={
					<Avatar size={28} color="gray">
						<TbKey />
					</Avatar>
				}
				when="Today 09:15"
				ip="34.89.12.7"
			>
				<AuditLogStrong>Production backend</AuditLogStrong>{" "}
				<Text span inherit c="dimmed">
					(API key)
				</Text>{" "}
				voided{" "}
				<Anchor inherit ff="monospace">
					HAL-1987
				</Anchor>
			</AuditLogRow>
			<AuditLogRow avatar={<Avatar size={28}>{people.jane.initials}</Avatar>} when="Today 08:58" ip="81.2.69.144">
				<AuditLogStrong>{people.jane.name}</AuditLogStrong> signed in with SSO
			</AuditLogRow>
			<AuditLogRow
				avatar={
					<Avatar size={28} color="gray">
						<TbSettings />
					</Avatar>
				}
				when="Yesterday 17:20"
			>
				<AuditLogStrong>System</AuditLogStrong> marked the Resend connection as failing
			</AuditLogRow>
		</Card>
	);
}

const failureGroupsRows = [
	{
		job: "send-invoice-reminders",
		message: "401 Unauthorized: API key is invalid or revoked",
		since: "Since today 09:00",
		hint: "Reconnect Resend first",
		count: 142,
		action: "blocked",
	},
	{
		job: "sync-carrier-rates",
		message: "ETIMEDOUT carrier-api.atlas.pt:443",
		since: "Since Nov 20",
		count: 37,
		action: "retry",
	},
	{
		job: "import-customers",
		message: "Unique constraint failed on customers.vat",
		since: "Nov 18 only",
		count: 3,
		action: "open",
	},
];

function FailureGroups() {
	return (
		<Panel
			title="Failed jobs"
			flush
			actions={
				<Select
					size="xs"
					w={130}
					aria-label="Period"
					data={["Last 24 hours", "Last 7 days", "Last 30 days"]}
					defaultValue="Last 7 days"
				/>
			}
		>
			{failureGroupsRows.map((group, index) => (
				<Group
					key={group.job}
					justify="space-between"
					align="flex-start"
					wrap="nowrap"
					px="md"
					py="sm"
					style={index > 0 ? { borderTop: operationsRowBorder } : undefined}
				>
					<Stack gap={4} miw={0}>
						<Text size="xs" c="dimmed" ff="monospace">
							{group.job}
						</Text>
						<Text size="sm" fw={500}>
							{group.message}
						</Text>
						<Text size="xs" c="dimmed">
							{group.since}
							{group.hint && (
								<>
									{" · "}
									<Anchor inherit>{group.hint}</Anchor>
								</>
							)}
						</Text>
					</Stack>
					<Stack gap={6} align="flex-end">
						<Text fw={700} size="lg" style={{ fontVariantNumeric: "tabular-nums" }}>
							{group.count}
						</Text>
						<Button size="xs" variant="default" disabled={group.action === "blocked"}>
							{group.action === "open" ? "Open" : `Retry ${group.count}`}
						</Button>
					</Stack>
				</Group>
			))}
		</Panel>
	);
}

const requestLogRows = [
	{ method: "POST", path: "/v1/invoices", status: 201, time: "182 ms", when: "10:42:07" },
	{ method: "GET", path: "/v1/customers?limit=100", status: 200, time: "64 ms", when: "10:41:55" },
	{ method: "POST", path: "/v1/invoices/inv_01JD…/void", status: 403, time: "41 ms", when: "10:40:12", selected: true },
	{ method: "POST", path: "/v1/webhooks/test", status: 500, time: "2,004 ms", when: "10:38:30" },
	{ method: "GET", path: "/v1/invoices/inv_00ZZ…", status: 404, time: "22 ms", when: "10:37:02" },
];

const requestLogResponse = `{
  "error": {
    "type": "permission_denied",
    "message": "This key is missing the invoices:write scope.",
    "request_id": "req_7Hc2kQ9xLmP"
  }
}`;

function requestLogStatusColor(status: number) {
	if (status >= 500) return "var(--mantine-color-red-text)";
	if (status >= 400) return "var(--mantine-color-orange-text)";
	return "var(--mantine-color-green-text)";
}

function RequestLogMethod({ method }: { method: string }) {
	return (
		<Badge
			size="xs"
			variant="light"
			color={method === "GET" ? "gray" : "blue"}
			ff="monospace"
			style={{ flexShrink: 0 }}
		>
			{method}
		</Badge>
	);
}

function RequestLog() {
	return (
		<Card withBorder padding={0}>
			<Group align="stretch" gap={0}>
				<Box miw={0} style={{ flex: "1 1 440px" }}>
					<Group gap="xs" p="sm" wrap="nowrap">
						<TextInput
							size="xs"
							leftSection={<TbSearch />}
							placeholder="Path or request ID"
							aria-label="Search requests"
							style={{ flex: 1 }}
						/>
						<SegmentedControl size="xs" data={["All", "Errors"]} defaultValue="All" />
					</Group>
					<Table.ScrollContainer minWidth={420}>
						<Table horizontalSpacing="sm">
							<Table.Thead>
								<Table.Tr>
									<Table.Th>Request</Table.Th>
									<Table.Th>Status</Table.Th>
									<Table.Th ta="right">Time</Table.Th>
									<Table.Th>When</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{requestLogRows.map((row) => (
									<Table.Tr key={row.when} bg={row.selected ? "var(--mantine-primary-color-light)" : undefined}>
										<Table.Td>
											<Group gap="xs" wrap="nowrap">
												<RequestLogMethod method={row.method} />
												<Text size="xs" ff="monospace" truncate>
													{row.path}
												</Text>
											</Group>
										</Table.Td>
										<Table.Td>
											<Text size="xs" ff="monospace" c={requestLogStatusColor(row.status)}>
												{row.status}
											</Text>
										</Table.Td>
										<Table.Td ta="right">
											<Text size="xs" ff="monospace" style={{ whiteSpace: "nowrap" }}>
												{row.time}
											</Text>
										</Table.Td>
										<Table.Td>
											<Text size="xs" c="dimmed" style={{ fontVariantNumeric: "tabular-nums" }}>
												{row.when}
											</Text>
										</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</Table.ScrollContainer>
				</Box>
				<Stack gap="md" p="md" miw={0} style={{ flex: "1 1 300px", borderInlineStart: operationsRowBorder }}>
					<Stack gap={6}>
						<Group gap="xs" wrap="nowrap" align="flex-start">
							<RequestLogMethod method="POST" />
							<Text size="xs" ff="monospace" style={{ overflowWrap: "anywhere" }}>
								/v1/invoices/inv_01JD8K2M4Q/void
							</Text>
						</Group>
						<Text size="xs" ff="monospace" c={requestLogStatusColor(403)}>
							403 Forbidden
						</Text>
					</Stack>
					<DataList labelWidth={90}>
						<DataList.Item>
							<DataList.ItemLabel>Key</DataList.ItemLabel>
							<DataList.ItemValue>
								Zapier sync{" "}
								<Text span size="xs" c="dimmed" ff="monospace">
									hl_live_77b0…0a9d
								</Text>
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemLabel>Request ID</DataList.ItemLabel>
							<DataList.ItemValue>
								<CopyableCode value="req_7Hc2kQ9xLmP" />
							</DataList.ItemValue>
						</DataList.Item>
					</DataList>
					<Tabs defaultValue="response">
						<Tabs.List>
							<Tabs.Tab value="response">Response</Tabs.Tab>
							<Tabs.Tab value="request">Request</Tabs.Tab>
							<Tabs.Tab value="headers">Headers</Tabs.Tab>
						</Tabs.List>
						<Tabs.Panel value="response" pt="sm">
							<Code block>{requestLogResponse}</Code>
						</Tabs.Panel>
						<Tabs.Panel value="request" pt="sm">
							<Code block>{`{\n  "reason": "duplicate"\n}`}</Code>
						</Tabs.Panel>
						<Tabs.Panel value="headers" pt="sm">
							<Code block>{"authorization: Bearer hl_live_77b0…0a9d\ncontent-type: application/json"}</Code>
						</Tabs.Panel>
					</Tabs>
				</Stack>
			</Group>
		</Card>
	);
}

const logViewerLines = [
	{ time: "09:00:04.112", level: "INFO", source: "reminders", message: "Loaded 18 overdue invoices" },
	{ time: "09:00:04.951", level: "INFO", source: "reminders", message: "Rendered 18 emails in 840 ms" },
	{ time: "09:00:05.003", level: "DEBUG", source: "resend", message: "POST https://api.resend.com/emails" },
	{
		time: "09:00:07.061",
		level: "ERROR",
		source: "resend",
		message: "401 Unauthorized: API key is invalid or revoked",
	},
	{ time: "09:00:07.062", level: "WARN", source: "jobs", message: "Attempt 1 of 5 failed, retrying in 5 min" },
	{ time: "09:05:07.130", level: "INFO", source: "jobs", message: "Attempt 2 of 5 started" },
	{ time: "09:05:07.244", level: "INFO", source: "reminders", message: "Loaded 18 overdue invoices" },
];

const logViewerLevelColors: Record<string, string> = {
	DEBUG: "dimmed",
	INFO: "var(--mantine-color-blue-text)",
	WARN: "var(--mantine-color-orange-text)",
	ERROR: "var(--mantine-color-red-text)",
};

function LogViewer() {
	return (
		<Card withBorder padding={0}>
			<Group gap="xs" p="sm" wrap="nowrap" style={{ borderBottom: operationsRowBorder }}>
				<TextInput
					size="xs"
					leftSection={<TbSearch />}
					placeholder="Filter logs"
					aria-label="Filter logs"
					style={{ flex: 1 }}
				/>
				<SegmentedControl size="xs" data={["All", "Warn", "Error"]} defaultValue="All" />
				<Switch size="xs" label="Follow" defaultChecked />
			</Group>
			<Box ff="monospace" fz="xs" py="xs" style={{ overflowX: "auto" }}>
				{logViewerLines.map((line) => (
					<Box
						key={line.time}
						px="md"
						py={2}
						bg={line.level === "ERROR" ? "var(--mantine-color-red-light)" : undefined}
						style={{
							display: "grid",
							gridTemplateColumns: "auto 6ch auto minmax(0, 1fr)",
							columnGap: "var(--mantine-spacing-sm)",
							whiteSpace: "nowrap",
						}}
					>
						<Text span inherit c="dimmed">
							{line.time}
						</Text>
						<Text span inherit c={logViewerLevelColors[line.level]}>
							{line.level}
						</Text>
						<Text span inherit c="dimmed">
							{line.source}
						</Text>
						<Text span inherit truncate>
							{line.message}
						</Text>
					</Box>
				))}
			</Box>
		</Card>
	);
}

function ExportDialog() {
	return (
		<Stack gap="md" maw={420}>
			<DialogFrame
				title="Export 18 invoices"
				footer={
					<>
						<Button variant="default">Cancel</Button>
						<Button leftSection={<TbDownload />}>Export</Button>
					</>
				}
			>
				<Stack gap="md">
					<Group gap={6}>
						<Text size="xs" c="dimmed">
							From
						</Text>
						<Pill>Status is Overdue</Pill>
						<Pill>Amount over €1,000</Pill>
					</Group>
					<Input.Wrapper label="Format">
						<Box mt={4}>
							<SegmentedControl data={["CSV", "Excel", "PDF archive"]} defaultValue="CSV" />
						</Box>
					</Input.Wrapper>
					<Radio.Group label="Columns" defaultValue="visible">
						<Stack gap="xs" mt={6}>
							<Radio value="visible" label="Visible columns (6)" />
							<Radio value="all" label="All columns (24)" />
						</Stack>
					</Radio.Group>
				</Stack>
			</DialogFrame>
			<Notification loading title="Exporting all invoices">
				We'll email you when it's ready.
				<Progress value={54} size="xs" mt="xs" />
			</Notification>
		</Stack>
	);
}

const scheduledJobsTableRows: {
	job: string;
	schedule: string;
	nextRun: string;
	lastResult: Status;
	active: boolean;
}[] = [
	{
		job: "send-invoice-reminders",
		schedule: "Every day at 09:00",
		nextRun: "Tomorrow 09:00",
		lastResult: "failed",
		active: true,
	},
	{ job: "sync-carrier-rates", schedule: "Every hour", nextRun: "In 18 minutes", lastResult: "failed", active: true },
	{
		job: "import-bank-statements",
		schedule: "Every day at 06:00",
		nextRun: "Tomorrow 06:00",
		lastResult: "succeeded",
		active: true,
	},
	{
		job: "close-accounting-month",
		schedule: "1st of the month",
		nextRun: "Dec 1",
		lastResult: "succeeded",
		active: true,
	},
	{
		job: "archive-old-quotes",
		schedule: "Sundays at 03:00",
		nextRun: "Paused",
		lastResult: "succeeded",
		active: false,
	},
];

function ScheduledJobsTable() {
	return (
		<Panel title="Scheduled jobs" flush>
			<Table.ScrollContainer minWidth={720}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Job</Table.Th>
							<Table.Th>Schedule</Table.Th>
							<Table.Th>Next run</Table.Th>
							<Table.Th>Last run</Table.Th>
							<Table.Th>
								<VisuallyHidden>Active</VisuallyHidden>
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{scheduledJobsTableRows.map((row) => (
							<Table.Tr key={row.job}>
								<Table.Td>
									<Text size="sm" ff="monospace">
										{row.job}
									</Text>
								</Table.Td>
								<Table.Td>{row.schedule}</Table.Td>
								<Table.Td c={row.active ? undefined : "dimmed"}>{row.nextRun}</Table.Td>
								<Table.Td>
									<StatusBadge status={row.lastResult} />
								</Table.Td>
								<Table.Td>
									<Switch size="xs" aria-label={`Run ${row.job}`} defaultChecked={row.active} />
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const deliveryLogRows: {
	event: string;
	channel: "webhook" | "email";
	destination: string;
	status: Status;
	at: Date;
}[] = [
	{
		event: "invoice.paid",
		channel: "webhook",
		destination: "erp.halden.io/hooks",
		status: "succeeded",
		at: ago({ minutes: 2 }),
	},
	{
		event: "invoice.reminder",
		channel: "email",
		destination: "accounts@brightwater.pt",
		status: "failed",
		at: ago({ hours: 1 }),
	},
	{
		event: "customer.updated",
		channel: "webhook",
		destination: "erp.halden.io/hooks",
		status: "succeeded",
		at: ago({ hours: 3 }),
	},
	{
		event: "invoice.sent",
		channel: "email",
		destination: "finance@keller-sons.co.uk",
		status: "succeeded",
		at: ago({ days: 1 }),
	},
];

function DeliveryLog() {
	return (
		<Panel title="Deliveries" flush>
			<Table.ScrollContainer minWidth={680}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Event</Table.Th>
							<Table.Th>To</Table.Th>
							<Table.Th>Result</Table.Th>
							<Table.Th>When</Table.Th>
							<Table.Th>
								<VisuallyHidden>Actions</VisuallyHidden>
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{deliveryLogRows.map((row) => (
							<Table.Tr key={`${row.event}-${row.at.getTime()}`}>
								<Table.Td>
									<Text size="sm" ff="monospace">
										{row.event}
									</Text>
								</Table.Td>
								<Table.Td>
									<Group gap={6} wrap="nowrap">
										<Box c="dimmed" display="flex">
											{row.channel === "webhook" ? <TbWebhook aria-label="Webhook" /> : <TbMail aria-label="Email" />}
										</Box>
										<Text size="sm" truncate>
											{row.destination}
										</Text>
									</Group>
								</Table.Td>
								<Table.Td>
									<StatusBadge status={row.status} />
								</Table.Td>
								<Table.Td>
									<Text size="sm" c="dimmed" style={{ whiteSpace: "nowrap" }}>
										<RelativeTime date={row.at} />
									</Text>
								</Table.Td>
								<Table.Td>
									{row.status === "failed" && (
										<Button size="xs" variant="default">
											Resend
										</Button>
									)}
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

const queueMonitorRows = [
	{ name: "emails", waiting: 142, rate: "Paused", throughput: [40, 42, 38, 45, 41, 12, 0, 0, 0, 0], paused: true },
	{
		name: "webhooks",
		waiting: 12,
		rate: "340 a minute",
		throughput: [300, 320, 290, 350, 330, 360, 340, 310, 345, 340],
		paused: false,
	},
	{ name: "imports", waiting: 0, rate: "2 a minute", throughput: [0, 4, 6, 2, 0, 0, 3, 5, 2, 2], paused: false },
];

function QueueMonitor() {
	return (
		<Panel title="Queues" flush>
			<Table horizontalSpacing="md" verticalSpacing="sm">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Queue</Table.Th>
						<Table.Th ta="right">Waiting</Table.Th>
						<Table.Th>Throughput</Table.Th>
						<Table.Th>
							<VisuallyHidden>Actions</VisuallyHidden>
						</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{queueMonitorRows.map((row) => (
						<Table.Tr key={row.name}>
							<Table.Td>
								<Text size="sm" ff="monospace">
									{row.name}
								</Text>
							</Table.Td>
							<Table.Td ta="right" style={{ fontVariantNumeric: "tabular-nums" }}>
								{row.waiting.toLocaleString("en")}
							</Table.Td>
							<Table.Td>
								<Group gap="sm" wrap="nowrap">
									<Sparkline
										w={80}
										h={24}
										data={row.throughput}
										color={row.paused ? "gray" : "var(--mantine-primary-color-filled)"}
										fillOpacity={0.2}
										curveType="linear"
									/>
									<Text size="xs" c="dimmed" style={{ whiteSpace: "nowrap" }}>
										{row.rate}
									</Text>
								</Group>
							</Table.Td>
							<Table.Td ta="right">
								<Button size="xs" variant="default" leftSection={row.paused ? <TbPlayerPlay /> : <TbPlayerPause />}>
									{row.paused ? "Resume" : "Pause"}
								</Button>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Panel>
	);
}

const uptimeBarColors = {
	operational: "var(--mantine-color-green-filled)",
	degraded: "var(--mantine-color-yellow-filled)",
	outage: "var(--mantine-color-red-filled)",
};

const uptimeBarServices: { name: string; uptime: string; days: (keyof typeof uptimeBarColors)[] }[] = [
	{
		name: "API",
		uptime: "99.95%",
		days: Array.from({ length: 90 }, (_, index) =>
			index === 23 ? "outage" : index === 61 || index === 84 ? "degraded" : "operational",
		),
	},
	{ name: "Customer portal", uptime: "100%", days: Array.from({ length: 90 }, () => "operational") },
];

function UptimeBar() {
	return (
		<Card withBorder>
			<Stack gap="lg">
				{uptimeBarServices.map((service) => (
					<Stack key={service.name} gap={6}>
						<Group justify="space-between">
							<Text size="sm" fw={500}>
								{service.name}
							</Text>
							<Text size="sm" c="dimmed">
								{service.uptime} uptime
							</Text>
						</Group>
						<Group gap={2} wrap="nowrap" h={28} role="img" aria-label={`${service.name}: daily status over 90 days`}>
							{service.days.map((day, index) => (
								<Box
									// biome-ignore lint/suspicious/noArrayIndexKey: days have no identity beyond their position
									key={index}
									h="100%"
									bg={uptimeBarColors[day]}
									style={{ flex: 1, borderRadius: 2 }}
								/>
							))}
						</Group>
					</Stack>
				))}
				<Group justify="space-between">
					<Text size="xs" c="dimmed">
						90 days ago
					</Text>
					<Text size="xs" c="dimmed">
						Today
					</Text>
				</Group>
			</Stack>
		</Card>
	);
}

function SystemBanner() {
	return (
		<Stack gap="sm">
			<Alert variant="light" color="red" icon={<TbAlertTriangle />} title="Card payments are delayed">
				Stripe is slow to confirm payments. Invoices update when the confirmations come through.{" "}
				<Anchor inherit>Status page</Anchor>
			</Alert>
			<Alert
				variant="light"
				color="blue"
				icon={<TbTool />}
				title="Maintenance on Sunday, 02:00 to 03:00"
				withCloseButton
			>
				Invoices can't be sent during that hour.
			</Alert>
		</Stack>
	);
}

export function OperationsArea() {
	return (
		<PreviewGrid>
			<PreviewItem>
				<StatusBadgeTable />
			</PreviewItem>
			<PreviewItem>
				<RunTimeline />
			</PreviewItem>
			<PreviewItem>
				<AuditLog />
			</PreviewItem>
			<PreviewItem>
				<FailureGroups />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<RequestLog />
			</PreviewItem>
			<PreviewItem span="half">
				<LogViewer />
			</PreviewItem>
			<PreviewItem span="half">
				<ExportDialog />
			</PreviewItem>
			<PreviewItem span="full">
				<ScheduledJobsTable />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<DeliveryLog />
			</PreviewItem>
			<PreviewItem>
				<QueueMonitor />
			</PreviewItem>
			<PreviewItem>
				<UptimeBar />
			</PreviewItem>
			<PreviewItem>
				<SystemBanner />
			</PreviewItem>
		</PreviewGrid>
	);
}

function BillingSection() {
	return (
		<Stack gap="xl">
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Plan</Title>
					<Text size="sm" c="dimmed" mt={4}>
						Billed monthly to your default payment method.
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Card withBorder>
						<Stack gap="md">
							<Group justify="space-between" align="flex-start">
								<Box>
									<Text fw={600}>Business</Text>
									<Text size="sm" c="dimmed">
										{euros.format(468)} a month, renews on Dec 20
									</Text>
								</Box>
								<Group gap="xs">
									<Button size="xs" variant="default">
										Cancel plan
									</Button>
									<Button size="xs">Change plan</Button>
								</Group>
							</Group>
							<SimpleGrid cols={2} spacing="lg">
								<Stack gap={4}>
									<Group justify="space-between">
										<Text size="xs">Seats</Text>
										<Text size="xs" ff="monospace">
											5 / 25
										</Text>
									</Group>
									<Progress value={20} size="sm" />
								</Stack>
								<Stack gap={4}>
									<Group justify="space-between">
										<Text size="xs">API requests</Text>
										<Text size="xs" ff="monospace">
											812,400 / 1M
										</Text>
									</Group>
									<Progress value={81} size="sm" color="yellow" />
								</Stack>
							</SimpleGrid>
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
			<Divider />
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Payment method</Title>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<PaymentMethodCard />
				</Grid.Col>
			</Grid>
			<Divider />
			<Grid type="container" breakpoints={previewBreakpoints} gap="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Title order={5}>Invoices</Title>
					<Text size="sm" c="dimmed" mt={4}>
						Sent to billing@halden.io.
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<InvoicesTable />
				</Grid.Col>
			</Grid>
		</Stack>
	);
}

const usageMeterRows = [
	{ label: "API requests", used: "812,400", limit: "1M", percent: 81 },
	{ label: "Seats", used: "5", limit: "25", percent: 20 },
	{ label: "Document storage", used: "9.6", limit: "10 GB", percent: 96, warning: "Uploads stop at 10 GB." },
];

function usageMeterColor(percent: number) {
	if (percent >= 95) return "red";
	if (percent >= 80) return "yellow";
	return undefined;
}

function UsageMeter() {
	return (
		<Card withBorder>
			<Stack gap="md">
				<Group justify="space-between">
					<Title order={4}>Usage this month</Title>
					<Text size="xs" c="dimmed">
						Resets Dec 1
					</Text>
				</Group>
				{usageMeterRows.map((row) => (
					<Stack key={row.label} gap={6}>
						<Group justify="space-between">
							<Text size="sm" fw={500}>
								{row.label}
							</Text>
							<Text size="xs" ff="monospace">
								{row.used} / {row.limit}
							</Text>
						</Group>
						<Progress value={row.percent} color={usageMeterColor(row.percent)} aria-label={row.label} />
						{row.warning && (
							<Text size="xs" c="var(--mantine-color-red-text)">
								{row.warning}
							</Text>
						)}
					</Stack>
				))}
				<Group justify="space-between">
					<Anchor size="xs">Compare plans</Anchor>
					<Button size="xs" variant="light">
						Upgrade to Scale
					</Button>
				</Group>
			</Stack>
		</Card>
	);
}

function PlanGate() {
	return (
		<Card withBorder>
			<EmptyState
				variant="light"
				icon={<TbBuilding />}
				title="Single sign-on"
				description="People sign in with Okta, Microsoft Entra ID or Google Workspace, and lose access in one place when they leave."
			>
				<Stack gap="md" w="100%" mt="xs">
					<List
						size="sm"
						spacing={6}
						center
						w="fit-content"
						mx="auto"
						ta="left"
						icon={
							<ThemeIcon size={18} radius="xl" variant="light" color="green">
								<TbCheck />
							</ThemeIcon>
						}
					>
						<List.Item>SAML and OIDC</List.Item>
						<List.Item>Accounts created through SCIM</List.Item>
						<List.Item>SSO required for everyone</List.Item>
					</List>
					<Button fullWidth>Upgrade to Business</Button>
					<Text size="xs" c="dimmed" ta="center">
						You're on Team. <Anchor inherit>Compare plans</Anchor>
					</Text>
				</Stack>
			</EmptyState>
		</Card>
	);
}

function brandingSectionContrast(color: string) {
	return 1.05 / (luminance(color) + 0.05);
}

function BrandingSection() {
	// The brand colour is the customer's data, not the theme's, so it stays a literal
	const [color, setColor] = useState("#0F766E");
	const valid = /^#[0-9a-f]{6}$/i.test(color);
	const contrast = valid ? brandingSectionContrast(color) : 0;
	const readable = contrast >= 4.5;

	return (
		<Card withBorder maw={340}>
			<Stack gap="md">
				<Group gap="sm">
					<Center
						w={44}
						h={44}
						bg={color}
						c="white"
						fw={700}
						fz="sm"
						style={{ borderRadius: "var(--mantine-radius-md)" }}
					>
						HL
					</Center>
					<Stack gap={0}>
						<Text size="sm" fw={500}>
							Logo
						</Text>
						<Anchor size="xs">Replace</Anchor>
					</Stack>
				</Group>
				<ColorInput
					label="Brand colour"
					value={color}
					onChange={setColor}
					format="hex"
					description={
						valid && (
							<Group
								component="span"
								gap={4}
								c={readable ? "var(--mantine-color-green-text)" : "var(--mantine-color-red-text)"}
							>
								{readable ? <TbCheck /> : <TbAlertTriangle />}
								White text on it: {contrast.toFixed(1)} to 1
							</Group>
						)
					}
					inputWrapperOrder={["label", "input", "description"]}
				/>
				<Paper withBorder style={{ overflow: "hidden" }}>
					<Group gap="xs" px="sm" py={8} bg={color} c="white">
						<Center
							w={20}
							h={20}
							fz={9}
							fw={700}
							style={{ borderRadius: "var(--mantine-radius-sm)", border: "1px solid currentColor" }}
						>
							HL
						</Center>
						<Text size="xs" fw={600}>
							Halden Logistics
						</Text>
					</Group>
					<Stack gap={8} p="sm" align="flex-start">
						<Text size="xs" c="dimmed">
							Invoice{" "}
							<Text span inherit ff="monospace">
								HAL-2041
							</Text>
						</Text>
						<Text fw={600}>{euros.format(4820)}</Text>
						<Button size="xs" color={color}>
							Pay invoice
						</Button>
					</Stack>
				</Paper>
				<Text size="xs" c="dimmed" ta="center">
					Customer portal preview
				</Text>
			</Stack>
		</Card>
	);
}

const invoicesTableRows = [
	{ date: "Nov 20, 2026", amount: 468, paid: false },
	{ date: "Oct 20, 2026", amount: 468, paid: true },
	{ date: "Sep 20, 2026", amount: 390, paid: true },
];

function InvoicesTable() {
	return (
		<Card withBorder padding={0}>
			<Table horizontalSpacing="md" verticalSpacing="sm">
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Date</Table.Th>
						<Table.Th ta="right">Amount</Table.Th>
						<Table.Th>Status</Table.Th>
						<Table.Th w={52}>
							<VisuallyHidden>Download</VisuallyHidden>
						</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{invoicesTableRows.map((row) => (
						<Table.Tr key={row.date}>
							<Table.Td>{row.date}</Table.Td>
							<Table.Td ta="right">{euros.format(row.amount)}</Table.Td>
							<Table.Td>
								{row.paid ? (
									<Text size="sm" c="dimmed">
										Paid
									</Text>
								) : (
									// Unpaid isn't in the shared statuses yet
									<Badge variant="light" color="red" size="sm">
										Unpaid
									</Badge>
								)}
							</Table.Td>
							<Table.Td>
								<ActionIcon variant="subtle" color="gray" aria-label={`Download the invoice from ${row.date}`}>
									<TbDownload />
								</ActionIcon>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Card>
	);
}

function PaymentFailedBanner() {
	return (
		<Alert variant="light" color="red" icon={<TbAlertCircle />} title="Your last payment failed">
			The card ending 8810 was declined on Nov 20. We'll try again on Nov 27.
			<Group gap="xs" mt="sm">
				<Button size="xs" color="red">
					Update card
				</Button>
				<Button size="xs" variant="default">
					Pay now
				</Button>
			</Group>
		</Alert>
	);
}

function CancelSubscriptionFlow() {
	return (
		<DialogFrame
			title="Cancel your subscription"
			footer={
				<>
					<Button variant="default">Keep subscription</Button>
					<Button variant="outline" color="red">
						Cancel subscription
					</Button>
				</>
			}
		>
			<Stack gap="md">
				<Text size="sm">
					Business stays active until{" "}
					<Text span inherit fw={600}>
						Dec 20
					</Text>
					. After that:
				</Text>
				<List size="sm" spacing={6} center>
					<List.Item
						icon={
							<ThemeIcon size={18} radius="xl" variant="light" color="red">
								<TbX />
							</ThemeIcon>
						}
					>
						Members sign in with passwords instead of SSO
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon size={18} radius="xl" variant="light" color="red">
								<TbX />
							</ThemeIcon>
						}
					>
						Automation rules stop running
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon size={18} radius="xl" variant="light" color="gray">
								<TbInfoCircle />
							</ThemeIcon>
						}
					>
						Your data can be exported for 12 months
					</List.Item>
				</List>
				<Select
					label="Why are you cancelling?"
					data={[
						"Too expensive for our team",
						"Missing a feature we need",
						"Moving to another product",
						"We no longer need it",
						"Something else",
					]}
					defaultValue="Too expensive for our team"
				/>
				<Alert variant="light" color="blue" icon={<TbPlayerPause />} title="Pause instead">
					Keep your data and settings for up to 3 months without paying.{" "}
					<Anchor inherit fw={500}>
						Pause subscription
					</Anchor>
				</Alert>
			</Stack>
		</DialogFrame>
	);
}

const seatsAdjusterPrice = 18.72;
const seatsAdjusterCurrent = 25;
const seatsAdjusterUsed = 5;
// 25 of the 30 days in the billing period are left
const seatsAdjusterRemainingShare = 25 / 30;

function SeatsAdjuster() {
	const [seats, setSeats] = useState(30);
	const difference = seats - seatsAdjusterCurrent;

	return (
		<Card withBorder>
			<Stack gap="md">
				<Stack gap={2}>
					<Title order={4}>Seats</Title>
					<Text size="sm" c="dimmed">
						{seatsAdjusterUsed} of {seatsAdjusterCurrent} in use. {euros.format(seatsAdjusterPrice)} per seat a month.
					</Text>
				</Stack>
				<NumberInput
					aria-label="Seats"
					value={seats}
					onChange={(value) => setSeats(typeof value === "number" ? value : seatsAdjusterCurrent)}
					min={seatsAdjusterUsed}
					max={500}
					w={140}
				/>
				{difference !== 0 && (
					<Paper withBorder p="sm" bg="var(--mantine-color-default-hover)">
						<Stack gap={4}>
							<Group justify="space-between" wrap="nowrap">
								<Text size="sm">A month from Dec 20</Text>
								<Text size="sm" fw={500}>
									{euros.format(seats * seatsAdjusterPrice)}
								</Text>
							</Group>
							{difference > 0 ? (
								<Group justify="space-between" wrap="nowrap">
									<Text size="sm">Charged today for the rest of this period</Text>
									<Text size="sm" fw={500}>
										{euros.format(difference * seatsAdjusterPrice * seatsAdjusterRemainingShare)}
									</Text>
								</Group>
							) : (
								<Text size="xs" c="dimmed">
									Removed seats stay available until Dec 20.
								</Text>
							)}
						</Stack>
					</Paper>
				)}
				<Group justify="flex-end">
					<Button disabled={difference === 0}>Update seats</Button>
				</Group>
			</Stack>
		</Card>
	);
}

const planChangeModalCurrent = "business";

const planChangeModalPlans = [
	{ value: "team", name: "Team", price: 390, detail: "Up to 10 seats, no single sign-on" },
	{ value: "business", name: "Business", price: 468, detail: "25 seats, SSO and SCIM" },
	{ value: "scale", name: "Scale", price: 1180, detail: "100 seats, audit log export" },
];

function PlanChangeModal() {
	const [plan, setPlan] = useState("scale");
	const current = planChangeModalPlans.find((candidate) => candidate.value === planChangeModalCurrent);
	const selected = planChangeModalPlans.find((candidate) => candidate.value === plan);
	const difference = (selected?.price ?? 0) - (current?.price ?? 0);

	return (
		<DialogFrame
			title="Change plan"
			footer={
				<>
					<Button variant="default">Cancel</Button>
					<Button disabled={plan === planChangeModalCurrent}>Switch to {selected?.name}</Button>
				</>
			}
		>
			<Stack gap="md">
				<Radio.Group value={plan} onChange={setPlan} aria-label="Plan">
					<Stack gap="xs">
						{planChangeModalPlans.map((option) => (
							<Radio.Card key={option.value} value={option.value} p="sm">
								<Group wrap="nowrap" align="flex-start">
									<Radio.Indicator />
									<Box miw={0} style={{ flex: 1 }}>
										<Text size="sm" fw={500}>
											{option.name}
											{option.value === planChangeModalCurrent && (
												<Text span inherit c="dimmed" fw={400}>
													{" "}
													(current)
												</Text>
											)}
										</Text>
										<Text size="xs" c="dimmed">
											{option.detail}
										</Text>
									</Box>
									<Text size="sm" style={{ whiteSpace: "nowrap" }}>
										{euros.format(option.price)}
										<Text span size="xs" c="dimmed">
											{" "}
											a month
										</Text>
									</Text>
								</Group>
							</Radio.Card>
						))}
					</Stack>
				</Radio.Group>
				{difference > 0 && (
					<Paper withBorder p="sm" bg="var(--mantine-color-default-hover)">
						<Group justify="space-between">
							<Text size="sm" fw={500}>
								Due today
							</Text>
							<Text size="sm" fw={600}>
								{euros.format(difference * seatsAdjusterRemainingShare)}
							</Text>
						</Group>
						<Text size="xs" c="dimmed">
							Prorated for the 25 days left in this period.
						</Text>
					</Paper>
				)}
				{difference < 0 && (
					<Text size="sm" c="dimmed">
						{selected?.name} starts on Dec 20. Nothing is charged today.
					</Text>
				)}
			</Stack>
		</DialogFrame>
	);
}

interface PaymentMethodCardRowProps {
	icon: ReactNode;
	name: string;
	detail: ReactNode;
	isDefault?: boolean;
	action: ReactNode;
	withBorder?: boolean;
}

function PaymentMethodCardRow({
	icon,
	name,
	detail,
	isDefault = false,
	action,
	withBorder = false,
}: PaymentMethodCardRowProps) {
	return (
		<Group
			justify="space-between"
			wrap="nowrap"
			px="md"
			py="sm"
			style={withBorder ? { borderTop: operationsRowBorder } : undefined}
		>
			<Group gap="sm" wrap="nowrap" miw={0}>
				<ThemeIcon size="lg" variant="light" color="gray">
					{icon}
				</ThemeIcon>
				<Box miw={0}>
					<Group gap="xs" wrap="nowrap">
						<Text size="sm" fw={500} truncate>
							{name}
						</Text>
						{isDefault && (
							<Badge size="xs" variant="light" color="gray">
								Default
							</Badge>
						)}
					</Group>
					{detail}
				</Box>
			</Group>
			{action}
		</Group>
	);
}

function PaymentMethodCard() {
	return (
		<Card withBorder padding={0}>
			<PaymentMethodCardRow
				icon={<TbCreditCard />}
				name="Visa ending 8810"
				isDefault
				detail={
					<Text size="xs" c="dimmed">
						Expires 08/27 ·{" "}
						<Text span inherit c="var(--mantine-color-red-text)">
							Declined on Nov 20
						</Text>
					</Text>
				}
				action={
					<Button size="xs" variant="default">
						Replace
					</Button>
				}
			/>
			<PaymentMethodCardRow
				withBorder
				icon={<TbBuildingBank />}
				name="SEPA Direct Debit ••4410"
				detail={
					<Text size="xs" c="dimmed">
						Millennium BCP
					</Text>
				}
				action={
					<Button size="xs" variant="default">
						Make default
					</Button>
				}
			/>
		</Card>
	);
}

function TrialBanner() {
	return (
		<Paper withBorder p="sm">
			<Group justify="space-between" wrap="nowrap" gap="md">
				<Group gap="sm" wrap="nowrap" miw={0}>
					<ThemeIcon variant="light" size="lg">
						<TbHourglass />
					</ThemeIcon>
					<Box miw={0}>
						<Text size="sm" fw={500}>
							9 days left in your trial
						</Text>
						<Text size="xs" c="dimmed">
							Halden Logistics moves to the free plan on Dec 4 unless you choose a plan.
						</Text>
					</Box>
				</Group>
				<Button size="xs">Choose a plan</Button>
			</Group>
		</Paper>
	);
}

interface ReconciliationViewRow {
	reference: string;
	date: string;
	amount: number;
	invoice?: { number: string; customer: string; amount: number; note: string; partial?: boolean };
	action: string;
	actionVariant: "filled" | "light" | "default";
}

const reconciliationViewRows: ReconciliationViewRow[] = [
	{
		reference: "TRF BRIGHTWATER FOODS SA",
		date: "Nov 21",
		amount: 4820,
		invoice: { number: "HAL-2041", customer: "Brightwater Foods", amount: 4820, note: "Same amount and name" },
		action: "Match",
		actionVariant: "filled",
	},
	{
		reference: "KELLER AND SONS LTD",
		date: "Nov 20",
		amount: 1000,
		invoice: { number: "HAL-2038", customer: "Keller & Sons", amount: 1250, note: "€250.00 stays open", partial: true },
		action: "Match partly",
		actionVariant: "light",
	},
	{
		reference: "STRIPE PAYOUT PO_1QH8",
		date: "Nov 19",
		amount: 8214.37,
		action: "Split payout",
		actionVariant: "default",
	},
];

const reconciliationViewColumns = "minmax(0, 1fr) auto minmax(0, 1fr) 120px";

function ReconciliationView() {
	return (
		<Panel title="Reconcile Millennium BCP ••4410" description="23 lines to match" flush>
			<Box style={{ overflowX: "auto" }}>
				<Box miw={640} px="md" pb="md">
					<Box
						py="xs"
						style={{
							display: "grid",
							gridTemplateColumns: reconciliationViewColumns,
							columnGap: "var(--mantine-spacing-sm)",
						}}
					>
						<Text size="xs" c="dimmed" fw={600}>
							Bank line
						</Text>
						<span />
						<Text size="xs" c="dimmed" fw={600}>
							Invoice
						</Text>
						<span />
					</Box>
					<Stack gap="xs">
						{reconciliationViewRows.map((row) => (
							<Box
								key={row.reference}
								style={{
									display: "grid",
									gridTemplateColumns: reconciliationViewColumns,
									columnGap: "var(--mantine-spacing-sm)",
									alignItems: "center",
								}}
							>
								<Paper withBorder px="sm" py="xs">
									<Group justify="space-between" wrap="nowrap">
										<Stack gap={2} miw={0}>
											<Text size="xs" ff="monospace" truncate>
												{row.reference}
											</Text>
											<Text size="xs" c="dimmed">
												{row.date}
											</Text>
										</Stack>
										<Text size="sm" ff="monospace" c="var(--mantine-color-green-text)">
											+{euros.format(row.amount)}
										</Text>
									</Group>
								</Paper>
								<Box c="dimmed" display="flex">
									<TbLink aria-hidden />
								</Box>
								{row.invoice ? (
									<Paper withBorder px="sm" py="xs">
										<Group justify="space-between" wrap="nowrap">
											<Stack gap={2} miw={0}>
												<Text size="sm" truncate>
													<Anchor inherit ff="monospace">
														{row.invoice.number}
													</Anchor>{" "}
													{row.invoice.customer}
												</Text>
												<Text size="xs" c={row.invoice.partial ? "var(--mantine-color-orange-text)" : "dimmed"}>
													{row.invoice.note}
												</Text>
											</Stack>
											<Text size="sm" ff="monospace">
												{euros.format(row.invoice.amount)}
											</Text>
										</Group>
									</Paper>
								) : (
									<Paper px="sm" py="xs" style={{ border: "1px dashed var(--mantine-color-default-border)" }}>
										<Text size="xs" c="dimmed">
											A payout bundles several payments. Split it to match each invoice.
										</Text>
									</Paper>
								)}
								<Button size="xs" variant={row.actionVariant}>
									{row.action}
								</Button>
							</Box>
						))}
					</Stack>
				</Box>
			</Box>
		</Panel>
	);
}

const ledgerTableEntries = [
	{ date: "Oct 14", entry: "Invoice", reference: "HAL-1987", debit: 3200, credit: 0 },
	{ date: "Oct 30", entry: "Payment", reference: "", debit: 0, credit: 3200 },
	{ date: "Nov 12", entry: "Invoice", reference: "HAL-2041", debit: 4820, credit: 0 },
	{ date: "Nov 18", entry: "Invoice", reference: "HAL-2052", debit: 1960, credit: 0 },
	{ date: "Nov 21", entry: "Payment", reference: "", debit: 0, credit: 4820 },
	{ date: "Nov 24", entry: "Credit note", reference: "CN-0042", debit: 0, credit: 250 },
];

const ledgerTableRows = ledgerTableEntries.map((entry, index) => ({
	...entry,
	balance: ledgerTableEntries.slice(0, index + 1).reduce((total, current) => total + current.debit - current.credit, 0),
}));

function LedgerTable() {
	return (
		<Panel title="Ledger" description="Brightwater Foods" flush>
			<Table.ScrollContainer minWidth={520}>
				<Table horizontalSpacing="md" verticalSpacing="sm">
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Date</Table.Th>
							<Table.Th>Entry</Table.Th>
							<Table.Th ta="right">Debit</Table.Th>
							<Table.Th ta="right">Credit</Table.Th>
							<Table.Th ta="right">Balance</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{ledgerTableRows.map((row) => (
							<Table.Tr key={`${row.date}-${row.entry}`}>
								<Table.Td c="dimmed">{row.date}</Table.Td>
								<Table.Td>
									{row.entry}
									{row.reference && (
										<>
											{" "}
											<Anchor inherit ff="monospace">
												{row.reference}
											</Anchor>
										</>
									)}
								</Table.Td>
								<Table.Td ta="right">{row.debit > 0 && euros.format(row.debit)}</Table.Td>
								<Table.Td ta="right">{row.credit > 0 && euros.format(row.credit)}</Table.Td>
								<Table.Td ta="right" fw={500}>
									{euros.format(row.balance)}
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</Panel>
	);
}

export function BillingArea() {
	return (
		<PreviewGrid>
			<PreviewItem span="full">
				<BillingSection />
			</PreviewItem>
			<PreviewItem>
				<UsageMeter />
			</PreviewItem>
			<PreviewItem>
				<PlanGate />
			</PreviewItem>
			<PreviewItem>
				<BrandingSection />
			</PreviewItem>
			<PreviewItem span="half">
				<Stack gap="sm">
					<PaymentFailedBanner />
					<InvoicesTable />
				</Stack>
			</PreviewItem>
			<PreviewItem span="half">
				<CancelSubscriptionFlow />
			</PreviewItem>
			<PreviewItem>
				<SeatsAdjuster />
			</PreviewItem>
			<PreviewItem>
				<PlanChangeModal />
			</PreviewItem>
			<PreviewItem>
				<PaymentMethodCard />
			</PreviewItem>
			<PreviewItem span="full">
				<TrialBanner />
			</PreviewItem>
			<PreviewItem span="full">
				<ReconciliationView />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<LedgerTable />
			</PreviewItem>
		</PreviewGrid>
	);
}

function NotificationInboxDay({ children }: { children: ReactNode }) {
	return (
		<Text size="xs" c="dimmed" fw={600} px="md" pt="sm" pb={4}>
			{children}
		</Text>
	);
}

interface NotificationInboxItemProps {
	avatar: ReactNode;
	children: ReactNode;
	detail: ReactNode;
	unread?: boolean;
	actions?: ReactNode;
}

function NotificationInboxItem({ avatar, children, detail, unread = false, actions }: NotificationInboxItemProps) {
	return (
		<Group gap="sm" wrap="nowrap" align="flex-start" px="md" py="xs" opacity={unread ? 1 : 0.7}>
			{avatar}
			<Stack gap={6} miw={0} style={{ flex: 1 }}>
				<Box>
					<Text size="sm">{children}</Text>
					<Text size="xs" c="dimmed">
						{detail}
					</Text>
				</Box>
				{actions && (
					<Group gap={6} wrap="nowrap">
						{actions}
					</Group>
				)}
			</Stack>
			{unread && (
				<Box
					w={8}
					h={8}
					mt={6}
					bg="var(--mantine-primary-color-filled)"
					style={{ borderRadius: 999, flexShrink: 0 }}
					aria-label="Unread"
				/>
			)}
		</Group>
	);
}

function NotificationInbox() {
	return (
		<Box mih={540}>
			<Group justify="flex-end">
				<Popover
					opened
					withinPortal={false}
					trapFocus={false}
					returnFocus={false}
					position="bottom-end"
					width={360}
					shadow="md"
				>
					<Popover.Target>
						<Indicator label="3" size={16} offset={4}>
							<ActionIcon variant="default" size="lg" aria-label="Notifications">
								<TbBell />
							</ActionIcon>
						</Indicator>
					</Popover.Target>
					<Popover.Dropdown p={0} pb="xs">
						<Group justify="space-between" px="md" pt="sm" pb={4}>
							<Text fw={600}>Notifications</Text>
							<Anchor component="button" size="xs">
								Mark all as read
							</Anchor>
						</Group>
						<Tabs defaultValue="all">
							<Tabs.List px="xs">
								<Tabs.Tab
									value="all"
									rightSection={
										<Badge size="xs" circle>
											3
										</Badge>
									}
								>
									All
								</Tabs.Tab>
								<Tabs.Tab value="mentions">Mentions</Tabs.Tab>
								<Tabs.Tab
									value="approvals"
									rightSection={
										<Badge size="xs" circle>
											1
										</Badge>
									}
								>
									Approvals
								</Tabs.Tab>
							</Tabs.List>
						</Tabs>
						<NotificationInboxDay>Today</NotificationInboxDay>
						<NotificationInboxItem
							unread
							avatar={
								<Avatar size={28} color={people.tomas.color}>
									{people.tomas.initials}
								</Avatar>
							}
							detail={`"Can we waive the late fee this once?" · 12 min`}
						>
							<Text span inherit fw={600}>
								{people.tomas.name}
							</Text>{" "}
							mentioned you on{" "}
							<Anchor inherit ff="monospace" style={{ whiteSpace: "nowrap" }}>
								HAL-2041
							</Anchor>
						</NotificationInboxItem>
						<NotificationInboxItem
							unread
							avatar={
								<Avatar size={28} color={people.mei.color}>
									{people.mei.initials}
								</Avatar>
							}
							detail="40 min"
							actions={
								<>
									<Button size="xs" variant="default">
										Deny
									</Button>
									<Button size="xs">Approve</Button>
								</>
							}
						>
							<Text span inherit fw={600}>
								{people.mei.name}
							</Text>{" "}
							requests Admin for 2 hours
						</NotificationInboxItem>
						<NotificationInboxItem
							unread
							avatar={
								<Avatar size={28} color="red">
									<TbAlertTriangle />
								</Avatar>
							}
							detail="142 reminder emails not sent · 2 h"
						>
							<Text span inherit fw={600}>
								Resend
							</Text>{" "}
							is failing
						</NotificationInboxItem>
						<NotificationInboxDay>Yesterday</NotificationInboxDay>
						<NotificationInboxItem
							avatar={
								<Avatar size={28} color="green">
									<TbCheck />
								</Avatar>
							}
							detail="1,166 added, 38 skipped"
						>
							Import of{" "}
							<Text span inherit fw={600}>
								customers-november.csv
							</Text>{" "}
							finished
						</NotificationInboxItem>
					</Popover.Dropdown>
				</Popover>
			</Group>
		</Box>
	);
}

const keyboardShortcutsGroups = [
	{
		title: "Anywhere",
		shortcuts: [
			{ label: "Command menu", keys: ["mod", "K"] },
			{ label: "Search this page", keys: ["/"] },
			{ label: "Notifications", keys: ["G", "N"] },
			{ label: "Show shortcuts", keys: ["?"] },
		],
	},
	{
		title: "Tables",
		shortcuts: [
			{ label: "Next, previous row", keys: ["J", "K"] },
			{ label: "Select row", keys: ["X"] },
			{ label: "Open row", keys: ["↵"] },
			{ label: "Copy ID", keys: ["mod", "⇧", "C"] },
		],
	},
];

function KeyboardShortcuts() {
	return (
		<DialogFrame title="Keyboard shortcuts" width={520}>
			<Stack gap="md">
				<TextInput size="xs" leftSection={<TbSearch />} placeholder="Search shortcuts" aria-label="Search shortcuts" />
				<SimpleGrid minColWidth={200} spacing="xl">
					{keyboardShortcutsGroups.map((group) => (
						<Stack key={group.title} gap="xs">
							<Text size="xs" fw={600} c="dimmed">
								{group.title}
							</Text>
							{group.shortcuts.map((shortcut) => (
								<Group key={shortcut.label} justify="space-between" wrap="nowrap">
									<Text size="sm">{shortcut.label}</Text>
									<Shortcut keys={shortcut.keys} />
								</Group>
							))}
						</Stack>
					))}
				</SimpleGrid>
			</Stack>
		</DialogFrame>
	);
}

const loadingSkeletonWidths = [
	{ name: 150, amount: 76 },
	{ name: 110, amount: 64 },
	{ name: 170, amount: 84 },
	{ name: 130, amount: 70 },
];

function LoadingSkeleton() {
	return (
		<Card withBorder padding={0} aria-hidden>
			<Group gap="sm" p="sm" wrap="nowrap" style={{ borderBottom: operationsRowBorder }}>
				<Skeleton height={30} width={200} />
				<Skeleton height={24} width={110} radius="xl" />
				<Box style={{ flex: 1 }} />
				<Skeleton height={30} width={90} />
			</Group>
			<Table horizontalSpacing="md" verticalSpacing="sm">
				<Table.Tbody>
					{loadingSkeletonWidths.map((widths) => (
						<Table.Tr key={widths.name}>
							<Table.Td w={40}>
								<Skeleton height={18} width={18} />
							</Table.Td>
							<Table.Td>
								<Skeleton height={10} width={70} />
							</Table.Td>
							<Table.Td>
								<Skeleton height={10} width={widths.name} />
							</Table.Td>
							<Table.Td>
								<Skeleton height={18} width={64} radius="xl" />
							</Table.Td>
							<Table.Td>
								<Skeleton height={10} width={widths.amount} ml="auto" />
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Card>
	);
}

function UndoToast() {
	return (
		<Notification icon={<TbCheck />} color="green" title="3 invoices archived" withCloseButton={false} maw={360}>
			<Group justify="space-between" wrap="nowrap" gap="sm">
				They're hidden from all views.
				<Button size="xs" variant="subtle">
					Undo
				</Button>
			</Group>
		</Notification>
	);
}

function FirstRunEmptyState() {
	return (
		<Card withBorder h="100%">
			<EmptyState
				variant="light"
				icon={<TbPlug />}
				title="No webhooks yet"
				description="Webhooks tell your systems when an invoice is paid or a customer changes."
			>
				<Stack gap="xs" align="center" mt="xs">
					<Button size="xs" leftSection={<TbPlus />}>
						Add endpoint
					</Button>
					<Anchor size="xs">Read the webhook guide</Anchor>
				</Stack>
			</EmptyState>
		</Card>
	);
}

function NoResults() {
	return (
		<Card withBorder h="100%">
			<EmptyState
				withIndicatorBackground
				icon={<TbSearch />}
				title="No invoices match"
				description="Nothing is both overdue and over €50,000."
			>
				<Stack gap="sm" align="center" mt="xs">
					<Group gap={4} justify="center">
						<Pill>Status is Overdue</Pill>
						<Pill>Amount over €50,000</Pill>
					</Group>
					<Button size="xs" variant="default">
						Clear filters
					</Button>
				</Stack>
			</EmptyState>
		</Card>
	);
}

function AccessDenied() {
	return (
		<Card withBorder h="100%">
			<EmptyState
				withIndicatorBackground
				icon={<TbLock />}
				title="You can't see payouts"
				description={
					<>
						Payouts need <Code>payouts.view</Code>, which comes with the Billing and Admin roles.
					</>
				}
			>
				<Stack gap="sm" align="center" mt="xs">
					<Group gap={6} justify="center" wrap="nowrap">
						<Avatar.Group spacing={4}>
							<Avatar size={24}>{people.jane.initials}</Avatar>
							<Avatar size={24} color={people.tomas.color}>
								{people.tomas.initials}
							</Avatar>
						</Avatar.Group>
						<Text size="xs" c="dimmed">
							Jane and Tomás can grant it
						</Text>
					</Group>
					<Button size="xs" variant="light">
						Request access
					</Button>
				</Stack>
			</EmptyState>
		</Card>
	);
}

function ErrorPanel() {
	return (
		<Card withBorder h="100%">
			<EmptyState
				variant="light"
				color="red"
				icon={<TbAlertTriangle />}
				title="Payouts didn't load"
				description="Stripe didn't answer in time. Nothing was changed."
			>
				<Stack gap="sm" align="center" mt="xs">
					<Button size="xs" variant="default" leftSection={<TbRefresh />}>
						Try again
					</Button>
					<Group gap={6} justify="center" wrap="nowrap">
						<Text size="xs" c="dimmed">
							Error ID
						</Text>
						<CopyableCode value="err_9QxW2mT" />
					</Group>
				</Stack>
			</EmptyState>
		</Card>
	);
}

function NotFoundPage() {
	return (
		<Center mih={320} p="xl" style={frameStyle}>
			<EmptyState
				withIndicatorBackground
				icon={<TbFileUnknown />}
				title="Invoice HAL-2099 doesn't exist"
				description="It may have been deleted, or the link is missing a character."
			>
				<EmptyState.Actions>
					<Button variant="default" leftSection={<TbArrowLeft />}>
						Back to invoices
					</Button>
				</EmptyState.Actions>
			</EmptyState>
		</Center>
	);
}

function OfflineBanner() {
	return (
		<Alert variant="light" color="gray" icon={<TbCloudOff />} title="You're offline">
			3 changes are saved on this device and sync when the connection comes back.
			<Group gap="xs" mt="xs">
				<Loader size="xs" color="gray" />
				<Text size="xs" c="dimmed">
					Reconnecting
				</Text>
			</Group>
		</Alert>
	);
}

function AnnouncementComposer() {
	return (
		<Card withBorder>
			<Stack gap="sm">
				<Title order={4}>New announcement</Title>
				<TextInput label="Title" defaultValue="Invoices can't be sent on Sunday night" />
				<Textarea
					label="Message"
					autosize
					minRows={3}
					defaultValue="We're upgrading our email provider between 02:00 and 03:00 (Lisbon). Invoices you send in that hour go out when it ends."
				/>
				<MultiSelect
					label="Show to"
					data={["Team plan", "Business plan", "Scale plan", "Admins only"]}
					defaultValue={["Business plan", "Scale plan"]}
				/>
				<Input.Wrapper label="Where">
					<Chip.Group multiple defaultValue={["banner"]}>
						<Group gap="xs" mt={4}>
							<Chip value="banner" size="xs">
								In-app banner
							</Chip>
							<Chip value="email" size="xs">
								Email
							</Chip>
						</Group>
					</Chip.Group>
				</Input.Wrapper>
				<Group justify="flex-end" gap="xs" mt="xs">
					<Button variant="default">Save draft</Button>
					<Button>Publish</Button>
				</Group>
			</Stack>
		</Card>
	);
}

export function StatesArea() {
	return (
		<PreviewGrid>
			<PreviewItem>
				<NotificationInbox />
			</PreviewItem>
			<PreviewItem span="half">
				<KeyboardShortcuts />
			</PreviewItem>
			<PreviewItem>
				<UndoToast />
			</PreviewItem>
			<PreviewItem span="twoThirds">
				<LoadingSkeleton />
			</PreviewItem>
			<PreviewItem span="full">
				<SimpleGrid minColWidth={240}>
					<FirstRunEmptyState />
					<NoResults />
					<AccessDenied />
					<ErrorPanel />
				</SimpleGrid>
			</PreviewItem>
			<PreviewItem>
				<NotFoundPage />
			</PreviewItem>
			<PreviewItem>
				<OfflineBanner />
			</PreviewItem>
			<PreviewItem>
				<AnnouncementComposer />
			</PreviewItem>
		</PreviewGrid>
	);
}

export function BuildingBlocksArea() {
	return (
		<PreviewGrid>
			<PreviewItem>
				<Group gap="xs">
					<StatusBadge status="paid" />
					<StatusBadge status="overdue" />
					<StatusBadge status="draft" />
					<StatusBadge status="running" />
				</Group>
			</PreviewItem>
			<PreviewItem>
				<Stack gap="sm">
					<EntityLabel
						name={people.jane.name}
						initials={people.jane.initials}
						color={people.jane.color}
						detail={"Owner"}
					/>
					<EntityLabel name="Production backend" detail="API key" icon={<TbKey />} color="gray" />
				</Stack>
			</PreviewItem>
			<PreviewItem>
				<Text size="sm">
					Updated <RelativeTime date={ago({ hours: 2 })} />
				</Text>
			</PreviewItem>
			<PreviewItem>
				<Stack gap="xs">
					<CopyableCode value="inv_01JD8K2M4Q" />
					<CopyableCode value="whsec_9fK2mQ7xLp" masked="whsec_••••••••" />
				</Stack>
			</PreviewItem>
			<PreviewItem>
				<Group gap="xs">
					<Shortcut keys={["mod", "K"]} />
					<Shortcut keys={["G", "I"]} />
				</Group>
			</PreviewItem>
			<PreviewItem span="half">
				<Panel
					title="API keys"
					description="Keys act as the workspace, not as a person."
					actions={<Button size="xs">Create key</Button>}
				>
					<Text size="sm" c="dimmed">
						Body
					</Text>
				</Panel>
			</PreviewItem>
			<PreviewItem span="half">
				<DialogFrame
					title="Revoke this key?"
					footer={
						<>
							<Button variant="default">Cancel</Button>
							<Button color="red">Revoke</Button>
						</>
					}
				>
					<Text size="sm">Requests using it start failing straight away.</Text>
				</DialogFrame>
			</PreviewItem>
			<PreviewItem span="half">
				<CheckboxMatrix
					columns={["Owner", "Admin", "Member"]}
					lockedColumns={[0]}
					groups={[
						{
							label: "Invoices",
							rows: [
								{ label: "View", values: [true, true, true] },
								{ label: "Void", values: [true, true, false] },
							],
						},
					]}
				/>
			</PreviewItem>
		</PreviewGrid>
	);
}

const previewAreas = [
	{ value: "NavigationArea", label: "Navigation and layout", Area: NavigationArea },
	{ value: "AccessArea", label: "Access", Area: AccessArea },
	{ value: "HomeArea", label: "Home and onboarding", Area: HomeArea },
	{ value: "MembersArea", label: "Members and permissions", Area: MembersArea },
	{ value: "SecurityArea", label: "Account and security", Area: SecurityArea },
	{ value: "SettingsArea", label: "Settings", Area: SettingsArea },
	{ value: "ApiArea", label: "API and enterprise setup", Area: ApiArea },
	{ value: "RecordsArea", label: "Tables and records", Area: RecordsArea },
	{ value: "FormsArea", label: "Forms and data entry", Area: FormsArea },
	{ value: "WorkflowsArea", label: "Workflows and review", Area: WorkflowsArea },
	{ value: "OperationsArea", label: "Operations", Area: OperationsArea },
	{ value: "BillingArea", label: "Billing and plans", Area: BillingArea },
	{ value: "StatesArea", label: "Notifications, help and states", Area: StatesArea },
	{ value: "StaffArea", label: "Staff tools", Area: StaffArea },
	{ value: "AiArea", label: "AI-assisted", Area: AiArea },
	{ value: "BuildingBlocksArea", label: "Building blocks", Area: BuildingBlocksArea },
];

export function BackofficePreview() {
	return (
		<Tabs defaultValue={previewAreas[0].value} keepMounted={false}>
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
