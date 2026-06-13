import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-container px-4 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-accent/40 bg-accentSoft px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
