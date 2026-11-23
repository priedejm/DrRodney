import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Monogram } from "./Monogram";
import { useContent } from "@/cms/SiteData";
import { safeHref } from "@/cms/SmartLink";
import { telHref } from "@/cms/Rich";

const EXPLORE = [
  { to: "/about", label: "About" },
  { to: "/speaking", label: "Speaking" },
  { to: "/books", label: "Books" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const { footer, contact } = useContent().site;
  const ELSEWHERE = footer.links.map((l) => ({ href: safeHref(l.url), label: l.label }));
  return (
    <footer className="surface-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Monogram size={44} withWordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              {footer.blurb}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.24em]"
              style={{ borderColor: "var(--forest)", color: "#9DBFA6" }}
            >
              {footer.ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div>
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--gold)" }}
            >
              {footer.exploreHeading}
            </p>
            <ul className="space-y-3 text-sm">
              {EXPLORE.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/75 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--gold)" }}
            >
              {footer.elsewhereHeading}
            </p>
            <ul className="space-y-3 text-sm">
              {ELSEWHERE.map((e) => (
                <li key={e.href + e.label}>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/75 hover:text-white"
                  >
                    {e.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--gold)" }}
            >
              {footer.contactHeading}
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email.trim()}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a href={telHref(contact.phone)} className="hover:text-white">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.location && <li>{contact.location}</li>}
            </ul>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-3 border-t pt-6 text-[11px] uppercase tracking-[0.22em] text-white/45 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(201,169,110,0.18)" }}
        >
          <span>© {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.</span>
          <span>{footer.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
