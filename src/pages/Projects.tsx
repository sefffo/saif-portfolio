import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    title: 'E-Commerce API',
    subtitle: 'Backend — ASP.NET Core · Clean Architecture',
    description:
      'Production-grade RESTful API built with Clean Architecture (Domain, Application, Infrastructure, API layers). Includes full auth system with JWT and Google OAuth2, role-based authorization, and modules for Products, Categories, Cart, Orders, Payments, Delivery, Reviews, and Admin.',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server', 'Redis', 'JWT', 'OAuth2', 'Clean Architecture'],
    github: 'https://github.com/sefffo/ECommerce-Web-API',
    live: '',
    arch: [
      { layer: 'API Layer', desc: 'Controllers · Middleware · Swagger · DI', color: '#e8ff00' },
      { layer: 'Application Layer', desc: 'Services · DTOs · AutoMapper · Validation', color: '#c8d400' },
      { layer: 'Infrastructure Layer', desc: 'EF Core · Redis · Migrations · Repositories', color: '#888' },
      { layer: 'Domain Layer', desc: 'Entities · Interfaces · Business Rules', color: '#444' },
    ],
    highlights: [
      'JWT + Google OAuth2 authentication with role-based authorization',
      'Redis caching layer for high-frequency reads (product catalog, sessions)',
      'EF Core with LINQ, migrations, pagination, filtering, sorting and search',
      'Global exception handler + structured logging + Swagger docs',
      'Microservices-oriented modular design',
    ],
  },
  {
    number: '02',
    title: 'E-Commerce Web App',
    subtitle: 'Frontend — Angular 17 · TypeScript · RxJS',
    description:
      'Full-featured online shopping platform with responsive UI, product catalog, cart, wishlist, and order management. Built with Clean Architecture principles on the frontend using Angular 17 with lazy loading, RxJS state management, and NgRx.',
    tech: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'Angular Material'],
    github: 'https://github.com/sefffo/E-commApp',
    live: '',
    arch: [
      { layer: 'Pages / Views', desc: 'Product · Cart · Auth · Orders · Profile', color: '#e8ff00' },
      { layer: 'State (NgRx)', desc: 'Actions · Reducers · Selectors · Effects', color: '#c8d400' },
      { layer: 'Services Layer', desc: 'HTTP Interceptors · API Services · Guards', color: '#888' },
      { layer: 'Shared Modules', desc: 'Components · Pipes · Directives · Models', color: '#444' },
    ],
    highlights: [
      'Lazy loading for all feature modules — fast initial load',
      'HTTP Interceptors for JWT token injection and error handling',
      'Reactive forms with full validation and real-time feedback',
      'RxJS operators for efficient async data streams',
      'Responsive design with Tailwind + Angular Material',
    ],
  },
  {
    number: '03',
    title: 'This Portfolio',
    subtitle: 'Frontend — React · Three.js · GSAP',
    description:
      'Personal portfolio built from scratch with React, TypeScript, Three.js (R3F), GSAP scroll animations, and Lenis smooth scroll. Editorial black & white design with 3D scenes, grain texture overlay, and Tailwind v4.',
    tech: ['React', 'TypeScript', 'Three.js', 'R3F', 'GSAP', 'Lenis', 'Tailwind v4'],
    github: 'https://github.com/sefffo/saif-portfolio',
    live: '',
    arch: [
      { layer: 'Pages', desc: 'Home · About · Skills · Projects · Contact', color: '#e8ff00' },
      { layer: 'Canvas (R3F)', desc: 'HeroScene · FloatingParticles · SkillsCube', color: '#c8d400' },
      { layer: 'Animations', desc: 'GSAP ScrollTrigger · Framer Motion · Lenis', color: '#888' },
      { layer: 'Styling', desc: 'Tailwind v4 · CSS Variables · Grain Overlay', color: '#444' },
    ],
    highlights: [
      '3D distorted sphere with Three.js MeshDistortMaterial',
      'GSAP ScrollTrigger for per-section scroll animations',
      'Lenis smooth scroll synced with GSAP ticker',
      'React Router v7 multi-page SPA',
      'Mobile-responsive with hamburger nav',
    ],
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.proj-header', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
    gsap.from('.project-block', {
      y: 80, opacity: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-list', start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-28 pb-24 px-8 md:px-20 page-enter">
      <p className="proj-header text-[11px] tracking-[0.4em] text-[#444] uppercase mb-6">003 / Projects</p>
      <h1 className="proj-header text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-4">
        Selected<br /><span className="text-[#e8ff00]">Work.</span>
      </h1>
      <p className="proj-header text-[#555] text-sm mb-20 max-w-lg leading-relaxed">
        Real projects with real architecture. Click any GitHub link to explore the full source code.
      </p>

      <div className="projects-list flex flex-col gap-24">
        {projects.map((project) => (
          <div key={project.number} className="project-block border-t border-[#1a1a1a] pt-10">
            {/* Project header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-5xl font-black text-[#1a1a1a]">{project.number}</span>
                  <div>
                    <h2 className="text-2xl font-black text-white">{project.title}</h2>
                    <p className="text-xs tracking-widest text-[#555] uppercase">{project.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] tracking-[0.3em] uppercase border border-[#2a2a2a] text-[#888] px-4 py-2 hover:border-white hover:text-white transition-all duration-300"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] px-4 py-2 hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left — Description + highlights */}
              <div>
                <p className="text-[#666] text-sm leading-relaxed mb-8">{project.description}</p>

                <p className="text-[10px] tracking-[0.4em] uppercase text-[#333] mb-4">Key Features</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#555] leading-relaxed">
                      <span className="text-[#e8ff00] shrink-0 mt-0.5">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] tracking-widest uppercase border border-[#1f1f1f] text-[#333] px-3 py-1 hover:border-[#333] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Architecture diagram */}
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#333] mb-4">Architecture</p>
                <div className="flex flex-col gap-2">
                  {project.arch.map((layer, i) => (
                    <div
                      key={layer.layer}
                      className="border border-[#1a1a1a] p-4 hover:border-[#2a2a2a] transition-colors relative overflow-hidden group"
                      style={{ opacity: 1 - i * 0.05 }}
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:w-1"
                        style={{ background: layer.color }}
                      />
                      <div className="pl-4">
                        <p className="text-sm font-semibold text-white mb-0.5" style={{ color: layer.color }}>
                          {layer.layer}
                        </p>
                        <p className="text-xs text-[#444]">{layer.desc}</p>
                      </div>
                      {i < project.arch.length - 1 && (
                        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-full text-[#333] text-xs">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
