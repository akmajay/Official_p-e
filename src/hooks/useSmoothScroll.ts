
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling behavior
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'HTML' || target.tagName === 'BODY') {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };

    // Add CSS for smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }
      
      * {
        scroll-behavior: smooth;
      }
      
      /* Optimize scrolling performance */
      .smooth-scroll {
        -webkit-overflow-scrolling: touch;
        will-change: scroll-position;
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
    `;
    document.head.appendChild(style);

    // Smooth scroll to elements with offset
    const smoothScrollTo = (element: HTMLElement, offset: number = 80) => {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    // Enhance all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            smoothScrollTo(targetElement as HTMLElement);
          }
        }
      });
    });

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);
};
