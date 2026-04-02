// Shared state for communication between GSAP/ScrollTrigger and Three.js
export const scrollState = {
  scrollProgress: 0,
  targetProgress: 0
};

export const THEMES = [
  { id: '#pinned-stage', bg: '#030303', accent: '#FF5F1F', border: '#1e1e1e', panel: 'rgba(20, 20, 20, 0.4)' },
  { id: '#hakkimizda',   bg: '#050508', accent: '#E6551C', border: '#1a1c23', panel: 'rgba(15, 20, 30, 0.4)' },
  { id: '#overview',     bg: '#02040a', accent: '#FF5F1F', border: '#161b22', panel: 'rgba(10, 15, 25, 0.4)' },
  { id: '#interface',    bg: '#000000', accent: '#CC4C18', border: '#171717', panel: 'rgba(15, 15, 15, 0.4)' },
  { id: '#hizmetler',    bg: '#05030a', accent: '#FF5F1F', border: '#201633', panel: 'rgba(20, 15, 35, 0.4)' },
  { id: '#platform',     bg: '#020202', accent: '#FF5F1F', border: '#111111', panel: 'rgba(10, 10, 10, 0.4)' },
  { id: '#iletisim',     bg: '#000000', accent: '#FF5F1F', border: '#1a1a1a', panel: 'rgba(15, 15, 15, 0.4)' }
];
