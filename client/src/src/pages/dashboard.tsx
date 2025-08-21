import { Mail, Files, Rss } from 'lucide-react';

// Placeholder data for widgets
const mailItems = [
  { from: 'Rebecca Anderson', subject: 'Sales pitch presentation', time: 'AUG 30, 2020' },
  { from: 'Harry McDonalds', subject: 'Re: SketchZ has matured in its beta, let\'s promote!', time: 'WED AUG 4' },
  { from: 'Kenter', subject: 'On boarding flow', time: 'JUL 14, 2020' },
];

const workDriveItems = [
  { name: 'NDA', type: 'Last modified by you', time: 'Aug 23, 2021' },
  { name: 'SketchZ - iPad.jpeg', type: 'Last opened by you', time: 'Aug 20, 2021' },
  { name: 'Retainer Agreement', type: 'Last opened by you', time: 'Aug 20, 2021' },
];

const streamsItems = [
  { user: 'Rebecca Anderson', message: 'Chat: Hey Pat, I have few questions before I purchase...', time: 'NOV 05, 2020' },
  { user: 'Paul', message: 'Beta version', time: 'JUL 06' },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mail Widget */}
        <div className="lg:col-span-1 bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Mail</h3>
            </div>
            <span className="text-sm text-gray-400">Folder - Marketing</span>
          </div>
          <div className="space-y-4">
            {mailItems.map((item, index) => (
              <div key={index} className="border-b border-aura-gray/30 pb-2 last:border-b-0">
                <p className="font-semibold text-white truncate">{item.from}</p>
                <p className="text-sm text-gray-300 truncate">{item.subject}</p>
                <p className="text-xs text-gray-500 text-right">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WorkDrive Widget */}
        <div className="lg:col-span-1 bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Files className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold">WorkDrive</h3>
            </div>
            <span className="text-sm text-gray-400">Recent files</span>
          </div>
          <div className="space-y-4">
            {workDriveItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-aura-gray/30 pb-2 last:border-b-0">
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.type}</p>
                </div>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Streams Widget */}
        <div className="lg:col-span-1 bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Rss className="h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold">Streams</h3>
            </div>
            <span className="text-sm text-gray-400">Home</span>
          </div>
          <div className="space-y-4">
            {streamsItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 border-b border-aura-gray/30 pb-2 last:border-b-0">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white">{item.user}</p>
                  <p className="text-sm text-gray-300">{item.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
