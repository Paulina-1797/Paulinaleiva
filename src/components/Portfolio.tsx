import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

/* 
  =========================================
  EDITA TU CONTENIDO AQUÍ (PROYECTOS)
  =========================================
*/
const projects = [
  {
    id: 1,
    title: 'Minimalist Branding',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=800',
    description: 'Identidad visual completa para una marca de estilo de vida consciente.',
    tags: ['Branding', 'Social']
  },
  {
    id: 2,
    title: 'Organic Campaigns',
    category: 'Email Marketing',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    description: 'Estrategia de comunicación directa con enfoque en conversión y fidelización.',
    tags: ['Email', 'Strategy']
  },
  {
    id: 3,
    title: 'Modern UI Kit',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1545235617-946f02a58d75?auto=format&fit=crop&q=80&w=800',
    description: 'Sistema de diseño escalable para aplicaciones web de nueva generación.',
    tags: ['UI', 'Web']
  },
  {
    id: 4,
    title: 'Future Mobile',
    category: 'App Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    description: 'Concepto de banca digital enfocado en la simplicidad y el flujo del usuario.',
    tags: ['App', 'UX']
  }
];

const categories = ['Todos', 'Social Media', 'Email Marketing', 'Web Design', 'App Design'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredItems = activeCategory === 'Todos'
    ? projects
    : projects.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary/30"></span> 
              Portfolio
            </h2>
            <h3 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-none">
              Proyectos <span className="text-white/30 italic">destacados.</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white/[0.03] text-accent/40 hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group cursor-pointer glass-card p-4 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">{item.category}</span>
                    <div className="h-px w-8 bg-white/10"></div>
                    <div className="flex gap-2">
                       {item.tags.slice(0, 2).map(tag => (
                         <span key={tag} className="text-[9px] text-accent/30 uppercase tracking-widest">#{tag}</span>
                       ))}
                    </div>
                  </div>
                  <h4 className="text-3xl font-medium text-white mb-3 group-hover:text-primary transition-colors tracking-tight">{item.title}</h4>
                  <p className="text-accent/40 text-sm leading-relaxed font-light max-w-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
