import type { FormEvent } from 'react'
import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Silakan masukkan email yang valid')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // TODO: Connect to actual email service (Mailchimp, ConvertKit, etc.)
      // For now, simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Terima kasih! Silakan cek email Anda untuk konfirmasi.')
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
    <div className="flex flex-col">
      <h3 className="font-bold text-white text-lg mb-2">Berlangganan Newsletter</h3>
      <p className="text-gray-400 text-sm mb-6">Get latest updates and insights</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
          <input
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            aria-label="Email subscription"
            className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Mengirim...' : 'Subscribe'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>{message}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{message}</span>
        </div>
      )}

      {/* Privacy Notice */}
      <p className="text-gray-500 text-xs mt-4">
        Kami menghormati privasi Anda. Unsubscribe kapan saja.
      </p>
    </div>
  )
}
