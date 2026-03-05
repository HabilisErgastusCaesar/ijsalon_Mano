import { NextResponse } from 'next/server'
import ijsSoorten from '@/data/ijsSoorten.json' assert { type: "json" }

export async function GET() {
  return NextResponse.json(ijsSoorten);
}
