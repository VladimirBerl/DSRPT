import Header from "@/components/shared/header";
import HomeSection from "@/components/shared/home-section";
import AboutSection from "@/components/shared/about-section";
import StatisticsSection from "@/components/shared/statistics-section";
import OfferSection from "@/components/shared/offer-section";
import RequestSection from "@/components/shared/request-section";
import SliderSection from "@/components/shared/slider-section";
import StrengthsSection from "@/components/shared/strengths-section";
import ResultSection from "@/components/shared/result-section";
import ContactUsSection from "@/components/shared/contact-us-section";
import Footer from "@/components/shared/footer";
// import ThreeScene from "@/scripts/js/ThreeScene";

export default function Home() {
  return (
    <>
      {/* <ThreeScene /> */}
      <Header />
      <main>
        <div className="container mx-auto px-5 font-[family-name:var(--font-onest-sans)]">
          <HomeSection />
          <AboutSection />
          <StatisticsSection />
          <OfferSection />
          <RequestSection />
          <SliderSection />
          <StrengthsSection />
        </div>
        <ResultSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
