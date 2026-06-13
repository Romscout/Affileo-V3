import { CTAInsta } from "@/components/CTAInsta";
import { Section, SectionTitle } from "@/components/Section";

export const metadata = {
  title: "Pour les influenceurs",
  description:
    "Programme partenaire Affileo : revshare 30%, paiement mensuel, on gère la conversion.",
};

const ARGUMENTS = [
  {
    title: "Conversion x6",
    text: "Notre bot Insta + nos parrains sont entraînés sur des centaines de conversations. Les filleuls qu'on traite vont au bout du parcours. Tu touches des commissions sur des leads qui auraient été perdus en solo.",
  },
  {
    title: "Tu postes, c'est tout",
    text: "On t'envoie un brief créatif (hooks, angles, CTA). Tu fais la vidéo à ta sauce. On gère tous les DM entrants, le suivi KYC, les relances. Tu peux poster 2-3 fois par mois et toucher des revenus passifs.",
  },
  {
    title: "Paiement mensuel cash",
    text: "30% du revenu généré, payé en virement ou crypto, le 5 de chaque mois. Reporting transparent : tu vois tes leads en temps réel dans un dashboard partagé.",
  },
  {
    title: "Tu gardes l'audience",
    text: "Pas d'exclu lourde, pas de contrat à rallonge. Tu peux faire d'autres collabs en parallèle. On veut juste qu'on bosse bien ensemble.",
  },
];

export default function Page() {
  return (
    <>
      <Section>
        <SectionTitle
          eyebrow="Programme partenaire"
          title="Tu as une audience finance, lifestyle ou étudiants ?"
          subtitle="On cherche 8 à 12 micro-influenceurs (10-50k followers, audience 18-25 ans) pour devenir partenaires."
        />

        <div className="mt-12">
          <CTAInsta
            label="Discutons en DM"
            trackingLabel="influencers-top"
            className="text-base"
          />
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {ARGUMENTS.map((arg) => (
            <div
              key={arg.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="text-xl font-semibold text-ink">{arg.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {arg.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionTitle
          eyebrow="Le deal type"
          title="Comment on collabore concrètement"
        />

        <div className="mt-12 space-y-4">
          {[
            {
              n: "01",
              title: "Brief créatif sur mesure",
              text: "Tu reçois 3-4 angles validés (hooks qui ont marché chez d'autres créateurs, structure narrative, CTA précis). Tu adaptes à ton style.",
            },
            {
              n: "02",
              title: "Liens trackés personnalisés",
              text: "On te crée des liens UTM uniques par vidéo. Tu vois en direct combien de leads ta vidéo a générés et combien ont converti.",
            },
            {
              n: "03",
              title: "On absorbe les DM",
              text: "Les filleuls te DM ou DM directement le compte Affileo. Dans les deux cas, on prend le relais. Pas de gestion conversation pour toi.",
            },
            {
              n: "04",
              title: "Reporting + paiement mensuel",
              text: "Le 1er du mois, tu reçois ton récap (vues, leads, conversions, montant). Le 5, tu reçois le virement.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="grid gap-4 rounded-xl border border-border bg-surface p-6 md:grid-cols-[80px_1fr]"
            >
              <div className="text-3xl font-mono text-accent">{step.n}</div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Prêt à monétiser ton audience proprement ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            On rencontre les premiers partenaires sur Paris. Réserve un créneau via DM.
          </p>
          <div className="mt-10">
            <CTAInsta
              label="DM pour booker un créneau"
              trackingLabel="influencers-bottom"
              className="text-base"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
