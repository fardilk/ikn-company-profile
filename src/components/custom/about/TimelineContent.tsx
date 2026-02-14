import { ArrowRight } from 'lucide-react'

interface TimelineContentProps {
  year: string
  datetime: string
  title: string
  description: string
  link?: string
}

/**
 * TimelineContent Component
 *
 * Displays the year, title, and description for a timeline event.
 * Includes semantic HTML with <time datetime=""> and proper heading structure.
 */
export function TimelineContent({
  year,
  datetime,
  title,
  description,
  link
}: TimelineContentProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 lg:p-6">
      <time
        dateTime={datetime}
        className="text-xl lg:text-3xl font-bold text-indigo-600 block mb-2"
      >
        {year}
      </time>
      <h3 className="text-base lg:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-base text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      {link && (
        <a
          href={link}
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
        >
          Pelajari Lebih Lanjut
          <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}
