import type { PortfolioCategory } from '@/types/portfolio';

interface CategoryTabsProps {
  categories: PortfolioCategory[];
  activeId: string;
  onSelect: (categoryId: string) => void;
}

export function CategoryTabs({ categories, activeId, onSelect }: CategoryTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Industry categories"
      className="flex gap-2 md:gap-4 overflow-x-auto pb-3 md:pb-0 md:flex-wrap"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={activeId === category.id}
          aria-controls={`category-panel-${category.id}`}
          onClick={() => onSelect(category.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(category.id);
            }
          }}
          className={`
            px-3 py-2 text-sm md:text-base font-medium
            rounded-lg transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
            ${
              activeId === category.id
                ? 'bg-indigo-600 text-white border-b-4 border-indigo-600'
                : 'bg-white text-gray-900 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
