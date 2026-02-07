
import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rajesh Kumar Sharma",
      role: "Construction Contractor",
      location: "Darbhanga, Bihar",
      rating: 5,
      review: "Pratap Enterprises has been our go-to supplier for 8 years. Their quality cement and steel have never disappointed us. Akhilesh ji personally ensures every order is perfect.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Devi Singh",
      role: "Home Builder",
      location: "Muzaffarpur, Bihar",
      rating: 5,
      review: "Building my dream home was made easy with Pratap Enterprises. Their sand quality is excellent and delivery is always on time. Highly recommended for all construction needs.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Manoj Kumar Jha",
      role: "Civil Engineer",
      location: "Samastipur, Bihar",
      rating: 5,
      review: "Professional service and top-quality materials. I've worked with many suppliers, but Pratap Enterprises stands out for their reliability and competitive pricing.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sunita Kumari",
      role: "Property Developer",
      location: "Begusarai, Bihar",
      rating: 5,
      review: "Excellent customer service and premium quality bricks. Their team is knowledgeable and always ready to help. We've completed 15+ projects with their materials.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Kumar Singh",
      role: "Architect",
      location: "Madhubani, Bihar",
      rating: 5,
      review: "Working with Pratap Enterprises is a pleasure. Their material quality meets all specifications and their delivery schedule is impeccable. True professionals!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rekha Kumari Gupta",
      role: "Interior Designer",
      location: "Sitamarhi, Bihar",
      rating: 5,
      review: "From basic construction to finishing materials, Pratap Enterprises has everything under one roof. Their guidance helped us choose the right materials for our project.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 water-droplet rounded-full opacity-5 float"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from satisfied customers who trust Pratap Enterprises
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className={`glass hover-lift border-primary/20 transition-all duration-500 ${index === 1 ? 'md:scale-105 border-primary/40' : ''
                  }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed italic pl-4">
                      "{testimonial.review}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="glass border-primary/30 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                    }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="glass border-primary/30 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
