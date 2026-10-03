import { REGISTRATION_URL } from '../config/linksConfig.js';
import confetti from 'canvas-confetti';

export const registrationService = {
  getRegistrationUrl: () => REGISTRATION_URL,

  openRegistration: (triggerCelebration = true) => {
    if (triggerCelebration) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C51F3A', '#E5BE6E', '#F4E6CE', '#A71930']
      });
    }
    
    // Open in a new tab
    window.open(REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  }
};
