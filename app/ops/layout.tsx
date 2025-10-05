'use client'

import { OpsProvider } from '@/lib/ops/ops-context'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-50 min-h-screen">
        <OpsProvider>{children}</OpsProvider>
      </body>
    </html>
  )
}
