import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import bcrypt from "bcrypt";
import { db } from "@/lib/firebase";

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(userData: { username: string; email: string; password: string }): Promise<boolean> {
  const q = query(collection(db, "users"), where("email", "==", userData.email));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    return false;
  } else {
    userData.password = await bcrypt.hash(userData.password, 12);

    try {
      await addDoc(collection(db, "users"), userData);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
