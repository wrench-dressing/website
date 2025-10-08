import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Trophy } from "lucide-react";

export const CompetitionSchedule = () => {
  // Placeholder data - will be API driven
  const competitions = [
    {
      name: "Regional Qualifier #1",
      date: "March 15, 2024",
      location: "City Convention Center",
      status: "upcoming",
    },
    {
      name: "Regional Championship",
      date: "April 8, 2024",
      location: "State Arena",
      status: "upcoming",
    },
    {
      name: "State Championship",
      date: "May 3, 2024",
      location: "University Sports Complex",
      status: "upcoming",
    },
  ];

  return (
    <section id="competitions" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-sm text-team-blue mb-2 tracking-wider">SECTION 04</h2>
          <h3 className="text-4xl font-bold text-foreground">Competition Schedule</h3>
        </div>

        <div className="space-y-4">
          {competitions.map((comp, index) => (
            <Card
              key={index}
              className="p-6 border-l-4 border-team-blue hover:shadow-lg transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-team-yellow" />
                    {comp.name}
                  </h4>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {comp.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {comp.location}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-team-blue text-white text-sm font-mono rounded uppercase">
                    {comp.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
