import { Home, Mail, Briefcase, BarChart2, CheckSquare, FileText, Settings } from 'lucide-react';

const apps = [
  { name: 'CRM', icon: <Briefcase className="h-5 w-5" />, href: '/app/crm' },
  { name: 'Mail', icon: <Mail className="h-5 w-5" />, href: '/app/mail' },
  { name: 'Projects', icon: <CheckSquare className="h-5 w-5" />, href: '/app/projects' },
  { name: 'Analytics', icon: <BarChart2 className="h-5 w-5" />, href: '/app/analytics' },
  { name: 'Docs', icon: <FileText className="h-5 w-5" />, href: '/app/docs' },
];

export default function ZohoTopBar() {
  return (
    <nav className="bg-aura-dark-secondary border-b border-aura-gray px-4 h-16 flex items-center justify-between z-50">
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img src="/zylker.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-lg text-white">Zylker</span>
          </a>
        </div>

        {/* App Links */}
        <div className="hidden md:flex items-center space-x-4">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.href}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md"
            >
              {app.icon}
              <span className="text-sm font-medium">{app.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">
          <Settings className="h-5 w-5" />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Home className="h-5 w-5" />
        </button>
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </nav>
  );
}
