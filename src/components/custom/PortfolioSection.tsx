import { PortfolioCard } from './PortfolioCard'
import { Building2, Briefcase, Map } from 'lucide-react'

interface PortfolioSectionProps {
  className?: string
  transparent?: boolean
}

/**
 * PortfolioSection Component - REQ005: Portfolio Section on Homepage
 *
 * Main section component displaying featured portfolio projects
 * Structure:
 * - Full-width section with white background
 * - Centered 80% max-width container (max-w-7xl)
 * - Section heading with eyebrow label and accent line
 * - Three-column responsive grid of portfolio cards with icons
 * - Proper spacing and responsive typography
 *
 * Based on reference: docs/requirement/portfolio/portfolio.png
 *
 * @example
 * ```tsx
 * <PortfolioSection />
 * ```
 */
export function PortfolioSection({
  className = '',
  transparent = false,
}: PortfolioSectionProps) {
  const portfolioItems = [
    {
      icon: Building2,
      title: 'Government Sector',
      description:
        'Portfolio kami di bidang governmental mencakup digitalisasi sektor pemerintahan. Kami telah membantu berbagai instansi pemerintah dalam transformasi digital dan modernisasi layanan publik.',
    },
    {
      icon: Briefcase,
      title: 'Enterprise',
      description:
        'Solusi enterprise seperti human resources systems dan aplikasi penunjang kinerja karyawan. Kami membantu perusahaan meningkatkan produktivitas dan profitabilitas melalui teknologi.',
    },
    {
      icon: Map,
      title: 'Spatial',
      description:
        'Spesialisasi kami dalam pemetaan ruang dan visualisasi spatial. Teknologi ini memungkinkan klien untuk memahami dan memanfaatkan area geografis dengan lebih efektif.',
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
            Portofolio Kami
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 leading-tight">
            Infini Kreasi Nusantara by Industry
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              learnMoreHref="#"
              learnMoreText="Pelajari Lebih Lanjut"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
