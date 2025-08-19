import { useState, useMemo } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Briefcase, Settings } from 'lucide-react';
import { sidebarData } from "@/data/sidebar-data";

interface TwoLevelSidebarProps {
  appName: string;
  currentPage?: string;
}

const getIconForSection = (title: string) => {
  const lowerCaseTitle = title.toLowerCase();
  if (lowerCaseTitle.includes('home')) return <Home className="h-5 w-5" />;
  if (lowerCaseTitle.includes('settings')) return <Settings className="h-5 w-5" />;
  return <Briefcase className="h-5 w-5" />;
};

export const TwoLevelSidebar = ({ appName, currentPage = "Dashboard" }: TwoLevelSidebarProps) => {
  const appNavigation = useMemo(() => {
    const app = sidebarData.find(app => app.title.toLowerCase().includes(appName.toLowerCase()));
    if (!app) return { sections: [] };

    const sections = app.categories.map(category => ({
      title: category.title,
      items: category.pages,
      icon: getIconForSection(category.title),
    }));

    return { sections };
  }, [appName]);

  const [activeSectionTitle, setActiveSectionTitle] = useState(appNavigation.sections[0]?.title || null);

  const activeSection = appNavigation.sections.find((s: any) => s.title === activeSectionTitle);

  return (
    <div className="flex h-screen bg-aura-dark-secondary text-white">
      {/* Level 1 Sidebar (Icon Bar) */}
      <div className="w-16 border-r border-aura-gray flex flex-col items-center py-4 space-y-2 flex-shrink-0">
        <TooltipProvider>
          {appNavigation.sections.map((section: any) => (
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
