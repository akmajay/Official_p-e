
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Truck, Clock, Award, Users, Building } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Quality Assurance",
      description: "All materials meet industry standards and quality certifications"
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Reliable Delivery",
      description: "Fast and dependable delivery service to your construction site"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "16+ Years Excellence",
      description: "Trusted by contractors and builders for over a decade"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Competitive Pricing",
      description: "Best market rates with transparent pricing and no hidden costs"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Expert Support",
      description: "Professional consultation from experienced team members"
    },
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Comprehensive Range",
      description: "One-stop destination for all construction material needs"
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Lighter background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-primary/3"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary/5 to-primary-glow/3 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-primary-glow/4 to-primary/2 rounded-full opacity-15 float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">About</span>
              <br />
              <span className="text-primary drop-shadow-lg">Pratap Enterprises</span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over <span className="text-primary font-semibold">16 years of excellence</span> in the construction materials industry,
                <span className="text-foreground font-semibold"> Pratap Enterprises</span> under the visionary leadership of
                <span className="text-foreground font-semibold"> Akhilesh Kumar Singh</span> has established itself as the most trusted supplier
                of premium quality building materials in Darbhanga, Bihar.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Inai, Baheri, we serve the entire Darbhanga region with an unwavering commitment to
                quality, reliability, and customer satisfaction. Our extensive experience helps us understand the unique needs of every project.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="glass hover-lift text-center p-4 border-primary/20 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">16+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="glass hover-lift text-center p-4 border-primary/20 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-xs text-muted-foreground">Happy Customers</div>
              </Card>
              <Card className="glass hover-lift text-center p-4 border-primary/20 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </Card>
            </div>
          </div>

          {/* Owner Section - Fixed sizing */}
          <div className="relative flex flex-col items-center">
            <div className="relative group w-full max-w-sm mx-auto">
              {/* Lighter outer glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 via-primary-glow/20 to-primary/15 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-1000"></div>

              {/* Main frame */}
              <div className="relative glass border-3 border-primary/30 rounded-full overflow-hidden hover-lift shadow-lg transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/15 rounded-full"></div>

                {/* Image Container */}
                <div className="relative p-2">
                  <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary/8 to-primary-glow/8">
                    <img
                      src="/uploads/78410086-ed1b-4b92-a479-fa9f7ee09de8.png"
                      alt="Akhilesh Kumar Singh - Owner & Founder of Pratap Enterprises"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full backdrop-blur-lg border border-primary/20">
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-primary">Founder</span>
                  </div>
                </div>
              </div>

              {/* Lighter floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-primary-glow/8 rounded-full opacity-25 float"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-glow/8 to-primary/6 rounded-full opacity-20 float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Owner Information */}
            <div className="w-full max-w-sm mx-auto mt-6">
              <Card className="glass hover-lift border-primary/20 shadow-lg">
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-foreground text-xl mb-1">Akhilesh Kumar Singh</h3>
                  <p className="text-primary font-semibold text-base mb-1">Owner & Founder</p>
                  <p className="text-muted-foreground text-sm mb-4">16+ Years Industry Experience</p>

                  <div className="flex justify-center mb-3">
                    <div className="water-droplet p-2 rounded-full shadow-md">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-primary/15">
                    <p className="text-sm text-muted-foreground italic font-medium">
                      "Building dreams with premium quality materials"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose <span className="text-primary">Pratap Enterprises</span>?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover-lift border-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="water-droplet p-3 rounded-xl flex-shrink-0 shadow-md">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-base">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
