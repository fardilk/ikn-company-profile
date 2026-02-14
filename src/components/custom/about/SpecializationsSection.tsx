import { Globe, Smartphone, Video, Cloud, Shield, BarChart } from 'lucide-react'

interface Specialization {
  icon: typeof Globe
  title: string
  description: string
  technologies: string[]
}

const specializations: Specialization[] = [
  {
    icon: Globe,
    title: 'Aplikasi Web',
    description: 'Solusi web khusus untuk proses bisnis kompleks dengan framework modern dan arsitektur yang dapat diskalakan.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript']
  },
  {
    icon: Smartphone,
    title: 'Aplikasi Mobile',
    description: 'Pengembangan mobile native dan cross-platform untuk iOS dan Android dengan pengalaman pengguna yang seamless.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    icon: Video,
    title: 'Virtual Tour 360°',
    description: 'Pengalaman virtual immersive untuk real estat, pariwisata, dan showcase korporat menggunakan teknologi terdepan.',
    technologies: ['Three.js', 'WebGL', 'Kamera 360°', 'Matterport']
  },
  {
    icon: Cloud,
    title: 'Solusi Cloud',
    description: 'Desain infrastruktur cloud yang dapat diskalakan, migrasi, dan optimasi untuk kebutuhan bisnis modern.',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker']
  },
  {
    icon: Shield,
    title: 'Keamanan Siber',
    description: 'Konsultasi keamanan siber komprehensif termasuk penetration testing dan manajemen kepatuhan.',
    technologies: ['Pen Testing', 'OWASP', 'ISO 27001', 'GDPR']
  },
  {
    icon: BarChart,
    title: 'Analitik Data',
    description: 'Solusi business intelligence dan visualisasi data untuk mendorong pengambilan keputusan yang informed.',
    technologies: ['Python', 'Tableau', 'Power BI', 'SQL']
  }
]

export function SpecializationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Keahlian Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keahlian teknologi komprehensif di berbagai domain bisnis
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.title}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-block p-4 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 transition-colors">
                    <Icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {spec.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {spec.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {spec.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
