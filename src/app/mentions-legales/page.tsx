import { Section } from "@/components/Section";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Affileo.",
};

export default function Page() {
  return (
    <Section>
      <div className="prose prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          Mentions légales
        </h1>
        <p className="mt-2 text-sm text-muted">
          Dernière mise à jour : juin 2026
        </p>

        <div className="mt-10 space-y-8 text-base text-muted">
          <section>
            <h2 className="text-lg font-semibold text-ink">Éditeur du site</h2>
            <p className="mt-2">
              <strong className="text-ink">{SITE_CONFIG.name}</strong>
              <br />
              Adresse : Paris, France
              <br />
              Contact : {SITE_CONFIG.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Hébergement</h2>
            <p className="mt-2">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Activité</h2>
            <p className="mt-2">
              {SITE_CONFIG.name} agit comme apporteur d'affaires dans le cadre
              des programmes de parrainage officiels des plateformes bancaires
              et de cryptomonnaies référencées sur ce site. {SITE_CONFIG.name}
              n'est pas un établissement de crédit et ne fournit aucun service
              financier ou conseil en investissement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">
              Données personnelles (RGPD)
            </h2>
            <p className="mt-2">
              Lors de votre interaction avec nos comptes Instagram et nos
              services, nous collectons : pseudo Instagram, échanges de
              messages, statut de vos inscriptions aux offres référencées. Ces
              données sont conservées pour la durée nécessaire à
              l'accompagnement et au suivi commercial.
            </p>
            <p className="mt-2">
              Vous disposez d'un droit d'accès, de rectification, d'opposition
              et de suppression. Pour exercer ces droits, contactez-nous à{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-accent hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Cookies & tracking</h2>
            <p className="mt-2">
              Ce site utilise le pixel Meta (Facebook/Instagram) à des fins de
              mesure d'audience et de retargeting publicitaire. Aucune donnée
              nominative n'est transmise sans votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Marques tierces</h2>
            <p className="mt-2">
              Les logos et marques des plateformes référencées (BoursoBank,
              Hello Bank!, Fortuneo, Robinhood, OKX, Kraken et autres)
              appartiennent à leurs propriétaires respectifs. Ils sont utilisés
              à titre purement informatif et descriptif, dans le cadre des
              programmes de parrainage officiels de ces marques.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Propriété intellectuelle</h2>
            <p className="mt-2">
              L'ensemble du contenu de ce site (textes, design, code,
              logotype Affileo) est la propriété d'Affileo, sauf mention
              contraire. Toute reproduction sans autorisation préalable est
              interdite.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
