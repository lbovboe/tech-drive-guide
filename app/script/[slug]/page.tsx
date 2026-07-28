import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

const SCRIPTS_DIR = path.join(process.cwd(), 'scripts')

export async function generateStaticParams() {
  const files = fs.readdirSync(SCRIPTS_DIR).filter((f) => f.endsWith('.md'))
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const title = slug
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
  return { title: `${title} — Script | Tech Test Drive` }
}

export default async function ScriptPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = path.join(SCRIPTS_DIR, `${slug}.md`)

  let content = ''
  try {
    content = fs.readFileSync(filePath, 'utf-8')
  } catch {
    return (
      <div className="prose-page">
        <h1>Script not found</h1>
        <p>No script file found for <code>{slug}</code>.</p>
      </div>
    )
  }

  return (
    <article className="prose-page">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
