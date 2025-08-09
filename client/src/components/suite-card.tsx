import { type Suite } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface SuiteCardProps {
  suite: Suite;
}

export default function SuiteCard({ suite }: SuiteCardProps) {
  return (
    <div 
      className="suite-card rounded-xl p-6 border transition-all duration-300"
      style={{ 
        background: `linear-gradient(135deg, ${suite.color}10 0%, ${suite.color}05 100%)`,
        borderColor: `${suite.color}30`
      }}
    >
      <div className="flex items-center mb-4">
        <i 
          className="fas fa-star text-2xl mr-3"
          style={{ color: suite.color }}
        ></i>
        <h3 className="text-xl font-semibold">{suite.name}</h3>
      </div>
      <p className="text-gray-300 text-sm mb-4">{suite.description}</p>
      <Button 
        className="w-full py-2 rounded-lg font-medium transition-colors"
        style={{ 
          backgroundColor: suite.color,
          color: suite.color === '#3b82f6' ? '#fff' : '#000'
        }}
      >
        Explore Suite
      </Button>
    </div>
  );
}
