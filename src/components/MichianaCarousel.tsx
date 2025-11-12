import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Autoplay component
const Autoplay = ({ api, isPaused }: { api: CarouselApi; isPaused: boolean }) => {
  useEffect(() => {
    if (!api) return;

    let autoplayInterval: NodeJS.Timeout;

    if (!isPaused) {
      autoplayInterval = setInterval(() => {
        api.scrollNext();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  }, [api, isPaused]);

  return null;
};

export const MichianaCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);
  // Dynamically import all images from the michiana folder
  const imageModules = import.meta.glob("@/assets/michiana/*.{jpg,jpeg,png,webp,svg}", { 
    eager: true, 
    query: "?url", 
    import: "default" 
  });
  
  // Convert the imported modules to an array of image objects and sort by filename
  const michianaImages = Object.entries(imageModules)
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

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Carousel 
          className="w-full max-w-4xl mx-auto"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {michianaImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-2 border-team-blue">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2 border-team-blue" />
          <CarouselNext className="border-2 border-team-blue" />
        </Carousel>
      </div>
      
      {/* Autoplay effect */}
      {api && (
        <Autoplay api={api} isPaused={isHovered} />
      )}
    </div>
  );
};

