import React from 'react';

const TopGG: React.FC = () => {
  return (
    <section id="topgg" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Cookie on Top.gg</h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 inline-block">
            <a 
              href="https://top.gg/bot/1323757668002697337" 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="https://top.gg/api/widget/1323757668002697337.svg" 
                alt="Cookie Bot on Top.gg"
                className="mx-auto max-w-full h-auto"
              />
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a 
              href="https://top.gg/bot/1323757668002697337/invite" 
              target="_blank"
              rel="noopener noreferrer"
              className="cookie-btn"
            >
              Add to Discord
            </a>
            
            <a 
              href="https://top.gg/bot/1323757668002697337/vote" 
              target="_blank"
              rel="noopener noreferrer"
              className="cookie-btn-outline"
            >
              Vote for Cookie
            </a>
            
            <a 
              href="https://discord.gg/bkFvNPKyRw" 
              target="_blank"
              rel="noopener noreferrer"
              className="cookie-btn-outline"
            >
              Support Server
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopGG;