import Link from "next/link";
import { CTAInsta } from "@/components/CTAInsta";
import { Section, SectionTitle } from "@/components/Section";
import { OffreCard } from "@/components/OffreCard";
import { DashboardMockup } from "@/components/DashboardMockup";
import { OFFRES_ACTIVES } from "@/lib/offres";
import { SOCIAL_PROOF } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-glow" />
        <div className="relative mx-auto max-w-container px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Empoche jusqu'à <span className="text-accent">550€</span> en parrainage grâce à Affileo
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Un parcours snipé, rapide et clair sur les meilleures offres
              banque & crypto. Avec des conditions préférentielles qu'on a
              négociées pour toi.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAInsta
                label="Je veux ma première prime"
                trackingLabel="hero-primary"
                className="text-base"
              />
              <Link
                href="/comment-ca-marche"
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                Comment ça marche →
              </Link>
            </div>

            {/* Social proof */}
            <div className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="text-2xl font-bold text-ink">
                  {SOCIAL_PROOF.filleulsAides}
                </div>
                <div className="mt-1 text-xs text-muted">filleuls aidés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ink">
                  {SOCIAL_PROOF.primesGenerees}
                </div>
                <div className="mt-1 text-xs text-muted">primes générées</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ink">
                  {SOCIAL_PROOF.reactivite}
                </div>
                <div className="mt-1 text-xs text-muted">réponse moyenne en DM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREUVES — DASHBOARDS DE COMPTES */}
      <Section className="!pt-0">
        <SectionTitle
          eyebrow="Ils ont touché"
          title="Voilà ce que ça donne sur de vrais comptes filleuls"
          subtitle="Des primes versées, vérifiables, qu'on a aidé à débloquer la semaine dernière."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <DashboardMockup
            brand="BoursoBank"
            brandColor="#FF338A"
            brandLabel="B"
            amount="3 280€"
            positiveDelta="80€"
            description="Prime parrainage versée directement sur le compte courant."
          />
          <DashboardMockup
            brand="Robinhood"
            brandColor="#00C805"
            brandLabel="R"
            amount="1 247€"
            positiveDelta="50€"
            description="Prime versée instantanément après le premier dépôt."
          />
          <DashboardMockup
            brand="OKX"
            brandColor="#1A1A1A"
            brandLabel="OK"
            amount="0,00076 BTC"
            positiveDelta="≈ 80€"
            description="Bonus en BTC après volume crypto. Revente immédiate possible."
          />
        </div>
      </Section>

      {/* COMMENT ÇA MARCHE — résumé 3 étapes */}
      <Section className="border-t border-border">
        <SectionTitle
          eyebrow="Comment ça marche"
          title="Trois étapes. Aucune chance de te perdre."
          subtitle="On a réduit le truc à l'os. Tu nous DM et on prend le relais — étape par étape, on connaît les règles par cœur."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Tu nous écris sur Insta",
              text: "Un clic depuis le site ou la bio TikTok. On répond en quelques minutes avec un parcours personnalisé selon ta situation.",
            },
            {
              n: "02",
              title: "Tu suis le guide pas à pas",
              text: "Inscription, KYC, validation : on t'envoie chaque étape avec captures d'écran. Tu n'as plus qu'à cliquer où on te dit.",
            },
            {
              n: "03",
              title: "Tu touches l'argent",
              text: "Les primes arrivent sur tes comptes plateforme. On te recontacte ensuite pour cumuler avec l'offre suivante si tu veux.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="text-sm font-mono text-accent">{step.n}</div>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAInsta
            label="Je veux mon parcours"
            trackingLabel="how-it-works"
          />
        </div>
      </Section>

      {/* OFFRES — preview */}
      <Section className="border-t border-border">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Catalogue"
            title="Les offres qui paient vraiment"
            subtitle="On ne référence que les programmes que nos parrains ont testés et validés. Pas d'arnaques, pas de blabla, pas de prime fantôme."
          />
          <Link
            href="/offres"
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            Voir toutes les offres →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OFFRES_ACTIVES.slice(0, 3).map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))}
        </div>
      </Section>

      {/* POUR INFLUENCEURS — teaser */}
      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-accent/40 bg-accentSoft px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                Pour les créateurs
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Tu as une audience.
                <br />
                On a la machine.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Tu postes 2-3 vidéos par mois sur les offres qu'on te brief.
                On gère la conversion en DM, le suivi et le paiement. Tu touches
                30% du revenu généré.
              </p>
              <div className="mt-8">
                <Link
                  href="/influenceurs"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accentDark transition-colors"
                >
                  Devenir partenaire →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "30%", v: "de revshare" },
                { k: "x6", v: "de conversion vs solo" },
                { k: "Mensuel", v: "paiement automatique" },
                { k: "Clé en main", v: "tu postes, on gère le reste" },
              ].map((item) => (
                <div
                  key={item.v}
                  className="rounded-xl border border-border bg-bg p-5"
                >
                  <div className="text-2xl font-bold text-accent">{item.k}</div>
                  <div className="mt-1 text-sm text-muted">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Prêt à toucher tes premières primes ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Un message Insta. Pas de mail, pas de formulaire, pas d'engagement.
            Si ça ne te convient pas, tu pars.
          </p>
          <div className="mt-10">
            <CTAInsta
              label="J'envoie un DM"
              trackingLabel="footer-cta"
              className="text-base"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
