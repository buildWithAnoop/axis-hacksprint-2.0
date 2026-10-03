import gsap from 'gsap';

export const heroAnimations = {
  animateHeroEntrance: (elements = {}) => {
    const { title, tagline, statement, badges, cta, countdown } = elements;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (tagline) {
      tl.fromTo(tagline, { opacity: 0, y: -20, letterSpacing: '0.5em' }, { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 1.2 });
    }

    if (title) {
      tl.fromTo(title, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, '-=0.8');
    }

    if (statement) {
      tl.fromTo(statement, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6');
    }

    if (countdown) {
      tl.fromTo(countdown, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.5');
    }

    if (badges) {
      tl.fromTo(badges, { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, '-=0.4');
    }

    if (cta) {
      tl.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
    }

    return tl;
  }
};
