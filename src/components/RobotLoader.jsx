import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function RobotLoader() {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
      
      // Add new particles
      if (progress % 10 === 0) {
        setParticles(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 5 + 2,
          }
        ].slice(-50));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Particle Effects */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -50],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            setParticles(prev => prev.filter(p => p.id !== particle.id));
          }}
        />
      ))}

      {/* Holographic Robot Assembly */}
      <motion.div 
        className="relative w-64 h-64"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          rotate: 0,
          scale: [0.8, 1.1, 1],
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          scale: { duration: 2, repeat: Infinity }
        }}
      >
        {/* Holographic Grid */}
        <motion.div 
          className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg"
          style={{
            backgroundImage: 
              'linear-gradient(to right, rgba(34, 211, 238, 0.1) 1px, transparent 1px),\
               linear-gradient(to bottom, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity }
          }}
        />

        {/* Robot Head */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800/80 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-400/30"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: [0, -15, 0],
            opacity: 1,
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity },
            opacity: { duration: 0.5 }
          }}
        >
          {/* Eyes */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-6 h-6 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: ['0 0 5px #22d3ee', '0 0 20px #22d3ee', '0 0 5px #22d3ee'],
            }}
            transition={{ 
              scale: { duration: 1, repeat: Infinity, delay: 0 },
              boxShadow: { duration: 1, repeat: Infinity }
            }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: ['0 0 5px #22d3ee', '0 0 20px #22d3ee', '0 0 5px #22d3ee'],
            }}
            transition={{ 
              scale: { duration: 1, repeat: Infinity, delay: 0.3 },
              boxShadow: { duration: 1, repeat: Infinity, delay: 0.3 }
            }}
          />
          
          {/* Mouth */}
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-1/2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              boxShadow: ['0 0 5px #22d3ee', '0 0 15px #22d3ee', '0 0 5px #22d3ee'],
            }}
            transition={{ 
              scaleX: { duration: 1.5, repeat: Infinity },
              boxShadow: { duration: 1.5, repeat: Infinity }
            }}
          />
        </motion.div>

        {/* Body Parts with Assembly Animation */}
        <motion.div 
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gray-800/80 rounded-lg border-2 border-cyan-400 shadow-lg shadow-cyan-400/30"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: [0, 15, 0],
            opacity: 1,
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, delay: 0.5 },
            opacity: { duration: 0.5, delay: 0.3 }
          }}
        />

        {/* Arms with More Dynamic Motion */}
        <motion.div 
          className="absolute top-32 left-1/4 w-6 h-16 bg-gray-800/80 rounded-full border-2 border-cyan-400"
          initial={{ rotate: -90 }}
          animate={{
            rotate: [0, 45, 0, -45, 0],
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute top-32 right-1/4 w-6 h-16 bg-gray-800/80 rounded-full border-2 border-cyan-400"
          initial={{ rotate: 90 }}
          animate={{
            rotate: [0, -45, 0, 45, 0],
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, delay: 0.5 }
          }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.h2 
        className="mt-8 text-2xl font-shuriken text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ 
          opacity: { duration: 2, repeat: Infinity }
        }}
      >
        INITIALIZING BOTSHA...
      </motion.h2>

      {/* Progress Bar */}
      <div className="w-64 h-2 mt-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-cyan-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-8 bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}