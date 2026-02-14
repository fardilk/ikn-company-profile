import type { LucideIcon } from 'lucide-react'

/**
 * TypeScript Interfaces for Timeline Components
 */

export interface TimelineEvent {
  id: string
  date: string // ISO 8601 format (e.g., "2018-01")
  year: string
  title: string
  description: string
  expandedContent?: string[] // Multiple paragraphs for expanded card content
  icon: LucideIcon
  category?: 'Foundation' | 'Growth' | 'Product' | 'Award'
  link?: string
}

export interface TimelineProps {
  events: TimelineEvent[]
}
