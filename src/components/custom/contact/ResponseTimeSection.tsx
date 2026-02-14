import { Zap, Users, CheckCircle, Headphones } from 'lucide-react'

export function ResponseTimeSection() {
  const features = [
    {
      icon: Zap,
      title: 'Respons Cepat',
      description: 'Kami merespons pesan Anda dalam waktu kurang dari 2 jam pada jam kerja.',
    },
    {
      icon: Users,
      title: 'Tim Berpengalaman',
      description: 'Tim ahli kami siap memberikan solusi terbaik untuk kebutuhan Anda.',
    },
    {
      icon: CheckCircle,
      title: 'Konsultasi Gratis',
      description: 'Dapatkan konsultasi teknis gratis untuk memahami kebutuhan proyek Anda.',
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      description: 'Dukungan tersedia 24 jam melalui chat dan email untuk klien kami.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Komitmen Kami kepada Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah komitmen layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Siap untuk Memulai Proyek Anda?
          </h3>
          <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu mewujudkan visi digital Anda.
          </p>
          <a
            href="https://wa.me/6287887650480?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Hubungi Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
