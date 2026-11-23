import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { CTAButton, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { useContent } from "@/cms/SiteData";
import { Rich } from "@/cms/Rich";
import { safeHref } from "@/cms/SmartLink";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "The Bespoke Life - A Book by Dr. Rodney Andrews" },
      {
        name: "description",
        content:
          "The Bespoke Life: Design Your Path, Purpose, and Prosperity - a personalized approach to growth by Dr. Rodney Andrews.",
      },
      { property: "og:title", content: "The Bespoke Life - Dr. Rodney Andrews" },
      {
        property: "og:description",
        content:
          "A personalized approach to growth - built on honest self-examination, not generic self-help.",
      },
    ],
  }),
  component: BooksPage,
});

const num = (i: number) => String(i + 1).padStart(2, "0");

function BooksPage() {
  const c = useContent().books;
  const buyUrl = c.purchase.buyUrl.trim();
  const buyHref = buyUrl ? safeHref(buyUrl) : "";
  const buyExternal = /^https?:\/\//i.test(buyHref);

  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <Section surface="navy">
        <div className="max-w-3xl">
          <div>
            <Eyebrow tone="gold">{c.hero.eyebrow}</Eyebrow>
            <h1 className="font-serif font-light leading-[0.95] tracking-[-0.02em] text-white text-[clamp(3rem,7vw,6rem)]">
              {c.hero.titleLine1}
              <span className="block italic font-normal">{c.hero.titleLine2}</span>
            </h1>
            <p className="mt-8 font-serif text-2xl italic font-light text-white/85 md:text-3xl">
              {c.hero.subtitle}
            </p>
            <GoldRule className="mt-10" />
            <p className="mt-6 max-w-lg text-[15px] leading-[1.85] text-white/75">{c.hero.body}</p>
            {c.hero.ctaLabel && (
              <div className="mt-10 flex flex-wrap gap-3">
                <CTAButton
                  variant="forest"
                  href={buyHref || "#purchase"}
                  external={buyExternal}
                  withArrow
                >
                  {c.hero.ctaLabel}
                </CTAButton>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* CONCEPTS */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">{c.premise.eyebrow}</Eyebrow>
            <H2 className="text-white">
              <Rich text={c.premise.title} />
            </H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {c.premise.items.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="flex flex-col h-full bg-[var(--ink)] p-10 md:p-12">
                <p className="font-serif text-sm tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                  {num(i)}
                </p>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-white md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-6 text-[15px] leading-[1.8] text-white/70">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MOVEMENTS */}
      <Section surface="cream">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">{c.framework.eyebrow}</Eyebrow>
            <H2>
              <Rich text={c.framework.title} />
            </H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {c.framework.items.map((m, i) => (
            <Reveal key={i} delay={i * 100}>
              <article
                className="overflow-hidden border bg-white h-full"
                style={{ borderColor: "rgba(44,44,44,0.12)" }}
              >
                <div className="p-8 md:p-10">
                  {m.label && (
                    <p
                      className="font-serif text-xs uppercase tracking-[0.3em]"
                      style={{ color: "var(--gold)" }}
                    >
                      {m.label}
                    </p>
                  )}
                  <H3 className="mt-4 text-[var(--ink)]">{m.title}</H3>
                  <p className="mt-4 text-[15px] leading-[1.85] text-[var(--charcoal)]/80">{m.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PURCHASE */}
      <Section surface="cream" id="purchase">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="gold">{c.purchase.eyebrow}</Eyebrow>
            <H2>
              <Rich text={c.purchase.title} />
            </H2>
          </div>
        </Reveal>
        <Reveal>
          <article
            className="mx-auto mt-16 max-w-xl border bg-white p-8 md:p-10"
            style={{ borderColor: "rgba(44,44,44,0.12)" }}
          >
            <H3 className="text-[var(--ink)]">{c.purchase.cardTitle}</H3>
            {c.purchase.cardSubtitle && (
              <p className="mt-2 font-serif italic text-[var(--charcoal)]/70">{c.purchase.cardSubtitle}</p>
            )}
            <p className="mt-5 text-[15px] leading-[1.75] text-[var(--charcoal)]/80">{c.purchase.cardBody}</p>
            {buyHref && c.purchase.buyLabel && (
              <div className="mt-8">
                <CTAButton variant="forest" href={buyHref} external={buyExternal} withArrow>
                  {c.purchase.buyLabel}
                </CTAButton>
              </div>
            )}
          </article>
        </Reveal>
      </Section>
    </>
  );
}
