import { CompanyInfoColumn } from './CompanyInfoColumn'
import { SiteMapColumn } from './SiteMapColumn'
import { NewsletterForm } from './NewsletterForm'

export function FooterTop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
      {/* Left Section: Company Info + Site Map (70% width) */}
      <div className="md:col-span-3 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Company Info - smaller on left */}
        <div className="lg:flex-shrink-0">
          <CompanyInfoColumn />
        </div>

        {/* Site Map - fills remaining left space */}
        <div className="flex-grow">
          <SiteMapColumn />
        </div>
      </div>

      {/* Newsletter - 30% width */}
      <div className="md:col-span-2">
        <NewsletterForm />
      </div>
    </div>
  )
}
