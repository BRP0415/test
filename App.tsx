import React from 'react';
import { Cookie as CookieBanner, Cookie } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import About from './components/About';
import BotLab from './components/BotLab';
import TopGG from './components/TopGG';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Cookie particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Cookie
            key={i}
            className="absolute animate-float text-amber-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Features />
        <Commands />
        <About />
        <BotLab />
        <TopGG />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;