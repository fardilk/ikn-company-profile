import { VisiBox } from './VisiBox'
import { MisiBox } from './MisiBox'

interface TentangKamiProps {
  className?: string
  transparent?: boolean
}

/**
 * TentangKami Component - REQ003: About Us Section
 *
 * Main section component displaying company information
 * Structure:
 * - Full-width section with white background
 * - Centered 80% max-width container (max-w-7xl)
 * - Company description heading and paragraph
 * - Two-column Visi/Misi cards grid (responsive)
 * - Proper spacing and responsive typography
 *
 * @example
 * ```tsx
 * <TentangKami />
 * ```
 */
export function TentangKami({
  className = '',
  transparent = false,
}: TentangKamiProps) {
  const tentangKamiDescription = `Perusahaan kami bergerak di bidang IT konsultan khususnya Aplikasi Web, Aplikasi Mobile dan Virtual Tour 360°.Membuat sistem informasi, custom website, aplikasi mobile, optimasi aplikasi, dan virtual tour 360° adalah keseharian.
  Ide, inovasi, kreativitas menjadi hal utama yang selalu dikembangkan.`

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
        {/* Main container with vertical spacing */}
        <div className="space-y-12 lg:space-y-16">
          {/* Tentang Kami Intro Section */}
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Tentang Kami
            </h1>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {tentangKamiDescription}
            </p>
          </div>

          {/* Visi & Misi Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <VisiBox />
            <MisiBox />
          </div>
        </div>
      </div>
    </section>
  )
}
