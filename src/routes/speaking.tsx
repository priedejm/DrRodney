import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { CTAButton, H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { SpeakingInquiryForm } from "../components/site/forms";
import farAngle from "../assets/farAngle.mp4";
import speakerPhoto from "../assets/speakerPhoto.png";

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

const AUDIENCES = [
  {
    title: "Healthcare and Medical Audiences",
    items: [
      "Physicians",
      "Advanced Practice Providers",
      "Nurses and Allied Health Professionals",
      "Medical Students and Trainees",
      "Healthcare Executives and Administrators",
      "Medical Associations and Conferences",
    ],
  },
  {
    title: "Business and Leadership Audiences",
    items: [
      "Entrepreneurs",
      "Business Owners",
      "Corporate Leaders and Executives",
      "Management Teams",
      "Professional Organizations",
      "Leadership and Development Conferences",
    ],
  },
  {
    title: "Health, Performance and Community Audiences",
    items: [
      "Wellness and Longevity Enthusiasts",
      "High-Performance Professionals",
      "Men's Health Groups",
      "Corporate Wellness Programs",
      "Civic and Community Organizations",
      "Consumer Health and Lifestyle Audiences",
    ],
  },
];

// Draft titles pending Dr. Andrews's approval - sourced from the Master Implementation
// Brief's initial topic list (Section 8). Not yet finalized for public use.
const TOPICS = [
  { n: "01", title: "Success and Sanity", audience: "Executives · Entrepreneurs · High Achievers" },
  { n: "02", title: "Designing a Purposeful Life", audience: "Community · Wellness · General Audiences" },
  { n: "03", title: "Leadership and Professional Performance", audience: "Executives · Managers · Professional Teams" },
  { n: "04", title: "Resilience and Personal Responsibility", audience: "Physicians · First Responders · Executives" },
  { n: "05", title: "Executive Wellbeing", audience: "C-Suite · Boards · Leadership Teams" },
  { n: "06", title: "Leverage Your Letters", audience: "Healthcare · Advanced Practice Providers · Clinicians" },
];

function SpeakingPage() {
  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[var(--ink)]">
        <video
          src={farAngle}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          aria-label="REPLACE WITH SPEAKING ENGAGEMENT VIDEO OR PHOTO"
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
              <Eyebrow tone="gold">Speaking</Eyebrow>
              <H1 className="text-white">
                A speaker who has <span className="italic">[tagline pending client approval].</span>
              </H1>
              <GoldRule className="mt-10" />
              <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/80">
                Keynote, corporate, healthcare, and community engagements - booked nationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="gold">The Approach</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.15]">
              Lived experience. Practical insight.
            </h2>
            <div className="mt-12 space-y-7 font-serif text-[1.2rem] leading-[1.8] text-[var(--charcoal)] md:text-[1.3rem]">
              <p>
                Dr. Andrews is a dynamic speaker who combines clinical experience, decades of
                entrepreneurial insight, and a deep understanding of human behavior to deliver
                presentations that are both engaging and transformative.
              </p>
              <p>
                Known for his unique blend of authenticity, humor, and candid perspective, he
                challenges audiences to think differently, question assumptions, and take meaningful
                action. Whether speaking on health, longevity, leadership, personal development, or
                performance, Dr. Andrews offers practical insights and unconventional perspectives
                that resonate long after the presentation ends.
              </p>
              <p>
                His engaging style keeps audiences attentive while providing actionable strategies
                that inspire growth, elevate performance, and foster lasting change. With expertise
                spanning medicine, business, and personal development, Dr. Andrews connects with a
                wide range of audiences, delivering presentations that are thought-provoking,
                memorable, and immediately applicable to both professional and personal success.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* AUDIENCES */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">Who he speaks to</Eyebrow>
            <H2 className="text-white">Targeted audiences.</H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {AUDIENCES.map((group, i) => (
            <Reveal key={group.title} delay={i * 120}>
              <article className="flex flex-col h-full bg-[var(--cream)] p-10">
                <H3 className="text-[var(--ink)]">{group.title}</H3>
                <div className="mt-6 h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--charcoal)]/80">
                  {group.items.map((it) => (
                    <li key={it} className="flex gap-3">
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
              <Eyebrow tone="gold">Keynote Topics</Eyebrow>
              <H2>Built for the room.</H2>
              <p className="mt-8 font-serif italic text-[var(--charcoal)]/70">
                Each talk is adapted to the room, sourced from current literature, and built to
                withstand the smartest person in it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y" style={{ borderColor: "var(--charcoal)" }}>
              {TOPICS.map((t) => (
                <li
                  key={t.n}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-8 border-t py-7 first:border-t-0"
                  style={{ borderColor: "rgba(44,44,44,0.18)" }}
                >
                  <span
                    className="font-serif text-sm tracking-[0.3em]"
                    style={{ color: "var(--gold)" }}
                  >
                    {t.n}
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
              <Eyebrow tone="gold">Booking</Eyebrow>
              <H2 className="text-white">Book Dr. Andrews.</H2>
              <GoldRule className="mt-8" />
              <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/85">
                Provide your name, email, and a detailed message outlining your speaking engagement
                request - event location, date, topics of interest, audience type, and any
                additional context that will help us understand your needs.
              </p>
              <div className="mt-10">
                <SpeakingInquiryForm onSurface="dark" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CINEMATIC CLOSE */}
      <section className="relative">
        <PhotoPlaceholder
          label="REPLACE WITH WIDE PHOTO - RAN OUT"
          variant="wide"
          tone="charcoal"
          className="!rounded-none min-h-[55vh]"
        />
        <div className="absolute inset-0 bg-[var(--ink)]/75" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
          <Reveal>
            <div>
              <GoldRule className="mx-auto" />
              <p className="mt-8 font-serif text-3xl font-light leading-tight md:text-5xl">
                Inquiries:{" "}
                <Link
                  to="/contact"
                  className="underline decoration-[var(--gold)] decoration-2 underline-offset-8 transition-opacity hover:opacity-80"
                >
                  DrRodneyAndrews.com/contact
                </Link>
              </p>
              <div className="mt-10">
                <CTAButton variant="white-outline" to="/contact" withArrow>
                  Inquire About Speaking
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
