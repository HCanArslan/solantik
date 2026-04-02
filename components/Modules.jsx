'use client'

import React from 'react';

const Modules = () => {
  return (
    <section id="hizmetler" className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block">
      <div className="section-slab">
        <div className="section-inner max-w-7xl mx-auto">

          <div className="mb-12 text-center reveal-item">
            <div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-4 uppercase">SYS.03 / HİZMETLER</div>
            <h2 className="text-3xl font-medium tracking-tight text-[var(--fg)] mb-4">Kapsamlı Güvenlik. Her Boyutta İşletme İçin.</h2>
            <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
              Büyük kurumsal firmalar için tasarlanmış güvenlik hizmetlerini KOBİ'lerin anlayabileceği dilde ve erişebileceği fiyatta sunuyoruz.
            </p>
          </div>

          {/* Mini Pipeline Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 text-[10px] md:text-xs uppercase tracking-widest text-[var(--muted)] font-medium reveal-item">
            <span className="text-[var(--fg)]">Test</span>
            <iconify-icon icon="solar:arrow-right-linear" class="hidden md:block text-[var(--accent)]" width="16"></iconify-icon>
            <iconify-icon icon="solar:arrow-down-linear" class="md:hidden text-[var(--accent)]" width="16"></iconify-icon>
            <span className="text-[var(--fg)]">Analiz</span>
            <iconify-icon icon="solar:arrow-right-linear" class="hidden md:block text-[var(--accent)]" width="16"></iconify-icon>
            <iconify-icon icon="solar:arrow-down-linear" class="md:hidden text-[var(--accent)]" width="16"></iconify-icon>
            <span className="text-[var(--fg)]">Raporlama</span>
            <iconify-icon icon="solar:arrow-right-linear" class="hidden md:block text-[var(--accent)]" width="16"></iconify-icon>
            <iconify-icon icon="solar:arrow-down-linear" class="md:hidden text-[var(--accent)]" width="16"></iconify-icon>
            <span className="text-[var(--accent)]">Danışmanlık</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal-item">

            <div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
              <iconify-icon icon="solar:bug-minimalistic-linear" width="24" class="text-[var(--accent)] mb-6"></iconify-icon>
              <h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Web Uygulama Sızma Testi</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">OWASP Top 10 ve ötesini kapsayan metodolojimizle web uygulamalarınızı derinlemesine test ediyoruz. SQL injection, XSS, IDOR ve iş mantığı açıkları Türkçe raporla teslim edilir.</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
                <span>OWASP</span><span className="opacity-30">•</span><span>SQL</span><span className="opacity-30">•</span><span>XSS</span>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
              <iconify-icon icon="solar:shield-warning-linear" width="24" class="text-[var(--accent)] mb-6"></iconify-icon>
              <h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Red Team Operasyonları</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Gerçek bir saldırganın TTP'lerini simüle ediyoruz. Sosyal mühendislik, fiziksel güvenlik ve ağ sızma testlerini kapsayan tam spektrum red team hizmeti.</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
                <span>APT Sim</span><span className="opacity-30">•</span><span>Social Eng</span><span className="opacity-30">•</span><span>Persistence</span>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
              <iconify-icon icon="solar:shield-cross-linear" width="24" class="text-[var(--accent)] mb-6"></iconify-icon>
              <h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Kaynak Kod Analizi</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Uygulamanız production'a geçmeden güvenlik açıklarını tespit ediyoruz. Statik analiz araçlarını manuel uzman incelemesiyle birleştiren hibrit yaklaşım.</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
                <span>SAST</span><span className="opacity-30">•</span><span>Manuel</span><span className="opacity-30">•</span><span>Hibrit</span>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
              <iconify-icon icon="solar:radar-linear" width="24" class="text-[var(--accent)] mb-6"></iconify-icon>
              <h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Tehdit Modellemesi</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Sisteminizin saldırı yüzeyini haritalıyor, olası tehditleri önceliklendiriyor ve savunma stratejinizi somut verilerle şekillendiriyoruz.</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
                <span>STRIDE</span><span className="opacity-30">•</span><span>PASTA</span><span className="opacity-30">•</span><span>Architecture</span>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
              <iconify-icon icon="solar:siren-linear" width="24" class="text-[var(--accent)] mb-6"></iconify-icon>
              <h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">Güvenlik Açığı Değerlendirmesi</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Ağ altyapınızı, bulut ortamınızı ve uç nokta cihazlarınızı tarayarak bilinen açıkları tespit ediyoruz. Her bulgu CVSS skoru ve öncelik sıralamasıyla raporlanır.</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
                <span>CVSS</span><span className="opacity-30">•</span><span>Ağ</span><span className="opacity-30">•</span><span>Bulut</span>
              </div>
            </div>

            <div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-6 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
              <iconify-icon icon="solar:users-group-two-rounded-linear" width="24" class="text-[var(--accent)] mb-6"></iconify-icon>
              <h3 className="text-base text-[var(--fg)] font-medium mb-2 group-hover:text-white transition-colors">KVKK Teknik Uyumluluk</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-6">Kişisel verilerin teknik güvenliğini denetliyor, KVKK'nın 12. maddesi kapsamındaki teknik tedbirleri uygulamanıza destek oluyoruz.</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--muted)] flex justify-between gap-2">
                <span>KVKK</span><span className="opacity-30">•</span><span>Uyum</span><span className="opacity-30">•</span><span>Danışmanlık</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Modules;
