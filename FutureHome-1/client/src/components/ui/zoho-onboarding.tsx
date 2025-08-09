import React from "react";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, Play, Check, Star, Lightbulb } from "lucide-react";
import { ZohoButton } from "./zoho-button";

interface ZohoWelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTour: () => void;
  appName: string;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  className?: string;
}

export function ZohoWelcomeModal({
  isOpen,
  onClose,
  onStartTour,
  appName,
  features,
  className,
}: ZohoWelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div
        className={cn(
          "relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden",
          className
        )}
        data-testid="welcome-modal"
      >
        {/* Header */}
        <div className="relative p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
            data-testid="welcome-modal-close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">
              Welcome to {appName}!
            </div>
            <div className="text-lg opacity-90">
              Let's get you started with the powerful features
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                data-testid={`welcome-feature-${index}`}
              >
                <div className="text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Take a quick tour to learn the basics
            </div>
            <div className="flex gap-3">
              <ZohoButton
                variant="outline"
                onClick={onClose}
                data-testid="welcome-skip-button"
              >
                Skip for now
              </ZohoButton>
              <ZohoButton
                variant="primary"
                onClick={onStartTour}
                data-testid="welcome-start-tour-button"
              >
                Start Tour
              </ZohoButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TourStep {
  id: string;
  title: string;
  content: string;
  target: string; // CSS selector
  position?: "top" | "bottom" | "left" | "right";
  highlight?: boolean;
}

interface ZohoProductTourProps {
  isActive: boolean;
  steps: TourStep[];
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
  onSkip: () => void;
  className?: string;
}

export function ZohoProductTour({
  isActive,
  steps,
  currentStep,
  onNext,
  onPrevious,
  onComplete,
  onSkip,
  className,
}: ZohoProductTourProps) {
  const [targetElement, setTargetElement] = React.useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = React.useState({ top: 0, left: 0 });

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  React.useEffect(() => {
    if (!isActive || !currentStepData) return;

    const element = document.querySelector(currentStepData.target) as HTMLElement;
    if (element) {
      setTargetElement(element);
      
      // Scroll element into view
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Calculate tooltip position
      const rect = element.getBoundingClientRect();
      const position = currentStepData.position || 'bottom';
      
      let top = 0;
      let left = 0;
      
      switch (position) {
        case 'top':
          top = rect.top - 10;
          left = rect.left + rect.width / 2;
          break;
        case 'bottom':
          top = rect.bottom + 10;
          left = rect.left + rect.width / 2;
          break;
        case 'left':
          top = rect.top + rect.height / 2;
          left = rect.left - 10;
          break;
        case 'right':
          top = rect.top + rect.height / 2;
          left = rect.right + 10;
          break;
      }
      
      setTooltipPosition({ top, left });
      
      // Add highlight if needed
      if (currentStepData.highlight) {
        element.classList.add('tour-highlight');
      }
    }

    return () => {
      // Remove highlight
      if (element && currentStepData.highlight) {
        element.classList.remove('tour-highlight');
      }
    };
  }, [isActive, currentStep, currentStepData]);

  if (!isActive || !currentStepData || !targetElement) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      
      {/* Tooltip */}
      <div
        className={cn(
          "fixed z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform -translate-x-1/2 -translate-y-1/2",
          className
        )}
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
        }}
        data-testid="product-tour-tooltip"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            data-testid="tour-skip-button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Content */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {currentStepData.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {currentStepData.content}
          </p>
        </div>
        
        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between">
          <ZohoButton
            variant="ghost"
            size="sm"
            onClick={onPrevious}
            disabled={isFirstStep}
            data-testid="tour-previous-button"
          >
            Previous
          </ZohoButton>
          
          <div className="flex gap-2">
            <ZohoButton
              variant="outline"
              size="sm"
              onClick={onSkip}
              data-testid="tour-skip-all-button"
            >
              Skip Tour
            </ZohoButton>
            
            {isLastStep ? (
              <ZohoButton
                variant="primary"
                size="sm"
                onClick={onComplete}
                data-testid="tour-complete-button"
              >
                Complete
              </ZohoButton>
            ) : (
              <ZohoButton
                variant="primary"
                size="sm"
                onClick={onNext}
                data-testid="tour-next-button"
              >
                Next
              </ZohoButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Empty State Component
interface ZohoEmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "outline";
  };
  illustration?: string;
  className?: string;
}

export function ZohoEmptyState({
  icon,
  title,
  description,
  action,
  illustration,
  className,
}: ZohoEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-12 px-6",
        className
      )}
      data-testid="empty-state"
    >
      {illustration ? (
        <img
          src={illustration}
          alt="Empty state"
          className="w-48 h-48 mb-6 opacity-75"
        />
      ) : icon ? (
        <div className="text-gray-400 dark:text-gray-500 mb-6">
          {icon}
        </div>
      ) : (
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
          <Star className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {description}
      </p>
      
      {action && (
        <ZohoButton
          variant={action.variant || "primary"}
          onClick={action.onClick}
          data-testid="empty-state-action"
        >
          {action.label}
        </ZohoButton>
      )}
    </div>
  );
}

// First Use Prompt
interface ZohoFirstUsePromptProps {
  isVisible: boolean;
  onDismiss: () => void;
  title: string;
  message: string;
  actions: Array<{
    label: string;
    onClick: () => void;
    variant?: "primary" | "outline";
    icon?: string;
  }>;
  className?: string;
}

export function ZohoFirstUsePrompt({
  isVisible,
  onDismiss,
  title,
  message,
  actions,
  className,
}: ZohoFirstUsePromptProps) {
  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 z-40",
        className
      )}
      data-testid="first-use-prompt"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Getting Started
          </span>
        </div>
        <button
          onClick={onDismiss}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          data-testid="first-use-dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {message}
      </p>
      
      <div className="flex flex-col gap-2">
        {actions.map((action, index) => (
          <ZohoButton
            key={index}
            variant={action.variant || "outline"}
            size="sm"
            onClick={action.onClick}
            fullWidth
            data-testid={`first-use-action-${index}`}
          >
            {action.label}
          </ZohoButton>
        ))}
      </div>
    </div>
  );
}

// Progress Indicator for Onboarding
interface ZohoOnboardingProgressProps {
  steps: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
  currentStep?: string;
  className?: string;
}

export function ZohoOnboardingProgress({
  steps,
  currentStep,
  className,
}: ZohoOnboardingProgressProps) {
  return (
    <div className={cn("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6", className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Setup Progress
      </h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.completed;
          
          return (
            <div
              key={step.id}
              className="flex items-center gap-3"
              data-testid={`onboarding-step-${step.id}`}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                isCompleted && "bg-green-600 text-white",
                isActive && !isCompleted && "bg-blue-600 text-white",
                !isActive && !isCompleted && "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              )}>
                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              
              <div className={cn(
                "flex-1 text-sm",
                isCompleted && "text-green-600 dark:text-green-400",
                isActive && !isCompleted && "text-blue-600 dark:text-blue-400 font-medium",
                !isActive && !isCompleted && "text-gray-600 dark:text-gray-400"
              )}>
                {step.title}
              </div>
              
              {isCompleted && (
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            {steps.filter(s => s.completed).length} of {steps.length} completed
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {Math.round((steps.filter(s => s.completed).length / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(steps.filter(s => s.completed).length / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}