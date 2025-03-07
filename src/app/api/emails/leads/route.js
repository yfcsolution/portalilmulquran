import { NextResponse } from "next/server";
import { handleLeadEmails } from "@/controllers/emailsController";

export async function POST(req) {
  try {
    // Directly call the controller function without authorization check
    return await handleLeadEmails(req);
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
