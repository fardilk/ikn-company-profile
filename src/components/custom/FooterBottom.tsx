import { SocialLinks } from './SocialLinks'
import { LegalLinks } from './LegalLinks'
import { Copyright } from './Copyright'

export function FooterBottom() {
  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      {/* Top Row: Social Links + Legal Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 pb-8 border-b border-gray-800">
        {/* Social Links */}
        <div className="flex justify-center md:justify-start">
          <SocialLinks />
        </div>

        {/* Legal Links */}
        <div className="flex justify-center md:justify-end">
          <LegalLinks />
        </div>
      </div>

      {/* Bottom Row: Copyright (Very Bottom) */}
      <div className="flex justify-center">
        <Copyright />
      </div>
    </div>
  )
}
