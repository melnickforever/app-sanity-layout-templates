"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-card-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-secondary tracking-tight"
        >
          <span className="text-primary">D</span>Melnyk
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg"
        >
          Get in Touch
        </Link>

        {/* Mobile menu button */}
        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <details className="md:hidden relative group">
      <summary className="list-none cursor-pointer p-2">
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-card-border py-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 text-sm hover:bg-section-alt ${
              pathname === link.href
                ? "text-primary font-medium"
                : "text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

