import { CTAInsta } from "@/components/CTAInsta";
import { Section, SectionTitle } from "@/components/Section";

export const metadata = {
  title: "FAQ",
  description: "Toutes les réponses aux questions fréquentes sur Affileo.",
};

const FAQS = [
  {
    cat: "Pour les filleuls",
    items: [
      {
        q: "C'est vraiment gratuit ?",
        a: "Oui, 100%. Les plateformes (banques, exchanges) nous paient une commission quand tu valides ton compte. Tu touches l'intégralité de la prime promise par la plateforme. On ne te facture jamais.",
      },
      {
        q: "Combien je peux gagner réellement ?",
        a: "Sur une seule offre : 30 à 80€ selon la plateforme. En cumulant 3 offres bien séquencées (notre spécialité), tu peux viser 200 à 400€. Quelques filleuls très investis montent à 500-600€ en cumulant 5 offres.",
      },
      {
        q: "Quelles sont les conditions ?",
        a: "Être majeur, résident fiscal français, avoir une pièce d'identité valide et un RIB de compte courant français. Pour certaines offres, tu dois pouvoir bloquer 50 à 300€ pendant quelques jours seulement (le temps de valider la prime).",
      },
      {
        q: "Et si je bloque pendant l'inscription ?",
        a: "Tu nous DM. On débloque. C'est exactement pour ça qu'on existe : la majorité des gens abandonnent au milieu et perdent la prime. Avec nous, tu vas au bout.",
      },
      {
        q: "Vous me demandez mes mots de passe ou mes infos bancaires ?",
        a: "Jamais. On ne te demande JAMAIS de mot de passe, de code SMS, de numéro de carte ou de RIB complet. Tout passe par les plateformes officielles. Si quelqu'un te demande ça en se faisant passer pour Affileo, c'est une arnaque.",
      },
    ],
  },
  {
    cat: "Pour les influenceurs",
    items: [
      {
        q: "Quels créateurs vous cherchez ?",
        a: "Micro-influenceurs 10-50k followers, audience 18-25 ans, niches argent/finance/lifestyle/étudiants/débrouille. Plus tard on ouvrira aux mid-tier (50-200k) une fois la machine rodée.",
      },
      {
        q: "Combien je touche par lead ?",
        a: "C'est un revshare 30% de la commission qu'on touche. Sur une prime moyenne de 80€ qu'on monétise à 60€ commission plateforme, tu touches environ 18€ par lead converti.",
      },
      {
        q: "Vous m'imposez les contenus ?",
        a: "Non. On te brief avec des angles validés, mais tu fais à ta sauce. On vérifie juste que les claims sont conformes (pas de promesse mensongère, mention obligatoire #ad ou #partenariat).",
      },
      {
        q: "Y a-t-il une exclusivité ?",
        a: "Non. Tu peux faire d'autres collabs en parallèle. On demande juste que tu ne pushes pas les mêmes offres pour un concurrent direct pendant la durée de notre collab.",
      },
    ],
  },
  {
    cat: "Légal & sécurité",
    items: [
      {
        q: "Affileo c'est légal ?",
        a: "Oui. On agit comme apporteur d'affaires dans le cadre des programmes de parrainage officiels des banques et exchanges (gérés via Impact, Awin ou en direct). Toutes les transactions sont tracées et déclarées.",
      },
      {
        q: "Et fiscalement, je dois déclarer mes primes ?",
        a: "Les primes de parrainage sont généralement considérées comme des cadeaux commerciaux, non imposables en dessous d'un certain seuil. Au-delà, ça peut entrer dans les BNC. On te conseille de te renseigner auprès d'un expert si tu cumules de gros montants.",
      },
      {
        q: "Vous gardez mes données ?",
        a: "On garde uniquement ton pseudo Insta et le suivi de tes conversions, pour pouvoir te recontacter sur de futures offres. Tu peux demander la suppression à tout moment via DM ou email.",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Section>
        <SectionTitle
          eyebrow="FAQ"
          title="Toutes les questions qu'on nous pose"
          subtitle="Si la tienne n'est pas dans la liste, envoie un DM. On te répond rapidement."
        />

        <div className="mt-16 space-y-12">
          {FAQS.map((cat) => (
            <div key={cat.cat}>
              <h2 className="text-xl font-semibold text-accent">{cat.cat}</h2>
              <div className="mt-6 space-y-4">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-border bg-surface p-6 transition-colors open:border-accent/40"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink">
                      {item.q}
                      <span className="text-2xl text-muted transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAInsta
            label="Question pas dans la FAQ ? DM"
            trackingLabel="faq-bottom"
          />
        </div>
      </Section>
    </>
  );
}
