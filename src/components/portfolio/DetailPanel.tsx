import type { PortfolioProject, PortfolioArticle } from '@/types/portfolio';
import { ProjectImage } from './ProjectImage';
import { ProblemSection } from './ProblemSection';
import { SolutionSection } from './SolutionSection';
import { MetricsSection } from './MetricsSection';
import { RelatedArticles } from './RelatedArticles';
import { ProjectCTA } from './ProjectCTA';

interface DetailPanelProps {
  project: PortfolioProject;
  client: { name: string; logo: string };
  articles: PortfolioArticle[];
}

export function DetailPanel({ project, client, articles }: DetailPanelProps) {
  const relatedArticles = articles.filter((art) =>
    project.relatedArticles?.includes(art.id)
  );

  return (
    <div
      role="tabpanel"
      id={`detail-panel-${project.id}`}
      className="w-full md:col-span-2 lg:col-span-3 bg-white rounded-lg border border-gray-200 p-6 md:p-8"
    >
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
        <img
          src={client.logo}
          alt={client.name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover bg-gray-100"
        />
        <div className="flex-1">
          <p className="text-sm text-indigo-600 font-semibold">{client.name}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div>
              <span className="font-semibold text-gray-900">{project.year}</span> · Tahun
            </div>
            <div>
              <span className="font-semibold text-gray-900">{project.duration}</span> · Durasi
            </div>
            <div>
              <span className="font-semibold text-gray-900">{project.teamSize}</span> · Tim
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <ProjectImage src={project.image} alt={project.imageAlt} />

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed mb-8">
        {project.fullDescription}
      </p>

      {/* Problem Section */}
      <ProblemSection problem={project.problem} />

      {/* Solution Section */}
      <SolutionSection solution={project.solution} />

      {/* Metrics Section */}
      {project.metrics && <MetricsSection metrics={project.metrics} />}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}

      {/* CTA Section */}
      <ProjectCTA />
    </div>
  );
}
