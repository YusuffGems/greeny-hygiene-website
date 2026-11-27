import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      service: siteConfig.companyName,
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
