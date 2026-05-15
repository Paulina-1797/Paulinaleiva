import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* 
  =========================================
  EDITA TU CONTENIDO AQUÍ (MENU)
  =========================================
*/
const navLinks = [
  { name: 'Inicio', href: '#home', num: '01' },
  { name: 'Portafolio', href: '#portfolio', num: '02' },
  { name: 'Blog', href: '#blog', num: '03' },
  { name: 'Contacto', href: '#contact', num: '04' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-6 z-50 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-full px-8 h-16 flex justify-between items-center shadow-2xl shadow-black/20">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl tracking-tighter">PAULINA.</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-accent/60 hover:text-white transition-colors font-medium text-[11px] uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
              <a href="">CV.PDF</a>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-20 left-6 right-6 bg-dark/95 backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 overflow-hidden z-[60]"
          >
            <div className="space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-2xl font-bold uppercase tracking-tighter hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
