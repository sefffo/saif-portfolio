import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-5">
        {/* Logo */}
        <NavLink to="/" className="text-white font-black text-sm tracking-[0.3em] uppercase">
          SL<span className="text-[#e8ff00]">.</span>
        </NavLink>

        {/* Desktop links */}
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

        {/* CV Download button */}
        <a
          href="/Saif-Lotfy_CV.pdf"
          download
          className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] px-5 py-2 hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
        >
          <span>↓</span> CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-8 py-6 flex flex-col gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/Saif-Lotfy_CV.pdf"
            download
            className="text-[11px] tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] px-5 py-2 text-center hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
          >
            ↓ Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
