import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-[#ffffff08] shadow-[0_1px_40px_#00000080]'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="h-full flex items-center justify-between px-8 md:px-16 lg:px-24">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-white font-black text-base tracking-[0.25em] uppercase group-hover:text-[#e8ff00] transition-colors duration-300">
              SAIF LOTFY
            </span>
            <span className="accent-dot" />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* CV Button */}
          <a
            href="/Saif-Lotfy_CV.pdf"
            download="Saif-Lotfy_CV.pdf"
            className="cv-btn hidden md:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase border border-[#e8ff00] text-[#e8ff00] px-5 py-2.5 hover:bg-[#e8ff00] hover:text-black transition-all duration-300 font-semibold"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
              <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1.5px] bg-white origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-white origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center px-10 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 mb-12">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-4xl font-black uppercase tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-[#e8ff00]' : 'text-[#333] hover:text-white'
                }`
              }
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <a
          href="/Saif-Lotfy_CV.pdf"
          download="Saif-Lotfy_CV.pdf"
          onClick={() => setMenuOpen(false)}
          className="text-[11px] tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] px-6 py-3 text-center hover:bg-[#e8ff00] hover:text-black transition-all duration-300 w-fit"
        >
          ↓ Download Resume
        </a>
        <p className="mt-8 text-[#222] text-xs tracking-widest uppercase">saiflotfy26@gmail.com</p>
      </div>
    </>
  )
}
