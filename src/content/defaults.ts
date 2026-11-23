/**
 * ALL editable text on the site, with the original copy as defaults.
 *
 * The admin (/admin -> Text & Content) edits a copy of this object which is
 * saved to site-data/content.json on the server and merged over these defaults
 * at runtime (see src/cms/merge.ts). That means:
 *   - Adding a new key here is safe: it shows up with its default value.
 *   - Renaming/removing a key drops whatever the client saved under the old name.
 *   - Every array needs at least ONE item - it's the template for new items.
 *
 * Text markup the client can use:
 *   *words*      -> the italic accent style used in headings
 *   blank line   -> new paragraph (in long text fields)
 *
 * Image fields inside content ("photo") hold "static:<key>" (a bundled image,
 * see STATIC_IMAGES in media.ts) or an uploaded "/uploads/content/..." URL.
 */

export const DEFAULTS = {
  site: {
    brand: {
      monogram: "WRA",
      wordmark: "Dr. Rodney Andrews",
    },
    contact: {
      email: "info@charlestonmedicine.com",
      phone: "843-913-8558",
      location: "Charleston, South Carolina",
    },
    header: {
      ctaLabel: "Inquire",
      links: [{ label: "CharlestonMedicine.com", url: "https://CharlestonMedicine.com" }],
      mobileLinksHeading: "Elsewhere",
    },
    footer: {
      blurb: "Helping people live with greater clarity, purpose, and performance.",
      ctaLabel: "Inquire About Speaking",
      exploreHeading: "Explore",
      elsewhereHeading: "Elsewhere",
      links: [{ label: "Charleston Medicine", url: "https://CharlestonMedicine.com" }],
      contactHeading: "Contact",
      copyrightName: "Dr. Rodney Andrews",
      bottomRight: "Charleston, South Carolina",
    },
    forms: {
      speakingSubmit: "Submit Inquiry",
      speakingSuccess: "Thank you - your speaking inquiry has been received.",
      eventTypes: ["Keynote", "Panel", "Workshop", "Fireside Chat", "Other"],
      audienceTypes: ["Healthcare", "Business / Leadership", "Community / Wellness", "Other"],
      generalSubmit: "Send Message",
      generalSuccess: "Thank you - your message has been received.",
      mailingSubmit: "Subscribe",
      mailingSuccess: "You're on the list.",
    },
  },

  home: {
    hero: {
      eyebrow: "Speaker · Author · Advanced Provider",
      titleLine1: "Dr. Rodney",
      titleLine2: "Andrews",
      credentials: "DNP, AGNP-BC, PMHNP",
      ctaPrimary: "Inquire About Speaking",
      ctaSecondary: "Speaking Topics",
    },
    intro: {
      body: "Success isn't just about achieving more. It's about making sure what you're building aligns with the life you actually want to live. Dr. Rodney Andrews explores the intersection of psychology, performance, purpose, and personal fulfillment - challenging people to look beyond traditional measures of success and consider not only what they want to achieve, but why they're pursuing it.",
      linkLabel: "Read the full biography",
    },
    pillars: {
      eyebrow: "What I Do",
      title: "Explore the Work",
      items: [
        {
          title: "Speaking",
          body: "Keynote and conference speaker on integrative health, resilience, leadership, and human performance. Built for medical, executive, and lifestyle audiences.",
          link: "/speaking",
          linkLabel: "Explore Speaking",
        },
        {
          title: "Writing",
          body: "The Bespoke Life: Design Your Path, Purpose, and Prosperity. A practical guide to building a life that is authentically yours - not the life you were told to want.",
          link: "/books",
          linkLabel: "About the Book",
        },
        {
          title: "Conversations",
          body: "Success & Sanity - Rodney sitting down with successful people to explore what achievement actually looks like behind the scenes.",
          link: "/podcast",
          linkLabel: "Podcast",
        },
      ],
    },
    speaking: {
      eyebrow: "Speaking",
      title: "Four ways to bring Dr. Andrews to your room.",
      items: [
        { title: "The Psychology of Sustainable Performance", desc: "How people perform at a high level over time." },
        {
          title: "The Mind-Body Connection",
          desc: "How physical and psychological systems interact to influence performance.",
        },
        { title: "Resilience, Burnout & Recovery", desc: "What happens when the demands exceed our ability to recover." },
        { title: "Leadership Under Pressure", desc: "How leaders think, decide and lead when stakes are high." },
      ],
      note: "Each talk is adapted to the room, sourced from current literature, and built to withstand the smartest person in it.",
      ctaLabel: "View All Speaking Topics",
    },
    book: {
      eyebrow: "New Book",
      title: "The Bespoke Life:",
      subtitle: "Design Your Path, Purpose, and Prosperity.",
      body: "The modern self-improvement industry promotes one-size-fits-all solutions for people who need a personalized approach. The Bespoke Life is different. It starts with understanding who you actually are - not who you are told to be.",
      ctaLabel: "About the Book",
    },
    podcast: {
      eyebrow: "The Podcast",
      title: "Success & Sanity with Dr. Rodney Andrews.",
      body: "Candid conversations with successful people about ambition, mental health, motivation, performance, and what achievement looks like behind the scenes.",
      ctaLabel: "Listen to the Podcast",
    },
    philosophy: {
      title: "Excellence. Integrity.\nCompassion. Service.",
      body: "Whether writing the next book, recording a podcast episode, or speaking from the stage, Dr. Andrews remains guided by the principles that have shaped his journey from the beginning: excellence, integrity, compassion, and service.",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Invite Dr. Andrews to your stage.",
      ctaLabel: "Inquire About Speaking",
      speakingEyebrow: "Speaking Inquiries",
      speakingTitle: "For Events",
      generalEyebrow: "General Inquiries",
      generalTitle: "Everything Else",
    },
  },

  about: {
    hero: {
      eyebrow: "About",
      titleLine1: "Dr. Rodney",
      titleLine2: "Andrews.",
      credentials: "DNP · AGNP-BC · PMHNP · Entrepreneur · Author · Speaker",
      body: "A story of vision, discipline, and the relentless pursuit of excellence - from rural North Carolina to the founding of a thriving Charleston medical practice.",
    },
    story: {
      eyebrow: "Biography",
      title: "The long road to *Charleston.*",
      paragraphs: [
        {
          text: "Dr. Rodney Andrews' story is one of vision, discipline, and relentless pursuit of excellence. Raised in the small town of Hillsborough, North Carolina, where hard work was not merely encouraged but expected, he developed an entrepreneurial mindset at an early age. Growing up in a close-knit community, Rodney understood that success would require exceptional effort, unwavering determination, and a willingness to create opportunities where none existed.",
          photo: "",
          caption: "",
          showWholePhoto: false,
        },
        {
          text: "Long before earning professional titles and accolades, Rodney was building businesses. As a young entrepreneur, he began by mowing lawns throughout his community, eventually transforming a modest side venture into a successful lawn care company with employees working under his leadership. Years later, after strategically growing and selling the business, he used the proceeds to purchase a convenience store for his father - a reflection of both his business acumen and deep commitment to family.",
          photo: "static:youngPicture",
          caption: "Family - Hillsborough, NC",
          showWholePhoto: true,
        },
        {
          text: "A pivotal moment in Rodney's journey came with his acceptance to Duke University. While pursuing his education, he simultaneously entered the world of luxury sales, where his natural talent for communication, leadership, and relationship building quickly distinguished him from his peers. Rising from an entry-level position to the top ranks of the organization within months, he became one of the company's highest-performing sales professionals. His success led to responsibilities beyond personal production - he was entrusted with training new sales representatives, developing sales strategies, and mentoring future leaders within the organization.",
          photo: "",
          caption: "",
          showWholePhoto: false,
        },
        {
          text: "Yet despite achieving remarkable professional success, Rodney felt called toward a greater purpose - one centered on service, impact, and improving the lives of others. At the age of 40, while balancing the responsibilities of marriage and raising a teenage son, he made the courageous decision to pursue a career in healthcare. He was accepted into the Medical University of South Carolina, embarking on an entirely new chapter of life.",
          photo: "static:graduationWide",
          caption: "Duke University",
          showWholePhoto: false,
        },
        {
          text: "The journey was demanding. During a period marked by the unprecedented challenges of the COVID-19 pandemic, Rodney navigated rigorous academic requirements, clinical rotations, and long nights of study while remaining devoted to his family. It was a season defined by sacrifice, resilience, and an unwavering belief that meaningful work often requires extraordinary commitment.",
          photo: "",
          caption: "",
          showWholePhoto: false,
        },
        {
          text: "That commitment culminated in the achievement of multiple advanced credentials, earning him the distinction of Dr. Rodney Andrews, DNP, AGNP-BC, PMHNP. Following graduation, he trained under the respected mentorship of Dr. Eric Bolster, gaining extensive experience in a high-volume clinical environment that sharpened both his clinical expertise and operational leadership. There, he developed a comprehensive understanding of patient care while further refining the business instincts that had shaped his career from the beginning.",
          photo: "static:graduationFamily",
          caption: "Medical University of South Carolina",
          showWholePhoto: false,
        },
        {
          text: "Driven by a vision to redefine healthcare through personalized, relationship-centered medicine, Dr. Andrews founded Charleston Medicine and Behavioral Health - a concierge-style practice dedicated to delivering exceptional physical and mental healthcare. The practice quickly exceeded expectations, generating more than $1 million in revenue during its first year of operation and establishing itself as a premier destination for comprehensive, patient-focused care.",
          photo: "",
          caption: "",
          showWholePhoto: false,
        },
        {
          text: "Today, Dr. Andrews continues to practice clinically in Charleston. Beyond clinical practice, he is an author, podcast host, entrepreneur, and sought-after speaker whose insights on healthcare, business, leadership, and personal growth have reached audiences across the United States. Whether writing his next book, recording a podcast episode, or speaking from the stage, he remains guided by the principles that shaped his journey from the beginning: excellence, integrity, compassion, and service.",
          photo: "static:graduationMascot",
          caption: "Commencement",
          showWholePhoto: true,
        },
      ],
    },
    credentials: [
      "DNP",
      "AGNP-BC",
      "PMHNP",
      "Duke University",
      "Medical University of South Carolina",
      "Charleston Medicine and Behavioral Health",
    ],
    closing: {
      eyebrow: "Speaking",
      title: "Book Dr. Andrews to speak.",
      body: "Keynote, conference, and corporate inquiries welcome - adapted to your audience.",
      ctaLabel: "Inquire About Speaking",
    },
  },

  books: {
    hero: {
      eyebrow: "Coming Spring 2027",
      titleLine1: "The Bespoke",
      titleLine2: "Life.",
      subtitle: "Design Your Path, Purpose, and Prosperity.",
      body: "A personalized framework for growth - built on honest self-examination, not generic self-help.",
      ctaLabel: "Get the Book",
    },
    premise: {
      eyebrow: "The Premise",
      title: "Why one-size-fits-all fails.",
      items: [
        {
          title: "The Illusion of the Off-The-Rack Life",
          body: "The modern self-improvement industry often promotes one-size-fits-all solutions for individuals who need a personalized approach. Pursuing society's standards can feel like adopting an identity that was never designed for you, leading to endless efforts to fix what was never authentically yours. True growth begins with understanding and developing the person you are, not the person you are told to be.",
        },
        {
          title: "The Failure of the Generic Solution",
          body: "Most self-help models focus on changing behaviors while ignoring the deeper structures that drive them. The challenge is rarely the symptom itself, but the unexamined life beneath it. Meaningful growth begins when we move past the ego, set aside our excuses, and honestly confront what is truly there.",
        },
        {
          title: "The Promise of the Blueprint",
          body: "This assessment goes beyond surface-level self-improvement by identifying the patterns, beliefs, and behaviors that shape your life. Through honest self-examination, it helps build a personalized, uncompromising foundation for meaningful growth. The objective is not an idealized version of success, but a life rooted in clarity, confidence, and the capacity to meet life's demands with authenticity and purpose.",
        },
      ],
    },
    framework: {
      eyebrow: "The Framework",
      title: "The first four movements.",
      items: [
        { label: "Movement One", title: "Acknowledge Before You Act", body: "Sit with what was revealed, name it without judgment." },
        {
          label: "Movement Two",
          title: "Identify Your Highest Leverage Point",
          body: "Out of the five areas uncovered, which one, if addressed, would relieve the most pressure?",
        },
        {
          label: "Movement Three",
          title: "Define the Next Twenty-Four-Hour Action",
          body: "Identify one specific, concrete, completable action you can finish by this time tomorrow. Big or small, what matters is following through on the commitment to yourself.",
        },
        {
          label: "Movement Four",
          title: "Build the Evidence File",
          body: "Every committed action is evidence you are building a new identity - one where you do what you say. Act first and the identity follows.",
        },
      ],
    },
    purchase: {
      eyebrow: "Order Now",
      title: "Begin the work.",
      cardTitle: "The Bespoke Life",
      cardSubtitle: "Design Your Path, Purpose, and Prosperity",
      cardBody: "The complete framework - a personalized approach to growth rooted in honest self-examination.",
      buyLabel: "Buy the Book",
      buyUrl: "",
    },
  },

  podcast: {
    hero: {
      eyebrow: "The Podcast",
      title: "Success & *Sanity.*",
      subtitle: "with Dr. Rodney Andrews.",
      body: "Candid conversations with successful people about ambition, mental health, motivation, performance, and what achievement looks like behind the scenes.",
    },
    about: {
      eyebrow: "About the Pod",
      title: "I am Dr. Andrews, and I am so glad you are here.",
      body: "Success & Sanity is a conversation about what achievement actually costs - and what it's worth. Each episode, Dr. Andrews sits down with people who have built something real - a business, a career, a reputation - and asks the questions polished interviews tend to skip: what did the pursuit demand of you, what did you get wrong along the way, and what would you tell yourself at the start?\n\nIt's a show for anyone who suspects that success and sanity aren't always on speaking terms, and wants an honest look at how the people who've made it actually hold both together.",
    },
    episodes: {
      eyebrow: "Episodes",
      title: "Coming Soon.",
      body: "New episodes are on the way.",
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: "Join the mailing list.",
      body: "Stay up to date on new episodes, speaking events, book releases, and more.",
    },
  },

  speaking: {
    hero: {
      eyebrow: "Speaking",
      title: "Speaking and *Engagements.*",
      body: "Keynote, corporate, healthcare, and community engagements - booked nationally.",
    },
    approach: {
      eyebrow: "The Approach",
      title: "Lived experience. Practical insight.",
      body: "Dr. Andrews is a dynamic speaker who combines clinical experience, decades of entrepreneurial insight, and a deep understanding of human behavior to deliver presentations that are both engaging and transformative.\n\nKnown for his unique blend of authenticity, humor, and candid perspective, he challenges audiences to think differently, question assumptions, and take meaningful action. Whether speaking on health, longevity, leadership, personal development, or performance, Dr. Andrews offers practical insights and unconventional perspectives that resonate long after the presentation ends.\n\nHis engaging style keeps audiences attentive while providing actionable strategies that inspire growth, elevate performance, and foster lasting change. With expertise spanning medicine, business, and personal development, Dr. Andrews connects with a wide range of audiences, delivering presentations that are thought-provoking, memorable, and immediately applicable to both professional and personal success.",
    },
    audiences: {
      eyebrow: "Who he speaks to",
      title: "Targeted audiences.",
      groups: [
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
      ],
    },
    topics: {
      eyebrow: "Keynote Topics",
      title: "Built for the room.",
      note: "Each talk is adapted to the room, sourced from current literature, and built to withstand the smartest person in it.",
      items: [
        { title: "Success and Sanity", audience: "Executives · Entrepreneurs · High Achievers" },
        { title: "Designing a Purposeful Life", audience: "Community · Wellness · General Audiences" },
        { title: "Leadership and Professional Performance", audience: "Executives · Managers · Professional Teams" },
        { title: "Resilience and Personal Responsibility", audience: "Physicians · First Responders · Executives" },
        { title: "Executive Wellbeing", audience: "C-Suite · Boards · Leadership Teams" },
        { title: "Leverage Your Letters", audience: "Healthcare · Advanced Practice Providers · Clinicians" },
      ],
    },
    booking: {
      eyebrow: "Booking",
      title: "Book Dr. Andrews.",
      body: "Provide your name, email, and a detailed message outlining your speaking engagement request - event location, date, topics of interest, audience type, and any additional context that will help us understand your needs.",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let's *connect.*",
    },
    speaking: {
      eyebrow: "For Events",
      title: "Speaking Inquiries",
      body: "Share the details of your event and we'll respond with availability and next steps.",
    },
    general: {
      eyebrow: "Everything Else",
      title: "General Inquiries",
      body: "Press, partnerships, or simply to say hello - we read every message.",
    },
    elsewhere: {
      eyebrow: "Elsewhere",
      title: "The other doors.",
      tag: "External",
      linkLabel: "Visit Site",
      items: [
        {
          title: "CharlestonMedicine.com",
          desc: "Schedule a patient appointment or learn about our concierge practice on James Island, Charleston, SC.",
          url: "https://CharlestonMedicine.com",
        },
      ],
    },
  },
};

export type Content = typeof DEFAULTS;
