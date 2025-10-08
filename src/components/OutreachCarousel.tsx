import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

export const OutreachCarousel = () => {
  // Placeholder images - replace with real outreach photos
  const outreachImages = [
    { url: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800", alt: "Community STEM Workshop" },
    { url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800", alt: "School Robotics Demo" },
    { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800", alt: "Mentoring Session" },
    { url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800", alt: "Public Exhibition" },
  ];

  return (
    <section id="outreach" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-sm text-team-blue mb-2 tracking-wider">SECTION 05</h2>
          <h3 className="text-4xl font-bold text-foreground mb-6">Community Outreach</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about inspiring the next generation of engineers and innovators. 
            Through workshops, demonstrations, and mentoring programs, we share our love for 
            robotics and STEM with our community.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
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
                      {image.alt}
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
    </section>
  );
};
