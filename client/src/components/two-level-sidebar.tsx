import { useState, useMemo } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Briefcase, Settings } from 'lucide-react'; // Example icons

interface TwoLevelSidebarProps {
  sidebarData: string;
  appName: string;
  currentPage?: string;
}

const parseSidebarData = (sidebarData: string, appName: string) => {
  const lines = sidebarData.split('\n');
  const appRegex = new RegExp(`^\\d+\\. Zoho ${appName}`);
  let inAppSection = false;
  const sections: { title: string; items: string[], icon: React.ReactNode }[] = [];

  for (const line of lines) {
    if (appRegex.test(line)) {
      inAppSection = true;
      continue;
    }

    if (inAppSection) {
      if (/^\d+\. Zoho/.test(line)) {
        break; // End of current app section
      }
      if (line.trim() === '') continue;

      const parts = line.split(':');
      if (parts.length === 2) {
        const title = parts[0].trim();
        const items = parts[1].split(',').map(item => item.trim());
        let icon = <Briefcase className="h-5 w-5" />;
        if (title.toLowerCase().includes('home')) icon = <Home className="h-5 w-5" />;
        if (title.toLowerCase().includes('settings')) icon = <Settings className="h-5 w-5" />;
        sections.push({ title, items, icon });
      }
    }
  }

  return { sections };
};


export const TwoLevelSidebar = ({ sidebarData, appName, currentPage = "Dashboard" }: TwoLevelSidebarProps) => {
  const navigation = useMemo(() => parseSidebarData(sidebarData, appName), [sidebarData, appName]);
  const [activeSectionTitle, setActiveSectionTitle] = useState(navigation.sections[0]?.title || null);

  const activeSection = navigation.sections.find((s: any) => s.title === activeSectionTitle);

  return (
    <div className="flex h-screen bg-aura-dark-secondary text-white">
      {/* Level 1 Sidebar (Icon Bar) */}
      <div className="w-16 border-r border-aura-gray flex flex-col items-center py-4 space-y-2 flex-shrink-0">
        <TooltipProvider>
          {navigation.sections.map((section: any) => (
            <Tooltip key={section.title}>
              <TooltipTrigger asChild>
                <Button
                  variant={activeSectionTitle === section.title ? "secondary" : "ghost"}
                  size="icon"
                  className={`w-10 h-10 rounded-lg transition-colors duration-200 ${
                    activeSectionTitle === section.title
                      ? `bg-aura-purple text-white`
                      : "text-gray-400 hover:text-white hover:bg-aura-gray/50"
                  }`}
                  onClick={() => setActiveSectionTitle(section.title)}
                >
                  {section.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{section.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      {/* Level 2 Sidebar (Detail Panel) */}
      <div className="w-56 border-r border-aura-gray flex flex-col">
        {activeSection && (
          <>
            <div className="p-4 border-b border-aura-gray">
              <h3 className="font-bold text-lg">{activeSection.title}</h3>
            </div>
            <ScrollArea className="flex-1 p-2">
              <nav className="space-y-1">
                {activeSection.items.map((item: string, itemIndex: number) => (
                  <Link
                    key={itemIndex}
                    href={`/app/${appName}/${activeSection.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div
                      className={`
                        block px-3 py-1.5 text-sm rounded-md transition-colors cursor-pointer
                        ${currentPage === item
                          ? `bg-aura-purple/20 text-aura-purple font-medium`
                          : "text-gray-400 hover:text-white hover:bg-aura-gray/30"
                        }
                      `}
                    >
                      {item}
                    </div>
                  </Link>
                ))}
              </nav>
            </ScrollArea>
          </>
        )}
      </div>
    </div>
  );
}

export default TwoLevelSidebar;
