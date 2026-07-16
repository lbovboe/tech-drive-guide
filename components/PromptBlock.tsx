import { CopyButton } from './CopyButton'

interface PromptBlockProps {
  children: string
  label?: string
  mono?: boolean
}

export function PromptBlock({ children, label, mono = false }: PromptBlockProps) {
  return (
    <div
      className="my-4 rounded-xl overflow-hidden"
      style={{ border: '1px solid var(--border)' }}
    >
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: 'var(--bg-surface-2)', borderBottom: '1px solid var(--border)' }}
      >
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          {label ?? 'Prompt'}
        </span>
        <CopyButton text={children} />
      </div>
      <pre
        className={`px-4 py-4 text-sm leading-relaxed whitespace-pre-wrap break-words overflow-x-auto ${mono ? 'font-mono' : 'font-sans'}`}
        style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
      >
        {children}
      </pre>
    </div>
  )
}
