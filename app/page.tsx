import Link from 'next/link'

const sections = [
  {
    number: '1',
    href: '/schedule',
    title: 'Daily Technology News',
    subtitle: 'Scheduled Task',
    description:
      'Configure ChatGPT to automatically search for important technology news every afternoon and send results via push notification and email.',
    steps: 5,
    icon: CalendarIcon,
    color: '#3b82f6',
  },
  {
    number: '2',
    href: '/custom-gpt',
    title: 'Principal AWS Architect',
    subtitle: 'Custom GPT',
    description:
      'Create a specialised GPT that reviews AWS architectures using AWS Well-Architected best practices with expert-level analysis.',
    steps: 8,
    icon: BotIcon,
    color: '#8b5cf6',
  },
  {
    number: '3',
    href: '/csv-analyser',
    title: 'CSV Analyser Skill',
    subtitle: 'SingStat MCP',
    description:
      'Build and share a reusable skill that analyses SingStat MCP CSV query logs and generates monthly usage reports in DOCX and PDF.',
    steps: 9,
    icon: ChartIcon,
    color: '#10b981',
  },
  {
    number: '4',
    href: '/python-reviewer',
    title: 'Python Code Reviewer',
    subtitle: 'Code Review Skill',
    description:
      'Create a shared skill that applies consistent Python review standards across your division, covering PEP 8, security, and testing.',
    steps: 7,
    icon: CodeIcon,
    color: '#f59e0b',
  },
]

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <p
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-5"
          style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
        >
          ChatGPT Demo Guide
        </p>
        <h1 className="text-4xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Tech Test Drive
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          A hands-on guide covering four demonstrations: scheduled news reports, custom GPTs, and
          reusable AI skills built on ChatGPT.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${s.color}20` }}
              >
                <s.icon color={s.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white flex-shrink-0"
                    style={{ background: s.color }}
                  >
                    {s.number}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    {s.subtitle}
                  </span>
                </div>
                <h2 className="text-base font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {s.title}
                </h2>
              </div>
            </div>

            <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
              {s.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {s.steps} steps
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
                style={{ color: s.color }}
              >
                Start guide
                <ArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function BotIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  )
}

function ChartIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}

function CodeIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
