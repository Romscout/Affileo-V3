import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
export function GET(request: Request, context: { params: { ref: string } }) {
  const ref = encodeURIComponent(context.params.ref)
  return NextResponse.redirect('https://ig.me/m/affileo.io?ref=' + ref)
}
