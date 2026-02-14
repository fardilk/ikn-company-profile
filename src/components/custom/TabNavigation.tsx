interface TabNavigationProps {
  tabs: Array<{
    id: string
    label: string
  }>
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

/**
 * TabNavigation Component - Category tab switcher for customer stories
 *
 * Features:
 * - Horizontal tab buttons with active state styling
 * - Active tab has indigo-600 bottom border
 * - Smooth color transitions on hover
 * - Touch-friendly button sizing (44px height)
 * - Responsive: scrollable on mobile if needed
 *
 * @example
 * ```tsx
 * <TabNavigation
 *   tabs={[
 *     { id: 'government', label: 'Government' },
 *     { id: 'education', label: 'Education' }
 *   ]}
 *   activeTab="government"
 *   onTabChange={(id) => setActiveTab(id)}
 * />
 * ```
 */
export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}: TabNavigationProps) {
  return (
    <div
      className={`
        flex
        justify-center
        mb-12
        ${className}
      `}
    >
      {/* Outer border container for pills group */}
      <div
        className={`
          border-2
          border-gray-300
          rounded-full
          p-4
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide
        `}
      >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            className={`
              px-6
              py-3
              font-semibold
              text-sm
              whitespace-nowrap
              rounded-full
              transition-all
              duration-200
              border-2
              flex items-center
              ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-600'
              }
            `}
          >
            {tab.label}
          </button>
        )
      })}
      </div>
    </div>
  )
}
