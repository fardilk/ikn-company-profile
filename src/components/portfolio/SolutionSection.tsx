interface SolutionSectionProps {
  solution: string;
}

export function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Bagaimana Kami Menyelesaikannya?</h3>
      <p className="text-base text-gray-600 leading-relaxed">{solution}</p>

      {/* Solution highlights */}
      <div className="mt-4 p-4 rounded-lg bg-indigo-50 border-l-4 border-indigo-600 text-indigo-900">
        <p className="text-sm">✓ Solusi telah menghasilkan peningkatan efisiensi operasional yang signifikan</p>
      </div>
    </section>
  );
}
