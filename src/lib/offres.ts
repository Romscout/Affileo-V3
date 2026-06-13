// Catalogue des offres de parrainage.
// À mettre à jour dès qu'une nouvelle offre est validée.
// IMPORTANT : ne pas afficher de délais en jours sur le site (frein commercial).

export type Offre = {
  id: string;
  marque: string;
  categorie: "banque" | "crypto" | "courtier" | "neobanque";
  prime: number;            // ce que touche le filleul
  brand: string;            // identifiant pour le composant PlatformLogo
  description: string;
  highlights: string[];     // 2-3 points forts (pas de mention délai)
  status: "active" | "bientot" | "pause";
};

export const OFFRES: Offre[] = [
  {
    id: "boursobank",
    marque: "BoursoBank",
    categorie: "banque",
    prime: 80,
    brand: "boursobank",
    description:
      "La banque en ligne référence en France. Prime versée directement sur ton compte selon ton dépôt initial.",
    highlights: [
      "Prime versée direct sur le compte",
      "Carte virtuelle dispo immédiatement",
      "Une des banques les plus solides du marché",
    ],
    status: "active",
  },
  {
    id: "hello-bank",
    marque: "Hello Bank!",
    categorie: "banque",
    prime: 80,
    brand: "hellobank",
    description:
      "Banque en ligne BNP Paribas. Aucune condition de dépôt. Le ticket d'entrée le plus easy.",
    highlights: [
      "Zéro dépôt requis",
      "Carte gratuite (Hello One)",
      "On gère l'invitation pour toi",
    ],
    status: "active",
  },
  {
    id: "robinhood",
    marque: "Robinhood",
    categorie: "courtier",
    prime: 50,
    brand: "robinhood",
    description:
      "Courtier US débarqué en Europe. Prime versée instantanément après ton premier dépôt.",
    highlights: [
      "Prime versée direct",
      "Dépôt récupérable juste après",
      "App ultra simple",
    ],
    status: "active",
  },
  {
    id: "fortuneo",
    marque: "Fortuneo",
    categorie: "banque",
    prime: 80,
    brand: "fortuneo",
    description:
      "Banque en ligne du Crédit Mutuel Arkéa. Versement de la prime ultra rapide après validation.",
    highlights: [
      "Carte Fosfo gratuite",
      "Cumulable avec Hello Bank",
      "Process rodé étape par étape",
    ],
    status: "active",
  },
  {
    id: "kraken",
    marque: "Kraken",
    categorie: "crypto",
    prime: 30,
    brand: "kraken",
    description:
      "Exchange crypto historique, l'un des plus solides du marché. Programme de parrainage avec rebate sur les frais.",
    highlights: [
      "Plateforme ultra fiable",
      "Bonus en crypto facilement revendable",
      "Idéal pour cumuler après les banques",
    ],
    status: "active",
  },
  {
    id: "okx",
    marque: "OKX",
    categorie: "crypto",
    prime: 80,
    brand: "okx",
    description:
      "Top 3 mondial des exchanges crypto. Prime versée en bitcoin, revendable en 2 clics directement sur la plateforme.",
    highlights: [
      "Prime en BTC liquide",
      "Interface pro mais accessible",
      "Demande un peu de volume crypto",
    ],
    status: "active",
  },
  {
    id: "bitpanda",
    marque: "Bitpanda",
    categorie: "crypto",
    prime: 25,
    brand: "bitpanda",
    description:
      "Plateforme crypto européenne. Bonus en crypto après un premier achat minimal.",
    highlights: [
      "KYC rapide",
      "Idéal pour débuter sur la crypto",
      "Bon complément après les banques",
    ],
    status: "bientot",
  },
];

export const OFFRES_ACTIVES = OFFRES.filter((o) => o.status === "active");
