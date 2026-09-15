import type { ReactNode } from 'react'

export interface UsageExample {
  title: string
  code: string
}

export interface ComponentCatalogItem {
  id: string
  label: string
  description?: string
  render: ReactNode
  code: string
  sourcePath: string
  docPath: string
}
