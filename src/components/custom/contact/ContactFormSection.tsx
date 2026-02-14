import { useState } from 'react'
import type { FormEvent } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!formData.fullName.trim()) {
      setStatus('error')
      setMessage('Nama lengkap wajib diisi')
      return
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error')
      setMessage('Email tidak valid')
      return
    }

    if (!formData.phone.trim()) {
      setStatus('error')
      setMessage('Nomor telepon wajib diisi')
      return
    }

    if (!formData.subject.trim()) {
      setStatus('error')
      setMessage('Subjek wajib diisi')
      return
    }

    if (!formData.message.trim()) {
      setStatus('error')
      setMessage('Pesan wajib diisi')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // TODO: Connect to actual email service (Nodemailer, SendGrid, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      setMessage('Terima kasih! Kami akan segera menghubungi Anda.')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })

      // Reset form after 5 seconds
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
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kirim Pesan Kami
          </h2>
          <p className="text-lg text-gray-600">
            Isi formulir di bawah ini dan tim kami akan merespons dalam waktu singkat.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
              Nama Lengkap *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors disabled:opacity-50 bg-white"
              placeholder="Nama lengkap Anda"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors disabled:opacity-50 bg-white"
                placeholder="email@perusahaan.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Nomor Telepon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors disabled:opacity-50 bg-white"
                placeholder="+62 xxx-xxxx-xxxx"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
              Perusahaan
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors disabled:opacity-50 bg-white"
              placeholder="Nama perusahaan Anda"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
              Subjek *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors disabled:opacity-50 bg-white"
            >
              <option value="">Pilih subjek</option>
              <option value="aplikasi-web">Aplikasi Web</option>
              <option value="aplikasi-mobile">Aplikasi Mobile</option>
              <option value="virtual-tour">Virtual Tour 360°</option>
              <option value="konsultasi-it">Konsultasi IT</option>
              <option value="support">Support & Maintenance</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Pesan *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'loading'}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors disabled:opacity-50 bg-white"
              placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
            ></textarea>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800 font-medium">{message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

          <p className="text-center text-sm text-gray-600">
            * Wajib diisi
          </p>
        </form>
      </div>
    </section>
  )
}
