import type { LucideIcon } from 'lucide-react';

/**
 * Individual service within a category
 */
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
}

/**
 * Service category with Bento Grid sizing and full details
 */
export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  description: string; // Max 160 chars for card display
  fullDescription: string; // Full description for drawer
  icon: LucideIcon;
  gradient: string; // Tailwind gradient classes
  size: 'hero' | 'medium' | 'compact'; // Bento Grid size variant
  serviceNames: string[]; // 3 service names displayed as tags
  features: string[]; // Key features (4-6 items) for drawer
  technologies: string[]; // Tech stack (4-6 items) for drawer
  benefits: string[]; // Business benefits (4+ items) for drawer
}

/**
 * Props for BentoCard component
 */
export interface BentoCardProps {
  category: ServiceCategory;
  onExpand: () => void;
}

/**
 * Props for ServiceDrawer component
 */
export interface ServiceDrawerProps {
  isOpen: boolean;
  category: ServiceCategory | null;
  onClose: () => void;
}
