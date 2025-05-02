import React, { useState } from 'react';
import { 
  Search, Filter, GamepadIcon, 
  Coins, ShieldAlert, Users, 
  MessagesSquare, X 
} from 'lucide-react';

type CommandCategory = 'all' | 'economy' | 'games' | 'moderation' | 'misc' | 'utility';
type Permission = 'everyone' | 'moderator' | 'admin';

interface Command {
  name: string;
  description: string;
  category: CommandCategory;
  permission: Permission;
}

const Commands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CommandCategory>('all');
  
  const categories: { id: CommandCategory; name: string; icon: React.ReactNode }[] = [
    { id: 'all', name: 'All Commands', icon: <Filter className="w-4 h-4" /> },
    { id: 'economy', name: 'Economy', icon: <Coins className="w-4 h-4" /> },
    { id: 'games', name: 'Games', icon: <GamepadIcon className="w-4 h-4" /> },
    { id: 'moderation', name: 'Moderation', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'social', name: 'Social', icon: <Users className="w-4 h-4" /> },
    { id: 'utility', name: 'Utility', icon: <MessagesSquare className="w-4 h-4" /> },
  ];
  
  const commands: Command[] = [
    // Games
    { name: '/5dice', description: 'Play a game of 5dice', category: 'games', permission: 'everyone' },
    { name: '/blackjack', description: 'Play a game of blackjack', category: 'games', permission: 'everyone' },
    { name: '/coinflip', description: 'Flip a coin', category: 'games', permission: 'everyone' },
    { name: '/dicebet', description: 'Challenge to a dice bet', category: 'games', permission: 'everyone' },
    { name: '/dos', description: 'Play double or steal', category: 'games', permission: 'everyone' },
    { name: '/hangman', description: 'Play hangman', category: 'games', permission: 'everyone' },
    { name: '/high-low', description: 'Play higher or lower', category: 'games', permission: 'everyone' },
    { name: '/matchpairs', description: 'Play a game of match pairs', category: 'games', permission: 'everyone' },
    { name: '/rps', description: 'Play rock-paper-scissors', category: 'games', permission: 'everyone' },
    { name: '/tictac', description: 'Play tic-tac-toe', category: 'games', permission: 'everyone' },

    // Economy
    { name: '/balance', description: 'Check cookies balance', category: 'economy', permission: 'everyone' },
    { name: '/bank deposit', description: 'Deposit cookies into bank', category: 'economy', permission: 'everyone' },
    { name: '/bank withdraw', description: 'Withdraw cookies from bank', category: 'economy', permission: 'everyone' },
    { name: '/beg', description: 'Beg for cookies', category: 'economy', permission: 'everyone' },
    { name: '/crime', description: 'Attempt a crime for cookies', category: 'economy', permission: 'everyone' },
    { name: '/daily', description: 'Claim daily cookies', category: 'economy', permission: 'everyone' },
    { name: '/fish', description: 'Fish for cookies', category: 'economy', permission: 'everyone' },
    { name: '/inventory', description: 'Check your inventory', category: 'economy', permission: 'everyone' },
    { name: '/item give', description: 'Give an item to someone', category: 'economy', permission: 'everyone' },
    { name: '/job apply', description: 'Apply for a new job', category: 'economy', permission: 'everyone' },
    { name: '/job list', description: 'List available jobs', category: 'economy', permission: 'everyone' },
    { name: '/money give', description: 'Give cookies to someone', category: 'economy', permission: 'everyone' },
    { name: '/rob bank', description: 'Rob someone\'s bank', category: 'economy', permission: 'everyone' },
    { name: '/rob player', description: 'Rob another player', category: 'economy', permission: 'everyone' },
    { name: '/scratchcard', description: 'Buy a scratch card', category: 'economy', permission: 'everyone' },
    { name: '/shop buy', description: 'Buy from the shop', category: 'economy', permission: 'everyone' },
    { name: '/shop view', description: 'View shop items', category: 'economy', permission: 'everyone' },
    { name: '/work', description: 'Work for cookies', category: 'economy', permission: 'everyone' },
    { name: '/money add', description: 'Add cookies to a user', category: 'economy', permission: 'admin' },
    { name: '/money remove', description: 'Remove cookies from a user', category: 'economy', permission: 'admin' },
    { name: '/ec admin', description: 'Configure economy settings', category: 'economy', permission: 'admin' },
    { name: '/ec cooldowns', description: 'Check cooldowns', category: 'economy', permission: 'everyone' },
    { name: '/ec leaderboard', description: 'View top 10 richest', category: 'economy', permission: 'everyone' },
    { name: '/ec stats', description: 'Check economy stats', category: 'economy', permission: 'everyone' },

    // Moderation
    { name: '/ban', description: 'Ban a user', category: 'moderation', permission: 'moderator' },
    { name: '/unban', description: 'Unban a user', category: 'moderation', permission: 'moderator' },
    { name: '/temp ban', description: 'Temporarily ban a user', category: 'moderation', permission: 'moderator' },
    { name: '/blacklist', description: 'Add words to blacklist', category: 'moderation', permission: 'admin' },
    { name: '/whitelist', description: 'Remove from blacklist', category: 'moderation', permission: 'admin' },
    { name: '/case remove', description: 'Remove a case', category: 'moderation', permission: 'moderator' },
    { name: '/case view', description: 'View a case', category: 'moderation', permission: 'moderator' },
    { name: '/channel lock', description: 'Lock a channel', category: 'moderation', permission: 'moderator' },
    { name: '/kick', description: 'Kick a user', category: 'moderation', permission: 'moderator' },
    { name: '/mute', description: 'Mute a user', category: 'moderation', permission: 'moderator' },
    { name: '/unmute', description: 'Unmute a user', category: 'moderation', permission: 'moderator' },
    { name: '/note add', description: 'Add a moderator note', category: 'moderation', permission: 'moderator' },
    { name: '/note remove', description: 'Remove a moderator note', category: 'moderation', permission: 'moderator' },
    { name: '/note view', description: 'View moderator notes', category: 'moderation', permission: 'moderator' },
    { name: '/purge', description: 'Delete multiple messages', category: 'moderation', permission: 'moderator' },
    { name: '/role add', description: 'Add a role to user', category: 'moderation', permission: 'admin' },
    { name: '/role remove', description: 'Remove a role', category: 'moderation', permission: 'admin' },
    { name: '/role temp', description: 'Give temporary role', category: 'moderation', permission: 'admin' },
    { name: '/slowmode', description: 'Set channel slowmode', category: 'moderation', permission: 'admin' },
    { name: '/user clear-history', description: 'Clear mod history', category: 'moderation', permission: 'admin' },
    { name: '/user history', description: 'View mod history', category: 'moderation', permission: 'moderator' },
    { name: '/user nick', description: 'Change nickname', category: 'moderation', permission: 'admin' },
    { name: '/voice deaf', description: 'Deafen in voice', category: 'moderation', permission: 'moderator' },
    { name: '/voice undeaf', description: 'Undeafen in voice', category: 'moderation', permission: 'moderator' },
    { name: '/warn', description: 'Warn a user', category: 'moderation', permission: 'moderator' },

    // Social
    { name: '/cheerup', description: 'Send a nice message', category: 'social', permission: 'everyone' },
    { name: '/cookie', description: 'Get a cookie', category: 'social', permission: 'everyone' },
    { name: '/hug', description: 'Hug someone', category: 'social', permission: 'everyone' },

    // Utility
    { name: '/info', description: 'Bot information', category: 'utility', permission: 'everyone' },
    { name: '/ping', description: 'Check bot ping', category: 'utility', permission: 'everyone' },
    { name: '/server-info', description: 'Server information', category: 'utility', permission: 'everyone' },
    { name: '/support', description: 'Get support server invite', category: 'utility', permission: 'everyone' },
    { name: '/twitch', description: 'Get creator\'s Twitch', category: 'utility', permission: 'everyone' },
    { name: '/yt', description: 'Get creator\'s YouTube', category: 'utility', permission: 'everyone' },
  ];
  
  const filteredCommands = commands.filter(command => {
    const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         command.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const getBadgeColor = (permission: Permission) => {
    switch(permission) {
      case 'admin':
        return 'bg-gradient-to-r from-red-500 to-red-400';
      case 'moderator':
        return 'bg-gradient-to-r from-indigo-500 to-blue-400';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-300 text-gray-800';
    }
  };
  
  return (
    <section id="commands" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Command Explorer</h2>
        <br></br>
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <div 
                key={index}
                className="bg-slate-800/80 border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/60 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-mono text-amber-400">{command.name}</h3>
                  <span className={`command-badge ${getBadgeColor(command.permission)}`}>
                    {command.permission}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{command.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-400 text-lg">No commands found. Try a different search term.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400">
            This is a subset of available commands. Cookie has many more commands to discover!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commands;