
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, Clock } from "lucide-react";
import CountingAnimation from "./CountingAnimation";

const StatisticsSection = () => {
  const stats = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      value: 16,
      suffix: "+",
      label: "Years of Experience",
      description: "Serving construction industry"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 500,
      suffix: "+",
      label: "Happy Customers",
      description: "Satisfied clients across Bihar"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      value: 1000,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      value: 24,
      suffix: "/7",
      label: "Customer Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 water-droplet rounded-full opacity-10 float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 water-droplet rounded-full opacity-10 float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Our</span>
            <span className="text-primary"> Achievements</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass hover-lift border-primary/20">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  <CountingAnimation 
                    endValue={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
