
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/#about" },
    { name: "Vision", href: "/vision" },
    { name: "Location", href: "/#location" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      // Handle section scrolling
      const sectionId = href.substring(2);
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        window.location.href = href;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      {/* Top Contact Bar */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-3 sm:px-6 py-1.5 sm:py-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2 text-primary">
                <Phone size={14} />
                <span>+91 99558 50353</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Mail size={14} />
                <span className="break-all">life.akhilesh.com@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2 text-primary text-xs sm:text-sm">
              <MapPin size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">Inai, Baheri, Darbhanga, Bihar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="water-droplet text-primary-foreground p-3 rounded-2xl font-bold text-xl group-hover:scale-105 transition-transform">
              PE
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Pratap <span className="text-primary">Enterprises</span>
              </h1>
              <p className="text-xs text-muted-foreground">Quality Building Materials</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => {
                window.open('https://wa.me/919955850353?text=Hello! I would like to get a quote for construction materials.', '_blank');
              }}
              className="btn-water px-6 py-2 rounded-xl font-semibold"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 glass rounded-2xl border border-border/50 p-6">
            <div className="space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border/50">
              <Button
                onClick={() => {
                  window.open('https://wa.me/919955850353?text=Hello! I would like to get a quote for construction materials.', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full btn-water py-3 rounded-xl font-semibold"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
