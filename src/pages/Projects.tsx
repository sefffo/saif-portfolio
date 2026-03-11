import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    status: 'In Progress',
    title: 'LMS Microservices Platform',
    subtitle: 'Backend — Code Way Internship Project',
    description:
      'Production-grade Learning Management System built as a microservices architecture at Code Way. I personally contributed ~50% of all services — including Identity, Course, Certificate generation, Content management, and the currently active Payment Service. Real production code shipping to real users.',
    tech: ['.NET 9', 'ASP.NET Core', 'Microservices', 'SQL Server', 'MongoDB', 'Redis', 'JWT', 'OAuth2', 'SignalR', 'Docker'],
    github: '',
    live: '',
    note: 'Private repo — internship project at Code Way',
    arch: [
      { layer: 'API Gateway',          desc: 'Routing · Load balancing · Auth middleware',               color: '#e8ff00' },
      { layer: 'Identity Service',     desc: 'JWT · OAuth2 · Roles · User management',                   color: '#d4e800' },
      { layer: 'Course Service',       desc: 'Content · Modules · Lessons · Enrollment',                 color: '#aaa' },
      { layer: 'Certificate Service',  desc: 'PDF generation · Issue tracking · Verification',           color: '#888' },
      { layer: 'Payment Service 🔧',   desc: 'Payment gateway integration — currently in development',   color: '#e8ff00' },
      { layer: 'Data Layer',           desc: 'SQL Server · MongoDB · Redis cache',                       color: '#333' },
    ],
    highlights: [
      'Contributed ~50% of all microservices in the system',
      'Built Identity Service with JWT + OAuth2 and full role-based auth',
      'Payment Service: actively integrating third-party payment gateways',
      'Real-time features via SignalR and WebSockets across services',
      'Redis caching layer for high-performance data reads',
      'Production-level code reviewed and deployed at Code Way',
    ],
  },
  {
    number: '02',
    status: 'Complete',
    title: 'E-Commerce API',
    subtitle: 'Backend — Clean Architecture · ASP.NET Core',
    description:
      'Production-grade RESTful API built with strict Clean Architecture (Domain → Application → Infrastructure → API). Full authentication with JWT and Google OAuth2, role-based authorization, and complete e-commerce modules.',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server', 'Redis', 'JWT', 'Google OAuth2', 'Clean Architecture', 'AutoMapper', 'FluentValidation'],
    github: 'https://github.com/sefffo/ECommerce-Web-API',
    live: '',
    note: '',
    arch: [
      { layer: 'API Layer',            desc: 'Controllers · Middleware · Swagger · DI registration',    color: '#e8ff00' },
      { layer: 'Application Layer',    desc: 'Services · DTOs · AutoMapper · FluentValidation',         color: '#c8d400' },
      { layer: 'Infrastructure Layer', desc: 'EF Core · Redis · Repositories · External services',      color: '#888' },
      { layer: 'Domain Layer',         desc: 'Entities · Interfaces · Value objects · Business rules',  color: '#444' },
    ],
    highlights: [
      'JWT + Google OAuth2 with role-based authorization (Admin/Customer)',
      'Modules: Products, Categories, Cart, Orders, Payments, Delivery, Reviews',
      'Redis caching on product catalog for high-frequency reads',
      'EF Core with LINQ, migrations, pagination, filtering, sorting, search',
      'Global exception handler + structured Serilog logging + full Swagger docs',
    ],
  },
  {
    number: '03',
    status: 'Complete',
    title: 'E-Commerce Web App',
    subtitle: 'Frontend — Angular 17 · TypeScript · NgRx',
    description:
      'Full-featured online shopping platform with responsive UI, product catalog, cart, wishlist, and order management. Built with Angular 17 using lazy loading, NgRx state management, RxJS, and HTTP interceptors.',
    tech: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'Angular Material', 'HTTP Interceptors'],
    github: 'https://github.com/sefffo/E-commApp',
    live: '',
    note: '',
    arch: [
      { layer: 'Pages / Views',        desc: 'Product · Cart · Auth · Orders · Profile · Dashboard',   color: '#e8ff00' },
      { layer: 'State (NgRx)',         desc: 'Actions · Reducers · Selectors · Effects',                color: '#c8d400' },
      { layer: 'Services Layer',       desc: 'HTTP Interceptors · API Services · Route Guards',         color: '#888' },
      { layer: 'Shared Modules',       desc: 'Components · Pipes · Directives · Models · Utils',       color: '#444' },
    ],
    highlights: [
      'Lazy loading for all feature modules — fast initial bundle',
      'HTTP Interceptors for JWT token injection and centralized error handling',
      'NgRx store for cart, user session, and product state',
      'Reactive forms with full validation and UX feedback',
      'Responsive across all breakpoints with Tailwind + Angular Material',
    ],
  },
  {
    number: '04',
    status: 'Coming Soon',
    title: 'National University Portal',
    subtitle: 'Team Lead — Production System',
    description:
      'A production-level student portal system designed to modernize and transform university student portals across Egypt. Leading a development team through full SDLC — from requirements and architecture to delivery and deployment.',
    tech: ['ASP.NET Core', 'Clean Architecture', 'Microservices', 'Angular', 'SQL Server', 'Docker', 'Agile'],
    github: '',
    live: '',
    note: 'In active development — launching soon 🚀',
    arch: [
      { layer: 'Student Portal',       desc: 'Registration · Grades · Schedule · Documents',            color: '#e8ff00' },
      { layer: 'Admin Dashboard',      desc: 'Staff · Departments · Reports · Analytics',               color: '#c8d400' },
      { layer: 'API Layer',            desc: 'Microservices · Auth · Notifications · File handling',    color: '#888' },
      { layer: 'Infrastructure',       desc: 'SQL Server · Cloud hosting · CI/CD pipeline',             color: '#444' },
    ],
    highlights: [
      'Leading a full development team — architecture, sprints, code reviews',
      'Applying Agile methodologies: backlog, sprints, retrospectives',
      'Designed to scale across multiple Egyptian universities',
      'Full SDLC from requirements gathering to production deployment',
      'Will replace outdated student management systems currently in use',
    ],
  },
  {
    number: '05',
    status: 'Complete',
    title: 'This Portfolio',
    subtitle: 'Frontend — React · Three.js · GSAP',
    description:
      'Personal portfolio built from scratch with React, TypeScript, Three.js (R3F), GSAP scroll animations, and Lenis smooth scroll. Editorial black & white design with 3D scenes, grain texture overlay, and Tailwind v4.',
    tech: ['React', 'TypeScript', 'Three.js', 'R3F', 'GSAP', 'Lenis', 'Tailwind v4', 'React Router v7'],
    github: 'https://github.com/sefffo/saif-portfolio',
    live: '',
    note: '',
    arch: [
      { layer: 'Pages',                desc: 'Home · About · Skills · Projects · Contact',              color: '#e8ff00' },
      { layer: 'Canvas (R3F)',         desc: 'HeroScene · FloatingParticles · SkillsCube',              color: '#c8d400' },
      { layer: 'Animations',          desc: 'GSAP ScrollTrigger · Framer Motion · Lenis',              color: '#888' },
      { layer: 'Styling',             desc: 'Tailwind v4 · CSS Variables · Grain overlay',             color: '#444' },
    ],
    highlights: [
      '3D distorted sphere with Three.js MeshDistortMaterial + floating particles',
      'GSAP ScrollTrigger for per-section scroll-in animations',
      'Lenis smooth scroll synced with GSAP ticker for perfect timing',
      'React Router v7 multi-page SPA with page transition animations',
      'Mobile-responsive with full-screen overlay hamburger nav',
    ],
  },
]

