import React from 'react';
import { Send, Instagram, Mail, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary/30"></span> 
              Contacto
            </h2>
            <h3 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight mb-8">
              ¿Tienes un proyecto <br />
              en <span className="italic font-light">mente?</span>
            </h3>
            <p className="text-accent/40 text-lg leading-relaxed font-light mb-12 max-w-md">
              Estoy siempre abierta a nuevas colaboraciones y desafíos creativos. Conversemos sobre tu visión.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hola@paulei.design" className="block group">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/20 block mb-1">Email</span>
                <span className="text-2xl text-white group-hover:text-primary transition-colors border-b border-white/5 pb-1">paulinaleivat@gmail.com</span>
              </a>
              <div className="flex gap-6 pt-4">
                {[Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 hover:border-white/10 transition-all text-accent/40 hover:text-white">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 hover:bg-white/[0.04]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1">Nombre</label>
                  <input
                    type="text"
                    placeholder="Escribe tu nombre..."
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Escribe tu correo..."
                    className="input-field"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="¿En qué puedo ayudarte?"
                  className="input-field resize-none"
                />
              </div>
              <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl text-[11px] uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
