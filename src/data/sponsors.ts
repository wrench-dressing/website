import Banner from "@/assets/logos/Banner.svg";
import CarverLions from "@/assets/logos/CarverLions.svg";
import Emerson from "@/assets/logos/Emerson.svg";
import Fabworks from "@/assets/logos/Fabworks.svg";
import GeneHaas from "@/assets/logos/GeneHaas.svg";
import Meander from "@/assets/logos/Meander.svg";
import Shorewood from "@/assets/logos/Shorewood.svg";

export type SponsorTier = "Diamond" | "Platinum" | "Gold" | "Silver" | "Bronze";

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  logo: string;
  description: string;
  website: string;
}

// Single source of truth for the sponsor scroll and the sponsors section.
// Add a logo to src/assets/logos/ and a matching entry here to add a sponsor.
export const sponsors: Sponsor[] = [
  {
    name: "Banner Engineering",
    tier: "Diamond",
    logo: Banner,
    description:
      "Leading provider of industrial automation solutions, including sensors, vision systems, and safety products that help manufacturers improve efficiency and productivity.",
    website: "https://www.bannerengineering.com/",
  },
  {
    name: "Gene Haas Foundation",
    tier: "Diamond",
    logo: GeneHaas,
    description:
      "The charitable foundation of Haas Automation, funding manufacturing education, scholarships, and grants for FIRST robotics teams across the country.",
    website: "https://www.ghaasfoundation.org/",
  },
  {
    name: "Carver Lions Club",
    tier: "Diamond",
    logo: CarverLions,
    description:
      "Our local chapter of Lions Clubs International, serving Carver since 1973 through volunteer work, scholarships, and support for youth programs like ours.",
    website: "https://www.carverlions.org/",
  },
  {
    name: "Emerson",
    tier: "Diamond",
    logo: Emerson,
    description:
      "Global technology and engineering company whose automation solutions help manufacturers run more efficiently, safely, and sustainably.",
    website: "https://www.emerson.com/",
  },
  {
    name: "Meander Creative",
    tier: "Gold",
    logo: Meander,
    description:
      "Creative design agency specializing in branding, digital design, and visual communication solutions for businesses and organizations.",
    website: "https://www.meander-creative.com/",
  },
  {
    name: "Shorewood Engineering",
    tier: "Bronze",
    logo: Shorewood,
    description:
      "Engineering consulting firm providing technical expertise and innovative solutions for complex engineering challenges.",
    website: "https://shorewoodengineering.com/",
  },
  {
    name: "Fabworks",
    tier: "Bronze",
    logo: Fabworks,
    description:
      "Manufacturing and fabrication services company specializing in precision metalwork, custom fabrication, and production solutions.",
    website: "https://fabworks.com/",
  },
];

export const tierOrder: SponsorTier[] = ["Diamond", "Platinum", "Gold", "Silver", "Bronze"];

export const tierColors: Record<SponsorTier, string> = {
  Diamond: "border-purple-400 bg-purple-400/10",
  Platinum: "border-gray-300 bg-gray-300/10",
  Gold: "border-team-yellow bg-team-yellow/10",
  Silver: "border-gray-400 bg-gray-400/10",
  Bronze: "border-orange-600 bg-orange-600/10",
};
