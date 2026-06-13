import { CTAInsta } from "@/components/CTAInsta";
import { Section, SectionTitle } from "@/components/Section";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Contact",
  description: "Comment nous joindre.",
};

export default function Page() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Contact"
        title="Le moyen le plus rapide de nous joindre"
        subtitle="On répond aux DM Instagram en quelques minutes. Le mail c'est pour les sujets pros : marques, influenceurs sérieux, presse."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h3 className="text-lg font-semibold text-ink">
            Filleuls & questions rapides
          </h3>
          <p className="mt-2 text-sm text-muted">
            DM Instagram. On répond ultra vite.
          </p>
          <div className="mt-6">
            <CTAInsta
              label="Ouvrir le DM Insta"
              trackingLabel="contact-page-insta"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <h3 className="text-lg font-semibold text-ink">
            Marques & partenariats pros
          </h3>
          <p className="mt-2 text-sm text-muted">
            Pour parler taux préférentiels, contrats directs ou collaborations
            d'envergure.
          </p>
          <div className="mt-6">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
            >
              ✉ {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
