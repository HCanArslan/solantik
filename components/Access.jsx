'use client'

import React from 'react';

const Access = () => {
  return (
    <section id="iletisim" className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block">
      <div className="section-slab">
        <div className="section-inner w-full flex flex-col items-center text-center">

          <div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase reveal-item">
            Hazır / Başlayalım
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--fg)] mb-6 flex flex-col reveal-item">
            <span className="overflow-hidden pb-1 block">
              <span className="block reveal-text">Güvenliğiniz Bir Sonraki Adımı Bekliyor.</span>
            </span>
          </h2>
          <p className="text-sm text-[var(--muted)] mb-12 max-w-lg leading-relaxed font-normal reveal-item">
            Ücretsiz 30 dakikalık keşif görüşmesi ile başlayın. Taahhüt yok, baskı yok — sadece dürüst bir değerlendirme.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 reveal-item">
            <a
              href="mailto:hello@solantik.com"
              className="group inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest font-medium text-black uppercase bg-[var(--accent)] hover:bg-white hover:text-black transition-all duration-300 rounded-none focus:outline-none"
            >
              <span>Ücretsiz Görüşme Planla</span>
              <iconify-icon icon="solar:arrow-right-linear" class="ml-3 group-hover:translate-x-1 transition-transform" width="16"></iconify-icon>
            </a>
            <a href="mailto:hello@solantik.com" className="text-xs text-[var(--muted)] hover:text-[var(--fg)] uppercase tracking-widest transition-colors font-medium border-b border-[var(--border)] pb-1 hover:border-[var(--fg)]">
              hello@solantik.com
            </a>
          </div>

          <footer className="mt-32 pt-8 w-full border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center text-[10px] text-[var(--muted)] uppercase tracking-widest font-medium gap-4 reveal-item">
            <span>© 2025 Solantik Siber Güvenlik. Tüm hakları saklıdır.</span>
            <span className="hidden md:inline text-[var(--border)]">•</span>
            <span>Bu web sitesi çerez kullanmamaktadır.</span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Access;
