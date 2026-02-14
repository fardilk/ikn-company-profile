import { TagChips } from './TagChips'
import { TextBanner } from './TextBanner'
import { BannerButtons } from './BannerButtons'

interface BannerProps {
  tag: string
  heading: string
  description: string
  imageSrc: string
  imageAlt: string
  demoLink: string
  contactLink: string
  gradient?: 'default' | 'blue' | 'purple'
  className?: string
}

/**
 * Banner Component - REQ002: Implement Banner on Homepage
 *
 * Hero banner with 50/50 text-image layout
 * Composed of:
 * - TagChips: Brand/feature tag
 * - TextBanner: Heading + description
 * - BannerButtons: Demo & Contact action buttons
 * - Image container: Right-side image display
 *
 * @example
 * ```tsx
 * <Banner
 *   tag="Flagship Product"
 *   heading="Solutions of Virtual Tour 360°"
 *   description="Experience immersive virtual tours with cutting-edge technology..."
 *   imageSrc="/image/image-banner.png"
 *   imageAlt="Virtual Tour 360"
 *   demoLink="https://wa.me/6287887650480"
 *   contactLink="/contact"
 *   gradient="default"
 * />
 * ```
 */
export function Banner({
  tag,
  heading,
  description,
  imageSrc,
  imageAlt,
  demoLink,
  contactLink,
  gradient = 'default',
  className = '',
}: BannerProps) {
  const gradientClasses = {
    default: 'from-[#CBECF9] to-[#F8FCFE]',
    blue: 'from-[#1E40AF] to-[#60A5FA]',
    purple: 'from-[#6B21A8] to-[#D946EF]',
  }

  return (
    <section
      className={`
        bg-gradient-to-r ${gradientClasses[gradient]}
        py-12 lg:py-16 xl:py-24
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Content (left 50%) + Image (right 50%) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left side - Content Container (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Tag Component - wrap in div with w-fit to hug content width */}
            <div className="w-fit">
              <TagChips label={tag} variant="primary" />
            </div>

            {/* Text Banner Component */}
            <TextBanner
              heading={heading}
              description={description}
              headingColor={gradient === 'default' ? 'text-gray-900' : 'text-white'}
              descriptionColor={
                gradient === 'default' ? 'text-gray-700' : 'text-gray-100'
              }
            />

            {/* Buttons Component */}
            <BannerButtons demoLink={demoLink} contactLink={contactLink} />
          </div>

          {/* Right side - Image Container (50%) */}
          <div className="w-full lg:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
