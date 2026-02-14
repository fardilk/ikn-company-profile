interface TagChipsProps {
  label: string
  variant?: 'primary' | 'secondary'
  className?: string
}

/**
 * TagChips Component
 * Reusable badge/tag component for highlighting labels
 *
 * @example
 * ```tsx
 * <TagChips label="Flagship Product" variant="primary" />
 * ```
 */
export function TagChips({
  label,
  variant = 'primary',
  className = '',
}: TagChipsProps) {
  const variantClasses = {
    primary: 'bg-indigo-600 text-white',
    secondary: 'bg-gray-200 text-gray-900',
  }

  return (
    <span
      className={`
        inline-block px-4 py-2 rounded-full text-xs font-semibold
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {label}
    </span>
  )
}
