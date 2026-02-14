interface MisiBoxProps {
  iconSrc?: string
  heading?: string
  description?: string
  className?: string
}

/**
 * MisiBox Component - REQ003: Tentang Kami Section
 *
 * Card component for displaying company mission
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
 * <MisiBox
 *   iconSrc="/image/icon-misi.png"
 *   heading="Misi"
 *   description="Menyediakan solusi teknologi informasi berkualitas berbasis kebutuhan. Menghasilkan produk IT yang praktis bermanfaat, dan digunakan oleh banyak orang."
 * />
 * ```
 */
export function MisiBox({
  iconSrc = '/image/icon-misi.png',
  heading = 'Misi',
  description = 'Menyediakan solusi teknologi informasi berkualitas berbasis kebutuhan. Menghasilkan produk IT yang praktis bermanfaat, dan digunakan oleh banyak orang.',
  className = '',
}: MisiBoxProps) {
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
