import { NextResponse } from "next/server";
import hoorntjesBakjes from '@/data/hoorntjesBakjes.json' assert { type: 'json' }

export async function GET() {
    return NextResponse.json(hoorntjesBakjes);
}