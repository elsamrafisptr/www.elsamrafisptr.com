import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function login(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (!data) {
    return null;
  }

  return data[0];
}
