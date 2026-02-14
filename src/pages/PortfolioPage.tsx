import { useState, useEffect, useMemo } from 'react';
import { CategoryTabs } from '@/components/portfolio/CategoryTabs';
import { ClientTabs } from '@/components/portfolio/ClientTabs';
import { DetailPanel } from '@/components/portfolio/DetailPanel';
import {
  portfolioCategories,
  portfolioClients,
  portfolioProjects,
  portfolioArticles,
} from '@/data/portfolio';

/**
 * PortfolioPage - Two-level tabbed portfolio with detail panel
 *
 * Features:
 * - Level 1: Category tabs (Governmental, Enterprise, Healthcare, etc.)
 * - Level 2: Client tabs within category
 * - Detail panel: Full project information with problem, solution, metrics, related articles
 * - Responsive: Side-by-side on desktop, stacked on mobile
 */
export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioCategories[0].id);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  // Set page title and meta description
  useEffect(() => {
    document.title = 'Portfolio - Infini Kreasi Nusantara';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Lihat portofolio proyek kami di berbagai industri - Governmental IT, Enterprise IT, Healthcare, Retail, dan Education.'
      );
    }
  }, []);

  // Get clients for selected category
  const clientsInCategory = useMemo(() => {
    return portfolioClients.filter((client) => client.categoryId === selectedCategory);
  }, [selectedCategory]);

  // Set first client as selected when category changes
  useEffect(() => {
    if (clientsInCategory.length > 0) {
      setSelectedClient(clientsInCategory[0].id);
    }
  }, [clientsInCategory]);

  // Get project for selected client
  const selectedProject = useMemo(() => {
    if (!selectedClient) return null;
    return portfolioProjects.find(
      (project) => project.clientId === selectedClient
    );
  }, [selectedClient]);

  // Get selected client info
  const selectedClientInfo = useMemo(() => {
    if (!selectedClient) return null;
    return portfolioClients.find((client) => client.id === selectedClient);
  }, [selectedClient]);

  if (!selectedProject || !selectedClientInfo || !selectedClient) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Kami</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Jelajahi proyek-proyek kami di berbagai industri, dari Governmental IT hingga
            Enterprise Solutions
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Category Tabs (Level 1) */}
          <div className="mb-8 md:mb-12">
            <CategoryTabs
              categories={portfolioCategories}
              activeId={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Panel: Client List (25%) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 sticky top-20">
                {/* Client Tabs (Level 2) - Vertical List */}
                <ClientTabs
                  clients={clientsInCategory}
                  activeId={selectedClient}
                  onSelect={setSelectedClient}
                />
              </div>
            </div>

            {/* Right Panel: Detail Panel (75%) */}
            <div className="lg:col-span-3">
              <DetailPanel
                project={selectedProject}
                client={selectedClientInfo}
                articles={portfolioArticles}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tertarik dengan Proyek Serupa?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Hubungi kami untuk diskusi lebih lanjut tentang bagaimana kami dapat membantu
            transformasi digital bisnis Anda
          </p>
          <button
            onClick={() => {
              window.open('https://wa.me/6287887650480', '_blank');
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3
                       rounded-lg font-medium transition-colors
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:ring-offset-2"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>
    </main>
  );
}
