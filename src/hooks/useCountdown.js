import { useState, useEffect } from 'react';
import { countdownController } from '../controllers/countdownController.js';
import { eventConfig } from '../config/eventConfig.js';

export function useCountdown(targetDateISO = eventConfig.eventDateISO) {
  const [timeLeft, setTimeLeft] = useState(() => countdownController.calculateTimeRemaining(targetDateISO));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdownController.calculateTimeRemaining(targetDateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  return timeLeft;
}
