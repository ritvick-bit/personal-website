import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';
import GreenBackground from './components/GreenBackground';

function App() {
  return (
    <div className="bg-primary text-white min-h-screen relative">
      <GreenBackground />
      <Navbar />
      <Hero />
      <Bio />
      <WhatIDo />
      <Contact />
    </div>
  );
}

export default App;
