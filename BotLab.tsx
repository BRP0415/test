import React from 'react';
import { Bot, CheckCircle, Star } from 'lucide-react';

const BotLab: React.FC = () => {
  const benefits = [
    "Build bots tailored to your server's specific needs",
    "Provide easy-to-use, intuitive commands & features",
    "Deliver high-quality, fully functional bots at no cost",
    "Offer fast, friendly support whenever you need it"
  ];

  const reasons = [
    "Completely FREE bot creation—no strings attached!",
    "We ensure quick response times and personalized results",
    "Become part of a vibrant, supportive community"
  ];

  return (
    <section id="botlab" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-xl p-8 border border-amber-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <Bot className="w-12 h-12 text-amber-400 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-cookie text-white">BRP BotLab</h2>
          </div>
          
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            At BRP BotLab, we specialize in crafting custom Discord bots to bring your server's features to life—whether 
            it's fun games, moderation tools, or something totally unique, we've got you covered. Best of all? It's all FREE!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/70 rounded-lg p-6 border border-slate-700/50">
              <h3 className="text-xl font-cookie text-amber-400 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-amber-400" />
                What we do
              </h3>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-800/70 rounded-lg p-6 border border-slate-700/50">
              <h3 className="text-xl font-cookie text-amber-400 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-amber-400" />
                Why BRP BotLab?
              </h3>
              
              <ul className="space-y-3">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              If you're ready to upgrade your server with a custom bot, simply join our server and let us know what you need. 
              We're excited to help you build something amazing!
            </p>
            
            <a 
              href="https://botlab.cookie-bot.net" 
              target="_blank"
              rel="noopener noreferrer"
              className="cookie-btn"
            >
              Learn More
            </a>
            
            <p className="text-sm text-gray-400 mt-6">
              For those skilled in bot development, we're also looking for new developers to join our team! 
              Contribute and earn tips from your work.
            </p>
            
            <p className="text-xs text-gray-500 mt-4">
              Note: If you're requesting advanced features like ChatGPT integrations, please ensure you have your own API key, 
              as we do not provide these. Once you've got it, we'll handle the integration!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotLab;