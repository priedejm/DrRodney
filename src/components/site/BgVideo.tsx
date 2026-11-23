/**
 * Muted looping background video. Keyed on its sources so swapping the video
 * in the admin (mp4 <-> webm) reloads the element instead of keeping the old one.
 */
export function BgVideo({
  src,
  className,
  label,
}: {
  src: { webm?: string; mp4?: string };
  className?: string;
  label: string;
}) {
  if (!src.webm && !src.mp4) return null;
  return (
    <video
      key={`${src.webm ?? ""}|${src.mp4 ?? ""}`}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      aria-label={label}
    >
      {src.webm && <source src={src.webm} type="video/webm" />}
      {src.mp4 && <source src={src.mp4} type="video/mp4" />}
    </video>
  );
}
