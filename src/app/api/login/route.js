import { loginUser } from '@/controllers/authController';
import connectDB from '@/config/db';

export async function POST(req) {
    await connectDB();
    return loginUser(req);
}
