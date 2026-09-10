import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { CTAButton, H1, H3, Section, Eyebrow, GoldRule } from "../components/site/primitives";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import youngPicture from "../assets/youngPicture.jpg";
import graduationFamily from "../assets/graduationFamily.jpg";
import graduationWide from "../assets/graduationWide.jpg";
import graduationClose from "../assets/graudationClose.jpg";
import graduationMascot from "../assets/graduationMascot.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Dr. William Rodney Andrews, DNP" },
      {
        name: "description",
        content:
          "Dr. William Rodney Andrews, DNP, AGNP-BC, PMHNP - from rural North Carolina to founder of Charleston Medicine and Behavioral Health.",
      },
      { property: "og:title", content: "About Dr. Rodney Andrews" },
      {
        property: "og:description",
        content:
          "The story behind the physician, entrepreneur, author, and speaker - vision, discipline, and a relentless pursuit of excellence.",
      },
    ],
  }),
  component: AboutPage,
});

const STORY = [
  `Dr. William Rodney Andrews' story is one of vision, discipline, and relentless pursuit of excellence. Raised in the small town of Hillsborough, North Carolina, where hard work was not merely encouraged but expected, he developed an entrepreneurial mindset at an early age. Growing up in a close-knit community, Rodney understood that success would require exceptional effort, unwavering determination, and a willingness to create opportunities where none existed.`,
  `Long before earning professional titles and accolades, Rodney was building businesses. As a young entrepreneur, he began by mowing lawns throughout his community, eventually transforming a modest side venture into a successful lawn care company with employees working under his leadership. Years later, after strategically growing and selling the business, he used the proceeds to purchase a convenience store for his father - a reflection of both his business acumen and deep commitment to family.`,
  `A pivotal moment in Rodney's journey came with his acceptance to Duke University. While pursuing his education, he simultaneously entered the world of luxury sales, where his natural talent for communication, leadership, and relationship building quickly distinguished him from his peers. Rising from an entry-level position to the top ranks of the organization within months, he became one of the company's highest-performing sales professionals. His success led to responsibilities beyond personal production - he was entrusted with training new sales representatives, developing sales strategies, and mentoring future leaders within the organization.`,
  `Yet despite achieving remarkable professional success, Rodney felt called toward a greater purpose - one centered on service, impact, and improving the lives of others. At the age of 40, while balancing the responsibilities of marriage and raising a teenage son, he made the courageous decision to pursue a career in healthcare. He was accepted into the Medical University of South Carolina, embarking on an entirely new chapter of life.`,
  `The journey was demanding. During a period marked by the unprecedented challenges of the COVID-19 pandemic, Rodney navigated rigorous academic requirements, clinical rotations, and long nights of study while remaining devoted to his family. It was a season defined by sacrifice, resilience, and an unwavering belief that meaningful work often requires extraordinary commitment.`,
  `That commitment culminated in the achievement of multiple advanced credentials, earning him the distinction of Dr. Rodney Andrews, DNP, AGNP-BC, PMHNP. Following graduation, he trained under the respected mentorship of Dr. Eric Bolster, gaining extensive experience in a high-volume clinical environment that sharpened both his clinical expertise and operational leadership. There, he developed a comprehensive understanding of patient care while further refining the business instincts that had shaped his career from the beginning.`,
  `Driven by a vision to redefine healthcare through personalized, relationship-centered medicine, Dr. Andrews founded Charleston Medicine and Behavioral Health - a concierge-style practice dedicated to delivering exceptional physical and mental healthcare. The practice quickly exceeded expectations, generating more than $1 million in revenue during its first year of operation and establishing itself as a premier destination for comprehensive, patient-focused care.`,
  `Today, Dr. Andrews continues to practice clinically in Charleston. Beyond clinical practice, he is an author, podcast host, entrepreneur, and sought-after speaker whose insights on healthcare, business, leadership, and personal growth have reached audiences across the United States. Whether writing his next book, recording a podcast episode, or speaking from the stage, he remains guided by the principles that shaped his journey from the beginning: excellence, integrity, compassion, and service.`,
];

