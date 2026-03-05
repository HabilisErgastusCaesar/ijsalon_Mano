import { NextResponse } from "next/server";
import StrooiSels from '@/data/strooisels.json' assert { type: "josn" }

export async function GET() {
    return NextResponse.json(StrooiSels);
}