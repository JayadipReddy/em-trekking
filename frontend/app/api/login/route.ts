import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

    const backendResponse = await fetch(
      `${API_BASE}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await backendResponse.json();

    return NextResponse.json(data, {
      status: backendResponse.status,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Backend not reachable" },
      { status: 500 }
    );
  }
}
