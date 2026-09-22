import { Navbar } from "@/components/Navbar";
import { TechnicalHeader } from "@/components/TechnicalHeader";
import { Card } from "@/components/ui/card";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { worldsPhotos } from "@/data/worldsPhotos";
import { Trophy, Calendar, MapPin, Award, Users, Globe } from "lucide-react";

const Worlds = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-engineering-dark mb-4 font-mono">
              FIRST World Championship
            </h1>
            <p className="text-xl text-muted-foreground">
              Houston, Texas — the 2025-26 DECODE season finale
            </p>
          </div>
        </div>
      </section>

      {/* About Worlds Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 01" title="About Worlds" />

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                The <span className="font-mono text-team-blue font-bold">FIRST Championship</span> is where the FIRST Tech
                Challenge season ends. Teams that advance out of their state, regional, and national championships meet in
                Houston for four days of matches at the George R. Brown Convention Center.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                For the 2025-26 DECODE season, 342 FTC teams were split across six divisions of 57 teams each — Edison,
                Franklin, Goodall, Jackson, Lovelace, and Ross. Each division plays its own qualification matches and
                playoffs, and the division winners meet on the final day.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <div className="h-12 w-1 bg-team-yellow mt-1"></div>
                <div>
                  <p className="font-mono text-sm font-bold text-team-blue mb-1">OUR DIVISION</p>
                  <p className="text-sm text-foreground">
                    9415 played the Jackson Division, one of six at the 2026 Championship, against 56 other teams from
                    across the United States and around the world.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8 border-2 border-team-blue">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">The Field</h3>
                    <p className="text-muted-foreground">
                      342 teams across six divisions, drawn from championships worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-team-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">Alongside FRC and FLL</h3>
                    <p className="text-muted-foreground">
                      FIRST Tech Challenge shares the Championship with the other FIRST programs, filling the whole
                      convention center
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 02" title="Event Information" />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-team-blue">
              <div className="flex items-start gap-4">
                <Calendar className="h-8 w-8 text-team-blue flex-shrink-0" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Dates</h3>
                  <p className="text-muted-foreground">
                    April 29 - May 2, 2026
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-team-blue">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-team-yellow flex-shrink-0" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    George R. Brown Convention Center, Houston, Texas
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-team-blue">
              <div className="flex items-start gap-4">
                <Trophy className="h-8 w-8 text-team-blue flex-shrink-0" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Our Result</h3>
                  <p className="text-muted-foreground">
                    23rd of 57 in the Jackson Division, 5-5 across 10 qualification matches
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Got There Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 03" title="The Road to Houston" />

          <div className="mt-12">
            <Card className="p-8 border-2 border-team-blue">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">Minnesota State Championship</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Houston came out of a strong DECODE season. At the{" "}
                      <span className="font-mono text-team-blue font-bold">Minnesota FTC State Championship</span> at
                      Burnsville High School in February, 9415 went{" "}
                      <span className="font-mono text-team-blue font-bold">8-0</span> to finish first in the Galaxy
                      Division, captained the winning alliance in both the division and the overall championship, and
                      took the Control Award.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      That followed a Winning Alliance and Think Award at the Prior Lake qualifier, the Innovate Award
                      and a finalist alliance at Otsego, and an undefeated 6-0 run at the Southwest Minnesota Scrimmage
                      back in October.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Trophy className="h-8 w-8 text-team-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">In the Jackson Division</h3>
                    <p className="text-foreground leading-relaxed">
                      Ten qualification matches in Houston ended 5-5, ranking 23rd out of 57 teams in the division.
                      Worlds is the deepest field in the program, and every match there is a measuring stick for what
                      we build next season.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - only when there are photos to show */}
      {worldsPhotos.length > 0 && (
        <section className="py-24 px-6 bg-card">
          <div className="container mx-auto max-w-6xl">
            <TechnicalHeader label="SECTION 04" title="Houston Gallery" />

            <div className="mt-12">
              <PhotoCarousel photos={worldsPhotos} />
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t-2 border-team-blue bg-background">
        <div className="container mx-auto text-center">
          <p className="font-mono text-sm text-technical-gray">
            © 2024 Wrench Dressing Diner | FTC Team 9415
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Worlds;
