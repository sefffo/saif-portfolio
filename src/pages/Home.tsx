import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import HeroScene from '../components/canvas/HeroScene'
import FloatingParticles from '../components/canvas/FloatingParticles'

gsap.registerPlugin(ScrollTrigger)

const previews = [
  { num: '01', to: '/about',    title: 'About',    desc: 'Background, NAID internship, Savvy instructor, team leadership.' },
  { num: '02', to: '/skills',   title: 'Skills',   desc: '.NET, Node.js, Angular, Redis, Docker — 29+ technologies.' },
  { num: '03', to: '/projects', title: 'Projects', desc: 'Microservices, Clean Architecture APIs, production portals.' },
  { num: '04', to: '/contact',  title: 'Contact',  desc: 'Open to roles, freelance, or collaboration.' },
]

const stats = [
  { num: '3+',   label: 'Years Coding'  },
  { num: '10+',  label: 'Projects Built' },
  { num: '3.72', label: 'GPA'           },
  { num: '29+',  label: 'Technologies'  },
]

// Floating chips — positioned around the 3D canvas
const chips = [
  { text: 'ASP.NET Core',     top: '18%', right: '28%' },
  { text: 'Microservices',    top: '30%', right: '6%'  },
  { text: 'Clean Arch',       top: '50%', right: '22%' },
  { text: 'SQL Server',       top: '65%', right: '10%' },
  { text: 'Angular 17',       top: '75%', right: '30%' },
  { text: 'Node.js',          top: '22%', right: '50%' },
]

