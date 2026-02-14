/**
 * ServiceCTA - Call-to-action section for special requests
 *
 * Features:
 * - Dark theme background continuation
 * - Centered layout with heading and button
 * - Opens WhatsApp for consultation
 */
export function ServiceCTA() {
  const handleContactClick = () => {
    // Open WhatsApp chat
    window.open('https://wa.me/6287887650480', '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-950">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ada Kebutuhan Khusus?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          Hubungi tim kami untuk solusi yang disesuaikan dengan kebutuhan bisnis Anda
        </p>
        <button
          onClick={handleContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white
                     px-8 py-3 rounded-lg font-medium transition-colors
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Ajukan Permintaan Khusus
        </button>
      </div>
    </section>
  );
}
