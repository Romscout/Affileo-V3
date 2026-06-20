"use client";

import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { trackEvent } from "./MetaPixel";

type Props = {
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
  trackingLabel?: string;
};

// Pages du site qui ne sont PAS des codes influenceurs.
const RESERVED = [
  "offres",
  "faq",
  "contact",
  "influenceurs",
  "comment-ca-marche",
  "mentions-legales",
];

export function CTAInsta({
  label = "Je me lance",
  variant = "primary",
  className = "",
  trackingLabel = "default",
}: Props) {
  // Code influenceur lu depuis l'URL :
  //  - /go/<code>  (ancien format)
  //  - /<code>     (format court, ex: /cha, /menzo)
  // Sinon "site_cta".
  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  const seg = parts[0] === "go" ? parts[1] || "" : parts[0] || "";
  const ref = !seg || RESERVED.includes(seg) ? "site_cta" : seg;
  const href = `https://ig.me/m/${SITE_CONFIG.instagramHandle}?ref=${encodeURIComponent(ref)}`;

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-medium transition-all duration-200 select-none";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accentDark hover:shadow-[0_0_30px_rgba(42,111,240,0.45)] active:scale-[0.98]",
    secondary:
      "border border-border bg-surface text-ink hover:border-accent hover:text-accent",
  };

  const handleClick = () => {
    trackEvent("ClickedInstaCTA", { source: trackingLabel });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
