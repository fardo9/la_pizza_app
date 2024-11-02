import { Header } from '@/shared/components'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Next Pizza | Main'
}

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <main className="min-h-screen">
      {modal}
      <Suspense>
        <Header />
      </Suspense>
      {children}
    </main>
  )
}
