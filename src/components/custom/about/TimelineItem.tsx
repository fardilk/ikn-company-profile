import { TimelineMarker } from './TimelineMarker'
import { TimelineConnector } from './TimelineConnector'
import type { TimelineEvent } from './types'

interface TimelineItemProps {
  event: TimelineEvent
  index: number
  isLast: boolean
  side?: 'card' | 'marker' | 'mobile'
}

/**
 * TimelineItem Component
 *
 * Renders timeline event card or marker.
 * Card expands downward with content, marker next to it.
 */
export function TimelineItem({ event, isLast, side = 'mobile' }: TimelineItemProps) {
  // Marker only - small and compact
  if (side === 'marker') {
    return <TimelineMarker icon={event.icon} label={`${event.year} - ${event.title}`} />
  }

  // Card layout - expands downward with content
  if (side === 'card') {
    return (
      <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
        {/* Year */}
        <div className="text-3xl font-bold text-indigo-600 mb-2">{event.year}</div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>

        {/* Main description */}
        <p className="text-base text-gray-600 leading-relaxed mb-4">{event.description}</p>

        {/* Expanded content paragraphs */}
        {event.expandedContent && event.expandedContent.length > 0 && (
          <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
            {event.expandedContent.map((paragraph, idx) => (
              <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Optional link */}
        {event.link && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a href={event.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium text-sm">
              Pelajari Lebih Lanjut →
            </a>
          </div>
        )}
      </div>
    )
  }

  // Mobile layout - stacked with marker on left
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center flex-shrink-0">
        <TimelineMarker icon={event.icon} label={`${event.year} - ${event.title}`} />
        {!isLast && <TimelineConnector />}
      </div>

      {/* Card container */}
      <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
        {/* Year */}
        <div className="text-2xl font-bold text-indigo-600 mb-2">{event.year}</div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.title}</h3>

        {/* Main description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{event.description}</p>

        {/* Expanded content paragraphs */}
        {event.expandedContent && event.expandedContent.length > 0 && (
          <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
            {event.expandedContent.map((paragraph, idx) => (
              <p key={idx} className="text-xs text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Optional link */}
        {event.link && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a href={event.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium text-xs">
              Pelajari Lebih Lanjut →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
