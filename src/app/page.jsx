import Hero from "../components/Hero";
import BuildingApproach from "../components/BuildingApproach";
import ServicesFeatures from "../components/ServicesFeatures";
import LeadershipSection from "../components/LeadershipSection";
import TeamSection from "../components/TeamSection";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildingApproach />
      <ServicesFeatures />
      <LeadershipSection />
      <TeamSection />
      <QuoteSection />
      {/* Other sections can follow here */}
    </main>
  );
}
