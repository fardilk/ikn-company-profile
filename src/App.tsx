import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import TentangKami from './pages/TentangKami'
import LayananPage from './pages/LayananPage'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/Contact'
import { Navbar } from './components/layouts/Navbar'
import { Footer } from './components/custom/Footer'
import { useScrollToTop } from './hooks/useScrollToTop'

function App() {
  useScrollToTop()

  useEffect(() => {
    document.title = 'Infini Kreasi Nusantara'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Konsultan IT spesialis dalam jasa pembuatan aplikasi, website, tour 360, streetview, virtual tour.')
    }
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
