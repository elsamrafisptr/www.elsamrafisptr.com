import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Define the expected shape of user data for type safety
interface User {
  id: string;
  email: string;
  role: string;
}

// Check if a user is an admin based on their email
export const checkUserRole = async (email: string): Promise<boolean> => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const snapshot = await getDocs(q);

    // Ensure we have at least one user and retrieve the first one
    if (!snapshot.empty) {
      const userDoc = snapshot.docs[0];
      const user = userDoc.data() as User;

      // Check if the user's role is "admin"
      return user.role === "admin";
    }

    return false; // Return false if no user found
  } catch (error) {
    console.error("Error checking user role:", error);
    return false; // Return false if there was an error
  }
};
