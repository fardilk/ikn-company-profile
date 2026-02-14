import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'

export function ContactMethodsSection() {
  const methods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Kirim email langsung ke kami',
      value: 'info@infinikreasinusantara.com',
      link: 'mailto:info@infinikreasinusantara.com',
      linkText: 'Buka Email',
    },
    {
      icon: Phone,
      title: 'Telepon',
      description: 'Hubungi tim customer service kami',
      value: '+62 (878) 8765-0480',
      link: 'tel:+6287887650480',
      linkText: 'Hubungi Sekarang',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat langsung melalui WhatsApp',
      value: '+62 (878) 8765-0480',
      link: 'https://wa.me/6287887650480?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
      linkText: 'Chat di WhatsApp',
      external: true,
    },
    {
      icon: MapPin,
      title: 'Kantor',
      description: 'Kunjungi kantor kami secara langsung',
      value: 'Jl. Balaraja No. 47, Jakarta Selatan',
      link: '#office-location',
      linkText: 'Lihat Lokasi',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami dengan Cara Lain
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih cara yang paling nyaman untuk menghubungi kami. Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method) => {
            const Icon = method.icon
            return (
              <div
                key={method.title}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <p className="font-semibold text-gray-900 mb-4">
                  {method.value}
                </p>
                <a
                  href={method.link}
                  {...(method.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                >
                  {method.linkText}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
