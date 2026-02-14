import type { PortfolioMetric } from '@/types/portfolio';

interface MetricsSectionProps {
  metrics?: PortfolioMetric[];
}

export function MetricsSection({ metrics }: MetricsSectionProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Hasil & Metrik</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200"
          >
            <p className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">
              {metric.value}
            </p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
