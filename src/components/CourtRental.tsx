import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

const indoorCourts = [
  {
    name: "Pickle Ball Court A",
    sport: "Pickle Ball",
    capacity: "2-4 players",
    price: "$25/hour",
    available: "Available",
    color: "border-sports-green"
  },
  {
    name: "Badminton Court 1",
    sport: "Badminton", 
    capacity: "2-4 players",
    price: "$30/hour",
    available: "Available",
    color: "border-sports-blue"
  },
  {
    name: "Cricket Arena",
    sport: "Indoor Cricket",
    capacity: "6-12 players",
    price: "$45/hour",
    available: "Booked until 6 PM",
    color: "border-sports-orange"
  },
  {
    name: "Ping Pong Tables",
    sport: "Table Tennis",
    capacity: "2-4 players",
    price: "$20/hour",
    available: "Available",
    color: "border-sports-purple"
  }
];

const outdoorCourts = [
  {
    name: "Outdoor Pickle Ball Court 1",
    sport: "Pickle Ball",
    capacity: "2-4 players",
    price: "$20/hour",
    available: "Available",
    color: "border-sports-green"
  },
  {
    name: "Outdoor Pickle Ball Court 2",
    sport: "Pickle Ball",
    capacity: "2-4 players",
    price: "$20/hour",
    available: "Booked until 4 PM",
    color: "border-sports-green"
  },
  {
    name: "Outdoor Badminton Court",
    sport: "Badminton",
    capacity: "2-4 players",
    price: "$25/hour",
    available: "Available",
    color: "border-sports-blue"
  },
  {
    name: "Cricket Ground",
    sport: "Outdoor Cricket",
    capacity: "6-22 players",
    price: "$60/hour",
    available: "Available",
    color: "border-sports-orange"
  }
];

const CourtRental = () => {
  return (
    <section id="courts" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sports-green to-sports-blue bg-clip-text text-transparent">
            Book Your Court
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve premium courts for your favorite sports. Easy booking, flexible timing.
          </p>
        </div>

        {/* Indoor Courts Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              🏢 Indoor Courts
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Climate-controlled facilities with professional lighting and premium surfaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {indoorCourts.map((court, index) => (
              <Card key={court.name} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 ${court.color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">{court.name}</span>
                    <span className="text-sm text-sports-green font-semibold">{court.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span>{court.sport}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users size={16} />
                    <span>{court.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span className={`font-semibold ${court.available === "Available" ? "text-sports-green" : "text-sports-orange"}`}>
                      {court.available}
                    </span>
                  </div>
                  <div className="pt-4">
                    <Button 
                      variant="court" 
                      className="w-full"
                      disabled={court.available !== "Available"}
                    >
                      {court.available === "Available" ? "Book Now" : "View Schedule"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Outdoor Courts Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              🌞 Outdoor Courts
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Open-air courts with natural lighting and fresh air for an authentic experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {outdoorCourts.map((court, index) => (
              <Card key={court.name} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 ${court.color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">{court.name}</span>
                    <span className="text-sm text-sports-green font-semibold">{court.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span>{court.sport}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users size={16} />
                    <span>{court.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span className={`font-semibold ${court.available === "Available" ? "text-sports-green" : "text-sports-orange"}`}>
                      {court.available}
                    </span>
                  </div>
                  <div className="pt-4">
                    <Button 
                      variant="court" 
                      className="w-full"
                      disabled={court.available !== "Available"}
                    >
                      {court.available === "Available" ? "Book Now" : "View Schedule"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sports-green/10 to-sports-blue/10 border-sports-green/20">
            <CardContent className="p-8">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-sports-green" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Need Help Booking?</h3>
              <p className="text-muted-foreground mb-6">
                Our staff is ready to help you find the perfect time slot and court for your needs.
              </p>
              <Button variant="hero" size="lg">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourtRental;