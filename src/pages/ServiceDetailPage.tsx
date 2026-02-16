import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, MessageCircle } from 'lucide-react';
import { serviceCategories } from '@/data/services';

/**
 * ServiceDetailPage - Individual service category detail page
 *
 * Features:
 * - Full-page service details with hero section
 * - Features, technologies, and benefits sections
 * - CTA for consultation
 * - Breadcrumb navigation
 */
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const category = serviceCategories.find((cat) => cat.slug === slug);

  useEffect(() => {
    if (category) {
      document.title = `${category.title} - Infini Kreasi Nusantara`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', category.fullDescription);
      }
    }
  }, [category]);

  // If service not found, redirect to layanan page
  if (!category) {
    useEffect(() => {
      navigate('/layanan', { replace: true });
    }, [navigate]);
    return null;
  }

  const Icon = category.icon;

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section
        className={`relative py-20 lg:py-28 bg-gradient-to-br ${category.gradient} overflow-hidden`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate('/layanan')}
            className="flex items-center gap-2 text-white/80 hover:text-white
                       mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Layanan</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 text-white">
              <Icon className="w-full h-full" />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {category.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {category.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Features & Technologies */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Fitur Utama</h2>
                <ul className="space-y-4" role="list">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-white/80">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Teknologi</h2>
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2.5 rounded-lg bg-slate-800 text-white
                                 border border-slate-700 hover:bg-slate-750
                                 transition-colors font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Benefits & CTA */}
            <div className="space-y-8">
              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Manfaat</h2>
                <div className="space-y-4">
                  {category.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-gradient-to-br
                                 from-blue-500/10 to-purple-500/10
                                 border border-white/10"
                    >
                      <p className="text-white/90">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                className={`sticky top-24 p-6 rounded-2xl bg-gradient-to-br ${category.gradient}
                           border border-white/20`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Tertarik dengan layanan ini?
                </h3>
                <p className="text-white/90 mb-6">
                  Konsultasikan kebutuhan Anda dengan tim ahli kami secara gratis.
                </p>
                <button
                  onClick={() => window.open('https://wa.me/6287887650480', '_blank')}
                  className="w-full bg-white text-slate-900 hover:bg-white/90
                             px-6 py-3 rounded-lg font-semibold transition-colors
                             flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
