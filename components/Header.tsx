"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Moon } from "lucide-react";
import { articles } from "@/data/articles";

const navLinks = [
  { label: "SLEEP GUIDES", href: "/sleep-guides" },
  { label: "THE WIND-DOWN", href: "/the-wind-down" },
  { label: "OUR METHOD", href: "/our-method" },
  { label: "SAY GOODNIGHT", href: "/say-goodnight" },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0]/95 backdrop-blur border-b border-[#E7E2D8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#211F2B]">
          <Moon className="w-6 h-6 text-[#4D4A99]" />
          SleepNestPress
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-semibold tracking-wide text-[#211F2B] hover:text-[#4D4A99] transition-colors"
            >
              NEST PICKS
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-72 card p-2 shadow-lg">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/best/${a.slug}`}
                    className="block px-3 py-2 rounded-lg text-sm text-[#211F2B] hover:bg-[#F3EEE4] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-[#211F2B] hover:text-[#4D4A99] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-[#211F2B]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E7E2D8] bg-[#FAF6F0] px-4 py-4 space-y-4">
          <div>
            <p className="eyebrow mb-2">Nest Picks</p>
            <div className="space-y-1">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/best/${a.slug}`}
                  className="block py-1 text-sm text-[#211F2B]"
                  onClick={() => setMobileOpen(false)}
                >
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-[#E7E2D8]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold text-[#211F2B]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
