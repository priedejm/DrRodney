import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { CTAButton, H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "The Bespoke Life - A Book by Dr. Rodney Andrews" },
      {
        name: "description",
        content:
          "The Bespoke Life: Design Your Path, Purpose, and Prosperity - plus the companion workbook, The Bespoke Life Inventory.",
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

const CONCEPTS = [
  {
    n: "01",
    title: "The Illusion of the Off-The-Rack Life",
    body: "The modern self-improvement industry often promotes one-size-fits-all solutions for individuals who need a personalized approach. Pursuing society's standards can feel like adopting an identity that was never designed for you, leading to endless efforts to fix what was never authentically yours. True growth begins with understanding and developing the person you are, not the person you are told to be.",
  },
  {
    n: "02",
    title: "The Failure of the Generic Solution",
    body: "Most self-help models focus on changing behaviors while ignoring the deeper structures that drive them. The challenge is rarely the symptom itself, but the unexamined life beneath it. Meaningful growth begins when we move past the ego, set aside our excuses, and honestly confront what is truly there.",
  },
  {
    n: "03",
    title: "The Promise of the Blueprint",
    body: "This assessment goes beyond surface-level self-improvement by identifying the patterns, beliefs, and behaviors that shape your life. Through honest self-examination, it helps build a personalized, uncompromising foundation for meaningful growth. The objective is not an idealized version of success, but a life rooted in clarity, confidence, and the capacity to meet life's demands with authenticity and purpose.",
  },
];

const MOVEMENTS = [
  {
    num: "One",
    title: "Acknowledge Before You Act",
    body: "Sit with what was revealed, name it without judgment.",
    label: "REPLACE WITH MOVEMENT 1 PHOTO",
  },
  {
    num: "Two",
    title: "Identify Your Highest Leverage Point",
    body: "Out of the five areas uncovered, which one, if addressed, would relieve the most pressure?",
    label: "REPLACE WITH MOVEMENT 2 PHOTO",
  },
  {
    num: "Three",
    title: "Define the Next Twenty-Four-Hour Action",
    body: "Identify one specific, concrete, completable action you can finish by this time tomorrow. Big or small, what matters is following through on the commitment to yourself.",
    label: "REPLACE WITH MOVEMENT 3 PHOTO",
  },
  {
    num: "Four",
    title: "Build the Evidence File",
    body: "Every committed action is evidence you are building a new identity - one where you do what you say. Act first and the identity follows.",
    label: "REPLACE WITH MOVEMENT 4 PHOTO",
  },
];

function BooksPage() {
  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <Section surface="navy">
        <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <Eyebrow tone="gold">New Book</Eyebrow>
            <h1 className="font-serif font-light leading-[0.95] tracking-[-0.02em] text-white text-[clamp(3rem,7vw,6rem)]">
              The Bespoke
              <span className="block italic font-normal">Life.</span>
            </h1>
            <p className="mt-8 font-serif text-2xl italic font-light text-white/85 md:text-3xl">
              Design Your Path, Purpose, and Prosperity.
            </p>
            <GoldRule className="mt-10" />
            <p className="mt-6 max-w-lg text-[15px] leading-[1.85] text-white/75">
              A personalized framework for growth - built on honest self-examination, not generic
              self-help.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTAButton variant="forest" href="#purchase" withArrow>
                Get the Book
              </CTAButton>
              <CTAButton variant="white-outline" href="#workbook">
                Get the Workbook
              </CTAButton>
            </div>
          </div>
          <PhotoPlaceholder
            label="REPLACE WITH BESPOKE LIFE COVER IMAGE"
            variant="tall"
            tone="cream"
            className="mx-auto max-w-sm"
          />
        </div>
      </Section>

      {/* CONCEPTS */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">The Premise</Eyebrow>
            <H2 className="text-white">Why one-size-fits-all fails.</H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {CONCEPTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="flex flex-col h-full bg-[var(--ink)] p-10 md:p-12">
                <p
                  className="font-serif text-sm tracking-[0.3em]"
                  style={{ color: "var(--gold)" }}
                >
                  {c.n}
                </p>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-white md:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-6 text-[15px] leading-[1.8] text-white/70">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MOVEMENTS */}
      <Section surface="cream">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">The Framework</Eyebrow>
            <H2>The first four movements.</H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {MOVEMENTS.map((m, i) => (
            <Reveal key={m.num} delay={i * 100}>
              <article
                className="overflow-hidden border bg-white h-full"
                style={{ borderColor: "rgba(44,44,44,0.12)" }}
              >
                <PhotoPlaceholder label={m.label} variant="wide" tone="charcoal" />
                <div className="p-8 md:p-10">
                  <p
                    className="font-serif text-xs uppercase tracking-[0.3em]"
                    style={{ color: "var(--gold)" }}
                  >
                    Movement {m.num}
                  </p>
                  <H3 className="mt-4 text-[var(--ink)]">{m.title}</H3>
                  <p className="mt-4 text-[15px] leading-[1.85] text-[var(--charcoal)]/80">
                    {m.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WORKBOOK */}
      <Section surface="navy" id="workbook">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow tone="gold">Companion</Eyebrow>
              <H2 className="text-white">The Companion Workbook.</H2>
              <p className="mt-6 font-serif text-xl italic font-light text-white/75">
                The Bespoke Life Inventory.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[15px] leading-[1.85] text-white/80">
                The Bespoke Life Inventory companion workbook transforms the concepts in this book
                into a practical, actionable process. Through guided exercises, clinical prompts, and
                a structured framework, it helps you answer the inventory questions with honesty,
                identify where you may be distorting your measurements, and build your own Bespoke
                Form. Whether used alongside the book or as a standalone tool, the workbook is where
                insight becomes implementation.
              </p>
              <p className="mt-6 font-serif italic text-white/60">
                Available at: DrRodneyAndrews.com
              </p>
              <div className="mt-10">
                <CTAButton variant="white-outline" href="#purchase" withArrow>
                  Get the Workbook
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PURCHASE */}
      <Section surface="cream" id="purchase">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="gold">Order Now</Eyebrow>
            <H2>Begin the work.</H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "The Bespoke Life",
              sub: "Design Your Path, Purpose, and Prosperity",
              body: "The complete framework - a personalized approach to growth rooted in honest self-examination.",
              label: "REPLACE WITH BOOK COVER",
            },
            {
              title: "The Bespoke Life Inventory",
              sub: "The Companion Workbook",
              body: "Guided exercises, clinical prompts, and structured worksheets that turn insight into implementation.",
              label: "REPLACE WITH WORKBOOK COVER",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article
                className="flex flex-col overflow-hidden border bg-white h-full"
                style={{ borderColor: "rgba(44,44,44,0.12)" }}
              >
                <PhotoPlaceholder label={p.label} variant="card" tone="navy" />
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <H3 className="text-[var(--ink)]">{p.title}</H3>
                  <p className="mt-2 font-serif italic text-[var(--charcoal)]/70">{p.sub}</p>
                  <p className="mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--charcoal)]/80">
                    {p.body}
                  </p>
                  <div className="mt-8">
                    <CTAButton variant="forest" href="#" withArrow>
                      Get Your Copy
                    </CTAButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
