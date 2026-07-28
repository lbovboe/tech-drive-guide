'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from '@/components/Sidebar'
import { ScriptSidebar } from '@/components/ScriptSidebar'
import { ThemeToggle } from '@/components/ThemeToggle'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isScript = pathname.startsWith('/script/')

  return (
    <>
      {isScript ? <ScriptSidebar /> : <Sidebar />}
      <div className="pl-64 min-h-screen flex flex-col">
        <header
          className="sticky top-0 z-20 flex items-center justify-end px-8 py-3"
          style={{
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <ThemeToggle />
        </header>
        <main className="flex-1 px-8 py-10 max-w-4xl w-full mx-auto">
          {children}
        </main>
      </div>
    </>
  )
}
