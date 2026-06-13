// Logo plateforme — cercle coloré avec initiales (version simple v2).
// Pas de fichier image à uploader, tout est généré côté code.

type Brand =
  | "boursobank"
  | "hellobank"
  | "fortuneo"
  | "robinhood"
  | "kraken"
  | "okx"
  | "bitpanda";

const BRAND_DATA: Record<Brand, { bg: string; fg: string; label: string }> = {
  boursobank: { bg: "#FF338A", fg: "#FFFFFF", label: "B" },
  hellobank:  { bg: "#FE5000", fg: "#FFFFFF", label: "H!" },
  fortuneo:   { bg: "#00B5D4", fg: "#FFFFFF", label: "F" },
  robinhood:  { bg: "#00C805", fg: "#FFFFFF", label: "R" },
  kraken:     { bg: "#5848D6", fg: "#FFFFFF", label: "K" },
  okx:        { bg: "#1A1A1A", fg: "#FFFFFF", label: "OK" },
  bitpanda:   { bg: "#1064EA", fg: "#FFFFFF", label: "B" },
};

type Props = {
  brand: string;
  size?: number;
  className?: string;
};

export function PlatformLogo({ brand, size = 36, className = "" }: Props) {
  const data = BRAND_DATA[brand as Brand];
  if (!data) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-border text-xs font-bold text-ink ${className}`}
        style={{ width: size, height: size }}
      >
        ?
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold ${className}`}
      style={{
        width: size,
        height: size,
        background: data.bg,
        color: data.fg,
        fontSize: size * 0.4,
        letterSpacing: "-0.03em",
      }}
    >
      {data.label}
    </div>
  );
}
