import { Target, Rocket } from 'lucide-react'

export function VisionMissionAboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visi Card */}
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Visi</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Menjadi mitra teknologi terdepan yang menghadirkan solusi inovatif dan
              berkelanjutan untuk transformasi digital bisnis di Indonesia.
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Misi</h2>
            </div>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Mengembangkan solusi teknologi yang praktis dan berdampak nyata</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Membangun tim ahli yang terus berkembang dan berbagi pengetahuan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Menciptakan pengalaman pelanggan yang luar biasa di setiap proyek</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Berkontribusi pada ekosistem teknologi Indonesia melalui inovasi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
