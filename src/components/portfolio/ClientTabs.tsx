import type { PortfolioClient } from '@/types/portfolio';

interface ClientTabsProps {
  clients: PortfolioClient[];
  activeId: string;
  onSelect: (clientId: string) => void;
}

/**
 * ClientTabs - Vertical list of clients with logos
 * Displays clients from top to bottom with logo on left side
 */
export function ClientTabs({ clients, activeId, onSelect }: ClientTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Client projects"
      className="space-y-3"
    >
      <p className="text-sm font-semibold text-gray-700 mb-4">Klien ({clients.length})</p>

      {clients.map((client, index) => {
        const isActive = activeId === client.id;

        return (
          <button
            key={client.id}
            role="tab"
            tabIndex={isActive ? 0 : -1}
            aria-selected={isActive}
            aria-controls={`client-panel-${client.id}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(client.id);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(client.id);
              }
              // Arrow key navigation
              if (e.key === 'ArrowDown' && index < clients.length - 1) {
                e.preventDefault();
                onSelect(clients[index + 1].id);
              }
              if (e.key === 'ArrowUp' && index > 0) {
                e.preventDefault();
                onSelect(clients[index - 1].id);
              }
            }}
            className={`
              w-full flex items-start gap-3 p-3 rounded-lg
              border-2 transition-all duration-200 text-left
              cursor-pointer active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
              ${
                isActive
                  ? 'border-indigo-600 bg-indigo-50 shadow-md hover:shadow-lg'
                  : 'border-gray-200 bg-white hover:border-indigo-400 hover:shadow-sm hover:bg-gray-50'
              }
            `}
          >
            {/* Logo */}
            <img
              src={client.logo}
              alt={client.name}
              className="w-12 h-12 rounded-lg object-cover bg-gray-100 flex-shrink-0 border border-gray-200"
            />

            {/* Client Name */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 line-clamp-2">
                {client.name}
              </p>
              {isActive && (
                <p className="text-xs text-indigo-600 font-semibold mt-1">
                  ✓ Selected
                </p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
