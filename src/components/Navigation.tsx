import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl">
            Savannah Safaris
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Tours</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Destinations</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Contact</a>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/80 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-4 px-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors py-2">Home</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors py-2">Tours</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors py-2">Destinations</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors py-2">About</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors py-2">Contact</a>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
