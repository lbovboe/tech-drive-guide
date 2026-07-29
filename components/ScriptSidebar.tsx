'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const scripts = [
  { href: '/script/intro', label: 'Introduction' },
  { href: '/script/01-daily-tech-news', label: '1 — Daily Tech News' },
  { href: '/script/02-sharepoint', label: '2 — SharePoint' },
  { href: '/script/03-ai-work-organizer', label: '3 — AI Work Organizer' },
  { href: '/script/04-custom-gpt', label: '4 — Custom GPT' },
  { href: '/script/05-csv-analyser', label: '5 — CSV Analyser' },
  { href: '/script/06-python-reviewer', label: '6 — Python Reviewer' },
]

export function ScriptSidebar() {
  const rawPathname = usePathname()
  const pathname =
    rawPathname !== '/' && rawPathname.endsWith('/')
      ? rawPathname.slice(0, -1)
      : rawPathname

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-64 flex flex-col z-30"
      style={{ background: 'var(--bg-surface)', borderRight: '1px solid var(--border)' }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-3.5"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white font-bold text-sm shrink-0"
          style={{ background: 'var(--step-bg)' }}
        >
          TD
        </div>
        <div>
          <p className="text-sm font-semibold leading-none" style={{ color: 'var(--text-primary)' }}>
            Presenter Scripts
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            Tech Test Drive
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {scripts.map((s) => {
          const active = pathname === s.href
          return (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors text-sm"
              style={{
                background: active ? 'var(--accent-dim)' : 'transparent',
                color: active ? 'var(--accent)' : 'var(--text-secondary)',
                fontWeight: active ? 500 : 400,
              }}
            >
              <ScriptFileIcon size={14} />
              <span className="truncate">{s.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer: back to guide */}
      <div className="px-3 py-4" style={{ borderTop: '1px solid var(--border)' }}>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeftIcon size={14} />
          Back to Guide
        </Link>
      </div>
    </aside>
  )
}

function ScriptFileIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  )
}

function ArrowLeftIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
