import { MapPin, Clock, Phone } from 'lucide-react'

export function OfficeLocationSection() {
  return (
    <section id="office-location" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Lokasi Kantor Kami
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Peta Lokasi</p>
              <p className="text-gray-400 text-sm">Jl. Balaraja No. 47, Jakarta Selatan</p>
            </div>
          </div>

          {/* Office Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Balaraja No. 47<br />
                  Jakarta Selatan 12310<br />
                  Indonesia
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jam Operasional</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Senin - Jumat: 09:00 - 18:00 WIB</p>
                  <p>Sabtu: 10:00 - 15:00 WIB</p>
                  <p>Minggu: Tutup</p>
                  <p className="pt-2 text-sm text-gray-500">
                    Chat & Email support tersedia 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hubungi Kami</h3>
                <p className="text-gray-600">
                  Telepon: +62 (878) 8765-0480<br />
                  Email: info@infinikreasinusantara.com
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://www.google.com/maps/search/Jl.+Balaraja+No.+47+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
