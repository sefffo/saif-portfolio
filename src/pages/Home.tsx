import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import HeroScene from '../components/canvas/HeroScene'
import FloatingParticles from '../components/canvas/FloatingParticles'

export default function Home() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from('.hero-tag', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.hero-line', { y: 120, opacity: 0, duration: 0.9, ease: 'power4.out', stagger: 0.12 }, '-=0.4')
      .from('.hero-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
      .from('.hero-links', { opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-scroll', { opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* Text */}
      <div className="relative z-10 w-full md:w-1/2 px-8 md:px-20 flex flex-col justify-center">
        <p className="hero-tag text-[11px] tracking-[0.4em] text-[#555] uppercase mb-8">
          Cairo, Egypt &nbsp;·&nbsp; Open to Work
        </p>

        <div className="overflow-hidden mb-1">
          <h1 className="hero-line text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.9] tracking-tighter text-white uppercase">
            SAIF
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.9] tracking-tighter text-white uppercase">
            LOTFY
          </h1>
        </div>

        <div className="hero-sub flex items-center gap-4 mt-8">
          <span className="w-10 h-px bg-[#e8ff00]" />
          <p className="text-sm tracking-[0.2em] uppercase text-[#888]">
            .NET Backend Engineer &nbsp;/&nbsp; CS Student
          </p>
        </div>

        <div className="hero-links flex flex-wrap gap-6 mt-10">
          <a
            href="https://github.com/sefffo"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase text-[#555] hover:text-white transition-colors duration-300 border-b border-[#222] pb-1 hover:border-white"
          >GitHub</a>
          <a
            href="https://linkedin.com/in/seif-lotfy"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase text-[#555] hover:text-white transition-colors duration-300 border-b border-[#222] pb-1 hover:border-white"
          >LinkedIn</a>
          <Link
            to="/contact"
            className="text-xs tracking-widest uppercase text-[#555] hover:text-white transition-colors duration-300 border-b border-[#222] pb-1 hover:border-white"
          >Email Me</Link>
          <a
            href="/Saif-Lotfy_CV.pdf"
            download
            className="text-xs tracking-widest uppercase text-[#e8ff00] hover:text-white transition-colors duration-300 border-b border-[#e8ff00] pb-1 hover:border-white"
          >↓ Download CV</a>
        </div>

        <div className="hero-links flex flex-wrap gap-3 mt-8">
          <Link to="/projects" className="px-6 py-3 bg-white text-black text-xs tracking-widest uppercase hover:bg-[#e8ff00] transition-colors duration-300">
            View Work
          </Link>
          <Link to="/about" className="px-6 py-3 border border-[#2a2a2a] text-[#888] text-xs tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300">
            About Me
          </Link>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 70 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <HeroScene />
            <FloatingParticles count={60} />
          </Suspense>
        </Canvas>
      </div>

      {/* Blend gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none z-[1]" />

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-8 md:left-20 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#555]" />
        <span className="text-[10px] tracking-[0.3em] text-[#444] uppercase">Scroll</span>
      </div>
    </section>
  )
}
