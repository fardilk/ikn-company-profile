import { FooterLinkGroup } from './FooterLinkGroup'

export function SiteMapColumn() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Navigation Main */}
      <FooterLinkGroup title="Navigasi Utama">
        <li>
          <a
            href="/"
            rel="home"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="/tentang-kami"
            rel="about"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Tentang Kami
          </a>
        </li>
        <li>
          <a
            href="/layanan"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Layanan
          </a>
        </li>
        <li>
          <a
            href="/portfolio"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Hubungi Kami
          </a>
        </li>
        <li>
          <a
            href="/virtual-tour"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Virtual Tour 360°
          </a>
        </li>
      </FooterLinkGroup>

      {/* Services */}
      <FooterLinkGroup title="Layanan">
        <li>
          <a
            href="/layanan#web"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Aplikasi Web
          </a>
        </li>
        <li>
          <a
            href="/layanan#mobile"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Aplikasi Mobile
          </a>
        </li>
        <li>
          <a
            href="/layanan#virtual-tour"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Virtual Tour 360°
          </a>
        </li>
        <li>
          <a
            href="/layanan#consulting"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Konsultasi IT
          </a>
        </li>
        <li>
          <a
            href="/layanan#support"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Maintenance & Support
          </a>
        </li>
      </FooterLinkGroup>

      {/* Company */}
      <FooterLinkGroup title="Perusahaan">
        <li>
          <a
            href="/tentang-kami"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Tentang Kami
          </a>
        </li>
        <li>
          <a
            href="/career"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Career
          </a>
        </li>
        <li>
          <a
            href="/newsroom"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Newsroom
          </a>
        </li>
        <li>
          <a
            href="/legal"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Legalitas
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            Kontak
          </a>
        </li>
      </FooterLinkGroup>
    </div>
  )
}
