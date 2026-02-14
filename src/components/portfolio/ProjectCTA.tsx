/**
 * ProjectCTA - Call-to-action section at bottom of detail panel
 */
export function ProjectCTA() {
  return (
    <section className="pt-6 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Butuh Solusi Serupa?
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Hubungi kami untuk konsultasi gratis tentang proyek Anda
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => {
            window.open('https://wa.me/6287887650480', '_blank');
          }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                     px-4 py-3 rounded-lg font-medium transition-colors
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     focus:ring-offset-2"
        >
          Konsultasi Gratis
        </button>
        <a
          href="/portfolio"
          className="w-full border border-indigo-600 text-indigo-600
                     hover:bg-indigo-50 px-4 py-3 rounded-lg font-medium
                     transition-colors text-center
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     focus:ring-offset-2"
        >
          Lihat Portfolio Lainnya
        </a>
      </div>
    </section>
  );
}
