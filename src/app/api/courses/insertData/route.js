import { handleCourseInsertion } from "../../../../controllers/courseCOntroller";
import connectDB from "@/config/db";

export async function POST(req) {
  await connectDB();
  return handleCourseInsertion(req);
}
