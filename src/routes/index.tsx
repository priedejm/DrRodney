import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { SpeakingInquiryForm, GeneralInquiryForm } from "../components/site/forms";
import { Reveal } from "../components/site/Reveal";
import { BgVideo } from "../components/site/BgVideo";
import { useContent, useImage, useVideo } from "@/cms/SiteData";
import { Rich } from "@/cms/Rich";
import { SmartLink } from "@/cms/SmartLink";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Rodney Andrews - Speaker · Author · Advanced Provider" },
      {
        name: "description",
        content:
          "The official platform of Dr. Rodney Andrews, DNP - keynote speaker, founder of Charleston Medicine, author of The Bespoke Life, and host of Success & Sanity.",
      },
      { property: "og:title", content: "Dr. Rodney Andrews" },
      {
        property: "og:description",
        content: "Speaker · Author · Advanced Provider · Podcast Host.",
      },
    ],
  }),
  component: HomePage,
});

const num = (i: number) => String(i + 1).padStart(2, "0");

function HomePage() {
  const c = useContent().home;
  const heroVideo = useVideo("home-hero-video");
  const podcastHeadshot = useImage("home-podcast-photo");
  const speakerPhoto = useImage("home-speaker-photo");

  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[var(--ink)]">
        <BgVideo
          src={heroVideo}
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          label="Dr. Rodney Andrews speaking at a conference"
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--ink)]/35" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.35) 0%, rgba(13,13,13,0.18) 40%, rgba(13,13,13,0.55) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
            <div className="max-w-3xl text-white">
              <p
                className="mb-6 text-[10px] uppercase tracking-[0.36em]"
                style={{ color: "var(--gold)" }}
              >
                {c.hero.eyebrow}
              </p>
              <h1 className="font-serif font-light leading-[0.95] tracking-[-0.02em] text-white text-[clamp(3.2rem,8vw,7rem)]">
                {c.hero.titleLine1}
                <span className="block italic font-normal text-[clamp(3.8rem,10vw,8.5rem)]">
                  {c.hero.titleLine2}
                </span>
              </h1>
              <div className="mt-10 max-w-2xl">
                <GoldRule />
                <p className="mt-6 text-[0.78rem] leading-[1.8] uppercase tracking-[0.18em] text-white/70">
                  {c.hero.credentials}
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 pointer-events-auto">
                <CTAButton variant="forest" to="/contact" withArrow>
                  {c.hero.ctaPrimary}
                </CTAButton>
                <CTAButton variant="white-outline" to="/speaking">
                  {c.hero.ctaSecondary}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <p className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] font-light leading-[1.45] tracking-[-0.005em] text-[var(--charcoal)]">
              <Rich text={c.intro.body} />
            </p>
            <div className="mt-12">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-b border-[var(--forest)] pb-1 text-[0.78rem] uppercase tracking-[0.24em] text-[var(--forest)] hover:opacity-80"
              >
                {c.intro.linkLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* WHAT I DO */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow tone="gold">{c.pillars.eyebrow}</Eyebrow>
            <H2 className="text-white">
              <Rich text={c.pillars.title} />
            </H2>
          </div>
        </Reveal>
        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
          {c.pillars.items.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="flex flex-col h-full bg-[var(--ink)] p-10 md:p-12">
                <p
                  className="font-serif text-sm tracking-[0.3em]"
                  style={{ color: "var(--gold)" }}
                >
                  {num(i)}
                </p>
                <h3 className="mt-6 font-serif text-3xl text-white md:text-4xl">{p.title}</h3>
                <p className="mt-6 flex-1 text-[15px] leading-[1.85] text-white/70">{p.body}</p>
                {p.link && p.linkLabel && (
                  <div className="mt-10">
                    <SmartLink
                      to={p.link}
                      className="inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.24em] text-white hover:text-[var(--gold)]"
                    >
                      {p.linkLabel}
                      <span aria-hidden>→</span>
                    </SmartLink>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SPEAKING */}
      <Section surface="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <Eyebrow tone="gold">{c.speaking.eyebrow}</Eyebrow>
              <H2>
                <Rich text={c.speaking.title} />
              </H2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <div className="grid gap-px bg-[var(--charcoal)]/10 sm:grid-cols-2">
                {c.speaking.items.map((t, i) => (
                  <div key={i} className="bg-[var(--cream)] p-7">
                    <p
                      className="font-serif text-sm tracking-[0.3em]"
                      style={{ color: "var(--gold)" }}
                    >
                      {num(i)}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl leading-snug text-[var(--charcoal)]">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.6] text-[var(--charcoal)]/60">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
              {c.speaking.note && (
                <p className="mt-10 max-w-xl font-serif italic text-[var(--charcoal)]/70">
                  {c.speaking.note}
                </p>
              )}
              <div className="mt-10">
                <CTAButton variant="forest-outline" to="/speaking">
                  {c.speaking.ctaLabel}
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BOOK */}
      <Section surface="navy">
        <div className="max-w-3xl">
          <Reveal>
            <div>
              <Eyebrow tone="gold">{c.book.eyebrow}</Eyebrow>
              <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.05] text-white">
                <Rich text={c.book.title} />
              </h2>
              <p className="mt-4 font-serif text-2xl italic font-light text-white/85 md:text-3xl">
                {c.book.subtitle}
              </p>
              <div className="mt-8 max-w-lg">
                <GoldRule />
                <p className="mt-6 text-[15px] leading-[1.85] text-white/75">{c.book.body}</p>
              </div>
              <div className="mt-10">
                <CTAButton variant="white-outline" to="/books" withArrow>
                  {c.book.ctaLabel}
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PODCAST */}
      <Section surface="cream">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <Eyebrow tone="gold">{c.podcast.eyebrow}</Eyebrow>
              <H2>
                <Rich text={c.podcast.title} />
              </H2>
              <p className="mt-8 max-w-xl text-[17px] leading-[1.85] text-[var(--charcoal)]/80">
                {c.podcast.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--ink)]">
              <img
                src={podcastHeadshot}
                alt="Dr. Rodney Andrews at the podcast microphone"
                className="h-full w-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Latest Episodes module hidden until real episodes exist and are approved */}
        <Reveal>
          <div className="mt-14 text-center">
            <CTAButton variant="forest-outline" to="/podcast">
              {c.podcast.ctaLabel}
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* SPEAKER PHOTO STRIP */}
      <section className="relative h-[60vh] overflow-hidden bg-[var(--ink)]">
        <img
          src={speakerPhoto}
          alt="Dr. Rodney Andrews speaking"
          className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-[var(--ink)]/40" />
      </section>

      {/* PHILOSOPHY */}
      <Section surface="forest">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="font-serif text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.15]">
              {c.philosophy.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br className="hidden md:block" />}
                  {i > 0 && " "}
                  <Rich text={line} />
                </span>
              ))}
            </p>
            <GoldRule className="mx-auto mt-10" />
            <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.9] text-white/85 md:text-base">
              {c.philosophy.body}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CONTACT CTA */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="gold">{c.contact.eyebrow}</Eyebrow>
            <H2>
              <Rich text={c.contact.title} />
            </H2>
            <div className="mt-10">
              <CTAButton variant="ink" to="/contact" withArrow>
                {c.contact.ctaLabel}
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow tone="gold">{c.contact.speakingEyebrow}</Eyebrow>
              <H3 className="text-[var(--ink)]">{c.contact.speakingTitle}</H3>
              <div className="mt-8">
                <SpeakingInquiryForm onSurface="light" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow tone="gold">{c.contact.generalEyebrow}</Eyebrow>
              <H3 className="text-[var(--ink)]">{c.contact.generalTitle}</H3>
              <div className="mt-8">
                <GeneralInquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
