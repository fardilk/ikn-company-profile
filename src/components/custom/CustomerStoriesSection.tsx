import { useState } from 'react'
import { TabNavigation } from './TabNavigation'
import { FeaturedStoryCard } from './FeaturedStoryCard'

interface CustomerStory {
  id: string
  company: string
  logo: string
  category: string
  testimonial: string
  slug: string
  featured: boolean
  portfolioImage?: string
  title?: string
  description?: string
}

interface Category {
  id: string
  name: string
  stories: CustomerStory[]
}

interface CustomerStoriesSectionProps {
  className?: string
  transparent?: boolean
}

/**
 * CustomerStoriesSection Component - REQ006: Customer Stories Section on Homepage
 *
 * Main section component displaying customer testimonials and case studies with
 * category classification (inspired by Deel.com pattern).
 *
 * Features:
 * - Tabbed category navigation
 * - 4 featured stories per category in responsive grid
 * - Story cards with logo, testimonial, company, and CTA
 * - Bottom CTAs for detailed stories and all clients page
 * - Full-width section with white background
 * - Mobile-responsive layout (1 col mobile, 2 cols tablet, 4 cols desktop)
 *
 * Structure:
 * - Section heading with eyebrow and accent line
 * - Category tab navigation
 * - Stories grid (responsive)
 * - Bottom CTAs ("Read Customer Story" and "See All Clients")
 *
 * @example
 * ```tsx
 * <CustomerStoriesSection />
 * ```
 */
