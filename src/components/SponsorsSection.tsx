import { Card } from "@/components/ui/card";

export const SponsorsSection = () => {
  // Placeholder sponsors - replace with real sponsor info
  const sponsors = [
    {
      name: "Tech Corp",
      tier: "Platinum",
      logo: "https://via.placeholder.com/200x100/217B9D/FFFFFF?text=Tech+Corp",
      description: "Leading provider of innovative technology solutions, supporting STEM education.",
      website: "https://example.com",
    },
    {
      name: "Engineering Co",
      tier: "Gold",
      logo: "https://via.placeholder.com/200x100/FCC419/000000?text=Engineering+Co",
      description: "Dedicated to advancing engineering excellence in our community.",
      website: "https://example.com",
    },
    {
      name: "Innovation Labs",
      tier: "Silver",
      logo: "https://via.placeholder.com/200x100/217B9D/FFFFFF?text=Innovation+Labs",
      description: "Fostering creativity and innovation in the next generation of makers.",
      website: "https://example.com",
    },
  ];

  const tierColors = {
    Platinum: "border-team-blue bg-team-blue/5",
    Gold: "border-team-yellow bg-team-yellow/5",
    Silver: "border-technical-gray bg-technical-gray/5",
  };

  return (
    <section id="sponsors" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-sm text-team-blue mb-2 tracking-wider">SECTION 06</h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">Our Sponsors</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're grateful for the generous support of our sponsors who make our robotics journey possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className={`p-6 border-2 ${tierColors[sponsor.tier as keyof typeof tierColors]} hover:scale-105 transition-all duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-foreground text-background text-xs font-mono rounded uppercase">
                    {sponsor.tier}
                  </span>
                </div>
                
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-24 object-contain"
                  />
                </a>

                <div>
                  <h4 className="font-bold text-lg text-foreground mb-2">{sponsor.name}</h4>
                  <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
