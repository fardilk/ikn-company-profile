import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

export function SocialLinks() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/infini-kreasi-nusantara',
      icon: Linkedin,
      rel: 'nofollow',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/infini.kreasi.nusantara',
      icon: Instagram,
      rel: 'nofollow',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/infini.kreasi.nusantara',
      icon: Facebook,
      rel: 'nofollow',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@infini-kreasi-nusantara',
      icon: Youtube,
      rel: 'nofollow',
    },
  ]

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel={`${link.rel} noopener noreferrer`}
            aria-label={`Follow us on ${link.name}`}
            className="h-6 w-6 text-gray-300 hover:text-indigo-400 transition-colors duration-200"
          >
            <Icon className="h-6 w-6" />
          </a>
        )
      })}
    </div>
  )
}
