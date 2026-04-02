'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { THEMES, scrollState } from '../store';

// We export this proxy so GSAP in app/page.jsx can tween its properties
export const themeProxy = {
  bg: new THREE.Color(THEMES[0].bg),
  accent: new THREE.Color(THEMES[0].accent),
  toThreeColor: (hex) => new THREE.Color(hex)
};

const WebGLBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const CONFIG = {
      particleCount: 12000,
      particleSize: 1.5,
      spread: 2500,
      orbRadius: 280,
      cameraZStart: 600,
      cameraZEnd: 150,
      idleRotationSpeed: isReducedMotion ? 0.0001 : 0.0008,
      scrollRotationFactor: isReducedMotion ? 0 : 0.5
    };

    let scene, camera, renderer, particles;
    let animationFrameId;

    const webglState = {
      fieldPositions: null,
      orbPositions: null
    };

    const initWebGL = () => {
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(themeProxy.bg.getHex(), 0.0015);
      scene.background = themeProxy.bg;

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
      camera.position.z = CONFIG.cameraZStart;

      renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance", alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      initParticles();
      window.addEventListener('resize', resizeWebGL);
      renderWebGL();
    };

    const initParticles = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array(CONFIG.particleCount * 3);

      webglState.fieldPositions = new Float32Array(CONFIG.particleCount * 3);
      webglState.orbPositions = new Float32Array(CONFIG.particleCount * 3);

      for (let i = 0; i < CONFIG.particleCount; i++) {
        webglState.fieldPositions[i*3] = (Math.random() - 0.5) * CONFIG.spread;
        webglState.fieldPositions[i*3+1] = (Math.random() - 0.5) * CONFIG.spread;
        webglState.fieldPositions[i*3+2] = (Math.random() - 0.5) * CONFIG.spread;

        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = CONFIG.orbRadius * Math.cbrt(Math.random());

        webglState.orbPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        webglState.orbPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        webglState.orbPositions[i*3+2] = r * Math.cos(phi);

        vertices[i*3] = webglState.orbPositions[i*3];
        vertices[i*3+1] = webglState.orbPositions[i*3+1];
        vertices[i*3+2] = webglState.orbPositions[i*3+2];
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

      const material = new THREE.PointsMaterial({
        color: themeProxy.accent,
        size: CONFIG.particleSize,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    };

    const resizeWebGL = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const renderWebGL = () => {
      animationFrameId = requestAnimationFrame(renderWebGL);

      scrollState.scrollProgress += (scrollState.targetProgress - scrollState.scrollProgress) * 0.05;

      const p = scrollState.scrollProgress;
      const t = Math.max(0, Math.min(1, (p - 0.15) / (0.75 - 0.15)));
      const smooth = t * t * (3 - 2 * t);

      let orbMix = 0.8 * (1 - smooth);
      orbMix = Math.max(orbMix, 0.12);

      const positions = particles.geometry.attributes.position.array;
      const field = webglState.fieldPositions;
      const orb = webglState.orbPositions;

      for (let i = 0; i < positions.length; i++) {
        positions[i] = field[i] + (orb[i] - field[i]) * orbMix;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      if (!isReducedMotion) {
        camera.position.z = CONFIG.cameraZStart - ((CONFIG.cameraZStart - CONFIG.cameraZEnd) * scrollState.scrollProgress);
        scene.fog.density = 0.0015 + (scrollState.scrollProgress * 0.0005);

        const dynamicRotation = CONFIG.idleRotationSpeed + (p * 0.001);
        particles.rotation.y += dynamicRotation;
        particles.rotation.x = scrollState.scrollProgress * CONFIG.scrollRotationFactor;
      } else {
        particles.rotation.y += CONFIG.idleRotationSpeed;
      }

      scene.background.copy(themeProxy.bg);
      scene.fog.color.copy(themeProxy.bg);
      particles.material.color.copy(themeProxy.accent);

      renderer.render(scene, camera);
    };

    initWebGL();

    return () => {
      window.removeEventListener('resize', resizeWebGL);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div id="webgl-container" className="fixed inset-0 z-0 pointer-events-none w-full h-full" ref={containerRef}>
      <div className="absolute inset-0 bg-noise z-10"></div>
    </div>
  );
};

export default WebGLBackground;
