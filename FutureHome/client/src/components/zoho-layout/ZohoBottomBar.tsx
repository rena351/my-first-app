import { MessageSquare, Users, Phone, Star } from 'lucide-react';

export default function ZohoBottomBar() {
  return (
    <footer className="bg-aura-dark-secondary border-t border-aura-gray px-4 h-12 flex items-center justify-between z-50 fixed bottom-0 left-0 right-0">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-gray-300">
          <MessageSquare className="h-5 w-5 text-green-400" />
          <span className="text-sm font-medium">Cliq</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Star className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Users className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Phone className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">
          Here is your Smart Chat
        </span>
        <div className="flex -space-x-2">
          <img className="w-6 h-6 rounded-full border-2 border-aura-dark-secondary" src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <img className="w-6 h-6 rounded-full border-2 border-aura-dark-secondary" src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <img className="w-6 h-6 rounded-full border-2 border-aura-dark-secondary" src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        </div>
      </div>
    </footer>
  );
}
