import { CTAInsta } from "@/components/CTAInsta";
import { OffreCard } from "@/components/OffreCard";
import { Section, SectionTitle } from "@/components/Section";
import { OFFRES } from "@/lib/offres";

export const metadata = {
  title: "Offres de parrainage",
  description:
    "Catalogue à jour des meilleures offres banque & crypto que nous accompagnons.",
};

export default function Page() {
  const banque = OFFRES.filter((o) => o.categorie === "banque");
  const courtier = OFFRES.filter((o) => o.categorie === "courtier");
  const crypto = OFFRES.filter((o) => o.categorie === "crypto");

  return (
    <>
      <Section>
        <SectionTitle
          eyebrow="Catalogue"
          title="Les offres qu'on accompagne aujourd'hui"
          subtitle="Liste tenue à jour. On retire les offres qui ferment, on ajoute les nouvelles dès qu'on les a testées en interne."
        />
      </Section>

      <Section className="!py-10">
        <h2 className="text-xl font-semibold text-ink">Banques en ligne</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {banque.map((o) => (
            <OffreCard key={o.id} offre={o} />
          ))}
        </div>
      </Section>

      <Section className="!py-10">
        <h2 className="text-xl font-semibold text-ink">Courtiers / Bourse</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courtier.map((o) => (
            <OffreCard key={o.id} offre={o} />
          ))}
        </div>
      </Section>

      <Section className="!py-10">
        <h2 className="text-xl font-semibold text-ink">Crypto</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crypto.map((o) => (
            <OffreCard key={o.id} offre={o} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Tu cumules plusieurs offres ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Le parcours type Hello Bank + Fortuneo + Robinhood = <span className="font-semibold text-ink">210€ minimum</span>. En empilant OKX et Kraken par-dessus, tu vises confortablement les <span className="font-semibold text-ink">320€</span>.
          </p>
          <div className="mt-8">
            <CTAInsta
              label="On me crée le parcours optimal"
              trackingLabel="offres-bottom"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
