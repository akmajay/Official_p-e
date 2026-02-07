
import { useState, useEffect } from "react";
import { ArrowLeft, Quote, Star, Users, Target, Award, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import VisionHero from "../components/VisionHero";
import VisionValues from "../components/VisionValues";

const Vision = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { icon: <Users className="w-8 h-8" />, number: "2000+", label: "Happy Customers" },
    { icon: <Target className="w-8 h-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Award className="w-8 h-8" />, number: "16+", label: "Years of Excellence" },
    { icon: <Heart className="w-8 h-8" />, number: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Back Button */}
        <div className="container mx-auto px-6 pt-24 pb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="glass border-primary/30 hover:bg-primary/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <VisionHero />

        {/* Owner's Vision Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 water-droplet rounded-full opacity-5 float"></div>
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="water-droplet p-3 rounded-full">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/30">
                    Owner's Vision
                  </Badge>
                </div>

                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-primary">Building Tomorrow's</span>
                  <br />
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Infrastructure Today</span>
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    "My vision for <span className="text-primary font-semibold">Pratap Enterprises</span> has always been simple yet profound -
                    to be the cornerstone of quality construction in Bihar and beyond."
                  </p>

                  <p>
                    "When I started this journey 16 years ago, I dreamed of creating not just a business,
                    but a legacy that would contribute to building stronger, safer communities."
                  </p>

                  <p>
                    "Every brick we sell, every bag of cement we deliver, carries with it our commitment
                    to excellence and our promise to build dreams into reality."
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6">
                  <img
                    src="/uploads/78410086-ed1b-4b92-a479-fa9f7ee09de8.png"
                    alt="Akhilesh Kumar Singh"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <p className="font-bold text-foreground">Akhilesh Kumar Singh</p>
                    <p className="text-primary text-sm">Founder & Visionary</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="glass border-primary/30 hover-lift">
                  <CardContent className="p-8">
                    <Quote className="w-12 h-12 text-primary mb-6 opacity-30" />
                    <blockquote className="text-xl font-medium text-foreground mb-6 italic">
                      "Quality is not an act, it is a habit. We don't just sell materials,
                      we deliver trust, reliability, and the foundation for dreams."
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">- Our Promise</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <VisionValues />

        {/* Achievements Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-primary">Our</span>
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"> Achievements</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Numbers that speak volumes about our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass hover-lift border-primary/20 text-center">
                  <CardContent className="p-8">
                    <div className="water-droplet p-4 rounded-full w-fit mx-auto mb-4">
                      <div className="text-primary-foreground">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {achievement.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <TestimonialsCarousel />

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">Ready to Build</span>
              <br />
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Your Dreams?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Pratap Enterprises for their construction needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                size="lg"
                className="btn-water px-8 py-4 text-lg rounded-xl font-semibold"
              >
                Explore Products
              </Button>
              <Button
                onClick={() => {
                  window.open('https://wa.me/919955850353?text=Hello! I would like to know more about your services.', '_blank');
                }}
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:bg-primary/10 px-8 py-4 text-lg rounded-xl font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vision;
