import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";
import { useContent } from "@/cms/SiteData";

export function Monogram({
  size = 36,
  className,
  withWordmark = false,
}: {
  size?: number;
  className?: string;
  withWordmark?: boolean;
}) {
  const { brand } = useContent().site;
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-3", className)} aria-label={`${brand.wordmark} - Home`}>
      <span
        className="inline-flex items-center justify-center border font-serif transition-colors group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]"
        style={{
          width: size,
          height: size,
          borderColor: "var(--gold)",
          color: "var(--gold)",
          fontSize: size * 0.36,
          letterSpacing: "0.04em",
        }}
        aria-hidden
      >
        {brand.monogram}
      </span>
      {withWordmark && (
        <span className="hidden font-serif text-[0.78rem] uppercase tracking-[0.22em] text-white transition-colors group-hover:text-[var(--gold)] sm:inline">
          {brand.wordmark}
        </span>
      )}
    </Link>
  );
}
