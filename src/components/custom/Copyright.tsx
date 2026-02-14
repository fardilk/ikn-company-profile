export function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-center">
      <p className="text-gray-500 text-sm">
        © {currentYear} Infini Kreasi Nusantara. All rights reserved.
      </p>
    </div>
  )
}
