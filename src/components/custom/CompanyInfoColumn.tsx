export function CompanyInfoColumn() {
  return (
    <div className="flex flex-col items-start gap-4">
      {/* Logo */}
      <img
        src="/logo/logo-ikn.png"
        alt="Infini Kreasi Nusantara"
        className="h-16 w-auto"
      />

      {/* Company Name */}
      <div>
        <h2 className="font-bold text-white text-lg">Infini Kreasi Nusantara</h2>
        <p className="text-gray-400 text-sm mt-1">Konsultan IT Terpercaya</p>
      </div>
    </div>
  )
}
