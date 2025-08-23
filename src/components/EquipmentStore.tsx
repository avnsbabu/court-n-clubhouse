import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import equipmentImage from "@/assets/equipment-collection.jpg";

const products = [
  {
    name: "Professional Pickle Ball Paddle Set",
    price: "$89.99",
    originalPrice: "$109.99",
    rating: 4.8,
    category: "Pickle Ball",
    badge: "Best Seller",
    color: "sports-green"
  },
  {
    name: "Carbon Fiber Badminton Racket",
    price: "$124.99",
    originalPrice: null,
    rating: 4.9,
    category: "Badminton",
    badge: "Premium",
    color: "sports-blue"
  },
  {
    name: "Indoor Cricket Set",
    price: "$199.99",
    originalPrice: "$249.99",
    rating: 4.7,
    category: "Cricket",
    badge: "Sale",
    color: "sports-orange"
  },
  {
    name: "Tournament Ping Pong Paddle",
    price: "$79.99",
    originalPrice: null,
    rating: 4.6,
    category: "Table Tennis",
    badge: "New",
    color: "sports-purple"
  }
];

const categories = ["All", "Pickle Ball", "Badminton", "Cricket", "Table Tennis"];

const EquipmentStore = () => {
  return (
    <section id="equipment" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sports-green to-sports-blue bg-clip-text text-transparent">
            Equipment Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium sports equipment for all skill levels. From beginner to professional.
          </p>
        </div>

        {/* Hero Equipment Image */}
        <div className="mb-16">
          <div 
            className="h-64 md:h-80 rounded-2xl bg-cover bg-center shadow-2xl relative overflow-hidden"
            style={{ backgroundImage: `url(${equipmentImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Quality Equipment for Every Sport
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-md">
                  Discover our curated collection of professional-grade sports equipment.
                </p>
                <Button variant="equipment" size="lg">
                  Shop All Equipment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={product.name} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className={`bg-${product.color}/10 text-${product.color} border-${product.color}/20`}>
                    {product.badge}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <CardTitle className="text-lg leading-tight group-hover:text-sports-green transition-colors">
                    {product.name}
                  </CardTitle>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-sports-green">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>

                <Button variant="equipment" className="w-full group">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="px-12">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentStore;