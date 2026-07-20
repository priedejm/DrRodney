import { ImageIcon } from "lucide-react";
import { cn } from "../../lib/utils";

type Variant = "hero" | "portrait" | "square" | "wide" | "oval" | "card" | "tall";

const ASPECT: Record<Variant, string> = {
  hero: "aspect-[16/9] md:aspect-[21/9]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
  oval: "aspect-square rounded-full",
  card: "aspect-[4/3]",
  tall: "aspect-[2/3]",
};

export function PhotoPlaceholder({
  label,
  variant = "wide",
  tone = "navy",
  className,
}: {
  label: string;
  variant?: Variant;
  tone?: "navy" | "charcoal" | "forest" | "cream";
  className?: string;
}) {
  const toneClass = {
    navy: "bg-[var(--navy)] text-[var(--cream)]",
    charcoal: "bg-[var(--charcoal)] text-[var(--cream)]",
    forest: "bg-[var(--forest)] text-[var(--cream)]",
    cream: "bg-[var(--cream)] text-[var(--charcoal)] border border-border",
  }[tone];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        ASPECT[variant],
        toneClass,
        variant !== "oval" && "rounded-sm",
        className,
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <ImageIcon className="h-8 w-8 opacity-50" strokeWidth={1.25} />
        <span className="max-w-xs text-[10px] font-medium uppercase tracking-[0.18em] opacity-75 md:text-xs">
          {label}
        </span>
      </div>
    </div>
  );
}
