
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Navigation, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const handleGetDirections = () => {
    const destination = "Pratap Enterprises, Inai, Baheri, Darbhanga, Bihar";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleViewOnMap = () => {
    window.open('https://maps.app.goo.gl/DefYrmu8d5emFsau7?g_st=ac', '_blank');
  };

  return (
    <section id="location" className="py-16 bg-gradient-to-br from-background via-muted/10 to-primary/3 relative overflow-hidden">
      {/* Lighter Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-accent/5"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-primary/5 to-primary-glow/3 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-glow/4 to-primary/2 rounded-full opacity-15 float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Visit Our</span>
            <span className="text-primary drop-shadow-lg"> Store</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find us easily and experience our quality materials firsthand.
            We're conveniently located in Darbhanga with easy access and ample parking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div className="space-y-6">
            <Card className="glass hover-lift border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="water-droplet p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-4 text-xl">Store Address</h3>
                    <div className="space-y-2 text-muted-foreground mb-6">
                      <p className="text-lg font-semibold text-foreground">Pratap Enterprises</p>
                      <p className="text-base">Inai, Baheri</p>
                      <p className="text-base">Darbhanga, Bihar</p>
                      <p className="text-sm text-primary font-semibold">Owner: Akhilesh Kumar Singh</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={handleViewOnMap}
                        className="btn-water rounded-xl font-semibold hover-lift text-base py-2 px-4"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </Button>
                      <Button
                        onClick={handleGetDirections}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl font-semibold text-base py-2 px-4"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="water-droplet p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-4 text-xl">Store Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 px-4 glass rounded-xl border border-primary/15">
                        <span className="text-foreground font-semibold text-base">Monday - Friday:</span>
                        <span className="text-primary font-bold text-base">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-4 glass rounded-xl border border-primary/15">
                        <span className="text-foreground font-semibold text-base">Saturday:</span>
                        <span className="text-primary font-bold text-base">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-4 glass rounded-xl border border-primary/15">
                        <span className="text-foreground font-semibold text-base">Sunday:</span>
                        <span className="text-primary font-bold text-base">9:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="water-droplet p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-4 text-xl">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="glass p-4 rounded-xl border border-primary/15">
                        <span className="text-foreground font-semibold text-base">Phone:</span>
                        <p className="text-primary font-bold text-lg">+91 9955850353</p>
                      </div>
                      <div className="glass p-4 rounded-xl border border-primary/15">
                        <span className="text-foreground font-semibold text-base">Email:</span>
                        <p className="text-primary font-bold text-base">life.akhilesh.com@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map Section */}
          <div className="space-y-6">
            <Card className="glass hover-lift overflow-hidden border-primary/20 shadow-lg">
              <div className="relative h-[400px] bg-gradient-to-br from-muted via-background to-accent/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.4234567890123!2d85.9123456!3d26.1534567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5a5b5a5b5a5b%3A0x5a5b5a5b5a5b5a5b!2sInai%2C%20Baheri%2C%20Darbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 rounded-xl"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none rounded-xl"></div>
                <div className="absolute bottom-4 left-4 glass p-4 rounded-xl border border-primary/30">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-bold text-base">Pratap Enterprises</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Inai, Baheri, Darbhanga</p>
                </div>
              </div>
            </Card>

            <Card className="glass hover-lift border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="water-droplet p-3 rounded-xl">
                    <Car className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-4 text-xl">Easy to Find</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed text-base">
                        We're strategically located in the heart of Inai, Baheri, making us easily accessible
                        from all parts of Darbhanga and surrounding areas.
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center space-x-3 glass p-3 rounded-xl">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">Main road access with clear signage</span>
                        </div>
                        <div className="flex items-center space-x-3 glass p-3 rounded-xl">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">Ample parking space for trucks and cars</span>
                        </div>
                        <div className="flex items-center space-x-3 glass p-3 rounded-xl">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">Near local landmarks and bus stops</span>
                        </div>
                        <div className="flex items-center space-x-3 glass p-3 rounded-xl">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">Well-connected to major construction sites</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
