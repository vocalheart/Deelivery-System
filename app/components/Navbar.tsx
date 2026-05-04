"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-orange-500 font-bold text-lg tracking-wide">
          READY MEALZ
        </h1>
        {/* Menu */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/login" className="hover:text-orange-500 transition">
            Login
          </Link>
          <Link href="/register" className="hover:text-orange-500 transition">
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}