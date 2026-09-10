import './App.scss';
import {
  AboutSection,
  Header,
  HeroSection,
  ServicesSection,
  TeamSection,
} from './components/layout/';
import { landing_data } from './data/data';

function App() {
  const { header, hero, services, team, about } = landing_data;

  return (
    <>
      <Header data={header} />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <TeamSection data={team} />
      <AboutSection data={about} />
    </>
  );
}

export default App;
