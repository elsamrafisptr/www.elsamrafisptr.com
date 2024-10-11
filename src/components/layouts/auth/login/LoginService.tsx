"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type IUser = {
  id: string;
  name: string;
  email: string;
};

export type User = {
  userId: string;
};

export type GetUser = () => User | undefined;

export const loginSchema = z.object({
  email: z.string().min(5).email(),
  password: z.string().min(5),
});

export default function useLoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (response?.error) {
        let error = "";
        switch (response.error) {
          case "CredentialsSignin":
            error = "Invalid credentials!";
            break;
          default:
            error = "Something went wrong!";
        }
        return;
      } else {
        router.push("/");
      }
    });
  }

  return { form, isPending, onSubmit };
}
