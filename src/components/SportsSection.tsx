import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sports = [
  {
    name: "Pickle Ball",
    description: "Fast-paced paddle sport combining tennis, badminton, and ping pong",
    color: "from-sports-green to-emerald-400",
    icon: "🏓"
  },
  {
    name: "Badminton",
    description: "High-intensity racquet sport with lightning-fast shuttlecock action",
    color: "from-sports-blue to-cyan-400",
    icon: "🏸"
  },
  {
    name: "Indoor Cricket",
    description: "Modified cricket format designed for indoor play with exciting rules",
    color: "from-sports-orange to-red-400",
    icon: "🏏"
  },
  {
    name: "Ping Pong",
    description: "Classic table tennis with precision, speed, and strategic gameplay",
    color: "from-sports-purple to-pink-400",
    icon: "🏓"
  }
];

const SportsSection = () => {
  return (
    <section id="sports" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sports-green to-sports-blue bg-clip-text text-transparent">
            Our Sports
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade facilities for four exciting indoor sports
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <Card key={sport.name} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${sport.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {sport.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-sports-green transition-colors">
                  {sport.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {sport.description}
                </p>
                <Button variant="sport" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;