import gsap from 'gsap';

export const textAnimations = {
  splitTextGlow: (element) => {
    if (!element) return null;
    return gsap.fromTo(
      element,
      { textShadow: '0 0 0px rgba(197, 31, 58, 0)' },
      {
        textShadow: '0 0 20px rgba(197, 31, 58, 0.7)',
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'sine.inOut'
      }
    );
  }
};

export const cardAnimations = {
  hoverCard3D: (card, targetGlow) => {
    if (!card) return;
    gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' });
    if (targetGlow) {
      gsap.to(targetGlow, { opacity: 0.8, duration: 0.3 });
    }
  },

  leaveCard3D: (card, targetGlow) => {
    if (!card) return;
    gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: 'power2.out' });
    if (targetGlow) {
      gsap.to(targetGlow, { opacity: 0, duration: 0.4 });
    }
  }
};

export const parallaxAnimations = {
  createParallax: (element, speed = 0.2) => {
    if (!element) return null;
    return gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }
};

export const pageTransitions = {
  fadeIn: (element, onComplete) => {
    if (!element) return;
    gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.inOut', onComplete }
    );
  }
};
