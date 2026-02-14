import { Banner } from '@/components/custom/Banner'
import { TentangKami } from '@/components/custom/TentangKami'
import { LayananSection } from '@/components/custom/LayananSection'
import { PortfolioSection } from '@/components/custom/PortfolioSection'
import { CustomerStoriesSection } from '@/components/custom/CustomerStoriesSection'
import { CallToActionSection } from '@/components/custom/CallToActionSection'
import { SectionContainer } from '@/components/layouts/SectionContainer'

export function Home() {
  // WhatsApp link configuration
  const WHATSAPP_NUMBER = '6287887650480'
  const WHATSAPP_MESSAGE = 'Hi, I would like to book a demo for Virtual Tour 360°'
  const demoLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner Section - REQ002: Implement Banner on Homepage */}
      <Banner
        tag="Flagship Product"
        heading="Solutions of Virtual Tour 360°"
        description="Experience immersive virtual tours with cutting-edge technology. Perfect for real estate, hospitality, museums, and corporate showcases."
        imageSrc="/image/image-banner.png"
        imageAlt="Virtual Tour 360°"
        demoLink={demoLink}
        contactLink="/contact"
        gradient="default"
      />

      {/* Tentang Kami Section - REQ003: Tentang Kami */}
      {/* REQ007: Zebra striping - index 0 (even) = white background */}
      <SectionContainer index={0}>
        <TentangKami transparent />
      </SectionContainer>

      {/* Layanan Section - REQ004: Services */}
      {/* REQ007: Zebra striping - index 1 (odd) = light gray background */}
      <SectionContainer index={1}>
        <LayananSection transparent />
      </SectionContainer>

      {/* Portfolio Section - REQ005: Portfolio Section on Homepage */}
      {/* REQ007: Zebra striping - index 2 (even) = white background */}
      <SectionContainer index={2}>
        <PortfolioSection transparent />
      </SectionContainer>

      {/* Customer Stories Section - REQ006: Customer Stories Section on Homepage */}
      {/* REQ007: Zebra striping - index 3 (odd) = light gray background */}
      <SectionContainer index={3}>
        <CustomerStoriesSection transparent />
      </SectionContainer>

      {/* Call to Action Section - REQ009: Call to Action Section on Homepage */}
      {/* REQ007: Zebra striping - index 4 (even) = white background */}
      <SectionContainer index={4}>
        <CallToActionSection transparent />
      </SectionContainer>
    </div>
  )
}
