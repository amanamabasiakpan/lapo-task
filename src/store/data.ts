// Card related interfaces
interface StatCard {
  title: string;
  icon: string;
  value: string;
  change: string;
  changeText: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
}

interface MonthlyIssuance {
  month: string;
  Instant: number;
  Personalized: number;
}

interface WeeklyIncome {
  day: string;
  income: number;
}

interface CardStatus {
  name: string;
  value: number;
}

interface RecentRequest {
  branch: string;
  type: 'Instant' | 'Personalized';
  quantity: number;
  status: 'Ready' | 'In Progress' | 'Acknowledged' | 'Pending';
}

// Navigation related interfaces
interface SidebarItem {
  label: string;
  icon: string;
  active?: boolean;
}

interface SidebarData {
  mainMenu: SidebarItem[];
  menuItems: SidebarItem[];
  cardMenu: SidebarItem[];
  authMenu: SidebarItem[];
  settingsMenu: SidebarItem[];
}

interface QuickAction {
  title: string;
  icon: string;
}

// Typed exports
export const statCardsData: StatCard[] = [
  {
    title: "Total Active Cards",
    icon: "CreditCard",
    value: "26,478",
    change: "+9%",
    changeText: "this month",
    color: "blue"
  },
  {
    title: "Total Personalized Cards",
    icon: "CreditCard",
    value: "15,703",
    change: "+8.6%",
    changeText: "this month",
    color: "purple"
  },
  {
    title: "Today's Revenue",
    icon: "CreditCard",
    value: "₦9.3M",
    change: "+6%",
    changeText: "vs yesterday",
    color: "green"
  },
  {
    title: "Pending Requests",
    icon: "CreditCard",
    value: "38",
    change: "",
    changeText: "Requires attention",
    color: "orange"
  },
];

export const monthlyIssuanceData: MonthlyIssuance[] = [
  { month: 'May', Instant: 10, Personalized: 40 },
  { month: 'Jun', Instant: 25, Personalized: 45 },
  { month: 'Jul', Instant: 15, Personalized: 20 },
  { month: 'Aug', Instant: 20, Personalized: 40 },
  { month: 'Sep', Instant: 15, Personalized: 45 },
  { month: 'Oct', Instant: 25, Personalized: 60 },
  { month: 'Nov', Instant: 20, Personalized: 50 },
];

export const weeklyIncomeData: WeeklyIncome[] = [
  { day: 'Mon', income: 40 },
  { day: 'Tue', income: 35 },
  { day: 'Wed', income: 20 },
  { day: 'Thu', income: 55 },
  { day: 'Fri', income: 40 },
  { day: 'Sat', income: 25 },
  { day: 'Sun', income: 75 },
];

export const cardStatusData: CardStatus[] = [
  { name: 'Active', value: 1800 },
  { name: 'Expired', value: 350 },
  { name: 'Inactive', value: 200 },
  { name: 'Blocked', value: 75 },
  { name: 'Lost', value: 25 },
];

export const cardStatusColors: string[] = ['#0ea5e9', '#fbbf24', '#6b7280', '#8b5cf6', '#ef4444'];

export const recentRequestsData: RecentRequest[] = [
  { branch: 'Corporate', type: 'Instant', quantity: 10, status: 'Ready' },
  { branch: 'Corporate', type: 'Personalized', quantity: 10, status: 'In Progress' },
  { branch: 'Corporate', type: 'Personalized', quantity: 10, status: 'Acknowledged' },
  { branch: 'Corporate', type: 'Instant', quantity: 10, status: 'Pending' },
];

export const sidebarData: SidebarData = {
  mainMenu: [
    { label: 'Dashboard', icon: 'LayoutDashboard', active: true },
  ],
  menuItems: [
    { label: 'Branches', icon: 'Building2' },
    { label: 'Roles', icon: 'ShieldCheck' },
    { label: 'Users', icon: 'Users' },
  ],
  cardMenu: [
    { label: 'Card Scheme', icon: 'CreditCard' },
    { label: 'Card Profile', icon: 'CreditCard' },
    { label: 'Card Request', icon: 'CreditCard' },
    { label: 'Stock', icon: 'Box' },
    { label: 'Cards', icon: 'CreditCard' },
  ],
  authMenu: [
    { label: 'Authorization List', icon: 'FileText' },
    { label: 'Authorization Queue', icon: 'History' },
  ],
  settingsMenu: [
    { label: 'Trail', icon: 'History' },
    { label: 'Account', icon: 'Settings' },
  ],
};

export const quickActionsData: QuickAction[] = [
  {
    title: 'Manage a Card',
    icon: 'CreditCard',
  },
  {
    title: 'Issue Instant Card',
    icon: 'CreditCard',
  },
  {
    title: 'Issue Personalized Card',
    icon: 'CreditCard',
  },
  {
    title: 'Review Card Requests',
    icon: 'CreditCard',
  },
];