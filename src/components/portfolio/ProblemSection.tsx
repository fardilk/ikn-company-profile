interface ProblemSectionProps {
  problem: string;
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Apa Masalahnya?</h3>
      <p className="text-base text-gray-600 leading-relaxed">{problem}</p>
    </section>
  );
}
