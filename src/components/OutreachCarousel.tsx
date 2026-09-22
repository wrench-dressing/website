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
import { TechnicalHeader } from "@/components/TechnicalHeader";
import outreachCaptions from "@/assets/outreach/outreach-captions.json";

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

type OutreachCaption = { title: string; caption: string };

const captions = outreachCaptions as Record<string, OutreachCaption>;

// Caption keys and filenames are matched case-insensitively, with - and _ treated the same
const normalize = (value: string) => value.toLowerCase().replace(/-/g, "_");

export const OutreachCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  // Dynamically import all images from the outreach folder
  const imageModules = import.meta.glob("@/assets/outreach/*.{jpg,jpeg,png,webp,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const imagesByKey = new Map<string, { url: string; filename: string }>();
  Object.entries(imageModules).forEach(([path, url]) => {
    const filename = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Outreach Event";
    imagesByKey.set(normalize(filename), { url: url as string, filename });
  });

  const prettify = (filename: string) => filename.replace(/-/g, " ").replace(/_/g, " ");

  // Captions drive the order, so the carousel follows outreach-captions.json
  const outreachImages = Object.keys(captions)
    .map((key) => {
      const image = imagesByKey.get(normalize(key));
      if (!image) return null;

      return {
        url: image.url,
        alt: prettify(image.filename),
        caption: captions[key]?.caption || prettify(image.filename),
      };
    })
    .filter((image) => image !== null);

  // Any image without a caption entry still gets shown, using its filename
  imagesByKey.forEach((image, key) => {
    if (!Object.keys(captions).some((captionKey) => normalize(captionKey) === key)) {
      outreachImages.push({
        url: image.url,
        alt: prettify(image.filename),
        caption: prettify(image.filename),
      });
    }
  });

  if (outreachImages.length === 0) {
    return (
      <section id="outreach" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 05" title="Community Outreach" />
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Outreach images coming soon. Add images to{" "}
              <code className="font-mono text-sm bg-card px-2 py-1 rounded">src/assets/outreach/</code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="outreach" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <TechnicalHeader label="SECTION 05" title="Community Outreach" />

        <div className="text-center mb-12 mt-8">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about inspiring the next generation of engineers and innovators.
            Through workshops, demonstrations, and mentoring programs, we share our love for
            robotics and STEM with our community.
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
              {outreachImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-2 border-team-blue">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="p-4 bg-card">
                      <p className="text-center font-mono text-sm text-muted-foreground">
                        {image.caption}
                      </p>
                    </div>
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
    </section>
  );
};
