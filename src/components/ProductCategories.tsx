import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  products: string[];
}

const ProductCategories = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Cement",
      description: "Premium quality cement bags for all construction requirements",
      image: "/uploads/5900502f-b38d-4c72-8fe0-fa8978e44a7d.png",
      products: ["Portland Cement", "White Cement", "Rapid Set Cement", "OPC 43 Grade"]
    },
    {
      id: 2,
      name: "Sand & Gravel",
      description: "High-grade sand and gravel materials for robust construction",
      image: "/uploads/d564a352-eb62-4b97-9e2a-71e874998f63.png",
      products: ["River Sand", "Construction Sand", "Crushed Gravel", "Stone Chips"]
    },
    {
      id: 3,
      name: "Steel & Reinforcement",
      description: "Superior strength steel bars and reinforcement solutions",
      image: "/uploads/d91700d7-5c18-49e9-a7c3-45c68a115886.png",
      products: ["TMT Bars", "MS Rods", "Steel Pipes", "Wire Mesh", "Steel Plates"]
    },
    {
      id: 4,
      name: "Bricks & Blocks",
      description: "Durable and precision-engineered bricks and concrete blocks",
      image: "/uploads/5678c555-59d0-42a8-be72-083df621e509.png",
      products: ["Red Bricks", "Fly Ash Bricks", "AAC Blocks", "Concrete Blocks"]
    },
    {
      id: 5,
      name: "Tools & Equipment",
      description: "Professional-grade construction tools and safety equipment",
      image: "/uploads/2784757f-613b-4930-93e6-a97841c90c90.png",
      products: ["Hand Tools", "Power Tools", "Safety Equipment", "Measuring Tools"]
    },
    {
      id: 6,
      name: "Other Materials",
      description: "Comprehensive range of construction supplies and finishing materials",
      image: "/uploads/b1835d77-65e8-432b-a8c9-2db8d896e527.png",
      products: ["Pipes & Fittings", "Electrical Supplies", "Paints & Finishes", "Hardware"]
    }
  ];

  const handleOrderClick = (category: Category) => {
    const orderDetails = `Hello! I would like to order from ${category.name} category.%0A%0AProducts available:%0A${category.products.map((product) => `• ${product}`).join('%0A')}%0A%0APlease send me a quote for the quantities I need.%0A%0AThank you!`;
    window.open(`https://wa.me/919955850353?text=${orderDetails}`, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase">Premium Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent">
              Our Exclusive
            </span>
            <br />
            <span className="text-primary drop-shadow-lg">Product Collection</span>
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light px-2">
            Discover our meticulously curated range of premium construction materials,
            engineered for excellence and reliability in every project.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-primary/20 rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-44 sm:h-56 bg-gradient-to-br from-muted/50 to-muted/30">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-primary font-bold text-xs sm:text-sm">{category.name}</span>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold drop-shadow-lg">{category.name}</h3>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-5 sm:p-8">
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{category.description}</p>

                {/* Product List */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Available Products:</h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {category.products.map((product, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-muted-foreground font-medium text-sm sm:text-base">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get Quote
                  </Button>
                  <Button
                    onClick={() => handleOrderClick(category)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base"
                  >
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12 sm:mt-20">
          <div className="inline-block p-5 sm:p-8 bg-card rounded-2xl sm:rounded-3xl border border-primary/20 mx-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">
              Need Something Specific?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Can't find what you're looking for? Our experts are here to help you find the perfect materials for your project.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;