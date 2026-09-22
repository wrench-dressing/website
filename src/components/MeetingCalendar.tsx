import { Card } from "@/components/ui/card";

export const MeetingCalendar = () => {
  // Generate calendar days (yesterday, today, next 5 days)
  const today = new Date();
  const days = [];

  // Tuesdays and Thursdays 6-8 PM, Fridays 4:30-8 PM
  const getMeetingInfo = (dayName: string) => {
    if (dayName === "Tue" || dayName === "Thu") {
      return { hasMeeting: true, meetingTime: "6:00 PM - 8:00 PM" };
    }
    if (dayName === "Fri") {
      return { hasMeeting: true, meetingTime: "4:30 PM - 8:00 PM" };
    }
    return { hasMeeting: false, meetingTime: "" };
  };

  for (let i = -1; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const meetingInfo = getMeetingInfo(dayName);
    days.push({
      date: date,
      dayName: dayName,
      dayNumber: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      isToday: i === 0,
      hasMeeting: meetingInfo.hasMeeting,
      meetingTime: meetingInfo.meetingTime
    });
  }

  return (
    <section id="meetings" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-sm text-team-blue mb-2 tracking-wider">SECTION 03</h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">Meeting Schedule</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We meet on{" "}
            <span className="font-mono text-team-blue font-bold">Tuesdays and Thursdays from 6-8 PM</span>{" "}
            and{" "}
            <span className="font-mono text-team-blue font-bold">Fridays from 4:30-8 PM</span>
          </p>
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
