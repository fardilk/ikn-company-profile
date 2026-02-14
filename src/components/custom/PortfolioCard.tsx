import { ArrowRight } from 'lucide-react'
import type { ComponentType, SVGAttributes } from 'react'

interface PortfolioCardProps {
  icon: ComponentType<SVGAttributes<SVGElement>>
  title: string
  description: string
  learnMoreHref?: string
  learnMoreText?: string
}

/**
 * PortfolioCard Component - REQ005: Portfolio Section
 *
 * Individual portfolio item card component
 * Structure:
 * - Icon (transparent, no background) - 48px centered at top
 * - Project title (heading 3)
 * - Brief description (2-3 sentences)
 * - "Pelajari Lebih Lanjut" text link with arrow icon
 * - Hover effects on link
 *
 * Based on reference: docs/requirement/portfolio/portfolio.png
 *
 * @example
 * ```tsx
 * <PortfolioCard
 *   icon={ShoppingBag}
 *   title="Virtual Tour 360°"
 *   description="Immersive 360-degree virtual tour experience..."
 *   learnMoreHref="#"
 *   learnMoreText="Pelajari Lebih Lanjut"
 * />
 * ```
 */
export function PortfolioCard({
  icon: Icon,
  title,
  description,
  learnMoreHref = '#',
  learnMoreText = 'Pelajari Lebih Lanjut',
}: PortfolioCardProps) {
  return (
    <div className="flex flex-col items-start hover:shadow-lg transition-shadow duration-300 p-6 lg:p-8 bg-white">
      {/* Icon - Transparent, no background */}
      <div className="mb-6 lg:mb-8">
        <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-gray-900 stroke-[1.5]" />
      </div>

      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Learn More Link */}
      <a
        href={learnMoreHref}
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors duration-200"
      >
        {learnMoreText}
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  )
}
