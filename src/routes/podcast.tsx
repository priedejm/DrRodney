import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { CTAButton, H1, H2, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { MailingListForm } from "../components/site/forms";
import podcastHeadshot from "../assets/podcastHeadshot.png";

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
          "Raw, unfiltered conversations on health, business, longevity, leadership, and curiosity.",
      },
    ],
  }),
  component: PodcastPage,
});

const EPISODES = [
  { season: "[Season pending client approval]", ep: "[Episode pending client approval]", label: "REPLACE WITH EPISODE THUMBNAIL AND TITLE ([season/episode pending])" },
  { season: "[Season pending client approval]", ep: "[Episode pending client approval]", label: "REPLACE WITH EPISODE THUMBNAIL AND TITLE ([season/episode pending])" },
];

function PodcastPage() {
  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <section className="surface-ink relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-end gap-16 px-6 py-28 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <Eyebrow tone="gold">The Podcast</Eyebrow>
            <H1 className="text-white">
              Success & <span className="italic font-normal">Sanity.</span>
            </H1>
            <p className="mt-4 font-serif text-2xl italic font-light text-white/70 md:text-3xl">
              with Dr. Rodney Andrews.
            </p>
            <GoldRule className="mt-10" />
            <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/80">
              Candid conversations with successful people about ambition, mental health,
              motivation, performance, and what achievement looks like behind the scenes.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden bg-[var(--charcoal)]">
            <img
              src={podcastHeadshot}
              alt="REPLACE WITH DR. ANDREWS PODCAST STUDIO PHOTO"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE POD */}
      <Section surface="cream">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <Reveal>
            <div className="aspect-[3/4] overflow-hidden bg-[var(--ink)]">
              <img
                src={podcastHeadshot}
                alt="REPLACE WITH DR. ANDREWS PODCAST PHOTO"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow tone="gold">About the Pod</Eyebrow>
              <H2>I am Dr. Andrews, and I am so glad you are here.</H2>
              <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-[var(--charcoal)]/80 md:text-base">
                <p>
                  Success & Sanity is a conversation about what achievement actually costs - and
                  what it's worth. Each episode, Dr. Andrews sits down with people who have built
                  something real - a business, a career, a reputation - and asks the questions
                  polished interviews tend to skip: what did the pursuit demand of you, what did
                  you get wrong along the way, and what would you tell yourself at the start?
                </p>
                <p>
                  It's a show for anyone who suspects that success and sanity aren't always on
                  speaking terms, and wants an honest look at how the people who've made it
                  actually hold both together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* LATEST EPISODES */}
      <Section surface="navy">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">Now Playing</Eyebrow>
            <H2 className="text-white">The latest drops.</H2>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-white/75">
              New episodes drop regularly. Subscribe wherever you listen so you never miss one.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {EPISODES.map((e, i) => (
            <Reveal key={e.ep} delay={i * 120}>
              <article
                className="group flex flex-col overflow-hidden border bg-[#161616] h-full"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <PhotoPlaceholder label={e.label} variant="wide" tone="charcoal" />
                <div className="p-8 md:p-10">
                  <p
                    className="text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: "var(--gold)" }}
                  >
                    {e.season} · {e.ep}
                  </p>
                  <H3 className="mt-4 text-white">Replace with episode title</H3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/65">
                    Replace with a short episode description capturing the conversation and the
                    guest.
                  </p>
                  <div className="mt-6">
                    <button className="border-b border-[var(--gold)] pb-1 text-[0.74rem] uppercase tracking-[0.24em] text-white hover:opacity-80">
                      Listen Now →
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SUBSCRIBE */}
      <Section surface="navy" id="subscribe">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="gold">Subscribe</Eyebrow>
            <H2 className="text-white">Subscribe to the podcast.</H2>
            <GoldRule className="mx-auto mt-10" />
            <p className="mt-8 text-[15px] text-white/75">Available wherever you listen.</p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
              {[
                {
                  name: "Spotify",
                  svg: (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
                      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.3a.75.75 0 0 1-1 .25c-2.8-1.7-6.4-2-10.5-1.1a.75.75 0 1 1-.3-1.46c4.5-1 8.4-.6 11.5 1.3.36.22.47.7.3 1.01zm1.5-3a.94.94 0 0 1-1.3.3c-3.2-2-8.1-2.5-11.9-1.4a.94.94 0 1 1-.55-1.8c4.4-1.3 9.7-.7 13.4 1.6.45.27.6.86.35 1.3zm.13-3.1c-3.8-2.3-10.1-2.5-13.8-1.4a1.13 1.13 0 1 1-.66-2.16c4.2-1.3 11.2-1 15.6 1.6a1.13 1.13 0 1 1-1.17 1.95z" />
                    </svg>
                  ),
                },
                {
                  name: "Apple Podcasts",
                  svg: (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
                      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 4.7a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2zm0 14.6c-3 0-5.5-1.6-7-4 .1-2 4-3 7-3s6.9 1 7 3c-1.5 2.4-4 4-7 4z" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  svg: (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                    </svg>
                  ),
                },
              ].map((p) => (
                <a
                  key={p.name}
                  href="#"
                  className="flex flex-col items-center gap-3 text-white/80 transition-colors hover:text-white"
                >
                  {p.svg}
                  <span className="text-[10px] uppercase tracking-[0.28em]">{p.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-14">
              <CTAButton variant="white-outline" href="#" withArrow>
                Subscribe Now
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* MAILING LIST */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="gold">Newsletter</Eyebrow>
            <H2>Join the mailing list.</H2>
            <p className="mt-8 text-[15px] text-[var(--charcoal)]/75 md:text-base">
              Stay up to date on new episodes, speaking events, book releases, and more.
            </p>
            <div className="mx-auto mt-10 max-w-xl text-left">
              <MailingListForm />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
