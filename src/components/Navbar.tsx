"use client";

import { useState } from "react";
import { montserrat } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white z-50 shadow ${montserrat.className}`}>
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <p className={`text-2xl font-bold`}>LOGO ARUNIKA</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/teams">Teams</Link>
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4 shadow-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/teams" onClick={() => setMenuOpen(false)}>Teams</Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blog List</Link>
          {user ? (
            <>
              <Link href="/write" onClick={() => setMenuOpen(false)}>Write</Link>
              <Button variant="destructive" onClick={() => { clearAuth(); setMenuOpen(false); }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <Link href="/sign-up" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
