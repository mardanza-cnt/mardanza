"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/actividades", label: "Actividades" },
  { href: "/horarios", label: "Horarios" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-500 md:px-12 ${
        scrolled ? "bg-papel/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo — aparece/desaparece con scroll */}
        <Link href="/">
          <div
            className={`transition-all duration-500 ease-in-out ${
              scrolled
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src="/logo-blue.png"
              alt="Mardanza"
              width={120}
              height={32}
              priority
            />
          </div>
        </Link>

        {/* Hamburger button — visible on mobile */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-tinta" : "text-papel"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav
          className={`hidden gap-8 text-base font-medium tracking-wide md:flex ${
            scrolled ? "text-tinta" : "text-papel"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-menta transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className={`mt-4 flex flex-col gap-3 border-t pt-4 md:hidden ${
            scrolled
              ? "border-tinta/10 text-tinta"
              : "border-papel/20 text-papel"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium tracking-wide hover:text-menta transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
