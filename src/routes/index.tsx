import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { SpeakingInquiryForm, GeneralInquiryForm } from "../components/site/forms";
import { Reveal } from "../components/site/Reveal";
import heroVideo from "../assets/heroVideo.mp4";
import podcastHeadshot from "../assets/podcastHeadshot.png";
import speakerPhoto from "../assets/speakerPhoto.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. W. Rodney Andrews - Keynote Speaker · Clinician · Author" },
      {
        name: "description",
        content:
          "The official platform of Dr. W. Rodney Andrews, DNP - keynote speaker, founder of Charleston Medicine, author of The Bespoke Life, and host of Peak Performance.",
      },
      { property: "og:title", content: "Dr. W. Rodney Andrews" },
      {
        property: "og:description",
        content: "Keynote Speaker · Clinician · Author · Podcast Host.",
      },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    n: "01",
    title: "Speaking",
    body: "Keynote and conference speaker on integrative health, resilience, leadership, and human performance. Built for medical, executive, and lifestyle audiences.",
    link: { to: "/speaking", label: "Explore Speaking" },
  },
  {
    n: "02",
    title: "Writing",
    body: "The Bespoke Life: Design Your Path, Purpose, and Prosperity. A practical guide to building a life that is authentically yours - not the life you were told to want.",
    link: { to: "/books", label: "About the Book" },
  },
  {
    n: "03",
    title: "Clinician",
    body: "Success & Sanity - Rodney sitting down with successful people to explore what achievement actually looks like behind the scenes.",
    link: { to: "/podcast", label: "Conversations" },
  },
];

