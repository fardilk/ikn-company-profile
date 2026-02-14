interface VisiBoxProps {
  iconSrc?: string
  heading?: string
  description?: string
  className?: string
}

/**
 * VisiBox Component - REQ003: Tentang Kami Section
 *
 * Card component for displaying company vision
 * Features:
 * - Icon image at top
 * - Heading below icon
 * - Description text
 * - Centered vertical layout
 * - Light blue background (#F1F9FC)
 * - Responsive padding and sizing
 *
 * @example
 * ```tsx
 * <VisiBox
 *   iconSrc="/image/icon-visi.png"
 *   heading="Visi"
 *   description="Menjadi Perusahaan terdepan dalam teknologi informasi yang inovatif dan kreatif."
 * />
 * ```
 */
export function VisiBox({
  iconSrc = '/image/icon-visi.png',
  heading = 'Visi',
  description = 'Menjadi Perusahaan terdepan dalam teknologi informasi yang inovatif dan kreatif.',
  className = '',
}: VisiBoxProps) {
  return (
    <div
      className={`
        bg-[#F1F9FC]
        rounded-lg
        p-6 lg:p-8
        flex flex-col
        items-center
        justify-center
        text-center
        ${className}
      `}
    >
      {/* Icon */}
      <img
        src={iconSrc}
        alt={heading}
        className="w-16 h-16 mb-4 object-contain"
        loading="lazy"
      />

      {/* Heading */}
      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
        {heading}
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
