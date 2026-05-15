import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-primary font-bold text-xl tracking-tighter">DESIGNER.</span>
            <p className="text-accent/50 text-sm mt-2 font-light">© 2026 Todos los derechos reservados.</p>
          </div>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-accent/50">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