const TOPICS = [
  {
    n: "01",
    title: "The Psychology of Sustainable Performance",
    audience: "How people perform at a high level over time.",
  },
  {
    n: "02",
    title: "The Mind-Body Connection",
    audience: "How physical and psychological systems interact to influence performance.",
  },
  {
    n: "03",
    title: "Resilience, Burnout & Recovery",
    audience: "What happens when the demands exceed our ability to recover.",
  },
  {
    n: "04",
    title: "Leadership Under Pressure",
    audience: "How leaders think, decide and lead when stakes are high.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[var(--ink)]">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          aria-label="REPLACE WITH DR. ANDREWS SPEAKING FOOTAGE - conference room, audience visible"
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
                Speaker · Author · Advanced Provider
              </p>
              <h1 className="font-serif font-light leading-[0.95] tracking-[-0.02em] text-white text-[clamp(3.2rem,8vw,7rem)]">
                Dr. W. Rodney
                <span className="block italic font-normal text-[clamp(3.8rem,10vw,8.5rem)]">
                  Andrews
                </span>
              </h1>
              <div className="mt-10 max-w-2xl">
                <GoldRule />
                <p className="mt-6 text-[0.78rem] leading-[1.8] uppercase tracking-[0.18em] text-white/70">
                  DNP, AGNP-BC, PMHNP
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 pointer-events-auto">
                <CTAButton variant="forest" to="/contact" withArrow>
                  Inquire About Speaking
                </CTAButton>
                <CTAButton variant="white-outline" to="/speaking">
                  Speaking Topics
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
              Success isn't just about achieving more. It's about making sure what you're building
              aligns with the life you actually want to live. Dr. Rodney Andrews explores the
              intersection of psychology, performance, purpose, and personal fulfillment - challenging
              people to look beyond traditional measures of success and consider not only what they
              want to achieve, but why they're pursuing it.
            </p>
            <div className="mt-12">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-b border-[var(--forest)] pb-1 text-[0.78rem] uppercase tracking-[0.24em] text-[var(--forest)] hover:opacity-80"
              >
                Read the full biography
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
            <Eyebrow tone="gold">What I Do</Eyebrow>
            <H2 className="text-white">Explore the Work</H2>
          </div>
        </Reveal>
        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <article className="flex flex-col h-full bg-[var(--ink)] p-10 md:p-12">
                <p
                  className="font-serif text-sm tracking-[0.3em]"
                  style={{ color: "var(--gold)" }}
                >
                  {p.n}
                </p>
                <h3 className="mt-6 font-serif text-3xl text-white md:text-4xl">{p.title}</h3>
                <p className="mt-6 flex-1 text-[15px] leading-[1.85] text-white/70">{p.body}</p>
                <div className="mt-10">
                  <Link
                    to={p.link.to}
                    className="inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.24em] text-white hover:text-[var(--gold)]"
                  >
                    {p.link.label}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
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
              <Eyebrow tone="gold">Speaking</Eyebrow>
              <H2>Four ways to bring Dr. Andrews to your room.</H2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <div className="grid gap-px bg-[var(--charcoal)]/10 sm:grid-cols-2">
                {TOPICS.map((t) => (
                  <div key={t.n} className="bg-[var(--cream)] p-7">
                    <p
                      className="font-serif text-sm tracking-[0.3em]"
                      style={{ color: "var(--gold)" }}
                    >
                      {t.n}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl leading-snug text-[var(--charcoal)]">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.6] text-[var(--charcoal)]/60">
                      {t.audience}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-10 max-w-xl font-serif italic text-[var(--charcoal)]/70">
                Each talk is adapted to the room, sourced from current literature, and built to
                withstand the smartest person in it.
              </p>
              <div className="mt-10">
                <CTAButton variant="forest-outline" to="/speaking">
                  View All Speaking Topics
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BOOK */}
      <Section surface="navy">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <PhotoPlaceholder
              label="REPLACE WITH BESPOKE LIFE COVER IMAGE"
              variant="tall"
              tone="cream"
              className="mx-auto max-w-sm"
            />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow tone="gold">Coming Spring 2027</Eyebrow>
              <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.05] text-white">
                The Bespoke Life:
              </h2>
              <p className="mt-4 font-serif text-2xl italic font-light text-white/85 md:text-3xl">
                Design Your Path, Purpose, and Prosperity.
              </p>
              <p className="mt-5 font-serif text-sm italic text-white/55">
                Also available: The Companion Workbook - The Bespoke Life Inventory.
              </p>
              <div className="mt-8 max-w-lg">
                <GoldRule />
                <p className="mt-6 text-[15px] leading-[1.85] text-white/75">
                  The modern self-improvement industry promotes one-size-fits-all solutions for
                  people who need a personalized approach. The Bespoke Life is different. It starts
                  with understanding who you actually are - not who you are told to be.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <CTAButton variant="white-outline" to="/books" withArrow>
                  About the Book
                </CTAButton>
                <a
                  href="#"
                  className="border-b border-[var(--gold)] pb-1 text-[0.78rem] uppercase tracking-[0.24em] text-white hover:opacity-80"
                >
                  Find on Amazon →
                </a>
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
              <Eyebrow tone="gold">The Podcast</Eyebrow>
              <H2>Success & Sanity with Dr. Rodney Andrews.</H2>
              <p className="mt-8 max-w-xl text-[17px] leading-[1.85] text-[var(--charcoal)]/80">
                Candid conversations with successful people about ambition, mental health,
                motivation, performance, and what achievement looks like behind the scenes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--ink)]">
              <img
                src={podcastHeadshot}
                alt="REPLACE WITH DR. ANDREWS AT MIC PHOTO"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </Reveal>
        </div>

        {/* Latest Episodes module hidden until real episodes exist and are approved */}
        <Reveal>
          <div className="mt-14 text-center">
            <CTAButton variant="forest-outline" to="/podcast">
              Listen to the Podcast
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
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-[var(--ink)]/40" />
      </section>

      {/* PHILOSOPHY */}
      <Section surface="forest">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="font-serif text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.15]">
              Excellence. Integrity. <br className="hidden md:block" />
              Compassion. Service.
            </p>
            <GoldRule className="mx-auto mt-10" />
            <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.9] text-white/85 md:text-base">
              Whether writing the next book, recording a podcast episode, or speaking from the
              stage, Dr. Andrews remains guided by the principles that have shaped his journey from
              the beginning: excellence, integrity, compassion, and service.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CONTACT CTA */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="gold">Get in Touch</Eyebrow>
            <H2>Invite Dr. Andrews to your stage.</H2>
            <div className="mt-10">
              <CTAButton variant="ink" to="/contact" withArrow>
                Inquire About Speaking
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow tone="gold">Speaking Inquiries</Eyebrow>
              <H3 className="text-[var(--ink)]">For Events</H3>
              <div className="mt-8">
                <SpeakingInquiryForm onSurface="light" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow tone="gold">General Inquiries</Eyebrow>
              <H3 className="text-[var(--ink)]">Everything Else</H3>
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
