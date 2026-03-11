import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01', status: 'In Progress',
    title: 'National University Portal',
    subtitle: 'Team Lead · ASP.NET Core · Angular · Microservices',
    description: 'A production-level student portal system to modernize university portals across Egypt. I lead the full team through requirements, architecture, sprint planning, and deployment. Launching soon.',
    tech: ['ASP.NET Core','Clean Architecture','Microservices','Angular','SQL Server','Docker','JWT','Agile'],
    github: '', live: '', note: 'In active development — launching soon 🚀',
    arch: [
      { layer: 'Student Portal',    desc: 'Registration · Grades · Schedule · Documents', color: '#7c6aff' },
      { layer: 'Admin Dashboard',   desc: 'Staff · Departments · Reports · Analytics',     color: '#a78bfa' },
      { layer: 'Microservices API', desc: 'Auth · Notifications · Files · Academic data',  color: '#6b7280' },
      { layer: 'Infrastructure',    desc: 'SQL Server · Cloud hosting · CI/CD',            color: '#374151' },
    ],
    highlights: [
      'Leading full dev team — architecture, sprints, code reviews, delivery',
      'Designed to scale across multiple Egyptian universities',
      'Microservices backend with ASP.NET Core and Clean Architecture',
      'Full SDLC: requirements → design → implementation → QA → deployment',
    ],
  },
  {
    number: '02', status: 'In Progress',
    title: 'Microservices E-Commerce',
    subtitle: 'Backend · ASP.NET Core · Microservices Architecture',
    description: 'Full microservices e-commerce platform with .NET 9. Each domain is an independent service with its own database, communicating via message brokers and REST. Built with real-world architecture patterns.',
    tech: ['.NET 9','ASP.NET Core','Microservices','SQL Server','RabbitMQ','Redis','Docker','JWT','API Gateway','Clean Architecture'],
    github: 'https://github.com/sefffo/Micoservices-ECommerce-Project', live: '', note: '',
    arch: [
      { layer: 'API Gateway',      desc: 'Routing · Auth middleware · Load balancing',   color: '#7c6aff' },
      { layer: 'Identity Service', desc: 'JWT · OAuth2 · Roles · User management',       color: '#a78bfa' },
      { layer: 'Product Service',  desc: 'Catalog · Inventory · Pricing · Search',        color: '#6b7280' },
      { layer: 'Order Service',    desc: 'Orders · Cart · Checkout · Payments',           color: '#4b5563' },
      { layer: 'Message Bus',      desc: 'RabbitMQ · Async events · Service decoupling',  color: '#374151' },
      { layer: 'Data Layer',       desc: 'SQL Server · Redis cache · MongoDB',            color: '#1e2235' },
    ],
    highlights: [
      'Each service independently deployable with its own DB (Database-per-Service)',
      'API Gateway handles routing, rate limiting, and JWT validation',
      'Async inter-service communication via RabbitMQ',
      'Docker Compose for local orchestration of all services',
    ],
  },
  {
    number: '03', status: 'Complete',
    title: 'E-Commerce API + Dashboard',
    subtitle: 'Backend · ASP.NET Core · Clean Architecture · Admin Dashboard',
    description: 'Production-grade RESTful API with strict Clean Architecture. Full JWT + Google OAuth2 auth, role-based authorization, and a complete admin dashboard for products, orders, users, and analytics.',
    tech: ['ASP.NET Core','C#','EF Core','SQL Server','Redis','JWT','Google OAuth2','Clean Architecture','AutoMapper','FluentValidation'],
    github: 'https://github.com/sefffo/ECommerce.Web-API', live: '', note: '',
    arch: [
      { layer: 'API + Admin Dashboard', desc: 'Controllers · Swagger · Role-based views',         color: '#7c6aff' },
      { layer: 'Application Layer',     desc: 'Services · DTOs · AutoMapper · FluentValidation',  color: '#a78bfa' },
      { layer: 'Infrastructure Layer',  desc: 'EF Core · Redis · Repos · External services',      color: '#6b7280' },
      { layer: 'Domain Layer',          desc: 'Entities · Interfaces · Business rules',            color: '#374151' },
    ],
    highlights: [
      'JWT + Google OAuth2 with role-based auth (Admin / Customer)',
      'Modules: Products, Categories, Cart, Orders, Payments, Delivery, Reviews',
      'Admin dashboard — product management, order tracking, analytics',
      'Redis caching + Serilog logging + full Swagger docs',
    ],
  },
  {
    number: '04', status: 'In Progress',
    title: 'LMS Microservices Platform',
    subtitle: 'Backend — Code Way · .NET 9 · Microservices',
    description: 'Production LMS built as microservices at Code Way. Contributed ~50% of all services — Identity, Course, Certificate, Content, and active Payment Service integrating third-party gateways.',
    tech: ['.NET 9','ASP.NET Core','Microservices','SQL Server','MongoDB','Redis','JWT','OAuth2','SignalR','Docker'],
    github: '', live: '', note: 'Private repo — internship at Code Way',
    arch: [
      { layer: 'API Gateway',         desc: 'Routing · Load balancing · Auth middleware',      color: '#7c6aff' },
      { layer: 'Identity Service',    desc: 'JWT · OAuth2 · Roles · User management',          color: '#a78bfa' },
      { layer: 'Course Service',      desc: 'Content · Modules · Lessons · Enrollment',         color: '#6b7280' },
      { layer: 'Certificate Service', desc: 'PDF generation · Issue tracking',                  color: '#4b5563' },
      { layer: 'Payment Service 🔧',  desc: 'Gateway integration — in development',             color: '#7c6aff' },
      { layer: 'Data Layer',          desc: 'SQL Server · MongoDB · Redis',                      color: '#1e2235' },
    ],
    highlights: [
      'Contributed ~50% of all microservices in the system',
      'Built Identity Service with JWT + OAuth2 and full role-based auth',
      'Payment Service: actively integrating third-party payment gateways',
      'Real-time features via SignalR + WebSockets across services',
    ],
  },
  {
    number: '05', status: 'Complete',
    title: 'E-Commerce Web App',
    subtitle: 'Frontend — Angular 17 · TypeScript · NgRx',
    description: 'Full-featured Angular 17 shopping platform with NgRx state management, lazy loading, RxJS, HTTP interceptors, cart/wishlist/order management.',
    tech: ['Angular 17','TypeScript','RxJS','NgRx','Tailwind CSS','Angular Material','HTTP Interceptors'],
    github: 'https://github.com/sefffo/E-commApp', live: '', note: '',
    arch: [
      { layer: 'Pages / Views',  desc: 'Product · Cart · Auth · Orders · Profile',  color: '#7c6aff' },
      { layer: 'State (NgRx)',   desc: 'Actions · Reducers · Selectors · Effects',   color: '#a78bfa' },
      { layer: 'Services Layer', desc: 'HTTP Interceptors · API Services · Guards',  color: '#6b7280' },
      { layer: 'Shared Modules', desc: 'Components · Pipes · Directives · Models',  color: '#374151' },
    ],
    highlights: [
      'Lazy loading for all feature modules — fast initial bundle',
      'HTTP Interceptors for JWT injection and centralized error handling',
      'NgRx store for cart, user session, and product state',
      'Reactive forms with full validation and UX feedback',
    ],
  },
  {
    number: '06', status: 'Complete',
    title: 'This Portfolio',
    subtitle: 'Frontend — React · Three.js · GSAP',
    description: 'Personal portfolio built with React, TypeScript, Three.js (R3F), GSAP ScrollTrigger, and Lenis smooth scroll.',
    tech: ['React','TypeScript','Three.js','R3F','GSAP','Lenis','Tailwind v4','React Router v7'],
    github: 'https://github.com/sefffo/saif-portfolio', live: '', note: '',
    arch: [
      { layer: 'Pages',        desc: 'Home · About · Skills · Projects · Contact', color: '#7c6aff' },
      { layer: 'Canvas (R3F)', desc: 'HeroScene · FloatingParticles',               color: '#a78bfa' },
      { layer: 'Animations',   desc: 'GSAP ScrollTrigger · Lenis',                  color: '#6b7280' },
      { layer: 'Styling',      desc: 'Tailwind v4 · CSS Variables',                 color: '#374151' },
    ],
    highlights: [
      '3D distorted sphere with Three.js MeshDistortMaterial + floating particles',
      'GSAP ScrollTrigger for per-section scroll-in animations',
      'Floating tech chips with continuous GSAP loop animations',
    ],
  },
  {
    number: '07', status: 'Academic',
    title: 'RAID Storage Simulator',
    subtitle: 'University Project — Python · Systems',
    description: 'Simulates RAID 0, 1, and 5 with disk performance calculations, fault tolerance, read/write throughput analysis, and storage efficiency metrics.',
    tech: ['Python','Data Structures','Systems Design'],
    github: '', live: '', note: 'University academic project',
    arch: [
      { layer: 'RAID 0', desc: 'Striping — max performance, no redundancy',          color: '#7c6aff' },
      { layer: 'RAID 1', desc: 'Mirroring — full redundancy, 50% usable space',      color: '#6b7280' },
      { layer: 'RAID 5', desc: 'Striping + parity — balance of speed + fault tol.',  color: '#374151' },
    ],
    highlights: [
      'Simulates disk I/O, throughput calculations, and RAID parity logic',
      'RAID 5 parity computation using XOR logic across drive stripes',
      'Visual comparison of storage efficiency per RAID configuration',
    ],
  },
  {
    number: '08', status: 'Academic',
    title: 'Tic-Tac-Toe AI',
    subtitle: 'University Project — Algorithms · C++',
    description: 'Tic-Tac-Toe with three AI implementations: Minimax, Alpha-Beta pruning optimization, and a heuristic-based greedy agent. Demonstrates algorithm performance comparison.',
    tech: ['C++','Minimax','Alpha-Beta Pruning','AI Algorithms'],
    github: '', live: '', note: 'University academic project',
    arch: [
      { layer: 'Minimax',          desc: 'Full game tree search — optimal but slow',      color: '#7c6aff' },
      { layer: 'Alpha-Beta',       desc: 'Pruning on Minimax — same result, 2-3× faster', color: '#6b7280' },
      { layer: 'Greedy Heuristic', desc: 'Fast approximate agent — good, not perfect',     color: '#374151' },
    ],
    highlights: [
      'Minimax guarantees optimal play by exhaustively exploring the game tree',
      'Alpha-Beta pruning cuts branches that cannot affect final decision',
      'Performance benchmark comparing all three agents across board states',
    ],
  },
]

