import { motion } from 'framer-motion';
import type { ServiceCategory } from '@/types/services';
import { BentoCard } from './BentoCard';

interface BentoServicesGridProps {
  categories: ServiceCategory[];
  onCategoryClick: (category: ServiceCategory) => void;
}

/**
 * BentoServicesGrid - Main container for Bento Grid layout
 *
 * Features:
 * - Asymmetric grid with variable card sizes
 * - Responsive: 4-col desktop → 2-col tablet → 1-col mobile
 * - Framer Motion page title animation
 * - Dark theme background
 */
export function BentoServicesGrid({ categories, onCategoryClick }: BentoServicesGridProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-950" aria-label="Our Services" role="region">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Page title with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Solusi IT komprehensif untuk transformasi digital Anda
          </p>
        </motion.div>

        {/* Bento grid with CSS Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          role="list"
          aria-label="Service categories"
        >
          {categories.map((category) => (
            <BentoCard
              key={category.id}
              category={category}
              onExpand={() => onCategoryClick(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
