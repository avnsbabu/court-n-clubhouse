import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-sports-green to-sports-blue rounded-full"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sports-green to-sports-blue bg-clip-text text-transparent">
              Court & Clubhouse
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sports" className="text-foreground hover:text-sports-green transition-colors">
              Sports
            </a>
            <a href="#courts" className="text-foreground hover:text-sports-green transition-colors">
              Book Courts
            </a>
            <a href="#equipment" className="text-foreground hover:text-sports-green transition-colors">
              Equipment
            </a>
            <a href="#contact" className="text-foreground hover:text-sports-green transition-colors">
              Contact
            </a>
            <Button variant="hero" size="sm">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#sports" className="text-foreground hover:text-sports-green transition-colors">
                Sports
              </a>
              <a href="#courts" className="text-foreground hover:text-sports-green transition-colors">
                Book Courts
              </a>
              <a href="#equipment" className="text-foreground hover:text-sports-green transition-colors">
                Equipment
              </a>
              <a href="#contact" className="text-foreground hover:text-sports-green transition-colors">
                Contact
              </a>
              <Button variant="hero" size="sm" className="w-fit">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;