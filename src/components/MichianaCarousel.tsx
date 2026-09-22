import { PhotoCarousel, type CarouselPhoto } from "@/components/PhotoCarousel";

export const MichianaCarousel = () => {
  // Dynamically import all images from the michiana folder
  const imageModules = import.meta.glob("@/assets/michiana/*.{jpg,jpeg,png,webp,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  // Convert the imported modules to an array of image objects and sort by filename
  const michianaImages: CarouselPhoto[] = Object.entries(imageModules)
    .map(([path, url]) => {
      const filename = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Michiana Event";
      return {
        url: url as string,
        alt: filename.replace(/-/g, " ").replace(/_/g, " "),
        filename: filename,
      };
    })
    .sort((a, b) => {
      // Extract numbers from filenames for numeric sorting
      const numA = parseInt(a.filename.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.filename.match(/\d+/)?.[0] || "0");

      // If both have numbers, sort numerically
      if (numA !== 0 && numB !== 0) {
        return numA - numB;
      }

      // If only one has a number, prioritize it
      if (numA !== 0) return -1;
      if (numB !== 0) return 1;

      // Otherwise, sort alphabetically
      return a.filename.localeCompare(b.filename);
    });

  // If no images found, return null to avoid rendering empty section
  if (michianaImages.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Highlights from our participation at the Michiana Premier Event, showcasing our robot
          and team collaboration.
        </p>
      </div>

      <PhotoCarousel photos={michianaImages} />
    </div>
  );
};
