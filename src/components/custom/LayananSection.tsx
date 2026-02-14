import { ArrowRight } from 'lucide-react'

interface LayananSectionProps {
  className?: string
  transparent?: boolean
}

/**
 * LayananSection Component - REQ004: Services Section
 *
 * Corporate authority-driven text section with 50/50 layout
 * Structure:
 * - Content on left (50%)
 *   - Decorative accent line
 *   - Eyebrow label ("LAYANAN KAMI")
 *   - Large heading
 *   - Supporting paragraph (2-3 sentences)
 *   - Single CTA button linking to /layanan
 * - Image on right (50%)
 *
 * Design Philosophy:
 * - Text-driven confidence
 * - Corporate, authoritative aesthetic
 * - Generous white space signals premium
 * - Drives users to dedicated /layanan page
 * - Banner-style layout (content left, image right)
 *
 * @example
 * ```tsx
 * <LayananSection />
 * ```
 */
export function LayananSection({
  className = '',
  transparent = false,
}: LayananSectionProps) {
  return (
    <section
      className={`
        ${!transparent ? 'bg-white' : ''}
        py-12 lg:py-16 xl:py-24
        ${className}
      `}
    >
      {/* Container: 80% width centered, consistent with other sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Content (left 50%) + Image (right 50%) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left side - Content Container (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Decorative accent line */}
            <div className="w-16 h-0.5 bg-indigo-600 mb-2" />

            {/* Eyebrow label */}
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Layanan Kami
            </p>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Solusi Digital untuk Bisnis Anda
            </h2>

            {/* Supporting paragraph */}
            <p className="text-lg leading-relaxed text-gray-600">
              Kami menghadirkan layanan pengembangan website, aplikasi mobile,
              dan Virtual Tour 360° yang dirancang untuk mendorong pertumbuhan
              bisnis Anda secara terukur.
            </p>

            {/* CTA button */}
            <div className="mt-4">
              <a
                href="/layanan"
                className="inline-flex items-center w-full sm:w-auto justify-center rounded-lg
                           bg-indigo-600 px-8 py-4 text-base font-semibold text-white
                           shadow-sm hover:bg-indigo-500 transition-colors duration-200
                           focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Jelajahi Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Image Container (50%) */}
          <div className="w-full lg:w-1/2">
            <img
              src="/image/layanan-kami.png"
              alt="Layanan Kami"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
