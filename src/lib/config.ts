// Configuration centrale du site.
// Modifier les valeurs ici met à jour le site partout.

export const SITE_CONFIG = {
  name: "Affileo",
  description:
    "Empoche jusqu'à 550€ en parrainage banque & crypto avec Affileo. Parcours snipé, conditions préférentielles, on t'accompagne en DM Insta.",
  url: "https://affileo.fr",
  email: "contact@affileo.fr",
  // Handle Insta HARDCODÉ pour éviter tout override accidentel via env var.
  instagramHandle: "affileo.io",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

// Lien direct vers la messagerie Insta avec ref param.
// `?ref=site_cta` permet à ManyChat de déclencher un message d'accueil automatique
// (à configurer côté ManyChat → Settings → Refs → ajouter "site_cta" → flow Welcome).
export const INSTAGRAM_DM_URL = `https://ig.me/m/${SITE_CONFIG.instagramHandle}?ref=site_cta`;

export const NAV_LINKS = [
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/offres", label: "Offres" },
  { href: "/influenceurs", label: "Influenceurs" },
  { href: "/faq", label: "FAQ" },
];

export const SOCIAL_PROOF = {
  filleulsAides: "+700",
  primesGenerees: "+50k €",
  reactivite: "10 min",
};
