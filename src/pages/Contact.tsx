import { ContactHeroSection } from '../components/custom/contact/ContactHeroSection'
import { ContactFormSection } from '../components/custom/contact/ContactFormSection'
import { ContactMethodsSection } from '../components/custom/contact/ContactMethodsSection'
import { OfficeLocationSection } from '../components/custom/contact/OfficeLocationSection'
import { ResponseTimeSection } from '../components/custom/contact/ResponseTimeSection'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Multiple Contact Methods */}
      <ContactMethodsSection />

      {/* Office Location */}
      <OfficeLocationSection />

      {/* Response Time Info */}
      <ResponseTimeSection />
    </div>
  )
}
