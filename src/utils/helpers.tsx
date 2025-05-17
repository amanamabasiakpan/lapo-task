import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { CreditCard, Building2, ShieldCheck, Users, Box, FileText, History, Settings, LayoutDashboard, LogOut } from 'lucide-react';

type IconMap = {
  [key: string]: LucideIcon;
};

export const getIconComponent = (iconName: string, size: number = 18, className: string = '') => {
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
  return IconComponent ? React.createElement(IconComponent, { size, className }) : null;
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Ready':
      return 'text-green-600 bg-green-50';
    case 'In Progress':
      return 'text-yellow-600 bg-yellow-50';
    case 'Acknowledged':
      return 'text-blue-600 bg-blue-50';
    case 'Pending':
      return 'text-gray-600 bg-gray-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const getColorByType = (type: string): string => {
  switch (type) {
    case 'blue':
      return 'text-blue-600';
    case 'purple':
      return 'text-purple-600';
    case 'green':
      return 'text-green-600';
    case 'orange':
      return 'text-orange-500';
    default:
      return 'text-gray-600';
  }
}; 