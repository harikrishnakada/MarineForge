import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  useEffect(() => {
    // Simulate video load
    const timer = setTimeout(() => setVideoLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        {/* Placeholder for video - using high-quality image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1651821949453-f11a1ddfaf1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMGFlcmlhbCUyMGNpbmVtYXRpYyUyMGJsdWUlMjB3YXRlcnxlbnwxfHx8fDE3NzA1ODAzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        />
        
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative h-full flex items-center"
        style={{ opacity }}
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 w-full">
          <div className="max-w-4xl">
            {/* Elegant subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <span className="text-white/80 text-sm tracking-[0.3em] uppercase">
                Premium Marine Digital
              </span>
            </motion.div>

            {/* Hero headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.95] tracking-tight"
            >
              Where craft meets
              <br />
              digital excellence
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed font-light"
            >
              We create immersive digital experiences for the world's finest
              boat and yacht manufacturers.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-gray-900 rounded-full text-sm tracking-wide hover:bg-gray-100 transition-all inline-flex items-center justify-center"
              >
                Start Your Project
              </motion.a>
              
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full text-sm tracking-wide border border-white/20 hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
}
