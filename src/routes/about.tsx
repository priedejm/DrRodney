import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { CTAButton, H1, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { useContent, useImage, resolveImage } from "@/cms/SiteData";
import { Rich } from "@/cms/Rich";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Dr. Rodney Andrews, DNP" },
      {
        name: "description",
        content:
          "Dr. Rodney Andrews, DNP, AGNP-BC, PMHNP - from rural North Carolina to founder of Charleston Medicine and Behavioral Health.",
      },
      { property: "og:title", content: "About Dr. Rodney Andrews" },
      {
        property: "og:description",
        content:
          "The story behind the advanced provider, entrepreneur, author, and speaker - vision, discipline, and a relentless pursuit of excellence.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const c = useContent().about;
  const heroPhoto = useImage("about-hero-photo");
  const credentials = c.credentials.filter((x) => x.trim());

  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <Section surface="navy">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Eyebrow tone="gold">{c.hero.eyebrow}</Eyebrow>
            <H1 className="text-white">
              {c.hero.titleLine1}
              <span className="block italic font-normal">{c.hero.titleLine2}</span>
            </H1>
            <div className="mt-10 max-w-lg">
              <GoldRule />
              <p className="mt-6 text-[0.78rem] uppercase tracking-[0.2em] leading-[1.8] text-white/70">
                {c.hero.credentials}
              </p>
            </div>
            <p className="mt-10 max-w-lg text-[15px] leading-[1.85] text-white/75">{c.hero.body}</p>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-[var(--charcoal)]">
            <img src={heroPhoto} alt="Dr. Rodney Andrews" className="h-full w-full object-cover grayscale" />
          </div>
        </div>
      </Section>

      {/* STORY */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="gold">{c.story.eyebrow}</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] font-light leading-tight">
              <Rich text={c.story.title} />
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-3xl space-y-12">
          {c.story.paragraphs.map((p, i) => {
            const src = resolveImage(p.photo);
            return (
              <Reveal key={i}>
                <div>
                  {p.text && (
                    <p className="font-serif text-[1.2rem] leading-[1.8] text-[var(--charcoal)] md:text-[1.3rem]">
                      {p.text}
                    </p>
                  )}
                  {src && (
                    <figure className={p.text ? "mt-14" : undefined}>
                      <div className="aspect-[16/10] overflow-hidden bg-[var(--ink)]">
                        <img
                          src={src}
                          alt={p.caption || "Dr. Rodney Andrews"}
                          className={`h-full w-full grayscale ${p.showWholePhoto ? "object-contain" : "object-cover"}`}
                          loading="lazy"
                        />
                      </div>
                      {p.caption && (
                        <figcaption className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[var(--charcoal)]/55">
                          {p.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CREDENTIALS BAR */}
      {credentials.length > 0 && (
        <section className="surface-ink">
          <Reveal>
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center text-[10px] uppercase tracking-[0.3em] text-white/80">
                {credentials.map((cr, i) => (
                  <li key={i} className="flex items-center gap-10">
                    <span>{cr}</span>
                    {i < credentials.length - 1 && (
                      <span aria-hidden style={{ color: "var(--gold)" }} className="hidden md:inline">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      )}

      {/* CLOSING CTA */}
      <Section surface="forest">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <Eyebrow tone="gold">{c.closing.eyebrow}</Eyebrow>
            <H3 className="font-serif text-3xl leading-[1.3] md:text-4xl">
              <Rich text={c.closing.title} />
            </H3>
            <p className="mt-8 text-[15px] leading-[1.85] text-white/85">{c.closing.body}</p>
            <div className="mt-10">
              <CTAButton variant="white-outline" to="/contact" withArrow>
                {c.closing.ctaLabel}
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
