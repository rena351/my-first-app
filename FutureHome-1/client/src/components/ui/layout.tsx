import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-aura-dark">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <span className="text-2xl font-bold gradient-text font-mono cursor-pointer">AURA</span>
                </Link>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <Link href="/" className="text-aura-neon-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </Link>
                  <Link href="/apps" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    All Apps
                  </Link>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Suites
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Pricing
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Support
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <input 
                  type="text" 
                  placeholder="Search apps..." 
                  className="bg-aura-dark-secondary border border-aura-gray rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:border-aura-neon-blue focus:shadow-neon-blue transition-all"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              <Button className="bg-aura-neon-blue hover:bg-blue-600 text-black px-4 py-2 rounded-lg font-medium transition-colors">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-aura-dark-secondary border-t border-aura-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold gradient-text font-mono">AURA</span>
              <p className="text-gray-300 mt-4">
                The next generation business suite with 80+ integrated applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sales Suite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Suite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Finance Suite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">All Apps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-aura-gray mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aura Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