export default function Home() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 })
    tl.from('.h-tag',    { y: 20,  opacity: 0, duration: 0.6,  ease: 'power3.out' })
      .from('.h-line',   { y: 100, opacity: 0, duration: 0.85, ease: 'power4.out', stagger: 0.1 }, '-=0.3')
      .from('.h-quote',  { y: 20,  opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.4')
      .from('.h-meta',   { y: 20,  opacity: 0, duration: 0.55, ease: 'power3.out' }, '-=0.4')
      .from('.h-cta',    { y: 16,  opacity: 0, duration: 0.45, ease: 'power3.out', stagger: 0.07 }, '-=0.3')
      .from('.h-scroll', { opacity: 0, y: 8, duration: 0.4 }, '-=0.2')
      .from('.hero-chip', { opacity: 0, y: 15, stagger: 0.12, duration: 0.5, ease: 'power2.out' }, '-=0.3')

    // Chips float up/down continuously
    gsap.utils.toArray<HTMLElement>('.hero-chip').forEach((el, i) => {
      gsap.to(el, {
        y: `${-8 - i * 3}px`,
        duration: 2.2 + i * 0.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
      })
    })

    gsap.from('.prev-heading', {
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.prev-section', start: 'top 82%' },
    })
    gsap.from('.prev-card', {
      y: 50, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.prev-section', start: 'top 78%' },
    })
    gsap.from('.stat-item', {
      y: 30, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.stats-section', start: 'top 85%' },
    })
  }, { scope: ref })

  return (
    <main ref={ref} className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">

        <div className="relative z-10 w-full md:w-[55%] px-6 md:px-10 lg:px-16 flex flex-col justify-center">

          <div className="h-tag flex items-center gap-3 mb-10">
            <span className="accent-dot" />
            <span className="text-[11px] tracking-[0.4em] text-[#374151] uppercase">Cairo, Egypt · Open to Work</span>
            <span className="flex items-center gap-1.5 ml-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[10px] tracking-widest text-[#374151] uppercase">Available</span>
            </span>
          </div>

          <div className="overflow-hidden mb-1">
            <h1 className="h-line font-display text-[clamp(3.8rem,11vw,9.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-white uppercase">SAIF</h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="h-line font-display text-[clamp(3.8rem,11vw,9.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-white uppercase">LOTFY</h1>
          </div>

          <p className="h-quote text-[clamp(0.85rem,1.5vw,1rem)] text-[#6b7280] italic mb-6 max-w-sm leading-relaxed">
            &ldquo;I build scalable systems under the hood.&rdquo;
          </p>

          <div className="h-meta flex flex-wrap items-center gap-3 mb-10">
            {['.NET Backend Engineer', 'CS Student', 'Instructor', 'Team Lead'].map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                <span className="text-[12px] tracking-[0.15em] uppercase text-[#4b5563]">{t}</span>
                {i < 3 && <span className="text-[#1e2235]">·</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link to="/projects"
              className="h-cta px-7 py-3 bg-[#7c6aff] text-white text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#6c5ce7] transition-colors duration-300 rounded">
              View Work
            </Link>
            <Link to="/about"
              className="h-cta px-7 py-3 border border-[#1e2235] text-[#6b7280] text-[11px] tracking-[0.2em] uppercase hover:border-[#7c6aff] hover:text-[#a78bfa] transition-all duration-300 rounded">
              About Me
            </Link>
            <a
              href="/Saif-Lotfy_CV.pdf"
              download
              className="h-cta cv-btn px-7 py-3 border border-[#7c6aff]/50 text-[#a78bfa] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#7c6aff] hover:text-white transition-all duration-300 rounded flex items-center gap-2"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Resume
            </a>
          </div>

          <div className="h-cta flex gap-6">
            {[
              { href: 'https://github.com/sefffo',          label: 'GitHub'   },
              { href: 'https://linkedin.com/in/seif-lotfy', label: 'LinkedIn' },
              { href: 'mailto:saiflotfy26@gmail.com',       label: 'Email'    },
            ].map(({ href, label }) => (
              <a key={label} href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="text-[10px] tracking-[0.3em] uppercase text-[#374151] hover:text-[#a78bfa] transition-colors duration-300 border-b border-[#1e2235] pb-0.5 hover:border-[#7c6aff]"
              >{label}</a>
            ))}
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="absolute right-0 top-0 w-full md:w-[52%] h-full">
          <Canvas camera={{ position: [0, 0, 5], fov: 70 }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <HeroScene />
              <FloatingParticles count={60} />
            </Suspense>
          </Canvas>
        </div>

        {/* Floating tech chips (above canvas) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
          {chips.map((chip) => (
            <div key={chip.text} className="hero-chip"
              style={{ top: chip.top, right: chip.right }}>
              <span className="c-dot" />
              {chip.text}
            </div>
          ))}
        </div>

        {/* Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/80 to-transparent pointer-events-none z-[1]" />

        {/* Scroll indicator */}
        <div className="h-scroll absolute bottom-10 left-6 md:left-10 lg:left-16 flex flex-col items-center gap-3 z-10">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#374151]" />
          <span className="text-[9px] tracking-[0.4em] text-[#2a3045] uppercase">Scroll</span>
        </div>

        {/* Available badge */}
        <div className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] text-[#374151] uppercase">Available for hire</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-[#1e2235] py-4 overflow-hidden">
        <div className="marquee-track">
          {[
            'ASP.NET Core','Clean Architecture','Microservices','Node.js',
            'SQL Server','Redis','JWT · OAuth2','Angular 17','EF Core',
            'Docker','SignalR','TypeScript','SOLID Principles',
            'ASP.NET Core','Clean Architecture','Microservices','Node.js',
            'SQL Server','Redis','JWT · OAuth2','Angular 17','EF Core',
            'Docker','SignalR','TypeScript','SOLID Principles',
          ].map((t, i) => (
            <span key={i} className="text-[11px] tracking-[0.25em] uppercase text-[#1e2235] shrink-0">
              {t} <span className="text-[#7c6aff] mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PAGE PREVIEWS ── */}
      <section className="prev-section max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28">
        <div className="prev-heading flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Explore</p>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
              What’s Inside<br />
              <span className="grad-text">This Portfolio.</span>
            </h2>
          </div>
          <p className="text-[#4b5563] text-sm max-w-xs leading-relaxed">
            From scalable backend systems to real production code — a full picture of who I am and what I build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previews.map((p) => (
            <Link key={p.num} to={p.to}
              className="prev-card card p-6 flex flex-col gap-5 rounded-lg group hover:border-[#7c6aff]/50 transition-all duration-300">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-[#1e2235] group-hover:text-[#272d42] transition-colors">{p.num}</span>
                <span className="text-[#272d42] group-hover:text-[#7c6aff] transition-colors duration-300 text-lg">↗</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-[#a78bfa] transition-colors">{p.title}</h3>
                <p className="text-[#374151] text-xs leading-relaxed group-hover:text-[#6b7280] transition-colors">{p.desc}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#1e2235] group-hover:border-[#7c6aff]/30 transition-colors">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#272d42] group-hover:text-[#7c6aff] transition-colors">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section border-t border-[#1e2235]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(({ num, label }) => (
            <div key={label} className="stat-item flex flex-col gap-2">
              <span className="grad-text text-5xl md:text-6xl font-black leading-none">{num}</span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#374151]">{label}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
