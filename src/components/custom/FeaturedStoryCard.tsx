interface FeaturedStoryCardProps {
  image: string
  imageAlt: string
  title: string
  description: string
  storyLink: string
  className?: string
}

/**
 * FeaturedStoryCard Component - REQ006 Revision: Overlapping featured story layout
 *
 * Displays a featured customer story with:
 * - Left side: Portfolio image (square 1:1, rounded 20%)
 * - Right side: Title, description, and link in white box with border (overlapping)
 * - Overlapping effect: Text box overlaps image slightly
 * - White background with outer border and 20% border radius on text box
 *
 * Layout: Image (left) and Text box (right, overlapping)
 * Image: square aspect ratio, 20% border radius
 * Text box: contains h3 title, paragraph description, and "Read Story" link
 *
 * @example
 * ```tsx
 * <FeaturedStoryCard
 *   image="/image/portfolio/porto-ikn-01.png"
 *   imageAlt="Portfolio 1"
 *   title="Government Digital Transformation"
 *   description="Successful digitalization project for government sector..."
 *   companyName="Portfolio 1"
 *   storyLink="/customer-stories/portfolio-1"
 * />
 * ```
 */
export function FeaturedStoryCard({
  image,
  imageAlt,
  title,
  description,
  storyLink,
  className = '',
}: FeaturedStoryCardProps) {
  return (
    <div
      className={`
        relative
        w-full
        flex
        items-center
        gap-0
        ${className}
      `}
    >
      {/* Left Side - Image Container (square 1:1, 60% width) */}
      <div className="w-3/5 flex-shrink-0">
        <div className="aspect-square">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Side - Text Container (overlapping, in front) */}
      <div className="absolute right-0 w-3/5 z-20 pr-8 pl-12">
        <div
          className={`
            bg-white
            rounded-[20px]
            border-2
            border-gray-200
            p-8
            shadow-lg
            hover:shadow-xl
            transition-shadow
            duration-200
            h-full
            flex
            flex-col
            justify-center
          `}
        >
          {/* Heading 3 */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h3>

          {/* Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Read Story Link */}
          <a
            href={storyLink}
            className="inline-block text-indigo-600 font-semibold hover:text-indigo-500 transition-colors duration-200 text-sm w-fit"
          >
            Read Customer Story →
          </a>
        </div>
      </div>
    </div>
  )
}
