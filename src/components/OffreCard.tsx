import type { Offre } from "@/lib/offres";
import { PlatformLogo } from "./PlatformLogo";

const categorieLabel: Record<Offre["categorie"], string> = {
  banque: "Banque en ligne",
  crypto: "Crypto",
  courtier: "Courtier / Bourse",
  neobanque: "Néobanque",
};

export function OffreCard({ offre }: { offre: Offre }) {
  const isDispo = offre.status === "active";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(42,111,240,0.18)]">
      <div className="flex items-start gap-4">
        <PlatformLogo brand={offre.brand} size={44} />
        <div className="flex-1">
          <span className="text-xs uppercase tracking-wider text-muted">
            {categorieLabel[offre.categorie]}
          </span>
          <h3 className="mt-0.5 text-xl font-semibold text-ink">{offre.marque}</h3>
        </div>
        {!isDispo && (
          <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted">
            Bientôt
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {offre.description}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-accent">{offre.prime}€</span>
        <span className="text-sm text-muted">de prime</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-muted">
        {offre.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
