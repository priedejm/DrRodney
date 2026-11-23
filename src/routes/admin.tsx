import { createFileRoute } from "@tanstack/react-router";
import { AdminApp, type AdminConfig } from "@/cms/admin/AdminApp";
import { resolveImage } from "@/cms/SiteData";
import { DEFAULTS } from "@/content/defaults";
import { MEDIA_SLOTS } from "@/content/media";
import { LABELS } from "@/content/labels";

const CONFIG: AdminConfig = {
  siteName: "Dr. Rodney Andrews",
  defaults: DEFAULTS as unknown as Record<string, unknown>,
  labels: LABELS,
  slots: MEDIA_SLOTS,
  resolveImage,
  accent: "var(--color-forest)",
  heroSlot: "home-speaker-photo",
};

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Site Admin | Dr. Rodney Andrews" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: () => <AdminApp config={CONFIG} />,
});
