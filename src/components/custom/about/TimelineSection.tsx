import { Building2, Users, Globe, Award, Trophy, TrendingUp } from 'lucide-react'
import { TimelineList } from './TimelineList'
import type { TimelineEvent } from './types'

/**
 * TimelineSection Component - REQ: About Us Page Section 4
 *
 * Professional company timeline/story presentation.
 * See: docs/research/timeline-company-story.md
 *
 * Specifications:
 * - Vertical timeline with center-aligned line on desktop
 * - Alternating left/right content blocks
 * - Single-column left-aligned on mobile
 * - WCAG 2.1 AA accessible with semantic HTML
 * - Responsive design with proper breakpoints
 */

const timelineEvents: TimelineEvent[] = [
  {
    id: 'founding-2018',
    date: '2018-01',
    year: '2018',
    title: 'Perusahaan Didirikan',
    description:
      'Infini Kreasi Nusantara didirikan dengan visi untuk mentransformasi bisnis Indonesia melalui solusi teknologi inovatif dan berkualitas tinggi.',
    expandedContent: [
      'Perjalanan kami dimulai dari sebuah garasi kecil di Jakarta dengan tim 3 orang yang bersemangat. Kami memulai dengan menawarkan jasa konsultasi IT dan pengembangan website custom untuk UMKM lokal.',
      'Visi awal kami adalah membantu UMKM Indonesia untuk go digital dan bersaing di era modern. Kami percaya bahwa teknologi seharusnya mudah diakses dan terjangkau bagi semua kalangan bisnis.',
      'Komitmen terhadap kualitas, inovasi, dan kepuasan pelanggan menjadi fondasi yang kuat untuk pertumbuhan kami di masa depan. Setiap proyek dikerjakan dengan dedikasi penuh.'
    ],
    icon: Building2,
    category: 'Foundation'
  },
  {
    id: 'first-client-2019',
    date: '2019-06',
    year: '2019',
    title: 'Klien Enterprise Pertama',
    description:
      'Mengamankan klien enterprise pertama dengan pengiriman aplikasi web komprehensif untuk manajemen logistik. Menandai awal pertumbuhan eksponensial kami.',
    expandedContent: [
      'Pencapaian pertama kami dalam skala enterprise adalah mengembangkan sistem manajemen logistik komprehensif untuk klien multinasional besar. Proyek ini menjadi turning point dalam sejarah perusahaan kami.',
      'Proyek melibatkan tim 8 developer dan dikerjakan selama 6 bulan dengan scope yang sangat kompleks. Kami berhasil mengintegrasikan multiple APIs dan membangun custom reporting system yang powerful.',
      'Hasil akhir melampaui ekspektasi klien. Kesuksesan ini membuka pintu untuk referensi lebih banyak klien enterprise dan memperkuat reputasi kami.'
    ],
    icon: Users,
    category: 'Growth'
  },
  {
    id: 'virtual-tour-2020',
    date: '2020-03',
    year: '2020',
    title: 'Peluncuran Virtual Tour 360°',
    description:
      'Meluncurkan layanan Virtual Tour 360°, memungkinkan bisnis menampilkan ruang secara digital selama pandemi. Melayani 50+ klien real estat dan pariwisata.',
    expandedContent: [
      'Di tengah pandemi COVID-19, kami melihat peluang unik untuk mengembangkan teknologi Virtual Tour 360° yang inovatif. Teknologi ini memungkinkan bisnis menampilkan properti, toko, dan destinasi wisata secara digital.',
      'Teknologi kami menggunakan fotografi 360° dan pemodelan 3D untuk memberikan pengalaman immersive yang realistis. User dapat berinteraksi dengan lingkungan secara real-time dari kenyamanan rumah mereka.',
      'Dalam tahun pertama peluncuran, kami melayani 50+ klien dari sektor real estate, perhotelan, dan pariwisata dengan tingkat kepuasan 98%. Virtual Tour 360° menjadi signature product kami.'
    ],
    icon: Globe,
    category: 'Product'
  },
  {
    id: 'team-expansion-2021',
    date: '2021-09',
    year: '2021',
    title: 'Ekspansi Tim',
    description:
      'Mengembangkan tim menjadi 15+ developer dan konsultan berbakat. Memperluas penawaran layanan dengan pengembangan aplikasi mobile dan konsultasi IT.',
    expandedContent: [
      'Pertumbuhan bisnis yang pesat mendorong kami untuk memperluas tim secara signifikan. Kami merekrut developer berbakat dari universitas terkemuka dan profesional berpengalaman dari perusahaan teknologi ternama.',
      'Tim kami terdiri dari spesialis di berbagai bidang: full-stack web development, mobile development iOS & Android, UI/UX design, dan solution architect berpengalaman. Kami juga memiliki QA engineer dan technical writer yang talented.',
      'Ekspansi ini memungkinkan kami menangani proyek lebih kompleks dan besar tanpa mengurangi kualitas. Budaya kerja kami tetap fokus pada continuous learning dan innovation.'
    ],
    icon: TrendingUp,
    category: 'Growth'
  },
  {
    id: 'certification-2022',
    date: '2022-05',
    year: '2022',
    title: 'Sertifikasi Industri',
    description:
      'Meraih sertifikasi ISO 9001:2015 untuk sistem manajemen kualitas. Komitmen terhadap pengiriman solusi IT kelas dunia diakui secara resmi.',
    expandedContent: [
      'Kami berkomitmen memberikan layanan berkualitas tertinggi kepada setiap klien. Sertifikasi ISO 9001:2015 adalah bukti nyata dari dedikasi kami terhadap standar internasional dalam manajemen kualitas.',
      'Proses sertifikasi melibatkan audit mendalam terhadap prosedur, dokumentasi, dan implementasi kontrol kualitas di seluruh organisasi. Setiap aspek operasional dievaluasi untuk memastikan compliance dengan standar global.',
      'Dengan sertifikasi ini, klien kami dapat yakin bahwa setiap proyek dijalankan dengan standar internasional yang ketat. Sertifikasi ISO adalah badge of honor kami.'
    ],
    icon: Award,
    category: 'Award'
  },
  {
    id: 'industry-leader-2024',
    date: '2024-12',
    year: '2024',
    title: 'Kepemimpinan Industri',
    description:
      'Diakui sebagai konsultan IT terkemuka di Indonesia dengan 200+ klien puas. Terus berinovasi dalam teknologi web, mobile, dan immersive.',
    expandedContent: [
      'Kami bangga mencapai 200+ klien aktif dari berbagai industri: pemerintahan, pendidikan, e-commerce, finance, manufacturing, dan healthcare. Pengakuan sebagai konsultan IT terkemuka bukan hanya tentang jumlah klien, tapi tentang trust dan hasil yang kami deliver.',
      'Portfolio kami mencakup proyek transformatif yang mengubah cara bisnis beroperasi. Dari sistem informasi kompleks hingga user interfaces elegant, kami membuktikan expertise di berbagai domain.',
      'Saat ini kami terus berinovasi dengan artificial intelligence, machine learning, dan blockchain untuk menciptakan solusi yang lebih smart dan memberikan value tambahan bagi klien di masa depan.'
    ],
    icon: Trophy,
    category: 'Award'
  }
]

export function TimelineSection() {
  return (
    <section
      className="py-16 lg:py-24 xl:py-32 bg-white"
      aria-label="Company History Timeline"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Perjalanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari awal yang sederhana hingga menjadi pemimpin industri—kisah pertumbuhan
            dan inovasi kami dalam transformasi digital Indonesia.
          </p>
        </div>

        {/* Timeline */}
        <TimelineList events={timelineEvents} />
      </div>
    </section>
  )
}
