"use client";

import { INSTAGRAM_DM_URL } from "@/lib/config";
import { trackEvent } from "./MetaPixel";

type Props = {
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
  trackingLabel?: string;
};

export function CTAInsta({
  label = "Je me lance",
  variant = "primary",
  className = "",
  trackingLabel = "default",
}: Props) {
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
      href={INSTAGRAM_DM_URL}
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
