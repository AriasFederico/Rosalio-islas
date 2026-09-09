import './App.scss';
import { Header, HeroSection } from './components/layout/';
import { landing_data } from './data/data';

function App() {
  const { header, hero } = landing_data;

  return (
    <>
      <Header data={header} />
      <HeroSection data={hero} />
    </>
  );
}

export default App;
