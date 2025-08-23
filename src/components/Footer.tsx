import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-sports-green to-sports-blue rounded-full"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-sports-green to-sports-blue bg-clip-text text-transparent">
                Court & Clubhouse
              </h3>
            </div>
            <p className="text-muted-foreground">
              Your premier destination for indoor sports. Experience the thrill of competition in our world-class facilities.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-sports-green">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-sports-green">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-sports-green">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Sports */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Sports</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Pickle Ball</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Badminton</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Indoor Cricket</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Ping Pong</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Court Rental</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Equipment Store</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Coaching</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sports-green transition-colors">Tournaments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-sports-green" />
                <span>123 Sports Ave, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-sports-green" />
                <span>(555) 123-SPORT</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-sports-green" />
                <span>info@courtclubhouse.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock size={16} className="text-sports-green" />
                <span>Mon-Sun: 6AM - 11PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Court & Clubhouse. All rights reserved. | Built with passion for sports.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;