import { motion } from 'framer-motion';
import type { BentoCardProps } from '@/types/services';

/**
 * Size class mappings for Bento Grid layout
 */
const sizeClasses = {
  hero: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
  medium: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2',
  compact: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
};

/**
 * BentoCard - Individual service category card with gradient overlay and animations
 *
 * Features:
 * - Variable sizes: hero (2x2), medium (1x2), compact (1x1)
 * - Gradient backgrounds with category-specific colors
 * - Glassmorphism overlay on hover
 * - Framer Motion animations (entrance, hover, tap)
 * - Service tags displayed as pills
 * - Accessible with keyboard navigation
 */
export function BentoCard({ category, onExpand }: BentoCardProps) {
  const Icon = category.icon;

  return (
    <motion.article
      className={`
        ${sizeClasses[category.size]}
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br ${category.gradient}
        p-6 md:p-8
        group cursor-pointer
        border border-white/10
      `}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onClick={onExpand}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand();
        }
      }}
      aria-label={`${category.title} - Click to view details`}
    >
      {/* Glassmorphism overlay on hover */}
      <div
        className="absolute inset-0 bg-white/5 backdrop-blur-sm
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20
                    transition-opacity duration-500
                    bg-gradient-to-tr from-white via-transparent to-white
                    animate-gradient-shift"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with micro-interaction */}
        <motion.div
          className="mb-4 w-12 h-12 md:w-16 md:h-16 text-white"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-full h-full" />
        </motion.div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
          {category.title}
        </h3>

        <p className="text-sm md:text-base text-white/80 mb-4 line-clamp-2 md:line-clamp-3">
          {category.description}
        </p>

        {/* Service tags */}
        <div className="mt-auto flex flex-wrap gap-2" role="list">
          {category.serviceNames.map((service, idx) => (
            <span
              key={idx}
              role="listitem"
              className="px-3 py-1 rounded-full text-xs md:text-sm
                         bg-white/10 backdrop-blur-sm text-white
                         border border-white/20
                         group-hover:bg-white/20 transition-colors"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Hover indicator */}
        <motion.div
          className="mt-4 flex items-center text-white/60 text-sm"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          <span>Lihat Detail</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.article>
  );
}
