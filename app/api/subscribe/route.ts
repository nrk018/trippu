import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email()
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = bodySchema.parse(body)

    await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 400 })
  }
}