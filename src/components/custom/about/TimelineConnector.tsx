/**
 * TimelineConnector Component
 *
 * Vertical line segment connecting timeline markers.
 * Specifications: 2px width, h-16, indigo-600 color
 */
export function TimelineConnector() {
  return (
    <div
      className="w-0.5 h-16 bg-indigo-600 mx-auto"
      aria-hidden="true"
    />
  )
}
