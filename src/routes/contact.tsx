import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { SpeakingInquiryForm, GeneralInquiryForm } from "../components/site/forms";
import { useContent } from "@/cms/SiteData";
import { Rich } from "@/cms/Rich";
import { safeHref } from "@/cms/SmartLink";

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
  const c = useContent().contact;

  return (
    <>
      {/* HERO STRIP */}
      <Section surface="navy">
        <div className="mx-auto max-w-4xl text-center text-white">
          <Eyebrow tone="gold">{c.hero.eyebrow}</Eyebrow>
          <H1 className="text-white">
            <Rich text={c.hero.title} />
          </H1>
          <GoldRule className="mx-auto mt-10" />
        </div>
      </Section>

      {/* FORMS */}
      <Section surface="cream">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow tone="gold">{c.speaking.eyebrow}</Eyebrow>
              <H3 className="text-[var(--ink)]">{c.speaking.title}</H3>
              <p className="mt-4 text-sm leading-[1.8] text-[var(--charcoal)]/75">{c.speaking.body}</p>
              <div className="mt-10">
                <SpeakingInquiryForm onSurface="light" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Eyebrow tone="gold">{c.general.eyebrow}</Eyebrow>
              <H3 className="text-[var(--ink)]">{c.general.title}</H3>
              <p className="mt-4 text-sm leading-[1.8] text-[var(--charcoal)]/75">{c.general.body}</p>
              <div className="mt-10">
                <GeneralInquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EXTERNAL LINKS */}
      {c.elsewhere.items.length > 0 && (
        <Section surface="navy">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow tone="gold">{c.elsewhere.eyebrow}</Eyebrow>
              <H2 className="text-white">
                <Rich text={c.elsewhere.title} />
              </H2>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10">
            {c.elsewhere.items.map((l, i) => (
              <Reveal key={i} delay={i * 120}>
                <a
                  href={safeHref(l.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-[var(--ink)] p-10 md:p-12"
                >
                  {c.elsewhere.tag && (
                    <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                      {c.elsewhere.tag}
                    </span>
                  )}
                  <h3 className="mt-4 font-serif text-2xl text-white md:text-3xl">{l.title}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-[1.8] text-white/70">{l.desc}</p>
                  <span className="mt-10 inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.24em] text-white group-hover:text-[var(--gold)]">
                    {c.elsewhere.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
