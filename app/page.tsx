import Header from "@/components/shared/header";
import HomeSection from "@/components/shared/home-section";
import AboutSection from "@/components/shared/about-section";
import StatisticsSection from "@/components/shared/statistics-section";

export default function Home() {
  return (
    <div className="container mx-auto px-5 font-[family-name:var(--font-onest-sans)]">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <StatisticsSection />
      </main>
    </div>
  );
}
