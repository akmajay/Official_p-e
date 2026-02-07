
import { Shield, HandHeart, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionValues = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality First",
      description: "We never compromise on quality. Every product we sell meets the highest industry standards and passes rigorous quality checks.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Customer Centric",
      description: "Our customers are at the heart of everything we do. Their satisfaction and success drive our continuous improvement.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace new technologies and methods to provide better solutions and stay ahead in the construction materials industry.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "We are committed to sustainable practices and responsible sourcing to protect our environment for future generations.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-64 h-64 water-droplet rounded-full opacity-5 float"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">Our Core</span>
            <br />
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide us in delivering excellence and building lasting relationships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="glass hover-lift border-primary/20 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionValues;
