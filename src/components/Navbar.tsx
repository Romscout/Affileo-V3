import Link from "next/link";
import { NAV_LINKS } from "@/lib/config";
import { CTAInsta } from "./CTAInsta";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <Logo size={32} withText />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAInsta
            label="Je me lance"
            variant="primary"
            trackingLabel="navbar"
            className="!px-5 !py-2 text-sm"
          />
        </div>

        <div className="md:hidden">
          <CTAInsta
            label="Insta"
            variant="primary"
            trackingLabel="navbar-mobile"
            className="!px-4 !py-2 text-sm"
          />
        </div>
      </div>
    </header>
  );
}
