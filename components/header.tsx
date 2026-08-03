"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { href: "/actividades", label: "Cartelera" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

const FORMACION_LINKS = [
  { href: "/formacion/talleres-regulares", label: "Talleres Regulares" },
  { href: "/colaboradores", label: "Talleres Colaboradores" },
  { href: "/horarios", label: "Horarios" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formacionOpen, setFormacionOpen] = useState(false);
  const [mobileFormacionOpen, setMobileFormacionOpen] = useState(false);

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

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    if (!formacionOpen) return;
    const onDocClick = () => setFormacionOpen(false);
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [formacionOpen]);

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
          {/* Logo — circular blanco sobre el Hero, circular azul al hacer scroll */}
          <Link href="/" className="cursor-pointer shrink-0">
            <div className="transition-all duration-500 ease-in-out">
              {scrolled && !menuOpen ? (
                <Image
                  src="/logo-header-blue.png"
                  alt="Mardanza"
                  width={64}
                  height={64}
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

            {/* Formación dropdown (desktop) */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFormacionOpen((v) => !v);
                }}
                aria-expanded={formacionOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 hover:text-menta transition-colors ${
                  formacionOpen ? "text-menta" : ""
                }`}
              >
                Formación
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    formacionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {formacionOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 rounded-md border border-tinta/10 bg-papel p-2 shadow-lg">

                  {FORMACION_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setFormacionOpen(false)}
                      className="block rounded px-3 py-2 text-sm font-medium text-tinta transition-colors hover:bg-menta-suave hover:text-tinta"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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

            {/* Formación accordion (mobile) */}
            <div className="flex w-full max-w-xs flex-col items-center">
              <button
                type="button"
                onClick={() => setMobileFormacionOpen((v) => !v)}
                aria-expanded={mobileFormacionOpen}
                className="flex items-center gap-1 text-xl font-medium tracking-wide text-papel/90 transition-colors hover:text-papel"
              >
                Formación
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${
                    mobileFormacionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileFormacionOpen && (
                <div className="mt-3 flex w-full flex-col items-center gap-4 border-t border-papel/15 pt-4">
                  {FORMACION_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-normal tracking-wide text-papel/70 transition-colors hover:text-papel"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </>

  );
}
