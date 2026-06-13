type Props = {
  size?: number;
  withText?: boolean;
  className?: string;
};

/**
 * Logo Affileo — SVG vectoriel inline (scalable, ne pixelise jamais).
 *
 * Le "A" est composé de quatre éléments géométriques inspirés du logo perso :
 *  1. Une goutte arrondie en haut (le sommet du A)
 *  2. Trois cercles blancs centrés (la barre transverse stylisée)
 *  3. Deux jambes obliques en bas (les pieds du A)
 *
 * Tout est dans un fond carré arrondi bleu marine.
 * Le texte "ffileo" est juxtaposé pour former le mot "Affileo" en lecture.
 *
 * Pour modifier les couleurs, éditer les `fill=` ci-dessous.
 */
export function Logo({ size = 40, withText = true, className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Affileo"
        style={{ display: "block", flexShrink: 0 }}
      >
        {/* Fond carré arrondi bleu marine */}
        <rect width="120" height="120" rx="26" fill="#0F1A3A" />

        {/* Goutte en haut (sommet du A) — forme arrondie qui s'élargit vers la base */}
        <path
          d="M60 18
             C 73 18 84 27 86 41
             L 86 50
             C 86 56 81 60 75 60
             L 45 60
             C 39 60 34 56 34 50
             L 34 41
             C 36 27 47 18 60 18 Z"
          fill="white"
        />

        {/* 3 cercles au centre — disposition triangulaire vers le bas */}
        <circle cx="46" cy="73" r="5.5" fill="white" />
        <circle cx="60" cy="80" r="5.5" fill="white" />
        <circle cx="74" cy="73" r="5.5" fill="white" />

        {/* Deux jambes obliques (les pieds du A) — pillules inclinées */}
        <path
          d="M30 104
             L 38 88
             C 39.5 85 43 84 46 85.5
             L 48 86.5
             C 51 88 52 92 50.5 95
             L 42.5 110
             C 41 113 37.5 114 34.5 112.5
             L 32.5 111.5
             C 29.5 110 28.5 106.5 30 104 Z"
          fill="white"
        />
        <path
          d="M90 104
             L 82 88
             C 80.5 85 77 84 74 85.5
             L 72 86.5
             C 69 88 68 92 69.5 95
             L 77.5 110
             C 79 113 82.5 114 85.5 112.5
             L 87.5 111.5
             C 90.5 110 91.5 106.5 90 104 Z"
          fill="white"
        />
      </svg>

      {withText && (
        <span
          className="font-semibold tracking-tight text-ink leading-none"
          style={{ fontSize: size * 0.62 }}
        >
          ffileo
        </span>
      )}
    </div>
  );
}
