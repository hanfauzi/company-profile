"use client";

import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();

  return (
    <nav className="fixed container mx-auto p-4 flex justify-between items-center ">
      <Link href="/">
        <p className={`text-3xl font-bold ${lato.className}`}>LOGO ARUNIKA</p>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/aboutus">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/blogs">Blog List</Link>
        {user ? (
          <>
            <Link href="/write">Write</Link>
            <Button variant="destructive" onClick={clearAuth}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
