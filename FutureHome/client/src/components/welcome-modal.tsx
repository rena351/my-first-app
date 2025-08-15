import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-aura-dark-secondary border-aura-gray text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Welcome to Bigin</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Get started in just 5 minutes with this quick tour.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-gray-600" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600">
            Let's Get Started!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
