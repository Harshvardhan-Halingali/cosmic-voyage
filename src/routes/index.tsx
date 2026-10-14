import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORBITAL — Beyond the known" },
      { name: "description", content: "An immersive cosmic expedition through orbit, warp drive, and the event horizon. Made for the curious." },
      { property: "og:title", content: "ORBITAL — Beyond the known" },
      { property: "og:description", content: "Leave the familiar behind. Journey through an interactive deep-space universe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe className="orbital-experience" src="/experience.html" title="ORBITAL — Interactive deep-space expedition" allow="autoplay; fullscreen" allowFullScreen />;
}
