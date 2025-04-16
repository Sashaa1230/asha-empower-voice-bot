
import React from 'react';
import { 
  MessageSquare, 
  User, 
  Briefcase, 
  Calendar, 
  Users, 
  HelpCircle,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      className={cn(
        "flex items-center w-full p-3 rounded-lg text-left transition-colors",
        active 
          ? "bg-asha-purple/10 text-asha-purple font-medium" 
          : "hover:bg-gray-100 text-gray-700"
      )}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

interface MainSidebarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
}

const MainSidebar: React.FC<MainSidebarProps> = ({ 
  activePage = 'chat', 
  onNavigate = () => {} 
}) => {
  return (
    <div className="h-full flex flex-col bg-white border-r">
      {/* Bot profile header */}
      <div className="p-4 border-b flex items-center">
        <Avatar className="h-10 w-10 mr-3 bg-asha-purple">
          <AvatarFallback>AI</AvatarFallback>
          <AvatarImage src="/lovable-uploads/a2bad993-1520-4582-97de-c22b807f6120.png" alt="Asha AI Bot" />
        </Avatar>
        <div>
          <h2 className="font-bold text-gray-900">ASHA AI BOT</h2>
          <p className="text-xs text-gray-500">Your Assistant</p>
        </div>
      </div>
      
      {/* Main menu */}
      <div className="p-3">
        <h3 className="text-xs font-semibold text-gray-500 mb-2 px-3">MAIN MENU</h3>
        <nav className="space-y-1">
          <SidebarItem 
            icon={<MessageSquare size={18} />} 
            label="Chat with ASHA" 
            active={activePage === 'chat'}
            onClick={() => onNavigate('chat')}
          />
          <SidebarItem 
            icon={<User size={18} />} 
            label="My Profile" 
            active={activePage === 'profile'}
            onClick={() => onNavigate('profile')}
          />
          <SidebarItem 
            icon={<Briefcase size={18} />} 
            label="Job Listings" 
            active={activePage === 'jobs'}
            onClick={() => onNavigate('jobs')}
          />
          <SidebarItem 
            icon={<Calendar size={18} />} 
            label="Events" 
            active={activePage === 'events'}
            onClick={() => onNavigate('events')}
          />
          <SidebarItem 
            icon={<Users size={18} />} 
            label="Mentorship" 
            active={activePage === 'mentorship'}
            onClick={() => onNavigate('mentorship')}
          />
          <SidebarItem 
            icon={<HelpCircle size={18} />} 
            label="Help Center" 
            active={activePage === 'help'}
            onClick={() => onNavigate('help')}
          />
        </nav>
      </div>
      
      {/* Account section at bottom */}
      <div className="mt-auto p-3 border-t">
        <SidebarItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          active={activePage === 'settings'}
          onClick={() => onNavigate('settings')}
        />
        <SidebarItem 
          icon={<LogOut size={18} />} 
          label="Sign Out" 
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default MainSidebar;
