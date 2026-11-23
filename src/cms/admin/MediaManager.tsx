import { useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, EyeOff, RotateCcw, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "../api";
import { composeList, composeSingle, composeVideo } from "../compose";
import type { ServerSlot, SlotDef } from "../types";

const IMAGE_ACCEPT = "image/jpeg,image/png,image/webp,image/gif";
const VIDEO_ACCEPT = "video/mp4,video/webm";
const MAX_IMAGE_MB = 15;
const MAX_VIDEO_MB = 140;
const ACCENT_BTN = "bg-[color:var(--cms-accent)] text-white hover:bg-[color:var(--cms-accent)] hover:brightness-110";

type Props = {
  slots: Record<string, SlotDef>;
  media: Record<string, ServerSlot>;
  refresh: () => Promise<void>;
};

/** Slots that belong on a page's editor (slot group "Home" matches page "Home", "Site-wide" matches "Site-wide & Contact Info"). */
export function slotsForPage(slots: Record<string, SlotDef>, pageLabel: string): [string, SlotDef][] {
  return Object.entries(slots).filter(([, d]) => d.group === pageLabel || pageLabel.startsWith(d.group));
}

export function MediaManager({ slots, media, refresh }: Props) {
  const groups = new Map<string, [string, SlotDef][]>();
  for (const [id, def] of Object.entries(slots)) {
    const g = groups.get(def.group) ?? [];
    g.push([id, def]);
    groups.set(def.group, g);
  }
  return (
    <div className="space-y-12">
      {[...groups.entries()].map(([group, items]) => (
        <section key={group}>
          <h2 className="mb-4 font-serif text-2xl text-navy">{group}</h2>
          <div className="space-y-4">
            {items.map(([id, def]) => (
              <SlotCard key={id} id={id} def={def} server={media[id]} refresh={refresh} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function useUploader(slot: string, kind: "image" | "video", refresh: () => Promise<void>) {
  const [progress, setProgress] = useState<number | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const max = kind === "video" ? MAX_VIDEO_MB : MAX_IMAGE_MB;

  const upload = async (list: FileList | null) => {
    const files = Array.from(list ?? []);
    if (!files.length) return;
    const tooBig = files.filter((f) => f.size > max * 1024 * 1024);
    if (tooBig.length) {
      toast.error(`${tooBig.map((f) => f.name).join(", ")} ${tooBig.length > 1 ? "are" : "is"} over ${max}MB.`);
      return;
    }
    setProgress(0);
    try {
      const r = await api.upload(slot, files, setProgress);
      if (r.errors?.length) r.errors.forEach((e) => toast.error(e));
      if (r.files?.length) toast.success(r.files.length > 1 ? `${r.files.length} files uploaded.` : "Uploaded - it's live now.");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setProgress(null);
      if (input.current) input.current.value = "";
      await refresh();
    }
  };

  const picker = (multiple: boolean) => (
    <input
      ref={input}
      type="file"
      multiple={multiple}
      accept={kind === "video" ? VIDEO_ACCEPT : IMAGE_ACCEPT}
      className="hidden"
      onChange={(e) => upload(e.target.files)}
    />
  );
  return { progress, open: () => input.current?.click(), picker, upload };
}

export function SlotCard({ id, def, server, refresh }: { id: string; def: SlotDef; server?: ServerSlot; refresh: () => Promise<void> }) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-serif text-xl text-navy">{def.label}</h3>
        {def.hint && <p className="mt-1 text-xs text-navy/55">{def.hint}</p>}
      </div>
      {def.type === "list" ? (
        <ListSlot id={id} def={def} server={server} refresh={refresh} />
      ) : (
        <SingleSlot id={id} def={def} server={server} refresh={refresh} />
      )}
    </div>
  );
}

function DropZone({
  onFiles,
  children,
  disabled,
}: {
  onFiles: (f: FileList | null) => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const [over, setOver] = useState(false);
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        if (!disabled) onFiles(e.dataTransfer.files);
      }}
      className={`rounded-xl border-2 border-dashed p-4 transition-colors ${over ? "border-[color:var(--cms-accent)] bg-[color:var(--cms-accent-soft)]" : "border-navy/15 bg-[#f7f8fa]"}`}
    >
      {children}
    </div>
  );
}

function SingleSlot({
  id,
  def,
  server,
  refresh,
}: {
  id: string;
  def: Extract<SlotDef, { type: "single" | "video" }>;
  server?: ServerSlot;
  refresh: () => Promise<void>;
}) {
  const isVideo = def.type === "video";
  const up = useUploader(id, isVideo ? "video" : "image", refresh);
  const [busy, setBusy] = useState(false);
  const uploads = server?.uploads ?? [];
  const uploaded = uploads.length > 0;

  let previewEl: React.ReactNode;
  if (def.type === "video") {
    const v = composeVideo(def, server);
    const src = v.mp4 ?? v.webm;
    previewEl = src ? (
      <video key={src} src={src} muted loop autoPlay playsInline className="aspect-video w-full rounded-lg bg-navy object-cover" />
    ) : null;
  } else {
    const item = composeSingle(def, server);
    previewEl = <img src={item.url} alt="" className="max-h-64 w-full rounded-lg bg-cream object-contain" />;
  }

  const revert = async () => {
    if (!window.confirm("Remove your upload and go back to the original?")) return;
    setBusy(true);
    try {
      for (const u of uploads) await api.deleteMedia(u.url);
      toast.success("Back to the original.");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
      await refresh();
    }
  };

  return (
    <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        {previewEl}
        <p className="mt-2 text-xs text-navy/55">{uploaded ? `Your upload: ${uploads[uploads.length - 1].name}` : "Original (built into the site)"}</p>
      </div>
      <DropZone onFiles={up.upload} disabled={up.progress !== null}>
        {up.picker(false)}
        <div className="flex h-full flex-col items-start justify-center gap-3">
          <p className="text-sm text-navy/70">Drag a {isVideo ? "video" : "photo"} here, or</p>
          <div className="flex flex-wrap gap-2">
            <Button type="button" onClick={up.open} disabled={up.progress !== null || busy} className={ACCENT_BTN}>
              <Upload className="size-4" />
              {up.progress !== null ? `Uploading ${Math.round(up.progress * 100)}%` : `Replace ${isVideo ? "video" : "photo"}`}
            </Button>
            {uploaded && (
              <Button type="button" variant="outline" onClick={revert} disabled={busy || up.progress !== null}>
                <RotateCcw className="size-4" /> Use original
              </Button>
            )}
          </div>
          {up.progress !== null && <ProgressBar value={up.progress} />}
        </div>
      </DropZone>
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-navy/10">
      <div className="h-full bg-[color:var(--cms-accent)] transition-[width]" style={{ width: `${Math.round(value * 100)}%` }} />
    </div>
  );
}

function ListSlot({
  id,
  def,
  server,
  refresh,
}: {
  id: string;
  def: Extract<SlotDef, { type: "list" }>;
  server?: ServerSlot;
  refresh: () => Promise<void>;
}) {
  const up = useUploader(id, "image", refresh);
  const [busy, setBusy] = useState(false);
  const items = composeList(def, server);
  const hidden = server?.hidden ?? [];
  const hiddenStatics = def.fallback.filter((f) => hidden.includes(`static_${f.key}`));

  const save = async (order: string[], nextHidden: string[], msg?: string) => {
    setBusy(true);
    try {
      await api.reorder(id, order, nextHidden);
      if (msg) toast.success(msg);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
      await refresh();
    }
  };

  const ids = items.map((m) => m.id);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= ids.length) return;
    const next = [...ids];
    [next[i], next[j]] = [next[j], next[i]];
    save(next, hidden);
  };
  const removeItem = async (i: number) => {
    const m = items[i];
    if (m.source === "static") {
      if (!window.confirm("Hide this original photo? You can bring it back any time.")) return;
      save(
        ids.filter((x) => x !== m.id),
        [...hidden, m.id],
        "Photo hidden.",
      );
      return;
    }
    if (!window.confirm("Delete this photo permanently?")) return;
    setBusy(true);
    try {
      await api.deleteMedia(m.url);
      toast.success("Photo deleted.");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
      await refresh();
    }
  };
  const restore = (key: string) => {
    const sid = `static_${key}`;
    save(
      [...ids, sid],
      hidden.filter((h) => h !== sid),
      "Photo restored (added at the end).",
    );
  };

  return (
    <div className="space-y-4">
      {items.length === 0 && <p className="text-sm text-navy/60">No photos - this section is hidden on the site until you add one.</p>}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m, i) => (
          <figure key={m.id} className="overflow-hidden rounded-xl border border-navy/10 bg-cream">
            <div className="relative aspect-[4/3]">
              <img src={m.url} alt="" className="size-full object-cover" loading="lazy" />
              <span className="absolute left-2 top-2 rounded-full bg-navy/80 px-2 py-0.5 text-[11px] text-white">{i + 1}</span>
            </div>
            <figcaption className="flex items-center justify-between gap-1 p-1.5">
              <div className="flex">
                <Button type="button" variant="ghost" size="icon" title="Move earlier" disabled={busy || i === 0} onClick={() => move(i, -1)}>
                  <ArrowLeft className="size-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  title="Move later"
                  disabled={busy || i === items.length - 1}
                  onClick={() => move(i, 1)}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={busy}
                title={m.source === "static" ? "Hide this original" : "Delete"}
                className="text-red-600 hover:text-red-700"
                onClick={() => removeItem(i)}
              >
                {m.source === "static" ? <EyeOff className="size-4" /> : <Trash2 className="size-4" />}
              </Button>
            </figcaption>
          </figure>
        ))}
      </div>

      <DropZone onFiles={up.upload} disabled={up.progress !== null}>
        {up.picker(true)}
        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" onClick={up.open} disabled={up.progress !== null || busy} className={ACCENT_BTN}>
            <Upload className="size-4" />
            {up.progress !== null ? `Uploading ${Math.round(up.progress * 100)}%` : "Add photos"}
          </Button>
          <span className="text-sm text-navy/60">or drag photos here (you can pick several at once)</span>
        </div>
        {up.progress !== null && (
          <div className="mt-3">
            <ProgressBar value={up.progress} />
          </div>
        )}
      </DropZone>

      {hiddenStatics.length > 0 && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.14em] text-navy/50">Hidden originals</p>
          <div className="flex flex-wrap gap-3">
            {hiddenStatics.map((f) => (
              <div key={f.key} className="w-32 overflow-hidden rounded-lg border border-navy/10 bg-cream opacity-80">
                <img src={f.url} alt="" className="aspect-[4/3] w-full object-cover grayscale" />
                <Button type="button" variant="ghost" size="sm" className="w-full" disabled={busy} onClick={() => restore(f.key)}>
                  <RotateCcw className="size-3.5" /> Restore
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
