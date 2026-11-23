import { Link } from "@tanstack/react-router";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import { Monogram } from "./Monogram";
import { useContent } from "@/cms/SiteData";
import { safeHref } from "@/cms/SmartLink";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/speaking", label: "Speaking" },
  { to: "/books", label: "Books" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const header = useContent().site.header;
  const EXTERNAL = header.links.map((l) => ({ href: safeHref(l.url), label: l.label }));

  return (
    <header
      className="surface-ink sticky top-0 z-50 border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Top external strip */}
      <div
        className="hidden border-b lg:block"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-2 text-[11px] tracking-[0.18em] uppercase text-white/55 lg:px-10">
          {EXTERNAL.map((e) => (
            <a
              key={e.href + e.label}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-white"
            >
              {e.label}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5 lg:px-10">
        <Monogram withWordmark />

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-white/65 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.24em] transition-colors lg:inline-flex"
            style={{ borderColor: "var(--forest)", color: "#9DBFA6" }}
          >
            {header.ctaLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center border text-white lg:hidden"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="surface-ink w-full max-w-sm border-l p-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div
                  className="border-b px-6 py-5"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <Monogram withWordmark />
                </div>
                <nav className="flex flex-1 flex-col gap-1 p-6">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="py-3 font-serif text-3xl text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div
                  className="border-t p-6"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-white/50">
                    {header.mobileLinksHeading}
                  </p>
                  <div className="flex flex-col gap-2">
                    {EXTERNAL.map((e) => (
                      <a
                        key={e.href + e.label}
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-white/75 hover:text-white"
                      >
                        {e.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 border px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em]"
                    style={{ borderColor: "var(--forest)", color: "#9DBFA6" }}
                  >
                    {header.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
