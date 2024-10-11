import { getServerSession } from "next-auth";
import { authConfig } from "./authOptions";
import { AuthenticationError } from "@/lib/error";

export async function getUserSession() {
  const session = await getServerSession(authConfig);

  if (!session) {
    throw new AuthenticationError();
  }

  return session;
}

export async function checkPermission() {
  const session = await getUserSession();

  if (!session || !session.user) {
    throw new AuthenticationError();
  }

  return session;
}
