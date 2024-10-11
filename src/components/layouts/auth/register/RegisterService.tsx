"use client";

import axiosInstance from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type IUser = {
  id: string;
  username: string;
  email: string;
};

export const registerSchema = z
  .object({
    username: z.string().min(3, "Username must have at least 3 characters").max(100, "Max length is 100 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must have at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirmation Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function useRegisterForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    startTransition(async () => {
      try {
        const response = await axiosInstance.post("/auth/register", {
          username: values.username,
          email: values.email,
          password: values.password,
        });

        if (response.status === 201) {
          router.push("/auth/login");
        }
      } catch (err: any) {
        console.error("Registration error: ", err); // Add better logging
        if (err.response?.data?.message) {
          alert(err.response.data.message); // Inform user if backend provides a message
        } else {
          alert("Registration failed, please try again."); // Generic error message
        }
      }
    });
  }

  return { form, isPending, onSubmit };
}
