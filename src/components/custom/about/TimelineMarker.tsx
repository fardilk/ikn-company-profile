import type { LucideIcon } from 'lucide-react'

interface TimelineMarkerProps {
  icon: LucideIcon
  label: string
}

/**
 * TimelineMarker Component
 *
 * Displays the circular marker with icon for timeline events.
 * Responsive sizing: 48px (desktop) → 32px (mobile)
 */
export function TimelineMarker({ icon: Icon, label }: TimelineMarkerProps) {
  return (
    <div
      className="relative z-10 flex-shrink-0"
      role="img"
      aria-label={label}
    >
      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-indigo-600 border-4 border-indigo-600 rounded-full flex items-center justify-center shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full lg:hidden" />
        <Icon className="hidden lg:block h-6 w-6 text-white" />
      </div>
    </div>
  )
}