const statusColor: Record<string, string> = {
  'In Progress': '#7c6aff',
  'Complete':    '#22c55e',
  'Academic':    '#6b7280',
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.ph', { y: 40, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out' })
    gsap.from('.pb', {
      y: 60, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.pl', start: 'top 82%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="page-wrapper pb-28 page-enter">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16">

        <p className="ph section-label mb-4">003 / Projects</p>
        <h1 className="ph text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
          Selected <span className="grad-text">Work.</span>
        </h1>
        <p className="ph text-[#6b7280] text-sm mb-20 max-w-xl leading-relaxed">
          Real systems with real architecture — production internship code, solo projects, and academic work.
        </p>

        <div className="pl flex flex-col gap-28">
          {projects.map((p) => (
            <div key={p.number} className="pb">
              <div className="flex items-center gap-5 mb-10">
                <span className="text-[#1e2235] font-black text-6xl leading-none">{p.number}</span>
                <div className="flex-1 h-px bg-[#1e2235]" />
                <span className="text-[9px] tracking-[0.35em] uppercase px-3 py-1.5 border rounded"
                  style={{ color: statusColor[p.status], borderColor: `${statusColor[p.status]}33` }}>
                  {p.status}
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-1">{p.title}</h2>
                  <p className="text-[10px] tracking-[0.3em] text-[#374151] uppercase">{p.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="text-[10px] tracking-[0.2em] uppercase border border-[#1e2235] text-[#6b7280] px-4 py-2.5 hover:border-[#7c6aff] hover:text-[#a78bfa] transition-all duration-300 flex items-center gap-2 rounded">
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-[10px] tracking-[0.2em] uppercase bg-[#7c6aff] text-white px-4 py-2.5 hover:bg-[#6c5ce7] transition-all duration-300 rounded">
                      Live ↗
                    </a>
                  )}
                  {p.note && (
                    <span className="text-[10px] tracking-[0.2em] text-[#374151] border border-[#1e2235] px-4 py-2.5 italic rounded">{p.note}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3">
                  <p className="text-[#4b5563] text-sm leading-[1.9] mb-8">{p.description}</p>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#272d42] mb-5">Key Features</p>
                  <ul className="flex flex-col gap-3 mb-10">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-sm text-[#4b5563] leading-[1.8]">
                        <span className="text-[#7c6aff] shrink-0 mt-1">→</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#272d42] mb-5">Architecture</p>
                  <div className="flex flex-col gap-1.5">
                    {p.arch.map((layer, i) => (
                      <div key={layer.layer}
                        className="relative card p-4 rounded hover:border-[#7c6aff]/30 transition-all duration-300 group overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                          style={{ background: layer.color }} />
                        <div className="pl-4">
                          <p className="text-[12px] font-semibold mb-0.5" style={{ color: layer.color }}>{layer.layer}</p>
                          <p className="text-[11px] text-[#374151]">{layer.desc}</p>
                        </div>
                        {i < p.arch.length - 1 && (
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#1e2235] text-[10px] z-10">↓</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="glow-line mt-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
