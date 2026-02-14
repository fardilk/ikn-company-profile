import { FooterTop } from './FooterTop'
import { FooterBottom } from './FooterBottom'

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section: Company Info | Site Map | Newsletter */}
        <FooterTop />

        {/* Bottom Section: Social | Legal | Copyright */}
        <FooterBottom />
      </div>
    </footer>
  )
}
