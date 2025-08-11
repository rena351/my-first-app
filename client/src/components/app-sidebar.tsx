import { type App, type Category } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";
import { 
  ChevronDown, 
  ChevronRight, 
  Home, 
  Settings,
  Zap
} from "lucide-react";
import { useState } from "react";
import { getAppNavigation } from "@/lib/navigation";

interface AppSidebarProps {
  app: App;
  category: Category;
  currentPage?: string;
}

export default function AppSidebar({ app, category, currentPage = "Dashboard" }: AppSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Dashboard"]);
  const navigation = getAppNavigation(app.name);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  return (
    <div className="w-64 bg-aura-dark-secondary border-r border-aura-gray h-full flex flex-col">
      {/* App Header */}
      <div className="p-4 border-b border-aura-gray">
        <div className="flex items-center space-x-3">
          <div 
            className="p-2 rounded-lg"
            style={{ 
              backgroundColor: `${category.color}20`,
              color: category.color 
            }}
          >
            <i className={`${app.icon} text-lg`}></i>
          </div>
          <div>
            <h2 className="font-bold text-lg">{app.name}</h2>
            <p className="text-xs text-gray-400">{category.name}</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <ScrollArea className="flex-1 p-2">
        <nav className="space-y-1">
          {navigation.sections.map((section: any, sectionIndex: number) => {
            const isExpanded = expandedSections.includes(section.title);
            
            return (
              <div key={sectionIndex} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${section.title === "Dashboard" && currentPage === "Dashboard" 
                      ? `text-black` 
                      : "text-gray-300 hover:text-white hover:bg-aura-gray/50"
                    }
                  `}
                  style={section.title === "Dashboard" && currentPage === "Dashboard" ? {
                    backgroundColor: category.color,
                    color: '#000'
                  } : {}}
                >
                  <div className="flex items-center space-x-2">
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {isExpanded && (
                  <div className="ml-6 space-y-1">
                    {section.items.map((item: string, itemIndex: number) => (
                      <Link 
                        key={itemIndex}
                        href={`/app/${app.id}/${section.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
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
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Quick Actions Footer */}
      <div className="p-4 border-t border-aura-gray">
        <div className="space-y-2">
          <Button 
            size="sm" 
            className="w-full justify-start text-xs"
            style={{ 
              backgroundColor: `${category.color}20`,
              color: category.color,
              border: `1px solid ${category.color}40`
            }}
          >
            <Zap className="w-3 h-3 mr-2" />
            Quick Add
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full justify-start text-xs text-gray-400 hover:text-white"
          >
            <Settings className="w-3 h-3 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
}