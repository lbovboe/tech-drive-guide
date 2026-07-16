import Link from 'next/link'

interface SectionNavProps {
  prev?: { href: string; label: string }
  next?: { href: string; label: string }
}

export function SectionNav({ prev, next }: SectionNavProps) {
  return (
    <div
      className="mt-12 pt-8 flex items-center justify-between"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors"
          style={{ background: 'var(--bg-surface-2)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {prev.label}
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link
          href={next.href}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors"
          style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
        >
          {next.label}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      )}
    </div>
  )
}