const statusColor: Record<string, string> = {
  'In Progress': '#e8ff00',
  'Complete':    '#4ade80',
  'Coming Soon': '#818cf8',
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.proj-header', { y: 40, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out' })
    gsap.from('.project-block', {
      y: 70, opacity: 0, stagger: 0.15, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-list', start: 'top 82%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-32 pb-28 px-8 md:px-16 lg:px-24 page-enter">
      <p className="proj-header section-label mb-5">003 / Projects</p>
      <h1 className="proj-header text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-5">
        Selected<br /><span className="text-[#e8ff00]">Work.</span>
      </h1>
      <p className="proj-header text-[#444] text-sm mb-20 max-w-xl leading-relaxed">
        Real systems with real architecture — from internship production code to solo projects.
        Every repo listed has a GitHub link. Every unlisted project has a reason.
      </p>

      <div className="projects-list flex flex-col gap-28">
        {projects.map((project) => (
          <div key={project.number} className="project-block">
            {/* Divider with number */}
            <div className="flex items-center gap-5 mb-10">
              <span className="text-[#1a1a1a] font-black text-6xl leading-none">{project.number}</span>
              <div className="flex-1 h-px bg-[#1a1a1a]" />
              <span
                className="text-[9px] tracking-[0.35em] uppercase px-3 py-1.5 border"
                style={{ color: statusColor[project.status], borderColor: `${statusColor[project.status]}33` }}
              >
                {project.status}
              </span>
            </div>

            {/* Title row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-1">{project.title}</h2>
                <p className="text-[10px] tracking-[0.3em] text-[#444] uppercase">{project.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] tracking-[0.25em] uppercase border border-[#2a2a2a] text-[#777] px-4 py-2.5 hover:border-white hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] tracking-[0.25em] uppercase border border-[#e8ff00] text-[#e8ff00] px-4 py-2.5 hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
                  >
                    Live ↗
                  </a>
                )}
                {project.note && (
                  <span className="text-[10px] tracking-[0.2em] text-[#333] border border-[#1a1a1a] px-4 py-2.5 italic">
                    {project.note}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left — description + highlights + tags */}
              <div className="lg:col-span-3">
                <p className="text-[#555] text-sm leading-[1.9] mb-8">{project.description}</p>

                <p className="text-[10px] tracking-[0.4em] uppercase text-[#2a2a2a] mb-5">Key Features</p>
                <ul className="flex flex-col gap-3 mb-10">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4 text-sm text-[#4a4a4a] leading-[1.8]">
                      <span className="text-[#e8ff00] shrink-0 mt-1">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] tracking-[0.25em] uppercase border border-[#1a1a1a] text-[#2e2e2e] px-3 py-1.5 hover:border-[#333] hover:text-[#555] transition-all duration-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Architecture diagram */}
              <div className="lg:col-span-2">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#2a2a2a] mb-5">Architecture</p>
                <div className="flex flex-col gap-1.5">
                  {project.arch.map((layer, i) => (
                    <div
                      key={layer.layer}
                      className="relative border border-[#151515] p-4 hover:border-[#222] transition-all duration-300 group overflow-hidden"
                    >
                      {/* Left accent bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{ background: layer.color }}
                      />
                      <div className="pl-4">
                        <p className="text-[12px] font-semibold mb-0.5" style={{ color: layer.color }}>
                          {layer.layer}
                        </p>
                        <p className="text-[11px] text-[#333]">{layer.desc}</p>
                      </div>
                      {/* Arrow connector */}
                      {i < project.arch.length - 1 && (
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#1a1a1a] text-[10px] z-10">↓</div>
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
