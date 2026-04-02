'use client'

import React from 'react';

const Interface = () => {
  return (
    <section id="interface" className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block">
      <div className="section-slab">
        <div className="section-inner max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="reveal-item">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-8 bg-[var(--bg)] p-3 border border-[var(--border)] w-max">
              <span className="text-[var(--accent)]">Tespit</span>
              <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
              <span>Analiz</span>
              <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
              <span>Raporla</span>
              <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
              <span className="text-[var(--fg)]">İyileştir</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--fg)] mb-6 flex flex-col">
              <span className="overflow-hidden pb-1 block">
                <span className="block reveal-text">Neden Solantik?</span>
              </span>
            </h2>
            <p className="text-sm text-[var(--muted)] mb-10 leading-relaxed font-normal reveal-item">
              Büyük firmaların inmediği yerde, küçük firmaların anlayabileceği dilde çalışıyoruz.
            </p>
            <ul className="space-y-6 text-xs text-[var(--fg)] font-normal reveal-item grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16" class="text-[var(--accent)] mt-0.5 flex-shrink-0"></iconify-icon>
                <span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Türkçe, Anlaşılır Raporlar:</strong> Her raporu hem teknik ekibiniz hem yönetim kurulunuz okuyabilir.</span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16" class="text-[var(--accent)] mt-0.5 flex-shrink-0"></iconify-icon>
                <span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Hızlı Teslimat:</strong> Standart web pentest projelerini 5-10 iş günü içinde teslim ediyoruz.</span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16" class="text-[var(--accent)] mt-0.5 flex-shrink-0"></iconify-icon>
                <span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">KOBİ Odaklı Fiyatlandırma:</strong> Enterprise araçlar, danışmanlık fiyatlandırması olmadan.</span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16" class="text-[var(--accent)] mt-0.5 flex-shrink-0"></iconify-icon>
                <span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">Yasal Güvence:</strong> Her projede imzalı yetki belgesi, NDA ve mesleki sorumluluk sigortası.</span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16" class="text-[var(--accent)] mt-0.5 flex-shrink-0"></iconify-icon>
                <span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">OWASP Metodoloji Standartları:</strong> Uluslararası kabul görmüş standartlarla yürütülen testler.</span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16" class="text-[var(--accent)] mt-0.5 flex-shrink-0"></iconify-icon>
                <span className="leading-relaxed"><strong className="font-medium text-[var(--fg)]">30 Gün Rapor Sonrası Destek:</strong> Soru-cevap ve isteğe bağlı retest desteği dahil.</span>
              </li>
            </ul>
          </div>

          <div className="aspect-square md:aspect-[4/3] w-full bg-[var(--bg)] flex flex-col border border-[var(--border)] overflow-hidden relative shadow-2xl rounded-none reveal-item">
            <div className="h-8 border-b border-[var(--border)] flex items-center justify-between px-4 bg-[var(--panel)]">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[var(--border)] rounded-none"></div>
                <div className="w-2 h-2 bg-[var(--border)] rounded-none"></div>
                <div className="w-2 h-2 bg-[var(--border)] rounded-none"></div>
              </div>
              <div className="text-[10px] text-[var(--muted)] font-mono uppercase tracking-widest">Rapor / Türkçe Belge</div>
            </div>
            <div className="flex-1 p-4 md:p-6 flex items-center justify-center bg-[var(--bg)]">
              <div className="flex flex-col items-center justify-center gap-6 text-center group">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/20 group-hover:border-[var(--accent)]/50 transition-colors duration-500">
                  <iconify-icon icon="solar:document-text-linear" width="48" class="text-[var(--accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></iconify-icon>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base text-[var(--fg)] font-medium">Türkçe Rapor &amp; Aksiyon Planı</h4>
                  <p className="text-xs text-[var(--muted)] max-w-[200px]">CVSS skorları, anlaşılır bulgular ve öncelikli iyileştirme rehberi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interface;
