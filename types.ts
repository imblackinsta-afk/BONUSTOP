import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Casino {
  id: number;
  rank: number;
  name: string;
  topBadge: {
    text: string;
    icon: LucideIcon;
  };
  types: {
    text: string;
    icon: LucideIcon;
  }[];
  features: {
    text: string;
    icon: LucideIcon;
  }[];
  bonus: {
    value: string;
    description: string;
  };
  link: string;
  rating: number;
  votes: number;
}

export interface ComparisonItem {
  value: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}