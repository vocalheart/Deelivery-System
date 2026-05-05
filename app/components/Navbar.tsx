"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-md border-b border-orange-100" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🍱</span>
            <span className="text-orange-500 font-extrabold text-lg sm:text-xl tracking-tight">
              Ready<span className="text-gray-900">Mealz</span>
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  pathname === link.href
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Desktop Auth Buttons ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-500 px-5 py-2 rounded-full transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-orange-200 hover:shadow-md"
            >
              Get Started 🚀
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-orange-50 transition gap-1.5"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname === link.href
                  ? "text-orange-500 bg-orange-50 font-semibold"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-100 my-2" />

          {/* Mobile Auth */}
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-700 border border-gray-200 hover:border-orange-300 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:bg-orange-50 hover:text-orange-500"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-xl text-center transition-all duration-200 shadow-sm"
          >
            Get Started 🚀
          </Link>
        </div>
      </div>
    </nav>
  );
}