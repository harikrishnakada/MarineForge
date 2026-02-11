'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Compass, Zap, Camera, TrendingUp, Code, Palette } from 'lucide-react';
import Image from 'next/image';

export function Services() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      icon: Code,
      title: 'Digital Experience',
      description: 'Award-winning websites and platforms that showcase your vessels with cinematic detail and convert visitors into buyers.',
      image: 'https://images.unsplash.com/photo-1630516469878-93c9246ac378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBuYXZpZ2F0aW9uJTIwc3lzdGVtJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzA1ODA4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: '200+ sites',
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Complete brand development from positioning to visual identity. We create brands that command premium pricing.',
      image: 'https://images.unsplash.com/photo-1600812703042-38e573598898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5JTIwZGVzaWdufGVufDF8fHx8MTc3MDU4MDg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: '50+ brands',
    },
    {
      icon: Camera,
      title: 'Visual Content',
      description: 'Professional marine photography, cinematic video production, and 3D visualization that brings your vessels to life.',
      image: 'https://images.unsplash.com/photo-1653467213158-f6a896e813a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwcmFjaW5nJTIwd2F2ZXMlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcwNTgwODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: '1000+ shoots',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven campaigns targeting manufacturers and high-net-worth buyers. Performance that drives real revenue.',
      image: 'https://images.unsplash.com/photo-1751250320427-2a26d131436a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGNvY2twaXQlMjBjb250cm9scyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNTgwODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: '$120M+ driven',
    },
  ];

  return (
    <section id="services" className="py-32 md:py-40 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#1877F2]/20 to-transparent rounded-full blur-3xl"
        style={{ y, opacity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0D5DBF]/20 to-transparent rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
      />

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10" ref={ref}>
        {/* Section header with bold graphics */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-16 bg-gradient-to-r from-[#1877F2] to-transparent" />
                <span className="text-sm tracking-[0.3em] uppercase text-[#1877F2]">
                  What We Do
                </span>
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white">
                Navigate the
                <br />
                <span className="bg-gradient-to-r from-[#1877F2] via-[#42A5F5] to-[#1877F2] bg-clip-text text-transparent">
                  digital ocean
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
            >
              Full-spectrum marine digital services. From strategic positioning 
              to breathtaking execution—we deliver results that move millions.
            </motion.p>
          </div>
        </motion.div>

        {/* Services grid with bold visuals */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-900">
                {/* Image background */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </motion.div>

                {/* Icon with animation */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="px-4 py-2 bg-[#1877F2]/20 backdrop-blur-md border border-[#1877F2]/30 rounded-full text-[#1877F2] text-sm font-semibold">
                      {service.stats}
                    </span>
                  </motion.div>

                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-[#1877F2] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-sm tracking-wide">Explore Service</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1877F2]/0 to-[#1877F2]/0 group-hover:from-[#1877F2]/10 group-hover:to-[#1877F2]/5 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA with bold design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#1877F2] to-[#0D5DBF] text-white rounded-full text-lg font-semibold shadow-2xl shadow-[#1877F2]/50 hover:shadow-[#1877F2]/70 transition-all"
          >
            Start Your Project
            <Compass className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
