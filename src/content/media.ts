/**
 * Every swappable image / video on the site.
 *
 * !! KEEP IN SYNC with public/api/_slots.php - the server only accepts uploads
 * !! for slot ids listed there (that list is the security allow-list).
 *
 * Types:
 *   single - one image; an upload replaces the bundled original
 *   list   - a gallery; client can add, delete, hide originals and reorder
 *   video  - one background video (mp4 or webm); an upload replaces the original
 *
 * Photos that belong to a text record (the About page story photos) are NOT
 * slots - they live in the content itself as "static:<key>" or an
 * "/uploads/content/..." URL. STATIC_IMAGES below maps those keys.
 */
import type { SlotDef } from "@/cms/types";

import heroVideo from "@/assets/heroVideo.mp4";
import farAngle from "@/assets/farAngle.mp4";
import podcastHeadshot from "@/assets/podcastHeadshot.webp";
import speakerPhoto from "@/assets/speakerPhoto.webp";
import graduationClose from "@/assets/graudationClose.webp";

import youngPicture from "@/assets/youngPicture.jpg";
import graduationWide from "@/assets/graduationWide.webp";
import graduationFamily from "@/assets/graduationFamily.webp";
import graduationMascot from "@/assets/graduationMascot.jpg";

/** Bundled images referenced from content as "static:<key>". */
export const STATIC_IMAGES: Record<string, string> = {
  youngPicture,
  graduationWide,
  graduationFamily,
  graduationMascot,
};

const PHOTO_HINT = "JPG, PNG or WebP. Shown in black & white on the site.";
const PORTRAIT_HINT = "Portrait (taller than wide) photos work best. Shown in black & white on the site.";
const VIDEO_HINT = "MP4 or WebM, muted background loop. Keep it short (10-30s) and under ~40MB so it loads fast.";

export const MEDIA_SLOTS = {
  // Home
  "home-hero-video": {
    group: "Home",
    type: "video",
    label: "Top-of-page background video",
    hint: VIDEO_HINT,
    fallback: { mp4: heroVideo },
  },
  "home-podcast-photo": {
    group: "Home",
    type: "single",
    label: "Podcast section photo",
    hint: PORTRAIT_HINT,
    fallback: podcastHeadshot,
  },
  "home-speaker-photo": {
    group: "Home",
    type: "single",
    label: "Wide speaking photo (between Podcast and the values banner)",
    hint: "Landscape photos around 2000px wide work best. Shown darkened and in black & white.",
    fallback: speakerPhoto,
  },

  // About
  "about-hero-photo": {
    group: "About",
    type: "single",
    label: "Portrait at the top of the page",
    hint: PORTRAIT_HINT + " The photos inside the biography are edited with each paragraph under Text & Content.",
    fallback: graduationClose,
  },

  // Podcast
  "podcast-hero-photo": {
    group: "Podcast",
    type: "single",
    label: "Portrait at the top of the page",
    hint: PORTRAIT_HINT,
    fallback: podcastHeadshot,
  },

  // Speaking
  "speaking-hero-video": {
    group: "Speaking",
    type: "video",
    label: "Top-of-page background video",
    hint: VIDEO_HINT,
    fallback: { mp4: farAngle },
  },
  "speaking-booking-photo": {
    group: "Speaking",
    type: "single",
    label: "Photo beside the booking form",
    hint: PHOTO_HINT,
    fallback: speakerPhoto,
  },
} satisfies Record<string, SlotDef>;

export type MediaSlotId = keyof typeof MEDIA_SLOTS;