const PHOTOS = [
  { src: youngPicture, alt: "REPLACE WITH FAMILY GROUP PHOTO", caption: "Family - Hillsborough, NC", fit: "contain" as const },
  { src: graduationWide, alt: "REPLACE WITH DUKE GRADUATION PHOTO - [date pending client approval]", caption: "Duke University - [date pending client approval]" },
  { src: graduationFamily, alt: "REPLACE WITH MUSC GRADUATION PHOTO - [date pending client approval]", caption: "Medical University of South Carolina - [date pending client approval]" },
  { src: graduationMascot, alt: "Celebrating graduation", caption: "Commencement", fit: "contain" as const },
];

const CREDENTIALS = [
  "DNP",
  "AGNP-BC",
  "PMHNP",
  "Duke University",
  "Medical University of South Carolina",
  "Charleston Medicine and Behavioral Health",
];

function AboutPage() {
  return (
    <>
      {/* HERO — no reveal, already in viewport on load */}
      <Section surface="navy">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Eyebrow tone="gold">About</Eyebrow>
            <H1 className="text-white">
              Dr. Rodney
              <span className="block italic font-normal">Andrews.</span>
            </H1>
            <div className="mt-10 max-w-lg">
              <GoldRule />
              <p className="mt-6 text-[0.78rem] uppercase tracking-[0.2em] leading-[1.8] text-white/70">
                DNP · AGNP-BC · PMHNP · Entrepreneur · Author · Speaker
              </p>
            </div>
            <p className="mt-10 max-w-lg text-[15px] leading-[1.85] text-white/75">
              A story of vision, discipline, and the relentless pursuit of excellence - from rural
              North Carolina to the founding of a thriving Charleston medical practice.
            </p>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-[var(--charcoal)]">
            <img
              src={graduationClose}
              alt="REPLACE WITH APPROVED ABOUT PHOTO - navy suit, confident"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </Section>

      {/* STORY */}
      <Section surface="cream">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="gold">Biography</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] font-light leading-tight">
              The long road to <span className="italic">Charleston.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-3xl space-y-12">
          {STORY.map((para, i) => {
            const photoIndex = [1, 3, 5, 7].indexOf(i);
            return (
              <Reveal key={i}>
                <div>
                  <p className="font-serif text-[1.2rem] leading-[1.8] text-[var(--charcoal)] md:text-[1.3rem]">
                    {para}
                  </p>
                  {photoIndex >= 0 && PHOTOS[photoIndex] && (
                    <figure className="mt-14">
                      <div className="aspect-[16/10] overflow-hidden bg-[var(--ink)]">
                        <img
                          src={PHOTOS[photoIndex].src}
                          alt={PHOTOS[photoIndex].alt}
                          className={`h-full w-full grayscale ${PHOTOS[photoIndex].fit === "contain" ? "object-contain" : "object-cover"}`}
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[var(--charcoal)]/55">
                        {PHOTOS[photoIndex].caption}
                      </figcaption>
                    </figure>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CREDENTIALS BAR */}
      <section className="surface-ink">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center text-[10px] uppercase tracking-[0.3em] text-white/80">
              {CREDENTIALS.map((c, i) => (
                <li key={c} className="flex items-center gap-10">
                  <span>{c}</span>
                  {i < CREDENTIALS.length - 1 && (
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

      {/* Hidden photo for replacement reference */}
      <div className="hidden">
        <PhotoPlaceholder label="REPLACE WITH FAMILY GROUP PHOTO" />
      </div>

      {/* CLOSING CTA */}
      <Section surface="forest">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <Eyebrow tone="gold">Speaking</Eyebrow>
            <H3 className="font-serif text-3xl leading-[1.3] md:text-4xl">
              Book Dr. Andrews to speak.
            </H3>
            <p className="mt-8 text-[15px] leading-[1.85] text-white/85">
              Keynote, conference, and corporate inquiries welcome - adapted to your audience.
            </p>
            <div className="mt-10">
              <CTAButton variant="white-outline" to="/contact" withArrow>
                Inquire About Speaking
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
