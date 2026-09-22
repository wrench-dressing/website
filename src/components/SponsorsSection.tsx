import { Card } from "@/components/ui/card";
import { sponsors, tierColors, tierOrder } from "@/data/sponsors";

export const SponsorsSection = () => {
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

        {tierOrder.map((tier) => {
          const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);

          if (tierSponsors.length === 0) {
            return null;
          }

          return (
            <div key={tier} className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-mono">
                {tier} Sponsors
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tierSponsors.map((sponsor, index) => (
                  <Card
                    key={index}
                    className={`p-6 border-2 ${tierColors[sponsor.tier]} hover:scale-105 transition-all duration-300`}
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
                        <p className="text-sm text-muted-foreground mb-3">{sponsor.description}</p>
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm text-team-blue hover:text-team-blue-dark transition-colors"
                        >
                          Visit website →
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
