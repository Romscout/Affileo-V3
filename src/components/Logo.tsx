type Props = {
  size?: number;
  withText?: boolean;
  className?: string;
};

/**
 * Logo Affileo — version simple : carré bleu arrondi avec un A blanc.
 * Le "ffileo" est juxtaposé en typo pour former le mot "Affileo".
 */
export function Logo({ size = 32, withText = true, className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Affileo"
        style={{ display: "block", flexShrink: 0 }}
      >
        <rect width="32" height="32" rx="8" fill="#2A6FF0" />
        {/* "A" blanc simple et lisible */}
        <path
          d="M10.2 23L15 9h2l4.8 14h-3.1l-0.95-3h-4.5l-0.95 3h-2.9zm4.6-5.4h3l-1.5-4.7-1.5 4.7z"
          fill="white"
        />
      </svg>
      {withText && (
        <span
          className="font-semibold tracking-tight text-ink leading-none"
          style={{ fontSize: size * 0.62 }}
        >
          ffileo
        </span>
      )}
    </div>
  );
}
