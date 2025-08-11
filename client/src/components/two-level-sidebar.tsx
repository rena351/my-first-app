import { useState } from "react";
import { type App, type Category } from "@shared/schema";
import { getAppNavigation } from "@/lib/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TwoLevelSidebarProps {
  app: App;
  category: Category;
  currentPage?: string;
}

export default function TwoLevelSidebar({ app, category, currentPage = "Dashboard" }: TwoLevelSidebarProps) {
  const navigation = getAppNavigation(app.name);
  const [activeSectionTitle, setActiveSectionTitle] = useState(navigation.sections[0]?.title || null);

  const activeSection = navigation.sections.find((s: any) => s.title === activeSectionTitle);

  return (
    <div className="flex h-screen bg-aura-dark-secondary">
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
                      ? `text-black`
                      : "text-gray-400 hover:text-white hover:bg-aura-gray/50"
                  }`}
                  style={activeSectionTitle === section.title ? {
                    backgroundColor: category.color,
                  } : {}}
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
              <h3 className="font-bold text-lg text-white">{activeSection.title}</h3>
            </div>
            <ScrollArea className="flex-1 p-2">
              <nav className="space-y-1">
                {activeSection.items.map((item: string, itemIndex: number) => (
                  <Link
                    key={itemIndex}
                    href={`/app/${app.id}/${activeSection.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div
                      className={`
                        block px-3 py-1.5 text-sm rounded-md transition-colors cursor-pointer
                        ${currentPage === item
                          ? `text-black font-medium`
                          : "text-gray-400 hover:text-white hover:bg-aura-gray/30"
                        }
                      `}
                      style={currentPage === item ? {
                        backgroundColor: `${category.color}40`,
                        color: category.color
                      } : {}}
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
