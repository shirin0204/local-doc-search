import { NextResponse } from 'next/server'

let docs: Array<{ id: number; title: string; content?: string }> = []

export async function GET() {
  return NextResponse.json({ ok: true, items: docs })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const id = docs.length + 1
    const item = { id, title: body.title || `doc-${id}`, content: body.content }
    docs.push(item)
    return NextResponse.json({ ok: true, item }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}
