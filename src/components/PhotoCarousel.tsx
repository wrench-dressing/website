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

export interface CarouselPhoto {
  url: string;
  alt: string;
  caption?: string;
}

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

export const PhotoCarousel = ({ photos }: { photos: CarouselPhoto[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  // No photos yet, so render nothing rather than an empty frame
  if (photos.length === 0) {
    return null;
  }

  return (
    <div>
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
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-2 border-team-blue">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-[400px] object-cover"
                  />
                  {photo.caption && (
                    <div className="p-4 bg-card">
                      <p className="text-center font-mono text-sm text-muted-foreground">
                        {photo.caption}
                      </p>
                    </div>
                  )}
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
