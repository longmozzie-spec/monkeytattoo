"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "/about" },
  { label: "Nghệ Sĩ", href: "/artists" },
  { label: "Tác Phẩm", href: "/#masters" },
  { label: "FAQ", href: "/faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="relative h-10 w-36">
            <Image
              src="/images/logo/logo-white.png"
              alt="Monkey Tattoo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm bg-accent text-foreground px-6 py-2.5 font-semibold uppercase tracking-wider hover:bg-accent/85 transition-colors duration-300"
            >
              Đặt Lịch
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Mở menu"
          >
            <List size={28} weight="bold" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-6 h-[72px]">
            <span className="relative h-10 w-36 block">
              <Image
                src="/images/logo/logo-white.png"
                alt="Monkey Tattoo"
                fill
                className="object-contain object-left"
              />
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-foreground"
              aria-label="Đóng menu"
            >
              <X size={28} weight="bold" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-bold tracking-wider uppercase text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-lg bg-accent text-foreground px-8 py-3 font-semibold uppercase tracking-wider"
            >
              Đặt Lịch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
