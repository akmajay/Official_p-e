
import { Eye, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionHero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 water-droplet rounded-full opacity-5 float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground font-medium">Vision & Mission</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Building Dreams,
            </span>
            <br />
            <span className="text-primary">Creating Legacy</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the vision that drives <span className="text-primary font-semibold">Pratap Enterprises</span> and 
            the mission that shapes our commitment to quality construction materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="glass hover-lift border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="water-droplet p-4 rounded-full w-fit mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and reliable construction material supplier in Bihar, 
                setting new standards of quality and service excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover-lift border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="water-droplet p-4 rounded-full w-fit mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide premium quality construction materials with exceptional service, 
                helping our customers build their dreams with confidence and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover-lift border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="water-droplet p-4 rounded-full w-fit mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality, integrity, customer satisfaction, and continuous innovation 
                form the foundation of everything we do at Pratap Enterprises.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionHero;
