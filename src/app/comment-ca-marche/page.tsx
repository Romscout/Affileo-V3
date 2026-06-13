import { CTAInsta } from "@/components/CTAInsta";
import { Section, SectionTitle } from "@/components/Section";

export const metadata = {
  title: "Comment ça marche",
  description:
    "Le parcours Affileo en détail : du DM Instagram à la prime versée sur ton compte.",
};

const ETAPES = [
  {
    n: "01",
    title: "Tu nous DM sur Instagram",
    text: "Pas de formulaire, pas de mail. Un message sur @affileo et on te répond rapidement. On t'aide à identifier la première offre la plus rentable selon ta situation.",
  },
  {
    n: "02",
    title: "On te qualifie en 2 minutes",
    text: "Quelques questions rapides pour s'assurer que tu coches les conditions de base (majorité, résidence FR, pièce d'identité). Si une offre ne te convient pas, on t'en propose une autre.",
  },
  {
    n: "03",
    title: "On t'envoie le guide pas à pas",
    text: "Captures d'écran, lien d'inscription tracké, ordre exact des étapes. Si tu bloques quelque part, tu nous renvoies un message et on débloque sur le moment.",
  },
  {
    n: "04",
    title: "Tu valides les conditions de la prime",
    text: "Chaque programme a ses critères (KYC, premier paiement carte, dépôt minimum selon les cas). On t'accompagne jusqu'à validation pour que ta prime soit garantie.",
  },
  {
    n: "05",
    title: "Ta prime arrive sur ton compte",
    text: "Tu reçois la prime directement sur le compte de la plateforme. On te recontacte pour t'aider à enchaîner sur l'offre suivante (ceux qui cumulent 3 offres font les plus gros tickets).",
  },
];

export default function Page() {
  return (
    <>
      <Section>
        <SectionTitle
          eyebrow="Le parcours"
          title="Comment Affileo te fait toucher 250 à 550€ en parrainage"
          subtitle="On a démonté chaque étape pour qu'il n'y ait plus de friction. Pas d'arnaque, pas de coût caché : on est rémunérés par les plateformes, pas par toi."
        />

        <div className="mt-16 space-y-6">
          {ETAPES.map((etape) => (
            <div
              key={etape.n}
              className="grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[120px_1fr] md:p-8"
            >
              <div className="text-5xl font-mono text-accent md:text-6xl">
                {etape.n}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink md:text-2xl">
                  {etape.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {etape.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionTitle
          eyebrow="Bon à savoir"
          title="Les questions qu'on nous pose tout le temps"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              q: "C'est gratuit pour moi ?",
              a: "Oui, 100% gratuit. On est rémunérés par les plateformes via leurs programmes de parrainage officiels. Tu touches la prime intégrale, on touche notre commission séparément. Aucun centime ne sort de ta poche.",
            },
            {
              q: "C'est légal ?",
              a: "Totalement. Le parrainage est un mécanisme de marketing officiel des banques et exchanges. On agit comme apporteur d'affaires. Tu signes un contrat client classique avec chaque plateforme.",
            },
            {
              q: "Combien ça me prend de temps ?",
              a: "Compte 30 à 60 minutes par offre, à faire entre deux trajets ou pendant une pause. On te guide en temps réel donc tu n'as pas à chercher où cliquer.",
            },
            {
              q: "Vous voyez mes données bancaires ?",
              a: "Non. On n'a accès à aucun compte. Tout passe par les plateformes elles-mêmes. On te guide, tu cliques, tu remplis. On voit juste si tu as validé ou pas (via le tracking officiel).",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAInsta
            label="OK, je tente"
            trackingLabel="how-it-works-bottom"
            className="text-base"
          />
        </div>
      </Section>
    </>
  );
}
