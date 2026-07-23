interface PageHeaderProps {
  tag: string
  title: string
  objective: string
}

export function PageHeader({ tag, title, objective }: PageHeaderProps) {
  return (
    <div className="mb-10 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
      {/* <span
        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4"
        style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
      >
        Demo {tag}
      </span> */}
      <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h1>
      <div
        className="flex gap-3 rounded-xl p-4"
        style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
      >
        <div
          className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent-dim)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold mb-1" style={{ color: 'var(--accent)' }}>Objective</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{objective}</p>
        </div>
      </div>
    </div>
  )
}
