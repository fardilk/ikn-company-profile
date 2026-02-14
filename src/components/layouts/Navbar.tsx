'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * Global Navbar Component - REQ001: Pembuatan Header
 *
 * Specifications:
 * - Logo on left (40% width)
 * - Menu on right (60% width)
 * - Padding: 4em (64px)
 * - Menu items: Beranda, Tentang Kami, Layanan, Portfolio, Virtual Tour 360°
 * - Sticky on scroll with color transition
 * - Colors match reference image and sticky-navbar.md research
 */
export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '/', pink: true },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Virtual Tour 360°', href: '/virtual-tour' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        transition-all duration-300
        ${
          isSticky
            ? 'bg-white text-gray-800 shadow-lg'
            : 'bg-transparent text-gray-700'
        }
      `}
      style={{
        paddingLeft: '6em',
        paddingRight: '6em',
        paddingTop: '1em',
        paddingBottom: '1em',
      }}
    >
      {/* Logo Section - 40% width */}
      <div className="w-[40%]">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src="/logo/logo-ikn.png"
            alt="PT Inovasi Nusa Karyatama"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* Menu Section - 60% width */}
      <div className="w-[60%] flex items-center justify-end gap-8">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`
                  font-medium text-sm
                  transition-all duration-200
                  ${
                    item.pink
                      ? 'text-pink-500 hover:text-pink-600'
                      : isSticky
                        ? 'text-gray-700 hover:text-indigo-600'
                        : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className={`
            hidden md:flex
            px-6 py-2 rounded-full font-medium text-sm
            transition-all duration-200
            items-center gap-2
            bg-indigo-600 text-white hover:bg-indigo-700
          `}
        >
          <span>💬</span>
          Kontak Kami
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    block py-2 px-4 rounded transition-colors
                    ${
                      item.pink
                        ? 'text-pink-500 hover:bg-pink-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <span>💬</span>
                Kontak Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
