'use client'

import React from 'react';

const Overview = () => {
  return (
    <section id="overview" className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block">
      <div className="section-slab">
        <div className="section-inner max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--fg)] mb-8 flex flex-col items-center">
            <span className="overflow-hidden pb-2 block">
              <span className="block reveal-text">Başından Sonuna Şeffaf Süreç.</span>
            </span>
            <span className="overflow-hidden pb-2 block text-[var(--muted)] text-2xl md:text-3xl mt-2">
              <span className="block reveal-text">Taahhüt yok. Sürpriz yok.</span>
            </span>
          </h2>

          <p className="text-sm text-[var(--muted)] mb-10 max-w-2xl leading-relaxed reveal-item">
            Keşif görüşmesinden rapora kadar her adımı müşteriyle koordineli ve tam şeffaflıkla yürütüyoruz.
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center text-xs text-[var(--muted)] mb-12 font-mono uppercase tracking-widest reveal-item">
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)]">01</span>
              Keşif Görüşmesi
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)]">02</span>
              Kapsam ve Teklif
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)]">03</span>
              Yetkilendirme
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)]">04</span>
              Test ve Analiz
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full reveal-item">
            <button
              className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 focus:outline-none"
              onClick={() => window.lenis?.scrollTo('#iletisim')}
            >
              Ücretsiz Görüşme Planla
            </button>
            <button
              className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 focus:outline-none"
              onClick={() => window.lenis?.scrollTo('#hizmetler')}
            >
              Hizmetlerimizi İncele
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
