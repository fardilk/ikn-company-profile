interface BannerButtonsProps {
  demoLink: string
  contactLink: string
  demoLabel?: string
  contactLabel?: string
  className?: string
}

/**
 * BannerButtons Component
 * Displays two action buttons: Demo and Contact
 * Demo button links to WhatsApp, Contact links to contact page
 *
 * @example
 * ```tsx
 * <BannerButtons
 *   demoLink="https://wa.me/6287887650480"
 *   contactLink="/contact"
 *   demoLabel="Book a Demo"
 *   contactLabel="Contact Us"
 * />
 * ```
 */
export function BannerButtons({
  demoLink,
  contactLink,
  demoLabel = 'Book a Demo',
  contactLabel = 'Contact Us',
  className = '',
}: BannerButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${className}`}>
      {/* Demo button - Links to WhatsApp */}
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          px-6 py-3
          bg-indigo-600 text-white
          font-semibold rounded-lg
          hover:bg-indigo-700
          transition-colors duration-200
          text-center
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
        `}
      >
        {demoLabel}
      </a>

      {/* Contact button - Links to contact page */}
      <a
        href={contactLink}
        className={`
          px-6 py-3
          bg-white text-indigo-600
          font-semibold rounded-lg
          hover:bg-gray-100
          transition-colors duration-200
          text-center
          border border-indigo-600
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
        `}
      >
        {contactLabel}
      </a>
    </div>
  )
}
