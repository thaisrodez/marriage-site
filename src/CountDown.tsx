import { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date("05-18-2024")
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const timeRemaining = target - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {timeRemaining.days} jours, {timeRemaining.hours} h {timeRemaining.minutes} minutes
    </div>
  );
};

export default Countdown;
