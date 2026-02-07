
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-primary-glow/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(var(--primary-rgb),0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary-glow-rgb),0.06),transparent_50%)]"></div>
      </div>
      
      {/* Lighter Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-glow/8 rounded-full opacity-25 float animate-pulse"></div>
        <div className="absolute top-32 right-32 w-16 h-16 bg-gradient-to-br from-primary-glow/8 to-primary/6 rounded-full opacity-20 float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-primary/8 to-primary-glow/6 rounded-full opacity-15 float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-primary-glow/10 to-primary/8 rounded-full opacity-25 float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center relative z-10 max-w-3xl mx-auto px-6">
          {/* Enhanced Logo - Made more visible */}
          <div className="mb-8 transform-gpu">
            <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
                <div className="relative bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-4 rounded-xl font-bold text-3xl md:text-4xl tracking-tight shadow-xl transform-gpu hover:scale-105 transition-transform duration-500">
                  PRATAP
                </div>
              </div>
              <span className="text-primary font-bold text-3xl md:text-4xl tracking-wide drop-shadow-lg">Enterprises</span>
            </div>
            <p className="text-muted-foreground text-lg font-medium mb-2">
              Premium Construction Materials
            </p>
            <p className="text-primary/80 text-sm">
              Building Excellence Since 2008
            </p>
          </div>

          {/* Loading Bar */}
          <div className="relative w-64 h-2.5 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-full"></div>
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full transition-all duration-150 ease-out shadow-md"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute right-0 top-1/2 w-1 h-1 bg-white rounded-full transform -translate-y-1/2 shadow-md"></div>
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center">
            <p className="text-foreground font-semibold text-base mb-3">
              {progress < 25 ? 'Initializing Premium Experience...' : 
               progress < 50 ? 'Loading Premium Materials...' : 
               progress < 75 ? 'Preparing Excellence...' : 
               progress < 100 ? 'Almost Ready...' : 'Welcome to Excellence!'}
            </p>
            <div className="flex justify-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
