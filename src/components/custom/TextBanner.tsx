interface TextBannerProps {
  heading: string
  description: string
  headingColor?: string
  descriptionColor?: string
  className?: string
}

/**
 * TextBanner Component
 * Displays heading and description text with proper typography
 *
 * @example
 * ```tsx
 * <TextBanner
 *   heading="Solutions of Virtual Tour 360°"
 *   description="Experience immersive virtual tours..."
 *   headingColor="text-white"
 *   descriptionColor="text-gray-100"
 * />
 * ```
 */
export function TextBanner({
  heading,
  description,
  headingColor = 'text-white',
  descriptionColor = 'text-gray-100',
  className = '',
}: TextBannerProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h1
        className={`
          text-3xl lg:text-4xl xl:text-5xl
          font-bold leading-tight
          ${headingColor}
        `}
      >
        {heading}
      </h1>
      <p
        className={`
          text-base lg:text-lg
          leading-relaxed
          ${descriptionColor}
          max-w-md
        `}
      >
        {description}
      </p>
    </div>
  )
}
