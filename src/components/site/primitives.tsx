import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode, AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Section({
  children,
  className,
  surface,
  bleed = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  surface?: "ink" | "navy" | "forest" | "cream" | "white";
  bleed?: boolean;
  id?: string;
}) {
  const surfaceClass = surface
    ? surface === "navy"
      ? "surface-ink"
      : `surface-${surface}`
    : "";
  return (
    <section id={id} className={cn(surfaceClass, className)}>
      <div className={cn(bleed ? "" : "mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10")}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "gold" }) {
  return (
    <p
      className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em]"
      style={tone === "gold" ? { color: "var(--gold)" } : undefined}
    >
      {tone === "default" ? <span className="text-current opacity-70">{children}</span> : children}
    </p>
  );
}

export function H1({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        "font-serif font-light leading-[1.02] tracking-[-0.015em] text-[clamp(2.8rem,6vw,5.5rem)]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-serif font-light leading-[1.08] tracking-[-0.012em] text-[clamp(2.1rem,4.2vw,3.8rem)]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn("font-serif text-2xl leading-snug md:text-3xl", className)}>{children}</h3>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg font-light leading-relaxed md:text-xl", className)}>{children}</p>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "space-y-5 text-base leading-[1.85] text-foreground/85 md:text-[17px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

type CTAVariant = "forest" | "forest-outline" | "ink" | "white-outline" | "ink-outline";

const CTA_STYLES: Record<CTAVariant, string> = {
  forest: "bg-[var(--forest)] text-white border border-[var(--forest)] hover:opacity-90",
  "forest-outline":
    "bg-transparent text-[var(--forest)] border border-[var(--forest)] hover:bg-[var(--forest)] hover:text-white",
  ink: "bg-[var(--ink)] text-white border border-[var(--ink)] hover:opacity-90",
  "ink-outline":
    "bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
  "white-outline":
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-[var(--ink)]",
};

const CTA_BASE =
  "inline-flex items-center justify-center gap-2 rounded-none px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.22em] font-medium transition-all";

export function CTAButton({
  to,
  href,
  variant = "ink",
  children,
  external,
  withArrow = false,
  ...rest
}: {
  to?: string;
  href?: string;
  variant?: CTAVariant;
  children: ReactNode;
  external?: boolean;
  withArrow?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = cn(CTA_BASE, CTA_STYLES[variant]);
  const inner = (
    <>
      {children}
      {withArrow && <ArrowUpRight className="h-3.5 w-3.5" />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {inner}
    </a>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <span
      className={cn("block h-px w-16", className)}
      style={{ backgroundColor: "var(--gold)" }}
    />
  );
}

export function Rule() {
  return <span className="block h-px w-12 bg-current opacity-30" />;
}
