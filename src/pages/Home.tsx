import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import HeroScene from '../components/canvas/HeroScene'
import FloatingParticles from '../components/canvas/FloatingParticles'

gsap.registerPlugin(ScrollTrigger)

const pagePreviews = [
  {
    num: '01',
    to: '/about',
    title: 'About',
    desc: 'Who I am — background, experience timeline, education, and what drives me to build.',
  },
  {
    num: '02',
    to: '/skills',
    title: 'Skills',
    desc: '29+ technologies across backend, frontend, databases, and systems.',
  },
  {
    num: '03',
    to: '/projects',
    title: 'Projects',
    desc: 'Production-grade systems: microservices, clean architecture APIs, Angular apps.',
  },
  {
    num: '04',
    to: '/contact',
    title: 'Contact',
    desc: 'Open to roles, freelance, and collaboration. Let\'s build something together.',
  },
]

export default function Home() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.15 })
    tl.from('.hero-tag',    { y: 20,  opacity: 0, duration: 0.6,  ease: 'power3.out' })
      .from('.hero-line',   { y: 110, opacity: 0, duration: 0.85, ease: 'power4.out', stagger: 0.1 }, '-=0.35')
      .from('.hero-meta',   { y: 20,  opacity: 0, duration: 0.55, ease: 'power3.out' }, '-=0.45')
      .from('.hero-cta',    { y: 16,  opacity: 0, duration: 0.5,  ease: 'power3.out', stagger: 0.08 }, '-=0.35')
      .from('.hero-scroll', { opacity: 0, y: 8,   duration: 0.4 }, '-=0.2')

    // Previews scroll animation
    gsap.from('.preview-card', {
      y: 50, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.previews-section', start: 'top 80%' },
    })
    gsap.from('.preview-heading', {
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.previews-section', start: 'top 85%' },
    })
  }, { scope: containerRef })

  return (
    <main ref={containerRef} className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">

        {/* Text block */}
        <div className="relative z-10 w-full md:w-[55%] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="hero-tag flex items-center gap-3 mb-10">
            <span className="accent-dot" />
            <span className="text-[11px] tracking-[0.4em] text-[#444] uppercase">
              Cairo, Egypt &nbsp;·&nbsp; Open to Work
            </span>
          </div>

          <div className="overflow-hidden mb-0">
            <h1 className="hero-line text-[clamp(4rem,12vw,10rem)] font-black leading-[0.88] tracking-[-0.03em] text-white uppercase">
              SAIF
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line text-[clamp(4rem,12vw,10rem)] font-black leading-[0.88] tracking-[-0.03em] text-white uppercase">
              LOTFY
            </h1>
          </div>

          <div className="hero-meta flex flex-wrap items-center gap-4 mt-8 mb-10">
            <span className="w-8 h-px bg-[#e8ff00] shrink-0" />
            <p className="text-[13px] tracking-[0.18em] uppercase text-[#777]">
              .NET Backend Engineer
            </p>
            <span className="text-[#2a2a2a]">·</span>
            <p className="text-[13px] tracking-[0.18em] uppercase text-[#777]">
              CS Student &amp; Instructor
            </p>
            <span className="text-[#2a2a2a]">·</span>
            <p className="text-[13px] tracking-[0.18em] uppercase text-[#777]">
              Team Lead
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              to="/projects"
              className="hero-cta px-7 py-3 bg-white text-black text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#e8ff00] transition-colors duration-300"
            >
              View Work
            </Link>
            <Link
              to="/about"
              className="hero-cta px-7 py-3 border border-[#2a2a2a] text-[#777] text-[11px] tracking-[0.25em] uppercase hover:border-[#555] hover:text-white transition-all duration-300"
            >
              About Me
            </Link>
            <a
              href="/Saif-Lotfy_CV.pdf"
              download="Saif-Lotfy_CV.pdf"
              className="hero-cta cv-btn px-7 py-3 border border-[#e8ff00] text-[#e8ff00] text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#e8ff00] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="hero-cta flex gap-6">
            {[
              { href: 'https://github.com/sefffo',          label: 'GitHub'   },
              { href: 'https://linkedin.com/in/seif-lotfy', label: 'LinkedIn' },
              { href: 'mailto:saiflotfy26@gmail.com',       label: 'Email'    },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="text-[10px] tracking-[0.3em] uppercase text-[#444] hover:text-[#aaa] transition-colors duration-300 border-b border-[#1a1a1a] pb-0.5 hover:border-[#444]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="absolute right-0 top-0 w-full md:w-[50%] h-full">
          <Canvas camera={{ position: [0, 0, 5], fov: 70 }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <HeroScene />
              <FloatingParticles count={60} />
            </Suspense>
          </Canvas>
        </div>

        {/* Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent pointer-events-none z-[1]" />

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-8 md:left-16 lg:left-24 flex flex-col items-center gap-3 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#444]" />
          <span className="text-[9px] tracking-[0.4em] text-[#333] uppercase">Scroll</span>
        </div>

        {/* Available badge */}
        <div className="absolute bottom-10 right-8 md:right-16 z-10 hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e8ff00] animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] text-[#444] uppercase">Available for hire</span>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div className="border-y border-[#1a1a1a] py-4 overflow-hidden">
        <div className="marquee-track">
          {[
            'ASP.NET Core', 'Clean Architecture', 'Microservices',
            'SQL Server', 'Redis', 'JWT Auth', 'Angular 17',
            'Entity Framework', 'Docker', 'SignalR', 'TypeScript',
            'SOLID Principles', 'ASP.NET Core', 'Clean Architecture', 'Microservices',
            'SQL Server', 'Redis', 'JWT Auth', 'Angular 17',
            'Entity Framework', 'Docker', 'SignalR', 'TypeScript',
            'SOLID Principles',
          ].map((t, i) => (
            <span key={i} className="text-[11px] tracking-[0.3em] uppercase text-[#2a2a2a] shrink-0">
              {t} <span className="text-[#e8ff00] mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── PAGE PREVIEWS ─── */}
      <section className="previews-section px-8 md:px-16 lg:px-24 py-28 border-b border-[#1a1a1a]">
        <div className="preview-heading flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Explore</p>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
              What's Inside<br />
              <span className="text-[#e8ff00]">This Portfolio.</span>
            </h2>
          </div>
          <p className="text-[#444] text-sm max-w-xs leading-relaxed">
            A full picture of who I am, what I build, and how I think — from systems architecture to teaching code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pagePreviews.map((p) => (
            <Link
              key={p.num}
              to={p.to}
              className="preview-card group card-border p-6 flex flex-col gap-5 hover:bg-[#0d0d0d] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-[#1c1c1c] group-hover:text-[#252525] transition-colors">{p.num}</span>
                <span className="text-[#333] group-hover:text-[#e8ff00] transition-colors duration-300 text-lg">↗</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-widest mb-2 group-hover:text-[#e8ff00] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-[#444] text-xs leading-relaxed group-hover:text-[#666] transition-colors duration-300">
                  {p.desc}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#1a1a1a] group-hover:border-[#2a2a2a] transition-colors">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#333] group-hover:text-[#e8ff00] transition-colors duration-300">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── QUICK STATS ─── */}
      <section className="px-8 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '3+',   label: 'Years Coding'          },
            { num: '10+',  label: 'Projects Built'         },
            { num: '3.72', label: 'University GPA'         },
            { num: '29+',  label: 'Technologies'           },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="text-5xl md:text-6xl font-black text-white leading-none">{num}</span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#333]">{label}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
