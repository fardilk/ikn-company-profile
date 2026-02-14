import { Mail } from 'lucide-react'

export function ContactHeroSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block p-3 bg-white/20 rounded-lg mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Kami siap membantu mewujudkan solusi digital terbaik untuk bisnis Anda.
            Hubungi tim ahli kami dan dapatkan konsultasi gratis hari ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-indigo-100">Dukungan Tersedia</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">&lt; 2 Jam</p>
              <p className="text-indigo-100">Waktu Respon</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-indigo-100">Klien Puas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
