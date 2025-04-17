import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('April 17, 2026 12:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="mt-8 md:mt-16 mx-auto max-w-xs sm:max-w-md p-2 md:p-6 bg-gray-800 rounded-xl border-2 border-cyan-400 shadow-lg shadow-cyan-400/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-xl md:text-2xl font-shuriken text-cyan-400 text-center mb-4 md:mb-6 drop-shadow-[0_0_5px_#22d3ee]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        COUNTDOWN TO IGNITION
      </motion.h2>

      <div className="grid grid-cols-4 gap-1 md:gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div 
            key={unit}
            className="bg-gray-900 rounded-lg p-3 border border-cyan-400/30 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-shuriken text-cyan-400 truncate"
              key={value}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {value}
            </motion.div>
            <div className="text-[10px] md:text-xs text-cyan-300 mt-1 uppercase tracking-wider">{unit}</div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-4 md:mt-6 text-center text-cyan-300 text-xs md:text-sm"
        animate={{ 
          textShadow: ['0 0 5px rgba(34, 211, 238, 0)', '0 0 10px rgba(34, 211, 238, 0.3)', '0 0 5px rgba(34, 211, 238, 0)']
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        SYSTEMS INITIALIZING...
      </motion.div>
    </motion.div>
  );
}

