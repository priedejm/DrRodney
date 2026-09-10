import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { SpeakingInquiryForm, GeneralInquiryForm } from "../components/site/forms";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Dr. Rodney Andrews" },
      {
        name: "description",
        content:
          "Get in touch with Dr. Rodney Andrews for speaking engagements, general inquiries, or to learn about Charleston Medicine and Behavioral Health.",
      },
      { property: "og:title", content: "Contact Dr. Rodney Andrews" },
      { property: "og:description", content: "Speaking inquiries and general correspondence." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* HERO STRIP */}
      <Section surface="navy">
        <div className="mx-auto max-w-4xl text-center text-white">
          <Eyebrow tone="gold">Contact</Eyebrow>
          <H1 className="text-white">
            Let's <span className="italic">connect.</span>
          </H1>
          <GoldRule className="mx-auto mt-10" />
        </div>
      </Section>

      {/* FORMS */}
      <Section surface="cream">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow tone="gold">For Events</Eyebrow>
              <H3 className="text-[var(--ink)]">Speaking Inquiries</H3>
              <p className="mt-4 text-sm leading-[1.8] text-[var(--charcoal)]/75">
                Share the details of your event and we'll respond with availability and next steps.
              </p>
              <div className="mt-10">
                <SpeakingInquiryForm onSurface="light" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Eyebrow tone="gold">Everything Else</Eyebrow>
              <H3 className="text-[var(--ink)]">General Inquiries</H3>
              <p className="mt-4 text-sm leading-[1.8] text-[var(--charcoal)]/75">
                Press, partnerships, or simply to say hello - we read every message.
              </p>
              <div className="mt-10">
                <GeneralInquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EXTERNAL LINKS */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">Elsewhere</Eyebrow>
            <H2 className="text-white">The other doors.</H2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
          {[
            {
              title: "CharlestonMedicine.com",
              desc: "Schedule a patient appointment or learn about our concierge practice on James Island, Charleston, SC.",
              href: "https://CharlestonMedicine.com",
            },
            {
              title: "RodneyAndrewsLive.com",
              desc: "Live events, appearances, and the upcoming speaking calendar.",
              href: "https://RodneyAndrewsLive.com",
            },
          ].map((l, i) => (
            <Reveal key={l.title} delay={i * 120}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-[var(--ink)] p-10 md:p-12"
              >
                <span
                  className="text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--gold)" }}
                >
                  External
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white md:text-3xl">{l.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.8] text-white/70">{l.desc}</p>
                <span className="mt-10 inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.24em] text-white group-hover:text-[var(--gold)]">
                  Visit Site
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-20 text-center text-sm text-white/50">
            [Social media platforms and handles pending client approval]
          </p>
        </Reveal>
      </Section>
    </>
  );
}
