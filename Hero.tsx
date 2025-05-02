import React, { useEffect, useRef } from 'react';
import { Cookie, Vote, Users } from 'lucide-react';

const ParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: any[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(254, 180, 123, ${Math.random() * 0.5})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.1;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
          if (Math.random() < 0.1) particles.push(new Particle());
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <ParticleAnimation />
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-amber-500/10 px-4 py-2 rounded-full">
            <Cookie className="w-5 h-5 text-amber-400 mr-2" />
            <span className="text-amber-300">Your Sweet Discord Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cookie mb-6 text-white">
            Meet <span className="text-gradient">Cookie</span>, the perfect <br />
            addition to your server
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A sweet and friendly bot bringing fun, games, economy, and powerful moderation tools to enhance your Discord community experience
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a 
              href="https://top.gg/bot/1323757668002697337/invite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cookie-btn"
            >
              <Cookie className="w-5 h-5 mr-2" />
              Add to Discord
            </a>
            
            <a 
              href="https://top.gg/bot/1323757668002697337/vote" 
              target="_blank"
              rel="noopener noreferrer" 
              className="cookie-btn-outline"
            >
              <Vote className="w-5 h-5 mr-2" />
              Vote for Cookie
            </a>
            
            <a 
              href="https://discord.gg/bkFvNPKyRw" 
              target="_blank"
              rel="noopener noreferrer" 
              className="cookie-btn-outline"
            >
              <Users className="w-5 h-5 mr-2" />
              Support Server
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" aria-label="Scroll down">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;