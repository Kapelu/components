import type { MDXComponents } from 'mdx/types'

import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import ContactCard from '@/components/ui/cards/ContactCard'
import ContactForm from '@/components/ui/cards/ContactForm'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const mdxComponents = {
  Button,
  Input,
  ContactCard,
  ContactForm,
  Container,
  Footer,
  Header,
  Hero,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return mdxComponents
}
