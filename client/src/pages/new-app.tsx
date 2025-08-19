import React from 'react';
import { useParams } from 'react-router-dom';
import { allAppsData } from '@/data/apps-new';
import TwoLevelSidebar from '@/components/two-level-sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const parseAppData = (appData: string) => {
  const sections = appData.split(/\n\d+\.\s/);
  const parsed: { [key: string]: any } = {};

  sections.forEach(section => {
    const lines = section.split('\n');
    const titleLine = lines.shift();
    if (!titleLine) return;

    const titleMatch = titleLine.match(/(.*?)\s\((.*?)\)/);
    const title = titleMatch ? titleMatch[1].trim() : titleLine.trim();

    parsed[title] = {};
    let currentSubtitle: string | null = null;

    lines.forEach(line => {
      const subtitleMatch = line.match(/^Section: (.*?)$/);
      if (subtitleMatch) {
        currentSubtitle = subtitleMatch[1].trim();
        parsed[title][currentSubtitle] = [];
      } else if (line.trim().startsWith('Icon:')) {
        // ignore icons for now
      }
      else if (currentSubtitle && line.trim()) {
        parsed[title][currentSubtitle].push(line.trim());
      }
    });
  });

  return parsed;
};

const NewApp: React.FC = () => {
  const { appName } = useParams<{ appName: string }>();

  if (!appName) {
    return <div>App not found</div>;
  }

  const appDataString = allAppsData.apps[appName];

  if (!appDataString) {
    return <div>App not found</div>;
  }

  const parsedData = parseAppData(appDataString);

  return (
    <div className="flex h-screen bg-aura-dark text-white">
      <TwoLevelSidebar appName={appName} />
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-8">{appName}</h1>
        <div className="space-y-8">
          {Object.entries(parsedData).map(([title, content]) => (
            <Card key={title} className="bg-aura-dark-secondary border-aura-gray">
              <CardHeader>
                <CardTitle className="text-2xl text-aura-purple">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(content as any).map(([subtitle, items]) => (
                  <div key={subtitle} className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">{subtitle}</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {(items as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewApp;
