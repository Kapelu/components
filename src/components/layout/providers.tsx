'use client'

import { ThemeProvider } from 'next-themes'

import { ModalProvider } from '@/components/layout/ModalProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  )
}
