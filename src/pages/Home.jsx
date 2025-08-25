import NavBar from "../components/NavBar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import FloatSpaceships from "../components/FloatingSpaceships";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <StarBackground />
      {/* NavBar */}
      <NavBar />
      <FloatSpaceships />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
