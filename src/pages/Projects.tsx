import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01', status: 'In Progress',
    title: 'National University Portal',
    subtitle: 'Team Lead & Backend Developer · ASP.NET Core · Microservices · Angular',
    description: 'A production-level student portal system to modernize university management across Egypt. I lead the full team as both Team Lead and Backend Developer — handling architecture, sprint planning, task delegation, and backend implementation simultaneously. Launching soon.',
    tech: ['ASP.NET Core', 'Clean Architecture', 'Microservices', 'Angular', 'SQL Server', 'Docker', 'JWT', 'GitHub Actions', 'Jenkins', 'Jira', 'Slack', 'Agile / Scrum', 'SDLC'],
    github: '', live: '', note: 'In active development — launching soon 🚀',
    arch: [
      { layer: 'Student Portal', desc: 'Registration · Grades · Schedule · Documents', color: '#8b7cf8' },
      { layer: 'Admin Dashboard', desc: 'Staff · Departments · Reports · Analytics', color: '#c4b5fd' },
      { layer: 'Microservices API', desc: 'Auth · Notifications · Files · Academic Data', color: '#8b84a3' },
      { layer: 'CI/CD Pipeline', desc: 'GitHub Actions · Jenkins · Docker', color: '#5a5473' },
      { layer: 'Infrastructure', desc: 'SQL Server · Cloud Hosting · DevOps', color: '#4e4a6a' },
    ],
    highlights: [
      'Dual role: Team Lead AND Backend Developer — architecting and implementing simultaneously',
      'Full SDLC managed via Jira (sprints, backlog), Slack (team comms), GitHub Actions + Jenkins (CI/CD)',
      'Microservices backend with ASP.NET Core + Clean Architecture designed to scale across Egyptian universities',
      'Sprint-based Agile delivery: backlog grooming → sprint planning → dev → review → retrospective',
    ],
  },
  {
    number: '02', status: 'In Progress',
    title: 'LMS Microservices (Code Way)',
    subtitle: 'Backend Intern · .NET 9 · Microservices · Production',
    description: 'Production LMS built as microservices at Code Way. Contributed ~50% of all services — Identity, Course, Certificate, Content, and Payment Service. Real system serving real users.',
    tech: ['.NET 9', 'ASP.NET Core', 'Microservices', 'SQL Server', 'MongoDB', 'Redis', 'JWT', 'OAuth2', 'SignalR', 'Docker'],
    github: '', live: '', note: 'Private repo — internship at Code Way',
    arch: [
      { layer: 'API Gateway', desc: 'Routing · Load balancing · Auth middleware', color: '#8b7cf8' },
      { layer: 'Identity Service', desc: 'JWT · OAuth2 · Roles · User management', color: '#c4b5fd' },
      { layer: 'Course Service', desc: 'Content · Modules · Lessons · Enrollment', color: '#8b84a3' },
      { layer: 'Certificate Service', desc: 'PDF generation · Issue tracking', color: '#5a5473' },
      { layer: 'Payment Service 🔧', desc: 'Gateway integration — in development', color: '#8b7cf8' },
      { layer: 'Data Layer', desc: 'SQL Server · MongoDB · Redis', color: '#2c2a45' },
    ],
    highlights: [
      'Contributed ~50% of all microservices in the live production system',
      'Identity Service: JWT + OAuth2 + full role-based auth (Admin, Instructor, Student)',
      'Redis caching on hot paths; SignalR for real-time course notifications',
      'Payment Service: actively integrating third-party payment gateways (Paymob)',
      'Full SDLC managed via Azure DevOps (sprints, backlog), Slack (team comms), GitHub Actions + Jenkins (CI/CD)',
      'Microservices backend with ASP.NET Core + Clean Architecture designed to scale',
      'Sprint-based Agile delivery: backlog grooming → sprint planning → dev → review → retrospective',
    ],
  },
  {
    number: '03', status: 'Complete',
    title: 'E-Commerce API + Dashboard',
    subtitle: 'Backend · ASP.NET Core · Clean Architecture · Admin Dashboard',
    description: 'Production-grade RESTful API with strict Clean Architecture (Domain, Application, Infrastructure, API layers). Full JWT + Google OAuth2 auth, role-based authorization, and a complete admin dashboard for products, orders, users, and analytics.',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server', 'Redis', 'JWT', 'Google OAuth2', 'Clean Architecture', 'AutoMapper', 'FluentValidation', 'Serilog', 'LINQ'],
    github: 'https://github.com/sefffo/ECommerce.Web-API', live: '', note: '',
    arch: [
      { layer: 'API + Admin Dashboard', desc: 'Controllers · Swagger · Role-based views', color: '#8b7cf8' },
      { layer: 'Application Layer', desc: 'Services · DTOs · AutoMapper · FluentValidation', color: '#c4b5fd' },
      { layer: 'Infrastructure Layer', desc: 'EF Core · Redis · Repos · External services', color: '#8b84a3' },
      { layer: 'Domain Layer', desc: 'Entities · Interfaces · Business rules', color: '#4e4a6a' },
    ],
    highlights: [
      'JWT + Google OAuth2 with role-based auth (Admin / Customer)',
      'Modules: Products, Categories, Cart, Orders, Payments, Delivery, Reviews, Admin',
      'Redis caching + EF Core LINQ + Serilog structured logging + Swagger docs',
      'Pagination, filtering, sorting, search, global exception handling',
    ],
  },
  {
    number: '04', status: 'Complete',
    title: 'E-Commerce Web App',
    subtitle: 'Frontend — Angular 17 · TypeScript · NgRx',
    description: 'Full-featured Angular 17 shopping platform with NgRx state management, lazy loading, RxJS, HTTP interceptors, cart/wishlist/order management connected to the .NET backend.',
    tech: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'Angular Material', 'Bootstrap', 'Flowbite', 'HTTP Interceptors', 'Lazy Loading'],
    github: 'https://github.com/sefffo/E-commApp', live: '', note: '',
    arch: [
      { layer: 'Pages / Views', desc: 'Product · Cart · Auth · Orders · Profile', color: '#8b7cf8' },
      { layer: 'State (NgRx)', desc: 'Actions · Reducers · Selectors · Effects', color: '#c4b5fd' },
      { layer: 'Services Layer', desc: 'HTTP Interceptors · API Services · Guards', color: '#8b84a3' },
      { layer: 'Shared Modules', desc: 'Components · Pipes · Directives · Models', color: '#4e4a6a' },
    ],
    highlights: [
      'Lazy loading for all feature modules — fast initial bundle',
      'HTTP Interceptors for JWT injection and centralized error handling',
      'NgRx store for cart, user session, and product state',
      'Reactive forms with full Angular validation and UX feedback',
    ],
  },
  {
    number: '05', status: 'Complete',
    title: 'This Portfolio',
    subtitle: 'Frontend — React 19 · TypeScript · Three.js · GSAP · Tailwind v4',
    description: "You're looking at it. Built from scratch with React 19, TypeScript, Three.js via React Three Fiber, GSAP ScrollTrigger animations, smooth scrolling with Lenis, Tailwind v4, and React Router v7. Every section is hand-crafted — no templates, no UI kits.",
    tech: ['React 19', 'TypeScript', 'Three.js', 'React Three Fiber', '@react-three/drei', 'GSAP', 'ScrollTrigger', 'Lenis', 'Tailwind v4', 'React Router v7', 'EmailJS', 'Vite', 'CSS Variables'],
    github: 'https://github.com/sefffo/saif-portfolio', live: '', note: '',
    arch: [
      { layer: 'Pages (React Router v7)', desc: 'Home · About · Skills · Projects · Contact', color: '#8b7cf8' },
      { layer: '3D Canvas (R3F + drei)', desc: 'MeshDistortMaterial sphere · FloatingParticles · OrbitControls', color: '#c4b5fd' },
      { layer: 'Animations (GSAP)', desc: 'ScrollTrigger · stagger reveals · page transitions · GSAP timeline', color: '#60d8f7' },
      { layer: 'Smooth Scroll (Lenis)', desc: 'Native-feel inertia scrolling wired to GSAP ticker', color: '#22c55e' },
      { layer: 'Interactive Keyboard', desc: 'CSS 3D keyboard · perspective tilt · devicon icons · hover skill info', color: '#f59e0b' },
      { layer: 'Contact (EmailJS)', desc: 'Real email delivery · paper plane animation · floating label inputs', color: '#ec4899' },
      { layer: 'Styling (Tailwind v4)', desc: 'CSS custom props · dark theme · responsive · custom scrollbar', color: '#4e4a6a' },
    ],
    highlights: [
      'Built 100% from scratch — zero templates, zero component libraries',
      '3D distorted sphere with Three.js MeshDistortMaterial + 120 floating particles wired to pointer',
      'GSAP ScrollTrigger on every section: staggered reveals, scale-ins, page-enter transitions',
      "Lenis smooth scroll integrated directly into GSAP's RAF ticker for frame-perfect sync",
      'Interactive CSS 3D keyboard on Skills page — 32 keys with real tech icons, mouse parallax tilt, press animation',
      'Animated paper plane send button — GSAP timeline fires on every form submit',
      'Floating label inputs with purple glow underline focus state',
      'Dark-only theme with CSS variables, custom 3px scrollbar, and ::selection accent',
      'Zero UI kit dependency — every component written by hand in TypeScript',
    ],
  },
  {
    number: '06', status: 'Academic',
    title: 'Microservices E-Commerce Architecture',
    subtitle: 'Personal · .NET 9 · Microservices',
    description: 'A deep-dive microservices e-commerce system where each domain is an independent service with its own database, communicating via RabbitMQ and REST. Built to study real-world distributed systems patterns.',
    tech: ['.NET 9', 'ASP.NET Core', 'Microservices', 'SQL Server', 'RabbitMQ', 'Redis', 'Docker', 'JWT', 'API Gateway', 'Clean Architecture'],
    github: 'https://github.com/sefffo/Micoservices-ECommerce-Project', live: '', note: '',
    arch: [
      { layer: 'API Gateway', desc: 'Routing · Auth middleware · Load balancing', color: '#8b7cf8' },
      { layer: 'Identity Service', desc: 'JWT · OAuth2 · Roles · User management', color: '#c4b5fd' },
      { layer: 'Product Service', desc: 'Catalog · Inventory · Pricing · Search', color: '#8b84a3' },
      { layer: 'Order Service', desc: 'Orders · Cart · Checkout · Payments', color: '#5a5473' },
      { layer: 'Message Bus', desc: 'RabbitMQ · Async events · Service decoupling', color: '#4e4a6a' },
      { layer: 'Data Layer', desc: 'SQL Server · Redis · MongoDB', color: '#2c2a45' },
    ],
    highlights: [
      'Database-per-Service pattern — each service independently deployable',
      'API Gateway handles routing, rate limiting, and JWT validation',
      'Async inter-service communication via RabbitMQ event bus',
      'Docker Compose for full local orchestration',
    ],
  },
  {
    number: '07', status: 'Academic',
    title: 'RAID Storage Simulator',
    subtitle: 'University Project — Python · Systems',
    description: 'Simulates RAID 0, 1, and 5 with disk performance calculations, fault tolerance analysis, read/write throughput, and storage efficiency metrics. Built as a university OS/systems project.',
    tech: ['Python', 'Data Structures', 'Systems Design', 'Algorithms'],
    github: '', live: '', note: 'University academic project',
    arch: [
      { layer: 'RAID 0', desc: 'Striping — max performance, no redundancy', color: '#8b7cf8' },
      { layer: 'RAID 1', desc: 'Mirroring — full redundancy, 50% usable space', color: '#8b84a3' },
      { layer: 'RAID 5', desc: 'Striping + parity — balance of speed + fault tolerance', color: '#4e4a6a' },
    ],
    highlights: [
      'XOR-based parity computation for RAID 5 across drive stripes',
      'Read/write throughput simulation per RAID configuration',
      'Visual comparison of storage efficiency and fault tolerance tradeoffs',
    ],
  },
  {
    number: '08', status: 'Academic',
    title: 'Tic-Tac-Toe AI',
    subtitle: 'University Project — Algorithms · C++',
    description: 'Tic-Tac-Toe with three AI implementations: Minimax (optimal), Alpha-Beta pruning (2-3x faster), and a heuristic greedy agent. Demonstrates algorithm performance comparison.',
    tech: ['C++', 'Minimax', 'Alpha-Beta Pruning', 'AI Algorithms', 'Recursion'],
    github: '', live: '', note: 'University academic project',
    arch: [
      { layer: 'Minimax', desc: 'Full game tree — optimal but slow', color: '#8b7cf8' },
      { layer: 'Alpha-Beta', desc: 'Pruned Minimax — same result, 2-3× faster', color: '#8b84a3' },
      { layer: 'Greedy Heuristic', desc: 'Fast approximate agent — good, not perfect', color: '#4e4a6a' },
    ],
    highlights: [
      'Minimax guarantees optimal play by exhaustively exploring the full game tree',
      'Alpha-Beta pruning cuts branches that cannot affect the final decision',
      'Performance benchmark comparing nodes visited across all three agents',
    ],
  },
]

