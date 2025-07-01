import Hero from "../page-sections/Hero";
import ServicesSection from "../page-sections/ServicesSection";
import FeatureSection from "../page-sections/FeatureSection";
import HowToApply from "../page-sections/HowToApply";
import ToolsSection from "../page-sections/ToolsSection";
import Footer from "../page-sections/Footer";

function App() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <div className="mt-[-1rem] md:mt-[-2rem] lg:mt-[-4rem] xl:mt-[-5rem]">
        <FeatureSection />
      </div>
      <HowToApply />
      <ToolsSection />
      <Footer />
    </>
  );
}

export default App;