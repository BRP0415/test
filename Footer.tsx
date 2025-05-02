import React from 'react';
import { Cookie, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Cookie className="w-8 h-8 text-amber-400 mr-2" />
              <span className="text-2xl font-cookie text-white">Cookie Bot</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://top.gg/bot/1323757668002697337" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
              >
                Top.gg <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              
              <a 
                href="https://discord.gg/bkFvNPKyRw" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
              >
                Support Server <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              
              <a 
                href="https://botlab.cookie-bot.net" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
              >
                BRP BotLab <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              
              <a 
                href="https://color.cookie-bot.net/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
              >
                Colorworks <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-amber-500 mx-1 animate-pulse" /> by BRP0415
            </p>
            
            <p className="text-sm text-gray-600 mt-4">
              Cookie Bot is not affiliated with Discord Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;