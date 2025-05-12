import AdvantagesSection from "./_components/advantages";
import FinalCtaSection from "./_components/final-cta";
import HeroSection from "./_components/hero";
import PricingPlansSection from "./_components/pricing-plan";
import TestimonialsSection from "./_components/testimonials";
import TryYouSection from "./_components/try-you";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <TryYouSection />
      <AdvantagesSection />
      <PricingPlansSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
};
export default LandingPage;
