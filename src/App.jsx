import HeroSection from './components/HeroSection';
import PortfolioGallery from './components/PortfolioGallery';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-900 text-aqua-100 font-sans">
      <HeroSection />
      <AboutMe />
      <PortfolioGallery />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}