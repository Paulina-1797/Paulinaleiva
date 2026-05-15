import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

/* 
  =========================================
  EDITA TU CONTENIDO AQUÍ (BLOG)
  =========================================
*/
const articles = [
  {
    id: 1,
    title: 'Psicología del Color en el Diseño Digital',
    excerpt: 'Cómo la elección de una paleta puede influir drásticamente en la percepción y emoción del usuario.',
    date: '12 May, 2024'
  },
  {
    id: 2,
    title: 'El Futuro de las Interfaces Sin Fricción',
    excerpt: 'Explorando tendencias donde la interfaz desaparece para dar paso a la experiencia pura.',
    date: '08 May, 2024'
  },
  {
    id: 3,
    title: 'Estrategias de Email Marketing que Convierten',
    excerpt: 'Guía práctica para crear campañas que resuenan y generan resultados medibles.',
    date: '01 May, 2024'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary/30"></span> 
            Pensamiento
          </h2>
          <h3 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-none">
            Blog & <span className="text-white/30 italic">Artículos.</span>
          </h3>
        </div>

        <div className="space-y-4">
          {articles.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer hover:bg-white/[0.04]"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-bold text-[9px] uppercase tracking-[0.2em]">{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  <span className="text-accent/30 font-bold text-[9px] uppercase tracking-[0.2em]">5 min read</span>
                </div>
                <h4 className="text-3xl font-medium text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {post.title}
                </h4>
                <p className="text-accent/40 leading-relaxed font-light text-sm">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/5 group-hover:border-primary group-hover:bg-primary transition-all">
                <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-[10px] uppercase font-bold tracking-widest text-accent/40 hover:text-white transition-colors border-b border-white/10 pb-2">
            Ver todas las publicaciones
          </button>
        </div>
      </div>
    </section>
  );
}
