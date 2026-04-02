'use client'

import React from 'react';

const Manifesto = () => {
  return (
    <section id="hakkimizda" className="relative py-32 px-4 md:px-8 z-10 w-full reveal-block">
      <div className="section-slab">
        <div className="section-inner max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 reveal-item">
                <div className="w-1.5 h-1.5 bg-[var(--accent)] animate-pulse"></div>
                [ EKİBİMİZ ]
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--fg)] mb-6 reveal-item">
                Güvenliği İçeriden Bilenler.
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-normal mb-8 reveal-item">
                Solantik, siber güvenlik dünyasından gelen ve sektörün gerçeklerini yakından yaşamış kişiler tarafından kuruldu. Amacımız basit: kurumsal kalitede güvenliği her işletmenin erişebileceği hale getirmek.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 reveal-item">
              <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
                <iconify-icon icon="solar:shield-keyhole-linear" width="24" class="text-[var(--accent)]"></iconify-icon>
                <h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Dürüstlük</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">Bulduğumuz her açığı, iyi ya da kötü, eksiksiz raporlarız.</p>
              </div>
              <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
                <iconify-icon icon="solar:code-scan-linear" width="24" class="text-[var(--accent)]"></iconify-icon>
                <h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Hız</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">Müşterilerimiz bekleyemez; süreçlerimiz buna göre tasarlandı.</p>
              </div>
              <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
                <iconify-icon icon="solar:graph-up-linear" width="24" class="text-[var(--accent)]"></iconify-icon>
                <h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Süreklilik</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">Güvenlik bir proje değil, süreçtir. Uzun vadeli bakıyoruz.</p>
              </div>
              <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
                <iconify-icon icon="solar:ghost-smile-linear" width="24" class="text-[var(--accent)]"></iconify-icon>
                <h3 className="text-sm font-medium text-[var(--fg)] tracking-tight">Güvenilirlik</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">Her projede imzalı yetki belgesi, NDA ve sigorta. Hem sizin hem bizim korumalıyız.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
