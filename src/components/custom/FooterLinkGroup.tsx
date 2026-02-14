import type { ReactNode } from 'react'

interface FooterLinkGroupProps {
  title: string
  children: ReactNode
}

export function FooterLinkGroup({ title, children }: FooterLinkGroupProps) {
  return (
    <div className="mb-8">
      <h3 className="font-bold text-white text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  )
}
