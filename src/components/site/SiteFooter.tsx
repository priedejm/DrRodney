import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook, ArrowUpRight } from "lucide-react";
import { Monogram } from "./Monogram";

const EXPLORE = [
  { to: "/about", label: "About" },
  { to: "/speaking", label: "Speaking" },
  { to: "/books", label: "Books" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contact", label: "Contact" },
] as const;

const ELSEWHERE = [
  { href: "https://CharlestonMedicine.com", label: "Charleston Medicine" },
  { href: "https://RodneyAndrewsLive.com", label: "Rodney Andrews Live" },
];

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Monogram size={44} withWordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              Helping people live with greater clarity, purpose, and performance.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.24em]"
              style={{ borderColor: "var(--forest)", color: "#9DBFA6" }}
            >
              Inquire About Speaking
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div>
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "var(--gold)" }}
            >
              Explore
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
              Elsewhere
            </p>
            <ul className="space-y-3 text-sm">
              {ELSEWHERE.map((e) => (
                <li key={e.href}>
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
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a href="mailto:info@charlestonmedicine.com" className="hover:text-white">
                  info@charlestonmedicine.com
                </a>
              </li>
              <li>
                <a href="tel:8439138558" className="hover:text-white">
                  843-913-8558
                </a>
              </li>
              <li>Charleston, South Carolina</li>
            </ul>
            <p className="mt-6 text-sm text-white/50">
              [Social media platforms and handles pending client approval]
            </p>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-3 border-t pt-6 text-[11px] uppercase tracking-[0.22em] text-white/45 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(201,169,110,0.18)" }}
        >
          <span>© {new Date().getFullYear()} Dr. Rodney Andrews. All rights reserved.</span>
          <span>Charleston, South Carolina</span>
        </div>
      </div>
    </footer>
  );
}
