import { sponsors } from "@/data/sponsors";

export const SponsorScroll = () => {
  if (sponsors.length === 0) {
    return null;
  }

  // Repeat the list so the strip stays full, then duplicate it for a seamless loop
  const strip = Array(10).fill(sponsors).flat();
  const duplicatedSponsors = [...strip, ...strip];

  // Scale the duration with the number of logos so the scroll speed stays constant
  const scrollDuration = strip.length * 0.4;

  return (
    <section className="py-12 bg-card border-y-2 border-team-blue overflow-hidden">
      <div className="relative">
        <div
          className="flex animate-scroll"
          style={{ animationDuration: `${scrollDuration}s` }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 flex-shrink-0"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-20 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
