import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/actividades", label: "Actividades" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-12">
      <Link href="/">
        <Image src="/logo-header.png" alt="Mardanza" width={44} height={44} />
      </Link>
      <nav className="flex gap-6 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-menta">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
