import './App.css';
import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
