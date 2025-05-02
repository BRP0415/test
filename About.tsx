import React from 'react';
import { Cookie as CookieBanner, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Fun mini-games like 5dice, blackjack, and more",
    "Comprehensive economy system with jobs, banking, and gambling",
    "Powerful moderation tools to keep your server safe",
    "Social interactions to build community engagement",
    "Regularly updated with new features and improvements"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Cookie</h2>
        
        <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-xl p-6 lg:p-8 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-6 p-4 bg-amber-500/10 w-fit rounded-full">
                <CookieBanner className="w-8 h-8 text-amber-400" />
              </div>
              
              <h3 className="text-2xl font-cookie text-amber-400 mb-4">Your Sweet Discord Companion</h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  <strong className="text-amber-400">Cookie</strong> is the all-in-one Discord bot designed to bring 
                  <strong className="text-amber-400"> fun</strong>, <strong className="text-amber-400">engagement</strong>, 
                  and <strong className="text-amber-400">organization</strong> to your server!
                </p>
                
                <p className="text-gray-300 mb-4">
                  Whether you're looking to run a smooth community or add excitement with games and interactions, 
                  Cookie has you covered. With a variety of economy commands, you can create a fun currency system 
                  to keep your members engaged, while moderation tools help maintain a safe and friendly environment.
                </p>
                
                <p className="text-gray-300">
                  What makes Cookie truly special is that it's <strong className="text-amber-400">constantly updated</strong>—new 
                  features, commands, and improvements are always on the way to make sure your server stays fresh and fun.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600/50">
                <h4 className="text-xl font-cookie text-amber-400 mb-4">Why servers love Cookie</h4>
                
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-600/50">
                  <h4 className="text-lg font-cookie text-amber-400 mb-2">Try a command!</h4>
                  <div className="bg-slate-800 rounded p-3 font-mono text-gray-300">
                    <span className="text-amber-400">/work</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Work for cookies!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;