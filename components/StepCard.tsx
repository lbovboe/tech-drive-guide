interface StepCardProps {
  number: number
  title: string
  children: React.ReactNode
}

export function StepCard({ number, title, children }: StepCardProps) {
  return (
    <div className="flex gap-5 mb-10">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-white font-bold text-sm flex-shrink-0"
          style={{ background: 'var(--step-bg)' }}
        >
          {number}
        </div>
        <div
          className="w-px flex-1 mt-2"
          style={{ background: 'var(--border)', minHeight: '24px' }}
        />
      </div>
      <div className="flex-1 pb-2 min-w-0">
        <h3 className="text-base font-semibold mb-3 mt-1.5" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <div style={{ color: 'var(--text-secondary)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
