import { createElement } from 'react';
import { CreditCard, Building2, ShieldCheck, Users, Box, FileText, History, Settings, LayoutDashboard, LogOut } from 'lucide-react';

interface IconMap {
  [key: string]: any;
}

export const getIconComponent = (iconName: string, size: number = 18, className: string = ''): React.ReactElement | null => {
  const icons: IconMap = {
    CreditCard,
    Building2,
    ShieldCheck,
    Users,
    Box,
    FileText,
    History,
    Settings,
    LayoutDashboard,
    LogOut
  };

  const IconComponent = icons[iconName];
  if (!IconComponent) return null;
  
  return createElement(IconComponent, { size, className });
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Ready':
      return 'text-emerald-600 bg-emerald-50';
    case 'In Progress':
      return 'text-amber-600 bg-amber-50';
    case 'Acknowledged':
      return 'text-sky-600 bg-sky-50';
    case 'Pending':
      return 'text-slate-600 bg-slate-50';
    default:
      return 'text-slate-600 bg-slate-50';
  }
};

export const getColorByType = (type: string): string => {
  switch (type) {
    case 'blue':
      return 'text-sky-600';
    case 'purple':
      return 'text-violet-600';
    case 'green':
      return 'text-emerald-600';
    case 'orange':
      return 'text-amber-500';
    default:
      return 'text-slate-600';
  }
}; 