"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLoginForm from "./LoginService";

export default function LoginForm() {
  const { form, isPending, onSubmit } = useLoginForm();
  const formValidation = form.formState.isDirty && form.formState.isValid;

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col justify-center space-y-8 rounded-xl p-8 dark:bg-neutral-950 md:w-max md:min-w-[30rem]">
        <Image
          src="/logo-black.png"
          alt="happykids"
          width={80}
          height={80}
          className="self-center object-cover"
          priority
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.id" disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formValidation || isPending}
            >
              {isPending ? "Loading..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
