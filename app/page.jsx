'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navigation from '../components/Navigation'
import WebGLBackground, { themeProxy } from '../components/WebGLBackground'
import PinnedStage from '../components/PinnedStage'
import Manifesto from '../components/Manifesto'
import Overview from '../components/Overview'
import Interface from '../components/Interface'
import Modules from '../components/Modules'
import Pricing from '../components/Pricing'
import Access from '../components/Access'

import { THEMES } from '../store'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const appRef = useRef(null)
  const lenisRef = useRef(null)

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    lenisRef.current = new Lenis({
      duration: 2.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: !isReducedMotion,
      smoothTouch: false,
      touchMultiplier: 1.05,
      wheelMultiplier: 0.75
    })

    lenisRef.current.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenisRef.current?.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)

    window.lenis = lenisRef.current

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        lenisRef.current?.scrollTo(href, { offset: 0, duration: 1.8 })
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
      gsap.ticker.remove((time) => { lenisRef.current?.raf(time * 1000) })
      lenisRef.current?.destroy()
    }
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      const navLinks = document.querySelectorAll('.nav-link')

      THEMES.forEach((theme, index) => {
        ScrollTrigger.create({
          trigger: theme.id,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => applyTheme(theme),
          onEnterBack: () => applyTheme(theme),
        })

        if (index > 0) {
          ScrollTrigger.create({
            trigger: theme.id,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive && navLinks[index - 1]) {
                navLinks.forEach(l => l.classList.remove('is-active'))
                navLinks[index - 1].classList.add('is-active')
              }
            }
          })
        }
      })

      function applyTheme(theme) {
        gsap.to(document.documentElement, {
          '--bg': theme.bg,
          '--accent': theme.accent,
          '--border': theme.border,
          '--panel': theme.panel,
          duration: 1.2,
          ease: "power2.out"
        })

        gsap.to(themeProxy.bg, {
          r: themeProxy.toThreeColor(theme.bg).r,
          g: themeProxy.toThreeColor(theme.bg).g,
          b: themeProxy.toThreeColor(theme.bg).b,
          duration: 1.2
        })

        gsap.to(themeProxy.accent, {
          r: themeProxy.toThreeColor(theme.accent).r,
          g: themeProxy.toThreeColor(theme.accent).g,
          b: themeProxy.toThreeColor(theme.accent).b,
          duration: 1.2
        })
      }

      document.querySelectorAll('.reveal-text').forEach(text => {
        gsap.fromTo(text,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text.closest('.reveal-block'),
              start: 'top 85%'
            }
          }
        )
      })

      document.querySelectorAll('.reveal-block').forEach(block => {
        gsap.fromTo(block.querySelectorAll('.reveal-item'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%'
            }
          }
        )
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef}>
      <Navigation />
      <WebGLBackground />
      <main id="app-wrapper" className="relative z-10 w-full pb-24">
        <PinnedStage />
        <Manifesto />
        <Overview />
        <Interface />
        <Modules />
        <Pricing />
        <Access />
      </main>
    </div>
  )
}
