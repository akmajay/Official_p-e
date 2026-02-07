
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, User, Contact, MessageSquare, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using mailto
      const emailSubject = `New Inquiry from ${formData.name}`;
      const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'Not provided'}%0A%0AMessage: ${formData.message}`;
      window.open(`mailto:life.akhilesh.com@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
      
      // Create WhatsApp message
      const whatsappMessage = `Hello! I'm ${formData.name}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'Not provided'}%0A%0AMessage: ${formData.message}`;
      
      // Open WhatsApp
      window.open(`https://wa.me/919955850353?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: "Message Sent!",
        description: "Your message has been sent via email and WhatsApp. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919955850353?text=Hello! I would like to inquire about your construction materials.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 water-droplet rounded-full opacity-5 float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 water-droplet rounded-full opacity-5 float" style={{animationDelay: '3s'}}></div>
      
      {/* WhatsApp Floating Button - Left Bottom */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={handleWhatsAppChat}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover-lift animate-pulse"
          size="lg"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Button>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Get in</span>
            <span className="text-primary"> Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Ready to start your construction project? Contact <span className="text-foreground font-semibold">Pratap Enterprises</span> for a quote or 
            visit our store in Darbhanga to see our quality materials firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="glass hover-lift">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                    className="glass border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-water py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl hover-lift"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Email'}
                  </Button>
                  <Button 
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="flex-1 bg-green-500 hover:bg-green-600 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl hover-lift"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="glass hover-lift border-primary/20">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Contact className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Contact Information</h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4 glass p-3 sm:p-4 rounded-2xl hover-lift">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">Phone</h4>
                      <p className="text-primary font-medium text-sm sm:text-base">+91 9955850353</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 glass p-3 sm:p-4 rounded-2xl hover-lift">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">Email</h4>
                      <p className="text-primary font-medium text-xs sm:text-sm break-all">life.akhilesh.com@gmail.com</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Send us your requirements</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 glass p-3 sm:p-4 rounded-2xl hover-lift">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">WhatsApp</h4>
                      <Button 
                        onClick={handleWhatsAppChat}
                        variant="outline"
                        size="sm"
                        className="mt-2 border-green-500/30 text-green-500 hover:bg-green-500/10 text-xs sm:text-sm"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Pratap Enterprises?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Competitive pricing with transparent quotes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Quality materials from trusted manufacturers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Fast delivery to your construction site
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Expert advice from experienced professionals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    16+ years of trusted service in the industry
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Owner: Akhilesh Kumar Singh - Personal service guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
