import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

export default function CrmLandingPage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-blue-400">
          Your great Indian growth story.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          The #1 CRM platform for businesses of all sizes. Manage your sales, marketing, and customer support all in one place.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-white"
            />
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full">
              Start Your 15-Day Free Trial
            </Button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            No credit card required.
          </p>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Trusted by the world's best companies
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <p className="text-2xl font-bold text-gray-500">Gartner</p>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                 <p className="text-2xl font-bold text-gray-500">Forbes</p>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                 <p className="text-2xl font-bold text-gray-500">TechCrunch</p>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                 <p className="text-2xl font-bold text-gray-500">PCMag</p>
              </div>
              <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                 <p className="text-2xl font-bold text-gray-500">CNET</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold">Everything you need, nothing you don't.</h2>
              <p className="text-lg text-gray-400 mt-2">A powerful CRM that's easy to use.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1"/>
                  <div>
                      <h3 className="text-lg font-bold">Lead Management</h3>
                      <p className="text-gray-400">Capture, track, and manage leads from all your sources.</p>
                  </div>
              </div>
              <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1"/>
                  <div>
                      <h3 className="text-lg font-bold">Deal Tracking</h3>
                      <p className="text-gray-400">Visualize your sales pipeline and track deals from start to finish.</p>
                  </div>
              </div>
              <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1"/>
                  <div>
                      <h3 className="text-lg font-bold">Contact Management</h3>
                      <p className="text-gray-400">Get a complete view of your customers in one place.</p>
                  </div>
              </div>
              <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1"/>
                  <div>
                      <h3 className="text-lg font-bold">Sales Analytics</h3>
                      <p className="text-gray-400">Make data-driven decisions with powerful sales analytics.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
