"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Code, Wrench, Globe, Play, Network, FileText, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

const navItems = [
  { label: "Bảo mật", href: "/category/security", icon: Shield },
  { label: "Lập trình", href: "/category/development", icon: Code },
  { label: "Tiện ích", href: "/category/utilities", icon: Wrench },
  { label: "Trình duyệt", href: "/category/browsers", icon: Globe },
  { label: "Đa phương tiện", href: "/category/media", icon: Play },
  { label: "Mạng", href: "/category/networking", icon: Network },
  { label: "Văn phòng", href: "/category/office", icon: FileText },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-dark text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/favicon.svg" alt="IT Tools Hub" className="w-8 h-8 rounded-lg" />
          <span className="text-lg font-bold hidden sm:inline">IT Tools Hub</span>
        </Link>

        <SearchBar />

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Nav bar */}
      <nav className="bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-lighter border-t border-white/10">
          <ul className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
