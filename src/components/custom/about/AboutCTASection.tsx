import { CheckCircle2, ArrowRight } from 'lucide-react'

export function AboutCTASection() {
  const benefits = [
    'Konsultasi awal gratis',
    'Proposal khusus sesuai kebutuhan Anda',
    'Tanpa komitmen—eksplorasi pilihan dengan aman',
    'Bimbingan ahli di setiap langkah'
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: Content (60%) */}
          <div className="lg:col-span-3 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Siap Transformasi Digital Bisnis Anda?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Mari kita diskusikan bagaimana kami dapat membantu Anda mencapai tujuan transformasi digital.
              Jadwalkan konsultasi gratis dengan tim ahli kami.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                  <span className="text-indigo-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA (40%) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mulai Hari Ini
              </h3>

              {/* Simple CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="block w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-center"
                >
                  Jadwalkan Konsultasi Gratis
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </a>

                <a
                  href="https://wa.me/6287887650480?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors text-center"
                >
                  Chat di WhatsApp
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
                <p>Atau hubungi kami langsung</p>
                <a
                  href="tel:+6287887650480"
                  className="text-indigo-600 font-semibold hover:text-indigo-700"
                >
                  +62 878-8765-0480
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
