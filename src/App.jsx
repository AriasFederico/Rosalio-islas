import './App.scss';
import {
  AboutSection,
  Coverage,
  CtaSection,
  FaqSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout/';

function App() {
  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      {/* <ReviewsSection /> */}
      <FaqSection />
      <CtaSection />
      {/* <Coverage /> */}
      <LocationSection />
      <Footer />
      {/* eliminar  */}
      <span className='credito'>Diseñado por Codefex</span>
      {/* eliminar */}
    </div>
  );
}

export default App;
