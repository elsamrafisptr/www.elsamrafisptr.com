import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
    };
  }

  interface User {
    id: string;
    username: string;
    email: string;
    role: string;
  }

  interface JWT {
    id: string;
    username: string;
    email: string;
    role: string;
  }
}

export const authConfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Query Firebase to get the user document
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          throw new Error("Invalid email or password");
        }

        // Extract the user document from Firebase
        const userDoc = querySnapshot.docs[0];
        const user = userDoc.data() as {
          id: string;
          username: string;
          email: string;
          password: string; // Hash stored in Firebase
          role: string;
        };

        // Check if the password matches
        const isValidPassword = await compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid email or password");
        }

        // Return the user object with necessary fields for NextAuth
        return {
          id: userDoc.id,
          username: user.username,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
