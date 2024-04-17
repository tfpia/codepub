import { fetchFromGSheet } from "../../fetchFromGoogleSheet"
import { NextRequest, NextResponse } from "next/server"
export const dynamic = "force-dynamic"

export async function GET(
  _req: NextRequest,
  context: { params: { year: string } },
) {
  try {
    const year = context.params.year
    if (!year) {
      return NextResponse.json({ message: "Missing year" }, { status: 400 })
    }
    const response = await fetchFromGSheet(year as string)
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error("Error fetching data from GSheet:", error)
    return NextResponse.json(
      { error: "Failed to fetch data from GSheet" + error },
      { status: 500 },
    )
  }
}
