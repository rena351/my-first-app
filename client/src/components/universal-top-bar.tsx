import {
  Grid,
  Search,
  Plus,
  Bell,
  Settings,
  User,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UniversalTopBar = () => {
  return (
    <nav className="bg-aura-dark-secondary border-b border-aura-gray">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-aura-purple rounded-lg">
              <Grid className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">AURA</span>
          </div>
        </div>

        {/* Center search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full bg-aura-dark border border-aura-gray rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-aura-purple"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-aura-purple text-white hover:bg-aura-purple/90">
                <Plus className="h-4 w-4 mr-1" />
                Create
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New Report</DropdownMenuItem>
              <DropdownMenuItem>New Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Import Data</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default UniversalTopBar;
