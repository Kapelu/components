import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import type { ComponentCatalogItem } from '@/lib/types'

export const componentsCatalog: ComponentCatalogItem[] = [
  {
    id: 'button',
    label: 'Button',
    description: `Componente reutilizable de botón para aplicaciones **Next.js + React + TypeScript + Tailwind**.
    El componente permite representar tanto un \`<Button>\` HTML como un enlace de \`Next.js\` mediante una única API.`,
    docPath: 'src/doc/Button.tsx.mdx',
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
  },
  {
    id: 'input',
    label: 'Input',
    description:
      'Componente reutilizable para la creación de campos de entrada y áreas de texto dentro de formularios. \`<Input>\` proporciona una API unificada para trabajar con diferentes tipos de campos HTML, incorporando funcionalidades como labels normales y flotantes, iconos, contraseñas, estados de validación nativos, campos obligatorios y personalización de estilos.',
    docPath: 'src/doc/Input.tsx.mdx',
    render: <Input placeholder='Escribí tu nombre' floating label='Nombre' />,
    code: '',
    sourcePath: 'src/components/ui/Input.tsx',
  },
]
