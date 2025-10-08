import { Navbar } from "@/components/Navbar";
import { SponsorScroll } from "@/components/SponsorScroll";
import { MeetingCalendar } from "@/components/MeetingCalendar";
import { CompetitionSchedule } from "@/components/CompetitionSchedule";
import { OutreachCarousel } from "@/components/OutreachCarousel";
import { SponsorsSection } from "@/components/SponsorsSection";
import { TechnicalHeader } from "@/components/TechnicalHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Trophy, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid pt-16">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Team Number Badge */}
            <div className="inline-flex items-center gap-3 border-2 border-team-blue px-6 py-3 animate-fade-in-up">
              <div className="h-2 w-2 bg-team-yellow rounded-full animate-pulse"></div>
              <span className="font-mono text-team-blue font-bold text-lg tracking-wider">
                FTC TEAM 9415
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-engineering-dark animate-slide-in-left stagger-1">
              WRENCH
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold text-engineering-dark animate-slide-in-right stagger-2">
              DRESSING
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up stagger-4">
              <Button 
                size="lg" 
                className="font-mono bg-team-blue hover:bg-team-blue-dark transition-all duration-300 hover:scale-105"
              >
                <Wrench className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-mono border-2 border-team-yellow text-team-yellow-dark hover:bg-team-yellow hover:text-white transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Meet The Team
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Technical Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-team-blue to-transparent"></div>
      </section>

      {/* Sponsor Logos Scroll */}
      <SponsorScroll />

      {/* About Section */}
      <section className="py-24 px-6 bg-card relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blueprint to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 01" title="The Blueprint" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Welcome to the <span className="font-mono text-blueprint font-bold">Wrench Dressing Diner</span>, 
                where innovation is always on the menu. We're FTC Team 9415, serving up engineering excellence 
                one competition at a time.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our team combines precision engineering with creative problem-solving, designing and building 
                robots that compete at the highest levels of FIRST Tech Challenge.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="h-12 w-1 bg-blueprint"></div>
                <p className="font-mono text-sm text-technical-gray">
                  "Precision-engineered solutions, served fresh daily"
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 blueprint-grid opacity-20"></div>
              <Card className="p-8 border-2 border-blueprint relative">
                <div className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-blueprint"></div>
                <div className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-blueprint"></div>
                <div className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-blueprint"></div>
                <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-blueprint"></div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Wrench className="h-8 w-8 text-blueprint flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-mono font-bold text-lg mb-2">Design & Build</h3>
                      <p className="text-muted-foreground">
                        From CAD to competition, every component is engineered for performance
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Trophy className="h-8 w-8 text-blueprint flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-mono font-bold text-lg mb-2">Compete</h3>
                      <p className="text-muted-foreground">
                        Pushing boundaries at regional and championship events
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-blueprint flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-mono font-bold text-lg mb-2">Collaborate</h3>
                      <p className="text-muted-foreground">
                        Building skills, friendships, and the future of STEM
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-background blueprint-grid relative">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 02" title="By The Numbers" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "9415", label: "Team Number", symbol: "#" },
              { number: "100+", label: "Build Hours", symbol: "⏱" },
              { number: "15+", label: "Team Members", symbol: "👥" },
              { number: "∞", label: "Innovation", symbol: "⚡" },
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 border-2 border-blueprint bg-card text-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.symbol}
                </div>
                <div className="font-mono text-3xl font-bold text-blueprint mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </Card>
            ))}
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

export default Index;
