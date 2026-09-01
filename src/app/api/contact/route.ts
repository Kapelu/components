import { ContactEmail } from '@/components/ui/emails/ContactEmail'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { success: false, message: 'Servicio de correo no configurado.' },
        { status: 503 },
      )
    }

    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Todos los campos son obligatorios.' },
        { status: 400 },
      )
    }

    await resend.emails.send({
      from: 'Transporte Libertador <onboarding@resend.dev>',
      to: ['ddaniel_calderon@proton.me'],
      subject: `Mensaje de ${name}`,
      replyTo: email,
      react: ContactEmail({
        name,
        email,
        message,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false, message: 'No fue posible enviar el mensaje.' },
      { status: 500 },
    )
  }
}
