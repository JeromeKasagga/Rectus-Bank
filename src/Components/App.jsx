import Hero from "/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/page-sections/Hero.jsx";
import ServicesSection from "/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/page-sections/services-section.jsx";
import FeatureSection from "../page-sections/features-section";
// import Testimonials from "../Components/Testimonials";
import HowToApply from "../page-sections/how-to-apply";
import ToolsSection from "../page-sections/tools";

// Main js file
function App() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <FeatureSection />
            {/* <Testimonials /> */}
            <HowToApply />
            <ToolsSection />
            
        </>
    );
}

export default App;