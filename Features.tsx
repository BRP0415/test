import React from 'react';
import { 
  GamepadIcon, Coins, ShieldAlert, 
  Sparkles, Clock, Award, Smile, Heart 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="mb-4 p-3 bg-amber-500/10 w-fit rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-cookie text-amber-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <GamepadIcon className="w-6 h-6 text-amber-400" />,
      title: "Exciting Games",
      description: "Enjoy thrilling games like 5dice, blackjack, matchpairs, and more to keep your server entertained for hours."
    },
    {
      icon: <Coins className="w-6 h-6 text-amber-400" />,
      title: "Cookie Economy",
      description: "Build a thriving economy with cookies as currency. Work, gamble, rob, and climb the leaderboards."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      title: "Powerful Moderation",
      description: "Keep your server safe with comprehensive moderation tools including warns, mutes, bans, and more."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Regular Updates",
      description: "Cookie is constantly evolving with new features, games, and improvements added regularly."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: "Daily Rewards",
      description: "Claim daily cookies and rewards to keep members coming back and staying engaged."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Leaderboards",
      description: "Track the wealthiest members with server-wide leaderboards that foster friendly competition."
    },
    {
      icon: <Smile className="w-6 h-6 text-amber-400" />,
      title: "Social Interactions",
      description: "Hug users, send cheerful messages, and build community with social interaction commands."
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-400" />,
      title: "Completely Free",
      description: "All features are 100% free to use, with no premium tiers or paywalls to worry about."
    },
  ];

  return (
    <section id="features" className="py-20 bg-cookie-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Cookie?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-cookie text-amber-400 mb-4">Ready to sweeten your Discord experience?</h3>
          <p className="text-gray-300 mb-6">Join hundreds of servers already enjoying Cookie's features</p>
          <a 
            href="https://top.gg/bot/1323757668002697337/invite" 
            target="_blank"
            rel="noopener noreferrer"
            className="cookie-btn"
          >
            Add Cookie to Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;