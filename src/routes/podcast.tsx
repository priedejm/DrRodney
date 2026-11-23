import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { H1, H2, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { MailingListForm } from "../components/site/forms";
import { useContent, useImage } from "@/cms/SiteData";
import { Rich, Paras } from "@/cms/Rich";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Success & Sanity - The Podcast with Dr. Rodney Andrews" },
      {
        name: "description",
        content:
          "Success & Sanity with Dr. Rodney Andrews - candid conversations with successful people about ambition, mental health, motivation, and what achievement looks like behind the scenes.",
      },
      { property: "og:title", content: "Success & Sanity with Dr. Rodney Andrews" },
      {
        property: "og:description",
        content:
          "Candid conversations with successful people about ambition, mental health, motivation, and what achievement looks like behind the scenes.",
      },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  const c = useContent().podcast;
  const photo = useImage("podcast-hero-photo");

  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <section className="surface-ink relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-end gap-16 px-6 py-28 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <Eyebrow tone="gold">{c.hero.eyebrow}</Eyebrow>
            <H1 className="text-white">
              <Rich text={c.hero.title} em="italic font-normal" />
            </H1>
            {c.hero.subtitle && (
              <p className="mt-4 font-serif text-2xl italic font-light text-white/70 md:text-3xl">
                {c.hero.subtitle}
              </p>
            )}
            <GoldRule className="mt-10" />
            <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/80">{c.hero.body}</p>
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-[var(--charcoal)]">
            <img
              src={photo}
              alt="Dr. Rodney Andrews in the podcast studio"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE POD */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="gold">{c.about.eyebrow}</Eyebrow>
            <H2>
              <Rich text={c.about.title} />
            </H2>
            <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-[var(--charcoal)]/80 md:text-base">
              <Paras text={c.about.body} />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* EPISODES - coming soon until real episodes exist */}
      <Section surface="navy">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="gold">{c.episodes.eyebrow}</Eyebrow>
            <H2 className="text-white">
              <Rich text={c.episodes.title} />
            </H2>
            <GoldRule className="mx-auto mt-10" />
            <p className="mt-8 text-[15px] leading-[1.85] text-white/75">{c.episodes.body}</p>
          </div>
        </Reveal>
      </Section>

      {/* Subscribe / platform links hidden until working links exist */}

      {/* MAILING LIST */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="gold">{c.newsletter.eyebrow}</Eyebrow>
            <H2>
              <Rich text={c.newsletter.title} />
            </H2>
            <p className="mt-8 text-[15px] text-[var(--charcoal)]/75 md:text-base">{c.newsletter.body}</p>
            <div className="mx-auto mt-10 max-w-xl text-left">
              <MailingListForm />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
