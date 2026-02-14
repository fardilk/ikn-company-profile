export function LegalLinks() {
  const legalLinks = [
    {
      name: 'Terms of Use',
      href: '/terms-of-use',
      rel: 'legal',
    },
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
      rel: 'privacy-policy',
    },
    {
      name: 'Cookie Policy',
      href: '/cookie-policy',
      rel: 'legal',
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-6">
      {legalLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          rel={link.rel}
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
