import React, { useState, useEffect } from 'react';
import { Cookie, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Commands', href: '#commands' },
    { name: 'About', href: '#about' },
    { name: 'BotLab', href: '#botlab' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <Cookie className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-cookie text-white">Cookie Bot</span>
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://top.gg/bot/1323757668002697337/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="cookie-btn"
            >
              Add to Discord
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-amber-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://top.gg/bot/1323757668002697337/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="cookie-btn text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Add to Discord
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;