import { Card } from "@/components/ui/card";

export const MeetingCalendar = () => {
  // Generate calendar days (yesterday, today, next 5 days)
  const today = new Date();
  const days = [];
  
  for (let i = -1; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date: date,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      isToday: i === 0,
      hasMeeting: i === 0 || i === 2 || i === 4, // Placeholder - will be API driven
      meetingTime: "3:30 PM - 6:00 PM" // Placeholder
    });
  }

  return (
    <section id="meetings" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-sm text-team-blue mb-2 tracking-wider">SECTION 03</h2>
          <h3 className="text-4xl font-bold text-foreground">Meeting Schedule</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {days.map((day, index) => (
            <Card
              key={index}
              className={`p-4 text-center transition-all duration-300 ${
                day.isToday
                  ? "border-2 border-team-yellow bg-team-yellow/10 scale-105"
                  : day.hasMeeting
                  ? "border-2 border-team-blue hover:scale-105"
                  : "border border-border hover:scale-105"
              }`}
            >
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {day.month}
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {day.dayNumber}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {day.dayName}
                </div>
                {day.hasMeeting && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="inline-block px-2 py-1 bg-team-blue text-white text-xs rounded">
                      Meeting
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {day.meetingTime}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
