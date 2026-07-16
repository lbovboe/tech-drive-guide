'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sections = [
  {
    href: '/',
    label: 'Overview',
    icon: HomeIcon,
  },
  {
    href: '/schedule',
    label: 'Daily Tech News',
    tag: '1',
    subtitle: 'Scheduled Task',
    icon: CalendarIcon,
  },
  {
    href: '/custom-gpt',
    label: 'Principal AWS Architect',
    tag: '2',
    subtitle: 'Custom GPT',
    icon: BotIcon,
  },
  {
    href: '/csv-analyser',
    label: 'CSV Analyser Skill',
    tag: '3',
    subtitle: 'Create Skill with Chat',
    icon: ChartIcon,
  },
  {
    href: '/python-reviewer',
    label: 'Python Code Reviewer',
    tag: '4',
    subtitle: 'Create Skill with Editor',
    icon: CodeIcon,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-64 flex flex-col z-30"
      style={{ background: 'var(--bg-surface)', borderRight: '1px solid var(--border)' }}
    >
      <div className="flex items-center gap-3 px-5 py-5" style={{ borderBottom: '1px solid var(--border)' }}>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white font-bold text-sm"
          style={{ background: 'var(--step-bg)' }}
        >
          T
        </div>
        <div>
          <p className="text-sm font-semibold leading-none" style={{ color: 'var(--text-primary)' }}>
            DS Tech Test Drive
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            Demo Guide
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {sections.map((s) => {
          const active = pathname === s.href
          return (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors group"
              style={{
                background: active ? 'var(--accent-dim)' : 'transparent',
                color: active ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              <s.icon size={16} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {s.tag && (
                    <span
                      className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: active ? 'var(--accent)' : 'var(--text-muted)' }}
                    >
                      {s.tag}
                    </span>
                  )}
                  <span className="text-sm font-medium truncate">{s.label}</span>
                </div>
                {s.subtitle && (
                  <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>
                    {s.subtitle}
                  </p>
                )}
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-4" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          ChatGPT Demo Guide
        </p>
      </div>
    </aside>
  )
}

function HomeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CalendarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function BotIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  )
}

function ChartIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}

function CodeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
