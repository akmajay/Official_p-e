
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 water-droplet rounded-full opacity-10 float"></div>
      <div className="absolute bottom-32 right-20 w-80 h-80 water-droplet rounded-full opacity-10 float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">Since 2008 • Trusted Excellence</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Quality Building</span>
                <br />
                <span className="text-primary">Materials</span>
                <br />
                <span className="text-muted-foreground text-xl sm:text-2xl lg:text-3xl font-medium">for Your Dreams</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              <span className="text-foreground font-semibold">Pratap Enterprises</span> - Your trusted partner for premium construction supplies.
              Building dreams with reliable materials and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProducts}
                size="lg"
                className="btn-water px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-semibold tracking-wide hover-lift"
              >
                Explore Products
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-semibold tracking-wide hover-lift"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-sm sm:max-w-md mx-auto lg:mx-0">
            <div className="glass rounded-2xl overflow-hidden hover-lift">
              <img
                src="/uploads/7d778aa0-15e7-41de-b517-757344882d64.png"
                alt="Pratap Enterprises Construction Materials Shop"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass p-3 sm:p-4 rounded-2xl hover-lift">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">16+</div>
                <div className="text-xs text-muted-foreground font-medium">Years Excellence</div>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 water-droplet rounded-full opacity-40 float"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-10 sm:mt-16">
          <button
            onClick={scrollToProducts}
            className="glass p-2.5 sm:p-3 rounded-full hover-lift ripple text-primary"
          >
            <ArrowDown size={20} className="sm:w-6 sm:h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
