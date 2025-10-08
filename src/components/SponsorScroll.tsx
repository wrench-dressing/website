export const SponsorScroll = () => {
  // Placeholder sponsors - replace with real logos later
  const sponsors = [
    { name: "Sponsor 1", url: "https://example.com", logo: "https://via.placeholder.com/200x80/217B9D/FFFFFF?text=Sponsor+1" },
    { name: "Sponsor 2", url: "https://example.com", logo: "https://via.placeholder.com/120x80/FCC419/000000?text=Sponsor+2" },
    { name: "Sponsor 3", url: "https://example.com", logo: "https://via.placeholder.com/180x80/217B9D/FFFFFF?text=Sponsor+3" },
    { name: "Sponsor 4", url: "https://example.com", logo: "https://via.placeholder.com/150x80/FCC419/000000?text=Sponsor+4" },
    { name: "Sponsor 5", url: "https://example.com", logo: "https://via.placeholder.com/200x80/217B9D/FFFFFF?text=Sponsor+5" },
  ];

  // Duplicate for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="py-12 bg-card border-y-2 border-team-blue overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedSponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 flex-shrink-0 hover:scale-110 transition-transform duration-300"
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
