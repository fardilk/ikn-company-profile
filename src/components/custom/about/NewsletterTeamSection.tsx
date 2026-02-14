import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, CheckCircle, AlertCircle, Users } from 'lucide-react'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterTeamSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Silakan masukkan alamat email yang valid')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // TODO: Connect to actual email service
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Terima kasih telah berlangganan!')
      setEmail('')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Terjadi kesalahan. Silakan coba lagi.')
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-emerald-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Subscription (Left) */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-block p-3 bg-emerald-600 rounded-lg mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Tetap Terhubung
              </h2>
              <p className="text-gray-700 text-lg">
                Dapatkan wawasan terbaru tentang tren teknologi, tips proyek, dan pembaruan
                perusahaan yang dikirim langsung ke kotak masuk Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-4 bg-white text-gray-900 rounded-lg border border-emerald-300 focus:border-emerald-600 focus:outline-none transition-colors disabled:opacity-50 placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Berlangganan...' : 'Berlangganan Newsletter'}
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span>{message}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <span>{message}</span>
              </div>
            )}

            <p className="text-gray-600 text-sm mt-4">
              Kami menghormati privasi Anda. Batalkan langganan kapan saja.
            </p>
          </div>

          {/* Meet Team CTA (Right) */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-12">
            <div className="inline-block p-3 bg-white/20 rounded-lg mb-6 w-fit">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Kenal Tim Ahli Kami
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Bertemu dengan tim berbakat di balik kesuksesan kami. Pelajari tentang keahlian,
              pengalaman, dan dedikasi mereka terhadap teknologi.
            </p>
            <a
              href="#team"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Jadwalkan Dengan Tim Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
