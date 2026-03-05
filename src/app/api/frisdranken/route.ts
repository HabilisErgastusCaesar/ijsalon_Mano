import { NextResponse } from "next/server";
import frisdranken from '@/data/frisdranken.json' assert { type: 'json' }

export async function GET() {
    return NextResponse.json(frisdranken);
}