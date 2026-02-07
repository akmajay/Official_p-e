
import { Phone, User, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919955850353?text=Hello! I would like to inquire about your construction materials.', '_blank');
  };

  return (
    <footer className="glass border-t border-border/20 py-16 mt-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 water-droplet rounded-full opacity-5 float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 water-droplet rounded-full opacity-5 float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="water-droplet text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-xl sm:text-2xl tracking-tight">
                PRATAP
              </div>
              <span className="text-primary font-bold text-xl sm:text-2xl tracking-wide">Enterprises</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg">
              Your trusted partner for quality construction materials. 
              Building dreams with reliable supplies since 2008.
            </p>
            <div className="glass p-4 sm:p-6 rounded-2xl space-y-2">
              <div className="text-sm text-muted-foreground">
                Owner: <span className="text-foreground font-semibold">Akhilesh Kumar Singh</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Experience: <span className="text-primary font-semibold">16+ Years</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Location: <span className="text-foreground font-medium">Darbhanga, Bihar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium ripple px-4 py-3 rounded-xl glass hover-lift block w-full text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium ripple px-4 py-3 rounded-xl glass hover-lift block w-full text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium ripple px-4 py-3 rounded-xl glass hover-lift block w-full text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium ripple px-4 py-3 rounded-xl glass hover-lift block w-full text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="glass p-3 sm:p-4 rounded-2xl hover-lift">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold text-sm sm:text-base">Pratap Enterprises</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Inai, Baheri</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Darbhanga, Bihar</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-3 sm:p-4 rounded-2xl hover-lift">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold text-sm sm:text-base">+91 9955850353</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Call for quotes</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-3 sm:p-4 rounded-2xl hover-lift">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold text-xs sm:text-sm break-all">life.akhilesh.com@gmail.com</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Email us</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppChat}
                className="w-full glass p-3 sm:p-4 rounded-2xl hover-lift transition-all duration-300 border border-green-500/20 hover:border-green-500/40"
              >
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-green-500 font-semibold text-xs sm:text-sm">WhatsApp Chat</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Instant support</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-lg">
            &copy; 2024 <span className="text-foreground font-semibold">Pratap Enterprises</span>. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Trusted construction materials supplier in Darbhanga, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
