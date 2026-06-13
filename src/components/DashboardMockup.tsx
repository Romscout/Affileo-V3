// Mockups visuels de "comptes filleuls" pour donner envie sur la page d'accueil.
// Romain pourra remplacer par de vraies captures plus tard.

type Props = {
  brand: string;
  brandColor: string;
  brandLabel: string;
  amount: string;
  positiveDelta: string;
  description: string;
};

export function DashboardMockup({
  brand,
  brandColor,
  brandLabel,
  amount,
  positiveDelta,
  description,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
      {/* Header avec logo + nom plateforme */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: brandColor }}
        >
          {brandLabel}
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted">
            Compte
          </div>
          <div className="text-sm font-semibold text-ink">{brand}</div>
        </div>
        <div className="ml-auto h-2 w-2 rounded-full bg-success" />
      </div>

      {/* Solde */}
      <div className="mt-8">
        <div className="text-xs uppercase tracking-wider text-muted">Solde</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-ink tracking-tight">
            {amount}
          </span>
          <span className="text-sm font-medium text-success">
            +{positiveDelta}
          </span>
        </div>
      </div>

      {/* Mini graphe stylisé (SVG inline) */}
      <svg
        viewBox="0 0 200 50"
        className="mt-6 w-full text-accent"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`grad-${brand}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 35 Q 30 28, 50 30 T 100 22 T 150 15 L 200 8 L 200 50 L 0 50 Z"
          fill={`url(#grad-${brand})`}
        />
        <path
          d="M 0 35 Q 30 28, 50 30 T 100 22 T 150 15 L 200 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>

      <p className="mt-4 text-xs text-muted">{description}</p>
    </div>
  );
}
