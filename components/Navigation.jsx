'use client'

import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg)]/60 border-b border-[var(--border)] transition-colors duration-700 pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex-1 pointer-events-auto flex items-center">
          <div
            onClick={() => window.lenis?.scrollTo('#pinned-stage')}
            className="text-[var(--fg)] font-display font-medium text-lg tracking-widest cursor-pointer hover:text-[var(--accent)] transition-colors flex items-center gap-2"
          >
            Solantik
          </div>
        </div>
        <div className="flex-none hidden lg:flex gap-8 items-center pointer-events-auto">
          <a href="#hakkimizda" className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1">Hakkımızda</a>
          <a href="#overview" className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1">Süreç</a>
          <a href="#interface" className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1">Neden Solantik</a>
          <a href="#hizmetler" className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1">Hizmetler</a>
          <a href="#platform" className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative pb-1">Platform</a>
        </div>
        <div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
          <div className="hidden xl:flex flex-col items-end text-[10px] tracking-widest uppercase text-[var(--muted)]">
            <span className="text-[var(--accent)] flex items-center gap-2">
              <span className="w-1 h-1 bg-[var(--accent)] block rounded-none animate-pulse"></span>
              Sistem.Aktif
            </span>
            <span>Güvenli Bağlantı</span>
          </div>
          <button
            className="text-xs uppercase tracking-widest border border-[var(--border)] bg-transparent px-6 py-2.5 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors font-medium rounded-none focus:outline-none text-[var(--fg)]"
            onClick={() => window.lenis?.scrollTo('#iletisim')}
          >
            Ücretsiz Danışma Al
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
