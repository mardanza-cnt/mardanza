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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-500 md:px-12 ${
          menuOpen
            ? "bg-tinta"
            : scrolled
              ? "bg-papel/90 backdrop-blur-sm"
              : "bg-gradient-to-b from-tinta/60 to-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo — circular blanco sobre el Hero, wordmark al hacer scroll */}
          <Link href="/" className="cursor-pointer shrink-0">
            <div className="transition-all duration-500 ease-in-out">
              {scrolled && !menuOpen ? (
                <Image
                  src="/logo-white.png"
                  alt="Mardanza"
                  width={100}
                  height={27}
                  priority
                  className="h-auto w-auto"
                />
              ) : (
                <Image
                  src="/logo-header-white.png"
                  alt="Mardanza"
                  width={64}
                  height={64}
                  priority
                  className="h-auto w-auto"
                />
              )}
            </div>
          </Link>


          {/* Hamburger button — visible on mobile */}
          <button
            className={`md:hidden transition-colors ${
              scrolled && !menuOpen ? "text-tinta" : "text-papel/90"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop nav */}
          <nav
            className={`hidden gap-8 text-base font-medium tracking-wide md:flex ${
              scrolled ? "text-tinta" : "text-papel/90"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-menta transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile dropdown — full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Fondo opaco */}
          <div className="absolute inset-0 bg-tinta" />
          {/* Contenido del menú */}
          <nav className="relative z-10 mt-24 flex flex-col items-center gap-6 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-medium tracking-wide text-papel/90 transition-colors hover:text-papel"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>

  );
}
