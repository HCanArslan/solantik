'use client'

import React from 'react';

const Pricing = () => {
  return (
    <section id="platform" className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block">
      <div className="section-slab">
        <div className="section-inner max-w-7xl mx-auto">

          <div className="mb-12 text-center reveal-item">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--fg)] mb-4">Solantik Platform — Yakında</h2>
            <p className="text-sm text-[var(--muted)]">Güvenlik uzmanlarının metodolojilerini yapay zeka ile birleştiriyoruz. KOBİ'lerin sürekli güvenlik taraması yapmasını mümkün kılan SaaS ürünümüz.</p>
          </div>

          {/* Credential Strip */}
          <div className="mb-10 border-b border-[var(--border)] pb-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium reveal-item">
            <span>Fiyatlandırma</span>
            <span>Erken Erişim Avantajları</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-item relative z-10">

            <div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3">Aylık</div>
              <div className="text-2xl font-medium text-[var(--fg)] mb-8">Başlangıç</div>

              <div className="flex-1">
                <ul className="text-xs text-[var(--muted)] space-y-4 font-normal">
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>5 domain'e kadar</li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>Aylık otomatik tarama</li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>Türkçe bulgular ve rapor</li>
                </ul>
              </div>
            </div>

            <div className="border border-[var(--accent)]/50 bg-[var(--accent)]/5 p-8 flex flex-col relative rounded-none shadow-[0_0_40px_rgba(255,95,31,0.1)] hover:shadow-[0_0_60px_rgba(255,95,31,0.15)] transition-shadow duration-700 overflow-hidden scale-[1.02] lg:z-10 bg-[var(--bg)]">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]"></div>

              <div className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-medium mb-3">Aylık</div>
              <div className="text-2xl font-medium text-[var(--fg)] mb-8">Profesyonel</div>

              <div className="flex-1 space-y-6">
                <div>
                  <ul className="text-xs text-[var(--muted)] space-y-3 font-normal">
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--accent)] mt-0.5" width="16"></iconify-icon>20 domain'e kadar</li>
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--accent)] mt-0.5" width="16"></iconify-icon>Haftalık tarama &amp; sürekli izleme</li>
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--accent)] mt-0.5" width="16"></iconify-icon>KVKK uyumluluk dashboard'u</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3">Özel Teklif</div>
              <div className="text-2xl font-medium text-[var(--fg)] mb-8">Kurumsal</div>

              <div className="flex-1 space-y-6">
                <div>
                  <ul className="text-xs text-[var(--muted)] space-y-3 font-normal">
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>Sınırsız domain</li>
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>Tüm Profesyonel özellikler</li>
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>SLA garantisi</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--bg)] p-8 flex flex-col hover:border-[var(--muted)] transition-colors duration-500 rounded-none shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-3 flex justify-between items-center">
                <span>Acil</span>
              </div>
              <div className="text-2xl font-medium text-[var(--fg)] mb-8">Olay Müdahalesi</div>

              <div className="flex-1 space-y-6">
                <div>
                  <ul className="text-xs text-[var(--muted)] space-y-3 font-normal">
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>Aktif ihlal tespiti ve müdahale</li>
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>Adli analiz ve zararlı yazılım incelemesi</li>
                    <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[var(--border)] mt-0.5" width="16"></iconify-icon>İhlal sonrası iyileştirme ve danışmanlık</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
