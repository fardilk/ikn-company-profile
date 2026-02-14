import type { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  index: number
  className?: string
}

/**
 * SectionContainer Component - REQ007: Zebra Odd and Even Section
 *
 * Provides alternating background colors for homepage sections.
 * Creates a striped pattern where sections alternate between white and light gray.
 *
 * Pattern:
 * - Index 0, 2, 4... (even) → white background
 * - Index 1, 3, 5... (odd) → light gray background (bg-gray-50)
 *
 * Features:
 * - Improves visual hierarchy and section separation
 * - Maintains consistent spacing and padding
 * - Responsive and accessible
 * - Works with all section component types
 *
 * @example
 * ```tsx
 * <SectionContainer index={0}>
 *   <Banner />
 * </SectionContainer>
 *
 * <SectionContainer index={1}>
 *   <TentangKami />
 * </SectionContainer>
 * ```
 */
export function SectionContainer({
  children,
  index,
  className = '',
}: SectionContainerProps) {
  const isEven = index % 2 === 0
  const backgroundColor = isEven ? 'bg-white' : 'bg-gray-50'

  return (
    <div className={`w-full ${backgroundColor} ${className}`}>
      {children}
    </div>
  )
}