const statusColor: Record<string, string> = {
  'In Progress': '#8b7cf8',
  'Complete':    '#22c55e',
  'Academic':    '#8b84a3',
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
    <section ref={ref} className="page-wrapper pb-36 page-enter">
      <div className="pt-20">

        <p className="ph section-label mb-5">003 / Projects</p>
        <h1 className="ph text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-6">
          Selected <span className="grad-text">Work.</span>
        </h1>
        <p className="ph text-[var(--muted)] text-base mb-24 max-w-2xl leading-relaxed">
          Real systems with real architecture — production internship code, personal projects, and academic work.
        </p>

        <div className="pl flex flex-col gap-32">
          {projects.map((p) => (
            <div key={p.number} className="pb">

              {/* number + divider + status */}
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[var(--border2)] font-black text-7xl leading-none select-none">{p.number}</span>
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-[10px] tracking-[0.35em] uppercase px-4 py-2 border rounded-full"
                  style={{ color: statusColor[p.status], borderColor: `${statusColor[p.status]}44` }}>
                  {p.status}
                </span>
              </div>

              {/* title + links */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{p.title}</h2>
                  <p className="text-[11px] tracking-[0.3em] text-[var(--dim)] uppercase">{p.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="text-[11px] tracking-[0.2em] uppercase border border-[var(--border)] text-[var(--muted)] px-5 py-2.5 hover:border-[var(--accent)] hover:text-[var(--accent2)] transition-all duration-300 flex items-center gap-2 rounded">
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-[11px] tracking-[0.2em] uppercase bg-[var(--accent)] text-white px-5 py-2.5 hover:opacity-90 transition-all duration-300 rounded">
                      Live ↗
                    </a>
                  )}
                  {p.note && (
                    <span className="text-[11px] tracking-[0.2em] text-[var(--dim)] border border-[var(--border)] px-5 py-2.5 italic rounded">{p.note}</span>
                  )}
                </div>
              </div>

              {/* content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                {/* left: description + highlights + tags */}
                <div className="lg:col-span-3">
                  <p className="text-[var(--body)] text-base leading-[1.9] mb-10">{p.description}</p>
                  <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--dim)] mb-6">Key Features</p>
                  <ul className="flex flex-col gap-4 mb-12">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-[var(--body)] text-[15px] leading-[1.8]">
                        <span className="text-[var(--accent)] shrink-0 mt-0.5">→</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2.5">
                    {p.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* right: architecture */}
                <div className="lg:col-span-2">
                  <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--dim)] mb-6">Architecture</p>
                  <div className="flex flex-col gap-2">
                    {p.arch.map((layer, i) => (
                      <div key={layer.layer}
                        className="relative card p-5 rounded-lg hover:border-[var(--accent)]/30 transition-all duration-300 group overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-50 group-hover:opacity-100 transition-opacity"
                          style={{ background: layer.color }} />
                        <div className="pl-5">
                          <p className="text-[13px] font-semibold mb-1" style={{ color: layer.color }}>{layer.layer}</p>
                          <p className="text-[12px] text-[var(--muted)]">{layer.desc}</p>
                        </div>
                        {i < p.arch.length - 1 && (
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[var(--border2)] text-[10px] z-10">↓</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glow-line mt-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
