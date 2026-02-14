import { ArrowRight } from 'lucide-react'

interface StoryCardProps {
  logo: string
  logoAlt: string
  testimonial: string
  companyName: string
  category: string
  storyLink: string
  className?: string
}

/**
 * StoryCard Component - Individual customer story card for testimonial display
 *
 * Displays:
 * - Company logo in centered container
 * - Customer testimonial/quote
 * - Company name and category
 * - "Read Customer Story" link with arrow icon
 *
 * @example
 * ```tsx
 * <StoryCard
 *   logo="/image/clients/telkom.png"
 *   logoAlt="Telkom"
 *   testimonial="Amazing service that transformed our business..."
 *   companyName="Telkom"
 *   category="Private Sector"
 *   storyLink="/customer-stories/telkom"
 * />
 * ```
 */
export function StoryCard({
  logo,
  logoAlt,
  testimonial,
  companyName,
  category,
  storyLink,
  className = '',
}: StoryCardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-lg
        p-6
        shadow-sm
        hover:shadow-md
        transition-shadow
        duration-200
        flex flex-col
        h-full
        ${className}
      `}
    >
      {/* Logo Container */}
      <div className="mb-4 flex items-center justify-center bg-gray-50 p-4 rounded-md h-[120px]">
        <img
          src={logo}
          alt={logoAlt}
          className="h-full w-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Testimonial Quote */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4 italic flex-grow">
        "{testimonial}"
      </p>

      {/* Company Info */}
      <div className="mb-4">
        <h3 className="font-bold text-gray-900 mb-1">{companyName}</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>

      {/* Read Story Link */}
      <a
        href={storyLink}
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors duration-200"
      >
        Read Customer Story
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}
