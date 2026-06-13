import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-container px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size={32} withText />
            <p className="mt-4 max-w-xs text-sm text-muted">
              On industrialise l'affiliation banque & crypto. On guide les
              filleuls, on rémunère les influenceurs, on simplifie pour les
              marques.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Le projet</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/comment-ca-marche" className="hover:text-ink">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/offres" className="hover:text-ink">
                  Offres
                </Link>
              </li>
              <li>
                <Link href="/influenceurs" className="hover:text-ink">
                  Influenceurs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ink">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Légal & contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-ink">
                  Mentions légales
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-ink"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center">
          <span>© {year} {SITE_CONFIG.name}. Tous droits réservés.</span>
          <span>
            {SITE_CONFIG.name} agit comme apporteur d'affaires dans le cadre des
            programmes de parrainage des plateformes référencées.
          </span>
        </div>
      </div>
    </footer>
  );
}
