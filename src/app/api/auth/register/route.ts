import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Make sure Firebase is properly initialized here

const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must have at least 3 characters")
    .max(100, "Username max length is 100 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = userSchema.parse(body);

    // Check if email already exists
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
      username,
      email,
      password: hashedPassword,
      role: "admin", // Assuming you want to add roles
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await addDoc(usersRef, newUser);

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          username: newUser.username,
          email: newUser.email,
        },
      },
      { status: 201 },
    );
  } catch (err: any) {
    console.error("Error in register route: ", err); // Log the error for debugging
    return NextResponse.json({ message: "Internal server error", error: err.message }, { status: 500 });
  }
}
