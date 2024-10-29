import connectMongo from "../../../lib/mongoose/mongoose";
import User from "../../../lib/mongoose/models/User";

export async function GET() {
  await connectMongo();
  const users = await User.find({});
  return new Response(JSON.stringify(users), { status: 200 });
}