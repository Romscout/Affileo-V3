# Affileo — Site

Site Next.js 14 + Tailwind. Déploiement Vercel.

## Lancer en local (5 minutes)

Pré-requis : Node.js 18+ installé ([nodejs.org](https://nodejs.org)).

```bash
cd site
npm install
cp .env.example .env.local
# Édite .env.local pour mettre tes valeurs (vide au début c'est OK)
npm run dev
```

Le site tourne sur http://localhost:3000

## Déployer sur Vercel (10 minutes, gratuit)

1. Push le code sur un repo GitHub (privé OK).
2. Va sur [vercel.com](https://vercel.com) → "Add New Project" → importe le repo.
3. **Root Directory** : `site` (important, sinon Vercel ne trouvera pas le projet).
4. **Framework Preset** : Next.js (détecté automatiquement).
5. Dans **Environment Variables**, ajoute les valeurs de `.env.example` :
   - `NEXT_PUBLIC_META_PIXEL_ID` = (ton ID Meta Pixel, voir `ops/setup-checklist.md`)
   - `NEXT_PUBLIC_INSTAGRAM_HANDLE` = `affileo` (ou ton handle)
6. Clique "Deploy".

Au bout de 60 secondes le site est en ligne sur `affileo-site.vercel.app`.

## Brancher le domaine custom

1. Achète `affileo.io` ou `affileo.fr` chez OVH ou Namecheap (~10€/an).
2. Dans Vercel → Settings → Domains → Add `affileo.io`.
3. Suis les instructions DNS (Vercel te donne les enregistrements à mettre chez ton registrar).
4. SSL automatique en quelques minutes.

## Structure du code

```
site/
├── src/
│   ├── app/                          # Pages (Next.js App Router)
│   │   ├── layout.tsx                # Layout racine (Navbar, Footer, MetaPixel)
│   │   ├── page.tsx                  # Accueil (hero, dashboards, offres, CTA)
│   │   ├── globals.css               # Styles globaux + gradient bleu
│   │   ├── comment-ca-marche/page.tsx
│   │   ├── offres/page.tsx
│   │   ├── influenceurs/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   └── mentions-legales/page.tsx
│   ├── components/                   # Composants réutilisables
│   │   ├── Logo.tsx                  # Logo Affileo SVG inline
│   │   ├── PlatformLogo.tsx          # Logos plateformes en cercles colorés
│   │   ├── DashboardMockup.tsx       # Mockups de comptes pour preuves visuelles
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CTAInsta.tsx              # Le bouton qui redirige vers DM Insta
│   │   ├── MetaPixel.tsx             # Pixel Meta + helper trackEvent()
│   │   ├── OffreCard.tsx
│   │   └── Section.tsx
│   └── lib/
│       ├── config.ts                 # Config centrale (handle Insta, etc.)
│       └── offres.ts                 # Catalogue des offres
├── public/                           # Assets statiques (logos, images)
├── tailwind.config.ts                # Theme couleurs Affileo (palette bleu)
├── next.config.mjs
├── package.json
└── .env.example
```

## Mettre à jour les offres

Édite `src/lib/offres.ts` — ajoute/retire des entrées dans le tableau `OFFRES`. Les pages sont régénérées au build suivant.

## Remplacer les mockups dashboards par de vraies captures

Dans `src/app/page.tsx`, remplace les `<DashboardMockup />` par des `<img src="/dashboards/hellobank.png" />` (mettre tes captures dans `public/dashboards/`).

## Tracking et analytics

- **Meta Pixel** : tracke automatiquement les `PageView` + l'event custom `ClickedInstaCTA` à chaque clic sur un bouton Insta. Visible dans Meta Events Manager.
- **UTM** : on peut ajouter `?utm_source=tiktok&utm_campaign=NOM_INFLU` à n'importe quelle URL et c'est pris en compte par Meta Pixel automatiquement.

## Itérer

Pour les modifs ponctuelles (textes, nouvelles offres, ajout de pages), édite directement les fichiers et push sur GitHub. Vercel redeploie automatiquement.

Pour les évolutions plus lourdes (nouvelles features), recommandé d'utiliser **Claude Code en CLI** (10× moins cher en tokens que Cowork) :
```bash
npm install -g @anthropic-ai/claude-code
cd /Users/romaincoutou/Documents/Claude/Projects/Affineo
claude
```
