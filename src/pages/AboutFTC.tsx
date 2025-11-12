import { Navbar } from "@/components/Navbar";
import { TechnicalHeader } from "@/components/TechnicalHeader";
import { Card } from "@/components/ui/card";
import { Users, BookOpen, Code, Wrench, ExternalLink } from "lucide-react";

const AboutFTC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-engineering-dark mb-4 font-mono">
              FIRST Tech Challenge
            </h1>
            <p className="text-xl text-muted-foreground">
              Grades 7-12, September through January for most teams
            </p>
          </div>
        </div>
      </section>

      {/* What is FTC Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 01" title="What is FIRST Tech Challenge?" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                FIRST Tech Challenge (FTC) participants create teams of up to 15 students; these teams design, 
                construct, and program robots, perform community outreach, obtain sponsorships, compete against 
                other teams at competitions, and promote the mission of FIRST.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                FTC teams require fewer resources to operate than a FIRST Robotics Competition team. 
                FTC teams typically meet 2-3 times a week for 2-4 hours per meeting.
              </p>
              <a
                href="https://www.firstinspires.org/robotics/ftc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-team-blue hover:text-team-blue-dark transition-colors font-mono"
              >
                <span>More details on the official FIRST Tech Challenge homepage</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <Card className="p-8 border-2 border-team-blue">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">Team Structure</h3>
                    <p className="text-muted-foreground">
                      Teams of up to 15 students work together to design, build, and program robots
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Wrench className="h-8 w-8 text-team-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">Resources</h3>
                    <p className="text-muted-foreground">
                      Requires fewer resources than FRC, making it accessible to more teams
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 02" title="Resources" />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="h-6 w-6 text-team-blue flex-shrink-0 mt-1" />
                <h3 className="font-mono font-bold text-lg">From FIRST</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    FTC Homepage
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/game-and-season" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Game Manual Part 1
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/game-and-season" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Game Manual Part 2
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/team-basics" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Team Basics
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/start-a-team" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Start an FTC Team
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/programming" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Programming
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/robot-building" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Robot Building
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/ftc/team-management" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Team Management
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <Code className="h-6 w-6 text-team-yellow flex-shrink-0 mt-1" />
                <h3 className="font-mono font-bold text-lg">Additional Resources</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.hightechkids.org/" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    High Tech Kids homepage (FIRST organizer for MN)
                  </a>
                </li>
                <li>
                  <a href="https://www.autodesk.com/products/fusion-360/overview" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Autodesk Fusion360 (CAD modelling)
                  </a>
                </li>
                <li>
                  <a href="https://www.autodesk.com/products/synthesis/overview" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    Autodesk Synthesis (virtual robot testing)
                  </a>
                </li>
              </ul>
            </Card>
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

export default AboutFTC;

