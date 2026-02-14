import { TimelineItem } from './TimelineItem'
import type { TimelineEvent } from './types'

interface TimelineListProps {
  events: TimelineEvent[]
}

/**
 * TimelineList Component
 *
 * Renders timeline events with alternating layout:
 * - Each card has its own marker
 * - Left items: normal position
 * - Right items: offset downward
 */
export function TimelineList({ events }: TimelineListProps) {
  return (
    <>
      {/* Desktop Layout - Alternating with offset */}
      <div className="hidden lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 1fr', gridAutoRows: 'auto' }}>
        {events.map((event, index) => {
          const isLeft = index % 2 === 0

          if (isLeft) {
            // Left side - normal position
            return (
              <div key={event.id} className="flex flex-col gap-4">
                {/* Marker + Card together on left */}
                <div className="flex items-start gap-4">
                  <TimelineItem
                    event={event}
                    index={index}
                    isLast={index === events.length - 1}
                    side="marker"
                  />
                  <TimelineItem
                    event={event}
                    index={index}
                    isLast={index === events.length - 1}
                    side="card"
                  />
                </div>
              </div>
            )
          } else {
            // Right side - offset down
            return (
              <div
                key={event.id}
                className="flex flex-col gap-4"
                style={{ gridColumn: '2', marginTop: '120px' }} // Offset ke bawah
              >
                {/* Marker + Card together on right */}
                <div className="flex items-start gap-4">
                  <TimelineItem
                    event={event}
                    index={index}
                    isLast={index === events.length - 1}
                    side="marker"
                  />
                  <TimelineItem
                    event={event}
                    index={index}
                    isLast={index === events.length - 1}
                    side="card"
                  />
                </div>
              </div>
            )
          }
        })}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-12">
        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
            isLast={index === events.length - 1}
            side="mobile"
          />
        ))}
      </div>
    </>
  )
}
