import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimations = {
  createSectionReveal: (element, triggerElement = element, options = {}) => {
    if (!element) return null;

    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options.y || 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: triggerElement,
          start: options.start || 'top 85%',
          end: options.end || 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...options.scrollTrigger
        }
      }
    );
  },

  createStaggerReveal: (elements, triggerElement, options = {}) => {
    if (!elements || !elements.length) return null;

    return gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: options.y || 30,
        scale: options.scale || 0.96
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration || 0.8,
        stagger: options.stagger || 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerElement || elements[0],
          start: options.start || 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }
};
