import { Navbar } from "@/components/Navbar";
import { TechnicalHeader } from "@/components/TechnicalHeader";
import { Card } from "@/components/ui/card";
import { Mail, ExternalLink, Users, FileText, School } from "lucide-react";

const JoinRobotics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-engineering-dark mb-4 font-mono">
              Join Chanhassen Robotics
            </h1>
            <p className="text-xl text-muted-foreground">
              Become part of the Wrench Dressing team
            </p>
          </div>
        </div>
      </section>

      {/* Before You Join Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 01" title="Before You Join..." />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-8 border-2 border-team-blue">
              <div className="space-y-4">
                <h3 className="font-mono font-bold text-lg mb-4">Learn About Chanhassen Robotics and FIRST Programs</h3>
                <p className="text-foreground leading-relaxed">
                  Consult the Home, FIRST Tech Challenge and FIRST Robotics Competition pages of this website. 
                  Visit{" "}
                  <a href="https://www.firstinspires.org" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    www.firstinspires.org
                  </a>{" "}
                  and{" "}
                  <a href="https://www.hightechkids.org" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                    www.hightechkids.org
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Member Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 02" title="Become a Chanhassen Robotics Member" />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-8 w-8 text-team-blue flex-shrink-0" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Join our Discord Server</h3>
                  <p className="text-muted-foreground mb-4">
                    Click the link below to join. Here you can post to our Q&A, meet the team, and find out about upcoming meetings.
                  </p>
                  <a
                    href="https://discord.gg/chanrobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-team-blue hover:text-team-blue-dark transition-colors font-mono text-sm"
                  >
                    <span>Join Discord Server</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <Mail className="h-8 w-8 text-team-yellow flex-shrink-0" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Contact us via Email</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have further questions or prefer email, email us at:
                  </p>
                  <a
                    href="mailto:9415@chanrobotics.org"
                    className="inline-flex items-center gap-2 text-team-blue hover:text-team-blue-dark transition-colors font-mono text-sm"
                  >
                    <span>9415@chanrobotics.org</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Register Through FIRST Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 03" title="Register Through FIRST" />
          
          <div className="mt-12 space-y-8">
            <Card className="p-8 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="h-8 w-8 text-team-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-4">Create a FIRST Account</h3>
                  <div className="space-y-3 text-foreground">
                    <p>
                      If you are a parent or a student that is at least 13 years old, go to{" "}
                      <a href="https://www.firstinspires.org" target="_blank" rel="noopener noreferrer" className="text-team-blue hover:underline">
                        www.firstinspires.org
                      </a>
                      , navigate to the top right corner of the page and select 'Sign Up'. Fill out the form with your information. 
                      You should then be redirected to your Dashboard.
                    </p>
                    <p>
                      If you already have a FIRST account, sign in and proceed.
                    </p>
                    <p>
                      For parents of students under 13 years of age, navigate to the 'Parent/Guardian - Youth' tab on your Dashboard. 
                      From there, you can complete your child's registration and sign their Consent and Release form.
                    </p>
                    <p>
                      For students over 13 years of age, navigate to the 'Parent/Guardian - Youth' tab on your Dashboard. 
                      From there, invite your parent to sign your Consent and Release form.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-8 w-8 text-team-yellow flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-4">Apply to a FIRST Team</h3>
                  <div className="space-y-3 text-foreground">
                    <p>
                      On your Dashboard under the 'My Teams' tab, click the button 'APPLY TO A TEAM'.
                    </p>
                    <p>
                      If you are applying to a FIRST Tech Challenge team, enter the team number sent to you by either 1) your team 
                      coach/mentor 2) a Stormbots administrator.
                    </p>
                    <p>
                      If you are applying to FRC Stormbots 4778, enter the team number "4778" into the text box. Then, click 'APPLY'.
                    </p>
                    <p className="font-mono text-sm text-team-blue mt-4">
                      Make sure you understand the differences between the FIRST Tech Challenge and FIRST Robotics Competition 
                      programs before applying to either program.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Register Through School Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <TechnicalHeader label="SECTION 04" title="Register Through Eastern Carver County Schools" />
          
          <div className="mt-12 space-y-8">
            <Card className="p-8 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <School className="h-8 w-8 text-team-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-4">(FTC) Community Education</h3>
                  <p className="text-foreground mb-4">
                    The ECCS Community Ed registration page for FTC can be found on the school district website.
                  </p>
                  <p className="text-sm text-muted-foreground font-mono bg-team-blue/10 p-4 rounded border-l-4 border-team-blue">
                    Please note: FTC is now a separate fee through the school.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-team-blue">
              <div className="flex items-start gap-4 mb-4">
                <School className="h-8 w-8 text-team-yellow flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-4">(FRC) Chanhassen High School Activities</h3>
                  <p className="text-foreground mb-4">
                    Parents and students should visit the CNHS Activity/Athletic Registration page to begin.
                  </p>
                  <p className="text-foreground mb-4">
                    After reading and agreeing to the MSHSL eligibility brochure, you can find 'Robotics' listed under Full-Year, Co-Ed Activities.
                  </p>
                </div>
              </div>
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

export default JoinRobotics;

