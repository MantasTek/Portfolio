import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <References />
        <Contact />
        <Weather />
      </main>
      <Footer />
    </div>
  );
}

export default App;