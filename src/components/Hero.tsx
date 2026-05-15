import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40">Visual Designer & Strategist</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-medium text-white leading-[1.05] tracking-tight mb-10">
              Creando <span className="text-white font-light italic">experiencias</span> que perduran.
            </h1>
            
            <p className="text-lg md:text-xl text-accent/50 leading-relaxed font-light max-w-lg mb-12">
              Especializada en transformar visiones complejas en interfaces digitales <span className="text-white font-normal underline decoration-primary/30 underline-offset-4">elegantes y funcionales</span>. 
            </p>

            <div className="flex items-center gap-8">
              <a
                href="#portfolio"
                className="bg-white text-dark px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center group"
              >
                Mis Proyectos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Scroll to explore</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-white/[0.05] relative group">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
                alt="Abstract Visual"
                className="w-full h-full object-cover transition-all duration-[2000ms] grayscale group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-glass p-8 rounded-3xl animate-float">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white tracking-tighter">10+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-primary leading-tight">Años de <br />Experiencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
