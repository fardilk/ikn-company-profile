import { PhilosophySection } from '@/components/custom/about/PhilosophySection'
import { VisionMissionAboutSection } from '@/components/custom/about/VisionMissionAboutSection'
import { TeamSection } from '@/components/custom/about/TeamSection'
import { TimelineSection } from '@/components/custom/about/TimelineSection'
import { SpecializationsSection } from '@/components/custom/about/SpecializationsSection'
import { AboutCTASection } from '@/components/custom/about/AboutCTASection'
import { NewsletterTeamSection } from '@/components/custom/about/NewsletterTeamSection'

/**
 * TentangKami (About Us) Page
 *
 * Structure:
 * 1. Philosophy - Company values and culture
 * 2. Vision & Mission - Strategic direction
 * 3. Team - 8 team members with profile links
 * 4. Timeline - Company history (2018-2024)
 * 5. Specializations - 6 expertise areas
 * 6. CTA - Unique call to action
 * 7. Newsletter & Team CTA - Engagement options
 */
export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Philosophy Section */}
      <PhilosophySection />

      {/* 2. Vision & Mission Section */}
      <VisionMissionAboutSection />

      {/* 3. Team Section */}
      <TeamSection />

      {/* 4. Timeline Section */}
      <TimelineSection />

      {/* 5. Specializations Section */}
      <SpecializationsSection />

      {/* 6. Call to Action Section */}
      <AboutCTASection />

      {/* 7. Newsletter & Team CTA */}
      <NewsletterTeamSection />
    </div>
  )
}
