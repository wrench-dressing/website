import type { CarouselPhoto } from "@/components/PhotoCarousel";

// Drop photos into src/assets/worlds/ and they show up in the Worlds gallery,
// sorted by filename. Nothing else to change.
const imageModules = import.meta.glob("@/assets/worlds/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const worldsPhotos: CarouselPhoto[] = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, url]) => {
    const filename = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "World Championship";
    return {
      url: url as string,
      alt: filename.replace(/-/g, " ").replace(/_/g, " "),
    };
  });
