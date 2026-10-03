import { eventConfig } from '../config/eventConfig.js';

export const countdownController = {
  calculateTimeRemaining: (targetDateStr = eventConfig.eventDateISO) => {
    const target = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return {
        hasStarted: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        message: "HACKSPRINT HAS BEGUN"
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hasStarted: false,
      days,
      hours,
      minutes,
      seconds,
      message: null
    };
  }
};
