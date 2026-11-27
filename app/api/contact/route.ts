import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Unsupported Content-Type. Expected application/json." },
        { status: 415 }
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot field check to silently drop automated spam bots
    if (typeof body.websiteUrl === "string" && body.websiteUrl.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const validation = validateContactPayload(body);
    if (!validation.valid || !validation.sanitized) {
      const firstError = Object.values(validation.errors)[0] || "Invalid form inputs.";
      return NextResponse.json(
        { error: firstError, fieldErrors: validation.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        receivedAt: new Date().toISOString(),
        referenceId: `GH-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Malformed JSON request payload." },
      { status: 400 }
    );
  }
}
