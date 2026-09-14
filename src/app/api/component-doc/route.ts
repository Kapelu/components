import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const DOCS_ROOT = path.join(process.cwd(), 'src', 'doc')

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const docPath = searchParams.get('path')

  if (!docPath || !docPath.startsWith('src/doc/')) {
    return new NextResponse('Ruta de documentación no válida.', {
      status: 400,
    })
  }

  const relativePath = docPath.slice('src/doc/'.length)

  if (
    !relativePath ||
    relativePath.includes('..') ||
    path.isAbsolute(relativePath)
  ) {
    return new NextResponse('Ruta de documentación no válida.', {
      status: 400,
    })
  }

  const extension = path.extname(relativePath).toLowerCase()

  if (extension !== '.mdx' && extension !== '.md') {
    return new NextResponse('Formato de documentación no válido.', {
      status: 400,
    })
  }

  const filePath = path.resolve(DOCS_ROOT, relativePath)

  if (!filePath.startsWith(`${DOCS_ROOT}${path.sep}`)) {
    return new NextResponse('Ruta de documentación no válida.', {
      status: 400,
    })
  }

  try {
    const documentation = await readFile(filePath, 'utf8')

    return new NextResponse(documentation, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  } catch {
    return new NextResponse('Documentación no encontrada.', {
      status: 404,
    })
  }
}
