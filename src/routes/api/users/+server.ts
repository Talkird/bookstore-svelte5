import type { RequestHandler } from '@sveltejs/kit';
import connectMongo from "../../../lib/mongoose/mongoose";
import User from "../../../lib/mongoose/models/User";

export async function GET() {
  await connectMongo();
  const users = await User.find({});
  return new Response(JSON.stringify(users), { status: 200 });
}

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json(); 
    const { uid, username, email, password, role } = body;

    try {
        await connectMongo();
        const newUser = new User({ uid, username, email, password, role });
        await newUser.save();

        return new Response(JSON.stringify({ message: "User created" }), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to create user" }), { status: 500 });
    }
};
