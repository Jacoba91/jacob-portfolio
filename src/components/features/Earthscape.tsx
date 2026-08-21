import { useTheme } from "../../hooks/useTheme";

// Light-mode counterpart to the Starfield: "back on earth." A still of a golf
// course (Jacob's own photo from the internship, bundled locally, no external
// asset). A warm bone wash keeps it recessive so cards and text stay readable.
const golfFairway = `${import.meta.env.BASE_URL}backgrounds/golf-fairway.jpg`;

export function Earthscape() {
  const { theme } = useTheme();

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 0,
        opacity: theme === "light" ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
      aria-hidden
    >
      <img
        src={golfFairway}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 45%" }}
      />
      {/* Warm bone wash, heavier at top (under the navbar) and bottom, lighter
          through the middle so the fairway vista still reads. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(249,246,238,0.62) 0%, rgba(249,246,238,0.34) 24%, rgba(249,246,238,0.30) 64%, rgba(249,246,238,0.52) 100%)",
        }}
      />
      {/* Soft vignette to settle the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 42%, rgba(249,246,238,0) 55%, rgba(233,226,204,0.5) 100%)",
        }}
      />
    </div>
  );
}
