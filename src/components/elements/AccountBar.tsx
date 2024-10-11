"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import RegisterForm from "../layouts/auth/register/RegisterForm";
import LoginForm from "../layouts/auth/login/LoginForm";

const AccountBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  if (pathname === "/auth/login" || pathname === "/auth/register") return;

  return (
    <aside className="fixed top-0 right-0 h-screen border-l border-l-gray-300">
      <div
        className={cn(
          "transition-all w-64 duration-300 bg-white dark:bg-[#060606] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.03)] h-full",
        )}
      >
        {!session ? (
          <div className="flex flex-col items-center gap-2 p-2">
            <div className="w-full aspect-square bg-blue-600 rounded-lg"></div>
            <Dialog>
              <DialogTrigger asChild className="w-full">
                <Button>Register</Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <RegisterForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild className="w-full">
                <Button variant={"secondary"}>Login</Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <LoginForm />
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <div>
            <h1>{session.user.username}</h1>
            <Button variant={"destructive"} onClick={() => signOut()}>
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AccountBar;
