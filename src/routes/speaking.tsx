import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { SpeakingInquiryForm } from "../components/site/forms";
import { BgVideo } from "../components/site/BgVideo";
import { useContent, useImage, useVideo } from "@/cms/SiteData";
import { Rich, Paras } from "@/cms/Rich";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking - Dr. Rodney Andrews" },
      {
        name: "description",
        content:
          "Book Dr. Rodney Andrews for keynote, corporate, healthcare, and community speaking engagements on health, leadership, and human performance.",
      },
      { property: "og:title", content: "Book Dr. Rodney Andrews to Speak" },
      {
        property: "og:description",
        content:
          "A speaker who has lived it - keynote topics on performance, resilience, leadership, and the mind-body connection.",
      },
    ],
  }),
  component: SpeakingPage,
});

const num = (i: number) => String(i + 1).padStart(2, "0");

function SpeakingPage() {
  const c = useContent().speaking;
  const video = useVideo("speaking-hero-video");
  const speakerPhoto = useImage("speaking-booking-photo");

  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[var(--ink)]">
        <BgVideo
          src={video}
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          label="Dr. Rodney Andrews speaking at an event"
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--ink)]/30" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.1) 50%, rgba(13,13,13,0.6) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
            <div className="max-w-3xl text-white">
              <Eyebrow tone="gold">{c.hero.eyebrow}</Eyebrow>
              <H1 className="text-white">
                <Rich text={c.hero.title} />
              </H1>
              <GoldRule className="mt-10" />
              <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/80">{c.hero.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="gold">{c.approach.eyebrow}</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.15]">
              <Rich text={c.approach.title} />
            </h2>
            <div className="mt-12 space-y-7 font-serif text-[1.2rem] leading-[1.8] text-[var(--charcoal)] md:text-[1.3rem]">
              <Paras text={c.approach.body} />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* AUDIENCES */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">{c.audiences.eyebrow}</Eyebrow>
            <H2 className="text-white">
              <Rich text={c.audiences.title} />
            </H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {c.audiences.groups.map((group, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="flex flex-col h-full bg-[var(--cream)] p-10">
                <H3 className="text-[var(--ink)]">{group.title}</H3>
                <div className="mt-6 h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--charcoal)]/80">
                  {group.items.filter((it) => it.trim()).map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--forest)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* KEYNOTE TOPICS */}
      <Section surface="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div>
              <Eyebrow tone="gold">{c.topics.eyebrow}</Eyebrow>
              <H2>
                <Rich text={c.topics.title} />
              </H2>
              {c.topics.note && (
                <p className="mt-8 font-serif italic text-[var(--charcoal)]/70">{c.topics.note}</p>
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y" style={{ borderColor: "var(--charcoal)" }}>
              {c.topics.items.map((t, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-8 border-t py-7 first:border-t-0"
                  style={{ borderColor: "rgba(44,44,44,0.18)" }}
                >
                  <span
                    className="font-serif text-sm tracking-[0.3em]"
                    style={{ color: "var(--gold)" }}
                  >
                    {num(i)}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl leading-snug text-[var(--charcoal)] md:text-3xl">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/60">
                      {t.audience}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* INQUIRY */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden bg-[var(--ink)] lg:min-h-full">
          <img
            src={speakerPhoto}
            alt="Dr. Rodney Andrews speaking at an event"
            className="absolute inset-0 h-full w-full object-cover grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 to-transparent" />
        </div>
        <div className="surface-forest flex items-center">
          <Reveal>
            <div className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16">
              <Eyebrow tone="gold">{c.booking.eyebrow}</Eyebrow>
              <H2 className="text-white">
                <Rich text={c.booking.title} />
              </H2>
              <GoldRule className="mt-8" />
              <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/85">{c.booking.body}</p>
              <div className="mt-10">
                <SpeakingInquiryForm onSurface="dark" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
