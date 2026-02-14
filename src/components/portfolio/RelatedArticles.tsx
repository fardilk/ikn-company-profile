import { ChevronRight } from 'lucide-react';
import type { PortfolioArticle } from '@/types/portfolio';

interface RelatedArticlesProps {
  articles?: PortfolioArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Artikel Terkait</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <a
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
              loading="lazy"
            />
            <h4 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
              {article.title}
            </h4>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {article.description}
            </p>
            <div className="flex items-center text-indigo-600 font-medium text-sm">
              Baca Selengkapnya
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
