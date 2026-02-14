interface CallToActionSectionProps {
  className?: string
  transparent?: boolean
}

/**
 * CallToActionSection Component - REQ009: Call to Action Section
 *
 * Displays a 4-step process flow with:
 * - Catchy heading: "Begin Digital Transformation with IKN"
 * - Left side (70%): 4-step numbered list with descriptions and connecting lines
 * - Right side (30%): Image placeholder
 * - Bottom CTA: "Hubungi Kami" button linking to /contact page
 *
 * Steps:
 * 1. Schedule a Consultation
 * 2. Share Your Requirements
 * 3. Receive Our Solution
 * 4. Start Development
 *
 * @example
 * ```tsx
 * <CallToActionSection />
 * ```
 */
export function CallToActionSection({
  className = '',
  transparent = false,
}: CallToActionSectionProps) {
  const steps = [
    {
      number: 1,
      title: 'Jadwalkan Konsultasi',
      description:
        'Atur pertemuan dengan tim ahli kami untuk membahas detail proyek dan memahami kebutuhan spesifik bisnis Anda secara mendalam.',
    },
    {
      number: 2,
      title: 'Bagikan Kebutuhan Anda',
      description:
        'Diskusikan kebutuhan bisnis, tantangan, dan tujuan jangka panjang Anda. Tim kami akan menganalisis setiap aspek untuk merancang strategi optimal.',
    },
    {
      number: 3,
      title: 'Terima Solusi Kami',
      description:
        'Dapatkan rekomendasi solusi yang disesuaikan dengan kebutuhan Anda, mencakup teknologi terkini, timeline, dan estimasi investasi yang jelas.',
    },
    {
      number: 4,
      title: 'Mulai Pengembangan',
      description:
        'Mulailah transformasi digital dengan tim berpengalaman kami. Dukungan penuh dari perencanaan, pengembangan, testing, hingga peluncuran dengan kualitas terbaik.',
    },
  ]

  return (
    <section
      className={`
        w-full
        ${!transparent ? 'bg-white' : ''}
        py-12 lg:py-16 xl:py-20
        ${className}
      `}
    >
      {/* Container: 80% width centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          {/* Accent Line */}
          <div className="w-16 h-0.5 bg-indigo-600 mb-6" />

          {/* Eyebrow Label */}
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
            BERGERAK BERSAMA KAMI
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
            Mulai Transformasi Digital Bersama IKN
          </h2>
        </div>

        {/* Main Content - 50/50 Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch mb-12">
          {/* Left Side - Steps (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Steps List with Connecting Lines */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex gap-6">
                    {/* Step Number with Line */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      {/* Connecting Line (not on last step) */}
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-16 bg-indigo-600 mt-4" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pt-2 pb-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image (50%) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="/image/pesan-cta.png"
              alt="Transformasi Digital - Call to Action Visual"
              className="w-full h-auto rounded-lg object-cover shadow-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors duration-200"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  )
}
