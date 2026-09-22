import { Navbar } from "@/components/Navbar";
import { SponsorScroll } from "@/components/SponsorScroll";
import { MeetingCalendar } from "@/components/MeetingCalendar";
import { CompetitionSchedule } from "@/components/CompetitionSchedule";
import { OutreachCarousel } from "@/components/OutreachCarousel";
import { SponsorsSection } from "@/components/SponsorsSection";
import { TechnicalHeader } from "@/components/TechnicalHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Trophy, Users, Award, Star, Calendar, Target, Rocket } from "lucide-react";

const Index = () => {
  const stats = [
    { number: "9415", label: "Team Number", icon: null },
    { number: "12", label: "Years Experience", icon: Calendar },
    { number: "34", label: "Official Events", icon: Target },
    { number: "2014", label: "Rookie Year", icon: Rocket },
  ];

  const awards = [
    { year: "2025", award: "Winning Alliance - Captain", event: "Minnesota FTC State Championship", icon: Trophy, color: "text-team-yellow" },
    { year: "2025", award: "Galaxy Division Winning Alliance - Captain", event: "Minnesota FTC State Championship", icon: Trophy, color: "text-team-yellow" },
    { year: "2025", award: "Control Award", event: "Minnesota FTC State Championship", icon: Award, color: "text-team-blue" },
    { year: "2025", award: "Innovate Award", event: "MN FTC Otsego", icon: Award, color: "text-team-blue" },
    { year: "2025", award: "Finalist Alliance - 1st Team Selected", event: "MN FTC Otsego", icon: Trophy, color: "text-team-blue" },
    { year: "2025", award: "Think Award", event: "MN FTC Prior Lake", icon: Star, color: "text-team-blue" },
    { year: "2025", award: "Winning Alliance - Captain", event: "MN FTC Prior Lake", icon: Trophy, color: "text-team-yellow" },
    { year: "2025", award: "Winning Alliance - Captain", event: "Southwest Minnesota Scrimmage", icon: Trophy, color: "text-team-yellow" },
    { year: "2024", award: "Inspire Award", event: "MN FTC Prior Lake", icon: Star, color: "text-team-blue" },
    { year: "2024", award: "Winning Alliance - Captain", event: "MN FTC Burnsville", icon: Trophy, color: "text-team-yellow" },
    { year: "2024", award: "Innovate Award 2nd Place", event: "Minnesota FTC State Championship", icon: Award, color: "text-team-blue" },
    { year: "2023", award: "Inspire Award", event: "MN FTC Marshall", icon: Star, color: "text-team-blue" },
    { year: "2023", award: "Innovate Award", event: "MN FTC Maple Grove", icon: Award, color: "text-team-blue" },
    { year: "2022", award: "Inspire Award", event: "MN FTC Burnsville", icon: Star, color: "text-team-blue" },
    { year: "2022", award: "Design Award", event: "Minnesota FTC State Championship", icon: Award, color: "text-team-blue" },
    { year: "2022", award: "Winning Alliance - Captain", event: "Minnesota FTC State Championship", icon: Trophy, color: "text-team-yellow" },
    { year: "2021", award: "Inspire Award", event: "MN Maple Grove", icon: Star, color: "text-team-blue" },
    { year: "2021", award: "Winning Alliance - Captain", event: "MN Maple Grove", icon: Trophy, color: "text-team-yellow" },
    { year: "2021", award: "Control Award", event: "Minnesota State Championship", icon: Award, color: "text-team-blue" },
    { year: "2020", award: "Top Ranked", event: "MN FTC Qualifier #3", icon: Star, color: "text-team-blue" },
    { year: "2020", award: "Innovate Award", event: "MN FTC Qualifier #1", icon: Award, color: "text-team-blue" },
    { year: "2019", award: "Winning Alliance - Captain", event: "MN FTC Eagan Qualifier", icon: Trophy, color: "text-team-yellow" },
    { year: "2019", award: "Control Award", event: "MN FTC Eagan Qualifier", icon: Award, color: "text-team-blue" },
  ];

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
      <section id="about" className="py-24 px-6 bg-card relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-team-blue to-transparent"></div>

        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 01" title="About Us" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                9415 Wrench Dressing is currently one of two FTC teams at{" "}
                <span className="font-mono text-team-blue font-bold">Chanhassen High School</span>. With{" "}
                <span className="font-mono text-team-blue font-bold">12 years of experience</span>, we are
                the most established team at CNHS.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our team combines precision engineering with creative problem-solving, designing and building
                robots that compete at the highest levels of FIRST Tech Challenge. We have qualified for
                multiple World Championships and continue to push the boundaries of robotics innovation.
              </p>
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/9415wrenchdressing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-team-blue hover:text-team-blue-dark transition-colors font-mono text-sm"
                >
                  <span>Follow Our Instagram!</span>
                  <span className="font-bold">@9415wrenchdressing</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 blueprint-grid opacity-20"></div>
              <Card className="p-8 border-2 border-team-blue relative">
                <div className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-team-blue"></div>
                <div className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-team-blue"></div>
                <div className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-team-blue"></div>
                <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-team-blue"></div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Wrench className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-mono font-bold text-lg mb-2">Design & Build</h3>
                      <p className="text-muted-foreground">
                        From CAD to competition, every component is engineered for performance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Trophy className="h-8 w-8 text-team-yellow flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-mono font-bold text-lg mb-2">Compete</h3>
                      <p className="text-muted-foreground">
                        Pushing boundaries at regional and championship events
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
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

      {/* Accomplishments Section */}
      <section id="accomplishments" className="py-24 px-6 bg-background blueprint-grid relative">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 02" title="Accomplishments" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-2 border-team-blue bg-card text-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
                >
                  {Icon ? (
                    <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-team-blue" />
                    </div>
                  ) : (
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform font-mono text-team-blue">
                      #
                    </div>
                  )}
                  <div className="font-mono text-3xl font-bold text-team-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-mono">
              Notable Awards & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-2 border-team-blue bg-card hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${item.color} flex-shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-xs text-team-blue font-bold bg-team-blue/10 px-2 py-1 rounded">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-bold text-foreground mb-1 text-sm">{item.award}</h4>
                        <p className="text-xs text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <MeetingCalendar />

      {/* Competition Schedule */}
      <CompetitionSchedule />

      {/* Outreach */}
      <OutreachCarousel />

      {/* Sponsors */}
      <SponsorsSection />

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
