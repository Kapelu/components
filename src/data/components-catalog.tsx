import type { ComponentCatalogItem } from '@/components/pages/componentes/types'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const componentsCatalog: ComponentCatalogItem[] = [
  {
    id: 'button',
    label: 'Button',
    description: `Componente reutilizable de botón para aplicaciones **Next.js + React + TypeScript + Tailwind**.
    El componente permite representar tanto un \`<Button>\` HTML como un enlace de \`Next.js\` mediante una única API.`,
    docPath: 'src/doc/DocButton.tsx.md',
    render: (
      <div className='flex gap-4'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='primary' loading>
          Ghost
        </Button>
      </div>
    ),
    code: '',
    sourcePath: 'src/components/ui/Button.tsx',
    usages: [
      {
        title: 'Variante primaria',
        code: `<Button variant='primary'>Enviar</Button>`,
      },
      {
        title: 'Variante secundaria como enlace',
        code: `<Button variant='secondary' href='/contacto'>\n  Contactar\n</Button>`,
      },
      {
        title: 'Tamaño pequeño en estado de carga',
        code: `<Button size='sm' loading>\n  Guardar\n</Button>`,
      },
    ],
  },

  {
    id: 'input',
    label: 'Input',
    description:
      'Campo de texto con soporte para ícono, etiqueta flotante y modo multilínea.',
    docPath: 'src/doc/DocInput.tsx.md',
    render: <Input placeholder='Escribí tu nombre' floating label='Nombre' />,
    code: '',
    sourcePath: 'src/components/ui/Input.tsx',
    usages: [
      {
        title: 'Campo simple con etiqueta',
        code: `<Input label='Email' type='email' required />`,
      },
      {
        title: 'Área de texto multilínea',
        code: `<Input\n  label='Mensaje'\n  multiline\n  textareaRows={5}\n/>`,
      },
    ],
  },
]
