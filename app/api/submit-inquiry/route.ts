import { NextResponse } from "next/server"
import dbConnect from "../../../lib/mongodb"
import CustomerInquiry from "../../../models/CustomerInquiry"

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    const { name, email, phone, service, date, message } = body

    const customerInquiry = await CustomerInquiry.create({
      name,
      email,
      phone,
      service,
      date: new Date(date),
      message,
    })

    return NextResponse.json({ success: true, data: customerInquiry })
  } catch (error) {
    console.error("Error submitting inquiry:", error)
    return NextResponse.json({ success: false, error: "Failed to submit inquiry" }, { status: 500 })
  }
}

