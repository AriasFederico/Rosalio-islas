import './App.scss';
import {
  AboutSection,
  CtaSection,
  FaqSection,
  Header,
  HeroSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout/';
import { landing_data } from './data/data';

function App() {
  const { header, hero, services, team, about, reviews_section, cta_section, faq_section } =
    landing_data;

  return (
    <>
      <Header data={header} />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <TeamSection data={team} />
      <AboutSection data={about} />
      <ReviewsSection data={reviews_section} />
      <CtaSection data={cta_section} />
      <FaqSection data={faq_section} />
    </>
  );
}

export default App;
