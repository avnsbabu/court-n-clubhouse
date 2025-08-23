import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sports.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sports-green via-sports-blue to-sports-purple bg-clip-text text-transparent">
            Your Ultimate Sports Destination
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience premium indoor sports facilities with pickle ball, badminton, cricket, and ping pong courts. Plus shop the latest equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book a Court
            </Button>
            <Button variant="equipment" size="lg" className="text-lg px-8 py-6">
              Shop Equipment
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sports-green/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-sports-blue/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-sports-orange/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;