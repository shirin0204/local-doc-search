import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // プレースホルダ: 実際の検索処理はここに実装
    return NextResponse.json({ ok: true, query: body }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}

export async function GET() {
  // プレースホルダ: 簡易ヘルスチェック / テスト用
  return NextResponse.json({ ok: true, message: 'search endpoint' })
}
