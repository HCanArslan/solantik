'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollState } from '../store';

gsap.registerPlugin(ScrollTrigger);

const PinnedStage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Hero Load Animation
      gsap.to('#ui-top, #ui-bottom', { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.3 });
      gsap.to('#hero-solantik, #hero-headline, #hero-descriptor, #hero-ctas', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.4 });

      // Main Timeline
      gsap.set('.feature-card', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#pinned-stage",
          start: "top top",
          end: "+=3800",
          pin: true,
          scrub: isReducedMotion ? true : 1,
          onUpdate: (self) => {
            scrollState.targetProgress = self.progress;
            gsap.set('#scroll-progress', { scaleY: self.progress });
          }
        }
      });

      // PHASE 2: Forward Push
      tl.to('#phase-1-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 0.1)
        .to('#phase-2-content', { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out', pointerEvents: 'auto' }, 0.5)
        .to('#phase-2-scanline', { opacity: 0.35, duration: 0.2, ease: 'power1.inOut' }, 0.6)
        .to('#phase-2-scanline', { top: '110%', duration: 1.2, ease: 'linear' }, 0.6)
        .to('#phase-2-scanline', { opacity: 0, duration: 0.2, ease: 'power1.inOut' }, 1.6);

      // PHASE 3: Content Emergence
      tl.to('#phase-2-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 1.7)
        .to('#phase-3-content', { opacity: 1, duration: 0.8, ease: 'power2.out', pointerEvents: 'auto' }, 1.8)
        .to('#phase-3-intro', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 1.9)
        .fromTo('.feature-card',
            { opacity: 0, y: 30, scale: 0.94, filter: 'blur(12px)', rotateX: 6 },
            { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', rotateX: 0, stagger: 0.18, duration: 1.2, ease: 'power3.out' },
            2.1
        );

      // Hold Cards
      tl.to('.feature-card', { y: -15, duration: 1.8, ease: 'none' }, 3.3);

      // Extra Hold
      tl.to({}, { duration: 0.4 }, 5.1);

      // PHASE 4: Bridge Moment
      tl.to('#phase-3-content', { opacity: 0, y: -40, filter: 'blur(8px)', duration: 1, ease: 'power2.inOut', pointerEvents: 'none' }, 5.5)
        .to('#bridge-content', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', pointerEvents: 'auto' }, 5.8)
        .to('.bridge-stagger', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, 5.9);

      // PHASE 5: Exit
      tl.to('#bridge-content, #ui-top, #ui-bottom', {
          opacity: 0,
          y: -20,
          filter: 'blur(4px)',
          duration: 1,
          ease: 'power2.inOut'
      }, 7.6);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pinned-stage" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent" ref={containerRef}>

      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:px-12 md:py-8 mt-16">
        <div className="flex justify-between items-center opacity-0 translate-y-[-10px]" id="ui-top">
          <div className="text-[10px] font-medium tracking-widest uppercase flex items-center gap-3">
            <span className="text-[var(--muted)]">SYS.01</span>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium">
            Index / 00
          </div>
        </div>

        <div className="flex justify-between items-end opacity-0 translate-y-[10px]" id="ui-bottom">
          <div className="flex flex-col gap-1 text-[10px] text-[var(--muted)] font-medium tracking-widest uppercase">
            <span>Status: Nominal</span>
            <span>Render: Native</span>
          </div>
          <div className="flex flex-col items-end gap-3 text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium">
            <span>Depth Mapping</span>
            <div className="w-[1px] h-12 bg-[var(--border)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[var(--accent)] transform origin-top scale-y-0 will-change-transform" id="scroll-progress"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full z-20 px-6 absolute inset-0 items-center justify-center" style={{ perspective: '1000px' }}>

        {/* Phase 1: Arrival */}
        <div id="phase-1-content" className="absolute flex flex-col items-center justify-center text-center w-full pointer-events-auto px-4">
          <div className="w-full max-w-[980px] mx-auto flex flex-col items-center">
            <div id="hero-solantik" className="mb-5 flex items-center justify-center gap-3 text-xs tracking-[0.5em] uppercase text-[var(--accent)] font-medium font-mono opacity-0 translate-y-[10px]">
              <span className="w-2 h-2 bg-[var(--accent)] inline-block animate-pulse"></span>
              SOLANTIK
              <span className="w-2 h-2 bg-[var(--accent)] inline-block animate-pulse"></span>
            </div>
            <h2 id="hero-headline" className="text-3xl md:text-5xl lg:text-7xl tracking-tight font-medium font-display flex flex-col items-center mb-6 drop-shadow-2xl opacity-0 translate-y-[20px]">
              <span className="whitespace-nowrap text-[var(--fg)]">Sistemleriniz Saldırıya</span>
              <span className="whitespace-nowrap text-[var(--muted)]">Hazır Mı?</span>
            </h2>

            <div className="flex flex-col items-center gap-4 mt-2 opacity-0 translate-y-[15px]" id="hero-descriptor">
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-medium">
                TEST · ANALİZ · RAPORLA · KAPAT
              </span>
              <p className="text-sm md:text-base text-[var(--muted)] font-normal max-w-xl">
                Solantik olarak işletmenizin dijital altyapısını gerçek saldırgan gözüyle test ediyor, açıkları siz fark etmeden kapatıyoruz. Danışmanlıktan ürüne uzanan yolculukta yanınızdayız.
              </p>
            </div>

            <div className="flex gap-4 mt-10 opacity-0 translate-y-[15px]" id="hero-ctas">
              <button
                className="px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 rounded-none focus:outline-none"
                onClick={() => window.lenis?.scrollTo('#iletisim')}
              >
                Güvenlik Değerlendirmesi Talep Et
              </button>
              <button
                className="px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] bg-black/50 backdrop-blur-md text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 rounded-none focus:outline-none hidden sm:block"
                onClick={() => window.lenis?.scrollTo('#hizmetler')}
              >
                Hizmetlerimizi İncele
              </button>
            </div>
          </div>
        </div>

        {/* Phase 2: Forward Push */}
        <div id="phase-2-content" className="absolute inset-0 w-full flex flex-col items-center justify-center text-center opacity-0 pointer-events-none blur-[6px] scale-[0.98] px-4 overflow-hidden">
          <div id="phase-2-grid" className="absolute inset-0 pointer-events-none"></div>
          <div id="phase-2-scanline" className="absolute left-0 right-0 h-px pointer-events-none"></div>
          <div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16 relative z-10">
            <h3 className="text-2xl md:text-4xl tracking-tight font-normal leading-relaxed text-[var(--fg)] drop-shadow-2xl">
              Siber Güvenlik &amp; Pentest
              <br />
              <span className="text-[var(--muted)]">Danışmanlığı</span>
            </h3>
          </div>
        </div>

        {/* Phase 3: Content Emergence with Context */}
        <div id="phase-3-content" className="absolute w-full flex flex-col items-center justify-center opacity-0 pointer-events-none px-4">

          <div id="phase-3-intro" className="w-full max-w-[980px] mx-auto text-center mb-6 px-6 opacity-0 translate-y-[20px]">
            <div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-3 uppercase">SYS.02 / SOLANTIK YAKLAŞIMI</div>
            <h3 className="text-2xl md:text-3xl tracking-tight text-[var(--fg)] font-medium mb-2">Güvenliği saldırgan gözüyle görüyoruz.</h3>
            <p className="text-sm md:text-base text-[var(--muted)] font-normal max-w-xl mx-auto">Açıkları siz fark etmeden buluyoruz.</p>
          </div>

          {/* Grid Cards */}
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
              <div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
                <div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center w-full h-full">
                  <iconify-icon icon="solar:target-linear" width="46" class="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></iconify-icon>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end z-20">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">01</span>
                </div>
                <h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Saldırgan Bakış Açısı</h4>
                <p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Otomatik tarayıcılara değil, uzman saldırgan metodolojisine güveniyoruz.</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
              <div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
                <div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center w-full h-full">
                  <iconify-icon icon="solar:test-tube-linear" width="46" class="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></iconify-icon>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end z-20">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">02</span>
                </div>
                <h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">OWASP Metodolojisi</h4>
                <p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Her test, uluslararası standartlara dayanan belgelenmiş metodolojimizle yürütülür.</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
              <div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
                <div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center w-full h-full">
                  <iconify-icon icon="solar:map-arrow-up-linear" width="46" class="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></iconify-icon>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end z-20">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">03</span>
                </div>
                <h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">Türkçe Raporlama</h4>
                <p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Her bulgu, teknik ekibinizin ve yönetim kurulunuzun anlayabileceği şekilde raporlanır.</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
              <div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
                <div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                  <div className="w-1 h-1 bg-[var(--border)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center w-full h-full">
                  <iconify-icon icon="solar:crosshair-linear" width="46" class="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></iconify-icon>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end z-20">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">04</span>
                </div>
                <h4 className="text-lg tracking-tight font-medium text-[var(--fg)] mb-2 group-hover:text-white transition-colors">KVKK Odaklı</h4>
                <p className="text-[11px] text-[var(--muted)] leading-relaxed font-normal">Teknik güvenlik denetimlerimiz KVKK uyumluluk gereksinimlerini de kapsar.</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        </div>

        {/* Phase 4: Bridge Moment */}
        <div id="bridge-content" className="absolute flex flex-col items-center justify-center text-center w-full opacity-0 pointer-events-none blur-[10px] translate-y-[20px] px-4">
          <div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16">
            <div className="bridge-stagger text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 drop-shadow-xl opacity-0 translate-y-[12px]">
              <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-none"></div>
              [ PROJE_ONAYLANDI ]
            </div>
            <h2 className="bridge-stagger text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--fg)] font-medium drop-shadow-2xl mb-4 opacity-0 translate-y-[12px]">
              Sadece açık bulmuyoruz.
            </h2>
            <p className="bridge-stagger text-sm md:text-base text-[var(--muted)] font-normal max-w-[680px] mx-auto mb-2 opacity-0 translate-y-[12px]">
              Açıkların kaynağını izliyor, etkisini analiz ediyor,
            </p>
            <p className="bridge-stagger text-sm md:text-base text-[var(--fg)] font-medium max-w-[680px] mx-auto opacity-0 translate-y-[12px]">
              ve işletmenizin <span className="text-[var(--accent)]">kalıcı savunma altyapısını</span> birlikte kuruyoruz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PinnedStage;
