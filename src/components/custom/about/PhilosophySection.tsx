import { Lightbulb } from 'lucide-react'

export function PhilosophySection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-indigo-600 rounded-full">
              <Lightbulb className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Filosofi Kami: Teknologi Memberdayakan Manusia
          </h1>

          {/* Description */}
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Di Infini Kreasi Nusantara, kami percaya bahwa teknologi harus memperkuat potensi
              manusia, bukan menggantikannya. Setiap solusi yang kami ciptakan dimulai dengan
              memahami tantangan bisnis dan kebutuhan tim Anda.
            </p>
            <p>
              Inovasi bukan hanya tentang framework atau alat terbaru—ini tentang implementasi
              yang bijaksana yang memberikan nilai bisnis nyata. Kami menggabungkan keunggulan
              teknis dengan pemahaman bisnis untuk menciptakan solusi yang bermakna.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
