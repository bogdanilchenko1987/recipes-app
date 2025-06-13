import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import SearchFormSection from "./components/SearchFormSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SearchFormSection />
      <CTASection />
    </main>
  );
}
