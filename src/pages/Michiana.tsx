import { Navbar } from "@/components/Navbar";
import { TechnicalHeader } from "@/components/TechnicalHeader";
import { Card } from "@/components/ui/card";
import { MichianaCarousel } from "@/components/MichianaCarousel";
import { Trophy, Calendar, MapPin, Award, Users, Building2 } from "lucide-react";

const Michiana = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-engineering-dark mb-4 font-mono">
              Michiana Premier Event
            </h1>
            <p className="text-xl text-muted-foreground">
              Premier FTC competition in the Michiana region
            </p>
          </div>
        </div>
      </section>

      {/* About Michiana Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 01" title="About Michiana" />
          
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                The <span className="font-mono text-team-blue font-bold">Michiana Premier Event</span> is a premier FIRST Tech Challenge 
                competition held in the Michiana region, a cross-state area encompassing parts of northern Indiana and southwestern Michigan, 
                centered around South Bend, Indiana.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                The name "Michiana" is a blend of "Michigan" and "Indiana," reflecting the region's unique cross-state identity. 
                This premier event brings together top FTC teams from across the region to compete at the highest level.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <div className="h-12 w-1 bg-team-yellow mt-1"></div>
                <div>
                  <p className="font-mono text-sm font-bold text-team-blue mb-1">REGION</p>
                  <p className="text-sm text-foreground">
                    The Michiana region includes counties from both Indiana (St. Joseph, Elkhart, LaPorte, Marshall, Starke) 
                    and Michigan (Berrien, Cass), creating a vibrant cross-state robotics community.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8 border-2 border-team-blue">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">Major Cities</h3>
                    <p className="text-muted-foreground">
                      South Bend, Elkhart, Mishawaka (Indiana), and Niles (Michigan)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-team-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">Education Hub</h3>
                    <p className="text-muted-foreground">
                      Home to University of Notre Dame, Indiana University South Bend, and Saint Mary's College
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
                  <h3 className="font-mono font-bold text-lg mb-2">Event Type</h3>
                  <p className="text-muted-foreground">
                    Premier FTC competition featuring top teams from the Michiana region and beyond
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
                    Michiana region, spanning northern Indiana and southwestern Michigan
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-team-blue">
              <div className="flex items-start gap-4">
                <Trophy className="h-8 w-8 text-team-blue flex-shrink-0" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Our Achievement</h3>
                  <p className="text-muted-foreground">
                    Design Award 2nd Place (Thomson Division)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Details Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 03" title="Competition Experience" />
          
          <div className="mt-12">
            <Card className="p-8 border-2 border-team-blue">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">2024 Michiana Premier Event</h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Team 9415 competed in the <span className="font-mono text-team-blue font-bold">Thomson Division</span> at the 
                      2024 Michiana Premier Event, earning <span className="font-mono text-team-blue font-bold">Design Award 2nd Place</span> 
                      for our innovative robot design and engineering excellence.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      The Michiana Premier Event is one of the most competitive FTC events in the region, bringing together 
                      top-performing teams to showcase their engineering skills, strategic gameplay, and robot performance. 
                      Competing in this premier event provided valuable experience and recognition for our team's hard work and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 04" title="Event Gallery" />
          
          <div className="mt-12">
            <MichianaCarousel />
          </div>
        </div>
      </section>

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

export default Michiana;

