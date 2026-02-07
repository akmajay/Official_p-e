
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Construction Contractor",
      location: "Darbhanga",
      rating: 5,
      text: "Pratap Enterprises has been our go-to supplier for the past 5 years. Their cement quality is exceptional and delivery is always on time. Akhilesh ji personally ensures every order meets our requirements.",
      project: "Residential Complex - 50 Units"
    },
    {
      name: "Priya Singh",
      role: "Civil Engineer",
      location: "Madhubani",
      rating: 5,
      text: "The steel bars and TMT rods from Pratap Enterprises are of superior quality. We've used them in multiple projects and never faced any structural issues. Their prices are also very competitive.",
      project: "Commercial Building - 3 Floors"
    },
    {
      name: "Manoj Thakur",
      role: "Builder",
      location: "Muzaffarpur",
      rating: 5,
      text: "Excellent service! The sand and aggregate quality is consistently good. What I appreciate most is their honest business practices and transparent pricing. Highly recommended!",
      project: "Housing Society - 25 Units"
    },
    {
      name: "Sunita Devi",
      role: "Homeowner",
      location: "Samastipur",
      rating: 5,
      text: "Built my dream home with materials from Pratap Enterprises. Akhilesh ji guided us throughout the process and ensured we got the best quality within our budget. Very satisfied!",
      project: "Independent House Construction"
    },
    {
      name: "Vikash Jha",
      role: "Architect",
      location: "Begusarai",
      rating: 5,
      text: "Their bricks and tiles selection is amazing. The quality is premium and the variety helps us choose the perfect materials for each project. Customer service is outstanding!",
      project: "Modern Villa Design"
    },
    {
      name: "Deepak Mishra",
      role: "Site Supervisor",
      location: "Darbhanga",
      rating: 5,
      text: "Working with Pratap Enterprises for over 8 years. They understand construction timelines and always deliver materials exactly when needed. Never disappointed us even once!",
      project: "Multiple Construction Sites"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-background via-muted/10 to-primary/3 relative overflow-hidden">
      {/* Lighter Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-accent/5"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary/5 to-primary-glow/3 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-primary-glow/4 to-primary/2 rounded-full opacity-15 float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">What Our</span>
            <span className="text-primary drop-shadow-lg"> Customers Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Pratap Enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass hover-lift border-primary/20 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                  <div className="water-droplet p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                    <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-0.5 sm:space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-primary/10 pt-3 sm:pt-4">
                      <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-primary text-xs sm:text-sm font-medium">{testimonial.role}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                      <p className="text-xs text-primary/70 mt-1.5 sm:mt-2 font-medium">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <Card className="glass hover-lift border-primary/20 shadow-lg inline-block w-full sm:w-auto">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 sm:space-x-4">
                <div className="text-center flex-1 sm:flex-none">
                  <div className="text-lg sm:text-2xl font-bold text-primary">1000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="w-px h-10 sm:h-12 bg-primary/20"></div>
                <div className="text-center flex-1 sm:flex-none">
                  <div className="text-lg sm:text-2xl font-bold text-primary">16+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years of Trust</div>
                </div>
                <div className="w-px h-10 sm:h-12 bg-primary/20"></div>
                <div className="text-center flex-1 sm:flex-none">
                  <div className="text-lg sm:text-2xl font-bold text-primary">5⭐</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
