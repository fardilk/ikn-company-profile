import { useState, useEffect } from 'react';
import { BentoServicesGrid } from '@/components/services/BentoServicesGrid';
import { ServiceDrawer } from '@/components/services/ServiceDrawer';
import { ServiceCTA } from '@/components/services/ServiceCTA';
import { serviceCategories } from '@/data/services';
import type { ServiceCategory } from '@/types/services';

/**
 * LayananPage - Main services page with Bento Grid + Smart Drawer
 *
 * Features:
 * - Bento Grid layout with variable-sized category cards
 * - Smart drawer for detailed service information
 * - Dark theme with gradient overlays
 * - Framer Motion animations throughout
 * - Accessible with keyboard navigation and screen readers
 */
export default function LayananPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Set page title and meta description
  useEffect(() => {
    document.title = 'Layanan Kami - Infini Kreasi Nusantara';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Solusi IT komprehensif: Governmental IT, Enterprise IT, AI Solutions, dan Geo Spatial 360° untuk transformasi digital Anda'
      );
    }
  }, []);

  const handleCategoryClick = (category: ServiceCategory) => {
    setSelectedCategory(category);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    // Small delay before clearing selected category to allow drawer close animation
    setTimeout(() => setSelectedCategory(null), 300);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Bento Grid Section */}
      <BentoServicesGrid
        categories={serviceCategories}
        onCategoryClick={handleCategoryClick}
      />

      {/* Service Detail Drawer */}
      <ServiceDrawer
        isOpen={isDrawerOpen}
        category={selectedCategory}
        onClose={handleDrawerClose}
      />

      {/* CTA Section */}
      <ServiceCTA />
    </main>
  );
}
