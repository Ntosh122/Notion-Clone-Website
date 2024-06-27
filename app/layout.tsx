import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import favicon from '../public/logos/Notion.png'
const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Connected Workspace for wiki, docs & projects | Notion',
  description: 'Notion - Simple and powerful notes & docs for teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/public/notion-logo.png" sizes="any" />
      <body className={font.className}>{children}</body>
    </html>
  )
}
