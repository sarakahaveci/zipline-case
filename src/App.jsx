import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMagazine from './components/AboutMagazine';
import CallForPapers from './components/CalllForPapers'
import Issues from "./components/Issues";
import News from "./components/News";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMagazine/>
      <CallForPapers/>
      <Issues />
      <News />
      <Footer />
    </>
  );
}

export default App;
