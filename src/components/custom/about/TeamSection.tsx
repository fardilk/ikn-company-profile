import { ArrowRight } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  position: string
  photo: string
  bio: string
  profileLink: string
}

const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    position: 'CEO & Pendiri',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    bio: '15+ tahun di bidang konsultasi IT. Pemimpin teknis senior di perusahaan Fortune 500.',
    profileLink: '/team/john-doe'
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    position: 'CTO',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Ahli arsitektur cloud dan DevOps dengan pengalaman 12+ tahun.',
    profileLink: '/team/jane-smith'
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    position: 'Kepala Developer',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    bio: 'Spesialis full-stack yang fokus pada ekosistem React dan Node.js.',
    profileLink: '/team/michael-chen'
  },
  {
    id: 'sarah-wilson',
    name: 'Sarah Wilson',
    position: 'Desainer UX/UI',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Desainer pemenang penghargaan menciptakan pengalaman digital yang intuitif.',
    profileLink: '/team/sarah-wilson'
  },
  {
    id: 'david-lee',
    name: 'David Lee',
    position: 'Spesialis Virtual Tour 360°',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Ahli fotografi 360° dan pengalaman immersive dengan pengalaman 8+ tahun.',
    profileLink: '/team/david-lee'
  },
  {
    id: 'emily-brown',
    name: 'Emily Brown',
    position: 'Manajer Proyek',
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    bio: 'PMP Bersertifikat dengan track record menyelesaikan proyek IT kompleks.',
    profileLink: '/team/emily-brown'
  },
  {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    position: 'Developer Mobile',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    bio: 'Spesialis React Native dan Flutter membangun aplikasi lintas platform.',
    profileLink: '/team/alex-johnson'
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    position: 'QA Engineer',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
    bio: 'Ahli quality assurance memastikan keunggulan dalam setiap pengiriman.',
    profileLink: '/team/maria-garcia'
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tim Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesional berbakat yang berdedikasi untuk memberikan solusi teknologi luar biasa
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>

                {/* View Profile Link */}
                <a
                  href={member.profileLink}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-semibold text-sm transition-colors"
                >
                  Lihat Profil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