export function CustomerStoriesSection({
  className = '',
  transparent = false,
}: CustomerStoriesSectionProps) {
  // Sample data - replace with actual client data from database
  const categories: Category[] = [
    {
      id: 'government',
      name: 'Government',
      stories: [
        {
          id: 'ombudsman',
          company: 'Ombudsman RI',
          logo: '/image/clients/ombudsman.png',
          category: 'Government',
          testimonial:
            'The virtual tour solution helped us showcase our office facilities and improve visitor engagement. Exceptional service and support.',
          slug: 'ombudsman-ri',
          featured: true,
          portfolioImage: '/image/portfolio/porto-ikn-01.png',
          title: 'Government Digital Transformation',
          description: 'Successful digitalization project for government sector with comprehensive IT solutions and system integration.',
        },
        {
          id: 'badan-pom',
          company: 'Badan POM',
          logo: '/image/clients/badan-pom.png',
          category: 'Government',
          testimonial:
            'Professional team delivered an outstanding website that enhanced our digital presence. Highly recommended!',
          slug: 'badan-pom',
          featured: true,
        },
        {
          id: 'kemendikbud',
          company: 'Kemendikbud',
          logo: '/image/clients/kemendikbud.png',
          category: 'Government',
          testimonial:
            'Their expertise in building scalable applications helped us serve millions of users effectively.',
          slug: 'kemendikbud',
          featured: true,
        },
        {
          id: 'kementerian-lain',
          company: 'Kementerian Sosial',
          logo: '/image/clients/kemensos.png',
          category: 'Government',
          testimonial:
            'Transformed our digital infrastructure with innovative solutions and excellent project management.',
          slug: 'kemensos',
          featured: true,
        },
      ],
    },
    {
      id: 'education',
      name: 'Education',
      stories: [
        {
          id: 'univ-1',
          company: 'Universitas Indonesia',
          logo: '/image/clients/universitas-indonesia.png',
          category: 'Education',
          testimonial:
            'Their mobile app development services helped us create an engaging platform for our students.',
          slug: 'universitas-indonesia',
          featured: true,
          portfolioImage: '/image/portfolio/porto-ikn-02.png',
          title: 'Education Platform Development',
          description: 'Modern educational mobile platform connecting students and faculty with interactive learning management system.',
        },
        {
          id: 'univ-2',
          company: 'ITB',
          logo: '/image/clients/itb.png',
          category: 'Education',
          testimonial:
            'Excellent web development team that understands educational institution needs perfectly.',
          slug: 'itb',
          featured: true,
        },
        {
          id: 'univ-3',
          company: 'UNDIP',
          logo: '/image/clients/undip.png',
          category: 'Education',
          testimonial:
            'Virtual tour feature greatly improved our campus recruitment and student onboarding process.',
          slug: 'undip',
          featured: true,
        },
        {
          id: 'univ-4',
          company: 'Universitas Gadjah Mada',
          logo: '/image/clients/ugm.png',
          category: 'Education',
          testimonial:
            'Professional approach and technical excellence made our digital transformation successful.',
          slug: 'ugm',
          featured: true,
        },
      ],
    },
    {
      id: 'private',
      name: 'Private Sector',
      stories: [
        {
          id: 'telkom',
          company: 'Telkom',
          logo: '/image/clients/telkom.png',
          category: 'Private Sector',
          testimonial:
            'Partner with them for multiple projects. Consistently delivers high-quality solutions on time.',
          slug: 'telkom',
          featured: true,
          portfolioImage: '/image/portfolio/porto-ikn-03.png',
          title: 'Enterprise Solutions Integration',
          description: 'Comprehensive enterprise systems integration providing HR management, resource planning, and operational optimization.',
        },
        {
          id: 'hotel-chain',
          company: 'Hotel Premium Chain',
          logo: '/image/clients/hotel-premium.png',
          category: 'Private Sector',
          testimonial:
            'Their virtual tour technology increased our booking rates significantly. Outstanding results!',
          slug: 'hotel-premium',
          featured: true,
        },
        {
          id: 'tech-startup',
          company: 'Tech Innovation Hub',
          logo: '/image/clients/tech-hub.png',
          category: 'Private Sector',
          testimonial:
            'Flexible, responsive team that adapted perfectly to our startup environment and rapid changes.',
          slug: 'tech-hub',
          featured: true,
        },
        {
          id: 'retail-business',
          company: 'Retail Business Solutions',
          logo: '/image/clients/retail-solutions.png',
          category: 'Private Sector',
          testimonial:
            'Built a custom e-commerce platform that exceeded our expectations. Great technical expertise.',
          slug: 'retail-solutions',
          featured: true,
        },
      ],
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      stories: [
        {
          id: 'hospital-1',
          company: 'RS Advance Medical',
          logo: '/image/clients/rs-advance.png',
          category: 'Healthcare',
          testimonial:
            'Created a secure patient portal that improved our service delivery and patient satisfaction.',
          slug: 'rs-advance',
          featured: true,
          portfolioImage: '/image/portfolio/porto-ikn-04.png',
          title: 'Healthcare Digital Solutions',
          description: 'Secure patient management system with telemedicine capabilities and integrated health records for enhanced patient care.',
        },
        {
          id: 'clinic-chain',
          company: 'Klinik Indonesia Network',
          logo: '/image/clients/klinik-network.png',
          category: 'Healthcare',
          testimonial:
            'Their mobile app development helped us reach more patients and streamline appointments.',
          slug: 'klinik-network',
          featured: true,
        },
        {
          id: 'medical-lab',
          company: 'Laboratorium Klinik XYZ',
          logo: '/image/clients/lab-xyz.png',
          category: 'Healthcare',
          testimonial:
            'Integrated our systems seamlessly. Technical support team was incredibly responsive.',
          slug: 'lab-xyz',
          featured: true,
        },
        {
          id: 'health-tech',
          company: 'Health Tech Solutions',
          logo: '/image/clients/health-tech.png',
          category: 'Healthcare',
          testimonial:
            'Innovative approach to healthcare technology. Partnership exceeded all our expectations.',
          slug: 'health-tech',
          featured: true,
        },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState('government')

  // Get featured stories for active category
  const activeCategory_Data = categories.find((c) => c.id === activeCategory)
  const featuredStory = activeCategory_Data?.stories.filter((s) => s.featured).slice(0, 1)[0]

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
            Kisah Klien Kami
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 leading-tight">
            Cerita Sukses Dari Klien Kami
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Lihat bagaimana kami membantu bisnis di berbagai industri mencapai kesuksesan digital mereka.
          </p>
        </div>

        {/* Tab Navigation - Pill Style */}
        <TabNavigation
          tabs={categories.map((cat) => ({
            id: cat.id,
            label: cat.name,
          }))}
          activeTab={activeCategory}
          onTabChange={setActiveCategory}
        />

        {/* Featured Story Card - Overlapping Layout */}
        {featuredStory && (
          <div className="mb-16">
            <FeaturedStoryCard
              image={featuredStory.portfolioImage || '/image/portfolio/porto-ikn-01.png'}
              imageAlt={featuredStory.company}
              title={featuredStory.title || featuredStory.company}
              description={
                featuredStory.description ||
                `${featuredStory.company} - ${featuredStory.category} case study`
              }
              storyLink={`/customer-stories/${featuredStory.slug}`}
            />
          </div>
        )}


        {/* Bottom CTAs Section - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-12 border-t border-gray-200">
          {/* Left Side - Content Group (70%) */}
          <div className="w-full lg:w-7/10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Temukan Lebih Banyak Kisah Sukses
            </h3>
            <p className="text-lg text-gray-600">
              Jelajahi portfolio lengkap klien kami dan pelajari bagaimana kami membantu berbagai industri mencapai kesuksesan digital.
            </p>
          </div>

          {/* Right Side - Button (30%) */}
          <div className="w-full lg:w-3/10 flex items-center justify-center lg:justify-end">
            <a
              href="/clients"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors duration-200 w-full lg:w-auto"
            >
              Lihat Semua Klien
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
