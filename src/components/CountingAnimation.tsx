
import { useState, useEffect, useRef } from 'react';

interface CountingAnimationProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  className?: string;
  startAnimation?: boolean;
}

const CountingAnimation = ({ 
  endValue, 
  duration = 2000, 
  suffix = '', 
  className = '', 
  startAnimation = false 
}: CountingAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible || startAnimation) {
      const increment = endValue / (duration / 50);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, startAnimation, endValue, duration]);

  return (
    <span ref={elementRef} className={className}>
      {count}{suffix}
    </span>
  );
};

export default CountingAnimation;
