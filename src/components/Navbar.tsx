import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { to: '/',         label: 'Home'     },
    { to: '/about',    label: 'About'    },
    { to: '/skills',   label: 'Skills'   },
    { to: '/projects', label: 'Projects' },
    { to: '/contact',  label: 'Contact'  },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0d0f14]/90 backdrop-blur-2xl border-b border-[#1f2434] shadow-[0_1px_40px_#00000080]'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="h-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-7 h-7 rounded bg-[#7c6aff] flex items-center justify-center">
              <span className="text-white font-black text-xs">SL</span>
            </div>
            <span className="text-white font-bold text-sm tracking-wide group-hover:text-[#a78bfa] transition-colors duration-300">
              Saif Lotfy
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-9">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CV button — FIXED href */}
          <a
            href="/Saif%20Lotfy_CV.pdf"
            download="Saif-Lotfy_CV.pdf"
            className="cv-btn hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase bg-[#7c6aff] text-white px-5 py-2.5 font-semibold hover:bg-[#6c5ce7] transition-colors duration-300 rounded flex-shrink-0"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer z-60"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1.5px] bg-white origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-white origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0d0f14]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between px-10 py-16 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>

        {/* Top: logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded bg-[#7c6aff] flex items-center justify-center">
            <span className="text-white font-black text-xs">SL</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">Saif Lotfy</span>
        </div>

        {/* Middle: nav links */}
        <div className="flex flex-col gap-6">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-4xl font-black uppercase tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-[#7c6aff]' : 'text-[#2a3045] hover:text-white'
                }`
              }
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
            >{l.label}</NavLink>
          ))}
        </div>

        {/* Bottom: CTA + email */}
        <div className="flex flex-col gap-5">
          {/* FIXED href */}
          <a
            href="/Saif%20Lotfy_CV.pdf"
            download="Saif-Lotfy_CV.pdf"
            onClick={() => setMenuOpen(false)}
            className="bg-[#7c6aff] text-white text-[11px] tracking-[0.2em] uppercase px-6 py-3.5 text-center font-semibold w-full rounded hover:bg-[#6c5ce7] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Download Resume
          </a>

          <div className="border-t border-[#1e2235] pt-5 flex items-center justify-between">
            <p className="text-[#2a3045] text-xs tracking-widest uppercase">saiflotfy26@gmail.com</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[10px] tracking-widest text-[#2a3045] uppercase">Available</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
