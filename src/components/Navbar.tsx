"use client";

import { useState } from "react";
import { montserrat } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#00ADB5] text-[#393E46] z-50 shadow ${montserrat.className}`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/companylogo.png"
            alt="Company Logo"
            width={500}
            height={50}
            priority
            className="absolute h-40 w-40 top-[-46] left-1 md:left-4 md:top-[-45]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/">
            <Button variant="link" className="text-[#393E46] cursor-pointer">
              Home
            </Button>
          </Link>
          <Link href="/aboutus">
            <Button variant="link" className="text-[#393E46] cursor-pointer">
              About Us
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="link" className="text-[#393E46] cursor-pointer">
              Services
            </Button>
          </Link>
          <Link href="/teams">
            <Button variant="link" className="text-[#393E46] cursor-pointer">
              Teams
            </Button>
          </Link>
          <Link href="/contactus">
            <Button variant="link" className="text-[#393E46] cursor-pointer">
              Contact Us
            </Button>
          </Link>
          <Link href="/blogs">
            {" "}
            <Button variant="link" className="text-[#393E46] cursor-pointer">
              Blog List
            </Button>
          </Link>
          {user ? (
            <>
              <Link href="/write">
                <Button
                  variant="link"
                  className="text-[#393E46] cursor-pointer"
                >
                  Write
                </Button>
              </Link>
              <Button
                variant="destructive"
                onClick={clearAuth}
                className="cursor-pointer"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="link"
                  className="text-[#393E46] cursor-pointer"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  variant="link"
                  className="text-[#393E46] cursor-pointer"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4 shadow-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/aboutus" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/teams" onClick={() => setMenuOpen(false)}>
            Teams
          </Link>
          <Link href="/contactus" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>
            Blog List
          </Link>
          {user ? (
            <>
              <Link href="/write" onClick={() => setMenuOpen(false)}>
                Write
              </Link>
              <Button
                variant="destructive"
                onClick={() => {
                  clearAuth();
                  setMenuOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in" onClick={() => setMenuOpen(false)}>
                Sign In
              </Link>
              <Link href="/sign-up" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
