# Affileo v3 — Mode d'emploi

Ce dossier est la **v3 du site Affileo**, isolée de la v2 pour itérer proprement sans casser le live.

## Comment ouvrir / lancer

```bash
cd "/Users/romaincoutou/Documents/Claude/Projects/Affileo v3"
npm install
npm run dev
```

(`node_modules` a été volontairement exclu de la copie pour gagner de l'espace. `npm install` recrée tout en ~30s.)

## Modifications par rapport à la v2

### Contenu
- Email contact → `contact@affileo.fr`
- URL site → `https://affileo.fr`
- Handle Insta → `affileo.io` (lien direct : `https://ig.me/m/affileo.io?ref=site_cta`)
- Stats hero : **+700** filleuls / **+50k €** primes / **10 min** réponse
- Revshare influenceurs : **30%**
- Conversion : **x6**
- Nouvelle offre **BoursoBank en première position** (80€ filleul, carte virtuelle 3 mois, prime selon dépôt)
- Ordre des offres : BoursoBank → Hello Bank → Robinhood → Fortuneo → Kraken → OKX
- Dashboard mockup du hero : BoursoBank en premier
- Mentions légales : nom de Romain supprimé, "Paris, France" comme adresse, section "Marques tierces" ajoutée

### Code
- **Logo Affileo** : SVG vectoriel inline propre (`src/components/Logo.tsx`). Scalable, ne pixelise jamais, ne pèse rien. Design inspiré de ton logo : fond bleu marine + goutte blanche en haut + 3 cercles au centre + 2 jambes obliques en bas. **Aucun fichier à uploader.**
- **PlatformLogo** : version v2 simple (cercles colorés avec initiales générées par code). **Aucun fichier à uploader.**

→ Tu n'as plus aucune action de manipulation de fichier image à faire.

## Ce qu'il te reste à faire — 1 action

### Acheter le domaine `affileo.fr`

Ionos 1€ première année (puis ~15-20€/an au renouvellement).
- À la commande : **DÉCOCHE** Email pro, Hébergement Web, SSL premium. Tu n'en as besoin d'aucun.
- Désactive le renouvellement auto dans ton compte si tu veux re-décider l'an prochain.
- Après achat : Vercel → Settings → Domains → Add `affileo.fr` → Vercel te donne les DNS à coller chez Ionos.

### (Optionnel) Ref param ManyChat

Le lien CTA insère `?ref=site_cta`. Tu peux configurer ManyChat → Settings → Instagram → Refs → ajouter `site_cta` associé à un flow Welcome. Comme ça les visiteurs du site reçoivent un message auto dès qu'ils arrivent dans la DM. Si tu skip, le lien marche quand même (ils arrivent juste sans message d'accueil).

## Déploiement

**Option recommandée** — push dans un nouveau repo `Affileo-V3` (garde la v2 en archive en ligne) :

1. Crée un repo `Affileo-V3` sur github.com/Romscout
2. Dans le terminal :
```bash
cd "/Users/romaincoutou/Documents/Claude/Projects/Affileo v3"
git init
git remote add origin https://github.com/Romscout/Affileo-V3.git
git add .
git commit -m "Initial v3"
git branch -M main
git push -u origin main
```
3. Vercel → Add New Project → importe `Affileo-V3` → déploie
4. Vercel → Settings → Domains → ajoute `affileo.fr` quand il sera acheté

## Ménage à faire côté Finder

Dans ton dossier `~/Documents/Claude/Projects/` tu peux supprimer manuellement :
- `Affileo site v3` (dossier corrompu lors d'une 1ère tentative de copy)
- `affileo-v3` (dossier vide avec juste un `.git/` — pas utile)

Garde :
- `Affileo` → contient brief stratégique, ops, bot prompt, etc. (utile en archive)
- `Affileo site v2` → version live actuelle, garde tant que tu n'as pas validé la v3
- `Affileo v3` → la nouvelle version, c'est ici qu'on bosse maintenant
